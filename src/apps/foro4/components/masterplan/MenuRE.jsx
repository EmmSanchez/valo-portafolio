import { useSearchParams } from "react-router";
import { useContext } from "react";
import pos1 from "@/apps/foro4/assets/images/masterplan/rotacion-exteriores/foro4-pos1.webp";
import pos2 from "@/apps/foro4/assets/images/masterplan/rotacion-exteriores/foro4-pos2.webp";
import pos3 from "@/apps/foro4/assets/images/masterplan/rotacion-exteriores/foro4-pos3.webp";
import pos4 from "@/apps/foro4/assets/images/masterplan/rotacion-exteriores/foro4-pos4.webp";
import CircleIcon from "../../assets/icons/ubicacion/CircleIcon";
import { VideoPlayerContext } from "../../video/context/VideoPlayerContext";
import { MODE } from "../../video/const/Videos";

const ROTACION_BUTTONS = [
  {
    id: 1,
    img: pos1,
  },
  {
    id: 2,
    img: pos2,
  },
  {
    id: 3,
    img: pos3,
  },
  {
    id: 4,
    img: pos4,
  },
];

export default function MenuRE() {
  const { mode } = useContext(VideoPlayerContext);

  const [searchParams, setSearchParams] = useSearchParams();

  const position = Number(searchParams.get("position")) || 1;

  const handleChangePosition = (id) => {
    setSearchParams({
      position: id.toString(),
    });
  };

  return (
    <div className="flex flex-col items-end w-full gap-[clamp(4.43px,0.78125vw,15px)]">
      {ROTACION_BUTTONS.map((button) => {
        const isActive = button.id === position;

        return (
          <button
            key={button.id}
            data-active={isActive}
            disabled={mode === MODE.TRANSITIONING}
            onClick={() => handleChangePosition(button.id)}
            className={`group relative flex justify-end items-center w-[clamp(62px,19.231vw,140px)] lg:w-full max-w-[215px] h-[clamp(23.63px,4.166667vw,80px)] px-[clamp(5.02px,0.885417vw,17px)] py-[clamp(2.95px,0.520833vw,10px)] rounded-[clamp(14.8px,2.6vw,50px)] shadow-lg border border-white bg-foro4-morado overflow-hidden ${mode !== MODE.TRANSITIONING ? "hover:cursor-pointer" : "pointer-events-none"}`}
          >
            <img
              src={button.img}
              alt={`Posición ${button.id}`}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay */}
            <div
              className={`
                absolute inset-0 bg-foro4-morado transition-opacity duration-300
                ${isActive ? "opacity-30" : "opacity-80"}
              `}
            />

            <span className="flex relative size-[clamp(5.7px,1.786vw,13px)] lg:size-[clamp(16px,1.25vw,24px)]">
              <CircleIcon
                className="text-white group-hover:fill-white group-data-[active=true]:fill-white
"
              />
            </span>
          </button>
        );
      })}
    </div>
  );
}
