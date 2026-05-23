import { CompromisoIcon } from "@/apps/valoPortafolio/assets/icons/conoce-valo-developers/CompromisoIcon";
import { EscudoIcon } from "@/apps/valoPortafolio/assets/icons/conoce-valo-developers/EscudoIcon";
import { IdeaIcon } from "@/apps/valoPortafolio/assets/icons/conoce-valo-developers/IdeaIcon";
import { ValoresIcon } from "@/apps/valoPortafolio/assets/icons/conoce-valo-developers/ValoresIcon";

const INFORMACION = [
  {
    id: "mision",
    label: "Misión",
    description:
      "Desarrollar proyectos inmobiliarios estratégicos que sumen al crecimiento económico de su entorno, e impulsen el éxito de todos los involucrados.",
  },
  {
    id: "vision",
    label: "Visión",
    description:
      "Ser el aliado inmobiliario de nuestros clientes, socios, e inversionistas, generando oportunidades de negocio con un acompañamiento profesional y personalizado.",
  },
  {
    id: "valores",
    label: "Valores",
    description: "Compromiso, Franqueza, Asertividad y Excelencia",
  },
];

const VALORES = [
  { id: "compromiso", label: "Compromiso", icon: <CompromisoIcon /> },
  { id: "franqueza", label: "Franqueza", icon: <ValoresIcon /> },
  { id: "asertividad", label: "Asertividad", icon: <IdeaIcon /> },
  { id: "excelencia", label: "Excelencia", icon: <EscudoIcon /> },
];

export default function Slide1() {
  return (
    <div
      className="flex w-full h-full items-center justify-center"
      style={{ gap: "clamp(10px, 3vw, 60px)" }}
    >
      {/* Texto: Misión, Visión, Valores */}
      <div className="flex flex-col" style={{ gap: "clamp(6px, 1.8vh, 32px)" }}>
        {INFORMACION.map((info) => (
          <div
            key={info.id}
            className="flex flex-col"
            style={{ gap: "clamp(2px, 0.6vh, 8px)" }}
          >
            <h2
              className="font-lumarc font-bold uppercase tracking-widest"
              style={{ fontSize: "clamp(11px, 1.9vw, 34px)" }}
            >
              {info.label}
            </h2>
            <p
              className="leading-tight"
              style={{
                fontSize: "clamp(9px, 1.45vw, 26px)",
                maxWidth: "clamp(180px, 52vw, 960px)",
              }}
            >
              {info.description}
            </p>
          </div>
        ))}
      </div>

      {/* Íconos 2×2 */}
      <div
        className="grid grid-cols-2 flex-shrink-0"
        style={{ gap: "clamp(6px, 1.4vw, 26px)" }}
      >
        {VALORES.map((valor) => (
          <div
            key={valor.id}
            className="flex flex-col justify-center items-center"
            style={{
              width: "clamp(90px, 12vw, 220px)",
              height: "clamp(90px, 12vw, 220px)",
              gap: "clamp(10px, 4vh, 28px)",
              padding: "clamp(6px, 1vw, 20px)",
            }}
          >
            <span
              style={{
                width: "clamp(32px, 4.2vw, 82px)",
                height: "clamp(32px, 4.2vw, 82px)",
                display: "block",
              }}
            >
              {valor.icon}
            </span>
            <p
              className="font-lumarc uppercase text-center leading-none"
              style={{ fontSize: "clamp(8px, 1.05vw, 19px)" }}
            >
              {valor.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
