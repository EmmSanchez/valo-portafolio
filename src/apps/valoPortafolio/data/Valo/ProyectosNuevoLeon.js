import torrelunaImage from "@/apps/valoPortafolio/assets/images/proyectos/torreluna-image.jpg";
import montevoImage from "@/apps/valoPortafolio/assets/images/proyectos/montevo-image.jpg";
import VPSCImage from "@/apps/valoPortafolio/assets/images/proyectos/valo-sc-image.jpg";
import ClickIcon from "../../assets/icons/proyectos/ClickIcon";
import { VideoIcon } from "../../assets/icons/VideoIcon";

export const PROYECTOS_NUEVO_LEON = [
  {
    id: 1,
    landmarkId: "valo-santa-catarina",
    coordinates: {
      lat: 25.688986361310906,
      lng: -100.48965013531686,
    },
    size: 120,
    redirectTo: "/valoPark/santaCatarina",
    properties: {
      title: "Valo Park Santa Catarina",
      description:
        "Valo Park es un proyecto de bodegas industriales estratégicamente ubicado en el municipio de Santa Catarina.\nUn proyecto que nace a raíz de la demanda por espacio industrial Clase A en la ciudad",
      url: "/valoPark/santaCatarina",
      img: VPSCImage,
      colors: {
        border: "#2d2273", // morado
        button: "#00245c", // azul valo
        buttonActive: "#fff", // blanco
        background: "#00245c", // morado con opacidad
        textColor: "#fff",
        textColorActive: "#00245c",
      },
      cta: {
        label: "Página",
        icon: ClickIcon,
        href: "/valoPark/santaCatarina",
        target: "_self",
      },
    },
  },
  {
    id: 2,
    landmarkId: "valo-apodaca",
    coordinates: {
      lat: 25.83784,
      lng: -100.25176,
    },
    size: 120,
    redirectTo: "#",
    properties: {
      title: "Valo Park Apodaca",
      description: "En proceso de desarrollo proximamente 2026-2027",
      url: "https://www.valopark.mx/",
      colors: {
        border: "#2d2273", // morado
        button: "#00245c", // azul valo
        background: "#8d8d8d", // gris
      },
    },
  },
  {
    id: 3,
    landmarkId: "torreluna",
    coordinates: {
      lat: 25.81223,
      lng: -100.59657,
    },
    size: 120,
    redirectTo: "#",
    properties: {
      title: "Torreluna",
      description:
        "Praderas de Torreluna es un fraccionamiento\n residencial ubicado en el municipio de Garcia, N.L. \nEl proyecto se compone de más de 1,000 viviendas\ncon amenidades como parques, canchas deportivas y juegos infantiles",
      url: "https://www.valodevelopers.com/proyectos/praderas-de-torreluna",
      img: torrelunaImage,
      colors: {
        border: "#00245c", // azul
        button: "#00245c",
        background: "#00245c",
      },
    },
  },
  {
    id: 4,
    landmarkId: "montevo",
    coordinates: {
      lat: 25.63584,
      lng: -100.29864,
    },
    size: 120,
    redirectTo: "#",
    properties: {
      title: "Montevo",
      description:
        "Proyecto inmobiliario diseñado para transformar el concepto de vida en la zona Valle Oriente, al sur de la ciudad de Monterrey, evolucionando y creando una nueva identidad",
      url: "https://montevo.com/",
      img: montevoImage,
      colors: {
        border: "#d9843b", // naranja
        button: "#d9843b",
        buttonActive: "#204037",
        background: "#00245c", // valo azul
        textColor: "#fff",
        textColorActive: "#00245c",
      },
      cta: {
        label: "Reproducir video",
        icon: VideoIcon,
        href: "https://montevo.com/",
        target: "_blank",
      },
    },
  },
];
