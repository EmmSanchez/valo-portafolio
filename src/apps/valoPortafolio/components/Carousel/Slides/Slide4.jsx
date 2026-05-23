import miembro1 from "@/apps/valoPortafolio/assets/images/equpo-de-trabajo/miembro1.jpg";
import miembro2 from "@/apps/valoPortafolio/assets/images/equpo-de-trabajo/miembro2.jpg";
import miembro3 from "@/apps/valoPortafolio/assets/images/equpo-de-trabajo/miembro3.jpg";
import miembro4 from "@/apps/valoPortafolio/assets/images/equpo-de-trabajo/miembro4.jpg";
import miembro5 from "@/apps/valoPortafolio/assets/images/equpo-de-trabajo/miembro5.jpg";
import miembro6 from "@/apps/valoPortafolio/assets/images/equpo-de-trabajo/miembro6.jpg";
import miembro7 from "@/apps/valoPortafolio/assets/images/equpo-de-trabajo/miembro7.jpg";
import BackButton from "@/components/shared/Buttons/BackButton";

const TEAM = [
  {
    id: "jorge-canavati",
    name: "Jorge Luis Canavati Hadjópulos",
    role: "Presidente",
    image: miembro1,
  },
  {
    id: "juan-lobaton",
    name: "Juan\n Bernardo Lobatón Bernard",
    role: "Vicepresidente",
    image: miembro2,
  },
  {
    id: "bernardo-lobaton",
    name: "Bernardo Lobatón Martínez",
    role: "Miembro y Director General",
    image: miembro3,
  },
  {
    id: "marcelo-margain",
    name: "Marcelo Margáin Zambrano",
    role: "Miembro",
    image: miembro4,
  },
  {
    id: "ricardo-lobaton",
    name: "Ricardo Lobatón Bernard",
    role: "Miembro",
    image: miembro5,
  },
  {
    id: "pablo-canavati",
    name: "Pablo\n Canavati Hadjópulos",
    role: "Miembro",
    image: miembro6,
  },
  {
    id: "luis-canavati",
    name: "Luis Eugenio Canavati Quintanilla",
    role: "Miembro",
    image: miembro7,
  },
];

export default function Slide4() {
  return (
    <div className="flex w-full h-full items-center justify-center">
      <div className="flex flex-1 items-center justify-center">
        <div className="grid grid-cols-8 gap-x-4 gap-y-2.5 md:gap-x-6 md:gap-y-3 xl:gap-x-12.75 xl:gap-y-6.5 2xl:gap-x-15.75 2xl:gap-y-7.5">
          {TEAM.map((member, index) => (
            <div
              key={member.id}
              className={`relative aspect-350/343 w-[clamp(80px,14.8vw,350px)] lg:w-[clamp(200px,18.23vw,350px)] flex flex-col justify-end col-span-2 px-1.5 py-1 md:px-1.5 md:py-2 xl:px-6 xl:py-7.5 gap-1.5 lg:gap-3.75 outline-2 lg:outline-3.5 2xl:outline-[5px] outline-valo ${index === 4 ? "col-start-2" : ""}`}
            >
              {/* Background Image */}
              <img
                src={member.image}
                alt={member.name}
                className="absolute inset-0 w-full h-full object-cover object-top z-0"
              />

              {/* Overlay */}
              <div className="absolute inset-0 w-full h-full z-5 bg-black/35" />

              {/* Content */}
              <p className="relative z-10 text-white text-xs lg:text-subtitle-mobile text-shadow-lg font-lumarc font-bold leading-[100%] uppercase whitespace-pre-line">
                {member.name}
              </p>
              <p className="relative z-10 text-white text-puesto-mobile text-shadow-lg font-eurostile font-light tracking-wider uppercase">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
