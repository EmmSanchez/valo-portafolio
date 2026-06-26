import { Navigate, Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import Informacion from "./pages/Informacion/Informacion";
import Ubicacion from "./pages/Ubicacion/Ubicacion";
import Masterplan from "./pages/Masterplan/Masterplan";
import Disponibilidad from "./pages/Disponibilidad/Disponibilidad";
import Contacto from "./pages/Contacto/Contacto";
import InformacionLayout from "./pages/Informacion/InformacionLayout";
import UbicacionLayout from "./pages/Ubicacion/UbicacionLayout";
import VideoComponentLayout from "./components/Video/VideoComponentLayout";
import { VideoPlayerProvider } from "./context/VideoPlayerProvider";
import MasterplanBaseLayout from "./pages/Masterplan/Layouts/MasterplanBaseLayout";
import Ventajas from "./pages/Masterplan/Ventajas";
import MasterplanWithMenuLayout from "./pages/Masterplan/Layouts/MasterplanWithMenuLayout";
import Recorrido360 from "./components/Masterplan/Ventajas/Recorrido360";
import VideoTour from "./components/Masterplan/Ventajas/VideoTour";
import FotoGaleria from "./components/Masterplan/Ventajas/FotoGaleria";
import NavesIndustriales from "./components/Masterplan/Naves/NavesIndustriales";
import RotationMessageLayoutVPSC from "./layouts/RotationMessageLayoutVPSC";
import Bienvenida from "./pages/Bienvenida/Bienvenida";
import NavesFotoGaleria from "./components/Masterplan/Naves/NavesFotoGaleria";
import NavesVideoTour from "./components/Masterplan/Naves/NavesVideoTour";
import NavesRecorrido360 from "./components/Masterplan/Naves/NavesRecorrido360";

export default function ValoParkSantaCatarinaRoutes() {
  return (
    <VideoPlayerProvider>
      <Routes>
        <Route
          path="/valoPark/santaCatarina"
          element={<VideoComponentLayout />}
        >
          <Route element={<RotationMessageLayoutVPSC />}>
            <Route
              index
              element={
                <Navigate to="/valoPark/santaCatarina/bienvenida" replace />
              }
            />
            <Route
              path="/valoPark/santaCatarina/bienvenida"
              element={<Bienvenida />}
            />
            <Route path="/valoPark/santaCatarina/inicio" element={<Home />} />

            {/* Información */}
            <Route
              path="/valoPark/santaCatarina/informacion"
              element={<InformacionLayout />}
            >
              <Route index element={<Informacion />} />
            </Route>

            {/* Ubicación */}
            <Route
              path="/valoPark/santaCatarina/ubicacion"
              element={<UbicacionLayout />}
            >
              <Route index element={<Ubicacion />} />
            </Route>

            {/* Masterplan */}
            <Route
              path="/valoPark/santaCatarina/masterplan"
              element={<MasterplanBaseLayout />}
            >
              {/* Rutas que tienen submenu) */}
              <Route element={<MasterplanWithMenuLayout />}>
                <Route index element={<Masterplan />} />

                {/* Ventajas */}
                <Route path="proyecto">
                  <Route index element={<Ventajas />} />
                </Route>

                {/* Naves Industriales */}
                <Route path="naves-industriales">
                  <Route index element={<NavesIndustriales />} />
                </Route>
              </Route>

              {/* Ventajas hijos (sin submenu) */}
              <Route path="proyecto/recorrido-360" element={<Recorrido360 />} />
              <Route path="proyecto/video-tour" element={<VideoTour />} />
              <Route path="proyecto/foto-galeria" element={<FotoGaleria />} />

              {/* Naves Industriales hijos (sin submenu) */}
              <Route
                path="naves-industriales/recorrido-360"
                element={<NavesRecorrido360 />}
              />
              <Route
                path="naves-industriales/video-tour"
                element={<NavesVideoTour />}
              />
              <Route
                path="naves-industriales/foto-galeria"
                element={<NavesFotoGaleria />}
              />
            </Route>

            {/* Disponibilidad */}
            <Route
              path="/valoPark/santaCatarina/disponibilidad"
              element={<Disponibilidad />}
            />

            {/* Contacto */}
            <Route
              path="/valoPark/santaCatarina/contacto"
              element={<Contacto />}
            />
          </Route>
        </Route>
      </Routes>
    </VideoPlayerProvider>
  );
}
