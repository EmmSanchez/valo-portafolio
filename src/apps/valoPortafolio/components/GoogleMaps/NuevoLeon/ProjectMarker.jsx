import { useNavigate, useSearchParams } from "react-router";
import AdvanceMarker from "@/components/shared/Map/AdvanceMarker";

export default function ProjectMarker({ project, imageUrl, type = "popup" }) {
  const [_, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const handleClick = () => {
    if (type === "popup") {
      setSearchParams({ popup: project.landmarkId });
    } else if (type === "link") {
      navigate(project.redirectTo);
    }
  };

  return (
    <AdvanceMarker position={project.coordinates}>
      <div className="relative" onClick={handleClick}>
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
