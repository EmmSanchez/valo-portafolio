import { useSearchParams } from "react-router";
import BackButton from "@/components/shared/Buttons/BackButton";
import { PROYECTOS_NUEVO_LEON } from "@/apps/valoPortafolio/data/Valo/ProyectosNuevoLeon";
import PopupProyecto from "@/apps/valoPortafolio/components/GoogleMaps/NuevoLeon/PopupProyecto";
import MapaProyectos from "@/apps/valoPortafolio/components/GoogleMaps/MapaProyectos";

const VALID_POPUPS = new Set(PROYECTOS_NUEVO_LEON.map((p) => p.landmarkId));

export default function NuevoLeon() {
  const [searchParams, setSearchParams] = useSearchParams();

  const popup = searchParams.get("popup");
  const validPopup = VALID_POPUPS.has(popup) ? popup : null;

  const handleCleanParam = () => {
    searchParams.delete("popup");
    setSearchParams(searchParams);
  };

  const selectedProject = validPopup
    ? (PROYECTOS_NUEVO_LEON.find((p) => p.landmarkId === popup) ?? null)
    : null;

  return (
    <div className="relative w-dvw h-dvh">
      {/* Popup */}
      {validPopup && (
        <PopupProyecto
          selectedProject={selectedProject}
          handleCleanParam={handleCleanParam}
        />
      )}

      {/* Map and Markers */}
      <div className="absolute z-0 inset-0">
        <MapaProyectos />
      </div>

      {/* Return button */}
      <div className="fixed bottom-0 z-30 default-padding">
        <BackButton to="/proyectos" />
      </div>
    </div>
  );
}
