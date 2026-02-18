import { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import Marker from "./Marker";
import LOCATIONS from "@/apps/valoPortafolio/data/Valo/geojsonData.json";
import { FILTERS_ID } from "@/apps/valoPortafolio/const/FiltersId";
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";
import { IS_DEVELOPMENT } from "@/config";

const ACCESS_TOKEN = import.meta.env.VITE_PUBLIC_MAPBOX_TOKEN;
const ZOOM =
  window.innerWidth < 768
    ? 9.1
    : window.innerWidth < 1024
      ? 9.4
      : window.innerWidth < 1444
        ? 10.2
        : 10.9;
const INITIAL_CONFIG = {
  center: [-100.3444, 25.7371],
  zoom: ZOOM,
  pitch: 0,
  bearing: 0,
  maxPitch: 65,
  style: "mapbox://styles/emmsanchez/cmlkb6klk006e01sk40lig6he",
};

const CATEGORIES = {
  [FILTERS_ID.INDUSTRIAL]: ["valo-santa-catarina", "valo-apodaca", "torreluna"],
  [FILTERS_ID.RESIDENCIAL_VERTICAL]: ["montevo"],
  [FILTERS_ID.RESIDENCIAL_HORIZONTAL]: [],
  [FILTERS_ID.USOS_MIXTOS]: [],
};

export default function Map() {
  const mapContainerRef = useRef();
  const [map, setMap] = useState(null);
  const [locationsData] = useState(LOCATIONS);
  const { mapFilter } = useContext(AppContext);
  const filteredLocations = mapFilter ? CATEGORIES[mapFilter] : null;

  const [activeFeature, setActiveFeature] = useState();

  // For Debugging
  const [center, setCenter] = useState(INITIAL_CONFIG.center);
  const [zoom, setZoom] = useState(INITIAL_CONFIG.zoom);

  // Rendering Map
  useEffect(() => {
    if (!ACCESS_TOKEN) return;

    mapboxgl.accessToken = ACCESS_TOKEN;

    const mapInstance = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: INITIAL_CONFIG.style,
      center: INITIAL_CONFIG.center,
      zoom: INITIAL_CONFIG.zoom,
      minZoom: INITIAL_CONFIG.zoom,
      maxPitch: INITIAL_CONFIG.maxPitch,
    });

    mapInstance.on("load", () => {
      setMap(mapInstance);
    });

    // For Debugging
    mapInstance.on("move", () => {
      // get the current center coordinates and zoom level from the map
      const mapCenter = mapInstance.getCenter();
      const mapZoom = mapInstance.getZoom();

      setCenter([mapCenter.lng, mapCenter.lat]);
      setZoom(mapZoom);
    });

    return () => {
      mapInstance.remove();
      setMap(null);
    };
  }, []);

  const handleMarkerClick = (feature) => {
    if (!feature) {
      setActiveFeature(null);
      return;
    }

    setActiveFeature(feature?.properties?.landmarkId);

    /*
    const {
      zoom = 11.5,
      pitch = 0,
      bearing = 0,
      duration = 1500,
    } = feature.properties.camera;
    */

    // FUNCTION TO MOVE MAPBOX CAMERA
    /*
    map?.flyTo({
      center: feature.geometry.coordinates,
      zoom,
      pitch,
      bearing,
      duration,
    });
    */
  };

  const goToInitialPosition = () => {
    map?.flyTo({
      center: INITIAL_CONFIG.center,
      zoom: INITIAL_CONFIG.zoom,
      pitch: INITIAL_CONFIG.pitch,
      bearing: INITIAL_CONFIG.bearing,
    });
  };

  return (
    <>
      {/* Debugging */}
      {IS_DEVELOPMENT && (
        <div className="absolute bottom-0 right-0 w-fit flex gap-[clamp(4.44px,0.83vw,16px)] p-[clamp(4.44px,0.83vw,16px)] z-50">
          <button
            className="w-fit rounded-md p-[clamp(3.33px,0.63vw,12px)] text-[clamp(5.92px,1.04vw,20px)] bg-blue-600 hover:cursor-pointer"
            onClick={goToInitialPosition}
          >
            Posición Inicial
          </button>
          <p className="bg-gray-800/80 text-white font-semibold text-[clamp(5.92px,1.04vw,20px)] p-[clamp(4.44px,0.83vw,16px)] rounded-2xl">
            Longitude: {center[0].toFixed(4)} | Latitude: {center[1].toFixed(4)}{" "}
            | Zoom: {zoom.toFixed(2)}
          </p>
        </div>
      )}

      <div
        id="map-container"
        ref={mapContainerRef}
        className="relative w-full h-full"
      >
        {map &&
          locationsData.features?.map((feature) => {
            // if filteredLocations = null (cause map filter is null) => show all markers
            const isVisible = filteredLocations
              ? filteredLocations.includes(feature.properties.landmarkId)
              : true;

            return (
              <Marker
                key={feature.properties.id}
                map={map}
                feature={feature}
                handleMarkerClick={handleMarkerClick}
                isVisible={isVisible}
                activeFeature={activeFeature}
              />
            );
          })}
      </div>
    </>
  );
}
