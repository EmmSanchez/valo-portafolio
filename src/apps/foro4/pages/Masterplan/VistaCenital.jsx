import { Link, useSearchParams } from "react-router";
import logo from "@/apps/foro4/assets/logos/main/logo-foro-4-white-green.svg";
import BackButton from "@/components/shared/Buttons/BackButton";
import SubmenuMasterplan from "../../components/SubmenuMasterplan";
import SubmenuLateral from "../../components/shared/SubmenuLateral";
import VistaCenitalPins from "../../components/vista-cenital/vista-cenital-pins";

// Popup assets
import VistaCenitalPopup from "../../components/vista-cenital/vista-cenital-popup";
import bgPopupHotel from "@/apps/foro4/assets/images/masterplan/popup/pop-up-info-hotel.jpg";
import bgPopupOficinas from "@/apps/foro4/assets/images/masterplan/popup/pop-up-info-oficinas.jpg";
import imageHotel from "@/apps/foro4/assets/images/masterplan/popup/hotel-main-image.png";
import imageOficinas from "@/apps/foro4/assets/images/masterplan/popup/oficinas-main-image.png";

import escaleraIcon from "@/apps/foro4/assets/icons/masterplan/popup/piso.svg";
import oficinaIcon from "@/apps/foro4/assets/icons/masterplan/popup/oficina.svg";
import edificioIcon from "@/apps/foro4/assets/icons/masterplan/popup/edificio.svg";
import camaIcon from "@/apps/foro4/assets/icons/masterplan/popup/cama.svg";
import amenidadesIcon from "@/apps/foro4/assets/icons/masterplan/popup/amenidades.svg";
import salonIcon from "@/apps/foro4/assets/icons/masterplan/popup/salon.svg";

const SUBMENU_VISTA_CENITAL = [
  {
    id: "rotacion",
    label: "Rotación Orbital",
    to: "/foro4/masterplan/rotacion-orbital",
  },
  {
    id: "recorrido",
    label: "Recorrido 360",
    to: "/foro4/masterplan/recorrido-360",
  },
  {
    id: "video_tour",
    label: "Video Tour",
    to: "/foro4/masterplan/video-tour",
  },
  {
    id: "galeria",
    label: "Foto Galería",
    to: "/foro4/masterplan/foto-galeria",
  },
];

const POPUP_DATA = {
  oficinas: {
    bg: bgPopupOficinas,
    mainImage: imageOficinas,
    title: "OFICINAS CORPORATIVAS",
    description: (
      <>
        <span className="font-semibold">Torre de Oficinas</span> que fueron
        vendidas en su totalidad en Octubre del 2020 siendo un éxito comercial.
        Fueron construidas para romper con lo ordinario.
      </>
    ),
    stats: [
      {
        icon: escaleraIcon,
        label: "10 niveles (aquí tenemos al\ncorporativo de BANORTE)",
      },
      { icon: oficinaIcon, label: "Oficinas desde 70 hasta\n990 m2" },
      { icon: edificioIcon, label: "Ocupación actual más del 90%" },
    ],
  },
  hoteles: {
    bg: bgPopupHotel,
    mainImage: imageHotel,
    title: "HOTEL Y SALÓN DE EVENTOS",
    description: <>FORO 4 cuenta con un hotel 5 estrellas GALERÍA PLAZA</>,
    stats: [
      { icon: camaIcon, label: "180 habitaciones" },
      { icon: amenidadesIcon, label: "Amenidades exclusivas" },
      { icon: salonIcon, label: "Salón de eventos\n(2,000 m2)" },
    ],
  },
};

export default function VistaCenital() {
  const [searchParams] = useSearchParams();

  const popup = searchParams.get("popup");

  return (
    <div className="w-full h-svh">
      <div className="absolute top-0 left-0 z-60 default-logo-padding">
        <Link to={"/foro4/inicio"}>
          <img
            src={logo}
            alt="Lofo de FORO 4"
            className="w-[clamp(59.13px,10.416667vw,200px)] h-[clamp(6.51px,1.145833vw,22px)] "
          />
        </Link>
      </div>

      {/* Pines */}
      <VistaCenitalPins />

      {/* Content */}
      <div className="relative flex w-full h-full">
        <div className="flex flex-1 min-w-0 h-full justify-center items-center"></div>

        <div className="shrink-0 h-full flex items-center">
          <SubmenuLateral buttons={SUBMENU_VISTA_CENITAL} />
        </div>
      </div>

      {/* Botones y submenu en absolute */}
      <div className="absolute bottom-0 left-0 default-foro4-padding">
        {/* Texto y botón de regresar */}
        <div className="flex flex-col">
          <SubmenuMasterplan />
          <BackButton
            to={"/foro4/inicio"}
            className="bg-white text-foro4-morado"
          />
        </div>
      </div>

      {/* Popup */}
      {popup &&
        POPUP_DATA[popup] &&
        (() => {
          const data = POPUP_DATA[popup];
          return <VistaCenitalPopup data={data} />;
        })()}
    </div>
  );
}
