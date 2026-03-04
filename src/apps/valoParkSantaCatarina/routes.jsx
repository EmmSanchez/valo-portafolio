import { Route, Routes } from "react-router";
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
import Nave11 from "./components/Masterplan/Naves/Nave11/Nave11";
import Nave12 from "./components/Masterplan/Naves/Nave12/Nave12";
import NavesIndustriales from "./components/Masterplan/Naves/NavesIndustriales";
import NavesLayout from "./pages/Masterplan/Layouts/NavesLayout";
import Nave11Recorrido360 from "./components/Masterplan/Naves/Nave11/Nave11Recorrido360";
import Nave11FotoGaleria from "./components/Masterplan/Naves/Nave11/Nave11FotoGaleria";
import Nave12Recorrido360 from "./components/Masterplan/Naves/Nave12/Nave12Recorrido360";
import Nave12FotoGaleria from "./components/Masterplan/Naves/Nave12/Nave12FotoGaleria";
import Nave11VideoTour from "./components/Masterplan/Naves/Nave11/Nave11VideoTour";
import Nave12VideoTour from "./components/Masterplan/Naves/Nave12/Nave12VideoTour";

export default function ValoParkSantaCatarinaRoutes() {
  return (
    <VideoPlayerProvider>
      <Routes>
        <Route
          path="/valoPark/santaCatarina"
          element={<VideoComponentLayout />}
        >
          <Route index element={<Home />} />

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
              <Route path="ventajas-de-proyecto">
                <Route index element={<Ventajas />} />
              </Route>

              {/* Naves Industriales */}
              <Route path="naves-industriales">
                <Route index element={<NavesIndustriales />} />
              </Route>
            </Route>

            {/* Ventajas hijos (sin submenu) */}
            <Route
              path="ventajas-de-proyecto/recorrido-360"
              element={<Recorrido360 />}
            />
            <Route
              path="ventajas-de-proyecto/video-tour"
              element={<VideoTour />}
            />
            <Route
              path="ventajas-de-proyecto/foto-galeria"
              element={<FotoGaleria />}
            />

            {/* Nave 11 y 12 con layout propio */}
            <Route path="naves-industriales/nave-11" element={<NavesLayout />}>
              <Route index element={<Nave11 />} />
              <Route path="recorrido-360" element={<Nave11Recorrido360 />} />
              <Route path="video-tour" element={<Nave11VideoTour />} />
              <Route path="foto-galeria" element={<Nave11FotoGaleria />} />
            </Route>

            <Route path="naves-industriales/nave-12">
              <Route index element={<Nave12 />} />
              <Route path="recorrido-360" element={<Nave12Recorrido360 />} />
              <Route path="video-tour" element={<Nave12VideoTour />} />
              <Route path="foto-galeria" element={<Nave12FotoGaleria />} />
            </Route>
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
      </Routes>
    </VideoPlayerProvider>
  );
}
