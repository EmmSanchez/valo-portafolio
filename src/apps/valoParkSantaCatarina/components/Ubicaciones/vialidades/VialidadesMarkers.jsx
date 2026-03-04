import AdvanceMarker from "@/components/shared/Map/AdvanceMarker";
import PinIcon from "@/apps/valoParkSantaCatarina/assets/icons/PinIcon";
import { useMap } from "@vis.gl/react-google-maps";
import { useState } from "react";
import { useEffect } from "react";

const LOCATIONS = [
  {
    id: "cumbres_de_las_americas",
    label: "Cumbres de las americas",
    rotation: -17.5,
    coordinates: {
      lat: 25.72891729892029,
      lng: -100.521239256634,
    },
  },
  {
    id: "libramiento_noroeste",
    label: "Lib. Noroeste",
    rotation: -61.5,
    coordinates: { lat: 25.721318937715527, lng: -100.54287087023135 },
  },
  {
    id: "heberto_castillo",
    label: "Heberto Castillo Martínez",
    rotation: 70.5,
    coordinates: { lat: 25.719682991049464, lng: -100.52292962764781 },
  },
  {
    id: "matehuala_monterrey",
    label: "Matehuala - Monterrey",
    rotation: 0,
    coordinates: { lat: 25.693852290280866, lng: -100.53204369866866 },
  },
  {
    id: "cuota_saltillo",
    label: "Autopista Saltillo - Monterrey Cuota",
    rotation: 0,
    coordinates: { lat: 25.684048465827107, lng: -100.51945592537977 },
  },
  {
    id: "parque_chipinque",
    label: "Parque Chipinque",
    rotation: 0,
    coordinates: { lat: 25.713941388452696, lng: -100.50638449477898 },
  },
  {
    id: "camino_a_villa_garcia",
    label: "Antiguo Camino a Villa García",
    rotation: 38.5,
    coordinates: { lat: 25.706113994863724, lng: -100.49252783734896 },
  },
  {
    id: "lic_colosio",
    label: "Av. Lic. Luis Donaldo Colosio Murieta",
    rotation: 30.5,
    coordinates: {
      lat: 25.71570845681639,
      lng: -100.48672046458773,
    },
  },
  {
    id: "manuel_ordonez",
    label: "Av. Manuel Ordoñez",
    rotation: 0,
    coordinates: { lat: 25.678829125314515, lng: -100.47498215054964 },
  },
];

export default function VialidadesMarkers() {
  const map = useMap();
  const [zoom, setZoom] = useState(null);

  useEffect(() => {
    if (!map) return;

    const updateOpacityValue = () => {
      setZoom(map.getZoom());
      const listener = map.addListener("zoom_changed", () => {
        setZoom(map.getZoom());
      });
      return () => listener.remove();
    };

    updateOpacityValue();
  }, [map]);

  const opacity =
    zoom === null ? 1 : Math.min(1, Math.max(0, (zoom - 13.5) / 0.1));
  return (
    <>
      {LOCATIONS.map((location) => {
        return (
          <AdvanceMarker key={location.id} position={location.coordinates}>
            <div
              className="relative flex"
              style={{
                transform: `rotate(${location.rotation}deg)`,
                opacity,
                transition: "opacity 0.3s ease",
                pointerEvents: opacity < 0.1 ? "none" : "auto",
              }}
            >
              <div
                className={`absolute flex items-center top-1/2 -translate-y-1/2 -z-10 w-fit px-[clamp(2.96px,0.52vw,10px)] py-[clamp(1.48px,0.26vw,5px)] gap-[clamp(1.48px,0.26vw,5px)] whitespace-nowrap bg-santa-catarina font-semibold uppercase`}
              >
                <PinIcon className="shrink-0 w-[clamp(3.45px,0.61vw,11.656px)] h-[clamp(4.44px,0.78vw,15px)]" />
                <p className="text-puntos-interes pt-1 2xl:pt-1.5 font-eurostile">
                  {location.label}
                </p>
              </div>
            </div>
          </AdvanceMarker>
        );
      })}
    </>
  );
}
