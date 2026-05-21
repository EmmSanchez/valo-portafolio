import { APIProvider, Map } from "@vis.gl/react-google-maps";
import { useSearchParams } from "react-router";
import {
  FORO4_MAP_FILTERS,
  FORO4_MAP_CONFIG as MAP_CONFIG,
} from "../../data/map-config";
import MapContent from "./MapContent";
import EdificiosMarkers from "./markers/EdificiosMarkers";
import BancosMarkers from "./markers/BancosMarkers";
import CentrosComercialesMarkers from "./markers/CentrosComercialesMarkers";
import RestaurantesMarkers from "./markers/RestaurantesMarkers";
import HotelesMarkers from "./markers/HotelesMarkers";
import VialidadesMarkers from "./markers/VialidadesMarkers";

const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

const COMPONENT_TO_RENDER = {
  [FORO4_MAP_FILTERS.EDIFICIOS_CORPORATIVOS]: EdificiosMarkers,
  [FORO4_MAP_FILTERS.BANCOS]: BancosMarkers,
  [FORO4_MAP_FILTERS.CENTROS_COMERCIALES]: CentrosComercialesMarkers,
  [FORO4_MAP_FILTERS.RESTAURANTES]: RestaurantesMarkers,
  [FORO4_MAP_FILTERS.HOTELES]: HotelesMarkers,
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
        gestureHandling={"none"}
        disableDefaultUI
        defaultZoom={MAP_CONFIG.zoom}
        defaultCenter={MAP_CONFIG.center}
        heading={MAP_CONFIG.heading}
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
