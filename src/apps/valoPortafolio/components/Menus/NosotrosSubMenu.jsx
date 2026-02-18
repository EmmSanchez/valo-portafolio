import { CircleIndicatorIcon } from "@/apps/valoPortafolio/assets/icons/CircleIndicatorIcon";
import { Link } from "react-router";
import data from "../../data/Valo/menu.json";

export default function NosotrosSubMenu() {
  const { menu } = data;
  const nosotrosSubMenu = menu[0];

  return (
    <div className="w-[clamp(180px,16.2vw,311px)] py-2 px-3 2xl:px-5 xl:py-6.25 bg-valo">
      <p className="flex justify-center items-center w-full max-w-67.75 2xl:h-17 py-1 2xl:px-6.25 2xl:py-3.75 text-title-button uppercase">
        Menú
      </p>

      <span className="flex items-center justify-between w-full h-[clamp(40px,3.65vw,70px)] px-3.5 2xl:px-6.25 rounded-[40px] bg-white">
        <p className="text-paragraph-button rounded-[40px] font-bold text-valo">
          Nosotros
        </p>
        <CircleIndicatorIcon
          isActive
          className="size-[clamp(16px,1.25vw,24px)]"
        />
      </span>

      <nav className="flex flex-col">
        {nosotrosSubMenu.children.map((section) => {
          return (
            <Link
              key={section.id}
              to={section.to}
              className="group flex items-center justify-between w-full h-[clamp(32px,2.34vw,45px)] px-3.5 2xl:px-6.25 text-paragraph-sub-button font-semibold tracking-tighter rounded-[40px] hover:bg-white hover:text-valo hover:font-bold hover:cursor-pointer"
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
