import { useParams } from "react-router";
import NuevoLeon from "./Ciudades/NuevoLeon";
import Guanajuato from "./Ciudades/Guanajuato";

const ESTADOS_COMPONENTS = {
  "nuevo-leon": NuevoLeon,
  guanajuato: Guanajuato,
};

export default function EstadoDetalle() {
  const { estado } = useParams();

  const EstadoToRender = ESTADOS_COMPONENTS[estado];

  return <EstadoToRender />;
}
