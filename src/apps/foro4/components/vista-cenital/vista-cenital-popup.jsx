import { Link } from "react-router";
import CerrarIcon from "../../assets/icons/CerrarIcon";
import BackButton from "@/components/shared/Buttons/BackButton";

export default function VistaCenitalPopup({ data }) {
  return (
    <div className="absolute z-50 inset-0 w-full h-svh">
      {/* Bg */}
      <img
        src={data.bg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* overlay */}
      <div className="absolute inset-0 w-full h-full bg-foro4-morado/80 backdrop-blur-sm" />

      {/* Overlay contenido */}
      <div className="relative z-10 flex flex-col w-full h-full default-foro4-padding">
        {/* Close */}
        <div className="flex shrink-0 justify-end">
          <Link
            to="/foro4/masterplan/vista-cenital"
            className="group flex justify-center items-center p-[clamp(5.02px,0.885417vw,17px)] bg-white hover:bg-foro4-morado"
          >
            <CerrarIcon className="size-[clamp(13.31px,2.34375vw,45px)] text-foro4-negro group-hover:text-white" />
          </Link>
        </div>

        {/* Card central */}
        <div className="flex grow justify-center items-center py-[clamp(10px,0.78125vw,15px)] gap-[clamp(10.34px,1.822917vw,35px)]">
          {/* Imagen principal */}
          <div className="relative w-[24.5vw] h-full lg:aspect-477/720 bg-gray-400 shrink-0">
            <img
              src={data.mainImage}
              alt={data.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Texto */}
          <div className="flex flex-col text-white w-[60vw] gap-[clamp(8.86px,1.5625vw,30px)]">
            {/* Title */}
            <div className="text-center text-title-lg font-lumarc font-bold uppercase text-foro4-verde leading-[120%]">
              {data.title}
            </div>

            <p className="text-center text-paragraph text-white leading-[120%]">
              {data.description}
            </p>

            {/* Stats */}
            <div className="flex">
              {data.stats.map((stat, i) => (
                <div
                  key={i}
                  className="flex flex-col flex-1 h-[22vh] justify-center items-center py-[clamp(11.52px,2.03125vw,39px)] px-[clamp(4.43px,0.78125vw,15px)] gap-[clamp(4.43px,0.78125vw,15px)] text-foro4-morado bg-white border-b-5 border-foro4-verde"
                >
                  <img
                    src={stat.icon}
                    className="relative size-[clamp(18px,2.86vw,55px)]"
                  />

                  <p className="text-label text-center leading-[120%] whitespace-pre-line">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Back */}
        <div className="flex shrink-0">
          <BackButton
            to="/foro4/masterplan/vista-cenital"
            className="bg-white text-foro4-morado"
          />
        </div>
      </div>
    </div>
  );
}
