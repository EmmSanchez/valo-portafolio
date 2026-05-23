import ProjectMarker from "../NuevoLeon/ProjectMarker";
import Foro4Landmark from "@/apps/valoPortafolio/assets/icons/proyectos/markers/Foro4Landmark.svg";

const LANDMARK_MAP = {
  foro4: Foro4Landmark,
};

const PROYECTOS_GUANAJUATO = [
  {
    id: 5,
    landmarkId: "foro4",
    coordinates: {
      lat: 21.164291785385643,
      lng: -101.69229633947785,
    },
    size: 120,
    redirectTo: "/foro4",
    properties: {
      title: "Foro 4",
      description: "",
      url: "/foro4",
    },
  },
];

export default function ContenidoNuevoLeon() {
  return (
    <>
      {PROYECTOS_GUANAJUATO.map((project) => (
        <ProjectMarker
          key={project.landmarkId}
          project={project}
          imageUrl={LANDMARK_MAP[project.landmarkId]}
          type="link"
        />
      ))}
    </>
  );
}
