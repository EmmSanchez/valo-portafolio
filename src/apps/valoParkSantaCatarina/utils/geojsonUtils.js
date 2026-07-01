/**
 * Convierte un GeoJSON (con extensión .json) al formato
 * requerido por Google Maps Polyline.
 *
 * @param {Object} geojson - GeoJSON de tipo Feature o FeatureCollection
 * @param {string} innerColor - Color de la capa interior (línea principal)
 * @param {Object} [options]
 * @param {string} [options.outerColor="#FFFFFFA6"] - Color de la capa exterior (borde)
 * @param {number} [options.outerWidth=14] - Grosor de la capa exterior
 * @param {number} [options.innerWidth=5] - Grosor de la capa interior
 *
 * @returns {Array<{
 *   path: Array<{lat: number, lng: number}>,
 *   strokeColor: string,
 *   strokeWidth: number,
 * }>}
 *
 * @example
 * import colosio from "../data/vialidades/av_colosio.json";
 * const vialidades = geojsonToVialidad(colosio);
 * // [{ path: [{lat, lng}, ...], strokeColor: "#FFFFFFA6", strokeWidth: 14 }, { ..., strokeColor: "#2D2273", strokeWidth: 5 }]
 *
 * @example
 * // Personalizando color exterior y grosores
 * const vialidades = geojsonToVialidad(colosio, "#492f87", {
 *   outerColor: "#000000A6",
 *   outerWidth: 18,
 *   innerWidth: 6,
 * });
 */

export function geojsonToVialidad(
  geojson,
  innerColor = "#2D2273",
  { outerColor = "#FFFFFFA6", outerWidth = 14, innerWidth = 5 } = {},
) {
  const { geometry } = geojson;

  const path = geometry.coordinates.map(([lng, lat]) => ({ lat, lng }));

  return [
    // Capa exterior (borde)
    {
      strokeColor: outerColor,
      strokeWidth: outerWidth,
      path,
    },
    // Capa interior (color principal)
    {
      strokeColor: innerColor,
      strokeWidth: innerWidth,
      path,
    },
  ];
}
