// trackIds.ts

const VALO = "valo";
const PARK = "park";
const FORO4 = "foro4";

export function track(eventId, extra) {
  if (typeof gtag === "undefined") return;
  if (import.meta.env.DEV) {
    console.log("[track]", eventId, extra);
    return;
  }
  gtag("event", eventId, {
    event_category: eventId.split(":")[1] ?? "general",
    ...extra,
  });
}

export const TRACK = {
  // ── Valo (portafolio principal) ──
  valo: {
    nosotros: { view: `${VALO}:nosotros:view` },
    proyectos: {
      view: `${VALO}:proyectos:view`,
      item: (slug) => `${VALO}:proyectos:item:${slug}:click`,
    },
    contacto: { view: `${VALO}:contacto:view` },
    sitioweb: { click: `${VALO}:sitioweb:click` },
  },

  // ── Park Santa Catarina ──
  park: {
    informacion: { view: `${PARK}:informacion:view` },
    ubicacion: { view: `${PARK}:ubicacion:view` },
    masterplan: { view: `${PARK}:masterplan:view` },
    contacto: {
      view: `${PARK}:contacto:view`,
      form: {
        submit: `${PARK}:contacto:form:submit`,
        success: `${PARK}:contacto:form:submit:success`,
        error: `${PARK}:contacto:form:submit:error`,
      },
    },
  },

  // ── Foro 4 ──
  foro4: {
    informacion: { view: `${FORO4}:informacion:view` },
    ubicacion: { view: `${FORO4}:ubicacion:view` },
    masterplan: { view: `${FORO4}:masterplan:view` },
    contacto: {
      view: `${FORO4}:contacto:view`,
      form: {
        submit: `${FORO4}:contacto:form:submit`,
        success: `${FORO4}:contacto:form:submit:success`,
        error: `${FORO4}:contacto:form:submit:error`,
      },
    },
  },
};
