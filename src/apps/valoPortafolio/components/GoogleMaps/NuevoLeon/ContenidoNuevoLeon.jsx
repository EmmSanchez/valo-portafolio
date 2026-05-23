import ProjectMarker from "./ProjectMarker";
import MapDebugger from "./MapDebugger";
import { IS_DEVELOPMENT } from "@/config";
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

export default function ContenidoNuevoLeon() {
  return (
    <>
      {PROYECTOS_NUEVO_LEON.map((project) => (
        <ProjectMarker
          key={project.landmarkId}
          project={project}
          imageUrl={LANDMARK_MAP[project.landmarkId]}
        />
      ))}

      {IS_DEVELOPMENT && <MapDebugger />}
    </>
  );
}
