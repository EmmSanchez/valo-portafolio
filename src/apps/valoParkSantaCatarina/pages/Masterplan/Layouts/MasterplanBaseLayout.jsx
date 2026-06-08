import { Link, Outlet } from "react-router";
import LogoValoParkSantaCatarina from "../../../assets/logos/logo-valoParkSC";
import LogoValoMark from "@/apps/valoPortafolio/assets/logos/logo-valo-mark";
import MasterplanPin from "@/apps/valoParkSantaCatarina/components/Masterplan/MasterplanPin";

export default function MasterplanBaseLayout() {
  return (
    <div className="w-dvw h-dvh flex pointer-events-none">
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

      <div className="absolute w-full h-full inset-0 z-10 pointer-events-none">
        <p className="absolute left-1/2 -translate-x-[50%] top-[19vh] w-[clamp(286.85px,50.572917vw,971px)] py-[0.2vh] bg-white text-title-lg text-center text-santa-catarina font-lumarc font-bold uppercase border-b-[0.7vh] border-santa-catarina pointer-events-auto">
          Visualicación Orbital
        </p>

        {/* Pin */}
        <MasterplanPin />
      </div>

      <Outlet />
    </div>
  );
}
