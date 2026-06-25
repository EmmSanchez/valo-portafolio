import { Routes, Route, Navigate } from "react-router";

import Home from "./pages/Home/Home";
import NosotrosLayout from "./pages/Nosotros/NosotrosLayout";
import Nosotros from "./pages/Nosotros/Nosotros";
import ProyectosLayout from "./pages/Proyectos/ProyectosLayout";
import Proyectos from "./pages/Proyectos/Proyectos";
import Contacto from "./pages/Contacto/Contacto";
import { VideoPlayerPortafolioProvider } from "./context/VideoPlayerPortafolioProvider.jsx";
import VideoComponentLayout from "./Video/VideoComponentLayout";
import EstadoDetalle from "./pages/Proyectos/EstadoDetalle";
import RotationMessageLayout from "./layouts/valo-rotation-message-layout";
import Bienvenida from "./pages/Bienvenida/Bienvenida";

export default function ValoPortafolioRoutes() {
  return (
    <VideoPlayerPortafolioProvider>
      <Routes>
        <Route element={<VideoComponentLayout />}>
          <Route element={<RotationMessageLayout />}>
            {/* Bienvenida */}
            <Route index element={<Navigate to="/bienvenida" replace />} />
            <Route path="bienvenida" element={<Bienvenida />} />
            <Route path="/inicio" element={<Home />} />

            <Route path="/nosotros" element={<NosotrosLayout />}>
              <Route index element={<Nosotros />} />
            </Route>

            <Route path="/proyectos" element={<ProyectosLayout />}>
              <Route index element={<Proyectos />} />
              <Route path=":estado" element={<EstadoDetalle />} />
            </Route>
            <Route path="/contacto" element={<Contacto />} />
          </Route>
        </Route>
      </Routes>
    </VideoPlayerPortafolioProvider>
  );
}
