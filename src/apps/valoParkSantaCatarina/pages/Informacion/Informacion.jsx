import BackButton from "@/components/shared/Buttons/BackButton";
import { Carrousel } from "@/components/shared/Carrousel/Carrousel";
import React from "react";
import Slide1 from "../../components/Carrousel/Slides/Slide1";
import Slide2 from "../../components/Carrousel/Slides/Slides2";
import Slide3 from "../../components/Carrousel/Slides/Slide3";

// BOTÓNES DE NAVEGACIÓN
const navIndicator = (index, isActive) =>
  isActive ? (
    <span className="size-[clamp(20px,2.08vw,40px)] rounded-full border-[3px] bg-santa-catarina border-santa-catarina" />
  ) : (
    <span className="size-[clamp(20px,2.08vw,40px)] rounded-full border-[3px] border-santa-catarina" />
  );

export default function Informacion() {
  return (
    <div className="h-dvh w-dvw flex flex-col justify-end items-start overflow-hidden default-padding">
      <div className="w-full flex flex-1">
        <Carrousel
          slides={[<Slide1 />, <Slide2 />, <Slide3 />]}
          navIndicator={navIndicator}
        />
      </div>

      <div>
        <BackButton
          to="/valoPark/santaCatarina"
          className="bg-santa-catarina hover:bg-santa-catarina-grey text-white"
        />
      </div>
    </div>
  );
}
