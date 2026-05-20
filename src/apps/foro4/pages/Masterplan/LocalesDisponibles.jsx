import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router";
import useEmblaCarousel from "embla-carousel-react";
import BackButton from "@/components/shared/Buttons/BackButton";
import logo from "@/apps/foro4/assets/logos/main/logo-foro-4-white-green.svg";
import ClickIcon from "@/apps/foro4/assets/icons/masterplan/locales-disponibles/icon_click.svg";
import BannerLocal109 from "@/apps/foro4/assets/images/masterplan/locales-disponibles/banners/LOCAL-109.jpg";
import BannerLocal110 from "@/apps/foro4/assets/images/masterplan/locales-disponibles/banners/LOCAL-110.jpg";
import BannerLocal120 from "@/apps/foro4/assets/images/masterplan/locales-disponibles/banners/LOCAL-120.jpg";
import BannerLocal201 from "@/apps/foro4/assets/images/masterplan/locales-disponibles/banners/LOCAL-201.jpg";
import BannerLocal301 from "@/apps/foro4/assets/images/masterplan/locales-disponibles/banners/LOCAL-301.jpg";
import BannerLocal309 from "@/apps/foro4/assets/images/masterplan/locales-disponibles/banners/LOCAL-309.jpg";
import BannerLocal310 from "@/apps/foro4/assets/images/masterplan/locales-disponibles/banners/LOCAL-310.jpg";

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
        img: BannerLocal109,
      },
      {
        id: "L-110",
        precio: "$69,693.96",
        superficie: "143.05",
        preciom2: "$360",
        img: BannerLocal110,
      },
      {
        id: "L-120",
        precio: "$107,298.49",
        superficie: "181",
        preciom2: "$450",
        img: BannerLocal120,
      },
    ],
  },
  {
    id: "locales-piso-2",
    piso: "Piso 2",
    descripcion:
      "Explora los locales disponibles y encuentra el espacio ideal para tu negocio",
    locales: [
      {
        id: "L-201",
        precio: "$94,284.80",
        superficie: "254",
        preciom2: "$260",
        img: BannerLocal201,
      },
    ],
  },
  {
    id: "locales-piso-3",
    piso: "Piso 3",
    descripcion:
      "Explora los locales disponibles y encuentra el espacio ideal para tu negocio",
    locales: [
      {
        id: "L-301 Y 310 A",
        precio: "$333,098.64",
        superficie: "883.19",
        preciom2: "$300",
        img: BannerLocal301,
      },
      {
        id: "L-309",
        precio: "$92,805.57",
        superficie: "258.08",
        preciom2: "$250",
        img: BannerLocal309,
      },
      {
        id: "L-310",
        precio: "$114,874",
        superficie: "319.92",
        preciom2: "$250",
        img: BannerLocal310,
      },
    ],
  },
];

function LocalCard({ local }) {
  return (
    <div className="flex flex-col bg-white border rounded overflow-hidden min-w-0 w-[clamp(145.8px,25.729167vw,494px)] h-[clamp(184.13px,32.5vw,624px)] p-[clamp(4.43px,0.78125vw,15px)] gap-[clamp(2.95px,0.520833vw,10px)]">
      {/* Foto placeholder — reemplaza con <img src={local.imagen} /> */}
      <div className="relative w-full aspect-464/378 bg-foro4-morado/50 flex items-center justify-center">
        <img
          src={local.img}
          alt={`Imagen del lote ${local.id}`}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Info */}
      <div className="flex flex-col h-full justify-between gap-[clamp(2.95px,0.520833vw,10px)]">
        <div className="flex items-center justify-between h-[clamp(20.08px,3.541667vw,64px)]">
          <span className="text-foro4-morado font-bold text-card-lote font-lumarc">
            {local.id}
          </span>
          <div className="text-center px-[clamp(4.43px,0.78125vw,15px)] py-[clamp(2.95px,0.520833vw,10px)]">
            <p className="text-foro4-morado text-paragraph-sub-button leading-[100%]">
              Precio de Renta
            </p>
            <p className="text-foro4-morado font-semibold text-datos-disp ">
              {local.precio}
            </p>
          </div>
        </div>

        <div className="flex gap-[clamp(2.95px,0.520833vw,10px)]">
          <div className="flex flex-col flex-1 justify-center items-center text-center px-[clamp(4.43px,0.78125vw,15px)] py-[clamp(2.95px,0.520833vw,7px)] bg-foro4-morado/80">
            <p className="text-paragraph-sub-button">Superficie</p>
            <p className="text-white text-datos-disp font-semibold leading-[100%]">
              {local.superficie} m²
            </p>
          </div>
          <div className="flex flex-col flex-1 justify-center items-center px-[clamp(4.43px,0.78125vw,15px)] py-[clamp(2.95px,0.520833vw,7px)] text-center bg-foro4-morado/80">
            <p className="text-paragraph-button">Precio por m²</p>
            <p className="text-white text-datos-disp font-semibold leading-[100%]">
              {local.preciom2}
            </p>
          </div>
        </div>

        {/* Botón Explocar Local */}
        <button className="flex w-full h-[clamp(14.77px,2.804167vw,58px)] justify-center items-center bg-foro4-morado text-white text-paragraph-button gap-[clamp(4.43px,0.78125vw,15px)] font-semibold transition-colors tracking-wide hover:cursor-pointer">
          Explorar Local
          <img
            src={ClickIcon}
            alt="Icono de click"
            className="w-[clamp(7.09px,1.25vw,24px)]"
          />
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
                  className="flex-[0_0_100%] min-w-0 h-full flex flex-col items-center justify-center px-[4vw] gap-[clamp(11.81px,2.083333vw,40px)]"
                >
                  {/* Título del slide */}
                  <div className="flex flex-col text-center gap-[clamp(5.91px,1.041667vw,20px)]">
                    <h2 className="text-foro4-verde font-lumarc font-bold uppercase tracking-wide text-title-lg">
                      Locales Disponibles — {slide.piso}
                    </h2>
                    <p className="text-white text-paragraph">
                      {slide.descripcion}
                    </p>
                  </div>

                  {/* Cards */}
                  <div className="grid grid-flow-col auto-cols-max justify-center w-full place-items-center gap-[clamp(23.63px,4.166667vw,80px)]">
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
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-[clamp(8.56px,1.510417vw,29px)] pointer-events-auto">
            <button
              onClick={scrollPrev}
              className="flex items-center justify-center size-[clamp(20.67px,3.645833vw,70px)] p-[clamp(4.43px,0.78125vw,15px)] bg-white text-foro4-morado transition-opacity duration-200 hover:cursor-pointer hover:opacity-80"
              aria-label="Anterior"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="34"
                viewBox="0 0 19 34"
                fill="none"
              >
                <path
                  d="M0.446091 15.6639L15.6635 0.446472C15.8049 0.305088 15.9727 0.192936 16.1574 0.116421C16.3422 0.0399017 16.5402 0.000518799 16.7401 0.000518799C16.9401 0.000518799 17.1381 0.0399017 17.3228 0.116421C17.5075 0.192936 17.6754 0.305088 17.8167 0.446472C17.9581 0.58786 18.0703 0.755707 18.1468 0.940437C18.2233 1.12516 18.2627 1.32315 18.2627 1.5231C18.2627 1.72305 18.2233 1.92105 18.1468 2.10577C18.0703 2.2905 17.9581 2.45835 17.8167 2.59974L3.67408 16.7405L17.8167 30.8813C18.1023 31.1668 18.2627 31.5541 18.2627 31.9579C18.2627 32.3617 18.1023 32.749 17.8167 33.0345C17.5312 33.3201 17.1439 33.4805 16.7401 33.4805C16.3363 33.4805 15.949 33.3201 15.6635 33.0345L0.446091 17.8171C0.304605 17.6758 0.192362 17.508 0.115782 17.3232C0.0392017 17.1385 -0.000213623 16.9405 -0.000213623 16.7405C-0.000213623 16.5405 0.0392017 16.3425 0.115782 16.1578C0.192362 15.973 0.304605 15.8052 0.446091 15.6639Z"
                  fill="#151515"
                />
              </svg>
            </button>

            <div className="flex gap-[clamp(2.95px,0.520833vw,10px)]">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => emblaApi?.scrollTo(i)}
                  className={`size-[clamp(9.47px,1.67vw,32px)] border-[clamp(1.18px,0.21vw,4px)] rounded-full border-white transition-all duration-300 hover:cursor-pointer ${
                    i === selectedIndex ? "bg-white" : "bg-transparent"
                  }`}
                  aria-label={`Ir al slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={scrollNext}
              className="flex items-center justify-center size-[clamp(20.67px,3.645833vw,70px)] p-[clamp(4.43px,0.78125vw,15px)] bg-white text-foro4-morado transition-opacity duration-200 hover:cursor-pointer hover:opacity-80"
              aria-label="Siguiente"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="34"
                viewBox="0 0 19 34"
                fill="none"
              >
                <path
                  d="M17.8166 17.8166L2.59922 33.034C2.45783 33.1754 2.28998 33.2875 2.10525 33.364C1.92052 33.4406 1.72253 33.4799 1.52258 33.4799C1.32264 33.4799 1.12465 33.4406 0.939917 33.364C0.755188 33.2875 0.587339 33.1754 0.445954 33.034C0.304569 32.8926 0.192416 32.7248 0.115899 32.54C0.0393821 32.3553 0 32.1573 0 31.9574C0 31.7574 0.0393821 31.5594 0.115899 31.3747C0.192416 31.19 0.304569 31.0221 0.445954 30.8807L14.5886 16.74L0.445954 2.59922C0.160414 2.31368 -3.00865e-09 1.9264 0 1.52258C3.00866e-09 1.11877 0.160414 0.731495 0.445954 0.445955C0.731494 0.160415 1.11877 3.00865e-09 1.52258 0C1.9264 -3.00865e-09 2.31368 0.160415 2.59922 0.445955L17.8166 15.6633C17.9581 15.8047 18.0703 15.9725 18.1469 16.1572C18.2235 16.342 18.2629 16.54 18.2629 16.74C18.2629 16.94 18.2235 17.138 18.1469 17.3227C18.0703 17.5074 17.9581 17.6753 17.8166 17.8166Z"
                  fill="#151515"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
