import Link from "next/link";
import Section from "@/components/Section";
import { company, navLinks } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-secondary/10 bg-white">
      <Section className="py-12 sm:py-14">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="text-base font-semibold tracking-tight text-foreground">
              {company.name}
            </div>
            <p className="mt-3 max-w-md text-sm leading-6 text-secondary">
              Electronics PCB Assembly, Transformer Winding, Electronics Rework & Repair, PCB Servicing, Testing & Debugging, and Electronics Consultancy.
            </p>
            <div className="mt-5 space-y-2 text-sm text-secondary">
              <div>
                <span className="font-semibold text-foreground">Email:</span>{" "}
                <a className="hover:text-foreground" href={`mailto:${company.email}`}>
                  {company.email}
                </a>
              </div>
              <div>
                <span className="font-semibold text-foreground">Phone:</span>{" "}
                <a className="hover:text-foreground" href={`tel:${company.phone}`}>
                  {company.phone}
                </a>
              </div>
              <div>
                <span className="font-semibold text-foreground">Address:</span>{" "}
                <span>{company.address}</span>
              </div>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-3">
            <div>
              <div className="text-sm font-semibold text-foreground">Company</div>
              <ul className="mt-3 space-y-2 text-sm text-secondary">
                <li>
                  <Link className="hover:text-foreground" href="/about">
                    About
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-foreground" href="/infrastructure">
                    Infrastructure
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-foreground" href="/projects">
                    Projects
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold text-foreground">Services</div>
              <ul className="mt-3 space-y-2 text-sm text-secondary">
                <li>
                  <Link className="hover:text-foreground" href="/services">
                    All Services
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-foreground" href="/get-quote">
                    Request a Quote
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-foreground" href="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold text-foreground">Quick Links</div>
              <ul className="mt-3 space-y-2 text-sm text-secondary">
                {navLinks.slice(0, 5).map((l) => (
                  <li key={l.href}>
                    <Link className="hover:text-foreground" href={l.href}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-secondary/10 pt-6 text-xs text-secondary sm:flex-row sm:items-center sm:justify-between">
          <div>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </div>
          <div className="flex flex-wrap gap-3">
            <span className="rounded-full border border-secondary/15 bg-accent px-3 py-1">
              ESD-safe handling
            </span>
            <span className="rounded-full border border-secondary/15 bg-accent px-3 py-1">
              Process-driven quality
            </span>
            <span className="rounded-full border border-secondary/15 bg-accent px-3 py-1">
              Engineering-first delivery
            </span>
          </div>
        </div>
      </Section>
    </footer>
  );
}

