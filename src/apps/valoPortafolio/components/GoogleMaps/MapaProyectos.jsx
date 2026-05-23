import { Map } from "@vis.gl/react-google-maps";
import { APIProvider } from "@vis.gl/react-google-maps";
import { useParams } from "react-router";
import { MAPAS_CONFIG } from "../../data/Valo/mapas-config";
import ContenidoNuevoLeon from "./NuevoLeon/ContenidoNuevoLeon";
import ContenidoGuanajuato from "./Guanajuato/ContenidoGuanajuato";

const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

export default function MapaProyectos() {
  const { estado } = useParams();

  const MAP_CONFIG = MAPAS_CONFIG[estado];

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
        <ContenidoGuanajuato />
      </Map>
    </APIProvider>
  );
}
