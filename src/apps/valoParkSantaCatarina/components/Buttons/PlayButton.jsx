import { useState } from "react";
import { VideoIconVPSC } from "../../assets/icons/VideoIcon";

function PopupContainer({ onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 flex justify-center items-center bg-black/70"
      onClick={onClose}
    >
      <div
        className="relative w-[80vw] aspect-video"
        onClick={(e) => e.stopPropagation()}
      >
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/AL0UF8oz54M?autoplay=1&mute=1&controls=1&rel=0&playlist=AL0UF8oz54M"
          title="Valo Park Santa Catarina"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
        <button
          onClick={onClose}
          className="absolute -top-8 right-0 text-white hover:text-gray-300"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}

export default function PlayButtonVPSC() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowPopup(true)}
        className="flex justify-center items-center size-[clamp(48px,4.69vw,90px)] bg-santa-catarina hover:bg-santa-catarina-grey hover:cursor-pointer pointer-events-auto"
      >
        <span className="relative size-[clamp(28px,2.6vw,50px)] pointer-events-auto">
          <span className="absolute inset-0 pointer-events-none">
            <VideoIconVPSC />
          </span>
        </span>
      </button>

      {showPopup && <PopupContainer onClose={() => setShowPopup(false)} />}
    </>
  );
}
