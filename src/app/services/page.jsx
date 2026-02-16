import Section from "@/components/Section";
import Button from "@/components/Button";
import ServiceCard from "@/components/ServiceCard";
import Card from "@/components/Card";
import { services } from "@/lib/content";

export const metadata = {
  title: "Services | Avadhut Industrial Solutions",
};

export default function ServicesPage() {
  return (
    <div>
      <Section className="pt-12 sm:pt-16">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-secondary/15 bg-accent px-4 py-2 text-xs font-semibold text-secondary">
              <span className="size-2 rounded-full bg-primary" aria-hidden="true" />
              Services
            </div>
            <h1 className="mt-5 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Industrial electronics services built for quality signals and delivery confidence.
            </h1>
            <p className="mt-5 text-base leading-7 text-secondary">
              From assembly and winding to rework, repair, and debugging—each service is aligned to controlled handling and verification-focused outcomes.
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
        <div className="grid gap-6 grid-cols-1">
          {services.map((s, index) => (
            <ServiceCard
              key={s.title}
              index={index}
              url={s.url}
              title={s.title}
              description={s.description}
              bullets={s.bullets}
            />
          ))}
        </div>
      </Section>

      <Section className="bg-accent/40">
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Scope alignment",
              desc: "We clarify requirements early—inputs, outputs, acceptance points, and lead time signals.",
            },
            {
              title: "Execution discipline",
              desc: "Controlled handling, workmanship focus, and a practical engineering mindset across tasks.",
            },
            {
              title: "Verification & handoff",
              desc: "Structured checks and communication to reduce ambiguity at delivery.",
            },
          ].map((b) => (
            <Card key={b.title} className="p-6">
              <div className="text-sm font-semibold text-foreground">{b.title}</div>
              <p className="mt-2 text-sm leading-6 text-secondary">{b.desc}</p>
            </Card>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-secondary/10 bg-white p-8 shadow-lg shadow-black/10 sm:p-10">
          <div className="grid items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="text-xs font-semibold text-secondary">
                Fastest way to proceed
              </div>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
                Share files & requirements for an accurate quote
              </h2>
              <p className="mt-3 text-sm leading-6 text-secondary">
                For assembly, attach GERBER/BOM and quantity. For repair, attach photos and symptom notes. We’ll respond with scope and commercial terms.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:flex-col">
              <Button href="/get-quote" className="w-full">
                Request Quote
              </Button>
              <Button href="/contact" variant="outline" className="w-full">
                Ask a question
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

