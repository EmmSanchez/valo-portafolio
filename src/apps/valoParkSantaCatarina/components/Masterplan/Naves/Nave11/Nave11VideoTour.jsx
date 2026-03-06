import { useContext } from "react";
import { useSearchParams } from "react-router";
import { VideoPlayerContext } from "@/apps/valoParkSantaCatarina/context/VideoPlayerContext";
import { MODE } from "@/apps/valoParkSantaCatarina/const/Videos";
import PinIconVTI from "@/apps/valoParkSantaCatarina/assets/icons/ventajas_vti/PinIconVTI";
import BackButton from "@/components/shared/Buttons/BackButton";
import AlturaVTI from "@/apps/valoParkSantaCatarina/assets/icons/naves/AlturaVTI";
import AndenVTI from "@/apps/valoParkSantaCatarina/assets/icons/naves/AndenVTI";
import RampaVTI from "@/apps/valoParkSantaCatarina/assets/icons/naves/RampaVTI";
import TechoVTI from "@/apps/valoParkSantaCatarina/assets/icons/naves/TechoVTI";
import MetrosVTI from "@/apps/valoParkSantaCatarina/assets/icons/naves/MetrosVTI";
import OficinaVTI from "@/apps/valoParkSantaCatarina/assets/icons/naves/OficinaVTI";

const CARACTERISTICAS = [
  {
    id: "1",
    label: "Acceso Privado",
    icon: PinIconVTI,
    slug: "acceso-privado",
  },
  {
    id: "2",
    label: "8 metros de altura",
    icon: AlturaVTI,
    slug: "altura",
  },
  {
    id: "3",
    label: "Andén para carga / descarga",
    icon: AndenVTI,
    slug: "anden",
  },
  {
    id: "4",
    label: "Rampa para montacargas",
    icon: RampaVTI,
    slug: "rampa-montacargas",
  },
  {
    id: "5",
    label: "Techo Térmico",
    icon: TechoVTI,
    slug: "techo-termico",
  },
  {
    id: "6",
    label: "600 m2",
    icon: MetrosVTI,
    slug: "area",
  },
  {
    id: "7",
    label: "Oficinas",
    icon: OficinaVTI,
    slug: "oficinas",
  },
];

export default function Nave11VideoTour() {
  const { mode } = useContext(VideoPlayerContext);

  const [searchParams, setSearchParams] = useSearchParams();
  const activeCaracteristica = searchParams.get("caracteristica");
  return (
    <div className="flex w-dvw h-dvh default-padding pointer-events-none">
      {/* SUBMENU LATERAL */}
      <div className="absolute h-full right-[clamp(10.36px,1.82vw,35px)] top-1/2 -translate-y-1/2 flex flex-col justify-center gap-[clamp(2.96px,0.52vw,10px)] pointer-events-none">
        <div className="flex flex-col justify-between w-[clamp(116.87px,20.57vw,395.1px)] h-[clamp(145.19px,45.37vh,490px)] p-[clamp(2.96px,0.52vw,10px)] gap-[clamp(2.96px,0.52vw,10px)] bg-santa-catarina">
          {CARACTERISTICAS.map((caracteristica) => {
            const IconComponent = caracteristica.icon;
            return (
              <button
                key={caracteristica.id}
                onClick={() =>
                  setSearchParams({ caracteristica: caracteristica.slug })
                }
                disabled={mode === MODE.TRANSITIONING}
                className={`flex justify-between items-center h-full px-[clamp(7.39px,1.30vw,25px)] rounded-[clamp(14.8px,2.6vw,50px)] pointer-events-auto ${mode !== MODE.TRANSITIONING ? "hover:cursor-pointer hover:bg-santa-catarina-grey" : ""} ${activeCaracteristica === caracteristica.slug ? "font-bold bg-santa-catarina-grey" : "bg-santa-catarina"}`}
              >
                <p className="text-paragraph-button font-semibold whitespace-nowrap">
                  {caracteristica.label}
                </p>

                <IconComponent className="shrink-0 size-[clamp(7.11px,1.25vw,24px)]" />
              </button>
            );
          })}
        </div>
      </div>

      <BackButton
        to="/valoPark/santaCatarina/masterplan/naves-industriales/nave-11"
        className="self-end pointer-events-auto bg-santa-catarina hover:bg-santa-catarina-grey"
      />
    </div>
  );
}
