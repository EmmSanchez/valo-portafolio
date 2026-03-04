import { useEffect } from "react";
import { IS_DEVELOPMENT } from "@/config";

export function useAutoFullscreen() {
  useEffect(() => {
    const enableFullscreen = (event) => {
      if (IS_DEVELOPMENT) return;
      const elem = document.documentElement;

      if (!document.fullscreenElement) {
        if (elem.requestFullscreen) {
          elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) {
          elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) {
          elem.msRequestFullscreen();
        }
      }
    };

    document.addEventListener("click", enableFullscreen);

    return () => {
      document.removeEventListener("click", enableFullscreen);
    };
  }, []);
}
