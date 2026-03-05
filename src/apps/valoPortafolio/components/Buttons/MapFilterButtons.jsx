import { IndustrialIcon } from "@/apps/valoPortafolio/assets/icons/proyectos/IndustrialIcon";
import { ResidencialHorizontalIcon } from "@/apps/valoPortafolio/assets/icons/proyectos/ResidencialHorizontalIcon";
import { ResidencialVerticalIcon } from "@/apps/valoPortafolio/assets/icons/proyectos/ResidencialVerticalIcon";
import { UsosMixtosIcon } from "@/apps/valoPortafolio/assets/icons/proyectos/UsosMixtosIcon";
import { AppContext } from "@/context/AppContext";
import { useContext } from "react";
import { FILTERS_ID } from "@/apps/valoPortafolio/const/FiltersId";
import { useEffect } from "react";

const BUTTONS = [
  {
    id: FILTERS_ID.INDUSTRIAL,
    label: "Industrial",
    abbreviation: "IN",
    icon: IndustrialIcon,
  },
  {
    id: FILTERS_ID.RESIDENCIAL_VERTICAL,
    label: "Residencial Vertical",
    abbreviation: "RV",
    icon: ResidencialVerticalIcon,
  },
  {
    id: FILTERS_ID.RESIDENCIAL_HORIZONTAL,
    label: "Residencial Horizontal",
    abbreviation: "RH",
    icon: ResidencialHorizontalIcon,
  },
  {
    id: FILTERS_ID.USOS_MIXTOS,
    label: "Usos Mixtos",
    abbreviation: "UM",
    icon: UsosMixtosIcon,
  },
];

export const MapFilterButtons = () => {
  const { selectMapFilter, mapFilter } = useContext(AppContext);

  // Resetear filter en cada renderizado
  useEffect(() => {
    selectMapFilter(null);
  }, []);

  return (
    <div className="fixed z-30 top-0 right-0 py-[clamp(5.92px,1.04vw,20px)] px-[clamp(4.44px,0.78vw,15px)]">
      <div className="flex flex-col items-end gap-[clamp(4.44px,0.78vw,15px)]">
        {BUTTONS.map((button) => {
          const Icon = button.icon;
          return (
            <button key={button.id} onClick={() => selectMapFilter(button.id)}>
              {mapFilter === button.id ? (
                // Active Button
                <span
                  key={button.id}
                  className="relative h-[clamp(42px,3.65vw,70px)] max-w-117.5 flex items-center filter-button-spacing bg-white hover:cursor-pointer"
                >
                  <span className="flex shrink">
                    <Icon
                      isActive
                      className="size-[clamp(11.83px,2.08vw,40px)]"
                    />
                  </span>
                  <span className="text-filter-button whitespace-nowrap text-valo font-lumarc tracking-wider uppercase">
                    {button.label}
                  </span>
                </span>
              ) : (
                <span className="group relative flex justify-center items-center w-[clamp(65px,6.46vw,124px)] h-[clamp(42px,3.65vw,70px)] filter-button-spacing bg-valo hover:cursor-pointer">
                  <Icon className="size-[clamp(16.83px,2.08vw,40px)]" />
                  <p className="text-filter-button text-white font-lumarc tracking-wider">
                    {button.abbreviation}
                  </p>

                  {/* Hover Button */}
                  <span className="absolute top-0 right-0 h-[clamp(42px,3.65vw,70px)] flex items-center filter-button-spacing bg-white overflow-hidden max-w-0 opacity-0 transition-[max-width,opacity] duration-400 ease-out group-hover:max-w-117.5 group-hover:opacity-100">
                    <span className="flex shrink">
                      <Icon
                        isActive
                        className="size-[clamp(11.83px,2.08vw,40px)]"
                      />
                    </span>
                    <span className="text-filter-button whitespace-nowrap text-valo font-lumarc tracking-wider uppercase">
                      {button.label}
                    </span>
                  </span>
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
