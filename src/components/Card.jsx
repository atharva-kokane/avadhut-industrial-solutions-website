import { cn } from "@/lib/utils";

export default function Card({ className, children, ...props }) {
  return (
    <div
      className={cn(
        "rounded-xl border border-secondary/10 bg-white shadow-sm shadow-black/5",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

