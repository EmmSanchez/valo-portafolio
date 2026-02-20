import { useSearchParams } from "react-router";
import BackButton from "@/components/shared/Buttons/BackButton";
import SubmenuUbicacion from "../../components/Menus/Submenu";
import LogoValoParkSantaCatarina from "../../assets/logos/logo-valoParkSC";
import CompassIcon from "../../assets/icons/CompassIcon";
import BusIcon from "../../assets/icons/ubicacion/BusIcon";
import BagIcon from "../../assets/icons/ubicacion/BagIcon";
import BikeIcon from "../../assets/icons/ubicacion/BikeIcon";
import CartIcon from "../../assets/icons/ubicacion/CartIcon";
import HospitalIcon from "../../assets/icons/ubicacion/HospitalIcon";

const SUBMENU = {
  id: "ubicación-vpsc",
  label: "Ubicación",
  buttons: [
    {
      id: "puntos-de-interes-vpsc",
      label: "Puntos de interés",
      filter: "puntos-de-interes",
      subfilters: [
        { id: "transporte", label: "Transporte público", icon: BusIcon },
        { id: "centro-comercial", label: "Centro Comercial", icon: BagIcon },
        {
          id: "centros-recreativos",
          label: "Centros Recreativos",
          icon: BikeIcon,
        },
        { id: "supermercados", label: "Supermercados", icon: CartIcon },
        { id: "centro-salud", label: "Centro de Salud", icon: HospitalIcon },
      ],
    },
    {
      id: "vialidades-vpsc",
      label: "Vialidades",
      filter: "vialidades",
    },
    {
      id: "masterplan-vpsc",
      label: "Masterplan",
      filter: "masterplan",
    },
  ],
};

export default function Ubicacion() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { buttons } = SUBMENU;

  const filter = searchParams.get("filter");
  const isFilterValid = buttons.some((b) => b.filter === filter);
  const backTo = isFilterValid
    ? "/valoPark/santaCatarina/ubicacion"
    : "/valoPark/santaCatarina";

  const { subfilters } = buttons.find((b) => b.filter === filter) ?? {};

  const handleSubFilter = (subId) => {
    setSearchParams({
      filter: searchParams.get("filter"),
      subFilter: subId,
    });
  };

  const subFilter = searchParams.get("subFilter");

  return (
    <div className="relative w-dvw h-dvh flex bg-cyan-800">
      {/* Logo */}
      <div className="absolute top-0 left-0 z-50 default-logo-padding">
        <LogoValoParkSantaCatarina className="w-[clamp(58.33px,10.26vw,197px)] h-[clamp(17.76px,3.13vw,60px)]" />
      </div>

      {/* SUBMENU AND BACK BUTTON*/}
      <div className="flex flex-col self-end items-start w-fit default-padding">
        <SubmenuUbicacion submenu={SUBMENU} />

        <BackButton
          to={backTo}
          className="bg-santa-catarina hover:bg-santa-catarina-grey text-white"
        />
      </div>

      {/* TEXT CONTENT */}
      {!isFilterValid && (
        <div className="absolute top-[clamp(14.8px,2.6vw,50px)] right-[clamp(12.14px,2.14vw,41px)] w-[clamp(228.86px,40.26vw,773px)] h-[clamp(127.05px,22.34vw,429px)] p-[clamp(5.92px,1.04vw,20px)] gap-[clamp(4.44px,0.78vw,15px)] flex flex-col bg-white/85 backdrop-blur-xs border-b-10 border-santa-catarina">
          <h3 className="text-title text-center text-santa-catarina font-lumarc font-semibold uppercase tracking-widest">
            Ubicación
          </h3>
          <p className="grow text-center text-santa-catarina-grey text-ubicacion leading-[105%] lg:leading-[115%]">
            <strong>Valo Park </strong>tiene una{" "}
            <strong>ubicación privilegiada</strong> al estar a 400 metros de la
            carretera MTY-Saltillo, y muy cerca del Libramiento Noreste, y la
            Autopista a Nuevo Laredo, la capital aduanera de México. A tan solo{" "}
            <strong>15 minutos</strong> de San Pedro Garza Garcia, Valo Park se
            encuentra en una <strong>zona habitacional, comercial</strong>, e
            industrial.
            <br />
            Estos tres elementos son beneficiosos para el parque y los
            trabajadores al brindar servicios, transporte público, y acceso
            fácil.
          </p>
        </div>
      )}

      {/* SUBMENU MAP FILTERS */}
      {isFilterValid && subfilters && (
        <div className="absolute right-[clamp(10.36px,1.82vw,35px)] top-1/2 -translate-y-1/2 pointer-events-none">
          <div className="flex flex-col w-[clamp(103.95px,18.28vw,351px)] h-[clamp(118.75px,20.89vw,401px)] p-[clamp(7.4px,1.3vw,25px)] bg-santa-catarina pointer-events-auto">
            {subfilters.map((button) => {
              const IconComponent = button.icon;
              return (
                <button
                  key={button.id}
                  onClick={() => handleSubFilter(button.id)}
                  className={`flex-1 flex justify-between items-center px-[clamp(5.92px,1.04vw,20px)] text-white font-semibold rounded-[clamp(11.83px,2.08vw,40px)] hover:cursor-pointer ${subFilter === button.id ? "bg-santa-catarina-grey" : "hover:bg-santa-catarina-grey"}`}
                >
                  <span className="text-paragraph-button">{button.label}</span>

                  <span className="size-[clamp(7.99px,1.41vw,27px)]">
                    <IconComponent className="w-full h-full" />
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Brujula */}
      <div className="absolute right-0 bottom-0 default-padding">
        <div className="bg-santa-catarina/60 p-[clamp(4.44px,0.78vw,15px)] rounded-full backdrop-blur-xs">
          <CompassIcon className="size-[clamp(20.71px,3.65vw,70px)]" />
        </div>
      </div>
    </div>
  );
}
