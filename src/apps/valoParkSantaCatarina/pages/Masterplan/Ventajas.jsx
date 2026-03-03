import { useLocation } from "react-router";
import { Link } from "react-router";
import { CircleIndicatorIcon } from "../../assets/icons/CicleIndicatorIcon";

const SUBMENU_VENTAJAS = [
  {
    id: "recorrido",
    label: "Recorrido 360",
    to: "/valoPark/santaCatarina/masterplan/ventajas-de-proyecto/recorrido-360",
  },
  {
    id: "video_tour",
    label: "Video Tour",
    to: "/valoPark/santaCatarina/masterplan/ventajas-de-proyecto/video-tour?ventaja=ubicacion-privilegiada",
  },
  {
    id: "galeria",
    label: "Foto Galería",
    to: "/valoPark/santaCatarina/masterplan/ventajas-de-proyecto/foto-galeria",
  },
];

export default function Ventajas() {
  const { pathname } = useLocation();

  return (
    <>
      {/* SUBMENU LATERAL DERECHO (RECORRIDO 360, VIDEO TOUR, FOTO GALERÍA) */}
      <div className="absolute z-50 right-0 top-1/2 -translate-y-1/2 pointer-events-none">
        <div className="pointer-events-auto flex flex-col items-center justify-center w-[clamp(30.21px,5.31vw,102px)] h-[clamp(240.13px,42.24vw,811px)] px-[clamp(4.73px,0.83vw,16px)] py-[clamp(2.96px,0.52vw,10px)] gap-[clamp(3.85px,0.68vw,13px)] bg-santa-catarina">
          {SUBMENU_VENTAJAS.map((button) => {
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
    </>
  );
}
