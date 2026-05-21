import { Link } from "react-router";
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";
import { SPLASH_KEYS } from "@/components/shared/SplashScreen/const";
import logo from "@/apps/foro4/assets/logos/main/logo-foro-4-white-green.svg";
import MainMenuForo4 from "../../components/MainMenuForo4";
import PlayButton from "@/apps/foro4/components/PlayButton";
import ClickIcon from "../../assets/icons/ClickIcon";

export function SplashScreen({ splashKey }) {
  const { toggleSplashScreen } = useContext(AppContext);

  return (
    <div
      className={`w-full h-svh flex flex-col justify-center items-center bg-foro4-morado/70 gap-[clamp(29.54px,5.208333vw,100px)]`}
    >
      <div
        className={`relative w-[clamp(323.74px,57.083333vw,1096px)] h-[clamp(35.44px,6.25vw,120px)] backdrop-blur-lg`}
      >
        <img src={logo} className="absolute inset-0 w-full h-full" />
      </div>
      <button
        onClick={() => toggleSplashScreen(splashKey)}
        className="flex justify-center items-center p-[clamp(7.39px,1.302083vw,25px)] gap-[clamp(4.43px,0.78125vw,15px)] bg-white hover:cursor-pointer"
      >
        <p className="text-paragraph-button text-foro4-morado font-semibold uppercase">
          Iniciar Experiencia
        </p>
        <ClickIcon className="w-[clamp(7.09px,1.25vw,24px)] text-foro4-morado" />
      </button>
    </div>
  );
}

export default function Home() {
  const { showSplashScreen, toggleSplashScreen } = useContext(AppContext);

  return (
    <>
      {showSplashScreen[SPLASH_KEYS.FORO4_SPLASH_KEY] && (
        <SplashScreen splashKey={SPLASH_KEYS.FORO4_SPLASH_KEY} />
      )}

      {!showSplashScreen[SPLASH_KEYS.FORO4_SPLASH_KEY] && (
        <div className="w-full h-svh default-foro4-padding bg-foro4-morado/70">
          <div className="absolute top-0 left-0 z-50 default-logo-padding">
            <Link
              onClick={() => toggleSplashScreen(SPLASH_KEYS.FORO4_SPLASH_KEY)}
              to={"/foro4"}
            >
              <img
                src={logo}
                alt="Logo de FORO 4"
                className="w-[clamp(59.13px,10.416667vw,200px)] h-[clamp(6.51px,1.145833vw,22px)]"
              />
            </Link>
          </div>

          <div className="flex w-full h-full justify-between items-end">
            <MainMenuForo4 />
            <Link to={"/foro4/video"}>
              <PlayButton />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
