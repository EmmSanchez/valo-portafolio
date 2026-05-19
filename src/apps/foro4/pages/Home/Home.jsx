import logo from "@/apps/foro4/assets/logos/main/logo-foro-4-purple-green.svg";
import { Link } from "react-router";
import MainMenuForo4 from "../../components/MainMenuForo4";

export default function Home() {
  return (
    <div className="w-full h-svh default-foro4-padding bg-cyan-800">
      <div className="absolute top-0 left-0 z-50 default-logo-padding">
        <Link to={"/foro4"}>
          <img
            src={logo}
            alt="Lofo de FORO 4"
            className="w-[clamp(59.13px,10.416667vw,200px)] h-[clamp(6.51px,1.145833vw,22px)] "
          />
        </Link>
      </div>

      <div className="flex w-full h-full items-end ">
        <MainMenuForo4 />
      </div>
    </div>
  );
}
