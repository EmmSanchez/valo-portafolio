import contentImage from "@/apps/valoParkSantaCatarina/assets/images/carrousel/image-slide2.jpg";

export default function Slide2() {
  return (
    <div className="flex w-full h-full flex-col items-center justify-center px-[clamp(38.79px,6.82vw,131px)] gap-1 lg:gap-5.5 2xl:gap-7.5">
      <h3 className="text-title font-lumarc font-semibold uppercase tracking-widest">
        Proyecto
      </h3>

      <div className="flex items-center gap-3 lg:gap-5.5 2xl:gap-7.5">
        <img
          src={contentImage}
          alt="Render Amenidades"
          className="w-[clamp(240px,44vw,850px)] h-[clamp(166px,30vw,588px)] max-lg:landscape:w-[clamp(180px,35vw,700px)] max-lg:landscape:h-[clamp(124px,24vw,485px)]"
        />

        <p className="text-label text-justify">
          Valo Park es un proyecto de bodegas industriales estratégicamente
          ubicado en el municipio de Santa Catarina. Un proyecto que nace a raíz
          de la demanda por espacio industrial Clase A en la ciudad. El parque
          compone de 17 bodegas de 698m2, en terrenos de 878m2, y cumple con los
          estándares más altos de la industria en cuanto a diseño, construcción,
          y ubicación.
        </p>
      </div>
    </div>
  );
}
