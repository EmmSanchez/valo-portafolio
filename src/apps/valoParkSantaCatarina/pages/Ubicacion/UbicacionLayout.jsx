import { Outlet } from "react-router";
import { useSearchParams } from "react-router";
import BackButton from "@/components/shared/Buttons/BackButton";
import SubmenuUbicacion from "../../components/Menus/Submenu";
import LogoValoParkSantaCatarina from "../../assets/logos/logo-valoParkSC";
import CompassIcon from "../../assets/icons/CompassIcon";
import { SUBMENU_UBICACION } from "../../data/SubmenuUbicacion";

export default function UbicacionLayout() {
  const [searchParams, _] = useSearchParams();
  const { buttons } = SUBMENU_UBICACION;

  const filter = searchParams.get("filter");
  const isFilterValid = buttons.some((b) => b.filter === filter);
  const backTo = isFilterValid
    ? "/valoPark/santaCatarina/ubicacion"
    : "/valoPark/santaCatarina";
  return (
    <>
      <div className="relative w-dvw h-dvh flex">
        {/* Logo */}
        <div className="absolute top-0 left-0 z-50 default-logo-padding">
          <LogoValoParkSantaCatarina className="w-[clamp(58.33px,10.26vw,197px)] h-[clamp(17.76px,3.13vw,60px)]" />
        </div>

        {/* SUBMENU AND BACK BUTTON*/}
        <div className="absolute z-10 flex flex-col self-end items-start w-fit default-padding">
          <SubmenuUbicacion submenu={SUBMENU_UBICACION} />

          <BackButton
            to={backTo}
            className="bg-santa-catarina hover:bg-santa-catarina-grey text-white"
          />
        </div>

        {/* Brujula */}
        <div className="absolute z-50 right-0 bottom-0 default-padding">
          <div className="bg-santa-catarina/60 p-[clamp(4.44px,0.78vw,15px)] rounded-full backdrop-blur-xs">
            <CompassIcon className="size-[clamp(20.71px,3.65vw,70px)]" />
          </div>
        </div>

        <Outlet />
      </div>
    </>
  );
}
