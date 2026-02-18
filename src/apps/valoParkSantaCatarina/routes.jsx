import { Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import Informacion from "./pages/Informacion/Informacion";
import Ubicacion from "./pages/Ubicacion/Ubicacion";
import Masterplan from "./pages/Masterplan/Masterplan";
import Disponibilidad from "./pages/Disponibilidad/Disponibilidad";
import Contacto from "./pages/Contacto/Contacto";

export default function ValoParkSantaCatarinaRoutes() {
  return (
    <Routes>
      <Route path="/valoPark/santaCatarina" element={<Home />} />
      <Route
        path="/valoPark/santaCatarina/informacion"
        element={<Informacion />}
      />
      <Route path="/valoPark/santaCatarina/ubicacion" element={<Ubicacion />} />
      <Route
        path="/valoPark/santaCatarina/masterplan"
        element={<Masterplan />}
      />
      <Route
        path="/valoPark/santaCatarina/disponibilidad"
        element={<Disponibilidad />}
      />
      <Route path="/valoPark/santaCatarina/contacto" element={<Contacto />} />
    </Routes>
  );
}
