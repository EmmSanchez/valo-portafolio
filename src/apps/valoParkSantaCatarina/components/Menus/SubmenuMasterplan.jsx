import { Link } from "react-router";
import { CircleIndicatorIcon } from "../../assets/icons/CicleIndicatorIcon";
import { useLocation } from "react-router";

export default function SubmenuMasterplan({ submenu }) {
  const { label, buttons } = submenu;
  const { pathname } = useLocation();

  const isActivePath = (basePath) => {
    return pathname === basePath || pathname.startsWith(basePath + "/");
  };

  return (
    <div className="w-[clamp(180px,16.2vw,311px)] py-2 px-3 2xl:px-5 xl:py-6.25 bg-santa-catarina">
      <p className="flex justify-center items-center w-full max-w-67.75 2xl:h-17 py-1 2xl:px-6.25 2xl:py-3.75 text-title-button uppercase">
        Menú
      </p>

      <div className="flex flex-col">
        <Link
          to={"/valoPark/santaCatarina/masterplan?position=1"}
          data-active={pathname === "/valoPark/santaCatarina/masterplan"}
          className="group rounded-[40px] hover:bg-santa-catarina-grey hover:cursor-pointer"
        >
          <span
            className={`flex items-center justify-between w-full h-[clamp(40px,3.65vw,70px)] px-3.5 2xl:px-6.25 rounded-[40px] ${pathname === "/valoPark/santaCatarina/masterplan" ? "bg-santa-catarina-grey" : ""}`}
          >
            <p
              className={`text-paragraph-button rounded-[40px] font-bold text-white ${pathname === "/valoPark/santaCatarina/masterplan" ? "font-bold" : "font-semibold"}`}
            >
              {label}
            </p>

            <span className="relative size-[clamp(16px,1.25vw,24px)]">
              {/* Inactive */}
              <span className="absolute inset-0 group-hover:hidden group-data-[active=true]:hidden">
                <CircleIndicatorIcon isActive={false} />
              </span>

              {/* Active / Hover */}
              <span className="absolute inset-0 hidden group-hover:block group-data-[active=true]:block">
                <CircleIndicatorIcon isActive />
              </span>
            </span>
          </span>
        </Link>
      </div>

      <nav className="flex flex-col">
        {buttons.map((button) => {
          return (
            <Link
              key={button.id}
              to={button.to}
              data-active={isActivePath(button.to)}
              // Si es active bold, si no semibold
              className={`group flex items-center justify-between w-full h-[clamp(32px,2.34vw,45px)] px-3.5 2xl:px-6.25 text-paragraph-sub-button  tracking-tighter rounded-[40px] hover:font-bold hover:cursor-pointer font-semibold ${isActivePath(button.to) ? "bg-santa-catarina-grey font-bold" : "hover:bg-santa-catarina-grey font-semibold"}`}
            >
              {button.label}

              <span className="relative size-[clamp(16px,1.25vw,24px)]">
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
      </nav>
    </div>
  );
}
