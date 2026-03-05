import { AppContext } from "@/context/AppContext";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { useMap } from "@vis.gl/react-google-maps";
import { Link } from "react-router";
import { IS_DEVELOPMENT } from "@/config";
import { FILTERS_ID } from "@/apps/valoPortafolio/const/FiltersId";
import { PROYECTOS_NUEVO_LEON } from "@/apps/valoPortafolio/data/Valo/ProyectosNuevoLeon";
import AdvanceMarker from "@/components/shared/Map/AdvanceMarker";
import MontevoLandmark from "@/apps/valoPortafolio/assets/icons/proyectos/markers/MontevoLandmark.svg";
import TorrelunaLandmark from "@/apps/valoPortafolio/assets/icons/proyectos/markers/TorrelunaLandmark.svg";
import ValoParkApodacaLandmark from "@/apps/valoPortafolio/assets/icons/proyectos/markers/ValoParkApodacaLandmark.svg";
import ValoParkSantaCatarinaLandmark from "@/apps/valoPortafolio/assets/icons/proyectos/markers/ValoParkSantaCatarinaLandmark.svg";

const LANDMARK_MAP = {
  "valo-santa-catarina": ValoParkSantaCatarinaLandmark,
  "valo-apodaca": ValoParkApodacaLandmark,
  torreluna: TorrelunaLandmark,
  montevo: MontevoLandmark,
};

const CATEGORIES = {
  [FILTERS_ID.INDUSTRIAL]: ["valo-santa-catarina", "valo-apodaca", "torreluna"],
  [FILTERS_ID.RESIDENCIAL_VERTICAL]: ["montevo"],
  [FILTERS_ID.RESIDENCIAL_HORIZONTAL]: [],
  [FILTERS_ID.USOS_MIXTOS]: [],
};

export default function ContenidoNuevoLeon() {
  const { mapFilter } = useContext(AppContext);

  const filteredIds = mapFilter ? CATEGORIES[mapFilter] : [];

  return (
    <>
      {PROYECTOS_NUEVO_LEON.map((project) => {
        const imageUrl = LANDMARK_MAP[project.landmarkId];
        const isProjectVisible = mapFilter
          ? filteredIds.includes(project.landmarkId)
          : true;

        return (
          <AdvanceMarker
            key={project.landmarkId}
            position={project.coordinates}
          >
            <Link to={project.redirectTo}>
              <img
                src={imageUrl}
                width={project.size}
                height={project.size}
                className={`w-[clamp(45px,5.5vw,105px)] h-[clamp(55px,6.7vw,128px)] hover:cursor-pointer transition-all hover:scale-110 hover:drop-shadow-2xl hover:brightness-110 origin-bottom ${
                  isProjectVisible
                    ? "opacity-100 scale-100 pointer-events-auto animate-bounce-once"
                    : "opacity-0 scale-0 pointer-events-none"
                }`}
              />
            </Link>
          </AdvanceMarker>
        );
      })}

      {IS_DEVELOPMENT && <MapDebugger />}
    </>
  );
}

export function MapDebugger() {
  const map = useMap();
  const [info, setInfo] = useState({ zoom: null, lat: null, lng: null });

  useEffect(() => {
    if (!map) return;

    const update = () => {
      const center = map.getCenter();
      setInfo({
        zoom: map.getZoom(),
        lat: center?.lat().toFixed(6),
        lng: center?.lng().toFixed(6),
      });
    };

    update();
    const z = map.addListener("zoom_changed", update);
    const c = map.addListener("center_changed", update);
    return () => {
      z.remove();
      c.remove();
    };
  }, [map]);

  if (!map) return null;

  return (
    <>
      <div className="fixed bottom-4 right-4 z-[9999] bg-black/90 text-green-400 font-mono text-xl px-4 py-3 rounded-lg border border-green-400/20 shadow-xl pointer-events-none">
        <p className="text-white/40 uppercase tracking-widest text-[20px] mb-2">
          Map Debug
        </p>
        <div className="space-y-1">
          <p>
            🔍 zoom <span className="text-white ml-2">{info.zoom ?? "—"}</span>
          </p>
          <p>
            📍 lat <span className="text-white ml-2">{info.lat ?? "—"}</span>
          </p>
          <p>
            📍 lng <span className="text-white ml-2">{info.lng ?? "—"}</span>
          </p>
        </div>
      </div>
    </>
  );
}
