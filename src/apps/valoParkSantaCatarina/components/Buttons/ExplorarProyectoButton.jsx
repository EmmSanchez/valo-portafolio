import ClickIcon from "../../assets/icons/ubicacion/ClickIcon";
import { Link } from "react-router";

export default function ExplorarProyectoButton() {
  return (
    <div className="absolute w-dvw h-dvh flex items-center justify-center">
      <Link
        to={"/valoPark/santaCatarina/masterplan"}
        className="relative z-10 flex items-center justify-between px-[clamp(13.32px,2.34vw,45px)] py-[clamp(6.81px,1.2vw,23px)] gap-[clamp(7.4px,1.3vw,25px)] bg-santa-catarina hover:cursor-pointer"
      >
        <p className="text-paragraph-button font-semibold whitespace-nowrap">
          Explorar Proyecto
        </p>
        <ClickIcon className="shrink-0 w-[clamp(7.11px,1.25vw,24.005px)] h-[clamp(8.01px,1.41vw,27.054px)]" />
      </Link>

      {/* Blur superior */}
      <div
        className="absolute top-0 left-0 right-0 h-1/2 backdrop-blur-xl"
        style={{
          maskImage: "linear-gradient(to bottom, black 0%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, transparent 100%)",
        }}
      />

      {/* Blur inferior */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1/2 backdrop-blur-xl"
        style={{
          maskImage: "linear-gradient(to top, black 0%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to top, black 0%, transparent 100%)",
        }}
      />
    </div>
  );
}
