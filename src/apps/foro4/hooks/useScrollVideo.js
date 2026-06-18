import { useRef, useEffect } from "react";

const SCROLL_STEP = 0.1;
const IDLE_TIMEOUT = 2000;
const TOUCH_SENSITIVITY = 0.015; // segundos por píxel de deslizamiento

export const useScrollVideo = (videoRef, onScroll, onIdle) => {
  const idleTimer = useRef(null);
  const lastTouchY = useRef(null); // 👈 guarda posición del dedo anterior

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const resumeAutoplay = () => {
      video.play();
      onIdle?.();
    };

    // Extraído para reutilizar entre wheel y touch
    const scrubVideo = (deltaSeconds) => {
      const next = video.currentTime + deltaSeconds;
      if (next >= video.duration) {
        video.currentTime = next - video.duration;
      } else if (next < 0) {
        video.currentTime = video.duration + next;
      } else {
        video.currentTime = next;
      }
    };

    // — Wheel (desktop) —
    const handleWheel = (e) => {
      e.preventDefault();
      onScroll?.();
      video.pause();
      scrubVideo(e.deltaY > 0 ? SCROLL_STEP : -SCROLL_STEP);
      clearTimeout(idleTimer.current);
      idleTimer.current = setTimeout(resumeAutoplay, IDLE_TIMEOUT);
    };

    // — Touch (mobile) —
    const handleTouchStart = (e) => {
      lastTouchY.current = e.touches[0].clientY;
      video.pause();
      onScroll?.();
    };

    const handleTouchMove = (e) => {
      e.preventDefault(); // evita que la página scrollee
      if (lastTouchY.current === null) return;

      const currentY = e.touches[0].clientY;
      const deltaPixels = lastTouchY.current - currentY; // positivo = dedo sube = avanza
      lastTouchY.current = currentY;

      scrubVideo(deltaPixels * TOUCH_SENSITIVITY);

      clearTimeout(idleTimer.current);
      idleTimer.current = setTimeout(resumeAutoplay, IDLE_TIMEOUT);
    };

    const handleTouchEnd = () => {
      lastTouchY.current = null;
      clearTimeout(idleTimer.current);
      idleTimer.current = setTimeout(resumeAutoplay, IDLE_TIMEOUT);
    };

    video.play();

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: false });
    window.addEventListener("touchmove", handleTouchMove, { passive: false }); // passive: false obligatorio para poder llamar preventDefault
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      clearTimeout(idleTimer.current);
    };
  }, [videoRef]);
};
