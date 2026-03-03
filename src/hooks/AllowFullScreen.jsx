import { useEffect } from "react";

export function useAutoFullscreen() {
  useEffect(() => {
    const enableFullscreen = (event) => {
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
