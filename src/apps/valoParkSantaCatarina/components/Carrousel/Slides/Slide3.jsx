import EntradaIcon from "@/apps/valoParkSantaCatarina/assets/icons/carrousel/EntradaIcon";
import ParqueIcon from "@/apps/valoParkSantaCatarina/assets/icons/carrousel/ParqueIcon";
import TiendaIcon from "@/apps/valoParkSantaCatarina/assets/icons/carrousel/TiendaIcon";

const CARACTERISTICAS = [
  {
    id: "porton-control-acceso",
    label: "Portón con control de acceso.",
    icon: EntradaIcon,
  },
  {
    id: "area-comercial",
    label: [
      { text: "Área comercial de ", bold: false },
      { text: "850m2", bold: true },
      { text: " al frente del terreno.", bold: false },
    ],
    icon: TiendaIcon,
  },
  {
    id: "servicios-comercio",
    label: "Servicios y comercio a pie del parque.",
    icon: ParqueIcon,
  },
];

export default function Slide3() {
  return (
    <div className="flex w-full h-full flex-col items-center justify-center px-[clamp(38.79px,6.82vw,131px)] gap-1 lg:gap-5.5 2xl:gap-7.5">
      <h3 className="text-title font-lumarc font-semibold uppercase tracking-widest">
        Características generales
      </h3>

      <div className="grid grid-cols-3">
        {CARACTERISTICAS.map((caracteristica) => {
          const IconComponent = caracteristica.icon;

          return (
            <div
              key={caracteristica.id}
              className="w-[clamp(166.39px,29.27vw,562px)] h-[clamp(81.43px,14.32vw,275px)] flex flex-col items-center justify-center px-2 py-2 gap-2 md:px-2.5 md:py-4 md:gap-2.5 2xl:px-3.75 2xl:py-9.75 2xl:gap-3.75 text-white bg-santa-catarina"
            >
              <span className="flex flex-1 items-end size-[clamp(18px,2.86vw,55px)]">
                <IconComponent />
              </span>

              <p className="flex-1 text-label text-center px-[clamp(30px,4.5vw,95px)] landscape:px-[clamp(14px,3vw,30px)] leading-[120%]">
                {Array.isArray(caracteristica.label)
                  ? caracteristica.label.map((part, i) => (
                      <span
                        key={i}
                        className={part.bold ? "font-bold font-lumarc" : ""}
                      >
                        {part.text}
                      </span>
                    ))
                  : caracteristica.label}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
