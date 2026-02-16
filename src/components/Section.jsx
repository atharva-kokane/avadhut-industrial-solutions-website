import { cn } from "@/lib/utils";

export default function Section({
  as: Comp = "section",
  className,
  innerClassName,
  children,
  ...props
}) {
  return (
    <Comp className={cn("py-14 sm:py-18 lg:py-22", className)} {...props}>
      <div className={cn("mx-auto w-full max-w-7xl px-4 sm:px-5", innerClassName)}>
        {children}
      </div>
    </Comp>
  );
}

