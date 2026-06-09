import { useSearchParams, Link } from "react-router";
import { CircleIndicatorIcon } from "@/apps/valoParkSantaCatarina/assets/icons/CicleIndicatorIcon";
import BackButton from "@/components/shared/Buttons/BackButton";
import SubmenuMasterplan from "../../../Menus/SubmenuMasterplan";
import { SUBMENU_MASTERPLAN } from "@/apps/valoParkSantaCatarina/data/SubmenuMasterplan";
import WhastappIcon from "@/apps/valoParkSantaCatarina/assets/icons/WhastappIcon";
import MailIcon from "@/apps/valoParkSantaCatarina/assets/icons/MailIcon";

const SUBMENU_NAVES = [
  {
    id: "recorrido",
    label: "Recorrido 360",
    to: "/valoPark/santaCatarina/masterplan/naves-industriales/nave-11/recorrido-360",
  },
  {
    id: "video_tour",
    label: "Video Tour",
    to: "/valoPark/santaCatarina/masterplan/naves-industriales/nave-11/video-tour?caracteristica=acceso-privado",
  },
  {
    id: "galeria",
    label: "Foto Galería",
    to: "/valoPark/santaCatarina/masterplan/naves-industriales/nave-11/foto-galeria",
  },
];

export default function Nave11() {
  const { pathname } = useSearchParams();
  return (
    <div className="absolute flex inset-0 w-dvw h-dvh pointer-events-none default-padding">
      {/* SUBMENU LATERAL */}
      <div className="absolute z-50 right-0 top-1/2 -translate-y-1/2 pointer-events-none">
        <div className="pointer-events-auto flex flex-col items-center justify-center w-[clamp(30.21px,5.31vw,102px)] h-[clamp(240.13px,42.24vw,811px)] px-[clamp(4.73px,0.83vw,16px)] py-[clamp(2.96px,0.52vw,10px)] gap-[clamp(3.85px,0.68vw,13px)] bg-santa-catarina">
          {SUBMENU_NAVES.map((button) => {
            return (
              <Link
                key={button.id}
                to={button.to}
                data-active={pathname === button.to}
                className={`group flex-1 flex flex-col-reverse justify-around items-center w-full rounded-[clamp(11.83px,2.08vw,40px)] hover:cursor-pointer  ${pathname === button.to ? "bg-santa-catarina-grey" : "hover:bg-santa-catarina-grey"}`}
              >
                <p className="text-paragraph-subFilter-button vertical-left font-semibold text-white">
                  {button.label}
                </p>

                <span className="relative size-[clamp(8px,1.25vw,24px)]">
                  {/* Inactive */}
                  <span className="absolute inset-0 group-hover:hidden group-data-[active=true]:hidden">
                    <CircleIndicatorIcon isActive={false} />
                  </span>

                  {/* Active / Hover */}
                  <span className="absolute inset-0 hidden group-hover:block group-data-[active=true]:block">
                    <CircleIndicatorIcon isActive />
                  </span>
                </span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Botón Whatsapp y Correo */}
      <div className="absolute inset-0 flex justify-center items-end default-padding gap-[clamp(5.02px,0.885417vw,17px)] pointer-events-none">
        <button className="pointer-events-auto group p-[clamp(5.02px,0.885417vw,17px)] bg-santa-catarina hover:bg-santa-catarina-grey hover:cursor-pointer">
          <WhastappIcon className="size-[clamp(13.9px,2.447917vw,47px)] text-white group-hover:text-white" />
        </button>

        <button className="pointer-events-auto group p-[clamp(5.02px,0.885417vw,17px)] bg-santa-catarina hover:bg-santa-catarina-grey hover:cursor-pointer">
          <MailIcon className="size-[clamp(13.9px,2.447917vw,47px)] text-white group-hover:text-white" />
        </button>
      </div>

      {/* Botón de regresar y menu masterplan*/}
      <div className="pointer-events-auto absolute z-10 flex flex-col self-end">
        <SubmenuMasterplan submenu={SUBMENU_MASTERPLAN} />
        <BackButton
          to="/valoPark/santaCatarina/masterplan/naves-industriales"
          className="self-end bg-santa-catarina hover:bg-santa-catarina-grey"
        />
      </div>
    </div>
  );
}
