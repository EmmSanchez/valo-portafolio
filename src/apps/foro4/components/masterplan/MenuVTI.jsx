import { useSearchParams } from "react-router";
import LobbyIcon from "@/apps/foro4/assets/icons/masterplan/video-tour/elevador.svg";
import CentralIcon from "@/apps/foro4/assets/icons/masterplan/video-tour/central.svg";
import ComidaIcon from "@/apps/foro4/assets/icons/masterplan/video-tour/restaurante.svg";
import JuegosIcon from "@/apps/foro4/assets/icons/masterplan/video-tour/juego.svg";
import TerrazaIcon from "@/apps/foro4/assets/icons/masterplan/video-tour/terraza.svg";
import OficinasIcon from "@/apps/foro4/assets/icons/masterplan/video-tour/edificio.svg";
import HotelIcon from "@/apps/foro4/assets/icons/masterplan/video-tour/hotel.svg";
import EstacionamientoIcon from "@/apps/foro4/assets/icons/masterplan/video-tour/estacionamiento.svg";
import LocalesIcon from "@/apps/foro4/assets/icons/masterplan/video-tour/local.svg";

const VENTAJAS = [
  {
    id: "1",
    label: "Motor Lobby",
    icon: LobbyIcon,
    slug: "motor-lobby",
  },
  {
    id: "2",
    label: "Área Central",
    icon: CentralIcon,
    slug: "area-central",
  },
  {
    id: "3",
    label: "Zona de Comida",
    icon: ComidaIcon,
    slug: "zona-de-comida",
  },
  {
    id: "4",
    label: "Área de Juegos",
    icon: JuegosIcon,
    slug: "area-de-juegos",
  },
  {
    id: "5",
    label: "Terraza Techada",
    icon: TerrazaIcon,
    slug: "terraza-techada",
  },
  {
    id: "6",
    label: "Edificio de Oficinas",
    icon: OficinasIcon,
    slug: "edificio-oficinas",
  },
  {
    id: "7",
    label: "Hotel 5 estrellas",
    icon: HotelIcon,
    slug: "hotel-5-estrellas",
  },
  {
    id: "8",
    label: "Estacionamiento Subterráneo",
    icon: EstacionamientoIcon,
    slug: "estacionamiento-subterraneo",
  },
  {
    id: "9",
    label: "Locales disponibles",
    icon: LocalesIcon,
    slug: "locales-disponibles",
  },
];

export default function VideoTour() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeVentaja = searchParams.get("ventaja");
  return (
    <div className="flex w-dvw h-dvh default-padding pointer-events-none">
      <div className="absolute h-full right-[clamp(10.36px,1.82vw,35px)] top-1/2 -translate-y-1/2 flex flex-col justify-center gap-[clamp(2.96px,0.52vw,10px)] pointer-events-none">
        <div className="flex flex-col justify-between w-[clamp(116.87px,20.57vw,395.1px)] h-fit p-[clamp(2.96px,0.52vw,10px)] gap-[clamp(2.96px,0.52vw,10px)] bg-santa-catarina">
          {VENTAJAS.map((ventaja) => {
            return (
              <button
                key={ventaja.id}
                onClick={() => setSearchParams({ ventaja: ventaja.slug })}
                // disabled={mode === MODE.TRANSITIONING}
                className={`group flex justify-between items-center h-full py-[clamp(6.5px,1.145833vw,22px)] px-[clamp(5.91px,1.041667vw,20px)] rounded-[clamp(14.8px,2.6vw,50px)] pointer-events-auto hover:bg-santa-catarina-grey hover:cursor-pointer ${activeVentaja === ventaja.slug ? "font-bold bg-santa-catarina-grey" : "bg-santa-catarina"}`}
              >
                <p className="text-paragraph-button font-semibold whitespace-nowrap">
                  {ventaja.label}
                </p>

                <img
                  src={ventaja.icon}
                  className="shrink-0 size-[clamp(7.11px,1.25vw,24px)]"
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
