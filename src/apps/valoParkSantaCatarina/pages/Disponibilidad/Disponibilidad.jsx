import BackButton from "@/components/shared/Buttons/BackButton";
import { Link } from "react-router";
import LogoValoMark from "@/apps/valoPortafolio/assets/logos/logo-valo-mark";
import LogoValoParkSantaCatarina from "../../assets/logos/logo-valoParkSC";

export default function Disponibilidad() {
  return (
    <div className="flex w-dvw h-dvh default-padding pointer-events-none">
      <div className="absolute top-0 left-0 z-50 flex w-full justify-between default-logo-padding-around">
        <div className="relative w-[clamp(50px,7.34vw,141px)]">
          <Link to="/" className="absolute inset-0 pointer-events-auto">
            <LogoValoMark className="text-valo" />
          </Link>
        </div>

        <div className="relative w-[clamp(58.33px,10.26vw,197px)] h-[clamp(17.76px,3.13vw,60px)]">
          <Link
            to="/valoPark/santaCatarina"
            className="absolute inset-0 pointer-events-auto"
          >
            <LogoValoParkSantaCatarina />
          </Link>
        </div>
      </div>

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
