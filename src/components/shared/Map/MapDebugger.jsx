import { useEffect } from "react";
import { useMap } from "@vis.gl/react-google-maps";

export default function MapDebugger() {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    const handleIdle = () => {
      const center = map.getCenter();
      const zoom = map.getZoom();

      console.log("Center:", {
        lat: center.lat(),
        lng: center.lng(),
      });

      console.log("Zoom:", zoom);
    };

    map.addListener("idle", handleIdle);

    return () => {
      window.google.maps.event.clearListeners(map, "idle");
    };
  }, [map]);

  return null;
}
