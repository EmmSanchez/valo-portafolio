import { useSearchParams } from "react-router";
import pinMasterplan from "../../assets/images/masterplan/pinMasterplan.png";
import { VideoPlayerContext } from "../../context/VideoPlayerContext";
import { useContext, useState, useEffect } from "react";
import { MODE } from "../../const/Videos";

const POSICIONES = {
  1: {
    pin: { x: 880, y: 510 },
    id: "1",
    label: "Posición 1",
  },
  2: {
    pin: { x: 900, y: 560 },
    id: "3",
    label: "Posición 2",
  },
  3: {
    pin: { x: 870, y: 545 },
    id: "3",
    label: "Posición 3",
  },
  4: {
    pin: { x: 920, y: 470 },
    id: "4",
    label: "Posición 4",
  },
  5: {
    pin: { x: 920, y: 530 },
    id: "5",
    label: "Posición 5",
  },
  6: {
    pin: { x: 880, y: 510 },
    id: "6",
    label: "Posición 6",
  },
};

export default function MasterplanPin() {
  const { mode } = useContext(VideoPlayerContext);
  const [searchParams] = useSearchParams();
  const positionNumber = searchParams.get("position");

  const [displayPosition, setDisplayPosition] = useState(positionNumber);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayPosition(positionNumber);
    }, 10);

    return () => clearTimeout(timer);
  }, [positionNumber]);

  const positionCoordinates = POSICIONES[displayPosition]?.pin;

  return (
    <div className="fixed inset-0 z-20 pointer-events-none">
      <svg
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
      >
        <g
          transform={`translate(${positionCoordinates.x},${positionCoordinates.y})`}
        >
          <image
            href={pinMasterplan}
            transform="translate(35,5)"
            className={`${mode === MODE.TRANSITIONING ? "opacity-0" : ""}`}
          />
        </g>
      </svg>
    </div>
  );
}
