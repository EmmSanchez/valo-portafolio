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
  colosio,
  villa_garcia,
  heberto,
  lib_noroeste,
  matehuala_monterrey,
  manuel_ordonez,
  cuota_saltillo,
];
const polylineData = VIALIDADES.flatMap(geojsonToVialidad);

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
