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

export default function MapContent({ filter, ActiveMarkers }) {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    if (filter === FORO4_MAP_FILTERS.AEROPUERTO) {
      map.panTo({ lat: 21.083810515095234, lng: -101.52044719517052 });
      map.setZoom(12);
      map.setHeading(0);
    } else if (filter === FORO4_MAP_FILTERS.GOLF) {
      map.panTo({ lat: 21.18109858701598, lng: -101.67124903795194 });
      map.setZoom(14);
      map.setHeading(0);
    } else if (filter === FORO4_MAP_FILTERS.CENTROS_COMERCIALES) {
      map.panTo({ lat: 21.165971721643533, lng: -101.67468226537012 });
      map.setZoom(14);
      map.setHeading(0);
    } else if (filter === FORO4_MAP_FILTERS.VIALIDADES) {
      map.panTo({ lat: 21.16214287637686, lng: -101.69217174463986 });
      map.setZoom(16);
      map.setHeading(80);
    } else {
      map.panTo(MAP_CONFIG.center);
      map.setZoom(MAP_CONFIG.zoom);
      map.setHeading(MAP_CONFIG.heading);
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
      <MapDebugger />
    </>
  );
}
