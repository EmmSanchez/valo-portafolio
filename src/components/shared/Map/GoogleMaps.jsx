import { APIProvider, Map } from "@vis.gl/react-google-maps";
import CustomMarker from "./CustomMarker";
import VPSCLandmarkIcon from "@/apps/valoPortafolio/assets/icons/proyectos/markers/ValoParkSantaCatarinaLandmark.svg";
import TransporteMarkers from "@/apps/valoParkSantaCatarina/components/Ubicaciones/puntos-interes/TransporteMarkers";
import CentroComercialMarkers from "@/apps/valoParkSantaCatarina/components/Ubicaciones/puntos-interes/CentroComercialMarkers";
import CentrosRecreativosMarkers from "@/apps/valoParkSantaCatarina/components/Ubicaciones/puntos-interes/CentrosRecreativosMarkers";
import SupermercadosMarkers from "@/apps/valoParkSantaCatarina/components/Ubicaciones/puntos-interes/SupermercadosMarkers";
import CentrosSaludMarkers from "@/apps/valoParkSantaCatarina/components/Ubicaciones/puntos-interes/CentrosSaludMarkers";
const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

const ValoParkSantaCatarinaCoordinates = {
  lat: 25.689151218948044,
  lng: -100.48962768811491,
};

const initialCameraCenter = {
  lat: 25.701990146668596,
  lng: -100.48971351880338,
};
const initialZoom = 14;
const initialHeading = 9;

const SUBFILTER = {
  TRANSPORTE_PUBLICO: "transporte",
  CENTRO_COMERCIAL: "centro-comercial",
  CENTROS_RECREATIVOS: "centros-recreativos",
  SUPERMERCADOS: "supermercados",
  CENTRO_DE_SALUD: "centro-salud",
};

export default function GoogleMaps({ filter = "" }) {
  return (
    <APIProvider apiKey={API_KEY}>
      <Map
        mapId="82766ca9d435febc2711df52"
        mapTypeId="satellite"
        disableDefaultUI
        defaultZoom={initialZoom}
        defaultCenter={initialCameraCenter}
        heading={initialHeading}
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
        {/* Valo Park Santa Catarina Landmark */}
        <CustomMarker
          key="marker_1"
          image={VPSCLandmarkIcon}
          position={ValoParkSantaCatarinaCoordinates}
          size={80}
        />
        {filter === SUBFILTER.TRANSPORTE_PUBLICO && <TransporteMarkers />}
        {filter === SUBFILTER.CENTRO_COMERCIAL && <CentroComercialMarkers />}
        {filter === SUBFILTER.CENTROS_RECREATIVOS && (
          <CentrosRecreativosMarkers />
        )}
        {filter === SUBFILTER.SUPERMERCADOS && <SupermercadosMarkers />}
        {filter === SUBFILTER.CENTRO_DE_SALUD && <CentrosSaludMarkers />}
      </Map>
    </APIProvider>
  );
}
