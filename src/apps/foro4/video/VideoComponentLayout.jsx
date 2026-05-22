import { useEffect, useContext } from "react";
import { Outlet, useLocation, useSearchParams } from "react-router";
import { useVideoPlayer } from "./hooks/useVideoPlayer";
import { PLAYER, MODE } from "./const/Videos";
import { VideoPlayerContext } from "./context/VideoPlayerContext";
import portadas from "../data/videos/portadas.json";
import masterplanRDE from "../data/videos/masterplan-rde.json";
import masterplanVTI from "../data/videos/masterplan-vti.json";

// PORTADAS
const VIDEOS_MAP = {
  "/foro4": portadas.home,
  "/foro4/contacto": portadas.home,
  "/foro4/masterplan/locales-disponibles": portadas.locales,

  // Rotación de exteriores
  "/foro4/masterplan": masterplanRDE,
  "/foro4/masterplan/vista-cenital": masterplanRDE,

  // Masterplan VTI
  "/foro4/masterplan/video-tour": masterplanVTI,
};
const EMPTY_JSON = {
  videos: [{ type: "idle", position: 1, src: "" }],
  navigation: "unidirectional",
  loop: false,
};

// Masterplan VTI
const VENTAJA_TO_POSITION = {
  ubicacion: 1,
  "motor-lobby": 2,
  "area-central": 3,
  "zona-de-comida": 4,
  "area-de-juegos": 5,
  "terraza-techada": 6,
  "edificio-oficinas": 7,
  "hotel-5-estrellas": 8,
  "estacionamiento-subterraneo": 9,
  "locales-disponibles": 10,
};
const POSITION_TO_VENTAJA = Object.fromEntries(
  Object.entries(VENTAJA_TO_POSITION).map(([k, v]) => [v, k]),
);

export default function VideoComponentLayout() {
  const { setIdle, setTransitioning } = useContext(VideoPlayerContext);
  const { pathname } = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const position = searchParams.get("position");
  const ventaja = searchParams.get("ventaja");

  const videosRunning = VIDEOS_MAP[pathname];

  const hasVideo = videosRunning ? true : false;

  const { videoRefA, videoRefB, loadPortada, goTo, activePlayer, modeState } =
    useVideoPlayer({
      json: videosRunning ?? EMPTY_JSON,
      onPositionChange: (pos) => {
        if (pathname.includes("/foro4/masterplan/video-tour")) {
          setSearchParams({ ventaja: POSITION_TO_VENTAJA[pos] });
          return;
        }
      },
    });

  // Masterplan RDE Position
  useEffect(() => {
    if (pathname === "/foro4/masterplan/vista-cenital") {
      goTo(5);
    } else if (pathname === "/foro4/masterplan") {
      goTo(Number(position));
    }
  }, [position, pathname]);

  // Masterplan VTI ventajas
  useEffect(() => {
    if (!ventaja) return;
    const mappedPositon = VENTAJA_TO_POSITION[ventaja];
    goTo(ventaja ? mappedPositon : 1);
  }, [ventaja]);

  // Portada: Manejo de portadas o limpiar componentes al cambiar de ruta sin video
  useEffect(() => {
    const cleanVideo = (video) => {
      if (!video) return;
      video.pause();
      video.removeAttribute("src");
      video.load();
    };

    if (!hasVideo) {
      cleanVideo(videoRefA.current);
      cleanVideo(videoRefB.current);

      setIdle();
      return;
    }

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
        className={`fixed w-full max-w-full h-full object-cover top-0 left-0 ${
          activePlayer === PLAYER.A ? "z-10" : "z-0"
        }`}
      ></video>

      <video
        ref={videoRefB}
        muted
        playsInline
        className={`fixed w-full max-w-full h-full object-cover top-0 left-0 ${
          activePlayer === PLAYER.B ? "z-10" : "z-0"
        }`}
      ></video>

      <div className="relative z-20">
        <Outlet />
      </div>
    </>
  );
}
