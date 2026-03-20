import { useEffect } from "react";
import { useContext } from "react";
import { Outlet } from "react-router";
import { useVideoPlayer } from "../hooks/useVideoPlayer";
import { useLocation } from "react-router";
import portadas from "../../valoPortafolio/data/videos/portadas.json";
import { PLAYER, MODE } from "../const/Videos";
import { VideoPlayerPortafolioContext } from "../context/VideoPlayerPortafolioContext";

const VIDEOS_MAP = {
  // PORTADAS
  "/": portadas.home,
  "/nosotros": portadas.home,
};
const EMPTY_JSON = {
  videos: [{ type: "idle", position: 1, src: "" }],
  navigation: "unidirectional",
  loop: false,
};

export default function VideoComponentLayout() {
  const { setIdle, setTransitioning } = useContext(
    VideoPlayerPortafolioContext,
  );
  const { pathname } = useLocation();

  const videosRunning = VIDEOS_MAP[pathname];

  const { videoRefA, videoRefB, loadPortada, activePlayer, modeState } =
    useVideoPlayer({
      json: videosRunning ?? EMPTY_JSON,
    });

  // Portada: cargar video directamente sin pasar por el hook
  useEffect(() => {
    if (!videosRunning) return;
    if (videosRunning.type === "portada") {
      loadPortada(videosRunning);
      return;
    }
  }, [videosRunning]);

  useEffect(() => {
    if (modeState === MODE.IDLE) return setIdle();
    if (modeState === MODE.TRANSITIONING) return setTransitioning();
  }, [modeState]);

  return (
    <>
      <video
        ref={videoRefA}
        muted
        playsInline
        className={`absolute w-full max-w-full h-dvh object-cover top-0 left-0 ${
          activePlayer === PLAYER.A ? "z-10" : "z-0"
        }`}
      ></video>

      <video
        ref={videoRefB}
        muted
        playsInline
        className={`absolute w-full max-w-full h-dvh object-cover top-0 left-0 ${
          activePlayer === PLAYER.B ? "z-10" : "z-0"
        }`}
      ></video>

      <div className="relative z-20">
        <Outlet />
      </div>
    </>
  );
}
