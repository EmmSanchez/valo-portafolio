export default function Popup({ popupRef, isActive, isVisible, properties }) {
  return (
    <div
      ref={popupRef}
      className={`absolute flex flex-col w-120 h-fit -bottom-80 -left-45 text-3xl bg-white border-2 border-solid border-white shadow-2xl transition-all duration-300 ${
        isActive && isVisible
          ? "opacity-100 pointer-events-auto scale-100"
          : "opacity-0 pointer-events-none scale-95"
      }`}
    >
      {/* Image */}
      <div className="flex w-full h-20 bg-linear-to-tl from-valo to-blue-500"></div>

      {/* Description */}
      <div className="flex flex-col gap-3 text-xl px-4 py-4 text-black">
        <p className="opacity-60">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut deleniti
          quasi iste.
        </p>

        <p className="font-semibold">{properties.landmarkId}</p>

        <button className="py-4 bg-valo text-white font-bold hover:cursor-pointer hover:opacity-90 transition-all">
          Visitar
        </button>
      </div>
    </div>
  );
}
