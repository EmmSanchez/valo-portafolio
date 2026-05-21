import { Link, Outlet } from "react-router";
import logo from "@/apps/foro4/assets/logos/main/logo-foro-4-white-green.svg";
import BackButton from "@/components/shared/Buttons/BackButton";
import SubmenuLateral from "../../components/shared/SubmenuLateral";

const SUBMENU_DETALLE_LOCAL = [
  {
    id: "me-interesa",
    label: "Me interesa",
    to: "/foro4/contacto",
  },
  {
    id: "recorrido",
    label: "Recorrido 360",
    to: "recorrido-360",
  },
  {
    id: "informacion",
    label: "Información",
    to: "informacion",
  },
  {
    id: "galeria",
    label: "Foto Galería",
    to: "foto-galeria",
  },
];

export default function DetalleLocal() {
  return (
    <div className="w-full h-svh bg-cyan-800">
      {/* Logo */}
      <div className="absolute top-0 left-0 z-50 default-logo-padding">
        <Link to={"/foro4"}>
          <img
            src={logo}
            alt="Logo de FORO 4"
            className="w-[clamp(59.13px,10.416667vw,200px)] h-[clamp(6.51px,1.145833vw,22px)]"
          />
        </Link>
      </div>

      {/* Content */}
      <div className="relative flex w-full h-full">
        <div className="flex-1 min-w-0 w-full h-full">
          <Outlet />
        </div>

        <div className="shrink-0 h-full flex items-center">
          <SubmenuLateral buttons={SUBMENU_DETALLE_LOCAL} />
        </div>
      </div>

      {/* Botón regresar absolute*/}
      <div className="absolute bottom-0 left-0 z-10 flex flex-col w-fit h-fit justify-end default-foro4-padding">
        <BackButton
          to="/foro4/masterplan/locales-disponibles"
          className="bg-white text-foro4-morado pointer-events-auto"
        />
      </div>
    </div>
  );
}
