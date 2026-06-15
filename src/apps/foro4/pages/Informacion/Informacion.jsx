import { Link } from "react-router";
import logo from "@/apps/foro4/assets/logos/main/logo-foro-4-white-green.svg";
import BackButton from "@/components/shared/Buttons/BackButton";
import { Carrousel } from "@/components/shared/Carrousel/Carrousel";
import Slide1 from "./Slides/Slide1";
import Slide2 from "./Slides/Slide2";
import Slide3 from "./Slides/Slide3";
import LogoValoMark from "@/apps/valoPortafolio/assets/logos/logo-valo-mark";

// BOTÓNES DE NAVEGACIÓN
const navIndicator = (index, isActive) =>
  isActive ? (
    <span className="size-[clamp(20px,2.08vw,40px)] rounded-full border-[3px] bg-foro4-verde border-white" />
  ) : (
    <span className="size-[clamp(20px,2.08vw,40px)] rounded-full border-[3px] border-white" />
  );

export default function Informacion() {
  return (
    <div className="w-full h-svh default-foro4-padding bg-foro4-morado">
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
      <div className="flex flex-col w-full h-full items-start">
        <div className="w-full flex flex-1">
          <Carrousel
            slides={[<Slide1 />, <Slide2 />, <Slide3 />]}
            navIndicator={navIndicator}
          />
        </div>
        <BackButton
          to={"/foro4/inicio"}
          className="bg-white text-foro4-morado"
        />
      </div>
    </div>
  );
}
