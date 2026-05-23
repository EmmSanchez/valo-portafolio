import MapaProyectos from "@/apps/valoPortafolio/components/GoogleMaps/MapaProyectos";
import BackButton from "@/components/shared/Buttons/BackButton";
import React from "react";

export default function Guanajuato() {
  return (
    <div className="relative w-full h-dvh bg-valo">
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
