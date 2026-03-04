import AdvanceMarker from "@/components/shared/Map/AdvanceMarker";
import cartLandmark from "@/apps/valoParkSantaCatarina/assets/icons/ubicacion/puntos_interes/cartLandmark.svg";
import { COORDENADAS } from "@/apps/valoParkSantaCatarina/data/Ubicaciones";
import { useMap } from "@vis.gl/react-google-maps";
import { useState } from "react";
import { useEffect } from "react";

export default function SupermercadosMarkers() {
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
      {COORDENADAS.SUPERMERCADOS.map((item) => {
        return (
          <AdvanceMarker key={item.id} position={item.coordinates}>
            <div
              className="relative flex"
              style={{
                opacity,
                transition: "opacity 0.3s ease",
                pointerEvents: opacity < 0.1 ? "none" : "auto",
              }}
            >
              <img
                src={cartLandmark}
                alt="Bus Landmark"
                className="size-[clamp(11.83px,2.08vw,40px)]"
              />
              <div
                className={`absolute top-1/2 -translate-y-1/2 -z-10 w-fit py-[clamp(1.48px,0.26vw,5px)] whitespace-nowrap bg-santa-catarina font-semibold uppercase ${item.labelSide === "left" ? "right-1/2 pl-[clamp(2.96px,0.52vw,10px)] pr-[clamp(7.4px,1.3vw,25px)]" : "left-1/2 pr-[clamp(2.96px,0.52vw,10px)] pl-[clamp(7.4px,1.3vw,25px)]"}`}
              >
                <p className="text-puntos-interes pt-1 2xl:pt-1.5 font-eurostile">
                  {item.label}
                </p>
              </div>
            </div>
          </AdvanceMarker>
        );
      })}
    </>
  );
}
