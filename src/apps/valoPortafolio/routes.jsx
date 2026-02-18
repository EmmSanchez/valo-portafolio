import { Routes, Route } from "react-router";

import Home from "./pages/Home/Home";
import NosotrosLayout from "./pages/Nosotros/NosotrosLayout";
import Nosotros from "./pages/Nosotros/Nosotros";
import Conocenos from "./pages/Nosotros/Conocenos";
import EquipoDeTrabajo from "./pages/Nosotros/EquipoDeTrabajo";
import ProyectosLayout from "./pages/Proyectos/ProyectosLayout";
import Proyectos from "./pages/Proyectos/Proyectos";
import NuevoLeon from "./pages/Proyectos/Ciudades/NuevoLeon";
import Contacto from "./pages/Contacto/Contacto";

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
