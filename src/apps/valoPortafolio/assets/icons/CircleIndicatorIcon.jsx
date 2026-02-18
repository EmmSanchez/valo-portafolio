export const CircleIndicatorIcon = ({ isActive = false, className = "" }) => {
  if (isActive) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className={className}
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="7.5" fill="#00245C" />
        <circle cx="12" cy="12" r="11.25" stroke="#00245C" strokeWidth="1.5" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="6.75" stroke="white" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="11.25" stroke="white" strokeWidth="1.5" />
    </svg>
  );
};
