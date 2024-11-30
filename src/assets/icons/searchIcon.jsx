export default function SearchIcon({ className }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 30 30"
      width="20px"
      height="20px"
    >
      <circle
        style={{ fill: "none", stroke: "inherit", strokeWidth: 2, strokeMiterlimit: 10 }}
        cx="13"
        cy="13"
        r="9"
      />
      <line
        style={{
          fill: "none",
          stroke: "inherit",
          strokeWidth: 2,
          strokeLinecap: "round",
          strokeMiterlimit: 10,
        }}
        x1="26"
        y1="26"
        x2="19.437"
        y2="19.437"
      />
    </svg>
  );
}
