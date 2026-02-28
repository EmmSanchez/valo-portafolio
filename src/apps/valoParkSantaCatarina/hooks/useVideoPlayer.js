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

  // Función que recibe posición actual, objeto con url de transiciones (next, back), y el video final idle
  const transitionTo = (position, transitionSource, targetSrc) => {
    // Se asigna transición a B
    videoRefB.current.src = transitionSource;
    videoRefB.current.load();

    targetPositionRef.current = position;
    mode.current = MODE.TRANSITIONING;

    // Esperar a que sea reproducible
    videoRefB.current.oncanplay = () => {
      videoRefB.current.oncanplay = null; // limpiar listener

      videoRefB.current.play();

      // Esperar a que el PRIMER FRAME esté pintado antes de mostrar
      videoRefB.current.requestVideoFrameCallback(() => {
        requestAnimationFrame(() => {
          setActivePlayer(PLAYER.B);
        });

        // Ir cargando target al componente A
        videoRefA.current.src = targetSrc;
        videoRefA.current.load();
        // Cuando termine la transición sigue...
        videoRefB.current.onended = () => {
          videoRefB.current.onended = null; // limpiar listener
          targetPositionRef.current = null;
          currentPositionRef.current = position;
          mode.current = MODE.IDLE;

          if (videoRefA.current.readyState >= 3) {
            videoRefA.current.play();
            videoRefB.current.src = null; // limpar componente donde estaba la transición
            setActivePlayer(PLAYER.A);
          } else {
            videoRefA.current.oncanplay = () => {
              videoRefA.current.oncanplay = null;
              videoRefA.current.play();
              videoRefB.current.src = null; // limpar componente donde estaba la transición
              setActivePlayer(PLAYER.A);
            };
          }
        };
      });
    };
  };

  const loadDirect = (position, targetSrc) => {
    setActivePlayer(PLAYER.A);
    targetPositionRef.current = null;
    currentPositionRef.current = position;
    videoRefA.current.src = targetSrc;
    videoRefA.current.load();
    videoRefA.current.play();
    videoRefB.current.src = null;
  };

  const goTo = (position) => {
    // Evitar movimientos al momento de transición
    if (mode.current === MODE.TRANSITIONING) return;

    const targetVideo = videos.find((video) => video.position === position);

    const currentIndex = videos.findIndex(
      (video) => video.position === currentPositionRef.current,
    );
    const diff = position - currentPositionRef.current; // 1 next, -1 back

    // Cuando hay refresh o primera vez cargando
    if (
      !currentPositionRef.current ||
      currentPositionRef.current === position
    ) {
      return loadDirect(position, targetVideo.src);
    }

    // Transición a siguiente
    if (diff === 1) {
      transitionTo(position, videos[currentIndex + 1].next, targetVideo.src);
    }

    // Transición a anterior
    if (diff === -1) {
      transitionTo(position, videos[currentIndex - 1].back, targetVideo.src);
    }

    // Cuando las posiciones no son consecutivas
    if (diff > 1 || diff < -1) {
      return loadDirect(position, targetVideo.src);
    }
  };

  return {
    videoRefA,
    videoRefB,
    goTo,
    activePlayer,
  };
};
