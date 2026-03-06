import { useRef, useState } from "react";
import { Link } from "react-router";
import AdvanceMarker from "@/components/shared/Map/AdvanceMarker";
import ClickIcon from "@/apps/valoPortafolio/assets/icons/proyectos/ClickIcon";

export default function ProjectMarker({ project, imageUrl, isVisible }) {
  const [isHovered, setIsHovered] = useState(false);
  const closeTimer = useRef(null);
  const { properties } = project;

  const handleMouseEnter = () => {
    clearTimeout(closeTimer.current);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setIsHovered(false), 250);
  };

  const isExternal = !properties.url.startsWith("/");

  return (
    <AdvanceMarker position={project.coordinates}>
      <div className="relative">
        <Link to={project.redirectTo}>
          <img
            src={imageUrl}
            width={project.size}
            height={project.size}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`w-[clamp(45px,5.5vw,105px)] h-[clamp(55px,6.7vw,128px)] hover:cursor-pointer transition-all hover:scale-110 hover:drop-shadow-2xl hover:brightness-110 origin-bottom ${
              isVisible
                ? "opacity-100 scale-100 pointer-events-auto animate-bounce-once"
                : "opacity-0 scale-0 pointer-events-none"
            }`}
          />
        </Link>

        {isHovered && (
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="absolute z-10 left-[110%] bottom-1/2 -translate-y-1/16 flex flex-col items-center justify-between w-[clamp(146.27px,25.73vw,494px)] h-auto p-[clamp(5.92px,1.04vw,20px)] pb-[clamp(2.96px,0.52vw,10px)] gap-[clamp(4.44px,0.78vw,15px)] bg-white/85 border-b-[clamp(2.96px,0.52vw,10px)] pointer-events-auto"
            style={{ borderBottomColor: properties.color }}
          >
            <p
              className="text-ubicacion text-center font-lumarc font-semibold uppercase"
              style={{ color: properties.color }}
            >
              {properties.title}
            </p>
            <p className="text-center text-ubicacion-paragraph text-santa-catarina-grey whitespace-pre-line">
              {properties.description}
            </p>
            <Link
              to={properties.url}
              target={isExternal ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="flex justify-center items-center w-fit px-[clamp(13.32px,2.34vw,45px)] py-[clamp(2.96px,0.52vw,10px)] gap-[clamp(2.96px,0.52vw,10px)] text-ubicacion-paragraph font-semibold"
              style={{ backgroundColor: properties.color }}
            >
              Página
              <span>
                <ClickIcon className="w-[clamp(7.11px,1.25vw,24.005px)] h-[clamp(8.01px,1.41vw,27.054px)]" />
              </span>
            </Link>
          </div>
        )}
      </div>
    </AdvanceMarker>
  );
}
