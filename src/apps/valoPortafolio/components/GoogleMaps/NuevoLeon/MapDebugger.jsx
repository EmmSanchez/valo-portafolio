import { useMap } from "@vis.gl/react-google-maps";
import { useEffect } from "react";
import { useState } from "react";

export default function MapDebugger() {
  const map = useMap();
  const [info, setInfo] = useState({ zoom: null, lat: null, lng: null });

  useEffect(() => {
    if (!map) return;

    const update = () => {
      const center = map.getCenter();
      setInfo({
        zoom: map.getZoom(),
        lat: center?.lat().toFixed(6),
        lng: center?.lng().toFixed(6),
      });
    };

    update();
    const z = map.addListener("zoom_changed", update);
    const c = map.addListener("center_changed", update);
    return () => {
      z.remove();
      c.remove();
    };
  }, [map]);

  if (!map) return null;

  return (
    <>
      <div className="fixed bottom-4 right-4 z-[9999] bg-black/90 text-green-400 font-mono text-xl px-4 py-3 rounded-lg border border-green-400/20 shadow-xl pointer-events-none">
        <p className="text-white/40 uppercase tracking-widest text-[20px] mb-2">
          Map Debug
        </p>
        <div className="space-y-1">
          <p>
            🔍 zoom <span className="text-white ml-2">{info.zoom ?? "—"}</span>
          </p>
          <p>
            📍 lat <span className="text-white ml-2">{info.lat ?? "—"}</span>
          </p>
          <p>
            📍 lng <span className="text-white ml-2">{info.lng ?? "—"}</span>
          </p>
        </div>
      </div>
    </>
  );
}
