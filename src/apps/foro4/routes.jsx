import { Route, Routes } from "react-router";

import Home from "./pages/Home/Home";
import Informacion from "./pages/Informacion/Informacion";
import Ubicacion from "./pages/Ubicacion/Ubicacion";
import Masterplan from "./pages/Masterplan/Masterplan";
import Contacto from "./pages/Contacto/Contacto";
import HomeVideo from "./pages/Home/HomeVideo";

export default function Foro4Routes() {
  return (
    <Routes>
      <Route path="/foro4">
        <Route index element={<Home />} />
        <Route path="video" element={<HomeVideo />} />
        <Route path="informacion" element={<Informacion />} />
        <Route path="ubicacion" element={<Ubicacion />} />
        <Route path="masterplan" element={<Masterplan />} />
        <Route path="masterplan/vista-cenital" element={<Masterplan />} />
        <Route path="masterplan/locales-disponibles" element={<Masterplan />} />
        <Route path="contacto" element={<Contacto />} />
      </Route>
    </Routes>
  );
}
