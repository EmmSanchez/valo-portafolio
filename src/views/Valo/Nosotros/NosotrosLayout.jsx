import { Outlet } from "react-router";
import LogoValoMark from "@/assets/logos/logo-valo-mark";

export default function NosotrosLayout() {
  return (
    <>
      <div className="absolute top-0 left-0 default-logo-padding">
        <LogoValoMark className="w-[clamp(50px,7.34vw,141px)] text-valo" />
      </div>

      <Outlet />
    </>
  );
}
