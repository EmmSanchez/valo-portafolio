import { Link, useParams } from "react-router";
import logo from "@/apps/foro4/assets/logos/main/logo-foro-4-white-green.svg";
import BackButton from "@/components/shared/Buttons/BackButton";
import KuulaComponent from "@/components/shared/Kuula/KuulaComponent";
import LogoValoMark from "@/apps/valoPortafolio/assets/logos/logo-valo-mark";

export default function Recorrido360() {
  const { sceneId } = useParams();
  const src = sceneId
    ? `https://kuula.co/share/${sceneId}/collection/7M6Rh?logo=-1&info=0&fs=0&vr=0&zoom=1&initload=1&thumbs=-1&margin=30&alpha=0.81&inst=0&keys=0`
    : "https://kuula.co/share/collection/7M6Rh?logo=-1&info=0&fs=0&vr=0&zoom=1&initload=1&thumbs=-1&margin=30&alpha=0.81&inst=0&keys=0";

  return (
    <div className="w-full h-svh default-foro4-padding">
      <div className="absolute top-0 left-0 z-50 w-full h-fit default-logo-padding-around">
        <div className="relative flex justify-between items-center w-full h-full">
          {/* Logo Valo */}
          <Link
            to="/"
            className="flex w-[clamp(50px,7.34vw,141px)] pointer-events-auto"
          >
            <LogoValoMark className="text-white" />
          </Link>

          {/* Logo Foro */}
          <Link to={"/foro4/inicio"}>
            <img
              src={logo}
              alt="Logo de FORO 4"
              className="w-[clamp(59.13px,10.416667vw,200px)]"
            />
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex w-full h-full items-end justify-between pointer-events-none">
        {/* Texto y botón de regresar */}
        <div className="flex flex-col pointer-events-none">
          <BackButton
            to="/foro4/masterplan/proyecto"
            className="bg-white text-foro4-morado pointer-events-auto"
          />
        </div>
      </div>

      {/* Galería */}
      <div className="absolute inset-0 w-dvw h-svh flex items-center justify-center pointer-events-auto">
        <div className="w-full h-full flex">
          <KuulaComponent src={src} />
        </div>
      </div>
    </div>
  );
}
