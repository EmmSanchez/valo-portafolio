import { Link } from "react-router";
import { GalleryCarrousel } from "@/components/shared/Carrousel/GalleryCarrousel";
import BackButton from "@/components/shared/Buttons/BackButton";
import logo from "@/apps/foro4/assets/logos/main/logo-foro-4-purple-green.svg";
import IMAGE1 from "@/apps/foro4/assets/images/masterplan/foto-galeria/FOTOGALERIA-FORO4-1.jpg";
import IMAGE2 from "@/apps/foro4/assets/images/masterplan/foto-galeria/FOTOGALERIA-FORO4-2.jpg";
import IMAGE3 from "@/apps/foro4/assets/images/masterplan/foto-galeria/FOTOGALERIA-FORO4-3.jpg";
import IMAGE4 from "@/apps/foro4/assets/images/masterplan/foto-galeria/FOTOGALERIA-FORO4-4.jpg";
import IMAGE5 from "@/apps/foro4/assets/images/masterplan/foto-galeria/FOTOGALERIA-FORO4-5.jpg";
import IMAGE6 from "@/apps/foro4/assets/images/masterplan/foto-galeria/FOTOGALERIA-FORO4-6.jpg";
import IMAGE7 from "@/apps/foro4/assets/images/masterplan/foto-galeria/FOTOGALERIA-FORO4-7.jpg";
import IMAGE8 from "@/apps/foro4/assets/images/masterplan/foto-galeria/FOTOGALERIA-FORO4-8.jpg";
import IMAGE9 from "@/apps/foro4/assets/images/masterplan/foto-galeria/FOTOGALERIA-FORO4-9.jpg";
import IMAGE10 from "@/apps/foro4/assets/images/masterplan/foto-galeria/FOTOGALERIA-FORO4-10.jpg";
import IMAGE11 from "@/apps/foro4/assets/images/masterplan/foto-galeria/FOTOGALERIA-FORO4-11.jpg";

const FOTO_GALERIA_IMAGES = [
  IMAGE1,
  IMAGE2,
  IMAGE3,
  IMAGE4,
  IMAGE5,
  IMAGE6,
  IMAGE7,
  IMAGE8,
  IMAGE9,
  IMAGE10,
  IMAGE11,
];

const navIndicator = (index, isActive) =>
  isActive ? (
    <span className="size-[clamp(9.47px,1.67vw,32px)] border-[clamp(1.18px,0.21vw,4px)] rounded-full bg-white border-white" />
  ) : (
    <span className="size-[clamp(9.47px,1.67vw,32px)] border-[clamp(1.18px,0.21vw,4px)] rounded-full border-white" />
  );

export default function FotoGaleria() {
  return (
    <div className="w-full h-svh default-foro4-padding bg-cyan-800">
      <div className="absolute top-0 left-0 z-50 default-logo-padding">
        <Link to={"/foro4"}>
          <img
            src={logo}
            alt="Lofo de FORO 4"
            className="w-[clamp(59.13px,10.416667vw,200px)] h-[clamp(6.51px,1.145833vw,22px)] "
          />
        </Link>
      </div>

      {/* Content */}
      <div className="relative z-10 flex w-full h-full items-end justify-between pointer-events-none">
        {/* Texto y botón de regresar */}
        <div className="flex flex-col pointer-events-none">
          <BackButton
            to="/foro4/masterplan/vista-cenital"
            className="bg-white text-foro4-morado pointer-events-auto"
          />
        </div>
      </div>

      {/* Galería */}
      <div className="absolute inset-0 w-dvw h-dvh flex items-center justify-center pointer-events-auto">
        <GalleryCarrousel
          images={FOTO_GALERIA_IMAGES}
          navIndicator={navIndicator}
          showArrows={true}
        />
      </div>
    </div>
  );
}
