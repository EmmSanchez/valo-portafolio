import { useContext } from "react";
import { useSearchParams } from "react-router";
import { VideoPlayerContext } from "@/apps/valoParkSantaCatarina/context/VideoPlayerContext";
import { MODE } from "@/apps/valoParkSantaCatarina/const/Videos";
import BackButton from "@/components/shared/Buttons/BackButton";
import { CircleIndicatorIcon } from "@/apps/valoParkSantaCatarina/assets/icons/CicleIndicatorIcon";
import PinIconVTI from "@/apps/valoParkSantaCatarina/assets/icons/ventajas_vti/PinIconVTI";
import ViaIcon from "@/apps/valoParkSantaCatarina/assets/icons/ventajas_vti/ViaIcon";
import PortonIconVTI from "@/apps/valoParkSantaCatarina/assets/icons/ventajas_vti/PortonIconVTI";
import ClaseAIcon from "@/apps/valoParkSantaCatarina/assets/icons/ventajas_vti/ClaseAIcon";
import EntradaIcon from "@/apps/valoParkSantaCatarina/assets/icons/carrousel/EntradaIcon";
import BodegaIconVTI from "@/apps/valoParkSantaCatarina/assets/icons/ventajas_vti/BodegaIconVTI";

const VENTAJAS = [
  {
    id: "1",
    label: "Ubicación Privilegiada",
    icon: PinIconVTI,
    slug: "ubicacion-privilegiada",
  },
  {
    id: "2",
    label: "Cerca de Centro Comercial",
    icon: ViaIcon,
    slug: "cercania-centro-comercial",
  },
  {
    id: "3",
    label: "Portón controlado",
    icon: PortonIconVTI,
    slug: "porton-controlado",
  },
  {
    id: "4",
    label: "Espacio industrial Clase A",
    icon: ClaseAIcon,
    slug: "espacio-industrial-clase-a",
  },
  {
    id: "5",
    label: "Patio de maniobras",
    icon: EntradaIcon,
    slug: "patio-de-maniobras",
  },
  {
    id: "6",
    label: "Bodegas listas para entrega",
    icon: BodegaIconVTI,
    slug: "bodegas-listas",
  },
];

export default function VentajasVTI() {
  const { mode } = useContext(VideoPlayerContext);

  const [searchParams, setSearchParams] = useSearchParams();
  const activeVentaja = searchParams.get("ventaja");

  return (
    <div className="flex w-dvw h-dvh default-padding pointer-events-none">
      <div className="absolute h-full right-[clamp(10.36px,1.82vw,35px)] top-1/2 -translate-y-1/2 flex flex-col justify-center gap-[clamp(2.96px,0.52vw,10px)] pointer-events-none">
        <div className="flex flex-col justify-between w-[clamp(116.87px,20.57vw,395.1px)] h-[clamp(145.19px,45.37vh,490px)] p-[clamp(2.96px,0.52vw,10px)] gap-[clamp(2.96px,0.52vw,10px)] bg-santa-catarina">
          {VENTAJAS.map((ventaja) => {
            const IconComponent = ventaja.icon;
            return (
              <button
                key={ventaja.id}
                onClick={() => setSearchParams({ ventaja: ventaja.slug })}
                disabled={mode === MODE.TRANSITIONING}
                className={`flex justify-between items-center h-full px-[clamp(7.39px,1.30vw,25px)] rounded-[clamp(14.8px,2.6vw,50px)] pointer-events-auto ${mode !== MODE.TRANSITIONING ? "hover:cursor-pointer hover:bg-santa-catarina-grey" : ""} ${activeVentaja === ventaja.slug ? "font-bold bg-santa-catarina-grey" : "bg-santa-catarina"}`}
              >
                <p className="text-paragraph-button font-semibold whitespace-nowrap">
                  {ventaja.label}
                </p>

                <IconComponent className="shrink-0 size-[clamp(7.11px,1.25vw,24px)]" />
              </button>
            );
          })}
        </div>
      </div>

      <BackButton
        to="/valoPark/santaCatarina/masterplan/ventajas-de-proyecto"
        className="self-end pointer-events-auto bg-santa-catarina hover:bg-santa-catarina-grey"
      />
    </div>
  );
}
