import bgVideo from "/videos/Portada/1_PORTADA_PORTAFOLIO.mp4";
import BackButton from "@/components/shared/Buttons/BackButton";
import NosotrosSubMenu from "@/apps/valoPortafolio/components/Menus/NosotrosSubMenu";

export default function Nosotros() {
  return (
    <div className="h-dvh w-dvw flex items-end overflow-hidden">
      <div className="flex flex-col self-end items-start w-fit default-padding">
        <NosotrosSubMenu />
        <BackButton to="/" />
      </div>

      {/* Background */}
      <div className="absolute -z-50">
        <video
          src={bgVideo}
          autoPlay
          muted
          playsInline
          loop
          className="w-dvw h-dvh object-cover"
        />
      </div>
    </div>
  );
}
