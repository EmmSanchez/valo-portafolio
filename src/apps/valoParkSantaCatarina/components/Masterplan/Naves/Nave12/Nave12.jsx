import { useSearchParams, Link } from "react-router";
import { CircleIndicatorIcon } from "@/apps/valoParkSantaCatarina/assets/icons/CicleIndicatorIcon";
import BackButton from "@/components/shared/Buttons/BackButton";
import SubmenuMasterplan from "../../../Menus/SubmenuMasterplan";
import { SUBMENU_MASTERPLAN } from "@/apps/valoParkSantaCatarina/data/SubmenuMasterplan";
import WhastappIcon from "@/apps/valoParkSantaCatarina/assets/icons/WhastappIcon";

const SUBMENU_NAVES = [
  {
    id: "recorrido",
    label: "Recorrido 360",
    to: "/valoPark/santaCatarina/masterplan/naves-industriales/nave-12/recorrido-360",
  },
  {
    id: "video_tour",
    label: "Video Tour",
    to: "/valoPark/santaCatarina/masterplan/naves-industriales/nave-12/video-tour?ventaja=ubicacion-privilegiada",
  },
  {
    id: "galeria",
    label: "Foto Galería",
    to: "/valoPark/santaCatarina/masterplan/naves-industriales/nave-12/foto-galeria",
  },
];

export default function Nave12() {
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

      {/* Botón CTA */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <button className="pointer-events-auto group w-[clamp(92.01px,16.20vw,311px)] h-[clamp(20.74px,6.48vh,70px)] landscape:w-[clamp(110px,19vw,360px)] landscape:h-[clamp(28px,8vh,90px)] landscape:px-[clamp(16px,3vw,55px)] flex justify-between items-center px-[clamp(13.31px,2.34vw,45px)] bg-white/70 backdrop-blur-2xl hover:bg-santa-catarina hover:cursor-pointer">
          <p className="text-nave-button font-semibold text-santa-catarina group-hover:text-white whitespace-nowrap">
            Me interesa
          </p>
          <WhastappIcon className="size-[clamp(7.99px,1.41vw,27px)] text-santa-catarina group-hover:text-white" />
        </button>
      </div>

      {/* Botón de regresar */}
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
