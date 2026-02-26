import SplashScreen from "@/components/shared/SplashScreen/SplashScreen";
import { AppContext } from "@/context/AppContext";
import React from "react";
import { useContext } from "react";
import { SPLASH_KEYS } from "@/components/shared/SplashScreen/const";
import LogoValoParkSantaCatarina from "../../assets/logos/logo-valoParkSC";
import MainMenuVPSC from "../../components/Menus/MainMenu";
import PlayButtonVPSC from "../../components/Buttons/PlayButton";

export default function Home() {
  const { showSplashScreen } = useContext(AppContext);

  return (
    <div className="h-dvh w-dvw flex justify-center items-center overflow-hidden">
      {showSplashScreen[SPLASH_KEYS.VPSC_SPLASH_KEY] && (
        <SplashScreen
          logo={LogoValoParkSantaCatarina}
          splashKey={SPLASH_KEYS.VPSC_SPLASH_KEY}
          bgColor="bg-white/60"
          logoSize="w-[clamp(207.29px,36.46vw,700px)] h-[clamp(62.77px,11.04vw,212px)]"
        />
      )}

      {!showSplashScreen[SPLASH_KEYS.VPSC_SPLASH_KEY] && (
        <>
          <div className="absolute top-0 left-0 default-logo-padding">
            <div className="relative w-[clamp(58.33px,10.26vw,197px)] h-[clamp(17.76px,3.13vw,60px)]">
              <span className="absolute inset-0">
                <LogoValoParkSantaCatarina />
              </span>
            </div>
          </div>
          <div className="self-end flex items-end w-full justify-between default-padding">
            <MainMenuVPSC />
            <PlayButtonVPSC />
          </div>
        </>
      )}
    </div>
  );
}
