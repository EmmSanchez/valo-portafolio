import { useState, useEffect } from "react";
import { useMap } from "@vis.gl/react-google-maps";
import AdvanceMarker from "@/components/shared/Map/AdvanceMarker";
import { FORO4_COORDENADAS } from "@/apps/foro4/data/map-coordenadas";
import EdificioIcon from "@/apps/foro4/assets/icons/ubicacion/EdificioIcon";
import { geojsonToVialidad } from "@/apps/valoParkSantaCatarina/utils/geojsonUtils";
import { useMapsLibrary } from "@vis.gl/react-google-maps";
import rutaClouthier from "@/apps/foro4/data/geojson/ruta-clouthier.json";
import rutaMorelos from "@/apps/foro4/data/geojson/ruta-morelos.json";
import rutaMorelosOeste from "@/apps/foro4/data/geojson/ruta-morelos-oeste.json";
import rutaJardines from "@/apps/foro4/data/geojson/ruta-jardines.json";
import rutaTorres from "@/apps/foro4/data/geojson/ruta-torres.json";

const RUTAS = [
  {
    geojson: rutaJardines,
    innerColor: "#492f87",
    outerColor: "#FFFFFF",
    outerWidth: 8,
    innerWidth: 5,
  },
  {
    geojson: rutaClouthier,
    innerColor: "#492f87",
    outerColor: "#FFFFFF",
    outerWidth: 8,
    innerWidth: 5,
  },
  {
    geojson: rutaMorelos,
    innerColor: "#492f87",
    outerColor: "#FFFFFF",
    outerWidth: 8,
    innerWidth: 5,
  },
  {
    geojson: rutaMorelosOeste,
    innerColor: "#492f87",
    outerColor: "#FFFFFF",
    outerWidth: 8,
    innerWidth: 5,
  },
  {
    geojson: rutaTorres,
    innerColor: "#492f87",
    outerColor: "#FFFFFF",
    outerWidth: 8,
    innerWidth: 5,
  },
];

const polylineData = RUTAS.flatMap(({ geojson, innerColor, ...options }) =>
  geojsonToVialidad(geojson, innerColor, options),
);

export default function VialidadesMarkers() {
  const map = useMap();
  const mapsLib = useMapsLibrary("maps");
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

  // Ruta
  useEffect(() => {
    if (!map || !mapsLib) return;

    const polylines = polylineData.map((vialidad) => {
      return new mapsLib.Polyline({
        path: vialidad.path,
        strokeColor: vialidad.strokeColor,
        strokeWeight: vialidad.strokeWidth,
        map,
      });
    });

    return () => polylines.forEach((p) => p.setMap(null));
  }, [map, mapsLib]);
  return (
    <>
      {FORO4_COORDENADAS.VIALIDADES.map((item) => {
        return (
          <>
            <AdvanceMarker key={item.id} position={item.coordinates}>
              <div
                className="relative flex items-center transition-opacity duration-300"
                style={{
                  opacity,
                  pointerEvents: opacity < 0.1 ? "none" : "auto",
                  rotate: `${item.rotation ?? 0}deg`,
                }}
              >
                {/* Label */}
                <div
                  className={`absolute top-1/2 -translate-y-1/2 flex items-center pt-2.5 pb-1.5 px-3 bg-foro4-morado backdrop-blur-sm border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.25)] whitespace-nowrap transition-all duration-300`}
                >
                  <p className="text-puntos-interes font-eurostile font-semibold uppercase tracking-wide text-white leading-none">
                    {item.label}
                  </p>
                </div>
              </div>
            </AdvanceMarker>
          </>
        );
      })}
    </>
  );
}
