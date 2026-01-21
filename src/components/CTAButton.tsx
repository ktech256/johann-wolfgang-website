import Link from "next/link";

type CTAButtonProps = {
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
};

export function CTAButton({
  label,
  href,
  onClick,
  variant = "primary",
  className = "",
}: CTAButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-400";
  const styles =
    variant === "primary"
      ? "bg-amber-400 text-black shadow-[0_0_25px_rgba(255,202,128,0.3)] hover:bg-amber-300"
      : "border border-amber-400/60 text-amber-100 hover:border-amber-300 hover:text-amber-50";

  if (href) {
    return (
      <Link href={href} className={`${base} ${styles} ${className}`}>
        {label}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${base} ${styles} ${className}`}
    >
      {label}
    </button>
  );
}
