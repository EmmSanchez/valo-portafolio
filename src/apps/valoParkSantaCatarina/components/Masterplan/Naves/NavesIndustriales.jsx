import { Link } from "react-router";
import { CircleIndicatorIcon } from "@/apps/valoParkSantaCatarina/assets/icons/CicleIndicatorIcon";
import AlmacenIcon from "../../../assets/icons/naves/AlmacenIcon";
import CintaMedicionIcon from "../../../assets/icons/naves/CintaMedicionIcon";
import LamicaIcon from "../../../assets/icons/naves/LamicaIcon";
import PlataformaIcon from "../../../assets/icons/naves/PlataformaIcon";
import RampaIcon from "../../../assets/icons/naves/RampaIcon";
import VentanaIcon from "../../../assets/icons/naves/VentanaIcon";

export default function NavesIndustriales() {
  return (
    <div className="absolute inset-0 w-dvw h-dvh pointer-events-none">
      <div className="flex w-dvw h-dvh items-center justify-end gap-[clamp(9.47px,1.67vw,32px)] pointer-events-auto default-padding">
        <div className="flex flex-col items-center gap-[clamp(7.39px,1.30vw,25px)] pointer-events-auto">
          <div className="flex w-[clamp(287.15px,50.57vw,971px)] h-[clamp(23.70px,7.41vh,80px)] items-center justify-center border-b-2 border-santa-catarina backdrop-blur-xs bg-white/85">
            <p className="text-title font-lumarc text-santa-catarina uppercase">
              Características de las naves
            </p>
          </div>

          {/* Características de las Naves */}
          <div className="grid grid-cols-3">
            {/* Primera Caratetistica */}
            <div className="w-[clamp(128.07px,22.55vw,433px)] h-[clamp(75.26px,23.52vh,254px)] flex flex-col items-center justify-center px-2 py-2 gap-2 md:px-2.5 md:py-4 md:gap-2.5 2xl:px-3.75 2xl:py-9.75 2xl:gap-3.75 text-white border-b lg:border-b-2 border-white bg-santa-catarina">
              <span className="flex flex-1 items-end size-[clamp(18px,2.86vw,55px)]">
                <AlmacenIcon />
              </span>

              <p className="flex-1 text-label text-center px-[clamp(30px,4.5vw,95px)] landscape:px-[clamp(14px,3vw,30px)] font-lumarc leading-[120%]">
                Lote: <strong>878 m2</strong> <br /> Bodega:{" "}
                <strong>698 m2</strong>
              </p>
            </div>

            {/* Segunda Caratetistica */}
            <div className="w-[clamp(128.07px,22.55vw,433px)] h-[clamp(75.26px,23.52vh,254px)] flex flex-col items-center justify-center px-2 py-2 gap-2 md:px-2.5 md:py-4 md:gap-2.5 2xl:px-3.75 2xl:py-9.75 2xl:gap-3.75 text-white border-b lg:border-b-2 border-white bg-santa-catarina">
              <span className="flex flex-1 items-end size-[clamp(18px,2.86vw,55px)]">
                <CintaMedicionIcon />
              </span>

              <p className="flex-1 text-label text-center px-[clamp(30px,4.5vw,95px)] landscape:px-[clamp(14px,3vw,30px)] font-lumarc leading-[120%]">
                Altura libre 8 metros
              </p>
            </div>

            {/* Tercera Caratetistica */}
            <div className="w-[clamp(128.07px,22.55vw,433px)] h-[clamp(75.26px,23.52vh,254px)] flex flex-col items-center justify-center px-2 py-2 gap-2 md:px-2.5 md:py-4 md:gap-2.5 2xl:px-3.75 2xl:py-9.75 2xl:gap-3.75 text-white border-b lg:border-b-2 border-white bg-santa-catarina">
              <span className="flex flex-1 items-end size-[clamp(18px,2.86vw,55px)]">
                <RampaIcon />
              </span>

              <p className="flex-1 text-label text-center px-[clamp(30px,4.5vw,95px)] landscape:px-[clamp(14px,3vw,30px)] font-lumarc leading-[120%]">
                Rampa
              </p>
            </div>

            {/* Cuarta Caratetistica */}
            <div className="w-[clamp(128.07px,22.55vw,433px)] h-[clamp(75.26px,23.52vh,254px)] flex flex-col items-center justify-center px-2 py-2 gap-2 md:px-2.5 md:py-4 md:gap-2.5 2xl:px-3.75 2xl:py-9.75 2xl:gap-3.75 text-white border-b lg:border-b-2 border-white bg-santa-catarina">
              <span className="flex flex-1 items-end size-[clamp(18px,2.86vw,55px)]">
                <PlataformaIcon />
              </span>

              <p className="flex-1 text-label text-center px-[clamp(30px,4.5vw,95px)] landscape:px-[clamp(14px,3vw,30px)] font-lumarc leading-[120%]">
                Anden
              </p>
            </div>

            {/* Quinta Caratetistica */}
            <div className="w-[clamp(128.07px,22.55vw,433px)] h-[clamp(75.26px,23.52vh,254px)] flex flex-col items-center justify-center px-2 py-2 gap-2 md:px-2.5 md:py-4 md:gap-2.5 2xl:px-3.75 2xl:py-9.75 2xl:gap-3.75 text-white border-b lg:border-b-2 border-white bg-santa-catarina">
              <span className="flex flex-1 items-end size-[clamp(18px,2.86vw,55px)]">
                <LamicaIcon />
              </span>

              <p className="flex-1 text-label text-center px-[clamp(30px,4.5vw,95px)] landscape:px-[clamp(14px,3vw,30px)] font-lumarc leading-[120%]">
                Cubierta de Lamina <strong>KR18</strong>
              </p>
            </div>

            {/* Sexta Caratetistica */}
            <div className="w-[clamp(128.07px,22.55vw,433px)] h-[clamp(75.26px,23.52vh,254px)] flex flex-col items-center justify-center px-2 py-2 gap-2 md:px-2.5 md:py-4 md:gap-2.5 2xl:px-3.75 2xl:py-9.75 2xl:gap-3.75 text-white border-b lg:border-b-2 border-white bg-santa-catarina">
              <span className="flex flex-1 items-end size-[clamp(18px,2.86vw,55px)]">
                <VentanaIcon />
              </span>

              <p className="flex-1 text-label text-center px-[clamp(30px,4.5vw,95px)] landscape:px-[clamp(14px,3vw,30px)] font-lumarc leading-[120%]">
                Skylights 5%
              </p>
            </div>
          </div>
        </div>

        {/* Botones de Nave 11 y 12 */}
        <div className="flex flex-col gap-[clamp(2.96px,0.52vw,10px)] pt-[clamp(29.58px,5.21vw,100px)]">
          <Link
            to={"/valoPark/santaCatarina/masterplan/naves-industriales/nave-11"}
            className={`group flex items-center justify-between w-[clamp(60.59px,10.68vw,205px)] h-[clamp(20.74px,6.48vh,70px)] px-[clamp(7.39px,1.30vw,25px)] rounded-[40px] bg-santa-catarina hover:bg-santa-catarina-grey hover:cursor-pointer`}
          >
            <span className="text-nave-button font-semibold text-white">
              Nave 11
            </span>

            <span className="relative size-[clamp(8px,1.25vw,24px)]">
              {/* Inactive */}
              <span className="absolute inset-0 group-hover:hidden group-data-[active=true]:hidden">
                <CircleIndicatorIcon isActive={false} />
              </span>

              {/* Active / Hover */}
              <span className="absolute inset-0 hidden group-hover:block group-data-[active=true]:block">
                <CircleIndicatorIcon isActive />
              </span>
            </span>
          </Link>

          <Link
            to={"/valoPark/santaCatarina/masterplan/naves-industriales/nave-12"}
            className={`group flex items-center justify-between w-[clamp(60.59px,10.68vw,205px)] h-[clamp(20.74px,6.48vh,70px)] px-[clamp(7.39px,1.30vw,25px)] rounded-[40px] bg-santa-catarina hover:bg-santa-catarina-grey hover:cursor-pointer`}
          >
            <span className="text-nave-button font-semibold text-white">
              Nave 12
            </span>

            <span className="relative size-[clamp(8px,1.25vw,24px)]">
              {/* Inactive */}
              <span className="absolute inset-0 group-hover:hidden group-data-[active=true]:hidden">
                <CircleIndicatorIcon isActive={false} />
              </span>

              {/* Active / Hover */}
              <span className="absolute inset-0 hidden group-hover:block group-data-[active=true]:block">
                <CircleIndicatorIcon isActive />
              </span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
