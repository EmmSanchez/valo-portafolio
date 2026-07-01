import AvionIcon from "../assets/icons/ubicacion/AvionIcon";
import BolsaIcon from "../assets/icons/ubicacion/BolsaIcon";
import CircleIcon from "../assets/icons/ubicacion/CircleIcon";
import GolfIcon from "../assets/icons/ubicacion/GolfIcon";
import BusIcon from "../assets/icons/ubicacion/BusIcon";

export const UBICACION_FILTERS = [
  {
    id: "aeropuerto",
    label: "Aeropuerto",
    icon: AvionIcon,
  },
  {
    id: "campo-golf",
    label: "Campos de Golf",
    icon: GolfIcon,
  },
  {
    id: "centros-comerciales",
    label: "Centros Comerciales",
    icon: BolsaIcon,
  },
  {
    id: "transporte",
    label: "Transporte público",
    icon: BusIcon,
  },
  {
    id: "vialidades",
    label: "Vialidades",
    icon: CircleIcon,
  },
];
