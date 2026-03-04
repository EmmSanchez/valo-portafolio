import BackButton from "@/components/shared/Buttons/BackButton";
import KuulaComponent from "@/components/shared/Kuula/KuulaComponent";

export default function Nave12Recorrido360() {
  return (
    <div className="flex w-dvw h-dvh default-padding pointer-events-none">
      <KuulaComponent
        src={
          "https://kuula.co/share/collection/7DZWr?logo=-1&info=0&fs=0&vr=0&zoom=1&initload=1&thumbs=-1&margin=30&alpha=0.81&inst=0&keys=0"
        }
      />

      <BackButton
        to="/valoPark/santaCatarina/masterplan/naves-industriales/nave-12"
        className="self-end pointer-events-auto bg-santa-catarina hover:bg-santa-catarina-grey"
      />
    </div>
  );
}
