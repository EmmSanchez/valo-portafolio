import { Routes, Route } from "react-router";

import Home from "./Home/Home";
import NosotrosLayout from "./Nosotros/NosotrosLayout";
import Nosotros from "./Nosotros/Nosotros";
import Conocenos from "./Nosotros/Conocenos";
import EquipoDeTrabajo from "./Nosotros/EquipoDeTrabajo";
import ProyectosLayout from "./Proyectos/ProyectosLayout";
import Proyectos from "./Proyectos/Proyectos";
import NuevoLeon from "./Proyectos/Ciudades/NuevoLeon";
import Contacto from "./Contacto/Contacto";

export default function ValoPortafolioRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/nosotros" element={<NosotrosLayout />}>
        <Route index element={<Nosotros />} />
        <Route path="conoce-valo-developers" element={<Conocenos />} />
        <Route path="equipo-de-trabajo" element={<EquipoDeTrabajo />} />
      </Route>

      <Route path="/proyectos" element={<ProyectosLayout />}>
        <Route index element={<Proyectos />} />
        <Route path="nuevo-leon" element={<NuevoLeon />} />
      </Route>
      <Route path="/contacto" element={<Contacto />} />
    </Routes>
  );
}
