import { useRef } from "react";
import { useEffect } from "react";

const SCROLL_STEP = 0.1; // segundos por tick
const IDLE_TIMEOUT = 2000; // ms sin scroll para reanudar autoplay

export const useScrollVideo = (videoRef, onScroll, onIdle) => {
  const idleTimer = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const resumeAutoplay = () => {
      video.play();
      onIdle?.();
    };

    const handleWheel = (e) => {
      e.preventDefault();

      onScroll?.();

      video.pause();
      const next =
        video.currentTime + (e.deltaY > 0 ? SCROLL_STEP : -SCROLL_STEP);

      // Wrap en lugar de clamp
      if (next >= video.duration) {
        video.currentTime = next - video.duration;
      } else if (next < 0) {
        video.currentTime = video.duration + next;
      } else {
        video.currentTime = next;
      }

      clearTimeout(idleTimer.current);
      idleTimer.current = setTimeout(resumeAutoplay, IDLE_TIMEOUT);
    };

    video.play();
    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      clearTimeout(idleTimer.current);
    };
  }, [videoRef]);
};
