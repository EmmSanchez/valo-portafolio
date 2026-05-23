import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import { createPortal } from "react-dom";
import MontevoLandmark from "@/apps/valoPortafolio/assets/icons/proyectos/markers/MontevoLandmark.svg";
import TorrelunaLandmark from "@/apps/valoPortafolio/assets/icons/proyectos/markers/TorrelunaLandmark.svg";
import ValoParkApodacaLandmark from "@/apps/valoPortafolio/assets/icons/proyectos/markers/ValoParkApodacaLandmark.svg";
import ValoParkSantaCatarinaLandmark from "@/apps/valoPortafolio/assets/icons/proyectos/markers/ValoParkSantaCatarinaLandmark.svg";
// import Popup from "./Popup";

const LANDMARKS = {
  "valo-santa-catarina": ValoParkSantaCatarinaLandmark,
  "valo-apodaca": ValoParkApodacaLandmark,
  torreluna: TorrelunaLandmark,
  montevo: MontevoLandmark,
};

const LINKS = {
  "valo-santa-catarina": "/valoPark/santaCatarina",
  "valo-apodaca": "#",
  torreluna: "#",
  montevo: "#",
};

const Marker = ({
  map,
  feature,
  handleMarkerClick,
  isVisible = true,
  activeFeature,
}) => {
  const { geometry, properties } = feature;

  const markerRef = useRef(null);
  const popupRef = useRef(null);
  const [container] = useState(() => document.createElement("div"));

  const icon = LANDMARKS[properties.landmarkId];
  const markerURL = LINKS[properties.landmarkId];

  const isActive = activeFeature === properties.landmarkId;

  useEffect(() => {
    markerRef.current = new mapboxgl.Marker(container, { anchor: "bottom" })
      .setLngLat([geometry.coordinates[0], geometry.coordinates[1]])
      .addTo(map);

    return () => {
      markerRef.current.remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Click fuera del popup para cerrarlo
  useEffect(() => {
    if (!isActive) return;

    const handleClickOutside = (event) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target) &&
        !container.contains(event.target)
      ) {
        handleMarkerClick(null);
      }
    };

    // Agregar el listener al documento
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isActive, handleMarkerClick, container]);

  return createPortal(
    <div className="relative">
      <img
        src={icon}
        alt={properties.name}
        onClick={() => handleMarkerClick(feature, markerURL)}
        className={`w-[clamp(45px,5.5vw,105px)] h-[clamp(55px,6.7vw,128px)] hover:cursor-pointer transition-all hover:scale-110 hover:drop-shadow-2xl hover:brightness-110 origin-bottom
        ${
          isVisible
            ? "opacity-100 scale-100 pointer-events-auto animate-bounce-once"
            : "opacity-0 scale-0 pointer-events-none"
        }
      `}
      />

      {/* Popup */}
      {/* <Popup
        popupRef={popupRef}
        isActive={isActive}
        isVisible={isVisible}
        properties={properties}
      /> */}
    </div>,
    container,
  );
};

export default Marker;
