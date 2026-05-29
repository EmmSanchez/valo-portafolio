export default function SocialIcon({
  icon,
  href,
  className = "",
  bgColor = "bg-white",
  hoverBgColor = "hover:bg-valo",
}) {
  const SocialIcon = icon;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex justify-center items-center size-[clamp(48px,4.69vw,90px)] hover:cursor-pointer ${bgColor} ${hoverBgColor}`}
    >
      <span className="relative size-[clamp(28px,2.6vw,50px)]">
        <span className="absolute inset-0">
          <SocialIcon className={className} />
        </span>
      </span>
    </a>
  );
}
