import { CompromisoIcon } from "@/apps/valoPortafolio/assets/icons/conoce-valo-developers/CompromisoIcon";
import { EscudoIcon } from "@/apps/valoPortafolio/assets/icons/conoce-valo-developers/EscudoIcon";
import { IdeaIcon } from "@/apps/valoPortafolio/assets/icons/conoce-valo-developers/IdeaIcon";
import { ValoresIcon } from "@/apps/valoPortafolio/assets/icons/conoce-valo-developers/ValoresIcon";
import compromisoBg from "../../../assets/images/conoce-valo-developers/compromiso.png";
import franquezaBg from "../../../assets/images/conoce-valo-developers/franqueza.png";
import asertividadBg from "../../../assets/images/conoce-valo-developers/asertividad.png";
import excelenciaBg from "../../../assets/images/conoce-valo-developers/excelencia.png";

const VALORES_INFO = [
  {
    id: "compromiso",
    label: "Compromiso",
    description:
      "A través del compromiso alineamos nuestros intereses, y ponemos al máximo nuestras capacidades para sacar adelante la misión encomendada, teniendo en cuenta que conocemos las condiciones que estamos aceptando y las obligaciones que éstas implican.",
    icon: <CompromisoIcon className="text-white" />,
    img: compromisoBg,
  },
  {
    id: "franqueza",
    label: "Franqueza",
    description:
      "En Valo apostamos por la franqueza. Creemos que la comunicación de forma directa y sincera, sea cual sea la circunstancia, enriquece las relaciones y mejora la motivación de la empresa.",
    icon: <ValoresIcon className="text-white" />,
    img: franquezaBg,
  },
  {
    id: "asertividad",
    label: "Asertividad",
    description:
      "La asertividad es una herramienta poderosa de comunicación en Valo, ya que mejora la productividad y nos permite tomar decisiones bien razonadas y calculadas.",
    icon: <IdeaIcon className="text-white" />,
    img: asertividadBg,
  },
  {
    id: "excelencia",
    label: "Excelencia",
    description:
      "En Valo, aspiramos a la excelencia en la operación y ejecución de nuestros deberes. Esto nos permite obtener resultados óptimos que requieren la adaptación constante de nuevos conocimientos y habilidades.",
    icon: <EscudoIcon className="text-white" />,
    img: excelenciaBg,
  },
];

export default function Slide2() {
  return (
    <div className="flex w-full h-full items-center">
      <div className="flex w-full justify-center gap-3 2xl:gap-7.5">
        {VALORES_INFO.map((valor) => {
          return (
            <div
              key={valor.id}
              className="relative w-full max-w-105 h-[clamp(200px,28.13vw,540px)] overflow-hidden"
            >
              {/* Fondo */}
              <img
                src={valor.img}
                alt={valor.label}
                className="absolute inset-0 w-full h-full object-cover blur-[5px] z-0"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-[#12274c]/75 z-10" />

              {/* Contenido */}
              <div className="relative z-20 w-full h-full flex flex-col px-1.5 py-2 sm:px-3.5 sm:py-5  2xl:px-6.25 2xl:py-11.25 gap-1.5 2xl:gap-3.75 text-white">
                <div className="self-center size-[clamp(40px,5.21vw,100px)] flex shrink-0 justify-center items-center rounded-full bg-valo">
                  <span className="relative size-[clamp(25px,3.13vw,60px)]">
                    <span className="absolute inset-0">{valor.icon}</span>
                  </span>
                </div>

                <h3 className="text-title font-lumarc font-bold uppercase tracking-wider">
                  {valor.label}
                </h3>
                <p className="text-info leading-[110%]">{valor.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
