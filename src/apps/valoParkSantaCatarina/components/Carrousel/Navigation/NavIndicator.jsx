export const WhiteNavIndicator = (index, isActive) =>
  isActive ? (
    <span className="size-[clamp(9.47px,1.67vw,32px)] border-[clamp(1.18px,0.21vw,4px)] rounded-full bg-white border-white" />
  ) : (
    <span className="size-[clamp(9.47px,1.67vw,32px)] border-[clamp(1.18px,0.21vw,4px)] rounded-full border-white" />
  );
