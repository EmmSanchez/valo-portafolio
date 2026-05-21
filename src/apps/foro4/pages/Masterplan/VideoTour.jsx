import { Link, Navigate, useSearchParams } from "react-router";
import logo from "@/apps/foro4/assets/logos/main/logo-foro-4-purple-green.svg";
import BackButton from "@/components/shared/Buttons/BackButton";
import MenuVTI from "../../components/masterplan/MenuVTI";

export default function VideoTour() {
  const [searchParams] = useSearchParams();
  const ventaja = searchParams.get("ventaja");

  if (!ventaja) {
    return (
      <Navigate to="/foro4/masterplan/video-tour?ventaja=motor-lobby" replace />
    );
  }

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
          <BackButton
            to="/foro4/masterplan/vista-cenital"
            className="bg-white text-foro4-morado"
          />
        </div>

        {/* Menu de rotación de exteriores */}
        <div className="flex w-full h-full max-w-[375px] justify-end items-center">
          <MenuVTI />
        </div>
      </div>
    </div>
  );
}
