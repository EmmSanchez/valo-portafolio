import { Navigate, Route, Routes } from "react-router";

import Home from "./pages/Home/Home";
import HomeVideo from "./pages/Home/HomeVideo";

import Informacion from "./pages/Informacion/Informacion";
import Ubicacion from "./pages/Ubicacion/Ubicacion";
import Contacto from "./pages/Contacto/Contacto";

import Masterplan from "./pages/Masterplan/Masterplan";
import VistaCenital from "./pages/Masterplan/VistaCenital";
import LocalesDisponibles from "./pages/Masterplan/LocalesDisponibles";
import RotacionOrbital from "./pages/Masterplan/RotacionOrbital";
import Recorrido360 from "./pages/Masterplan/Recorrido360";
import VideoTour from "./pages/Masterplan/VideoTour";
import FotoGaleria from "./pages/Masterplan/FotoGaleria";
import DetalleLocal from "./pages/Masterplan/DetalleLocal";

// Subrutas de DetalleLocal
import DetalleLocalRecorrido360 from "./pages/Masterplan/DetalleLocal/DetalleLocalRecorrido360";
import DetalleLocalFotoGaleria from "./pages/Masterplan/DetalleLocal/DetalleLocalFotoGaleria";
import DetalleLocalInformacion from "./pages/Masterplan/DetalleLocal/DetalleLocalInformacion";

// Videos
import { VideoPlayerProvider } from "./video/context/VideoPlayerProvider";
import VideoComponentLayout from "./video/VideoComponentLayout";
import Bienvenida from "./pages/Bienvenida/Bienvenida";

export default function Foro4Routes() {
  return (
    <VideoPlayerProvider>
      <Routes>
        <Route path="/foro4" element={<VideoComponentLayout />}>
          {/* Bienvenida */}
          <Route index element={<Navigate to="/foro4/bienvenida" replace />} />
          <Route path="bienvenida" element={<Bienvenida />} />

          {/* Home */}
          <Route path="inicio" element={<Home />} />
          <Route path="video" element={<HomeVideo />} />

          {/* Pages */}
          <Route path="informacion" element={<Informacion />} />
          <Route path="ubicacion" element={<Ubicacion />} />
          <Route path="contacto" element={<Contacto />} />

          {/* Masterplan */}
          <Route path="masterplan">
            <Route index element={<Masterplan />} />
            <Route path="vista-cenital" element={<VistaCenital />} />
            <Route
              path="locales-disponibles"
              element={<LocalesDisponibles />}
            />

            <Route path="rotacion-orbital" element={<RotacionOrbital />} />
            <Route path="recorrido-360/" element={<Recorrido360 />} />
            <Route path="recorrido-360/:sceneId" element={<Recorrido360 />} />
            <Route path="video-tour" element={<VideoTour />} />
            <Route path="foto-galeria" element={<FotoGaleria />} />

            {/* DetalleLocal como layout con sus subrutas */}
            <Route path="locales-disponibles/:slug" element={<DetalleLocal />}>
              <Route
                path="recorrido-360"
                element={<DetalleLocalRecorrido360 />}
              />
              <Route path="informacion" element={<DetalleLocalInformacion />} />
              <Route
                path="foto-galeria"
                element={<DetalleLocalFotoGaleria />}
              />
            </Route>
          </Route>
        </Route>
      </Routes>
    </VideoPlayerProvider>
  );
}
