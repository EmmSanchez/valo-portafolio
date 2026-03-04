import { Link } from "react-router";
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";
import { SPLASH_KEYS } from "@/components/shared/SplashScreen/const";
import SplashScreen from "@/components/shared/SplashScreen/SplashScreen";
import MainMenuVPSC from "../../components/Menus/MainMenu";
import PlayButtonVPSC from "../../components/Buttons/PlayButton";
import LogoValoParkSantaCatarina from "../../assets/logos/logo-valoParkSC";
import LogoValoMark from "@/apps/valoPortafolio/assets/logos/logo-valo-mark";

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
          <div className="absolute top-0 left-0 w-full justify-between flex default-logo-padding-around pointer-events-none">
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
          <div className="self-end flex items-end w-full justify-between default-padding">
            <MainMenuVPSC />
            <PlayButtonVPSC />
          </div>
        </>
      )}
    </div>
  );
}
