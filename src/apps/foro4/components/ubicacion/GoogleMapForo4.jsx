import { APIProvider, Map } from "@vis.gl/react-google-maps";
import { useSearchParams } from "react-router";
import {
  FORO4_MAP_FILTERS,
  FORO4_MAP_CONFIG as MAP_CONFIG,
} from "../../data/map-config";
import MapContent from "./MapContent";

// Dinamic google content
import AeropuertoMarkers from "./markers/AeropuertoMarkers";
import GolfMarkers from "./markers/GolfMarkers";
import CentrosComercialesMarkers from "./markers/CentrosComercialesMarkers";
import VialidadesMarkers from "./markers/VialidadesMarkers";
import TransporteMarkers from "./markers/TransporteMarkers";

const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

const COMPONENT_TO_RENDER = {
  [FORO4_MAP_FILTERS.AEROPUERTO]: AeropuertoMarkers,
  [FORO4_MAP_FILTERS.GOLF]: GolfMarkers,
  [FORO4_MAP_FILTERS.CENTROS_COMERCIALES]: CentrosComercialesMarkers,
  [FORO4_MAP_FILTERS.TRANSPORTE]: TransporteMarkers,
  [FORO4_MAP_FILTERS.VIALIDADES]: VialidadesMarkers,
};

export default function GoogleMapForo4() {
  const [searchParams] = useSearchParams();
  const filter = searchParams.get("filter");

  const ActiveMarkers = COMPONENT_TO_RENDER[filter] ?? null;

  return (
    <APIProvider apiKey={API_KEY}>
      <Map
        mapId={MAP_CONFIG.id}
        mapTypeId="satellite"
        // gestureHandling={"none"}
        disableDefaultUI
        defaultZoom={MAP_CONFIG.zoom}
        defaultCenter={MAP_CONFIG.center}
        zoomControl={false}
        fullscreenControl={false}
        streetViewControl={false}
        mapTypeControl={false}
        className="size-full"
        styles={[
          {
            elementType: "labels",
            stylers: [{ visibility: "off" }],
          },
        ]}
      >
        <MapContent filter={filter} ActiveMarkers={ActiveMarkers} />
      </Map>
    </APIProvider>
  );
}
