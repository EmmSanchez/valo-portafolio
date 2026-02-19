import { Outlet } from "react-router";
import LogoValoParkSantaCatarina from "../../assets/logos/logo-valoParkSC";
import bgImage from "../../assets/images/example-bgImage.png";

export default function InformacionLayout() {
  return (
    <>
      <div className="absolute top-0 left-0 z-50 default-logo-padding">
        <LogoValoParkSantaCatarina className="w-[clamp(50px,7.34vw,141px)] text-valo" />
      </div>

      <div className="absolute -z-50 w-dvw h-dvh">
        {/* Background */}
        <div className="absolute">
          <img
            src={bgImage}
            alt="Imagen de fondo"
            className="w-dvw h-dvh object-cover"
          />
        </div>

        {/* Overlay */}
        <div className="absolute  w-dvw h-dvh bg-white/60 backdrop-blur-[5px]" />
      </div>

      <Outlet />
    </>
  );
}
