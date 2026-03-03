import BackButton from "@/components/shared/Buttons/BackButton";
import naveBg from "../../assets/images/navesbg.png";
import { Link } from "react-router";

export default function Disponibilidad() {
  return (
    <div className="flex w-dvw h-dvh default-padding pointer-events-none">
      <img
        src={naveBg}
        alt="Fondo de Nave Industrial"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      <div className="absolute inset-0 w-dvw h-dvh flex flex-row justify-center items-center gap-[clamp(7.99px,1.41vw,27px)] pointer-events-auto">
        <Link
          to="/valoPark/santaCatarina/masterplan/naves-industriales/nave-11"
          className="flex justify-center items-center w-[clamp(211.73px,37.29vw,716px)] h-[clamp(31.41px,9.81vh,106px)] border-[clamp(0.89px,0.16vw,3px)] border-valo text-subtitle text-valo font-lumarc bg-white uppercase"
        >
          Nave 11: Disponible
        </Link>

        <Link
          to="/valoPark/santaCatarina/masterplan/naves-industriales/nave-12"
          className="flex justify-center items-center w-[clamp(211.73px,37.29vw,716px)] h-[clamp(31.41px,9.81vh,106px)] border-[clamp(0.89px,0.16vw,3px)] border-valo text-subtitle text-valo font-lumarc bg-white uppercase"
        >
          Nave 12: Disponible
        </Link>
      </div>

      <BackButton
        to="/valoPark/santaCatarina"
        className="self-end pointer-events-auto bg-santa-catarina hover:bg-santa-catarina-grey"
      />
    </div>
  );
}
