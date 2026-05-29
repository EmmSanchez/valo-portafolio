import { Outlet } from "react-router";
import { useSearchParams } from "react-router";
import BackButton from "@/components/shared/Buttons/BackButton";
import LogoValoParkSantaCatarina from "../../assets/logos/logo-valoParkSC";
import CompassIcon from "../../assets/icons/CompassIcon";
import { FILTERS } from "../../const/Filters";
import PuntosInteresFilters from "../../components/Menus/PuntosInteresFilters";
import { MENU_UBICACION } from "../../data/menu-ubicacion";

export default function UbicacionLayout() {
  const [searchParams, _] = useSearchParams();
  const filters = MENU_UBICACION;

  const filter = searchParams.get("filter");
  const isFilterValid = filters.some((b) => b.id === filter);

  const backTo = isFilterValid
    ? "/valoPark/santaCatarina/ubicacion"
    : "/valoPark/santaCatarina";

  return (
    <>
      <div className="relative w-dvw h-dvh flex">
        {/* Logo */}
        <div className="absolute top-0 left-0 z-50 default-logo-padding">
          <LogoValoParkSantaCatarina className="w-[clamp(58.33px,10.26vw,197px)] h-[clamp(17.76px,3.13vw,60px)]" />
        </div>

        {/* SUBMENU AND BACK BUTTON*/}
        <div className="absolute z-10 flex flex-col self-end items-start w-fit default-padding gap-[5vh]">
          {/* TEXT CONTENT */}
          {!isFilterValid && (
            <div className="w-[clamp(228.86px,40.26vw,773px)] h-[clamp(127.05px,22.34vw,429px)] p-[clamp(5.92px,1.04vw,20px)] gap-[clamp(4.44px,0.78vw,15px)] flex flex-col bg-white/85 backdrop-blur-xs border-b-10 border-santa-catarina">
              <h3 className="text-title text-center text-santa-catarina font-lumarc font-semibold uppercase tracking-widest">
                Ubicación
              </h3>
              <p className="grow text-center text-santa-catarina-grey text-ubicacion leading-[105%] lg:leading-[115%]">
                <strong>Valo Park </strong>tiene una{" "}
                <strong>ubicación privilegiada</strong> al estar a 400 metros de
                la carretera MTY-Saltillo, y muy cerca del Libramiento Noreste,
                y la Autopista a Nuevo Laredo, la capital aduanera de México. A
                tan solo <strong>15 minutos</strong> de San Pedro Garza Garcia,
                Valo Park se encuentra en una{" "}
                <strong>zona habitacional, comercial</strong>, e industrial.
                <br />
                Estos tres elementos son beneficiosos para el parque y los
                trabajadores al brindar servicios, transporte público, y acceso
                fácil.
              </p>
            </div>
          )}

          <BackButton
            to={backTo}
            className="bg-santa-catarina hover:bg-santa-catarina-grey text-white"
          />
        </div>

        {/* PUNTOS DE INTERES -> SUBMENU MAP FILTERS */}
        <PuntosInteresFilters activeFilter={filter} filters={filters} />

        {/* Brujula */}
        {filter !== FILTERS.MASTERPLAN && (
          <div className="absolute z-50 right-0 bottom-0 default-padding">
            <div className="bg-santa-catarina/60 p-[clamp(4.44px,0.78vw,15px)] rounded-full backdrop-blur-xs">
              <CompassIcon className="size-[clamp(20.71px,3.65vw,70px)]" />
            </div>
          </div>
        )}

        <Outlet />
      </div>
    </>
  );
}
