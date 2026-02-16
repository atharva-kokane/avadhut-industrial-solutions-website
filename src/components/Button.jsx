import Link from "next/link";
import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold tracking-tight transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:pointer-events-none disabled:opacity-60";

const variants = {
  primary:
    "bg-primary text-white shadow-sm hover:bg-primary/90 active:bg-primary/85",
  outline:
    "border border-secondary/25 bg-white text-foreground hover:bg-accent active:bg-accent/80",
};

export default function Button({
  variant = "primary",
  href,
  className,
  children,
  ...props
}) {
  const classes = cn(base, variants[variant] || variants.primary, className);

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

