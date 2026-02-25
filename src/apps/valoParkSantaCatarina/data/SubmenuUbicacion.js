import BusIcon from "../assets/icons/ubicacion/BusIcon";
import BagIcon from "../assets/icons/ubicacion/BagIcon";
import BikeIcon from "../assets/icons/ubicacion/BikeIcon";
import CartIcon from "../assets/icons/ubicacion/CartIcon";
import HospitalIcon from "../assets/icons/ubicacion/HospitalIcon";

export const SUBMENU_UBICACION = {
  id: "ubicación-vpsc",
  label: "Ubicación",
  buttons: [
    {
      id: "puntos-de-interes-vpsc",
      label: "Puntos de interés",
      filter: "puntos-de-interes",
      subfilters: [
        { id: "transporte", label: "Transporte público", icon: BusIcon },
        { id: "centro-comercial", label: "Centro Comercial", icon: BagIcon },
        {
          id: "centros-recreativos",
          label: "Centros Recreativos",
          icon: BikeIcon,
        },
        { id: "supermercados", label: "Supermercados", icon: CartIcon },
        { id: "centro-salud", label: "Centro de Salud", icon: HospitalIcon },
      ],
    },
    {
      id: "vialidades-vpsc",
      label: "Vialidades",
      filter: "vialidades",
    },
    {
      id: "masterplan-vpsc",
      label: "Masterplan",
      filter: "masterplan",
    },
  ],
};
