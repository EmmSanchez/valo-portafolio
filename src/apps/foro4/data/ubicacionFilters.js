import EdificioIcon from "../assets/icons/ubicacion/EdificioIcon";
import BancoIcon from "../assets/icons/ubicacion/BancoIcon";
import RestauranteIcon from "../assets/icons/ubicacion/RestauranteIcon";
import HotelIcon from "../assets/icons/ubicacion/HotelIcon";
import BolsaIcon from "../assets/icons/ubicacion/BolsaIcon";
import CircleIcon from "../assets/icons/ubicacion/CircleIcon";

export const UBICACION_FILTERS = [
  {
    id: "edificios-corporativos",
    label: "Edificios corporativos",
    icon: EdificioIcon,
  },
  {
    id: "bancos",
    label: "Bancos",
    icon: BancoIcon,
  },
  {
    id: "centros-comerciales",
    label: "Centros Comerciales",
    icon: BolsaIcon,
  },
  {
    id: "restaurantes",
    label: "Restaurantes",
    icon: RestauranteIcon,
  },
  {
    id: "hoteles",
    label: "Hoteles",
    icon: HotelIcon,
  },
  {
    id: "vialidades",
    label: "Vialidades",
    icon: CircleIcon,
  },
];
