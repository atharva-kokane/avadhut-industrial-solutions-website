import Section from "@/components/Section";
import Button from "@/components/Button";
import ProjectCard from "@/components/ProjectCard";
import Card from "@/components/Card";
import { projectHighlights } from "@/lib/content";

export const metadata = {
  title: "Projects | Avadhut Industrial Solutions",
};

export default function ProjectsPage() {
  return (
    <div>
      <Section className="pt-12 sm:pt-16">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-secondary/15 bg-accent px-4 py-2 text-xs font-semibold text-secondary">
              <span className="size-2 rounded-full bg-primary" aria-hidden="true" />
              Projects
            </div>
            <h1 className="mt-5 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Selected work highlights across assembly, repair, and verification.
            </h1>
            <p className="mt-5 text-base leading-7 text-secondary">
              Below are representative engagement types. Specific client details may be protected under confidentiality.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="/get-quote">Request a Quote</Button>
            <Button href="/contact" variant="outline">
              Contact
            </Button>
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projectHighlights.map((p) => (
            <ProjectCard
              key={p.title}
              title={p.title}
              description={p.description}
              tags={p.tags}
            />
          ))}
        </div>
      </Section>

      <Section className="bg-accent/40">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              How projects typically run
            </h2>
            <p className="mt-3 text-sm leading-6 text-secondary">
              We keep execution disciplined and communication clear—so stakeholders stay aligned from scope to delivery.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
            {[
              {
                title: "1. Intake",
                desc: "Understand requirements, files, constraints, and acceptance criteria.",
              },
              {
                title: "2. Plan",
                desc: "Confirm scope, lead time signals, and verification approach.",
              },
              {
                title: "3. Execute",
                desc: "Assembly, rework/repair, and disciplined handling per process.",
              },
              {
                title: "4. Verify",
                desc: "Functional checks and delivery handoff aligned to expectations.",
              },
            ].map((s) => (
              <Card key={s.title} className="p-6">
                <div className="text-sm font-semibold text-foreground">{s.title}</div>
                <div className="mt-2 text-sm leading-6 text-secondary">{s.desc}</div>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-secondary/10 bg-white p-8 shadow-lg shadow-black/10 sm:p-10">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="max-w-2xl">
              <h3 className="text-xl font-semibold tracking-tight text-foreground">
                Want to discuss your requirement?
              </h3>
              <p className="mt-3 text-sm leading-6 text-secondary">
                Send your scope and files. We’ll propose a feasible plan with a structured quote.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href="/get-quote">Request Quote</Button>
              <Button href="/services" variant="outline">
                View Services
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

