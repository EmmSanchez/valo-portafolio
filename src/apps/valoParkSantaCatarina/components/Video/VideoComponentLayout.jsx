import { Outlet, useSearchParams } from "react-router";
import { useLocation } from "react-router";
import { useRef, useEffect } from "react";
import portadas from "../../data/Videos/portadas.json";
import rde from "../../data/Videos/rde.json";
import { useVideoPlayer } from "../../hooks/useVideoPlayer";
import { PLAYER } from "../../const/Videos";
import { useContext } from "react";
import { VideoPlayerContext } from "../../context/VideoPlayerContext";

const videoMap = {
  "/valoPark/santaCatarina": portadas.informacion,
  "/valoPark/santaCatarina/informacion": portadas.informacion,
};

export default function VideoComponentLayout() {
  const { setIdle, setTransitioning } = useContext(VideoPlayerContext);
  const [searchParams] = useSearchParams();
  const position = searchParams.get("position");

  const { videoRefA, videoRefB, goTo, activePlayer } = useVideoPlayer({
    json: rde,
  });

  useEffect(() => {
    if (!position) return;
    goTo(Number(position));
  }, [position]);

  useEffect(() => {
    if (activePlayer === PLAYER.A) return setIdle();
    if (activePlayer === PLAYER.B) return setTransitioning();
  }, [activePlayer]);

  return (
    <>
      <video
        ref={videoRefA}
        muted
        playsInline
        className={`absolute w-full max-w-full h-dvh object-cover top-0 left-0`}
      ></video>

      <video
        ref={videoRefB}
        muted
        playsInline
        className={`absolute w-full max-w-full h-dvh object-cover top-0 left-0 ${activePlayer === PLAYER.B ? "opacity-100" : "opacity-0"}`}
      ></video>

      <Outlet />
    </>
  );
}
