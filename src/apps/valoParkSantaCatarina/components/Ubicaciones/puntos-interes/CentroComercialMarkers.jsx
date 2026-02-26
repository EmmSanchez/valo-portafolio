import AdvanceMarker from "@/components/shared/Map/AdvanceMarker";
import bagLandmark from "@/apps/valoParkSantaCatarina/assets/icons/ubicacion/puntos_interes/bagLandmark.svg";
import { COORDENADAS } from "@/apps/valoParkSantaCatarina/data/Ubicaciones";

export default function CentroComercialMarkers() {
  return (
    <>
      {COORDENADAS.CENTRO_COMERCIAL.map((item) => {
        return (
          <AdvanceMarker key={item.id} position={item.coordinates}>
            <div className="relative flex">
              <img
                src={bagLandmark}
                alt="Bus Landmark"
                className="size-[clamp(11.83px,2.08vw,40px)]"
              />
              <div
                className={`absolute top-1/2 -translate-y-1/2 -z-10 w-fit py-[clamp(1.48px,0.26vw,5px)] whitespace-nowrap bg-santa-catarina font-semibold uppercase ${item.labelSide === "left" ? "right-1/2 pl-[clamp(2.96px,0.52vw,10px)] pr-[clamp(7.4px,1.3vw,25px)]" : "left-1/2 pr-[clamp(2.96px,0.52vw,10px)] pl-[clamp(7.4px,1.3vw,25px)]"}`}
              >
                <p className="text-puntos-interes pt-1 2xl:pt-1.5 font-eurostile">
                  {item.label}
                </p>
              </div>
            </div>
          </AdvanceMarker>
        );
      })}
    </>
  );
}
