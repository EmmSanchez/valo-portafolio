import BackButton from "@/components/shared/Buttons/BackButton";

export default function Recorrido360() {
  return (
    <div className="flex w-dvw h-dvh default-padding pointer-events-none">
      <div className="absolute inset-0 w-dvw h-dvh flex items-center justify-center pointer-events-auto">
        <p className="bg-green-500">Recorrido 360</p>
      </div>

      <BackButton
        to="/valoPark/santaCatarina/masterplan/ventajas-de-proyecto"
        className="self-end pointer-events-auto bg-santa-catarina hover:bg-santa-catarina-grey"
      />
    </div>
  );
}
