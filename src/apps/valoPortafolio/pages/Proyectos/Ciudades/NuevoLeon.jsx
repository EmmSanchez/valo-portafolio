import BackButton from "@/components/shared/Buttons/BackButton";
import MapaProyectos from "@/apps/valoPortafolio/components/GoogleMaps/MapaProyectos";

export default function NuevoLeon() {
  return (
    <div className="absolute inset-0 bg-valo">
      <div className="absolute z-0 inset-0">
        <MapaProyectos />
      </div>
      <div className="fixed bottom-0 z-30 default-padding">
        <BackButton to="/proyectos" />
      </div>
    </div>
  );
}
