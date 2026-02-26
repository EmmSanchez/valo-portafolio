import { useSearchParams } from "react-router";
import GoogleMaps from "@/components/shared/Map/GoogleMaps";
import { SUBMENU_UBICACION } from "../../data/SubmenuUbicacion";
import PuntosInteresFilters from "../../components/Menus/PuntosInteresFilters";
import { FILTERS } from "../../const/Filters";
import ExplorarProyectoButton from "../../components/Buttons/ExplorarProyectoButton";

export default function Ubicacion() {
  const [searchParams, _] = useSearchParams();
  const { buttons } = SUBMENU_UBICACION;

  const filter = searchParams.get("filter");
  const isFilterValid = buttons.some((b) => b.filter === filter);

  const { subfilters } = buttons.find((b) => b.filter === filter) ?? {};
  const activeSubFilter = searchParams.get("subFilter");

  return (
    <div className="relative w-dvw h-dvh flex">
      {/* MAP FROM GOOGLE */}
      <div className="absolute inset-0">
        <GoogleMaps
          filter={filter}
          subFilter={activeSubFilter}
          isFilterValid={isFilterValid}
        />
      </div>

      {/* TEXT CONTENT */}
      {!isFilterValid && (
        <div className="absolute top-[clamp(14.8px,2.6vw,50px)] right-[clamp(12.14px,2.14vw,41px)] w-[clamp(228.86px,40.26vw,773px)] h-[clamp(127.05px,22.34vw,429px)] p-[clamp(5.92px,1.04vw,20px)] gap-[clamp(4.44px,0.78vw,15px)] flex flex-col bg-white/85 backdrop-blur-xs border-b-10 border-santa-catarina">
          <h3 className="text-title text-center text-santa-catarina font-lumarc font-semibold uppercase tracking-widest">
            Ubicación
          </h3>
          <p className="grow text-center text-santa-catarina-grey text-ubicacion leading-[105%] lg:leading-[115%]">
            <strong>Valo Park </strong>tiene una{" "}
            <strong>ubicación privilegiada</strong> al estar a 400 metros de la
            carretera MTY-Saltillo, y muy cerca del Libramiento Noreste, y la
            Autopista a Nuevo Laredo, la capital aduanera de México. A tan solo{" "}
            <strong>15 minutos</strong> de San Pedro Garza Garcia, Valo Park se
            encuentra en una <strong>zona habitacional, comercial</strong>, e
            industrial.
            <br />
            Estos tres elementos son beneficiosos para el parque y los
            trabajadores al brindar servicios, transporte público, y acceso
            fácil.
          </p>
        </div>
      )}

      {/* PUNTOS DE INTERES -> SUBMENU MAP FILTERS */}
      {isFilterValid && subfilters && (
        <PuntosInteresFilters
          activeSubFilter={activeSubFilter}
          subfilters={subfilters}
        />
      )}

      {filter === FILTERS.MASTERPLAN && (
        <>
          <ExplorarProyectoButton />
        </>
      )}
    </div>
  );
}
