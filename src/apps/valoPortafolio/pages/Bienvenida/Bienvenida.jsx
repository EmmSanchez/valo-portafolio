import React from "react";
import { LogoValo } from "../../assets/logos/logo-valo";
import { Link } from "react-router";
import ClickIcon from "@/apps/foro4/assets/icons/ClickIcon";

export default function Bienvenida() {
  return (
    <div
      className={`h-dvh w-dvw flex flex-col justify-center items-center gap-[6vh] bg-[#12274C]/85`}
    >
      <LogoValo className="w-[clamp(117.26px,20.63vw,396px)] h-[clamp(33.15px,5.83vw,112px)]" />

      <Link
        to={"/inicio"}
        className={`group relative flex items-center justify-center overflow-hidden p-[clamp(7.39px,1.302083vw,25px)] gap-[clamp(4.43px,0.78125vw,15px)] bg-white shadow-[0_10px_35px_rgba(0,0,0,0.22)] hover:shadow-[0_14px_45px_rgba(0,0,0,0.32)] hover:scale-[1.03] active:scale-[0.985] hover:cursor-pointer transition-all duration-500 ease-out`}
      >
        <p className="text-paragraph-button text-valo font-semibold uppercase">
          Iniciar Experiencia
        </p>
        <ClickIcon className="w-[clamp(7.09px,1.25vw,24px)] text-valo" />
      </Link>
    </div>
  );
}
