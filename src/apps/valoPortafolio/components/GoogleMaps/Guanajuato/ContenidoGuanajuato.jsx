import ProjectMarker from "../NuevoLeon/ProjectMarker";
import Foro4Landmark from "@/apps/valoPortafolio/assets/icons/proyectos/markers/Foro4Landmark.svg";
import { PROYECTOS_GUANAJUATO } from "@/apps/valoPortafolio/data/Valo/ProyectosGuanajuato";

const LANDMARK_MAP = {
  foro4: Foro4Landmark,
};

export default function ContenidoNuevoLeon() {
  return (
    <>
      {PROYECTOS_GUANAJUATO.map((project) => (
        <ProjectMarker
          key={project.landmarkId}
          project={project}
          imageUrl={LANDMARK_MAP[project.landmarkId]}
          type="popup"
        />
      ))}
    </>
  );
}
