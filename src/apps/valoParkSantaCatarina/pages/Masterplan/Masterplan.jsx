import { Link, Navigate, useSearchParams } from "react-router";
import { useContext } from "react";
import { VideoPlayerContext } from "../../context/VideoPlayerContext";
import { CircleIndicatorIcon } from "../../assets/icons/CicleIndicatorIcon";
import { MODE } from "../../const/Videos";

// images
import sc_pos1 from "../../assets/images/masterplan/submenu/sc_pos1.jpg";
import sc_pos2 from "../../assets/images/masterplan/submenu/sc_pos2.jpg";
import sc_pos3 from "../../assets/images/masterplan/submenu/sc_pos3.jpg";
import sc_pos4 from "../../assets/images/masterplan/submenu/sc_pos4.jpg";
import sc_pos5 from "../../assets/images/masterplan/submenu/sc_pos5.jpg";
import sc360 from "../../assets/images/masterplan/submenu/sc_361.jpg";
import MasterplanPin from "../../components/Masterplan/MasterplanPin";

const POSICIONES = [
  {
    id: "1",
    label: "Posición 1",
    img: sc_pos1,
  },
  {
    id: "2",
    label: "Posición 2",
    img: sc_pos2,
  },
  {
    id: "3",
    label: "Posición 3",
    img: sc_pos3,
  },
  {
    id: "4",
    label: "Posición 4",
    img: sc_pos4,
  },
  {
    id: "5",
    label: "Posición 5",
    img: sc_pos5,
  },
];

export default function Masterplan() {
  const { mode } = useContext(VideoPlayerContext);

  const [searchParams, setSearchParams] = useSearchParams();
  const activePos = searchParams.get("position");
  const validIds = [...POSICIONES.map((p) => p.id), "6"];

  if (!activePos || !validIds.includes(activePos)) {
    return <Navigate to="?position=1" replace />;
  }

  return (
    <div className="w-dvw h-dvh flex default-padding pointer-events-none">
      {activePos && (
        <>
          {/* Posiciones */}
          <div className="absolute h-full right-[clamp(10.36px,1.82vw,35px)] top-1/2 -translate-y-1/2 flex flex-col justify-center gap-[clamp(2.96px,0.52vw,10px)] pointer-events-none">
            {POSICIONES.map((posiciones) => (
              <button
                key={posiciones.id}
                onClick={() => setSearchParams({ position: posiciones.id })}
                disabled={mode === MODE.TRANSITIONING}
                className={`group relative overflow-hidden flex justify-end items-center w-[clamp(63.54px,11.197917vw,215px)] px-[clamp(5.02px,0.885417vw,17px)] py-[clamp(6.66px,1.17vw,22.5px)] gap-[clamp(30.21px,5.31vw,102px)] rounded-[clamp(14.8px,2.6vw,50px)] shadow-lg pointer-events-auto border border-white ${mode !== MODE.TRANSITIONING ? "hover:cursor-pointer " : ""}`}
              >
                <img
                  src={posiciones.img}
                  alt={`Imagen de la posición ${posiciones.id}`}
                  className="absolute w-full h-full inset-0 object-cover z-0"
                />

                <div
                  className={`absolute inset-0 w-full h-full z-5 opacity-80 transition-opacity ease-in duration-150 ${activePos === posiciones.id ? "" : "bg-santa-catarina group-hover:opacity-0"}`}
                />

                <CircleIndicatorIcon
                  className="relative z-10 size-[clamp(7.11px,1.25vw,24px)]"
                  isActive={activePos === posiciones.id}
                />
              </button>
            ))}
          </div>

          {/* BOTÓN 360 */}
          <div className="absolute bottom-0 right-[clamp(10.36px,1.82vw,35px)] default-bottom-padding">
            <Link
              to={"/valoPark/santaCatarina/masterplan/proyecto"}
              disabled={mode === MODE.TRANSITIONING}
              className={`group relative overflow-hidden flex justify-end items-center w-[clamp(63.54px,11.197917vw,215px)] px-[clamp(5.02px,0.885417vw,17px)] py-[clamp(6.66px,1.17vw,22.5px)] gap-[clamp(30.21px,5.31vw,102px)] rounded-[clamp(14.8px,2.6vw,50px)] pointer-events-auto hover:cursor-pointer shadow-lg border border-white ${mode !== MODE.TRANSITIONING ? "hover:cursor-pointer hover:bg-santa-catarina-grey" : ""} ${activePos === "6" ? "bg-santa-catarina-grey" : "bg-santa-catarina"}`}
            >
              <img
                src={sc360}
                alt={`Imagen de la posición 360`}
                className="absolute w-full h-full inset-0 object-cover z-0"
              />

              <div
                className={`absolute inset-0 w-full h-full z-5 opacity-80 transition-opacity ease-in duration-150 ${activePos === "6" ? "" : "bg-santa-catarina group-hover:opacity-0"}`}
              />

              <CircleIndicatorIcon
                className={`relative z-10 size-[clamp(7.11px,1.25vw,24px)]`}
                isActive={activePos === "6"}
              />
            </Link>
          </div>

          {/* Titulo y pin */}
          <div className="absolute w-full h-full inset-0 z-10 pointer-events-none">
            <p className="absolute left-1/2 -translate-x-[50%] top-[19vh] w-[clamp(286.85px,50.572917vw,971px)] py-[0.2vh] bg-white text-title-lg text-center text-santa-catarina font-lumarc font-bold uppercase border-b-[0.7vh] border-santa-catarina pointer-events-auto">
              Navegación Orbital
            </p>

            {/* Pin */}
            <MasterplanPin />
          </div>
        </>
      )}
    </div>
  );
}
