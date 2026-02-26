import { useEffect } from "react";
import { useMap } from "@vis.gl/react-google-maps";
import CustomMarker from "./CustomMarker";
import VPSCLandmarkIcon from "@/apps/valoPortafolio/assets/icons/proyectos/markers/ValoParkSantaCatarinaLandmark.svg";
import { MAP_CONFIG } from "@/apps/valoParkSantaCatarina/data/MapConfig";
import { FILTERS } from "@/apps/valoParkSantaCatarina/const/Filters";
import { VPSC_LANDMARK_POSITION } from "@/apps/valoParkSantaCatarina/data/MapConfig";

export default function MapContent({ filter, ActiveMarkers, isFilterValid }) {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    if (filter === FILTERS.MASTERPLAN) {
      map.panTo({ lat: 25.68919, lng: -100.4880694 });
      map.setZoom(18);
    } else {
      map.panTo(MAP_CONFIG.center);
      map.setZoom(MAP_CONFIG.zoom);
    }
  }, [map, filter]);

  return (
    <>
      {filter !== FILTERS.MASTERPLAN && (
        <CustomMarker
          image={VPSCLandmarkIcon}
          position={VPSC_LANDMARK_POSITION}
          size={80}
        />
      )}
      {ActiveMarkers && isFilterValid && <ActiveMarkers />}
    </>
  );
}
