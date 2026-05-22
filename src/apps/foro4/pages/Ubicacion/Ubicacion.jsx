import { Link, useSearchParams } from "react-router";
import logo from "@/apps/foro4/assets/logos/main/logo-foro-4-white-green.svg";
import BackButton from "@/components/shared/Buttons/BackButton";
import { UBICACION_FILTERS } from "../../data/ubicacionFilters";
import CompassIcon from "@/apps/valoParkSantaCatarina/assets/icons/CompassIcon";
import CircleIcon from "../../assets/icons/ubicacion/CircleIcon";
import GoogleMapForo4 from "../../components/ubicacion/GoogleMapForo4";
import { useEffect } from "react";

export default function Ubicacion() {
  const [searchParams, setSearchParams] = useSearchParams();
  const handleSubFilter = (subId) => {
    setSearchParams({
      filter: subId,
    });
  };

  const activeFiler = searchParams.get("filter");
  const isValidFilter = UBICACION_FILTERS.some((f) => f.id === activeFiler);

  useEffect(() => {
    if (activeFiler && !isValidFilter) {
      setSearchParams({});
    }
  }, [activeFiler]);

  return (
    <div className="w-full h-svh default-foro4-padding bg-foro4-morado/70">
      <div className="absolute top-0 left-0 z-50 default-logo-padding">
        <Link to={"/foro4/inicio"}>
          <img
            src={logo}
            alt="Lofo de FORO 4"
            className="w-[clamp(59.13px,10.416667vw,200px)] h-[clamp(6.51px,1.145833vw,22px)] "
          />
        </Link>
      </div>

      {/* Map */}
      <div className="absolute z-0 inset-0 w-full h-full">
        <GoogleMapForo4 />
      </div>

      {/* Buttons and Submenu */}
      <div className="relative z-10 flex w-full h-full items-end justify-between pointer-events-none">
        {/* Texto y botón de regresar */}
        <div className="flex flex-col">
          {!activeFiler && (
            <div className="flex flex-col w-[42%] bg-foro4-morado border-b-4 border-foro4-verde px-[clamp(5.91px,1.041667vw,20px)] py-[clamp(8.86px,1.5625vw,30px)] gap-[clamp(4.43px,0.78125vw,15px)] pointer-events-auto">
              <h3 className="text-center text-title-lg font-lumarc font-bold uppercase">
                Ubicación
              </h3>
              <p className="text-paragraph text-center leading-[110%] max-w-[66ch]">
                Su ubicación privilegiada en la zona Norte de León sobre Blvd.
                Manuel J. Clouthier es una de las principales avenidas
                comerciales donde transitan más de{" "}
                <span className="font-semibold">30,000 vehículos diarios.</span>
              </p>
            </div>
          )}
          <BackButton
            to={activeFiler ? "/foro4/ubicacion" : "/foro4/inicio"}
            className="bg-white text-foro4-morado translate-y-0.5 pointer-events-auto"
          />
        </div>

        {/* Submenu para filtrar y brujula */}
        <div className="relative flex flex-col w-full max-w-[351px] h-full">
          {/* Submenu */}
          <div className="absolute flex justify-end right-0 top-1/2 -translate-y-1/2 w-full pointer-events-none">
            <div className="flex flex-col w-[clamp(103.78px,18.28125vw,351px)] h-[clamp(118.75px,20.89vw,401px)] p-[clamp(7.4px,1.3vw,25px)] bg-white pointer-events-auto">
              {UBICACION_FILTERS.map((button) => {
                const IconComponent = button.icon;
                return (
                  <button
                    key={button.id}
                    onClick={() => handleSubFilter(button.id)}
                    className={`group flex-1 flex justify-between items-center px-[clamp(5.92px,1.04vw,20px)] font-semibold rounded-[clamp(11.83px,2.08vw,40px)] hover:cursor-pointer ${activeFiler === button.id ? "bg-foro4-morado text-white" : "hover:bg-foro4-morado text-foro4-morado"}`}
                  >
                    <span className="text-paragraph-subFilter-button group-hover:text-white">
                      {button.label}
                    </span>

                    <span className="size-[clamp(7.99px,1.41vw,27px)]">
                      <IconComponent className="w-full h-full group-hover:text-white" />
                    </span>
                  </button>
                );
              })}

              {/* Botón de Masterplan */}
              <Link
                to={"/foro4/masterplan"}
                className={`group flex-1 flex justify-between items-center px-[clamp(5.92px,1.04vw,20px)] font-semibold rounded-[clamp(11.83px,2.08vw,40px)] hover:cursor-pointer hover:bg-foro4-morado`}
              >
                <span className="text-paragraph-subFilter-button text-foro4-morado group-hover:text-white">
                  Masterplan
                </span>

                <span className="size-[clamp(7.99px,1.41vw,27px)]">
                  <CircleIcon className="text-foro4-morado group-hover:text-white" />
                </span>
              </Link>
            </div>
          </div>

          {/* Brujula */}
          <div className="absolute right-0 bottom-0">
            <div className="bg-foro4-morado p-[clamp(4.44px,0.78vw,15px)] rounded-full backdrop-blur-xs">
              <CompassIcon className="size-[clamp(20.71px,3.65vw,70px)]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
