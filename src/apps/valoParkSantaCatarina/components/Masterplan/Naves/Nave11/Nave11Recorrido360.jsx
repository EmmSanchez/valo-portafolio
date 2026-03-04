import BackButton from "@/components/shared/Buttons/BackButton";
import KuulaComponent from "@/components/shared/Kuula/KuulaComponent";

export default function Nave11Recorrido360() {
  return (
    <div className="flex w-dvw h-dvh default-padding pointer-events-none">
      <KuulaComponent
        src={
          "https://kuula.co/share/collection/7DZR8?logo=0&info=1&fs=1&vr=1&sd=1&thumbs=1"
        }
      />

      <BackButton
        to="/valoPark/santaCatarina/masterplan/naves-industriales/nave-11"
        className="self-end pointer-events-auto bg-santa-catarina hover:bg-santa-catarina-grey"
      />
    </div>
  );
}
