// // ─────────────────────────────────────────────
// // trackIds.ts — IDs centralizados por proyecto
// // Fuente única de verdad para el mapa de trazabilidad.
// // Importar desde cada vista en lugar de strings inline.
// // ─────────────────────────────────────────────

// const P = 'golondrinas' // prefijo del proyecto

// declare global {
//   function gtag(...args: unknown[]): void
// }

// export function track(eventId: string, extra?: Record<string, unknown>) {
//   if (typeof gtag === 'undefined') return
//   if (import.meta.env.DEV) {
//     console.log('[track]', eventId, extra)
//     return
//   }
//   gtag('event', eventId, {
//     event_category: eventId.split(':')[1] ?? 'general',
//     ...extra,
//   })
// }

// export const TRACK = {

//   // ── Header ──
//   header: {
//     expand:           `${P}:header:expand`,
//     collapse:         `${P}:header:collapse`,
//     masterplan:       `${P}:header:masterplan:click`,
//     disponibilidades: `${P}:header:disponibilidades:click`,
//     ubicacion:        `${P}:header:ubicacion:click`,
//     modelos:          `${P}:header:modelos:click`,
//     informacion:      `${P}:header:informacion:click`,
//     contacto:         `${P}:header:contacto:click`,
//     logo: `${P}:header:logo:click`,
//   },

//   // ── Masterplan ──
//   masterplan: {
//     view:             `${P}:masterplan:view`,
//     menuInferior: {
//       recorrido360:   `${P}:masterplan:menu-inferior:recorrido-360:click`,
//       fotografias:    `${P}:masterplan:menu-inferior:fotografias:click`,
//       videoTour:      `${P}:masterplan:menu-inferior:video-tour:click`,
//     },
//     menuLateral: {
//       vista1:         `${P}:masterplan:menu-lateral:vista-1:click`,
//       vista2:         `${P}:masterplan:menu-lateral:vista-2:click`,
//       vista3:         `${P}:masterplan:menu-lateral:vista-3:click`,
//       vista4:         `${P}:masterplan:menu-lateral:vista-4:click`,
//     },
//     vti: {
//       play:  (slug: string) => `${P}:masterplan:video-tour:${slug}:play`,
//       loop:  (slug: string) => `${P}:masterplan:video-tour:${slug}:loop`,
//     },
//   },

//   // ── Disponibilidades ──
//   disponibilidades: {
//     view:             `${P}:disponibilidades:view`,
//     overlay: {
//         depto: (modelo: string, piso: string) => `${P}:disponibilidades:overlay:${modelo}-piso${piso}:click`,
//       },
//     menuInferior: {
//       torre1:         `${P}:disponibilidades:menu-inferior:torre-1:click`,
//       torre2:         `${P}:disponibilidades:menu-inferior:torre-2:click`,
//     },

//   },

//   // ── Ubicación ──
//   ubicacion: {
//     view:             `${P}:ubicacion:view`,
//     menuInferior: {
//       hospitales:     `${P}:ubicacion:menu-inferior:hospitales:click`,
//       restaurantes:   `${P}:ubicacion:menu-inferior:restaurantes:click`,
//       bancos:   `${P}:ubicacion:menu-inferior:bancos:click`,
//       escuelas:       `${P}:ubicacion:menu-inferior:escuelas:click`,
//     },
//     menuIzquierdo: {
//       puntosInteres:  `${P}:ubicacion:menu-izquierdo:puntos-interes:click`,
//       vialidades:     `${P}:ubicacion:menu-izquierdo:vialidades:click`,
//     },
//     mapa: {
//       load:           `${P}:ubicacion:mapa:load`,
//       marker: (slug: string) => `${P}:ubicacion:mapa:marker-${slug}:click`,
//     },
//   },

//   // ── Modelos ──
//   modelos: {
//     view:             `${P}:modelos:view`,
//     grid: {
//       item: (id: string) => `${P}:modelos:grid:${id}:click`,
//     },
//     modal: {
//       open:  (id: string) => `${P}:modelos:modal-${id}:open`,
//       close: (id: string) => `${P}:modelos:modal-${id}:close`,
//       menuInferior: {
//         informacion:  (id: string) => `${P}:modelos:modal-${id}:menu-inferior:informacion:click`,
//         recorrido360: (id: string) => `${P}:modelos:modal-${id}:menu-inferior:recorrido-360:click`,
//         fotografias:  (id: string) => `${P}:modelos:modal-${id}:menu-inferior:fotografias:click`,
//         videoTour:    (id: string) => `${P}:modelos:modal-${id}:menu-inferior:video-tour:click`,
//       },
//     },
//   },

//   // ── Información ──
//   informacion: {
//     view:             `${P}:informacion:view`,
//     menuInferior: {
//       acuerdoInmuebles: `${P}:informacion:menu-inferior:acuerdo-inmuebles:click`,
//       datosProyecto:    `${P}:informacion:menu-inferior:datos-proyecto:click`,
//       portafolio:       `${P}:informacion:menu-inferior:portafolio:click`,
//     },
//   },

//   // ── Contacto ──
//   contacto: {
//     view:             `${P}:contacto:view`,
//     form: {
//       nombre:         `${P}:contacto:form:nombre:focus`,
//       email:          `${P}:contacto:form:email:focus`,
//       telefono:       `${P}:contacto:form:telefono:focus`,
//       mensaje:        `${P}:contacto:form:mensaje:focus`,
//       submit:         `${P}:contacto:form:submit`,
//       success:        `${P}:contacto:form:submit:success`,
//       error:          `${P}:contacto:form:submit:error`,
//     },
//     regresar:         `${P}:contacto:regresar:click`,
//   },

//   // ── WhatsApp ──
//   whatsapp:           `${P}:whatsapp:click`,

// } as const
