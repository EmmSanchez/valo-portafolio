import { BrowserRouter } from "react-router";
import ValoPortafolioRoutes from "@/apps/valoPortafolio/pages/routes";

export default function Router() {
  return (
    <BrowserRouter basename="/">
      <ValoPortafolioRoutes />
    </BrowserRouter>
  );
}
