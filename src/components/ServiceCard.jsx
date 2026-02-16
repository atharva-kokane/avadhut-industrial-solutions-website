import Card from "@/components/Card";
import { cn } from "@/lib/utils";

function Icon({ className }) {
  return (
    <div
      className={cn(
        "grid size-10 place-items-center rounded-xl bg-accent text-primary",
        className,
      )}
      aria-hidden="true"
    >
      <div className="size-5 rounded-md border-2 border-primary/60" />
    </div>
  );
}

export default function ServiceCard({
  title,
  description,
  bullets,
  url = "",
  index = 0,
}) {
  return (
    <Card className={`h-full p-7 overflow-hidden border-0 ${
        index % 2 === 0
          ? "bg-gradient-to-b from-primary/85 via-primary/0 to-white md:bg-gradient-to-r from-primary/85 via-primary/0 to-white"
          : "bg-gradient-to-b from-primary/85 via-primary/0 to-white md:bg-gradient-to-l from-primary/85 via-primary/0 to-white"
      }`}>
      <div className={`flex flex-col gap-4 lg:flex-row lg:items-start ${
      index % 2 !== 0 ? "lg:flex-row-reverse" : ""
    }`}>
        <img className="w-sm rounded-xl" src={url} alt={title} />
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-foreground">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-secondary">{description}</p>
          {bullets?.length ? (
            <ul className="mt-4 space-y-2 text-sm text-secondary">
              {bullets.slice(0, 3).map((b) => (
                <li key={b} className="flex gap-2">
                  <span
                    className="mt-2 size-1.5 shrink-0 rounded-full bg-primary"
                    aria-hidden="true"
                  />
                  <span className="leading-6">{b}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </Card>
  );
}

