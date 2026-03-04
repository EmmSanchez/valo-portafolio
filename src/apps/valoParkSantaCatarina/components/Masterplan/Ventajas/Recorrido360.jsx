import BackButton from "@/components/shared/Buttons/BackButton";
import KuulaComponent from "@/components/shared/Kuula/KuulaComponent";

export default function Recorrido360() {
  return (
    <div className="flex w-dvw h-dvh default-padding pointer-events-none">
      <KuulaComponent
        src={
          "https://kuula.co/share/collection/7DZBj?logo=-1&info=0&fs=1&vr=1&zoom=1&initload=0&thumbs=-1"
        }
      />

      <BackButton
        to="/valoPark/santaCatarina/masterplan/ventajas-de-proyecto"
        className="relative self-end pointer-events-auto bg-santa-catarina hover:bg-santa-catarina-grey"
      />
    </div>
  );
}
