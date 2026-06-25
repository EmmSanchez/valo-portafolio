import { useParams, useSearchParams } from "react-router";
import NuevoLeon from "./Ciudades/NuevoLeon";
import Guanajuato from "./Ciudades/Guanajuato";
import PopupProyecto from "@/apps/valoPortafolio/components/GoogleMaps/NuevoLeon/PopupProyecto";
import { PROYECTOS } from "../../data/Valo/Proyectos";

const ESTADOS_COMPONENTS = {
  "nuevo-leon": NuevoLeon,
  guanajuato: Guanajuato,
};

export default function EstadoDetalle() {
  const { estado } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const EstadoToRender = ESTADOS_COMPONENTS[estado];
  const proyectos = Object.values(PROYECTOS).flat();
  const VALID_POPUPS = new Set(proyectos.map((p) => p.landmarkId));

  const popup = searchParams.get("popup");
  const validPopup = VALID_POPUPS.has(popup) ? popup : null;
  const selectedProject = validPopup
    ? (proyectos.find((p) => p.landmarkId === popup) ?? null)
    : null;

  const handleCleanParam = () => {
    searchParams.delete("popup");
    setSearchParams(searchParams);
  };

  return (
    <div className="relative w-full h-dvh">
      {validPopup && (
        <PopupProyecto
          selectedProject={selectedProject}
          handleCleanParam={handleCleanParam}
        />
      )}
      <EstadoToRender />
    </div>
  );
}
