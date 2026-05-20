export default function CircleIcon({ className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <circle
        cx="12"
        cy="12"
        r="6.75"
        fill="fillCurrent"
        stroke="currentColor"
        stroke-width="1.5"
      />
      <circle
        cx="12"
        cy="12"
        r="11.25"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
      />
    </svg>
  );
}
