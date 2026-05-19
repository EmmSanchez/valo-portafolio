import { BrowserRouter } from "react-router";
import ValoPortafolioRoutes from "@/apps/valoPortafolio/routes";
import ValoParkSantaCatarinaRoutes from "@/apps/valoParkSantaCatarina/routes";
import Foro4Routes from "@/apps/foro4/routes";

export default function Router() {
  return (
    <BrowserRouter basename="/">
      <ValoPortafolioRoutes />
      <ValoParkSantaCatarinaRoutes />
      <Foro4Routes />
    </BrowserRouter>
  );
}
