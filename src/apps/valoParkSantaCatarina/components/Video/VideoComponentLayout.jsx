import { Outlet, useSearchParams } from "react-router";
import { useLocation } from "react-router";
import { useRef, useEffect } from "react";
import portadas from "../../data/Videos/portadas.json";
import rde from "../../data/Videos/rde.json";

const videoMap = {
  "/valoPark/santaCatarina": portadas.informacion,
  "/valoPark/santaCatarina/informacion": portadas.informacion,
  "/valoPark/santaCatarina/masterplan?position=1": rde.videos[0].src,
  "/valoPark/santaCatarina/masterplan?position=2": rde.videos[2].src,
  "/valoPark/santaCatarina/masterplan?position=3": rde.videos[4].src,
  "/valoPark/santaCatarina/masterplan?position=4": rde.videos[6].src,
  "/valoPark/santaCatarina/masterplan?position=5": rde.videos[8].src,
};

export default function VideoComponentLayout() {
  const videoRef = useRef();
  const prevSrcRef = useRef(null);

  const [searchParams] = useSearchParams();
  const { pathname } = useLocation();
  const position = searchParams.get("position");

  const videoKey = position ? `${pathname}?position=${position}` : pathname;
  const videoSrc = videoMap[videoKey];

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
          className="w-dvw h-dvh object-cover"
          src={videoSrc}
        ></video>
      </div>

      <Outlet />
    </>
  );
}
