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
  {
    id: "compromiso",
    label: "Compromiso",
    icon: <CompromisoIcon />,
  },
  {
    id: "franqueza",
    label: "Franqueza",
    icon: <ValoresIcon />,
  },
  {
    id: "asertividad",
    label: "Asertividad",
    icon: <IdeaIcon />,
  },
  {
    id: "excelencia",
    label: "Excelencia",
    icon: <EscudoIcon />,
  },
];

export default function Slide1() {
  return (
    <div className="flex w-full h-full items-center justify-center gap-1 xl:gap-4 2xl:gap-12.5">
      <div className="flex flex-col gap-[clamp(8px,1.56vw,30px)]">
        {INFORMACION.map((info) => {
          return (
            <div key={info.id} className="flex flex-col xl:gap-1.25">
              <h2 className="text-title font-lumarc font-bold uppercase tracking-widest">
                {info.label}
              </h2>
              <p className="w-[clamp(200px,55.73vw,1070px)] text-paragraph max-xl:leading-none">
                {info.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Íconos */}
      <div className="grid grid-cols-2 gap-[clamp(8px,1.56vw,30px)]">
        {VALORES.map((valor) => {
          return (
            <div
              key={valor.id}
              className="size-[clamp(110px,12.5vw,240px)] flex flex-col justify-center items-center gap-3 2xl:gap-5 p-2 2xl:p-5"
            >
              <span className="size-[clamp(40px,4.17vw,80px)]">
                {valor.icon}
              </span>
              <p className="text-paragraph font-lumarc uppercase">
                {valor.label}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
