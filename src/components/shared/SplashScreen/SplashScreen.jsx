import { useContext } from "react";
import { AppContext } from "@/context/AppContext";

export default function SplashScreen({
  splashKey,
  bgColor = "",
  logo,
  logoSize = "size-10",
}) {
  const { toggleSplashScreen } = useContext(AppContext);
  if (!logo) return null;

  const LogoComponent = logo;

  return (
    <div
      onClick={() => toggleSplashScreen(splashKey)}
      className={`h-dvh w-dvw flex justify-center items-center cursor-pointer ${bgColor}`}
    >
      <span className={`relative ${logoSize}`}>
        <LogoComponent className="absolute inset-0" />
      </span>
    </div>
  );
}
