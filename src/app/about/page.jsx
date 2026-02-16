import Section from "@/components/Section";
import Card from "@/components/Card";
import Button from "@/components/Button";

export const metadata = {
  title: "About | Avadhut Industrial Solutions",
};

export default function AboutPage() {
  return (
    <div>
      <Section className="pt-12 sm:pt-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-secondary/15 bg-accent px-4 py-2 text-xs font-semibold text-secondary">
              <span className="size-2 rounded-full bg-primary" aria-hidden="true" />
              About
            </div>
            <h1 className="mt-5 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Corporate-ready electronics execution with an engineering-first mindset.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-secondary">
              Avadhut Industrial Solutions supports industrial electronics with structured assembly, transformer winding, controlled rework/repair, and testing & debugging services. We aim for dependable outcomes through disciplined handling and verification.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/get-quote">Request a Quote</Button>
              <Button href="/services" variant="outline">
                Explore Services
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-secondary/10 bg-white p-6 shadow-lg shadow-black/10 sm:p-8">
              <div className="text-sm font-semibold text-foreground">
                Operating principles
              </div>
              <div className="mt-4 space-y-3 text-sm text-secondary">
                {[
                  "Controlled handling and workmanship discipline",
                  "Verification-oriented delivery with practical checklists",
                  "Clear communication and scoped commitments",
                  "Serviceability and reliability mindset",
                ].map((t) => (
                  <div key={t} className="flex gap-2">
                    <span className="mt-2 size-1.5 rounded-full bg-primary" aria-hidden="true" />
                    <span className="leading-6">{t}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-xl border border-secondary/10 bg-accent p-4">
                <div className="text-xs font-semibold text-secondary">
                  Typical scope
                </div>
                <div className="mt-2 text-sm font-semibold text-foreground">
                  Prototypes, low-to-mid volume builds, repairs, rework, and verification
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-accent/40">
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Mission",
              desc: "Enable industrial teams to ship and service electronics with confidence through dependable execution and verification-driven delivery.",
            },
            {
              title: "Approach",
              desc: "Process clarity, controlled handling, and structured checks—minimizing risk while improving turnaround predictability.",
            },
            {
              title: "Outcomes",
              desc: "Higher yield, fewer surprises, and cleaner handoffs across manufacturing, service, and engineering stakeholders.",
            },
          ].map((b) => (
            <Card key={b.title} className="p-6">
              <div className="text-sm font-semibold text-foreground">{b.title}</div>
              <p className="mt-2 text-sm leading-6 text-secondary">{b.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-white">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              Quality & handling discipline
            </h2>
            <p className="mt-3 text-sm leading-6 text-secondary">
              We build and service electronics using a controlled mindset. From ESD-safe handling to verification steps, our workflow prioritizes reliability, clarity, and repeatability.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
            {[
              {
                title: "ESD-safe practices",
                desc: "Handling discipline aligned to sensitive electronic assemblies and repair workflows.",
              },
              {
                title: "Verification mindset",
                desc: "Functional checks and structured validation to improve confidence in delivery.",
              },
              {
                title: "Traceable changes",
                desc: "Repair and rework steps documented clearly to reduce repeat failures and ambiguity.",
              },
              {
                title: "Business-ready communication",
                desc: "Clear scope alignment, lead time signaling, and technical clarifications with stakeholders.",
              },
            ].map((c) => (
              <Card key={c.title} className="p-6">
                <div className="text-sm font-semibold text-foreground">{c.title}</div>
                <div className="mt-2 text-sm leading-6 text-secondary">{c.desc}</div>
              </Card>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}

