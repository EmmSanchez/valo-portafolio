import { Link } from "react-router";
import BackButton from "@/components/shared/Buttons/BackButton";
import logo from "@/apps/foro4/assets/logos/main/logo-foro-4-white-green.svg";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

// Reemplaza con tus datos reales
const SLIDES = [
  {
    id: "locales-piso-1",
    piso: "Piso 1",
    descripcion:
      "Explora los locales disponibles y encuentra el espacio ideal para tu negocio.",
    locales: [
      {
        id: "L-109",
        precio: "$80,923.92",
        superficie: "166",
        preciom2: "$360",
      },
      {
        id: "L-110",
        precio: "$69,693.96",
        superficie: "143.05",
        preciom2: "$360",
      },
      {
        id: "L-120",
        precio: "$107,299.49",
        superficie: "181",
        preciom2: "$450",
      },
    ],
  },
  {
    id: "locales-piso-2",
    piso: "Piso 2",
    descripcion: "Descubre los espacios disponibles en el segundo nivel.",
    locales: [
      {
        id: "L-201",
        precio: "$55,000.00",
        superficie: "120",
        preciom2: "$360",
      },
      {
        id: "L-205",
        precio: "$72,000.00",
        superficie: "155",
        preciom2: "$380",
      },
    ],
  },
  {
    id: "locales-piso-3",
    piso: "Piso 3",
    descripcion: "Espacios premium con vista privilegiada.",
    locales: [
      {
        id: "L-301",
        precio: "$95,000.00",
        superficie: "200",
        preciom2: "$475",
      },
      {
        id: "L-310",
        precio: "$88,500.00",
        superficie: "185",
        preciom2: "$478",
      },
    ],
  },
];

function LocalCard({ local }) {
  return (
    <div className="flex flex-col bg-foro4-morado border border-white/20 rounded overflow-hidden min-w-0">
      {/* Foto placeholder — reemplaza con <img src={local.imagen} /> */}
      <div className="w-full aspect-[4/3] bg-white/10 flex items-center justify-center text-white/30 text-sm">
        foto
      </div>

      {/* Info */}
      <div className="flex flex-col gap-2 p-3">
        <div className="flex items-end justify-between">
          <span className="text-foro4-verde font-bold text-lg font-lumarc">
            {local.id}
          </span>
          <div className="text-right">
            <p className="text-white/60 text-[10px]">Precio de Renta</p>
            <p className="text-white font-semibold text-sm">{local.precio}</p>
          </div>
        </div>

        <div className="flex gap-2">
          <div className="flex-1 bg-white/15 rounded px-2 py-1 text-center">
            <p className="text-white/60 text-[9px]">Superficie</p>
            <p className="text-white text-xs font-semibold">
              {local.superficie} m²
            </p>
          </div>
          <div className="flex-1 bg-white/15 rounded px-2 py-1 text-center">
            <p className="text-white/60 text-[9px]">Precio por m²</p>
            <p className="text-white text-xs font-semibold">{local.preciom2}</p>
          </div>
        </div>

        <button className="w-full bg-foro4-verde/80 hover:bg-foro4-verde text-white text-xs py-1.5 rounded transition-colors font-lumarc tracking-wide">
          Explorar Local ↗
        </button>
      </div>
    </div>
  );
}

export default function LocalesDisponibles() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="w-full h-svh default-foro4-padding bg-foro4-morado">
      <div className="absolute top-0 left-0 z-50 default-logo-padding">
        <Link to={"/foro4"}>
          <img
            src={logo}
            alt="Logo de FORO 4"
            className="w-[clamp(59.13px,10.416667vw,200px)] h-[clamp(6.51px,1.145833vw,22px)]"
          />
        </Link>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col w-full h-full items-start">
        {/* Carrousel */}
        <div className="relative w-full flex flex-1 overflow-hidden">
          <div className="overflow-hidden w-full h-full" ref={emblaRef}>
            <div className="flex h-full">
              {SLIDES.map((slide) => (
                <div
                  key={slide.id}
                  className="flex-[0_0_100%] min-w-0 h-full flex flex-col items-center justify-center px-[4vw] gap-4"
                >
                  {/* Título del slide */}
                  <div className="text-center">
                    <h2 className="text-foro4-verde font-lumarc font-bold uppercase tracking-widest text-title">
                      Locales Disponibles — {slide.piso}
                    </h2>
                    <p className="text-white text-label mt-1">
                      {slide.descripcion}
                    </p>
                  </div>

                  {/* Cards */}
                  <div
                    className="grid gap-4 w-full"
                    style={{
                      gridTemplateColumns: `repeat(${slide.locales.length}, minmax(0, 1fr))`,
                      maxWidth: `${slide.locales.length * 260}px`,
                    }}
                  >
                    {slide.locales.map((local) => (
                      <LocalCard key={local.id} local={local} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer: BackButton + Nav */}
        <div className="relative flex w-full items-center pointer-events-none">
          <BackButton
            to="/foro4/masterplan/vista-cenital"
            className="bg-white text-foro4-morado pointer-events-auto"
          />

          {/* Prev + Indicadores + Next — centrados */}
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-3 pointer-events-auto">
            <button
              onClick={scrollPrev}
              className="flex items-center justify-center size-9 rounded-full border-2 border-white text-white hover:bg-white/20 transition-colors text-lg leading-none"
              aria-label="Anterior"
            >
              ‹
            </button>

            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                className={`rounded-full border-2 border-white transition-all duration-300 size-3 ${
                  i === selectedIndex ? "bg-white" : "bg-transparent"
                }`}
                aria-label={`Ir al slide ${i + 1}`}
              />
            ))}

            <button
              onClick={scrollNext}
              className="flex items-center justify-center size-9 rounded-full border-2 border-white text-white hover:bg-white/20 transition-colors text-lg leading-none"
              aria-label="Siguiente"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
