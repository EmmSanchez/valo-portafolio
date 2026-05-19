import { Link } from "react-router";
import logo from "@/apps/foro4/assets/logos/main/logo-foro-4-white-green.svg";
import BackButton from "@/components/shared/Buttons/BackButton";
import { Carrousel } from "@/components/shared/Carrousel/Carrousel";
import Slide1 from "./Slides/Slide1";
import Slide2 from "./Slides/Slide2";
import Slide3 from "./Slides/Slide3";

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
      <div className="flex flex-col w-full h-full items-start">
        <div className="w-full flex flex-1">
          <Carrousel
            slides={[<Slide1 />, <Slide2 />, <Slide3 />]}
            navIndicator={navIndicator}
          />
        </div>
        <BackButton to="/foro4" className="bg-white text-foro4-morado" />
      </div>
    </div>
  );
}
