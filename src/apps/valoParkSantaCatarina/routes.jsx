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
import { VideoPlayerProvider } from "./context/videoPlayerProvider";

export default function ValoParkSantaCatarinaRoutes() {
  return (
    <VideoPlayerProvider>
      <Routes>
        <Route
          path="/valoPark/santaCatarina"
          element={<VideoComponentLayout />}
        >
          <Route index element={<Home />} />

          <Route
            path="/valoPark/santaCatarina/informacion"
            element={<InformacionLayout />}
          >
            <Route index element={<Informacion />} />
          </Route>

          <Route
            path="/valoPark/santaCatarina/ubicacion"
            element={<UbicacionLayout />}
          >
            <Route index element={<Ubicacion />} />
          </Route>

          <Route
            path="/valoPark/santaCatarina/masterplan"
            element={<Masterplan />}
          />

          <Route
            path="/valoPark/santaCatarina/disponibilidad"
            element={<Disponibilidad />}
          />
          <Route
            path="/valoPark/santaCatarina/contacto"
            element={<Contacto />}
          />
        </Route>
      </Routes>
    </VideoPlayerProvider>
  );
}
