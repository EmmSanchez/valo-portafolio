import { useRef } from "react";
import { Link } from "react-router";
import { useState } from "react";
import { useScrollVideo } from "../../hooks/useScrollVideo";
import logo from "@/apps/foro4/assets/logos/main/logo-foro-4-purple-green.svg";
import BackButton from "@/components/shared/Buttons/BackButton";
import ScrollIcon from "@/apps/foro4/assets/icons/masterplan/rotacion-orbital/scroll.svg";
import VideoOrbital from "/foro4-videos/rotacion-orbital/32 VALO FORO 4 ROTACION ORBITAL.mp4";

export default function RotacionOrbital() {
  const videoRef = useRef(null);
  const [_, setShowHint] = useState(true);
  const [visible, setVisible] = useState(true);

  const hideHint = () => {
    setVisible(false);
    // Esperar a que termine la animación de salida antes de desmontar
    setTimeout(() => setShowHint(false), 400);
  };

  const showHintAgain = () => {
    setTimeout(() => {
      setShowHint(true);
      setTimeout(() => setVisible(true), 50);
    }, 5000);
  };

  useScrollVideo(videoRef, hideHint, showHintAgain);

  return (
    <div className="w-full h-svh default-foro4-padding">
      <div className="absolute top-0 left-0 z-50 default-logo-padding">
        <Link to={"/foro4"}>
          <img
            src={logo}
            alt="Lofo de FORO 4"
            className="w-[clamp(59.13px,10.416667vw,200px)] h-[clamp(6.51px,1.145833vw,22px)]"
          />
        </Link>
      </div>

      {/* Content */}
      <div className="relative z-10 flex w-full h-full items-end justify-between pointer-events-none">
        <div className="flex flex-col pointer-events-none">
          <BackButton
            to="/foro4/masterplan/vista-cenital"
            className="bg-white text-foro4-morado pointer-events-auto"
          />
        </div>
      </div>

      {/* Botón de scroll */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-1/2 z-20 transition-all duration-400 ease-in-out ${
          visible
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <div className="flex justify-between w-[clamp(92.75px,16.354167vw,314px)] h-[clamp(23.63px,4.166667vw,80px)] px-[clamp(7.39px,1.302083vw,25px)] py-[clamp(5.32px,0.9375vw,18px)] bg-foro4-morado pointer-events-auto">
          <div className="flex size-[clamp(10.34px,1.822917vw,35px)] justify-center items-center">
            <img src={ScrollIcon} alt="Ícono de scroll" />
          </div>
          <div className="text-center">
            <p className="text-paragraph-button leading-[100%]">
              Scroll para explorar
            </p>
            <p className="text-paragraph-sub-button">
              Desliza hacia arriba o abajo
            </p>
          </div>
        </div>
      </div>

      {/* Video */}
      <video
        ref={videoRef}
        src={VideoOrbital}
        playsInline
        muted
        loop
        className="fixed z-0 w-full max-w-full h-full object-cover top-0 left-0"
      />
    </div>
  );
}
