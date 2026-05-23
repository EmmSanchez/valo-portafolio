import { useSearchParams } from "react-router";
import AdvanceMarker from "@/components/shared/Map/AdvanceMarker";
import ClickIcon from "@/apps/valoPortafolio/assets/icons/proyectos/ClickIcon";

export default function ProjectMarker({ project, imageUrl }) {
  const [_, setSearchParams] = useSearchParams();
  const { properties } = project;

  const isExternal = !properties.url.startsWith("/");

  const handleClickProject = () => {
    setSearchParams({ popup: project.landmarkId });
  };

  return (
    <AdvanceMarker position={project.coordinates}>
      <div className="relative" onClick={handleClickProject}>
        <img
          src={imageUrl}
          width={project.size}
          height={project.size}
          className={`w-[clamp(45px,5.5vw,105px)] h-[clamp(55px,6.7vw,128px)] hover:cursor-pointer transition-all hover:scale-110 hover:drop-shadow-2xl hover:brightness-110 origin-bottom opacity-100 scale-100 pointer-events-auto animate-bounce-once`}
        />
      </div>
    </AdvanceMarker>
  );
}
