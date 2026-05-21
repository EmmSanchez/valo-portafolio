const MAP_ID = import.meta.env.VITE_GOOGLE_MAPID;

export const FORO4_MAP_CONFIG = {
  id: MAP_ID,
  zoom: 15,
  heading: 90,
  center: { lat: 21.164202433829658, lng: -101.692266463462 },
};

export const FORO4_LANDMARK_POSITION = {
  lat: 21.164202433829658,
  lng: -101.692266463462,
};

export const FORO4_MAP_FILTERS = {
  EDIFICIOS_CORPORATIVOS: "edificios-corporativos",
  BANCOS: "bancos",
  CENTROS_COMERCIALES: "centros-comerciales",
  RESTAURANTES: "restaurantes",
  HOTELES: "hoteles",
  VIALIDADES: "vialidades",
};
