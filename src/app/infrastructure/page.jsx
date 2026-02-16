import Section from "@/components/Section";
import Card from "@/components/Card";
import Button from "@/components/Button";

export const metadata = {
  title: "Infrastructure | Avadhut Industrial Solutions",
};

export default function InfrastructurePage() {
  return (
    <div>
      <Section className="pt-12 sm:pt-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-secondary/15 bg-accent px-4 py-2 text-xs font-semibold text-secondary">
              <span className="size-2 rounded-full bg-primary" aria-hidden="true" />
              Infrastructure
            </div>
            <h1 className="mt-5 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Workspaces and capability aligned to quality signals and dependable delivery.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-secondary">
              Our infrastructure supports assembly, rework, repair, and testing with a controlled approach—helping reduce risk and improve outcome consistency.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/get-quote">Request a Quote</Button>
              <Button href="/contact" variant="outline">
                Contact
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-2xl border border-secondary/10 bg-white p-6 shadow-lg shadow-black/10 sm:p-8">
              <div className="absolute -right-24 -top-24 size-64 rounded-full bg-primary/10 blur-2xl" />
              <div className="absolute -bottom-24 -left-24 size-64 rounded-full bg-accent blur-2xl" />
              <div className="relative">
                <div className="text-sm font-semibold text-foreground">
                  Capability pillars
                </div>
                <div className="mt-4 grid gap-3">
                  {[
                    "ESD-aware handling culture",
                    "Workstation organization",
                    "Rework/repair readiness",
                    "Verification-first mindset",
                  ].map((t) => (
                    <div
                      key={t}
                      className="rounded-xl border border-secondary/10 bg-accent/60 px-4 py-3 text-sm font-medium text-secondary"
                    >
                      {t}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Assembly & servicing benches",
              desc: "Organized stations designed for repeatable workmanship, clear tooling access, and controlled handling.",
            },
            {
              title: "Rework & repair stations",
              desc: "Component-level intervention capability for modern packages, with disciplined approach to minimize risk.",
            },
            {
              title: "Testing & debugging zone",
              desc: "Practical workflows for functional checks and fault isolation aligned to field behavior and outcomes.",
            },
          ].map((b) => (
            <Card key={b.title} className="p-6">
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-xl bg-accent text-primary" aria-hidden="true">
                  <span className="size-5 rounded-md border-2 border-primary/60" />
                </span>
                <div className="text-sm font-semibold text-foreground">{b.title}</div>
              </div>
              <p className="mt-3 text-sm leading-6 text-secondary">{b.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-accent/40">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              What this enables
            </h2>
            <p className="mt-3 text-sm leading-6 text-secondary">
              Capability is not just tools—it’s discipline and workflow. We focus on predictable outcomes for industrial teams.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
            {[
              {
                title: "Controlled handling",
                points: ["ESD-aware processes", "Clean workstation practices", "Reduced handling risk"],
              },
              {
                title: "Repair readiness",
                points: ["Component-level interventions", "Board-level corrections", "Minimized repeat failures"],
              },
              {
                title: "Verification focus",
                points: ["Functional checks", "Debug support where needed", "Better delivery confidence"],
              },
              {
                title: "Documentation discipline",
                points: ["Clear change notes", "Scope alignment", "Cleaner stakeholder handoffs"],
              },
            ].map((c) => (
              <Card key={c.title} className="p-6">
                <div className="text-sm font-semibold text-foreground">{c.title}</div>
                <ul className="mt-3 space-y-2 text-sm text-secondary">
                  {c.points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="mt-2 size-1.5 rounded-full bg-primary" aria-hidden="true" />
                      <span className="leading-6">{p}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-secondary/10 bg-white p-8 shadow-lg shadow-black/10 sm:p-10">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="max-w-2xl">
              <h3 className="text-xl font-semibold tracking-tight text-foreground">
                Have a specific equipment or test requirement?
              </h3>
              <p className="mt-3 text-sm leading-6 text-secondary">
                Share your acceptance criteria and constraints. We’ll confirm feasibility and propose a verification approach.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href="/get-quote">Request Quote</Button>
              <Button href="/contact" variant="outline">
                Ask a question
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

