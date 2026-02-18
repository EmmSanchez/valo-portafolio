import { BrowserRouter } from "react-router";
import ValoPortafolioRoutes from "@/apps/valoPortafolio/routes";
import ValoParkSantaCatarinaRoutes from "@/apps/valoParkSantaCatarina/routes";

export default function Router() {
  return (
    <BrowserRouter basename="/">
      <ValoPortafolioRoutes />
      <ValoParkSantaCatarinaRoutes />
    </BrowserRouter>
  );
}
