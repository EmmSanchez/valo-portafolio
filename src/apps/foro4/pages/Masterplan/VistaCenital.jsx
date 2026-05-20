import { Link } from "react-router";
import logo from "@/apps/foro4/assets/logos/main/logo-foro-4-white-green.svg";
import BackButton from "@/components/shared/Buttons/BackButton";
import SubmenuMasterplan from "../../components/SubmenuMasterplan";
import SubmenuLateral from "../../components/shared/SubmenuLateral";

const SUBMENU_VISTA_CENITAL = [
  {
    id: "rotacion",
    label: "Rotación Orbital",
    to: "/foro4/masterplan/rotacion-orbital",
  },
  {
    id: "recorrido",
    label: "Recorrido 360",
    to: "/foro4/masterplan/recorrido-360",
  },
  {
    id: "video_tour",
    label: "Video Tour",
    to: "/foro4/masterplan/video-tour",
  },
  {
    id: "galeria",
    label: "Foto Galería",
    to: "/foro4/masterplan/foto-galeria",
  },
];

export default function VistaCenital() {
  return (
    <div className="w-full h-svh default-foro4-padding bg-cyan-800">
      <div className="absolute top-0 left-0 z-50 default-logo-padding">
        <Link to={"/foro4"}>
          <img
            src={logo}
            alt="Lofo de FORO 4"
            className="w-[clamp(59.13px,10.416667vw,200px)] h-[clamp(6.51px,1.145833vw,22px)] "
          />
        </Link>
      </div>

      {/* Content */}
      <div className="flex w-full h-full items-end justify-between">
        {/* Texto y botón de regresar */}
        <div className="flex flex-col">
          <SubmenuMasterplan />
          <BackButton to="/foro4" className="bg-white text-foro4-morado" />
        </div>
      </div>

      <SubmenuLateral buttons={SUBMENU_VISTA_CENITAL} />
    </div>
  );
}
