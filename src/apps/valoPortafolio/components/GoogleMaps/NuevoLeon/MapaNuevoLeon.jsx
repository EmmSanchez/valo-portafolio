import { Map } from "@vis.gl/react-google-maps";
import { APIProvider } from "@vis.gl/react-google-maps";
import ContenidoNuevoLeon from "./ContenidoNuevoLeon";

const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
const MAP_ID = import.meta.env.VITE_GOOGLE_MAPID;

const MAP_CONFIG = {
  id: MAP_ID,
  zoom: 11,
  maxZoom: 6,
  heading: 9,
  center: { lat: 25.756332, lng: -100.35618 },
};

export default function MapaNuevoLeon() {
  return (
    <APIProvider apiKey={API_KEY}>
      <Map
        mapId={MAP_CONFIG.id}
        mapTypeId="satellite"
        disableDefaultUI
        defaultZoom={MAP_CONFIG.zoom}
        defaultCenter={MAP_CONFIG.center}
        heading={MAP_CONFIG.heading}
        zoomControl={false}
        minZoom={MAP_CONFIG.maxZoom}
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
        <ContenidoNuevoLeon />
      </Map>
    </APIProvider>
  );
}
