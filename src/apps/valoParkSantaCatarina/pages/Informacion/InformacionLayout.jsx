import { Link, Outlet } from "react-router";
import LogoValoParkSantaCatarina from "../../assets/logos/logo-valoParkSC";
import LogoValoMark from "@/apps/valoPortafolio/assets/logos/logo-valo-mark";

export default function InformacionLayout() {
  return (
    <>
      <div className="absolute top-0 left-0 z-50 flex w-full justify-between default-logo-padding-around">
        <div className="relative w-[clamp(50px,7.34vw,141px)]">
          <Link to="/" className="absolute inset-0 pointer-events-auto">
            <LogoValoMark className="text-valo" />
          </Link>
        </div>

        <div className="relative w-[clamp(58.33px,10.26vw,197px)] h-[clamp(17.76px,3.13vw,60px)]">
          <Link
            to="/valoPark/santaCatarina"
            className="absolute inset-0 pointer-events-auto"
          >
            <LogoValoParkSantaCatarina />
          </Link>
        </div>
      </div>

      <div className="absolute -z-50 w-dvw h-dvh">
        {/* Overlay */}
        <div className="absolute w-dvw h-dvh bg-white/60 backdrop-blur-[5px]" />
      </div>

      <Outlet />
    </>
  );
}
