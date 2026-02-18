import { MapFilterButtons } from "@/apps/valoPortafolio/components/Buttons/MapFilterButtons";
import MapView from "@/apps/valoPortafolio/components/Mapbox/Map.jsx";
import BackButton from "@/apps/valoPortafolio/components/Navigation/BackButton";

export default function NuevoLeon() {
  return (
    <div className="w-dvw h-dvh">
      {/* Filter Buttons */}
      <MapFilterButtons />

      {/* Map and Markers */}
      <div className="absolute z-0 inset-0">
        <MapView />
      </div>

      {/* Return button */}
      <div className="fixed bottom-0 z-30 default-padding">
        <BackButton to="/proyectos" />
      </div>
    </div>
  );
}
