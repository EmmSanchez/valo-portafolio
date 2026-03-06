import { AppContext } from "@/context/AppContext";
import { useContext } from "react";
import { useEffect } from "react";
import { useMap } from "@vis.gl/react-google-maps";
import ProjectMarker from "./ProjectMarker";
import MapDebugger from "./MapDebugger";
import { IS_DEVELOPMENT } from "@/config";
import { FILTERS_ID } from "@/apps/valoPortafolio/const/FiltersId";
import { PROYECTOS_NUEVO_LEON } from "@/apps/valoPortafolio/data/Valo/ProyectosNuevoLeon";
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

const MAP_DEFAULT_CAMERA = {
  zoom: 11,
  heading: 9,
  center: { lat: 25.756332, lng: -100.35618 },
};

export default function ContenidoNuevoLeon() {
  const map = useMap();
  const { mapFilter } = useContext(AppContext);

  const filteredIds = mapFilter ? CATEGORIES[mapFilter] : [];

  // Controlar el mapa
  useEffect(() => {
    if (!map) return;

    const returnToCenter = () => {
      map.panTo(MAP_DEFAULT_CAMERA.center);
      map.setZoom(MAP_DEFAULT_CAMERA.zoom);
    };

    returnToCenter();
  }, [mapFilter]);

  return (
    <>
      {PROYECTOS_NUEVO_LEON.map((project) => (
        <ProjectMarker
          key={project.landmarkId}
          project={project}
          imageUrl={LANDMARK_MAP[project.landmarkId]}
          isVisible={
            mapFilter ? filteredIds.includes(project.landmarkId) : true
          }
        />
      ))}

      {IS_DEVELOPMENT && <MapDebugger />}
    </>
  );
}
