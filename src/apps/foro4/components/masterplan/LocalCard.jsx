import ClickIcon from "@/apps/foro4/assets/icons/masterplan/locales-disponibles/icon_click.svg";
import { Link } from "react-router";

export default function LocalCard({ local }) {
  return (
    <div className="flex flex-col bg-white border rounded overflow-hidden w-[clamp(145.8px,25.729167vw,494px)] h-fit p-[clamp(4.43px,0.78125vw,15px)] gap-[clamp(2.95px,0.520833vw,10px)]">
      {/* Foto placeholder — reemplaza con <img src={local.imagen} /> */}
      <div className="relative w-full aspect-464/378 bg-foro4-morado/50 flex items-center justify-center">
        <img
          src={local.img}
          alt={`Imagen del lote ${local.id}`}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Info */}
      <div className="flex flex-col h-full justify-between gap-[clamp(2.95px,0.520833vw,10px)]">
        <div className="flex items-center justify-between h-[clamp(20.08px,3.541667vw,44px)]">
          <span className="text-foro4-morado font-bold text-card-lote font-lumarc">
            {local.id}
          </span>
          <div className="flex flex-col justify-center items-center px-[clamp(4.43px,0.78125vw,15px)] py-[clamp(2.95px,0.520833vw,10px)] pr-[2vw]">
            <p className="text-foro4-morado text-paragraph-sub-button leading-[100%]">
              Precio de Renta
            </p>
            <p className="text-foro4-morado font-bold text-datos-disp ">
              {local.precio}
            </p>
          </div>
        </div>

        <div className="flex gap-[clamp(2.95px,0.520833vw,10px)]">
          <div className="flex flex-col flex-1 justify-center items-center text-center px-[clamp(4.43px,0.78125vw,15px)] py-[clamp(2.95px,0.520833vw,7px)] bg-foro4-morado/80">
            <p className="text-paragraph-sub-button">Superficie</p>
            <p className="text-white text-datos-disp font-semibold leading-[100%]">
              {local.superficie} m²
            </p>
          </div>
          <div className="flex flex-col flex-1 justify-center items-center px-[clamp(4.43px,0.78125vw,15px)] py-[clamp(2.95px,0.520833vw,7px)] text-center bg-foro4-morado/80">
            <p className="text-paragraph-button">Precio por m²</p>
            <p className="text-white text-datos-disp font-semibold leading-[100%]">
              {local.preciom2}
            </p>
          </div>
        </div>

        {/* Botón Explocar Local */}
        <Link
          to={`/foro4/masterplan/locales-disponibles/${local.slug}/recorrido-360`}
          className="flex w-full h-[clamp(14.77px,2.804167vw,58px)] justify-center items-center bg-foro4-morado text-white text-paragraph-button gap-[clamp(4.43px,0.78125vw,15px)] font-semibold transition-colors tracking-wide hover:cursor-pointer"
        >
          Explorar Local
          <img
            src={ClickIcon}
            alt="Icono de click"
            className="w-[clamp(7.09px,1.25vw,24px)]"
          />
        </Link>
      </div>
    </div>
  );
}
