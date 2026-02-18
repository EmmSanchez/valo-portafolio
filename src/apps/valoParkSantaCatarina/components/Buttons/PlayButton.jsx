import { VideoIconVPSC } from "../../assets/icons/VideoIcon";

export default function PlayButtonVPSC() {
  return (
    <div className="flex justify-center items-center size-[clamp(48px,4.69vw,90px)] bg-santa-catarina hover:bg-santa-catarina-grey hover:cursor-pointer">
      <span className="relative size-[clamp(28px,2.6vw,50px)]">
        <span className="absolute inset-0">
          <VideoIconVPSC />
        </span>
      </span>
    </div>
  );
}
