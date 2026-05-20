import { Link, useLocation } from "react-router";
import CircleIcon from "../../assets/icons/ubicacion/CircleIcon";

export default function SubmenuLateral({ buttons }) {
  const { pathname } = useLocation();

  return (
    <div className="absolute z-50 right-0 top-1/2 -translate-y-1/2 h-full pointer-events-none">
      <div className="pointer-events-auto flex flex-col items-center justify-between w-[clamp(30.21px,5.31vw,102px)] h-full px-[clamp(4.73px,0.83vw,16px)] py-[clamp(2.96px,0.52vw,10px)] gap-[clamp(3.85px,0.68vw,13px)] bg-white">
        {buttons.map((button) => {
          return (
            <Link
              key={button.id}
              to={button.to}
              data-active={pathname === button.to}
              className={`group flex-1 flex flex-col-reverse justify-around items-center w-full rounded-[clamp(11.83px,2.08vw,40px)] hover:cursor-pointer  ${pathname === button.to ? "bg-foro4-morado" : "hover:bg-foro4-morado"}`}
            >
              <p className="text-paragraph-subFilter-button vertical-left font-semibold text-foro4-morado group-hover:text-white">
                {button.label}
              </p>

              <span className="relative size-[clamp(8px,1.25vw,24px)]">
                <CircleIcon className="text-foro4-morado group-hover:text-white group-hover:fill-white" />
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
