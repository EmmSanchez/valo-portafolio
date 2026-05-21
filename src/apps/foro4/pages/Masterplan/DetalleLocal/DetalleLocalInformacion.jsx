import { useParams } from "react-router";
import { LOCALES } from "@/apps/foro4/data/locales-caracteristicas";
import MontanaIcon from "@/apps/foro4/assets/icons/masterplan/locales-disponibles/montaña.svg";
import TerrazaIcon from "@/apps/foro4/assets/icons/masterplan/locales-disponibles/terraza.svg";
import TiendaIcon from "@/apps/foro4/assets/icons/masterplan/locales-disponibles/tienda.svg";

// Definición de qué campos mostrar y qué icono/label usar
const CAMPOS = [
  { key: "superficieTotal", label: "Superficie Total", icono: TiendaIcon },
  { key: "ancla301", label: "Ancla 301", icono: TiendaIcon },
  { key: "superficie", label: "Superficie", icono: MontanaIcon },
  { key: "ancla301a", label: "Ancla 301 A", icono: TiendaIcon },
  { key: "terraza", label: "Terraza", icono: TerrazaIcon },
];

export default function DetalleLocalInformacion() {
  const { slug } = useParams();

  const local = LOCALES[slug];
  if (!local) return null;

  const metricas = CAMPOS.filter(({ key }) => local[key] !== undefined);

  return (
    <div className="relative w-full h-full bg-foro4-morado flex items-center justify-center overflow-hidden">
      {/* Fondo */}
      <div
        className="absolute inset-0 z-0 w-full h-full opacity-15 bg-cover bg-center blur-sm pointer-events-none"
        style={{ backgroundImage: `url(${local.img})` }}
      />

      <div
        className="relative z-10 flex flex-col items-center gap-[1.8vw] w-[85.9375vw]"
        style={{ scale: "min(1, calc(90vh / 520px))" }}
      >
        {/* Título */}
        <div className="flex flex-col text-center gap-[0.833vw]">
          <p className="text-white font-lumarc font-bold uppercase text-title-lg">
            {local.name}
          </p>
          <h2 className="text-white font-bold uppercase text-display-xl">
            Características Principales
          </h2>
        </div>

        {/* Card blanca */}
        <div className="w-full flex justify-center">
          {metricas.map(({ key, label, icono }) => (
            <div
              key={key}
              className="flex-1 max-w-[33.33%] flex flex-col items-center justify-center gap-[0.78vw] py-[2vw] px-[0.78vw] border-b-[0.26vw] bg-white border-foro4-verde"
            >
              <img
                src={icono}
                alt={label}
                draggable={false}
                className="h-[2.86vw]"
              />
              <p className="text-foro4-morado uppercase text-paragraph text-center leading-[120%]">
                {label}
              </p>
              <p className="text-foro4-morado font-bold text-display-xl leading-[110%]">
                {local[key]} m²
              </p>
            </div>
          ))}
        </div>

        {/* Cards verdes */}
        <div className="w-full grid grid-cols-2 gap-[2.6vw]">
          {[
            { label: "Precio de Renta", valor: local.precioRenta },
            { label: "Precio por M²", valor: local.preciom2 },
          ].map(({ label, valor }) => (
            <div
              key={label}
              className="flex flex-col h-[14.3vw] items-center justify-center gap-[0.4vw] bg-foro4-verde"
            >
              <p className="text-white uppercase text-datos text-center leading-none">
                {label}
              </p>
              <p className="text-white font-bold text-display-xl leading-[120%]">
                {valor}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
