import pos1 from "@/apps/foro4/assets/images/masterplan/rotacion-exteriores/foro4-pos1.jpg";
import pos2 from "@/apps/foro4/assets/images/masterplan/rotacion-exteriores/foro4-pos2.jpg";
import pos3 from "@/apps/foro4/assets/images/masterplan/rotacion-exteriores/foro4-pos3.jpg";
import pos4 from "@/apps/foro4/assets/images/masterplan/rotacion-exteriores/foro4-pos4.jpg";
import CircleIcon from "../../assets/icons/ubicacion/CircleIcon";
import { useSearchParams } from "react-router";

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
  const [searchParams, setSearchParams] = useSearchParams();

  const position = Number(searchParams.get("position")) || 1;

  const handleChangePosition = (id) => {
    setSearchParams({
      position: id.toString(),
    });
  };

  return (
    <div className="flex flex-col w-full">
      {ROTACION_BUTTONS.map((button) => {
        const isActive = button.id === position;

        return (
          <button
            key={button.id}
            data-active={isActive}
            onClick={() => handleChangePosition(button.id)}
            className="group relative flex justify-end items-center w-full h-[clamp(23.63px,4.166667vw,80px)] px-[clamp(5.02px,0.885417vw,17px)] py-[clamp(2.95px,0.520833vw,10px)] bg-foro4-morado hover:cursor-pointer"
          >
            <img
              src={button.img}
              alt={`Posición ${button.id}`}
              className="absolute inset-0 object-fill"
            />

            {/* Overlay */}
            <div
              className={`
                absolute inset-0 bg-foro4-morado transition-opacity duration-300
                ${isActive ? "opacity-30" : "opacity-80"}
              `}
            />

            <span className="flex relative size-[clamp(16px,1.25vw,24px)]">
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
