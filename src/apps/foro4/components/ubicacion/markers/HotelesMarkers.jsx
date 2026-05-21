import { useState, useEffect } from "react";
import { useMap } from "@vis.gl/react-google-maps";
import AdvanceMarker from "@/components/shared/Map/AdvanceMarker";
import { FORO4_COORDENADAS } from "@/apps/foro4/data/map-coordenadas";
import EdificioIcon from "@/apps/foro4/assets/icons/ubicacion/EdificioIcon";

export default function HotelesMarkers() {
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
    zoom === null ? 1 : Math.min(1, Math.max(0, (zoom - 13) / 0.1));
  return (
    <>
      {FORO4_COORDENADAS.HOTELES.map((item) => {
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
                className={`absolute top-1/2 -translate-y-1/2 flex items-center h-[clamp(18px,3vw,58px)] bg-foro4-morado/95 backdrop-blur-sm border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.25)] whitespace-nowrap transition-all duration-300 ${
                  item.labelSide === "left"
                    ? ` right-[50%] rounded-l-full pl-[clamp(8px,1vw,18px)] pr-[clamp(28px,3.2vw,60px)]`
                    : `left-[50%] rounded-r-full pr-[clamp(8px,1vw,18px)] pl-[clamp(28px,3.2vw,60px)]`
                }`}
              >
                <p className="text-puntos-interes font-semibold uppercase tracking-wide text-white">
                  {item.label}
                </p>
              </div>

              <div className="relative z-10 flex items-center justify-center size-[clamp(24px,4vw,72px)] rounded-full border border-foro4-verde bg-white shadow-[0_6px_24px_rgba(0,0,0,0.28)] transition-transform duration-300 hover:scale-105">
                <EdificioIcon className="size-[clamp(11.83px,2.08vw,40px)] text-foro4-verde" />
              </div>
            </div>
          </AdvanceMarker>
        );
      })}
    </>
  );
}
