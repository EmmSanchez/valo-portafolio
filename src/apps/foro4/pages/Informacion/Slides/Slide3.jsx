import OficinasIcon from "@/apps/foro4/assets/icons/informacion/oficina.svg";
import HotelIcon from "@/apps/foro4/assets/icons/informacion/hotel.svg";
import SalonIcon from "@/apps/foro4/assets/icons/informacion/evento.svg";
import RestauranteIcon from "@/apps/foro4/assets/icons/informacion/restaurante.svg";

const ESPECIFICACIONES = [
  {
    id: "hotel",
    icon: SalonIcon,
    label: "Hotel y Salones de Eventos",
  },
  {
    id: "gastronomia",
    icon: RestauranteIcon,
    label: "Gastronomía",
  },
  {
    id: "coworking",
    icon: OficinasIcon,
    label: "Oficinas y Coworking",
  },
  {
    id: "comercio",
    icon: HotelIcon,
    label: "Comercio y Entretenimiento",
  },
];

export default function Slide3() {
  return (
    <div className="flex flex-col w-full h-full items-center justify-center gap-[clamp(8.86px,1.5625vw,30px)]">
      {/* Title */}
      <div className="text-center text-title-lg font-lumarc font-bold uppercase text-white leading-[120%]">
        Nuestros <span className="text-foro4-verde">4 Pilares</span>
      </div>

      <p className="text-center text-paragraph text-white leading-[120%]">
        <strong>FORO 4</strong> se desplanta sobre una huella de 10,480 m2 de
        terreno, con 84,000 m2 de construcción.
        <br />
        Cuenta <strong>con 4 pilares importantes</strong> que se integran para
        satisfacer las necesidades del mercado de León.
      </p>

      {/* Context */}
      <div className="grid grid-cols-4 place-content-center">
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

              <p className="text-label text-center">{especificacion.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
