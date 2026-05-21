import { useEffect } from "react";
import { useMap } from "@vis.gl/react-google-maps";
import CustomMarker from "@/components/shared/Map/CustomMarker";
import PINForo4 from "@/apps/foro4/assets/main/pin-foro-4.svg";
import {
  FORO4_LANDMARK_POSITION,
  FORO4_MAP_FILTERS,
} from "../../data/map-config";
import { FORO4_MAP_CONFIG as MAP_CONFIG } from "../../data/map-config";

export default function MapContent({ filter, ActiveMarkers }) {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    if (filter === FORO4_MAP_FILTERS.VIALIDADES) {
      map.setZoom(17);
    } else {
      map.panTo(MAP_CONFIG.center);
      map.setZoom(MAP_CONFIG.zoom);
    }
  }, [map, filter]);

  return (
    <>
      <CustomMarker
        image={PINForo4}
        position={FORO4_LANDMARK_POSITION}
        size={80}
      />
      {ActiveMarkers && <ActiveMarkers />}
    </>
  );
}
