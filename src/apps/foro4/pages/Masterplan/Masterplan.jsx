import { Link, Navigate, useSearchParams } from "react-router";
import BackButton from "@/components/shared/Buttons/BackButton";
import logo from "@/apps/foro4/assets/logos/main/logo-foro-4-white-green.svg";
import SubmenuMasterplan from "../../components/SubmenuMasterplan";
import MenuRE from "../../components/masterplan/MenuRE";

export default function Masterplan() {
  const [searchParams] = useSearchParams();
  const position = searchParams.get("position");

  if (!position) {
    return <Navigate to="/foro4/masterplan?position=1" replace />;
  }

  return (
    <div className="w-full h-svh default-foro4-padding bg-foro4-morado">
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

        {/* Menu de rotación de exteriores */}
        <div className="flex w-full h-full max-w-[271px] justify-end items-center">
          <MenuRE />
        </div>
      </div>
    </div>
  );
}
