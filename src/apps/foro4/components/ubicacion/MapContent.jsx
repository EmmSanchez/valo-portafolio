import { useEffect } from "react";
import { useMap } from "@vis.gl/react-google-maps";
import CustomMarker from "@/components/shared/Map/CustomMarker";
import PINForo4 from "@/apps/foro4/assets/main/pin-foro-4.svg";
import {
  FORO4_LANDMARK_POSITION,
  FORO4_MAP_FILTERS,
} from "../../data/map-config";
import { FORO4_MAP_CONFIG as MAP_CONFIG } from "../../data/map-config";
import MapDebugger from "@/components/shared/Map/MapDebugger";
import { useIsMobile } from "@/hooks/useIsMobile";

const FILTER_CAMERA_CONFIG = {
  [FORO4_MAP_FILTERS.AEROPUERTO]: {
    center: { lat: 21.083810515095234, lng: -101.52044719517052 },
    zoom: 12,
    mobileZoom: 10,
    heading: 0,
  },
  [FORO4_MAP_FILTERS.GOLF]: {
    center: { lat: 21.18109858701598, lng: -101.67124903795194 },
    zoom: 14,
    mobileZoom: 13,
    heading: 0,
  },
  [FORO4_MAP_FILTERS.CENTROS_COMERCIALES]: {
    center: { lat: 21.165971721643533, lng: -101.67468226537012 },
    zoom: 14,
    mobileZoom: 13,
    heading: 0,
  },
  [FORO4_MAP_FILTERS.VIALIDADES]: {
    center: { lat: 21.16214287637686, lng: -101.69217174463986 },
    zoom: 16,
    mobileZoom: 15,
    heading: 80,
  },
};

export default function MapContent({ filter, ActiveMarkers }) {
  const map = useMap();
  const isMobile = useIsMobile();

  useEffect(() => {
    if (!map) return;

    const camera = FILTER_CAMERA_CONFIG[filter] ?? {
      center: isMobile ? MAP_CONFIG.mobileCenter : MAP_CONFIG.center,
      zoom: isMobile ? MAP_CONFIG.mobileZoom : MAP_CONFIG.zoom,
      heading: MAP_CONFIG.heading,
    };

    const zoom = isMobile ? (camera.mobileZoom ?? camera.zoom) : camera.zoom;

    map.panTo(camera.center);
    map.setZoom(zoom);
    map.setHeading(camera.heading);
  }, [map, filter, isMobile]);

  return (
    <>
      <CustomMarker
        image={PINForo4}
        position={FORO4_LANDMARK_POSITION}
        size={80}
      />
      {ActiveMarkers && <ActiveMarkers />}
      <MapDebugger />
    </>
  );
}
