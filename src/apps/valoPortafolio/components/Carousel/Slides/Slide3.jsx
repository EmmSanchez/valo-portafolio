import { CamaIcon } from "@/apps/valoPortafolio/assets/icons/conoce-valo-developers/CamaIcon";
import { CasaIcon } from "@/apps/valoPortafolio/assets/icons/conoce-valo-developers/CasaIcon";
import { DepaIcon } from "@/apps/valoPortafolio/assets/icons/conoce-valo-developers/DepaIcon";
import { MisionIcon } from "@/apps/valoPortafolio/assets/icons/conoce-valo-developers/MisionIcon";
import { OficinaIcon } from "@/apps/valoPortafolio/assets/icons/conoce-valo-developers/OficinaIcon";
import { PlanoIcon } from "@/apps/valoPortafolio/assets/icons/conoce-valo-developers/PlanoIcon";

const ESPECIFICACIONES = [
  {
    id: "experienca",
    icon: <MisionIcon />,
    label: "Años de experiencia",
    number: "16",
  },
  {
    id: "vivienda",
    icon: <CasaIcon />,
    label: "Casas de vivienda",
    number: "869",
  },
  {
    id: "habitaciones",
    icon: <CamaIcon />,
    label: "Habitacions de hotel",
    number: "430",
  },
  {
    id: "departamentos",
    icon: <DepaIcon />,
    label: "Departamentos",
    number: "+1000",
  },
  {
    id: "unidades-comerciales",
    icon: <PlanoIcon />,
    label: "En unidades comerciales",
    number: "100,000 m2",
  },
  {
    id: "oficinas-consultorias",
    icon: <OficinaIcon />,
    label: "En unidades de oficinas/Consultorias",
    number: "75,000 m2",
  },
];

export default function Slide3() {
  return (
    <div className="flex w-full h-full items-center justify-center">
      <div className="grid grid-cols-3 gap-y-1.5">
        {ESPECIFICACIONES.map((especificacion) => {
          return (
            <div
              key={especificacion.id}
              className="flex flex-col items-center px-2 py-3 gap-2 md:px-2.5 md:py-4 md:gap-2.5 2xl:px-3.75 2xl:py-9.75 2xl:gap-3.75 text-white bg-valo"
            >
              <span className="relative size-[clamp(25px,2.86vw,55px)]">
                <span className="absolute inset-0">{especificacion.icon}</span>
              </span>

              <p className="text-info text-center font-lumarc font-bold">
                {especificacion.number}
              </p>
              <p className="text-label text-center">{especificacion.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
