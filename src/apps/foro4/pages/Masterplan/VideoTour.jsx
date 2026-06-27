import { Link, Navigate, useSearchParams } from "react-router";
import logo from "@/apps/foro4/assets/logos/main/logo-foro-4-purple-green.svg";
import BackButton from "@/components/shared/Buttons/BackButton";
import MenuVTI from "../../components/masterplan/MenuVTI";
import LogoValoMark from "@/apps/valoPortafolio/assets/logos/logo-valo-mark";

const VALID_VENTAJAS = new Set([
  "ubicacion",
  "motor-lobby",
  "area-central",
  "zona-de-comida",
  "area-de-juegos",
  "terraza-techada",
  "edificio-oficinas",
  "hotel-5-estrellas",
  "estacionamiento-subterraneo",
  "locales-disponibles",
]);

export default function VideoTour() {
  const [searchParams] = useSearchParams();
  const ventaja = searchParams.get("ventaja");

  if (!ventaja || !VALID_VENTAJAS.has(ventaja)) {
    return (
      <Navigate to="/foro4/masterplan/video-tour?ventaja=ubicacion" replace />
    );
  }

  return (
    <div className="w-full h-svh default-foro4-padding">
      <div className="absolute top-0 left-0 z-50 w-full h-fit default-logo-padding-around">
        <div className="relative flex justify-between items-center w-full h-full">
          {/* Logo Valo */}
          <Link
            to="/"
            className="flex w-[clamp(50px,7.34vw,141px)] pointer-events-auto"
          >
            <LogoValoMark className="text-valo" />
          </Link>

          {/* Logo Foro */}
          <Link to={"/foro4/inicio"}>
            <img
              src={logo}
              alt="Logo de FORO 4"
              className="w-[clamp(59.13px,10.416667vw,200px)]"
            />
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="flex w-full h-full items-end justify-between">
        {/* Texto y botón de regresar */}
        <div className="flex flex-col">
          <BackButton
            to="/foro4/masterplan/proyecto"
            className="bg-white text-foro4-morado"
          />
        </div>

        {/* Menu de rotación de exteriores */}
        <div className="flex w-full h-full max-w-[375px] justify-end items-center">
          <MenuVTI />
        </div>
      </div>
    </div>
  );
}
