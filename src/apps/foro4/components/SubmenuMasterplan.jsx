import { Link, useLocation } from "react-router";
import { SUBMENU_MASTERPLAN_FORO4 } from "../data/submenuMasterplan";
import CircleIcon from "../assets/icons/ubicacion/CircleIcon";

export default function SubmenuMasterplan() {
  const { label, buttons } = SUBMENU_MASTERPLAN_FORO4;

  const { pathname } = useLocation();

  const isActivePath = (basePath) => {
    return pathname === basePath || pathname.startsWith(basePath + "/");
  };

  return (
    <div className="w-[clamp(180px,16.2vw,311px)] py-2 px-3 2xl:px-5 xl:py-6.25 bg-white">
      <p className="flex justify-center items-center w-full max-w-67.75 2xl:h-17 py-1 2xl:px-6.25 2xl:py-3.75 text-title-button text-foro4-morado uppercase">
        Sub Menú
      </p>

      <div className="flex flex-col">
        <Link
          to={"/foro4/masterplan?position=4"}
          data-active={pathname === "/foro4/masterplan"}
          className="group rounded-[40px] hover:bg-foro4-morado hover:cursor-pointer"
        >
          <span
            className={`flex items-center justify-between w-full h-[clamp(40px,3.65vw,70px)] px-3.5 2xl:px-6.25 rounded-[40px] ${pathname === "/foro4/masterplan" ? "bg-foro4-morado" : ""}`}
          >
            <p
              className={`text-paragraph-button rounded-[40px] font-bold ${pathname === "/foro4/masterplan" ? "font-bold text-white" : "font-semibold text-foro4-morado group-hover:text-white"}`}
            >
              {label}
            </p>

            <span className="relative size-[clamp(16px,1.25vw,24px)]">
              <CircleIcon className="text-foro4-morado fill-foro4-morado group-hover:text-white group-data-[active=true]:text-white group-data-[active=true]:fill-white" />
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
              className={`group flex items-center justify-between w-full h-[clamp(32px,2.34vw,45px)] px-3.5 2xl:px-6.25 text-paragraph-sub-button  tracking-tighter rounded-[40px] hover:font-bold hover:cursor-pointer font-semibold ${isActivePath(button.to) ? "bg-foro4-morado font-bold" : "hover:bg-foro4-morado hover:text-white text-foro4-morado font-semibold"}`}
            >
              {button.label}

              <span className="relative size-[clamp(16px,1.25vw,24px)]">
                <CircleIcon className="text-foro4-morado group-hover:text-white group-data-[active=true]:text-white group-data-[active=true]:fill-white" />
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
