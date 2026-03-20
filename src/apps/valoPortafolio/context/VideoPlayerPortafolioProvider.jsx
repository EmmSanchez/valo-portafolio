import { useState, useCallback } from "react";
import { VideoPlayerPortafolioContext } from "./VideoPlayerPortafolioContext";
import { MODE } from "../const/Videos";

export function VideoPlayerPortafolioProvider({ children }) {
  const [mode, setMode] = useState(MODE.IDLE);

  const setTransitioning = useCallback(() => setMode(MODE.TRANSITIONING), []);
  const setIdle = useCallback(() => setMode(MODE.IDLE), []);

  return (
    <VideoPlayerPortafolioContext.Provider
      value={{ mode, setIdle, setTransitioning }}
    >
      {children}
    </VideoPlayerPortafolioContext.Provider>
  );
}
