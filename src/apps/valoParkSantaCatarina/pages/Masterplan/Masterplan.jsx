import BackButton from "@/components/shared/Buttons/BackButton";

export default function Masterplan() {
  return (
    <div className="w-dvw h-dvh flex default-padding">
      <BackButton
        to="/valoPark/santaCatarina"
        className="self-end bg-santa-catarina hover:bg-santa-catarina-grey"
      />
    </div>
  );
}
