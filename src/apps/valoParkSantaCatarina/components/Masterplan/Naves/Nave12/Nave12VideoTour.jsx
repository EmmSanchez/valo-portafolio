import BackButton from "@/components/shared/Buttons/BackButton";

export default function Nave12VideoTour() {
  return (
    <div className="flex w-dvw h-dvh default-padding pointer-events-none">
      <div className="absolute inset-0 w-dvw h-dvh flex items-center justify-center pointer-events-auto">
        <p className="bg-green-500">VTI Nave 12</p>
      </div>

      <BackButton
        to="/valoPark/santaCatarina/masterplan/naves-industriales/nave-12"
        className="self-end pointer-events-auto bg-santa-catarina hover:bg-santa-catarina-grey"
      />
    </div>
  );
}
