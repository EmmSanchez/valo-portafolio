import { useState } from "react";
import { VideoPlayerContext } from "./VideoPlayerContext";
import { MODE } from "../const/Videos";

export function VideoPlayerProvider({ children }) {
  const [mode, setMode] = useState(MODE.IDLE);

  const setTransitioning = () => {
    setMode(MODE.TRANSITIONING);
  };

  const setIdle = () => {
    setMode(MODE.IDLE);
  };

  return (
    <VideoPlayerContext.Provider value={{ mode, setIdle, setTransitioning }}>
      {children}
    </VideoPlayerContext.Provider>
  );
}
