import foro4Image from "@/apps/valoPortafolio/assets/images/proyectos/foro4.jpg";
import ClickIcon from "../../assets/icons/proyectos/ClickIcon";

export const PROYECTOS_GUANAJUATO = [
  {
    id: 5,
    landmarkId: "foro4",
    coordinates: {
      lat: 21.164291785385643,
      lng: -101.69229633947785,
    },
    size: 120,
    redirectTo: "#",
    properties: {
      title: "Foro 4",
      description:
        "Redefine la manera de vivir, trabajar y disfrutar en León. Un espacio innovador que reúne oficinas corporativas, hotel de lujo, comercios, gastronomía y áreas para eventos, creando un ecosistema integral para empresas y visitantes.",
      url: "/foro4",
      img: foro4Image,
      colors: {
        border: "#82b14b", // verde
        button: "#82b14b",
        buttonActive: "#fff",
        background: "#00245c", // valo azul
        textColor: "#fff",
        textColorActive: "#00245c",
      },
      cta: [
        {
          type: "link",
          label: "Plataforma Interactiva",
          icon: ClickIcon,
          href: "/foro4",
          target: "_self",
        },
      ],
    },
  },
];
