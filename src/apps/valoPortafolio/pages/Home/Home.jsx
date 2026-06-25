import MainMenu from "@/apps/valoPortafolio/components/Menus/MainMenu";
import BackButton from "@/components/shared/Buttons/BackButton";
import LogoValoMark from "@/apps/valoPortafolio/assets/logos/logo-valo-mark";
import { Link } from "react-router";
import SocialIcon from "../../components/Buttons/social-icon";
import Instagram from "../../assets/icons/social-icons/instagram";
import Facebook from "../../assets/icons/social-icons/facebook";
import Linkedin from "../../assets/icons/social-icons/linkedin";

export default function Home() {
  return (
    <div className="h-dvh w-dvw flex justify-center items-center overflow-hidden">
      <div className="absolute top-0 left-0 default-logo-padding">
        <div className="relative w-[clamp(50px,7.34vw,141px)]">
          <Link to="/" className="absolute inset-0">
            <LogoValoMark className="text-valo" />
          </Link>
        </div>
      </div>
      <div className="self-end flex items-end w-full justify-between default-padding">
        <div>
          <MainMenu />
          <BackButton to="/bienvenida" />
        </div>
        <div className="flex gap-[clamp(4px,1.197917vw,23px)]">
          <SocialIcon
            icon={Instagram}
            href={"https://www.instagram.com/valodevelopers/"}
            className="text-valo group-hover:text-white"
          />
          <SocialIcon
            icon={Facebook}
            href={"https://www.facebook.com/valodevelopers"}
            className="text-valo group-hover:text-white"
          />
          <SocialIcon
            icon={Linkedin}
            href={"https://www.linkedin.com/company/valo-developers/"}
            className="text-valo group-hover:text-white"
          />
        </div>
      </div>
    </div>
  );
}
