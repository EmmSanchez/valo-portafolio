import { Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import Informacion from "./pages/Informacion/Informacion";
import Ubicacion from "./pages/Ubicacion/Ubicacion";
import Masterplan from "./pages/Masterplan/Masterplan";
import Contacto from "./pages/Contacto/Contacto";

export default function Foro4Routes() {
  return (
    <Routes>
      <Route path="/foro4" element={<Home />} />
      <Route path="/foro4/informacion" element={<Informacion />} />
      <Route path="/foro4/ubicacion" element={<Ubicacion />} />
      <Route path="/foro4/masterplan" element={<Masterplan />} />
      <Route path="/foro4/contacto" element={<Contacto />} />
    </Routes>
  );
}
