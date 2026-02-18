import { useState } from "react";
import { AppContext } from "./AppContext.jsx";
import { SPLASH_KEYS } from "@/components/shared/SplashScreen/const.js";

export function AppContextProvider({ children }) {
  const [showSplashScreen, setShowSplashScreen] = useState(() => {
    return Object.fromEntries(
      Object.entries(SPLASH_KEYS).map(([, value]) => {
        const storedValue = sessionStorage.getItem(value);

        if (storedValue === null) {
          sessionStorage.setItem(value, "true");
          return [value, true];
        }

        return [value, storedValue === "true"];
      }),
    );
  });

  const toggleSplashScreen = (key) => {
    const nextValue = sessionStorage.getItem(key) !== "true";
    sessionStorage.setItem(key, String(nextValue));
    setShowSplashScreen((prev) => ({ ...prev, [key]: nextValue }));
  };

  const [mapFilter, setMapFilter] = useState(null);
  const selectMapFilter = (value) => {
    if (mapFilter === value) return setMapFilter(null);
    setMapFilter(value);
  };

  return (
    <AppContext.Provider
      value={{
        showSplashScreen,
        toggleSplashScreen,
        selectMapFilter,
        mapFilter,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
