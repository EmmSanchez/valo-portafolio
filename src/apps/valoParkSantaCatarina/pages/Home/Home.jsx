import SplashScreen from "@/components/shared/SplashScreen/SplashScreen";
import { AppContext } from "@/context/AppContext";
import React from "react";
import { useContext } from "react";
import { SPLASH_KEYS } from "@/components/shared/SplashScreen/const";

export default function Home() {
  const { showSplashScreen } = useContext(AppContext);

  return (
    <div className="w-dvw h-dvh bg-valo">
      {showSplashScreen[SPLASH_KEYS.VPSC_SPLASH_KEY] && (
        <SplashScreen
          splashKey={SPLASH_KEYS.VPSC_SPLASH_KEY}
          className="bg-white/60"
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
