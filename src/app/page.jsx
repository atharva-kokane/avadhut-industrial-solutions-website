import Section from "@/components/Section";
import Button from "@/components/Button";
import Card from "@/components/Card";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/lib/content";

function HeroVisual() {
  return (
    <div className="relative">
      <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-[radial-gradient(ellipse_at_top,rgba(114,191,68,0.22),rgba(242,244,247,0.65),rgba(255,255,255,1))]" />
      <div className="rounded-2xl border border-secondary/10 bg-white p-6 shadow-lg shadow-black/10 sm:p-8">
        <div className="flex items-center justify-between gap-4">
          <div className="text-sm font-semibold text-foreground">
            Engineering-driven execution
          </div>
          <div className="rounded-xl bg-accent px-3 py-2 text-xs font-semibold text-secondary">
            B2B | Industrial
          </div>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-4">
          {[
            { label: "Controlled handling", value: "ESD-safe process" },
            { label: "Quality focus", value: "Verification-first" },
            { label: "Delivery readiness", value: "Production aligned" },
            { label: "Support", value: "Repair + service" },
          ].map((i) => (
            <div
              key={i.label}
              className="rounded-xl border border-secondary/10 bg-accent/60 p-4"
            >
              <div className="text-xs font-semibold text-secondary">
                {i.label}
              </div>
              <div className="mt-2 text-sm font-semibold text-foreground">
                {i.value}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-xl border border-secondary/10 bg-white p-4">
          <div className="text-xs font-semibold text-secondary">
            Typical engagement
          </div>
          <div className="mt-2 grid gap-2 text-sm text-secondary sm:grid-cols-2">
            <div className="flex gap-2">
              <span
                className="mt-2 size-1.5 rounded-full bg-primary"
                aria-hidden="true"
              />
              Prototype & low-volume builds
            </div>
            <div className="flex gap-2">
              <span
                className="mt-2 size-1.5 rounded-full bg-primary"
                aria-hidden="true"
              />
              Repair, rework & validation
            </div>
            <div className="flex gap-2">
              <span
                className="mt-2 size-1.5 rounded-full bg-primary"
                aria-hidden="true"
              />
              Testing & debugging support
            </div>
            <div className="flex gap-2">
              <span
                className="mt-2 size-1.5 rounded-full bg-primary"
                aria-hidden="true"
              />
              Consultancy for reliability
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="bg-[url('/hero-bg-md.jpg')] md:bg-[url('/hero-bg.jpg')] md:bg-contain bg-no-repeat ">
      <Section className="pt-12 sm:pt-16 lg:pt-18">
        <div className="grid items-center gap-10 lg:grid-cols-1 lg:gap-12">
          <div>
            {/* <div className="inline-flex items-center gap-2 rounded-full border border-secondary/15 bg-accent px-4 py-2 text-xs font-semibold text-secondary">
              <span className="size-2 rounded-full bg-primary" aria-hidden="true" />
              Avadhut Industrial Solutions
            </div>*/}
            <h1 className="mt-5 md:mt-10 md:mr-50 text-2xl md:text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Precision electronics manufacturing & service for industrial-grade
              outcomes.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-secondary">
              Corporate-grade execution for PCB assembly, transformer winding,
              electronics rework & repair, PCB servicing, testing & debugging,
              and engineering consultancy—built around controlled processes and
              verification.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="/get-quote" className="w-full sm:w-auto">
                Request a Quote
              </Button>
              <Button
                href="/services"
                variant="outline"
                className="w-full sm:w-auto"
              >
                View Services
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {[
                { k: "Process", v: "Structured handling" },
                { k: "Quality", v: "Inspection-ready" },
                { k: "Support", v: "Repair to delivery" },
              ].map((s) => (
                <div
                  key={s.k}
                  className="rounded-xl border border-secondary/50 bg-white px-4 py-3 pr-30 shadow-sm shadow-black/5"
                >
                  <div className="text-xs font-semibold text-secondary">
                    {s.k}
                  </div>
                  <div className="mt-1 text-sm font-semibold text-foreground">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* <HeroVisual /> */}
        </div>
      </Section>

      <Section className="bg-white">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              Services built for reliability, traceability, and delivery
              confidence
            </h2>
            <p className="mt-3 text-sm leading-6 text-secondary">
              Production-minded processes with a practical engineering
              approach—ideal for manufacturers, integrators, and industrial
              teams.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-6">
          <div className="grid gap-6 grid-cols-1">
            {services.slice(0, 2).map((s, index) => (
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
        </div>
        <div className="flex flex-wrap items-center justify-center mt-10">
          <Button href="/services">
            See all services
          </Button>
        </div>
      </Section>

      <Section className="bg-accent/40">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-[radial-gradient(ellipse_at_top,rgba(114,191,68,0.18),rgba(242,244,247,1))]" />
            <div className="rounded-2xl border border-secondary/10 bg-white p-6 shadow-lg shadow-black/10 sm:p-8">
              <div className="text-xs font-semibold text-secondary">
                About Avadhut Industrial Solutions
              </div>
              <div className="mt-3 text-lg font-semibold tracking-tight text-foreground">
                Minimal noise. Maximum engineering clarity.
              </div>
              <p className="mt-3 text-sm leading-6 text-secondary">
                We support industrial electronics with hands-on execution and a
                practical approach—focused on controlled handling, dependable
                workmanship, and verification.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "ESD-safe handling culture",
                  "Clean documentation discipline",
                  "Serviceability mindset",
                  "Delivery-oriented planning",
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
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              A premium B2B partner for manufacturing and field service needs
            </h2>
            <p className="mt-4 text-sm leading-6 text-secondary">
              When industrial electronics fail, timelines compress and quality
              risk rises. We help teams recover control through structured
              rework/repair, consistent assembly, and engineering-focused
              debugging.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/about">Company overview</Button>
              <Button href="/contact" variant="outline">
                Talk to us
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              Why teams choose us
            </h2>
            <p className="mt-3 text-sm leading-6 text-secondary">
              Corporate-ready execution that prioritizes quality signals, clear
              communication, and verification outcomes.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Quality signals",
              desc: "Inspection-oriented workmanship with verification focus.",
            },
            {
              title: "Engineering clarity",
              desc: "Practical diagnostics and scoped recommendations.",
            },
            {
              title: "Controlled process",
              desc: "ESD-safe handling and repeatable execution patterns.",
            },
            {
              title: "Business discipline",
              desc: "Timelines, communication, and delivery expectations aligned.",
            },
          ].map((f) => (
            <Card key={f.title} className="p-6">
              <div className="text-sm font-semibold text-foreground">
                {f.title}
              </div>
              <div className="mt-2 text-sm leading-6 text-secondary">
                {f.desc}
              </div>
              <div className="mt-5 h-px w-full bg-secondary/10" />
              <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-secondary">
                <span
                  className="size-2 rounded-full bg-primary"
                  aria-hidden="true"
                />
                Premium B2B readiness
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-accent/40">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              Industries served
            </h2>
            <p className="mt-3 text-sm leading-6 text-secondary">
              We support industrial electronics across multiple domains where
              reliability and turnaround matter.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-3">
            {[
              "Industrial automation",
              "Power electronics",
              "Instrumentation",
              "Energy & utilities",
              "Manufacturing equipment",
              "Control systems",
              "Embedded products",
              "R&D prototypes",
              "Service & field returns",
            ].map((i) => (
              <div
                key={i}
                className="rounded-xl border border-secondary/10 bg-white px-4 py-3 text-sm font-medium text-secondary shadow-sm shadow-black/5"
              >
                {i}
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              Infrastructure designed for dependable output
            </h2>
            <p className="mt-3 text-sm leading-6 text-secondary">
              ESD-safe work zones, verification practices, and tooling
              readiness—supporting assembly, rework, repair, and testing.
            </p>
          </div>
          <Button href="/infrastructure" variant="outline">
            View infrastructure
          </Button>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Assembly & servicing benches",
              desc: "Organized stations for repeatable workmanship and controlled handling.",
            },
            {
              title: "Rework & repair capability",
              desc: "Component-level intervention with practical diagnostics and verification.",
            },
            {
              title: "Testing & validation",
              desc: "Functional checks and debugging workflows aligned to field outcomes.",
            },
          ].map((b) => (
            <Card key={b.title} className="p-6">
              <div className="flex items-center gap-3">
                <span
                  className="grid size-10 place-items-center rounded-xl bg-accent text-primary"
                  aria-hidden="true"
                >
                  <span className="size-5 rounded-md border-2 border-primary/60" />
                </span>
                <div className="text-sm font-semibold text-foreground">
                  {b.title}
                </div>
              </div>
              <p className="mt-3 text-sm leading-6 text-secondary">{b.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-accent/55">
        <div className="rounded-2xl border border-secondary/10 bg-white p-8 shadow-lg shadow-black/10 sm:p-10">
          <div className="grid items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="text-xs font-semibold text-secondary">
                Clear next step
              </div>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                Send your requirement. Get a structured quotation.
              </h2>
              <p className="mt-3 text-sm leading-6 text-secondary">
                Provide scope, quantity, timeline, and attach files. We’ll
                respond with feasibility, lead time, and commercial terms.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:flex-col">
              <Button href="/get-quote" className="w-full">
                Request Quote
              </Button>
              <Button href="/contact" variant="outline" className="w-full">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
