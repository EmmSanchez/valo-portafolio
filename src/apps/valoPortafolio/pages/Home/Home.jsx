import { useContext } from "react";
import { AppContext } from "@/context/AppContext";
import SplashScreen from "@/components/shared/SplashScreen/SplashScreen";
import bgImage from "@/apps/valoPortafolio/assets/images/home-screen.webp";
import MainMenu from "@/apps/valoPortafolio/components/Menus/MainMenu";
import PlayButton from "@/apps/valoPortafolio/components/Buttons/PlayButton";
import BackButton from "@/apps/valoPortafolio/components/Navigation/BackButton";
import LogoValoMark from "@/apps/valoPortafolio/assets/logos/logo-valo-mark";
import { SPLASH_KEYS } from "@/components/shared/SplashScreen/const";
import { LogoValo } from "@/apps/valoPortafolio/assets/logos/logo-valo";

export default function Home() {
  const { showSplashScreen } = useContext(AppContext);

  return (
    <div className="h-dvh w-dvw flex justify-center items-center overflow-hidden">
      {showSplashScreen[SPLASH_KEYS.PORTAFOLIO_SPLASH_KEY] && (
        <SplashScreen
          logo={LogoValo}
          splashKey={SPLASH_KEYS.PORTAFOLIO_SPLASH_KEY}
          className="bg-[#12274C]/85"
        />
      )}

      {!showSplashScreen[SPLASH_KEYS.PORTAFOLIO_SPLASH_KEY] && (
        <>
          <div className="absolute top-0 left-0 default-logo-padding">
            <div className="relative w-[clamp(50px,7.34vw,141px)]">
              <span className="absolute inset-0">
                <LogoValoMark className="text-valo" />
              </span>
            </div>
          </div>
          <div className="self-end flex items-end w-full justify-between default-padding">
            <div>
              <MainMenu />
              <BackButton />
            </div>
            <PlayButton />
          </div>
        </>
      )}

      {/* Background */}
      <div className="absolute -z-50">
        <img
          src={bgImage}
          alt="Imagen de fondo"
          className="w-dvw h-dvh object-cover"
        />
      </div>
    </div>
  );
}
