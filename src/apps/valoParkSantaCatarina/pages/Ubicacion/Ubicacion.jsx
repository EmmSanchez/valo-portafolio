import { useSearchParams } from "react-router";
import GoogleMaps from "@/components/shared/Map/GoogleMaps";
import { FILTERS } from "../../const/Filters";
import { MENU_UBICACION as buttons } from "../../data/menu-ubicacion";
import ExplorarProyectoButton from "../../components/Buttons/ExplorarProyectoButton";

export default function Ubicacion() {
  const [searchParams, _] = useSearchParams();

  const filter = searchParams.get("filter");
  const isFilterValid = buttons.some((b) => b.id === filter);

  return (
    <div className="relative w-dvw h-dvh flex">
      {/* MAP FROM GOOGLE */}
      <div className="absolute inset-0">
        <GoogleMaps filter={filter} isFilterValid={isFilterValid} />
      </div>

      {filter === FILTERS.MASTERPLAN && (
        <>
          <ExplorarProyectoButton />
        </>
      )}
    </div>
  );
}
