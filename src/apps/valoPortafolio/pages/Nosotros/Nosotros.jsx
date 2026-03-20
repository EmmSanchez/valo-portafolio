import BackButton from "@/components/shared/Buttons/BackButton";
import NosotrosSubMenu from "@/apps/valoPortafolio/components/Menus/NosotrosSubMenu";

export default function Nosotros() {
  return (
    <div className="h-dvh w-dvw flex items-end overflow-hidden">
      <div className="flex flex-col self-end items-start w-fit default-padding">
        <NosotrosSubMenu />
        <BackButton to="/" />
      </div>
    </div>
  );
}
