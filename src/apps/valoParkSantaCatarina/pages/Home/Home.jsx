import SplashScreen from "@/components/shared/SplashScreen/SplashScreen";
import { AppContext } from "@/context/AppContext";
import React from "react";
import { useContext } from "react";
import { SPLASH_KEYS } from "@/components/shared/SplashScreen/const";
import LogoValoParkSantaCatarina from "../../assets/logos/logo-valoParkSC";

export default function Home() {
  const { showSplashScreen } = useContext(AppContext);

  return (
    <div className="w-dvw h-dvh bg-red-400">
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
          <p>Sin Splash Scren</p>
        </>
      )}
    </div>
  );
}
