import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "@/styles/fonts.css";
import "mapbox-gl/dist/mapbox-gl.css";
import Router from "./router/router.jsx";
import { AppContextProvider } from "./context/AppProvider.jsx";
import AppShell from "./AppShell";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppContextProvider>
      <AppShell>
        <Router />
      </AppShell>
    </AppContextProvider>
  </StrictMode>,
);
