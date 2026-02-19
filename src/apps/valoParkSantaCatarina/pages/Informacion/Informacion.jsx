import BackButton from "@/components/shared/Buttons/BackButton";
import { Carrousel } from "@/components/shared/Carrousel/Carrousel";
import React from "react";
import Slide1 from "../../components/Carrousel/Slides/Slide1";
import Slide2 from "../../components/Carrousel/Slides/Slides2";
import Slide3 from "../../components/Carrousel/Slides/Slide3";

export default function Informacion() {
  return (
    <div className="h-dvh w-dvw flex flex-col justify-end items-start overflow-hidden default-padding">
      <div className="w-full flex flex-1">
        <Carrousel slides={[<Slide1 />, <Slide2 />, <Slide3 />]} />
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
