import { useState } from "react";
import Icon360 from "@/apps/foro4/assets/icons/masterplan/360Icon.svg";
import HotelIcon from "@/apps/foro4/assets/icons/masterplan/hotelIcon.svg";
import HotelLabel from "@/apps/foro4/assets/icons/masterplan/hotelLabel.svg";
import EdificioIcon from "@/apps/foro4/assets/icons/masterplan/edificioIcon.svg";
import EdificioLabel from "@/apps/foro4/assets/icons/masterplan/edificioLabel.svg";
import { useNavigate, useSearchParams } from "react-router";

const PINS_DATA = [
  {
    id: "oficinas",
    icon: EdificioIcon,
    label: EdificioLabel,
    type: "popup",
    x: 724,
    y: 370,
  },
  {
    id: "hoteles",
    icon: HotelIcon,
    label: HotelLabel,
    type: "popup",
    x: 1060,
    y: 580,
  },
  {
    id: "recorrido_1",
    type: "recorrido",
    icon: Icon360,
    hoverIcon: Icon360,
    kuula_id: "Ll9S7",
    x: 1068,
    y: 420,
  },
  {
    id: "recorrido_2",
    type: "recorrido",
    icon: Icon360,
    hoverIcon: Icon360,
    kuula_id: "Ll9Qf",
    x: 910,
    y: 445,
  },
  {
    id: "recorrido_3",
    type: "recorrido",
    icon: Icon360,
    hoverIcon: Icon360,
    kuula_id: "Ll9SN",
    x: 910,
    y: 272,
  },
];

export default function VistaCenitalPins() {
  const navigate = useNavigate();
  const [_, setSearchParams] = useSearchParams();
  const [hoveredId, setHoveredId] = useState(null);
  return (
    <div className="fixed inset-0 z-20 pointer-events-none">
      <svg
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
      >
        {PINS_DATA.map((item) => {
          const isHovered = hoveredId === item.id;

          return (
            <g
              key={item.id}
              transform={`translate(${item.x},${item.y}) scale(${item.type === "recorrido" ? 1 : 1.258})`}
              className="transition hover:cursor-pointer pointer-events-auto hover:drop-shadow-xl"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => {
                if (item.type === "recorrido") {
                  navigate(`/foro4/masterplan/recorrido-360/${item.kuula_id}`);
                }

                if (item.type === "popup") {
                  setSearchParams({
                    popup: item.id,
                  });
                }
              }}
            >
              <image
                href={item.label}
                transform="translate(35,5)"
                className={`transition-opacity ${isHovered ? "" : "opacity-0"}`}
              />
              <image href={item.icon} x="4" y="4" />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
