import { useContext } from "react";
import { AppContext } from "@/context/AppContext";
import { LogoValo } from "@/assets/logos/logo-valo";

export default function SplashScreen() {
  const { toggleSplashScreen } = useContext(AppContext);
  const handleClik = () => {
    toggleSplashScreen();
  };
  return (
    <div
      onClick={handleClik}
      className="h-dvh w-dvw flex justify-center items-center bg-[#12274C]/85 cursor-pointer"
    >
      <LogoValo />
    </div>
  );
}
