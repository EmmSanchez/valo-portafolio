import { Link } from "react-router";
import logoPurple from "@/apps/foro4/assets/logos/main/logo-foro-4-purple-green.svg";
import MainMenuForo4 from "../../components/MainMenuForo4";
import PlayButton from "@/apps/foro4/components/PlayButton";
import LogoValoMark from "@/apps/valoPortafolio/assets/logos/logo-valo-mark";

export default function Home() {
  return (
    <>
      <div className="relative w-full h-svh default-foro4-padding">
        <div className="absolute top-0 left-0 z-50 w-full h-fit default-logo-padding-around">
          <div className="relative flex justify-between items-center w-full h-full">
            {/* Logo Valo */}
            <Link
              to="/"
              className="flex w-[clamp(50px,7.34vw,141px)] pointer-events-auto"
            >
              <LogoValoMark className="text-valo" />
            </Link>

            {/* Logo Foro */}
            <Link to={"/foro4/inicio"}>
              <img
                src={logoPurple}
                alt="Logo de FORO 4"
                className="w-[clamp(59.13px,10.416667vw,200px)]"
              />
            </Link>
          </div>
        </div>

        <div className="flex w-full h-full justify-between items-end">
          <MainMenuForo4 />
          <Link to={"#"}>
            <PlayButton />
          </Link>
        </div>
      </div>
    </>
  );
}
