import { useApiIsLoaded } from "@vis.gl/react-google-maps";
import { Marker } from "@vis.gl/react-google-maps";

export default function CustomMarker({ CustomKey, image, position, size }) {
  const isLoaded = useApiIsLoaded();

  if (!isLoaded) return null;

  return (
    <Marker
      key={CustomKey}
      position={position}
      icon={{
        url: image,
        scaledSize: {
          width: size,
          height: size,
        },
      }}
    />
  );
}
