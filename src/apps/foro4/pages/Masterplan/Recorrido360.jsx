import { Link } from "react-router";
import logo from "@/apps/foro4/assets/logos/main/logo-foro-4-purple-green.svg";
import BackButton from "@/components/shared/Buttons/BackButton";
import KuulaComponent from "@/components/shared/Kuula/KuulaComponent";

export default function Recorrido360() {
  return (
    <div className="w-full h-svh default-foro4-padding bg-foro4-morado">
      <div className="absolute top-0 left-0 z-50 default-logo-padding">
        <Link to={"/foro4"}>
          <img
            src={logo}
            alt="Lofo de FORO 4"
            className="w-[clamp(59.13px,10.416667vw,200px)] h-[clamp(6.51px,1.145833vw,22px)]"
          />
        </Link>
      </div>

      {/* Content */}
      <div className="relative z-10 flex w-full h-full items-end justify-between pointer-events-none">
        {/* Texto y botón de regresar */}
        <div className="flex flex-col pointer-events-none">
          <BackButton
            to="/foro4/masterplan/vista-cenital"
            className="bg-white text-foro4-morado pointer-events-auto"
          />
        </div>
      </div>

      {/* Galería */}
      <div className="absolute inset-0 w-dvw h-svh flex items-center justify-center pointer-events-auto">
        <div className="w-full h-full flex">
          <KuulaComponent
            src={
              "https://kuula.co/share/collection/7M6Rh?logo=-1&info=0&fs=0&vr=0&zoom=1&initload=1&thumbs=-1&margin=30&alpha=0.81&inst=0&keys=0"
            }
          />
        </div>
      </div>
    </div>
  );
}
