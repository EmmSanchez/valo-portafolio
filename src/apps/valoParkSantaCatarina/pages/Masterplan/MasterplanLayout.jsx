import { useLocation } from "react-router";
import { Outlet } from "react-router";
import { SUBMENU_MASTERPLAN } from "../../data/SubmenuMasterplan";
import BackButton from "@/components/shared/Buttons/BackButton";
import SubmenuMasterplan from "../../components/Menus/SubmenuMasterplan";
import LogoValoParkSantaCatarina from "../../assets/logos/logo-valoParkSC";

export default function MasterplanLayout() {
  const { pathname } = useLocation();
  return (
    <div className="w-dvw h-dvh flex pointer-events-none">
      <div className="absolute top-0 left-0 z-50 default-logo-padding">
        <LogoValoParkSantaCatarina className="w-[clamp(58.33px,10.26vw,197px)] h-[clamp(17.76px,3.13vw,60px)]" />
      </div>

      {(pathname === "/valoPark/santaCatarina/masterplan" ||
        pathname ===
          "/valoPark/santaCatarina/masterplan/ventajas-de-proyecto" ||
        pathname ===
          "/valoPark/santaCatarina/masterplan/naves-industriales") && (
        <div className="pointer-events-auto absolute z-10 flex flex-col self-end items-start w-fit default-padding">
          <SubmenuMasterplan submenu={SUBMENU_MASTERPLAN} />

          <BackButton
            to="/valoPark/santaCatarina"
            className="self-end bg-santa-catarina hover:bg-santa-catarina-grey"
          />
        </div>
      )}
      {/* SUBMENU AND BACK BUTTON*/}

      <Outlet />
    </div>
  );
}
