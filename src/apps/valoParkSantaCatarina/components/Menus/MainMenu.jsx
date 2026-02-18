import { Link } from "react-router";
import data from "../../data/menu.json";
import { CircleIndicatorIcon } from "../../assets/icons/CicleIndicatorIcon";

export default function MainMenuVPSC() {
  const { menu } = data;

  return (
    <div className="w-[clamp(180px,16.2vw,311px)] px-1 py-2 2xl:px-5 2xl:py-6.25 bg-santa-catarina">
      <p className="flex justify-center items-center w-full max-w-67.75 2xl:h-17 py-1 2xl:px-6.25 2xl:py-3.75 text-title-button uppercase">
        Menú
      </p>

      <nav className="flex flex-col">
        {menu.map((section) => {
          return (
            <Link
              key={section.id}
              to={section.to}
              className="group flex items-center justify-between w-full h-[clamp(32px,3.65vw,70px)] px-6.25 text-paragraph-button font-semibold rounded-[40px] hover:bg-santa-catarina-grey hover:font-bold hover:cursor-pointer"
            >
              {section.label}

              <span className="relative size-[clamp(16px,1.25vw,24px)]">
                {/* Inactive */}
                <span className="absolute inset-0 group-hover:hidden">
                  <CircleIndicatorIcon isActive={false} />
                </span>

                {/* Active / Hover */}
                <span className="absolute inset-0 hidden group-hover:block">
                  <CircleIndicatorIcon isActive />
                </span>
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
