import { APIProvider, Map } from "@vis.gl/react-google-maps";
import CustomMarker from "./CustomMarker";
import VPSCLandmarkIcon from "@/apps/valoPortafolio/assets/icons/proyectos/markers/ValoParkSantaCatarinaLandmark.svg";
import TransporteMarkers from "@/apps/valoParkSantaCatarina/components/Ubicaciones/puntos-interes/TransporteMarkers";
import CentroComercialMarkers from "@/apps/valoParkSantaCatarina/components/Ubicaciones/puntos-interes/CentroComercialMarkers";
import CentrosRecreativosMarkers from "@/apps/valoParkSantaCatarina/components/Ubicaciones/puntos-interes/CentrosRecreativosMarkers";
import SupermercadosMarkers from "@/apps/valoParkSantaCatarina/components/Ubicaciones/puntos-interes/SupermercadosMarkers";
import CentrosSaludMarkers from "@/apps/valoParkSantaCatarina/components/Ubicaciones/puntos-interes/CentrosSaludMarkers";
import VialidadesLayer from "@/apps/valoParkSantaCatarina/components/Ubicaciones/vialidades/VialidadesLayer";
import VialidadesMarkers from "@/apps/valoParkSantaCatarina/components/Ubicaciones/vialidades/VialidadesMarkers";
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

const PUNTOS_INTERES_SUBFILTERS = {
  TRANSPORTE_PUBLICO: "transporte",
  CENTRO_COMERCIAL: "centro-comercial",
  CENTROS_RECREATIVOS: "centros-recreativos",
  SUPERMERCADOS: "supermercados",
  CENTRO_DE_SALUD: "centro-salud",
};

const PUNTOS_INTERES = "puntos-de-interes";
const VIALIDADES = "vialidades";
const MASTERPLAN = "masterplan";

const MARKER_COMPONENTS = {
  [PUNTOS_INTERES_SUBFILTERS.TRANSPORTE_PUBLICO]: TransporteMarkers,
  [PUNTOS_INTERES_SUBFILTERS.CENTRO_COMERCIAL]: CentroComercialMarkers,
  [PUNTOS_INTERES_SUBFILTERS.CENTROS_RECREATIVOS]: CentrosRecreativosMarkers,
  [PUNTOS_INTERES_SUBFILTERS.SUPERMERCADOS]: SupermercadosMarkers,
  [PUNTOS_INTERES_SUBFILTERS.CENTRO_DE_SALUD]: CentrosSaludMarkers,
  [VIALIDADES]: () => (
    <>
      <VialidadesLayer />
      <VialidadesMarkers />
    </>
  ),
};

export default function GoogleMaps({ filter, subFilter, isFilterValid }) {
  const selectedFilter = filter === PUNTOS_INTERES ? subFilter : filter;
  const ActiveMarkers = MARKER_COMPONENTS[selectedFilter] ?? null;
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
