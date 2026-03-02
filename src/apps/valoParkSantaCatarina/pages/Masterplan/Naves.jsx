import naveBg from "../../assets/images/navesbg.png";

export default function Naves() {
  return (
    <div className="absolute inset-0 w-dvw h-dvh pointer-events-none">
      <img
        src={naveBg}
        alt="Fondo de Nave Industrial"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      <div className="flex flex-col w-dvw h-dvh justify-center items-center gap-[clamp(7.39px,1.30vw,25px)] pointer-events-auto pl-30">
        <div className="flex w-[clamp(287.15px,50.57vw,971px)] h-[clamp(23.70px,7.41vh,80px)] items-center justify-center border-b-2 border-santa-catarina backdrop-blur-xs bg-white/85">
          <p className="text-title font-lumarc text-santa-catarina uppercase">
            Características de las naves
          </p>
        </div>

        <div className="grid grid-cols-3">
          {/* Primera Caratetistica */}
          <div className="w-[clamp(128.07px,22.55vw,433px)] h-[clamp(75.26px,23.52vh,254px)] flex flex-col items-center justify-center px-2 py-2 gap-2 md:px-2.5 md:py-4 md:gap-2.5 2xl:px-3.75 2xl:py-9.75 2xl:gap-3.75 text-white bg-santa-catarina">
            <span className="flex flex-1 items-end size-[clamp(18px,2.86vw,55px)]">
              {/* <EntradaIcon /> */}
            </span>

            <p className="flex-1 text-label text-center px-[clamp(30px,4.5vw,95px)] landscape:px-[clamp(14px,3vw,30px)] font-lumarc leading-[120%]">
              Lote: 878 m2 <br /> Bodega: 698 m2
            </p>
          </div>

          {/* Segunda Caratetistica */}
          <div className="w-[clamp(128.07px,22.55vw,433px)] h-[clamp(75.26px,23.52vh,254px)] flex flex-col items-center justify-center px-2 py-2 gap-2 md:px-2.5 md:py-4 md:gap-2.5 2xl:px-3.75 2xl:py-9.75 2xl:gap-3.75 text-white bg-santa-catarina">
            <span className="flex flex-1 items-end size-[clamp(18px,2.86vw,55px)]">
              {/* <TiendaIcon /> */}
            </span>

            <p className="flex-1 text-label text-center px-[clamp(30px,4.5vw,95px)] landscape:px-[clamp(14px,3vw,30px)] font-lumarc leading-[120%]">
              Altura libre 8 metros
            </p>
          </div>

          {/* Tercerea Caratetistica */}
          <div className="w-[clamp(128.07px,22.55vw,433px)] h-[clamp(75.26px,23.52vh,254px)] flex flex-col items-center justify-center px-2 py-2 gap-2 md:px-2.5 md:py-4 md:gap-2.5 2xl:px-3.75 2xl:py-9.75 2xl:gap-3.75 text-white bg-santa-catarina">
            <span className="flex flex-1 items-end size-[clamp(18px,2.86vw,55px)]">
              {/* <ParqueIcon /> */}
            </span>

            <p className="flex-1 text-label text-center px-[clamp(30px,4.5vw,95px)] landscape:px-[clamp(14px,3vw,30px)] font-lumarc leading-[120%]">
              Rampa
            </p>
          </div>

          <div className="w-[clamp(128.07px,22.55vw,433px)] h-[clamp(75.26px,23.52vh,254px)] flex flex-col items-center justify-center px-2 py-2 gap-2 md:px-2.5 md:py-4 md:gap-2.5 2xl:px-3.75 2xl:py-9.75 2xl:gap-3.75 text-white bg-santa-catarina">
            <span className="flex flex-1 items-end size-[clamp(18px,2.86vw,55px)]">
              {/* <EntradaIcon /> */}
            </span>

            <p className="flex-1 text-label text-center px-[clamp(30px,4.5vw,95px)] landscape:px-[clamp(14px,3vw,30px)] font-lumarc leading-[120%]">
              Lote: 878 m2 <br /> Bodega: 698 m2
            </p>
          </div>

          {/* Segunda Caratetistica */}
          <div className="w-[clamp(128.07px,22.55vw,433px)] h-[clamp(75.26px,23.52vh,254px)] flex flex-col items-center justify-center px-2 py-2 gap-2 md:px-2.5 md:py-4 md:gap-2.5 2xl:px-3.75 2xl:py-9.75 2xl:gap-3.75 text-white bg-santa-catarina">
            <span className="flex flex-1 items-end size-[clamp(18px,2.86vw,55px)]">
              {/* <TiendaIcon /> */}
            </span>

            <p className="flex-1 text-label text-center px-[clamp(30px,4.5vw,95px)] landscape:px-[clamp(14px,3vw,30px)] font-lumarc leading-[120%]">
              Altura libre 8 metros
            </p>
          </div>

          {/* Tercerea Caratetistica */}
          <div className="w-[clamp(128.07px,22.55vw,433px)] h-[clamp(75.26px,23.52vh,254px)] flex flex-col items-center justify-center px-2 py-2 gap-2 md:px-2.5 md:py-4 md:gap-2.5 2xl:px-3.75 2xl:py-9.75 2xl:gap-3.75 text-white bg-santa-catarina">
            <span className="flex flex-1 items-end size-[clamp(18px,2.86vw,55px)]">
              {/* <ParqueIcon /> */}
            </span>

            <p className="flex-1 text-label text-center px-[clamp(30px,4.5vw,95px)] landscape:px-[clamp(14px,3vw,30px)] font-lumarc leading-[120%]">
              Rampa
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
