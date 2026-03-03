import BackButton from "@/components/shared/Buttons/BackButton";
import { GalleryCarrousel } from "@/components/shared/Carrousel/GalleryCarrousel";
import FotoGaleria1 from "../../../assets/images/foto_galeria/FOTO_VPSC_1.jpg";
import FotoGaleria2 from "../../../assets/images/foto_galeria/FOTO_VPSC_2.jpg";
import FotoGaleria3 from "../../../assets/images/foto_galeria/FOTO_VPSC_3.jpg";
import FotoGaleria4 from "../../../assets/images/foto_galeria/FOTO_VPSC_4.jpg";
import FotoGaleria5 from "../../../assets/images/foto_galeria/FOTO_VPSC_5.jpg";
import FotoGaleria6 from "../../../assets/images/foto_galeria/FOTO_VPSC_6.jpg";
import FotoGaleria7 from "../../../assets/images/foto_galeria/FOTO_VPSC_7.jpg";
import FotoGaleria8 from "../../../assets/images/foto_galeria/FOTO_VPSC_8.jpg";
import FotoGaleria9 from "../../../assets/images/foto_galeria/FOTO_VPSC_9.jpg";
import FotoGaleria10 from "../../../assets/images/foto_galeria/FOTO_VPSC_10.jpg";

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

const navIndicator = (index, isActive) =>
  isActive ? (
    <span className="size-[clamp(9.47px,1.67vw,32px)] border-[clamp(1.18px,0.21vw,4px)] rounded-full bg-white border-white" />
  ) : (
    <span className="size-[clamp(9.47px,1.67vw,32px)] border-[clamp(1.18px,0.21vw,4px)] rounded-full border-white" />
  );

export default function FotoGaleria() {
  return (
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
  );
}
