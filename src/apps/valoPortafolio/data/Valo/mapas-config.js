const MAP_ID = import.meta.env.VITE_GOOGLE_MAPID;

export const MAPAS_CONFIG = {
  "nuevo-leon": {
    id: MAP_ID,
    zoom: 11,
    maxZoom: 6,
    heading: 9,
    center: { lat: 25.756332, lng: -100.35618 },
  },
  guanajuato: {
    id: MAP_ID,
    zoom: 14,
    maxZoom: 6,
    heading: 9,
    center: { lat: 21.17487, lng: -101.668533 },
    minZoom: 6,
  },
};
