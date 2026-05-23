import { CompromisoIcon } from "@/apps/valoPortafolio/assets/icons/conoce-valo-developers/CompromisoIcon";
import { EscudoIcon } from "@/apps/valoPortafolio/assets/icons/conoce-valo-developers/EscudoIcon";
import { IdeaIcon } from "@/apps/valoPortafolio/assets/icons/conoce-valo-developers/IdeaIcon";
import { ValoresIcon } from "@/apps/valoPortafolio/assets/icons/conoce-valo-developers/ValoresIcon";

const VALORES_INFO = [
  {
    id: "compromiso",
    label: "Compromiso",
    description:
      "A través del compromiso alineamos nuestros intereses, y ponemos al máximo nuestras capacidades para sacar adelante la misión encomendada, teniendo en cuenta que conocemos las condiciones que estamos aceptando y las obligaciones que éstas implican.",
    icon: <CompromisoIcon className="text-white" />,
  },
  {
    id: "franqueza",
    label: "Franqueza",
    description:
      "En Valo apostamos por la franqueza. Creemos que la comunicación de forma directa y sincera, sea cual sea la circunstancia, enriquece las relaciones y mejora la motivación de la empresa.",
    icon: <ValoresIcon className="text-white" />,
  },
  {
    id: "asertividad",
    label: "Asertividad",
    description:
      "La asertividad es una herramienta poderosa de comunicación en Valo, ya que mejora la productividad y nos permite tomar decisiones bien razonadas y calculadas.",
    icon: <IdeaIcon className="text-white" />,
  },
  {
    id: "excelencia",
    label: "Excelencia",
    description:
      "En Valo, aspiramos a la excelencia en la operación y ejecución de nuestros deberes. Esto nos permite obtener resultados óptimos que requieren la adaptación constante de nuevos conocimientos y habilidades.",
    icon: <EscudoIcon className="text-white" />,
  },
];

export default function Slide2() {
  return (
    <div className="flex w-full h-full justify-center items-center px-[4vw]">
      <div className="grid grid-cols-2 gap-y-0.5 lg:gap-y-3">
        {VALORES_INFO.map((valor) => {
          return (
            <div
              key={valor.id}
              className="relative flex-1 max-w-[843px] w-full h-full justify-center items-center overflow-hidden bg-valo"
            >
              {/* Contenido */}
              <div className="relative z-20 w-full h-full flex flex-col py-3 lg:py-[clamp(13.31px,2.34375vw,45px)] px-[clamp(7.39px,1.302083vw,25px)] gap-[clamp(4.43px,0.78125vw,15px)] text-white">
                <div className="self-center size-[25px] lg:size-[clamp(40px,5.21vw,100px)] flex shrink-0 justify-center items-center rounded-full bg-valo">
                  <span className="relative size-[clamp(25px,3.13vw,60px)]">
                    <span className="absolute inset-0">{valor.icon}</span>
                  </span>
                </div>

                <h3 className="text-xs lg:text-title font-lumarc text-center font-bold uppercase tracking-wider leading-none">
                  {valor.label}
                </h3>
                <p className="text-[8px] lg:text-info text-center leading-[110%]">
                  {valor.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
