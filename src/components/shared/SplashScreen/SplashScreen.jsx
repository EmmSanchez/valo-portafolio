import { useContext } from "react";
import { AppContext } from "@/context/AppContext";
import { LogoValo } from "@/apps/valoPortafolio/assets/logos/logo-valo";

export default function SplashScreen({ splashKey, className = "", logo }) {
  const { toggleSplashScreen } = useContext(AppContext);
  if (!logo) return null;

  const LogoComponent = logo;

  return (
    <div
      onClick={() => toggleSplashScreen(splashKey)}
      className={`h-dvh w-dvw flex justify-center items-center cursor-pointer ${className}`}
    >
      <LogoComponent />
    </div>
  );
}
