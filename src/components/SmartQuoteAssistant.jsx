import Card from "@/components/Card";

const items = [
  {
    title: "Attach the right files",
    description:
      "Prefer GERBER + BOM + Pick & Place (if available). For repairs, share photos and any test observations.",
  },
  {
    title: "Specify quantity & timeline",
    description:
      "Prototype vs production quantity affects procurement and scheduling. Mention deadline and expected ramp.",
  },
  {
    title: "Call out critical requirements",
    description:
      "Note conformal coating, connector constraints, rework restrictions, functional test points, and any compliance needs.",
  },
  {
    title: "Share known issues (for repair)",
    description:
      "Symptoms, conditions, and what’s been tried. Clear context reduces diagnosis time and improves accuracy.",
  },
];

export default function SmartQuoteAssistant() {
  return (
    <Card className="p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-sm font-semibold text-foreground">
            Smart Quote Assistant
          </div>
          <p className="mt-2 text-sm leading-6 text-secondary">
            Provide the details below for a faster, more accurate quotation.
          </p>
        </div>
        <div
          className="rounded-xl bg-accent px-3 py-2 text-xs font-semibold text-secondary"
          aria-hidden="true"
        >
          Helper
        </div>
      </div>

      <div className="mt-5 space-y-4">
        {items.map((it) => (
          <div
            key={it.title}
            className="rounded-xl border border-secondary/10 bg-white p-4"
          >
            <div className="text-sm font-semibold text-foreground">
              {it.title}
            </div>
            <div className="mt-1 text-sm leading-6 text-secondary">
              {it.description}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

