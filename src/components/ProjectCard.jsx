import Card from "@/components/Card";

export default function ProjectCard({ title, description, tags = [] }) {
  return (
    <Card className="h-full p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-foreground">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-secondary">{description}</p>
        </div>
        <div
          className="hidden shrink-0 rounded-xl border border-secondary/10 bg-accent px-3 py-2 text-xs font-semibold text-secondary sm:block"
          aria-hidden="true"
        >
          Case
        </div>
      </div>
      {tags?.length ? (
        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-secondary/15 bg-white px-3 py-1 text-xs font-medium text-secondary"
            >
              {t}
            </span>
          ))}
        </div>
      ) : null}
    </Card>
  );
}

