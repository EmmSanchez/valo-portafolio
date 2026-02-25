import { useSearchParams } from "react-router";

export default function PuntosInteresFilters({ activeSubFilter, subfilters }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const handleSubFilter = (subId) => {
    setSearchParams({
      filter: searchParams.get("filter"),
      subFilter: subId,
    });
  };
  return (
    <div className="absolute right-[clamp(10.36px,1.82vw,35px)] top-1/2 -translate-y-1/2 pointer-events-none">
      <div className="flex flex-col w-[clamp(103.95px,18.28vw,351px)] h-[clamp(118.75px,20.89vw,401px)] p-[clamp(7.4px,1.3vw,25px)] bg-santa-catarina pointer-events-auto">
        {subfilters.map((button) => {
          const IconComponent = button.icon;
          return (
            <button
              key={button.id}
              onClick={() => handleSubFilter(button.id)}
              className={`flex-1 flex justify-between items-center px-[clamp(5.92px,1.04vw,20px)] text-white font-semibold rounded-[clamp(11.83px,2.08vw,40px)] hover:cursor-pointer ${activeSubFilter === button.id ? "bg-santa-catarina-grey" : "hover:bg-santa-catarina-grey"}`}
            >
              <span className="text-paragraph-subFilter-button">
                {button.label}
              </span>

              <span className="size-[clamp(7.99px,1.41vw,27px)]">
                <IconComponent className="w-full h-full" />
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
