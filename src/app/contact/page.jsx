import Section from "@/components/Section";
import Card from "@/components/Card";
import Button from "@/components/Button";
import ContactForm from "@/components/ContactForm";
import { company } from "@/lib/content";

export const metadata = {
  title: "Contact | Avadhut Industrial Solutions",
};

export default function ContactPage() {
  const waHref = `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(
    "Hello Avadhut Industrial Solutions — I’d like to connect.",
  )}`;

  return (
    <div>
      <Section className="pt-12 sm:pt-16">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-secondary/15 bg-accent px-4 py-2 text-xs font-semibold text-secondary">
              <span className="size-2 rounded-full bg-primary" aria-hidden="true" />
              Contact
            </div>
            <h1 className="mt-5 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Let’s align scope, feasibility, and lead time.
            </h1>
            <p className="mt-5 text-base leading-7 text-secondary">
              For general queries use the form. For quotations with file uploads, use the quote page for fastest processing.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="/get-quote">Get Quote</Button>
            <Button href={waHref} variant="outline">
              WhatsApp
            </Button>
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
          <div className="lg:col-span-5">
            <div className="space-y-6 lg:sticky lg:top-24">
              <Card className="p-6 sm:p-8">
                <div className="text-sm font-semibold text-foreground">
                  Business contact
                </div>
                <div className="mt-4 space-y-3 text-sm text-secondary">
                  <div>
                    <div className="text-xs font-semibold text-secondary">Email</div>
                    <a className="mt-1 inline-block font-semibold text-foreground hover:opacity-90" href={`mailto:${company.email}`}>
                      {company.email}
                    </a>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-secondary">Phone</div>
                    <a className="mt-1 inline-block font-semibold text-foreground hover:opacity-90" href={`tel:${company.phone}`}>
                      {company.phone}
                    </a>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-secondary">Address</div>
                    <div className="mt-1 text-sm leading-6 text-secondary">
                      {company.address}
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <a
                    href={waHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-white shadow-sm shadow-black/5 transition-colors hover:bg-primary/90 active:bg-primary/85"
                  >
                    WhatsApp
                  </a>
                  <a
                    href={`mailto:${company.email}`}
                    className="inline-flex items-center justify-center rounded-xl border border-secondary/20 bg-white px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent active:bg-accent/80"
                  >
                    Email
                  </a>
                </div>
              </Card>

              <Card className="overflow-hidden">
                <div className="border-b border-secondary/10 bg-white px-6 py-4">
                  <div className="text-sm font-semibold text-foreground">
                    Google Map (placeholder)
                  </div>
                  <div className="mt-1 text-xs font-medium text-secondary">
                    Replace with embed when location is finalized
                  </div>
                </div>
                <div className="grid h-[280px] place-items-center bg-accent text-sm font-semibold text-secondary">
                  Map Embed Placeholder
                </div>
              </Card>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

