import BackButton from "@/components/shared/Buttons/BackButton";
import { GalleryCarrousel } from "@/components/shared/Carrousel/GalleryCarrousel";
import { WhiteNavIndicator } from "../../Carrousel/Navigation/NavIndicator";
import FOTO_1 from "../../../assets/images/galeria-naves/VALO PARK 1.jpg";
import FOTO_2 from "../../../assets/images/galeria-naves/VALO PARK 2.jpg";
import FOTO_3 from "../../../assets/images/galeria-naves/VALO PARK 3.jpg";
import FOTO_4 from "../../../assets/images/galeria-naves/VALO PARK 4.jpg";
import FOTO_5 from "../../../assets/images/galeria-naves/VALO PARK 5.jpg";
import FOTO_6 from "../../../assets/images/galeria-naves/VALO PARK 6.jpg";
import FOTO_7 from "../../../assets/images/galeria-naves/VALO PARK 7.jpg";
import FOTO_8 from "../../../assets/images/galeria-naves/VALO PARK 8.jpg";
import FOTO_9 from "../../../assets/images/galeria-naves/VALO PARK 9.jpg";
import FOTO_10 from "../../../assets/images/galeria-naves/VALO PARK 10.jpg";

const FOTO_GALERIA_IMAGES = [
  FOTO_1,
  FOTO_2,
  FOTO_3,
  FOTO_4,
  FOTO_5,
  FOTO_6,
  FOTO_7,
  FOTO_8,
  FOTO_9,
  FOTO_10,
];
export default function NavesFotoGaleria() {
  return (
    <div className="flex w-dvw h-dvh default-padding pointer-events-none">
      <div className="absolute inset-0 w-dvw h-dvh flex items-center justify-center pointer-events-auto">
        <GalleryCarrousel
          images={FOTO_GALERIA_IMAGES}
          navIndicator={WhiteNavIndicator}
        />
      </div>

      <BackButton
        to="/valoPark/santaCatarina/masterplan/naves-industriales"
        className="self-end pointer-events-auto bg-santa-catarina hover:bg-santa-catarina-grey"
      />
    </div>
  );
}
