import { Link, Navigate, useLocation, useSearchParams } from "react-router";
import { useContext, useState, useEffect } from "react";
import { VideoPlayerContext } from "../../video/context/VideoPlayerContext";
import BackButton from "@/components/shared/Buttons/BackButton";
import logo from "@/apps/foro4/assets/logos/main/logo-foro-4-white-green.svg";
import SubmenuMasterplan from "../../components/SubmenuMasterplan";
import MenuRE from "../../components/masterplan/MenuRE";
import PINForo4 from "@/apps/foro4/assets/main/pin-foro-4.svg";
import { MODE } from "../../video/const/Videos";
import LogoValoMark from "@/apps/valoPortafolio/assets/logos/logo-valo-mark";

const VALID_POSITIONS = new Set([1, 2, 3, 4]);
const ORIGIN_ROUTES = {
  ubicacion: "/foro4/ubicacion",
  home: "/foro4/inicio",
};

export default function Masterplan() {
  const { mode } = useContext(VideoPlayerContext);
  const [searchParams] = useSearchParams();

  const location = useLocation();
  const backTo = ORIGIN_ROUTES[location.state?.from] ?? "/foro4/inicio";

  const [pinVisible, setPinVisible] = useState(false);
  const position = Number(searchParams.get("position"));

  useEffect(() => {
    if (mode === MODE.IDLE && position !== 1) {
      const timer = setTimeout(() => setPinVisible(true), 300);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => setPinVisible(false), 0);
      return () => clearTimeout(timer);
    }
  }, [mode, position]);

  if (!position || !VALID_POSITIONS.has(position)) {
    return (
      <Navigate
        to="/foro4/masterplan?position=1"
        replace
        state={location.state}
      />
    );
  }

  return (
    <div className="w-full h-svh default-foro4-padding">
      <div className="absolute top-0 left-0 z-50 w-full h-fit default-logo-padding-around">
        <div className="relative flex justify-between items-center w-full h-full">
          {/* Logo Valo */}
          <Link
            to="/"
            className="flex w-[clamp(50px,7.34vw,141px)] pointer-events-auto"
          >
            <LogoValoMark className="text-valo" />
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
      <div className="flex w-full h-full items-end justify-between">
        {/* Texto y botón de regresar */}
        <div className="flex flex-col">
          <SubmenuMasterplan />
          <BackButton to={backTo} className="bg-white text-foro4-morado" />
        </div>

        {/* Menu de rotación de exteriores */}
        <div className="flex w-full h-full max-w-[271px] justify-end items-center">
          <MenuRE />
        </div>
      </div>

      {/* Layout para pin */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <svg
          viewBox="0 0 1920 1080"
          preserveAspectRatio="xMidYMid slice"
          className="w-full h-full"
        >
          <g transform={`translate(960,710)`}>
            <image
              href={PINForo4}
              className={`transition-opacity duration-300 ease-in-out ${pinVisible ? "opacity-100" : "opacity-0"}`}
            />
          </g>
        </svg>
      </div>
    </div>
  );
}
