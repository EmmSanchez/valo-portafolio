import { useState, useEffect } from "react";
import { useMap } from "@vis.gl/react-google-maps";
import AdvanceMarker from "@/components/shared/Map/AdvanceMarker";
import { FORO4_COORDENADAS } from "@/apps/foro4/data/map-coordenadas";
import EdificioIcon from "@/apps/foro4/assets/icons/ubicacion/EdificioIcon";
import PinIcon from "@/apps/foro4/assets/icons/ubicacion/PinIcon";

export default function GolfMarkers() {
  const map = useMap();
  const [zoom, setZoom] = useState(null);

  useEffect(() => {
    if (!map) return;

    const updateOpacityValue = () => {
      setZoom(map.getZoom());
      const listener = map.addListener("zoom_changed", () => {
        setZoom(map.getZoom());
      });
      return () => listener.remove();
    };

    updateOpacityValue();
  }, [map]);

  const opacity =
    zoom === null ? 1 : Math.min(1, Math.max(0, (zoom - 12) / 0.1));
  return (
    <>
      {FORO4_COORDENADAS.GOLF.map((item) => {
        const IconComponent = item.icon;
        const isCircleIcon = item.bgIcon === "circle";
        return (
          <AdvanceMarker key={item.id} position={item.coordinates}>
            <div
              className="relative flex items-center transition-opacity duration-300"
              style={{
                opacity,
                pointerEvents: opacity < 0.1 ? "none" : "auto",
              }}
            >
              {/* Label */}
              <div
                className={`absolute top-1/2 -translate-y-1/2 flex items-center pt-2.5 pb-1.5 bg-foro4-morado backdrop-blur-sm border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.25)] whitespace-nowrap transition-all duration-300 ${
                  item.labelSide === "left"
                    ? ` right-[50%] pl-[clamp(8px,1vw,18px)] pr-[clamp(28px,3.2vw,30px)]`
                    : `left-[50%] pr-[clamp(8px,1vw,18px)] pl-[clamp(28px,3.2vw,30px)]`
                }`}
              >
                <p className="text-puntos-ubicaciones font-eurostile font-semibold uppercase tracking-wide text-white leading-none">
                  {item.label}
                </p>
              </div>

              <div className="relative z-10 flex flex-col items-center">
                <div className="relative">
                  {/* Ícono */}
                  <IconComponent className="absolute z-10 left-1/2 -translate-x-1/2 -translate-y-13/20 w-6 text-[#2B1D67]" />

                  {isCircleIcon ? (
                    <>
                      {/* Circle */}
                      <div className="absolute left-1/2 -translate-x-1/2 -translate-y-11/20 size-12 rounded-full bg-white drop-shadow-sm"></div>
                    </>
                  ) : (
                    <>
                      {/* Pin */}
                      <PinIcon className="absolute w-10 z-0 inset-0 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-2xl" />
                    </>
                  )}
                </div>
              </div>
            </div>
          </AdvanceMarker>
        );
      })}
    </>
  );
}
