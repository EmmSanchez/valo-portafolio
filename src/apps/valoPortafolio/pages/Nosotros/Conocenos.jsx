import BackButton from "@/components/shared/Buttons/BackButton";
import { Carrousel } from "@/components/shared/Carrousel/Carrousel";
import React from "react";
import Slide1 from "../../components/Carousel/Slides/Slide1";
import Slide2 from "../../components/Carousel/Slides/Slide2";
import Slide3 from "../../components/Carousel/Slides/Slide3";
import { CircleIndicatorIcon } from "../../assets/icons/CircleIndicatorIcon";

// BOTÓNES DE NAVEGACIÓN
const navIndicator = (index, isActive) =>
  isActive ? (
    <CircleIndicatorIcon isActive className="size-[clamp(20px,2.08vw,40px)]" />
  ) : (
    <span className="size-[clamp(20px,2.08vw,40px)] rounded-full border-[3px] border-santa-catarina" />
  );

export default function Conocenos() {
  return (
    <div className="w-dvw h-dvh flex flex-col default-padding">
      <div className="flex flex-1">
        <Carrousel
          slides={[<Slide1 />, <Slide2 />, <Slide3 />]}
          navIndicator={navIndicator}
        />
      </div>
      <div className="relative">
        <BackButton to="/nosotros" />
      </div>
    </div>
  );
}
