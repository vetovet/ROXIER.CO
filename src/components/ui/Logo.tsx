interface LogoProps {
  size?: "sm" | "md" | "lg";
  showWordmark?: boolean;
}

export default function Logo({ size = "md", showWordmark = true }: LogoProps) {
  const sizes = { sm: 24, md: 32, lg: 48 };
  const px = sizes[size];
  const textSize = size === "sm" ? "text-lg" : size === "md" ? "text-xl" : "text-3xl";

  return (
    <div className="flex items-center gap-2.5">
      {/* X Mark */}
      <svg width={px} height={px} viewBox="0 0 32 32" fill="none" aria-hidden>
        <path
          d="M4 4 L16 16 M28 4 L16 16 M16 16 L4 28 M16 16 L28 28"
          stroke="#FF2E63"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {showWordmark && (
        <span
          className={`${textSize} tracking-tight leading-none`}
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            color: "var(--text)",
            letterSpacing: "-0.03em",
          }}
        >
          ROXIER{" "}
          <span style={{ color: "#FF2E63", fontWeight: 800 }}>Co.</span>
        </span>
      )}
    </div>
  );
}
