import { ConoceValoCarousel } from "@/components/Carousel/ConoceValoCarousel";
import BackButton from "@/components/Navigation/BackButton";
import React from "react";

export default function Conocenos() {
  return (
    <div className="w-dvw h-dvh flex flex-col default-padding">
      <div className="flex flex-1">
        <ConoceValoCarousel />
      </div>
      <div className="relative">
        <BackButton to="/nosotros" />
      </div>
    </div>
  );
}
