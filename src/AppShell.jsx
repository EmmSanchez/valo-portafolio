import { useAutoFullscreen } from "./hooks/AllowFullScreen";

export default function AppShell({ children }) {
  useAutoFullscreen();

  return children;
}
