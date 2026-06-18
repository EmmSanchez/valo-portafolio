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
import { useIsMobile } from "@/hooks/useIsMobile";

const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

const MARKER_COMPONENTS = {
  [FILTERS.TRANSPORTE_PUBLICO]: TransporteMarkers,
  [FILTERS.CENTRO_COMERCIAL]: CentroComercialMarkers,
  [FILTERS.CENTROS_RECREATIVOS]: CentrosRecreativosMarkers,
  [FILTERS.SUPERMERCADOS]: SupermercadosMarkers,
  [FILTERS.CENTRO_DE_SALUD]: CentrosSaludMarkers,
  [FILTERS.VIALIDADES]: () => (
    <>
      <VialidadesLayer />
      <VialidadesMarkers />
    </>
  ),
};

export default function GoogleMaps({ filter, isFilterValid }) {
  const ActiveMarkers = MARKER_COMPONENTS[filter] ?? null;

  const isMobile = useIsMobile();
  const zoom = isMobile ? MAP_CONFIG.mobileZoom : MAP_CONFIG.zoom;
  const center = isMobile ? MAP_CONFIG.mobileCenter : MAP_CONFIG.center;

  return (
    <APIProvider apiKey={API_KEY}>
      <Map
        mapId={MAP_CONFIG.id}
        mapTypeId="satellite"
        gestureHandling={filter === FILTERS.MASTERPLAN ? "none" : "greedy"}
        disableDefaultUI
        defaultZoom={zoom}
        defaultCenter={center}
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
