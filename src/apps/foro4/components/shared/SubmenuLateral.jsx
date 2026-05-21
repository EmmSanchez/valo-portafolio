import { Link, useMatch, useResolvedPath } from "react-router";
import CircleIcon from "../../assets/icons/ubicacion/CircleIcon";

function SubmenuButton({ button }) {
  const resolved = useResolvedPath(button.to);
  const isActive = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link
      to={button.to}
      className={`group flex-1 flex flex-col-reverse justify-around items-center w-full rounded-[clamp(11.83px,2.08vw,40px)] hover:cursor-pointer hover:bg-foro4-morado ${
        isActive ? "bg-foro4-morado" : ""
      }`}
    >
      <p
        className={`text-paragraph-subFilter-button vertical-left font-semibold group-hover:text-white ${isActive ? "text-white" : "text-foro4-morado"}`}
      >
        {button.label}
      </p>

      <span className="relative size-[clamp(8px,1.25vw,24px)]">
        <CircleIcon
          className={`group-hover:text-white group-hover:fill-white ${isActive ? "text-white fill-white" : "text-foro4-morado"}`}
        />
      </span>
    </Link>
  );
}

export default function SubmenuLateral({ buttons }) {
  return (
    <div className="relative z-50 right-0 h-full pointer-events-none">
      <div className="pointer-events-auto flex flex-col items-center justify-between w-[clamp(30.21px,5.31vw,102px)] h-full px-[clamp(4.73px,0.83vw,16px)] py-[clamp(2.96px,0.52vw,10px)] gap-[clamp(3.85px,0.68vw,13px)] bg-white">
        {buttons.map((button) => (
          <SubmenuButton key={button.id} button={button} />
        ))}
      </div>
    </div>
  );
}
