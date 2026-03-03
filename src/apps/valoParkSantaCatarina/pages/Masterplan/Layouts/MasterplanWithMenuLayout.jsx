import BackButton from "@/components/shared/Buttons/BackButton";
import SubmenuMasterplan from "@/apps/valoParkSantaCatarina/components/Menus/SubmenuMasterplan";
import { Outlet } from "react-router";
import { SUBMENU_MASTERPLAN } from "@/apps/valoParkSantaCatarina/data/SubmenuMasterplan";

export default function MasterplanWithMenuLayout() {
  return (
    <div className="w-dvw h-dvh flex pointer-events-none">
      <div className="pointer-events-auto absolute z-10 flex flex-col self-end items-start w-fit default-padding">
        <SubmenuMasterplan submenu={SUBMENU_MASTERPLAN} />

        <BackButton
          to="/valoPark/santaCatarina"
          className="self-end bg-santa-catarina hover:bg-santa-catarina-grey"
        />
      </div>

      <Outlet />
    </div>
  );
}
