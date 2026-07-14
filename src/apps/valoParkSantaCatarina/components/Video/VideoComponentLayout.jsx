import { useEffect } from "react";
import { useContext } from "react";
import { useVideoPlayer } from "../../hooks/useVideoPlayer";
import { Outlet, useSearchParams } from "react-router";
import { useLocation } from "react-router";
import portadas from "../../data/Videos/portadas.json";
import { PLAYER, MODE } from "../../const/Videos";
import { VideoPlayerContext } from "../../context/VideoPlayerContext";
import rde from "../../data/Videos/rde.json";
import vti_ventajas from "../../data/Videos/vti_ventajas.json";
import vti_nave12 from "../../data/Videos/vti_nave12.json";

const VENTAJA_TO_POSITION = {
  "ubicacion-privilegiada": 1,
  "frente-centro-comercial": 2,
  "acceso-controlado": 3,
  "espacio-industrial-clase-a": 4,
  "patio-de-maniobras": 5,
  "bodegas-listas": 6,
};
const POSITION_TO_VENTAJA = {
  1: "ubicacion-privilegiada",
  2: "frente-centro-comercial",
  3: "acceso-controlado",
  4: "espacio-industrial-clase-a",
  5: "patio-de-maniobras",
  6: "bodegas-listas",
};

const CARACTERISTICA_TO_POSITION = {
  "acceso-privado": 1,
  altura: 2,
  anden: 3,
  "rampa-montacargas": 4,
  "techo-termico": 5,
  area: 6,
  oficinas: 7,
};

const POSITION_TO_CARACTERISTICA = {
  1: "acceso-privado",
  2: "altura",
  3: "anden",
  4: "rampa-montacargas",
  5: "techo-termico",
  6: "area",
  7: "oficinas",
};

const VIDEOS_MAP = {
  // PORTADAS
  "/valoPark/santaCatarina": portadas.informacion,
  "/valoPark/santaCatarina/bienvenida": portadas.informacion,
  "/valoPark/santaCatarina/inicio": portadas.informacion,
  "/valoPark/santaCatarina/informacion": portadas.informacion,
  "/valoPark/santaCatarina/masterplan/proyecto": rde,
  "/valoPark/santaCatarina/masterplan/especificaciones":
    portadas.naves_industriales,
  "/valoPark/santaCatarina/masterplan/especificaciones/nave-11":
    portadas.nave_11,
  "/valoPark/santaCatarina/masterplan/especificaciones/nave-12":
    portadas.nave_12,
  "/valoPark/santaCatarina/disponibilidad": portadas.naves_industriales,

  // Video tours y recorridos
  "/valoPark/santaCatarina/masterplan": rde,
  "/valoPark/santaCatarina/masterplan/proyecto/video-tour": vti_ventajas,
  "/valoPark/santaCatarina/masterplan/especificaciones/video-tour": vti_nave12,
};
const EMPTY_JSON = {
  videos: [{ type: "idle", position: 1, src: "" }],
  navigation: "unidirectional",
  loop: false,
};

export default function VideoComponentLayout() {
  const { setIdle, setTransitioning } = useContext(VideoPlayerContext);
  const { pathname } = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const position = searchParams.get("position");
  const ventaja = searchParams.get("ventaja");
  const caracteristica = searchParams.get("caracteristica");

  const videosRunning = VIDEOS_MAP[pathname];

  const { videoRefA, videoRefB, goTo, loadPortada, activePlayer, modeState } =
    useVideoPlayer({
      json: videosRunning ?? EMPTY_JSON,
      onPositionChange: (pos) => {
        if (pathname.includes("proyecto")) {
          setSearchParams({ ventaja: POSITION_TO_VENTAJA[pos] });
          return;
        }

        if (pathname.includes("especificaciones")) {
          setSearchParams({ caracteristica: POSITION_TO_CARACTERISTICA[pos] });
          return;
        }

        // default → masterplan
        setSearchParams({ position: pos });
      },
    });

  // PARA MASTERPLAN Y VISTA CENITAL (QUE ES "MASTERPLAN/PROYECTO")
  useEffect(() => {
    if (!position) return;
    goTo(Number(position));
  }, [position]);

  useEffect(() => {
    if (pathname === "/valoPark/santaCatarina/masterplan/proyecto") {
      goTo(6);
    }
  }, [pathname]);

  // PARA VTI VENTAJAS
  useEffect(() => {
    if (!ventaja) return;
    const mappedPosition = VENTAJA_TO_POSITION[ventaja];
    if (!mappedPosition) return;
    goTo(mappedPosition);
  }, [ventaja]);

  // PARA VTI NAVES
  useEffect(() => {
    if (!caracteristica) return;
    const mappedPosition = CARACTERISTICA_TO_POSITION[caracteristica];
    if (!mappedPosition) return;
    goTo(mappedPosition);
  }, [caracteristica]);

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
