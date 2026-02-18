import { Route, Routes } from "react-router";
import Home from "./pages/Home/Home";

export default function ValoParkSantaCatarinaRoutes() {
  return (
    <Routes>
      <Route path="/valoPark/santaCatarina" element={<Home />} />
    </Routes>
  );
}
