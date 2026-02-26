export const FILTERS = {
  PUNTOS_INTERES: "puntos-de-interes",
  VIALIDADES: "vialidades",
  MASTERPLAN: "masterplan",
};

export const SUBFILTERS = {
  TRANSPORTE_PUBLICO: "transporte",
  CENTRO_COMERCIAL: "centro-comercial",
  CENTROS_RECREATIVOS: "centros-recreativos",
  SUPERMERCADOS: "supermercados",
  CENTRO_DE_SALUD: "centro-salud",
};

// Solo estos filters aceptan subFilter
const FILTERS_WITH_SUBFILTER = new Set([FILTERS.PUNTOS_INTERES]);

const VALID_SUBFILTERS = new Set(Object.values(SUBFILTERS));

export function resolveMapState(filter, subFilter) {
  const filterAcceptsSubFilter = FILTERS_WITH_SUBFILTER.has(filter);

  // filter=vialidades&subFilter=centros-recreativos → ignora subFilter
  if (!filterAcceptsSubFilter) {
    return { activeFilter: filter, activeSubFilter: null };
  }

  // filter=puntos-de-interes&subFilter=invalido → ignora subFilter
  if (!VALID_SUBFILTERS.has(subFilter)) {
    return { activeFilter: filter, activeSubFilter: null };
  }

  // filter=puntos-de-interes&subFilter=centros-recreativos → válido
  return { activeFilter: filter, activeSubFilter: subFilter };
}
