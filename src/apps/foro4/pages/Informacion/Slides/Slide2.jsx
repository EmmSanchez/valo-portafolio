import OficinasIcon from "@/apps/foro4/assets/icons/informacion/oficina.svg";
import HotelIcon from "@/apps/foro4/assets/icons/informacion/hotel.svg";
import SalonIcon from "@/apps/foro4/assets/icons/informacion/evento.svg";
import RestauranteIcon from "@/apps/foro4/assets/icons/informacion/restaurante.svg";
import EstacionamientoIcon from "@/apps/foro4/assets/icons/informacion/estacionamiento.svg";
import ParqueIcon from "@/apps/foro4/assets/icons/informacion/parque.svg";

const ESPECIFICACIONES = [
  {
    id: "oficinas",
    icon: OficinasIcon,
    label: (
      <>
        <span className="font-bold">Torre de oficinas</span> 10 pisos
      </>
    ),
  },
  {
    id: "hotel",
    icon: HotelIcon,
    label: "Hotel Galería Plaza 5 estrellas",
  },
  {
    id: "salon",
    icon: SalonIcon,
    label: (
      <>
        <span className="font-bold">Salón de eventos</span> (2,000 m2)
      </>
    ),
  },
  {
    id: "comercio",
    icon: RestauranteIcon,
    label: "Zona comercial y Gastronómica",
  },
  {
    id: "estacionamiento",
    icon: EstacionamientoIcon,
    label: "Estacionamiento subterráneo con 5 niveles",
  },
  {
    id: "explanada",
    icon: ParqueIcon,
    label: "Explanada verde multiusos",
  },
];

export default function Slide2() {
  return (
    <div className="flex flex-col w-full h-full items-center justify-center gap-[clamp(8.86px,1.5625vw,30px)]">
      {/* Title */}
      <div className="text-center text-title-lg font-lumarc font-bold uppercase text-white leading-[120%]">
        Primer{" "}
        <span className="text-foro4-verde">Lifestyle Center en León</span>
        ,
        <br />
        ofrece diferentes servicios en un mismo lugar.
      </div>

      {/* Context */}
      <div className="grid grid-cols-3 place-content-center">
        {ESPECIFICACIONES.map((especificacion) => {
          return (
            <div
              key={especificacion.id}
              className="flex flex-col h-[22vh] justify-center items-center py-[clamp(11.52px,2.03125vw,39px)] px-[clamp(4.43px,0.78125vw,15px)] gap-[clamp(4.43px,0.78125vw,15px)] text-foro4-morado bg-white border-b-5 border-foro4-verde"
            >
              <img
                src={especificacion.icon}
                className="relative size-[clamp(25px,2.86vw,55px)]"
              />

              <p className="text-label text-center max-w-[75%]">
                {especificacion.label}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
