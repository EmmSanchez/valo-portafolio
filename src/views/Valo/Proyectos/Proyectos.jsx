import masterplanBg from "@/assets/images/proyectos/Masterplan.jpg";
import { MapaMexico } from "@/assets/images/proyectos/MapaMexico";
import BackButton from "@/components/Navigation/BackButton";

const ACTIVE_STATES = ["nuevo-leon", "guanajuato"];

export default function Proyectos() {
  return (
    <div className="h-dvh w-dvw">
      {/* Background image */}
      <img
        src={masterplanBg}
        alt="Imagen del masterplan de fondo"
        className="absolute z-0 inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute z-0 inset-0 w-full h-full bg-[#12274C]/85 backdrop-blur-md" />

      {/* Content */}
      <div className="relative w-full h-full flex justify-center items-center">
        <MapaMexico
          ACTIVE_STATES={ACTIVE_STATES}
          className="w-[clamp(280px,55vw,1289px)] h-[clamp(194px,38.15vw,894px)] lg:w-[clamp(381px,67.14vw,1289px)] lg:h-[clamp(264px,46.56vw,894px)]"
        />
      </div>

      {/* Return button */}
      <div className="fixed bottom-0 z-30 default-padding">
        <BackButton to="/" />
      </div>
    </div>
  );
}
