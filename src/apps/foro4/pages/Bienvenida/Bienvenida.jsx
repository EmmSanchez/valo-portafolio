import { Link, useOutletContext } from "react-router";
import ClickIcon from "../../assets/icons/ClickIcon";
import logo from "@/apps/foro4/assets/logos/main/logo-foro-4-white-green.svg";

export default function Bienvenida() {
  const { portadaEnded } = useOutletContext();
  return (
    <div
      className={`w-full h-svh flex flex-col justify-center items-center bg-foro4-morado/70 gap-[clamp(29.54px,5.208333vw,100px)] backdrop-blur-[5px]`}
    >
      <div
        className={`relative w-[clamp(323.74px,57.083333vw,1096px)] h-[clamp(35.44px,6.25vw,120px)]`}
      >
        <img
          draggable={false}
          src={logo}
          className="absolute inset-0 w-full h-full"
        />
      </div>
      <Link
        to={"/foro4/inicio"}
        className={`group relative flex items-center justify-center overflow-hidden p-[clamp(7.39px,1.302083vw,25px)] gap-[clamp(4.43px,0.78125vw,15px)] bg-white shadow-[0_10px_35px_rgba(0,0,0,0.22)] hover:shadow-[0_14px_45px_rgba(0,0,0,0.32)] hover:scale-[1.03] active:scale-[0.985] hover:cursor-pointer transition-all duration-500 ease-out ${portadaEnded ? "translate-y-0 opacity-100 blur-0" : "translate-y-[1vw] opacity-0 blur-[10px] pointer-events-none"}`}
      >
        <p className="text-paragraph-button text-foro4-morado font-semibold uppercase">
          Iniciar Experiencia
        </p>
        <ClickIcon className="w-[clamp(7.09px,1.25vw,24px)] text-foro4-morado" />
      </Link>
    </div>
  );
}
