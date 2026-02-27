import { useRef, useState } from "react";
import { MODE, PLAYER } from "../const/Videos";

export const useVideoPlayer = ({ json }) => {
  const videoRefA = useRef(null);
  const videoRefB = useRef(null);

  const currentPositionRef = useRef(null);
  const targetPositionRef = useRef(null);
  const mode = useRef(MODE.IDLE);

  // Para decidir cual componenete <video/> mostrar, con ref no se actualiza
  const [activePlayer, setActivePlayer] = useState(PLAYER.A);

  const { videos } = json;

  const goTo = (position) => {
    if (mode.current === MODE.TRANSITIONING) return;

    targetPositionRef.current = position;
    const diff = position - currentPositionRef.current;

    const currentIndex = videos.findIndex(
      (video) => video.position === currentPositionRef.current,
    );
    const targetVideo = videos.find((video) => video.position === position);

    // Cuando hay refresh o primera vez cargando
    if (
      !currentPositionRef.current ||
      currentPositionRef.current === position
    ) {
      setActivePlayer(PLAYER.A);
      currentPositionRef.current = position;
      targetPositionRef.current = null;
      videoRefA.current.src = targetVideo.src;
      videoRefA.current.load();
      videoRefA.current.play();
      videoRefB.current.src = null;
      return;
    }

    // Next with transition
    if (diff === 1) {
      const transitionSource = videos[currentIndex + 1].next;
      videoRefB.current.src = transitionSource;
      mode.current = MODE.TRANSITIONING;
      setActivePlayer(PLAYER.B);

      setTimeout(() => {
        targetPositionRef.current = null;
        currentPositionRef.current = position;
        videoRefA.current.src = targetVideo.src;
        videoRefA.current.load();
        videoRefA.current.play();
        videoRefB.current.src = null;

        mode.current = MODE.IDLE;
        setActivePlayer(PLAYER.A);
      }, 1500);
    }

    // Back with transition
    if (diff === -1) {
      const transitionSource = videos[currentIndex - 1].back;
      videoRefB.current.src = transitionSource;
      mode.current = MODE.TRANSITIONING;
      setActivePlayer(PLAYER.B);

      setTimeout(() => {
        targetPositionRef.current = null;
        currentPositionRef.current = position;
        videoRefA.current.src = targetVideo.src;
        videoRefA.current.load();
        videoRefA.current.play();
        videoRefB.current.src = null;
        mode.current = MODE.IDLE;
        setActivePlayer(PLAYER.A);
      }, 1500);
    }

    if (diff > 1 || diff < -1) {
      // Saltar timeout (simulando)
      setActivePlayer(PLAYER.A);
      targetPositionRef.current = null;
      currentPositionRef.current = position;
      videoRefA.current.src = targetVideo.src;
      videoRefA.current.load();
      videoRefA.current.play();
      videoRefB.current.src = null;
      return;
    }
  };

  return {
    videoRefA,
    videoRefB,
    goTo,
    currentPositionRef,
    targetPositionRef,
    mode,
    activePlayer,
  };
};
