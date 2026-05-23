import { useNavigate } from "react-router";
import { ReturnIcon } from "@/apps/valoPortafolio/assets/icons/ReturnIcon";
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";
import { useLocation } from "react-router";
import { SPLASH_KEYS } from "@/components/shared/SplashScreen/const";

export default function BackButton({
  to = "",
  className = "bg-valo hover:bg-white text-white hover:text-valo",
}) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { toggleSplashScreen } = useContext(AppContext);

  const handleBack = () => {
    if (pathname === "/") {
      toggleSplashScreen(SPLASH_KEYS.PORTAFOLIO_SPLASH_KEY);
    } else {
      navigate(to);
    }
  };

  return (
    <button
      onClick={() => handleBack()}
      className={`group flex justify-between items-center w-[clamp(180px,16.2vw,311px)] h-[clamp(38px,3.65vw,70px)] px-[29px] 2xl:px-11.25 hover:cursor-pointer -translate-y-0.5 ${className}`}
    >
      <p className="text-paragraph-button font-semibold group-hover:font-bold">
        Regresar
      </p>

      <span className="relative size-[clamp(16px,1.35vw,26px)]">
        <span className="absolute inset-0">
          <ReturnIcon />
        </span>
      </span>
    </button>
  );
}
