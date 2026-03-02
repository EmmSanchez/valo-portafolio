import { useLocation } from "react-router";
import { Link } from "react-router";
import BackButton from "@/components/shared/Buttons/BackButton";
import { CircleIndicatorIcon } from "../../assets/icons/CicleIndicatorIcon";
import { GalleryCarrousel } from "@/components/shared/Carrousel/GalleryCarrousel";
import FotoGaleria1 from "../../assets/images/foto_galeria/FOTO_VPSC_1.jpg";
import FotoGaleria2 from "../../assets/images/foto_galeria/FOTO_VPSC_2.jpg";
import FotoGaleria3 from "../../assets/images/foto_galeria/FOTO_VPSC_3.jpg";
import FotoGaleria4 from "../../assets/images/foto_galeria/FOTO_VPSC_4.jpg";
import FotoGaleria5 from "../../assets/images/foto_galeria/FOTO_VPSC_5.jpg";
import FotoGaleria6 from "../../assets/images/foto_galeria/FOTO_VPSC_6.jpg";
import FotoGaleria7 from "../../assets/images/foto_galeria/FOTO_VPSC_7.jpg";
import FotoGaleria8 from "../../assets/images/foto_galeria/FOTO_VPSC_8.jpg";
import FotoGaleria9 from "../../assets/images/foto_galeria/FOTO_VPSC_9.jpg";
import FotoGaleria10 from "../../assets/images/foto_galeria/FOTO_VPSC_10.jpg";
import VentajasVTI from "../../components/Menus/VTI/VentajasVTI";

const SUBMENU_VENTAJAS = [
  {
    id: "recorrido",
    label: "Recorrido 360",
    to: "/valoPark/santaCatarina/masterplan/ventajas-de-proyecto/recorrido-360",
  },
  {
    id: "video_tour",
    label: "Video Tour",
    to: "/valoPark/santaCatarina/masterplan/ventajas-de-proyecto/video-tour?ventaja=ubicacion-privilegiada",
  },
  {
    id: "galeria",
    label: "Foto Galería",
    to: "/valoPark/santaCatarina/masterplan/ventajas-de-proyecto/foto-galeria",
  },
];

const FOTO_GALERIA_IMAGES = [
  FotoGaleria1,
  FotoGaleria2,
  FotoGaleria3,
  FotoGaleria4,
  FotoGaleria4,
  FotoGaleria5,
  FotoGaleria6,
  FotoGaleria7,
  FotoGaleria8,
  FotoGaleria9,
  FotoGaleria10,
];

// FOTO GALERÍA BOTONNES DE NAVEGACIÓN
const navIndicator = (index, isActive) =>
  isActive ? (
    <span className="size-[clamp(9.47px,1.67vw,32px)] border-[clamp(1.18px,0.21vw,4px)] rounded-full bg-white border-white" />
  ) : (
    <span className="size-[clamp(9.47px,1.67vw,32px)] border-[clamp(1.18px,0.21vw,4px)] rounded-full border-white" />
  );

export default function Ventajas() {
  const { pathname } = useLocation();

  return (
    <>
      {/* SUBMENU LATERAL DERECHO */}
      {pathname ===
        "/valoPark/santaCatarina/masterplan/ventajas-de-proyecto" && (
        <div className="absolute z-50 right-0 top-1/2 -translate-y-1/2 pointer-events-none">
          <div className="pointer-events-auto flex flex-col items-center justify-center w-[clamp(30.21px,5.31vw,102px)] h-[clamp(240.13px,42.24vw,811px)] px-[clamp(4.73px,0.83vw,16px)] py-[clamp(2.96px,0.52vw,10px)] gap-[clamp(3.85px,0.68vw,13px)] bg-santa-catarina">
            {SUBMENU_VENTAJAS.map((button) => {
              return (
                <Link
                  key={button.id}
                  to={button.to}
                  data-active={pathname === button.to}
                  className={`group flex-1 flex flex-col-reverse justify-around items-center w-full rounded-[clamp(11.83px,2.08vw,40px)] hover:cursor-pointer  ${pathname === button.to ? "bg-santa-catarina-grey" : "hover:bg-santa-catarina-grey"}`}
                >
                  <p className="text-paragraph-subFilter-button vertical-left font-semibold text-white">
                    {button.label}
                  </p>

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
              );
            })}
          </div>
        </div>
      )}

      {pathname ===
        "/valoPark/santaCatarina/masterplan/ventajas-de-proyecto/recorrido-360" && (
        <div className="flex w-dvw h-dvh default-padding pointer-events-none">
          <div className="absolute inset-0 w-dvw h-dvh flex items-center justify-center pointer-events-auto">
            <p className="bg-green-500">Recorrido 360</p>
          </div>

          <BackButton
            to="/valoPark/santaCatarina/masterplan/ventajas-de-proyecto"
            className="self-end pointer-events-auto bg-santa-catarina hover:bg-santa-catarina-grey"
          />
        </div>
      )}

      {pathname ===
        "/valoPark/santaCatarina/masterplan/ventajas-de-proyecto/video-tour" && (
        <VentajasVTI />
      )}

      {pathname ===
        "/valoPark/santaCatarina/masterplan/ventajas-de-proyecto/foto-galeria" && (
        <div className="flex w-dvw h-dvh default-padding pointer-events-none">
          <div className="absolute inset-0 w-dvw h-dvh flex items-center justify-center pointer-events-auto">
            <GalleryCarrousel
              images={FOTO_GALERIA_IMAGES}
              navIndicator={navIndicator}
            />
          </div>

          <BackButton
            to="/valoPark/santaCatarina/masterplan/ventajas-de-proyecto"
            className="self-end pointer-events-auto bg-santa-catarina hover:bg-santa-catarina-grey"
          />
        </div>
      )}
    </>
  );
}
