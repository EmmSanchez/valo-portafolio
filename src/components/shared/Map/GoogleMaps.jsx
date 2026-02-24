import { APIProvider, Map } from "@vis.gl/react-google-maps";
import { useEffect } from "react";
import { useMap } from "@vis.gl/react-google-maps";
import CustomMarker from "./CustomMarker";
import VPSCLandmarkIcon from "@/apps/valoPortafolio/assets/icons/proyectos/markers/ValoParkSantaCatarinaLandmark.svg";
import { AdvancedMarker } from "@vis.gl/react-google-maps";
import busLandmark from "@/apps/valoParkSantaCatarina/assets/icons/ubicacion/puntos_interes/busLandmark.svg";
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

const SUBFILTER = {
  TRANSPORTE_PUBLICO: "transporte",
  CENTRO_COMERCIAL: "centro-comercial",
  CENTROS_RECREATIVOS: "centros-recreativos",
  SUPERMERCADOS: "supermercados",
  CENTRO_DE_SALUD: "centro-salud",
};

const COORDENADAS = {
  TRANSPORTE: [
    {
      id: "ruta_155",
      label: "Ruta 155 Viñeros lomas inicios",
      coordinates: {
        lat: 25.700563491361798,
        lng: -100.50820677442198,
      },
    },
    {
      id: "avenida_las_torres",
      label: "Avenida las Torres",
      coordinates: {
        lat: 25.6960577640467,
        lng: -100.4829139761495,
      },
    },
    {
      id: "parada_camion_sur",
      label: "Parada de Camión",
      coordinates: {
        lat: 25.68590818205809,
        lng: -100.49026231902194,
      },
    },
    {
      id: "parada_camion_este",
      label: "Parada de Camión",
      coordinates: {
        lat: 25.68549050626129,
        lng: -100.47668737310195,
      },
    },
    {
      id: "ruta_203",
      label: "Ruta 203 Santa Catarina",
      coordinates: {
        lat: 25.68285133929036,
        lng: -100.48582023550867,
      },
    },
  ],
  CENTRO_COMERCIAL: {},
  CENTROS_RECREATIVOS: {},
  SUPERMERCADOS: {},
  CENTRO_DE_SALUD: {},
};

export default function GoogleMaps({ filter = "" }) {
  return (
    <APIProvider apiKey={API_KEY}>
      <Map
        mapId="82766ca9d435febc2711df52"
        defaultZoom={initialZoom}
        defaultCenter={initialCameraCenter}
        mapTypeId="satellite"
        zoomControl={false}
        disableDefaultUI
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
      </Map>
    </APIProvider>
  );
}

function MapDebugger() {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    const handleIdle = () => {
      const center = map.getCenter();
      const zoom = map.getZoom();

      console.log("Center:", {
        lat: center.lat(),
        lng: center.lng(),
      });

      console.log("Zoom:", zoom);
    };

    map.addListener("idle", handleIdle);

    return () => {
      window.google.maps.event.clearListeners(map, "idle");
    };
  }, [map]);

  return null;
}

function TransporteMarkers() {
  return (
    <>
      {COORDENADAS.TRANSPORTE.map((transporte) => {
        return (
          <AdvanceMarker key={transporte.id} position={transporte.coordinates}>
            <div className="relative flex">
              <img
                src={busLandmark}
                alt="Bus Landmark"
                style={{ width: 36, height: 40 }}
              />
              <div className="absolute left-5 top-1 -z-10 w-fit py-[clamp(1.48px,0.26vw,5px)] pr-[clamp(2.96px,0.52vw,10px)] pl-[clamp(7.4px,1.3vw,25px)] whitespace-nowrap bg-santa-catarina font-semibold uppercase">
                {transporte.label}
              </div>
            </div>
          </AdvanceMarker>
        );
      })}
    </>
  );
}

function AdvanceMarker({ size, position, children }) {
  return (
    <AdvancedMarker position={position}>
      <div style={{ width: size, height: size }}>{children}</div>
    </AdvancedMarker>
  );
}
