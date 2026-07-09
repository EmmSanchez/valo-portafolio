import { useEffect } from "react";
import { useMapsLibrary } from "@vis.gl/react-google-maps";
import colosio from "../../../data/RutasUbicaciones/lic_colosio.json";
import villa_garcia from "../../../data/RutasUbicaciones/camino_villa_garcia.json";
import heberto from "../../../data/RutasUbicaciones/heberto_castillo.json";
import lib_noroeste from "../../../data/RutasUbicaciones/lib_noroeste.json";
import matehuala_monterrey from "../../../data/RutasUbicaciones/matehuala_monterrey.json";
import manuel_ordonez from "../../../data/RutasUbicaciones/manuel_ordonez.json";
import cuota_saltillo from "../../../data/RutasUbicaciones/cuota_saltillo.json";
import { useMap } from "@vis.gl/react-google-maps";
import { geojsonToVialidad } from "@/apps/valoParkSantaCatarina/utils/geojsonUtils";

const VIALIDADES = [
  {
    geojson: colosio,
    innerColor: "#2B1D67",
    outerColor: "#FFFFFFA6",
    outerWidth: 14,
    innerWidth: 5,
  },
  {
    geojson: villa_garcia,
    innerColor: "#2B1D67",
    outerColor: "#FFFFFFA6",
    outerWidth: 14,
    innerWidth: 5,
  },
  {
    geojson: heberto,
    innerColor: "#2B1D67",
    outerColor: "#FFFFFFA6",
    outerWidth: 14,
    innerWidth: 5,
  },
  {
    geojson: lib_noroeste,
    innerColor: "#2B1D67",
    outerColor: "#FFFFFFA6",
    outerWidth: 14,
    innerWidth: 5,
  },
  {
    geojson: matehuala_monterrey,
    innerColor: "#2B1D67",
    outerColor: "#FFFFFFA6",
    outerWidth: 14,
    innerWidth: 5,
  },
  {
    geojson: manuel_ordonez,
    innerColor: "#2B1D67",
    outerColor: "#FFFFFFA6",
    outerWidth: 14,
    innerWidth: 5,
  },
  {
    geojson: cuota_saltillo,
    innerColor: "#2B1D67",
    outerColor: "#FFFFFFA6",
    outerWidth: 14,
    innerWidth: 5,
  },
];

const polylineData = VIALIDADES.flatMap(({ geojson, innerColor, ...options }) =>
  geojsonToVialidad(geojson, innerColor, options),
);

export default function VialidadesLayer() {
  const map = useMap();
  const mapsLib = useMapsLibrary("maps");

  useEffect(() => {
    if (!map || !mapsLib) return;

    const polylines = polylineData.map((vialidad) => {
      return new mapsLib.Polyline({
        path: vialidad.path,
        strokeColor: vialidad.strokeColor,
        strokeWeight: vialidad.strokeWidth,
        map,
      });
    });

    return () => polylines.forEach((p) => p.setMap(null));
  }, [map, mapsLib]);

  return null;
}
