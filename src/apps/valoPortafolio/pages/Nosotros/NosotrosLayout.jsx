import { Link, Outlet } from "react-router";
import LogoValoMark from "@/apps/valoPortafolio/assets/logos/logo-valo-mark";

export default function NosotrosLayout() {
  return (
    <>
      <div to="/" className="absolute z-50 top-0 left-0 default-logo-padding">
        <Link to="/">
          <LogoValoMark className="w-[clamp(50px,7.34vw,141px)] text-valo" />
        </Link>
      </div>

      <Outlet />
    </>
  );
}
