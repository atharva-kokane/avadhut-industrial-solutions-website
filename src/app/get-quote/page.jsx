import Section from "@/components/Section";
import QuoteForm from "@/components/QuoteForm";
import SmartQuoteAssistant from "@/components/SmartQuoteAssistant";
import Button from "@/components/Button";

export const metadata = {
  title: "Get Quote | Avadhut Industrial Solutions",
};

export default function GetQuotePage() {
  return (
    <div>
      <Section className="pt-12 sm:pt-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-secondary/15 bg-accent px-4 py-2 text-xs font-semibold text-secondary">
              <span className="size-2 rounded-full bg-primary" aria-hidden="true" />
              Get Quote
            </div>
            <h1 className="mt-5 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Request a structured quotation for electronics manufacturing or service.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-secondary">
              Submit requirements for PCB assembly, transformer winding, rework/repair, testing & debugging, or consultancy. Attach relevant files for best accuracy.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/services" variant="outline">
                View Services
              </Button>
              <Button href="/contact">Contact</Button>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-secondary/10 bg-white p-6 shadow-lg shadow-black/10 sm:p-8">
              <div className="text-sm font-semibold text-foreground">
                Recommended attachments
              </div>
              <div className="mt-4 space-y-3 text-sm text-secondary">
                {[
                  "GERBER + BOM + Pick & Place (for assembly)",
                  "Photos + symptom notes (for repair)",
                  "Any test observations or reports",
                  "Quantity and target timeline",
                ].map((t) => (
                  <div key={t} className="flex gap-2">
                    <span className="mt-2 size-1.5 rounded-full bg-primary" aria-hidden="true" />
                    <span className="leading-6">{t}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-xl border border-secondary/10 bg-accent p-4 text-xs font-semibold text-secondary">
                Tip: Provide acceptance criteria for fastest alignment.
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-8">
            <QuoteForm />
          </div>
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <SmartQuoteAssistant />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

