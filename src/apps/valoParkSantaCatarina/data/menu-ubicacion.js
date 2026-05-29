import BusIcon from "../assets/icons/ubicacion/BusIcon";
import BagIcon from "../assets/icons/ubicacion/BagIcon";
import BikeIcon from "../assets/icons/ubicacion/BikeIcon";
import CartIcon from "../assets/icons/ubicacion/CartIcon";
import HospitalIcon from "../assets/icons/ubicacion/HospitalIcon";
import { CircleIndicatorIcon } from "../assets/icons/CicleIndicatorIcon";

export const MENU_UBICACION = [
  { id: "transporte", label: "Transporte público", icon: BusIcon },
  { id: "centro-comercial", label: "Centro Comercial", icon: BagIcon },
  {
    id: "centros-recreativos",
    label: "Centros Recreativos",
    icon: BikeIcon,
  },
  { id: "supermercados", label: "Supermercados", icon: CartIcon },
  { id: "centro-salud", label: "Centro de Salud", icon: HospitalIcon },
  { id: "vialidades", label: "Vialidades" },
  { id: "masterplan", label: "Masterplan" },
];
