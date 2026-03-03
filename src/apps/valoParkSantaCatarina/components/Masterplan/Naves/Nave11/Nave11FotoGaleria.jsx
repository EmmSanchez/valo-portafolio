import BackButton from "@/components/shared/Buttons/BackButton";
import { GalleryCarrousel } from "@/components/shared/Carrousel/GalleryCarrousel";
import { WhiteNavIndicator } from "../../../Carrousel/Navigation/NavIndicator";
import FOTO_1 from "../../../../assets/images/galeria-nave-11/nave11-1.jpg";

const FOTO_GALERIA_IMAGES = [FOTO_1, FOTO_1, FOTO_1];
export default function Nave11FotoGaleria() {
  return (
    <div className="flex w-dvw h-dvh default-padding pointer-events-none">
      <div className="absolute inset-0 w-dvw h-dvh flex items-center justify-center pointer-events-auto">
        <GalleryCarrousel
          images={FOTO_GALERIA_IMAGES}
          navIndicator={WhiteNavIndicator}
        />
      </div>

      <BackButton
        to="/valoPark/santaCatarina/masterplan/naves-industriales/nave-11"
        className="self-end pointer-events-auto bg-santa-catarina hover:bg-santa-catarina-grey"
      />
    </div>
  );
}
