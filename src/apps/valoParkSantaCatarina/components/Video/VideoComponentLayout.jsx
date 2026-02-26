import { Outlet } from "react-router";
import videos from "../../data/videos.json";
import { useLocation } from "react-router";
import { useRef, useEffect } from "react";

const videoMap = {
  "/valoPark/santaCatarina": videos.videos.portada.idle,
  "/valoPark/santaCatarina/informacion": videos.videos.portada.idle,
  "/valoPark/santaCatarina/masterplan": videos.videos.masterplan.idle,
};

export default function VideoComponentLayout() {
  const videoRef = useRef();
  const prevSrcRef = useRef(null);
  const { pathname } = useLocation();

  const videoSrc = videoMap[pathname];

  useEffect(() => {
    if (!videoSrc || prevSrcRef.current === videoSrc) return;

    prevSrcRef.current = videoSrc;
    videoRef.current.src = videoSrc;
    videoRef.current.play();
  }, [videoSrc]);
  return (
    <>
      <div className="absolute -z-50">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-dvw h-dvh"
          src={videoSrc}
        ></video>
      </div>

      <Outlet />
    </>
  );
}
