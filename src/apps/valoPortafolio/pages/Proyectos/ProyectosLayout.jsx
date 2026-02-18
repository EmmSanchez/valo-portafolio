import { Outlet } from "react-router";
import LogoValoMark from "@/apps/valoPortafolio/assets/logos/logo-valo-mark";

export default function ProyectosLayout() {
  return (
    <>
      <div className="absolute top-0 left-0 z-50 default-logo-padding">
        <div className="relative w-[clamp(50px,7.34vw,141px)]">
          <span className="absolute inset-0">
            <LogoValoMark className="text-white" />
          </span>
        </div>
      </div>

      <Outlet />
    </>
  );
}
