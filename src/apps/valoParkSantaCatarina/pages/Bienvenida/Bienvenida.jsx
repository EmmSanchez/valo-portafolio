import { Link } from "react-router";
import LogoValoParkSantaCatarinaWhite from "../../assets/logos/logo-valoParkSC-white";
import ClickIcon from "@/apps/foro4/assets/icons/ClickIcon";

export default function Bienvenida() {
  return (
    <div
      className={`h-dvh w-dvw flex flex-col justify-center items-center gap-[6vh] bg-white/60`}
    >
      <LogoValoParkSantaCatarinaWhite className="w-[clamp(207.29px,36.46vw,700px)] h-[clamp(62.77px,11.04vw,212px)]" />

      <Link
        to={"/valoPark/santaCatarina/inicio"}
        className={`group relative flex items-center justify-center overflow-hidden p-[clamp(7.39px,1.302083vw,25px)] gap-[clamp(4.43px,0.78125vw,15px)] bg-white shadow-[0_10px_35px_rgba(0,0,0,0.22)] hover:shadow-[0_14px_45px_rgba(0,0,0,0.32)] hover:scale-[1.03] active:scale-[0.985] hover:cursor-pointer transition-all duration-500 ease-out`}
      >
        <p className="text-paragraph-button text-santa-catarina font-semibold uppercase">
          Iniciar Experiencia
        </p>
        <ClickIcon className="w-[clamp(7.09px,1.25vw,24px)] text-santa-catarina" />
      </Link>
    </div>
  );
}
