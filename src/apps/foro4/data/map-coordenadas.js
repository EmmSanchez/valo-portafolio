import CarIcon from "@/apps/foro4/assets/icons/ubicacion/CarIcon";
import AvionIcon from "../assets/icons/ubicacion/AvionIcon";
import ViaIcon from "../assets/icons/ubicacion/ViaIcon";
import GolfIcon from "../assets/icons/ubicacion/GolfIcon";
import BolsaIcon from "../assets/icons/ubicacion/BolsaIcon";
import BusIcon from "../assets/icons/ubicacion/BusIcon";

export const FORO4_COORDENADAS = {
  EDIFICIOS_CORPORATIVOS: [
    {
      id: "minutos",
      label: "30 minutos",
      labelSide: "right",
      icon: CarIcon,
      bgIcon: "circle",
      coordinates: { lat: 21.06877218657975, lng: -101.59376657552585 },
    },
    {
      id: "aeropuerto",
      label: "Guanajuato International Aeropuerto",
      labelSide: "right",
      icon: AvionIcon,
      bgIcon: "pin",
      coordinates: { lat: 20.985951279769854, lng: -101.47895661860964 },
    },
    {
      id: "distancia",
      label: "34.8 Kilometros",
      labelSide: "right",
      icon: ViaIcon,
      bgIcon: "pin",
      coordinates: { lat: 21.13892496460102, lng: -101.62652613580347 },
    },
  ],

  GOLF: [
    {
      id: "el-bosque",
      label: "El bosque country club",
      labelSide: "right",
      icon: GolfIcon,
      bgIcon: "pin",
      coordinates: { lat: 21.198606188967872, lng: -101.72215151917328 },
    },
    {
      id: "molino-club",
      label: "Club de golf el Molino",
      labelSide: "right",
      icon: GolfIcon,
      bgIcon: "pin",
      coordinates: { lat: 21.20268154242007, lng: -101.69505431626577 },
    },
    {
      id: "club-campestre",
      label: "Club de golf campestre",
      labelSide: "left",
      icon: GolfIcon,
      bgIcon: "pin",
      coordinates: { lat: 21.164778631455352, lng: -101.70277995097871 },
    },
    {
      id: "club-naranjos",
      label: "Club de golf los naranjos",
      labelSide: "left",
      icon: GolfIcon,
      bgIcon: "pin",
      coordinates: { lat: 21.16583581495649, lng: -101.6375322071402 },
    },
    {
      id: "club-naranjos-2",
      label: "Club de golf los naranjos",
      labelSide: "left",
      icon: GolfIcon,
      bgIcon: "pin",
      coordinates: { lat: 21.160075245589976, lng: -101.6405646778838 },
    },
    {
      id: "club-golf",
      label: "Club de golf",
      labelSide: "left",
      icon: GolfIcon,
      bgIcon: "pin",
      coordinates: { lat: 21.15472464009828, lng: -101.63675770609372 },
    },
  ],

  CENTROS_COMERCIALES: [
    {
      id: "plaza-mayor",
      label: "Plaza Mayor",
      labelSide: "left",
      icon: BolsaIcon,
      bgIcon: "pin",
      coordinates: { lat: 21.15814659866813, lng: -101.69515441793585 },
    },
    {
      id: "central-la-gran-plaza",
      label: "Central la gran plaza",
      labelSide: "left",
      icon: BolsaIcon,
      bgIcon: "pin",
      coordinates: { lat: 21.143469533669332, lng: -101.68516318672891 },
    },
    {
      id: "plaza-berlin",
      label: "Plaza Berlín",
      labelSide: "left",
      icon: BolsaIcon,
      bgIcon: "pin",
      coordinates: { lat: 21.188322066914797, lng: -101.66375074810243 },
    },
    {
      id: "plaza-cyrc",
      label: "Plaza Comercial Cyrc",
      labelSide: "left",
      icon: BolsaIcon,
      bgIcon: "pin",
      coordinates: { lat: 21.16429537601777, lng: -101.66320539355564 },
    },
    {
      id: "plaza-aurrera",
      label: "Aurrerá",
      labelSide: "left",
      icon: BolsaIcon,
      bgIcon: "pin",
      coordinates: { lat: 21.167333676264587, lng: -101.64926274857896 },
    },
  ],

  TRANSPORTES: [
    {
      id: "manuel-lopez",
      label: "Juan Manuel Lopez",
      labelSide: "left",
      icon: BusIcon,
      bgIcon: "pin",
      coordinates: { lat: 21.163763971581275, lng: -101.69305770880385 },
    },
    {
      id: "josefa",
      label: "Josefa Ortiz De Dominguez",
      labelSide: "left",
      icon: BusIcon,
      bgIcon: "pin",
      coordinates: { lat: 21.170443081344416, lng: -101.69825206693554 },
    },
    {
      id: "alonso-torres",
      label: "Juan Alonso De Torres",
      labelSide: "left",
      icon: BusIcon,
      bgIcon: "pin",
      coordinates: { lat: 21.154585358909152, lng: -101.69628649558234 },
    },
  ],

  VIALIDADES: [
    {
      id: "blvd_aeropuerto",
      label: "Blvd. Aeropuerto",
      labelSide: "right",
      coordinates: { lat: 21.1642, lng: -101.683 },
    },
  ],
};
