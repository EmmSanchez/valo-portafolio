import { MapFilterButtons } from "@/apps/valoPortafolio/components/Buttons/MapFilterButtons";
import MapaNuevoLeon from "@/apps/valoPortafolio/components/GoogleMaps/NuevoLeon/MapaNuevoLeon";
import BackButton from "@/components/shared/Buttons/BackButton";

export default function NuevoLeon() {
  return (
    <div className="w-dvw h-dvh">
      {/* Filter Buttons */}
      <MapFilterButtons />

      {/* Map and Markers */}
      <div className="absolute z-0 inset-0">
        <MapaNuevoLeon />
      </div>

      {/* Return button */}
      <div className="fixed bottom-0 z-30 default-padding">
        <BackButton to="/proyectos" />
      </div>
    </div>
  );
}
