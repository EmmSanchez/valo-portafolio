import { Link } from "react-router";
import MainMenuVPSC from "../../components/Menus/MainMenu";
import PlayButtonVPSC from "../../components/Buttons/PlayButton";
import LogoValoMark from "@/apps/valoPortafolio/assets/logos/logo-valo-mark";
import LogoValoParkSantaCatarinaWhite from "../../assets/logos/logo-valoParkSC-white";

export default function Home() {
  return (
    <div className="h-dvh w-dvw flex justify-center items-center overflow-hidden">
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
            <LogoValoParkSantaCatarinaWhite />
          </Link>
        </div>
      </div>
      <div className="self-end flex items-end w-full justify-between default-padding">
        <MainMenuVPSC />
        <PlayButtonVPSC />
      </div>
    </div>
  );
}
