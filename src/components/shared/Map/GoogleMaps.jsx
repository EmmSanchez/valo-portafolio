import { APIProvider, Map } from "@vis.gl/react-google-maps";
import TransporteMarkers from "@/apps/valoParkSantaCatarina/components/Ubicaciones/puntos-interes/TransporteMarkers";
import CentroComercialMarkers from "@/apps/valoParkSantaCatarina/components/Ubicaciones/puntos-interes/CentroComercialMarkers";
import CentrosRecreativosMarkers from "@/apps/valoParkSantaCatarina/components/Ubicaciones/puntos-interes/CentrosRecreativosMarkers";
import SupermercadosMarkers from "@/apps/valoParkSantaCatarina/components/Ubicaciones/puntos-interes/SupermercadosMarkers";
import CentrosSaludMarkers from "@/apps/valoParkSantaCatarina/components/Ubicaciones/puntos-interes/CentrosSaludMarkers";
import VialidadesLayer from "@/apps/valoParkSantaCatarina/components/Ubicaciones/vialidades/VialidadesLayer";
import VialidadesMarkers from "@/apps/valoParkSantaCatarina/components/Ubicaciones/vialidades/VialidadesMarkers";
import MapContent from "./MapContent";
import { MAP_CONFIG } from "@/apps/valoParkSantaCatarina/data/MapConfig";
import { FILTERS } from "@/apps/valoParkSantaCatarina/const/Filters";

const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

const PUNTOS_INTERES_SUBFILTERS = {
  TRANSPORTE_PUBLICO: "transporte",
  CENTRO_COMERCIAL: "centro-comercial",
  CENTROS_RECREATIVOS: "centros-recreativos",
  SUPERMERCADOS: "supermercados",
  CENTRO_DE_SALUD: "centro-salud",
};

const MARKER_COMPONENTS = {
  [PUNTOS_INTERES_SUBFILTERS.TRANSPORTE_PUBLICO]: TransporteMarkers,
  [PUNTOS_INTERES_SUBFILTERS.CENTRO_COMERCIAL]: CentroComercialMarkers,
  [PUNTOS_INTERES_SUBFILTERS.CENTROS_RECREATIVOS]: CentrosRecreativosMarkers,
  [PUNTOS_INTERES_SUBFILTERS.SUPERMERCADOS]: SupermercadosMarkers,
  [PUNTOS_INTERES_SUBFILTERS.CENTRO_DE_SALUD]: CentrosSaludMarkers,
  [FILTERS.VIALIDADES]: () => (
    <>
      <VialidadesLayer />
      <VialidadesMarkers />
    </>
  ),
};

export default function GoogleMaps({ filter, subFilter, isFilterValid }) {
  const selectedFilter = filter === FILTERS.PUNTOS_INTERES ? subFilter : filter;
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
        <MapContent
          filter={filter}
          ActiveMarkers={ActiveMarkers}
          isFilterValid={isFilterValid}
        />
      </Map>
    </APIProvider>
  );
}
