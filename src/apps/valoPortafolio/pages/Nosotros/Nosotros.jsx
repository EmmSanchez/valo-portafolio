import BackButton from "@/components/shared/Buttons/BackButton";
import Slide1 from "../../components/Carousel/Slides/Slide1";
import Slide2 from "../../components/Carousel/Slides/Slide2";
import Slide3 from "../../components/Carousel/Slides/Slide3";
import { CircleIndicatorIcon } from "../../assets/icons/CircleIndicatorIcon";
import { Carrousel } from "@/components/shared/Carrousel/Carrousel";
import Slide4 from "../../components/Carousel/Slides/Slide4";

// BOTÓNES DE NAVEGACIÓN
const navIndicator = (index, isActive) =>
  isActive ? (
    <CircleIndicatorIcon isActive className="size-[clamp(20px,2.08vw,40px)]" />
  ) : (
    <span className="size-[clamp(20px,2.08vw,40px)] rounded-full border-[3px] border-santa-catarina" />
  );

export default function Nosotros() {
  return (
    <div className="relative h-dvh w-dvw flex items-end overflow-hidden">
      {/* Content */}
      <div className="absolute inset-0 z-0 w-full h-full bg-white" />

      <div className="relative z-10 flex flex-col self-end items-start w-full h-full default-padding">
        <div className="w-full h-full">
          <Carrousel
            slides={[<Slide1 />, <Slide2 />, <Slide3 />, <Slide4 />]}
            navIndicator={navIndicator}
          />
        </div>
        <BackButton to="/" />
      </div>
    </div>
  );
}
