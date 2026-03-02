import { useSearchParams } from "react-router";
import { useContext } from "react";
import { VideoPlayerContext } from "../../context/VideoPlayerContext";
import { CircleIndicatorIcon } from "../../assets/icons/CicleIndicatorIcon";
import { MODE } from "../../const/Videos";

const POSICIONES = [
  {
    id: "1",
    label: "Posición 1",
  },
  {
    id: "2",
    label: "Posición 2",
  },
  {
    id: "3",
    label: "Posición 3",
  },
  {
    id: "4",
    label: "Posición 4",
  },
  {
    id: "5",
    label: "Posición 5",
  },
];

export default function Masterplan() {
  const { mode } = useContext(VideoPlayerContext);

  const [searchParams, setSearchParams] = useSearchParams();
  const activePos = searchParams.get("position");

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
                className={`flex justify-between items-center px-[clamp(13.32px,2.34vw,45px)] py-[clamp(6.66px,1.17vw,22.5px)] gap-[clamp(30.21px,5.31vw,102px)] rounded-[clamp(14.8px,2.6vw,50px)] pointer-events-auto ${mode !== MODE.TRANSITIONING ? "hover:cursor-pointer hover:bg-santa-catarina-grey" : ""} ${activePos === posiciones.id ? "bg-santa-catarina-grey" : "bg-santa-catarina"}`}
              >
                <p className="text-paragraph-button font-semibold">
                  {posiciones.label}
                </p>

                <CircleIndicatorIcon
                  className="shrink-0 size-[clamp(7.11px,1.25vw,24px)]"
                  isActive={activePos === posiciones.id}
                />
              </button>
            ))}
          </div>

          {/* BOTÓN 360 */}
          <div className="absolute bottom-0 right-[clamp(10.36px,1.82vw,35px)] default-bottom-padding">
            <button
              onClick={() => setSearchParams({ position: "6" })}
              disabled={mode === MODE.TRANSITIONING}
              className={`relative flex justify-between items-center px-[clamp(13.32px,2.34vw,45px)] py-[clamp(6.66px,1.17vw,22.5px)] gap-[clamp(30.21px,5.31vw,102px)] rounded-[clamp(14.8px,2.6vw,50px)] pointer-events-auto hover:cursor-pointer ${mode !== MODE.TRANSITIONING ? "hover:cursor-pointer hover:bg-santa-catarina-grey" : ""} ${activePos === "6" ? "bg-santa-catarina-grey" : "bg-santa-catarina"}`}
            >
              <p className="absolute inset-0 flex items-center justify-center text-paragraph-button font-semibold">
                360
              </p>

              {/* Texto e icono invisible para mantener tamaño */}
              <p className="text-paragraph-button font-semibold invisible">
                Posición 2
              </p>
              <CircleIndicatorIcon
                className="shrink-0 size-[clamp(7.11px,1.25vw,24px)] invisible"
                isActive={activePos === "360"}
              />
            </button>
          </div>
        </>
      )}
    </div>
  );
}
