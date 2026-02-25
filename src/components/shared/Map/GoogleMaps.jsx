import { APIProvider, Map } from "@vis.gl/react-google-maps";
import CustomMarker from "./CustomMarker";
import VPSCLandmarkIcon from "@/apps/valoPortafolio/assets/icons/proyectos/markers/ValoParkSantaCatarinaLandmark.svg";
import TransporteMarkers from "@/apps/valoParkSantaCatarina/components/Ubicaciones/puntos-interes/TransporteMarkers";
import CentroComercialMarkers from "@/apps/valoParkSantaCatarina/components/Ubicaciones/puntos-interes/CentroComercialMarkers";
import CentrosRecreativosMarkers from "@/apps/valoParkSantaCatarina/components/Ubicaciones/puntos-interes/CentrosRecreativosMarkers";
import SupermercadosMarkers from "@/apps/valoParkSantaCatarina/components/Ubicaciones/puntos-interes/SupermercadosMarkers";
import CentrosSaludMarkers from "@/apps/valoParkSantaCatarina/components/Ubicaciones/puntos-interes/CentrosSaludMarkers";
import VialidadesLayer from "@/apps/valoParkSantaCatarina/components/Ubicaciones/vialidades/VialidadesLayer";
const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

const VPSC_LANDMARK_POSITION = {
  lat: 25.689151218948044,
  lng: -100.48962768811491,
};

const MAP_CONFIG = {
  id: "82766ca9d435febc2711df52",
  zoom: 14,
  heading: 9,
  center: { lat: 25.701990146668596, lng: -100.48971351880338 },
};

const PUNTOS_INTERES = {
  TRANSPORTE_PUBLICO: "transporte",
  CENTRO_COMERCIAL: "centro-comercial",
  CENTROS_RECREATIVOS: "centros-recreativos",
  SUPERMERCADOS: "supermercados",
  CENTRO_DE_SALUD: "centro-salud",
};

const VIALIDADES = "vialidades";
const MASTERPLAN = "masterplan";

const MARKER_COMPONENTS = {
  [PUNTOS_INTERES.TRANSPORTE_PUBLICO]: TransporteMarkers,
  [PUNTOS_INTERES.CENTRO_COMERCIAL]: CentroComercialMarkers,
  [PUNTOS_INTERES.CENTROS_RECREATIVOS]: CentrosRecreativosMarkers,
  [PUNTOS_INTERES.SUPERMERCADOS]: SupermercadosMarkers,
  [PUNTOS_INTERES.CENTRO_DE_SALUD]: CentrosSaludMarkers,
  [VIALIDADES]: VialidadesLayer,
};

export default function GoogleMaps({ filter, subFilter, isFilterValid }) {
  const ActiveMarkers = MARKER_COMPONENTS[subFilter ?? filter] ?? null;
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
          position={VPSC_LANDMARK_POSITION}
          size={80}
        />
        {ActiveMarkers && isFilterValid && <ActiveMarkers />}
      </Map>
    </APIProvider>
  );
}
