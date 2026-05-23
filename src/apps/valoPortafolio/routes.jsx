import { Routes, Route } from "react-router";

import Home from "./pages/Home/Home";
import NosotrosLayout from "./pages/Nosotros/NosotrosLayout";
import Nosotros from "./pages/Nosotros/Nosotros";
import ProyectosLayout from "./pages/Proyectos/ProyectosLayout";
import Proyectos from "./pages/Proyectos/Proyectos";
import NuevoLeon from "./pages/Proyectos/Ciudades/NuevoLeon";
import Contacto from "./pages/Contacto/Contacto";
import { VideoPlayerPortafolioProvider } from "./context/VideoPlayerPortafolioProvider.jsx";
import VideoComponentLayout from "./Video/VideoComponentLayout";

export default function ValoPortafolioRoutes() {
  return (
    <VideoPlayerPortafolioProvider>
      <Routes>
        <Route element={<VideoComponentLayout />}>
          <Route path="/" element={<Home />} />

          <Route path="/nosotros" element={<NosotrosLayout />}>
            <Route index element={<Nosotros />} />
          </Route>

          <Route path="/proyectos" element={<ProyectosLayout />}>
            <Route index element={<Proyectos />} />
            <Route path="nuevo-leon" element={<NuevoLeon />} />
          </Route>
          <Route path="/contacto" element={<Contacto />} />
        </Route>
      </Routes>
    </VideoPlayerPortafolioProvider>
  );
}
