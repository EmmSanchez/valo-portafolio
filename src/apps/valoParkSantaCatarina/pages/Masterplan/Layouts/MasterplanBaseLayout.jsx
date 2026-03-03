import { Outlet } from "react-router";
import LogoValoParkSantaCatarina from "../../../assets/logos/logo-valoParkSC";

export default function MasterplanBaseLayout() {
  return (
    <div className="w-dvw h-dvh flex pointer-events-none">
      <div className="absolute top-0 left-0 z-50 default-logo-padding">
        <LogoValoParkSantaCatarina className="w-[clamp(58.33px,10.26vw,197px)] h-[clamp(17.76px,3.13vw,60px)]" />
      </div>

      <Outlet />
    </div>
  );
}
