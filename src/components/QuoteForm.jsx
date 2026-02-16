"use client";

import { useMemo, useState } from "react";
import Button from "@/components/Button";
import Card from "@/components/Card";
import { services } from "@/lib/content";

function Field({ label, required, hint, children }) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3">
        <label className="text-sm font-semibold text-foreground">
          {label} {required ? <span className="text-primary">*</span> : null}
        </label>
        {hint ? <div className="text-xs font-medium text-secondary">{hint}</div> : null}
      </div>
      <div className="mt-2">{children}</div>
    </div>
  );
}

const inputClass =
  "w-full rounded-xl border border-secondary/15 bg-white px-4 py-3 text-sm text-foreground shadow-sm shadow-black/5 placeholder:text-secondary/70 focus:border-primary/35 focus:outline-none focus:ring-2 focus:ring-primary/20";

export default function QuoteForm() {
  const serviceOptions = useMemo(() => services.map((s) => s.title), []);
  const [status, setStatus] = useState("idle");

  function onSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    window.setTimeout(() => setStatus("submitted"), 650);
  }

  return (
    <Card className="p-6 sm:p-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold tracking-tight text-foreground">
            Request a Business Quote
          </h2>
          <p className="mt-2 text-sm leading-6 text-secondary">
            Share your requirement and attach files (if applicable). We’ll respond with scope, lead time, and commercial details.
          </p>
        </div>
        <div className="rounded-xl border border-secondary/10 bg-accent px-3 py-2 text-xs font-semibold text-secondary">
          Typical response: 1–2 business days
        </div>
      </div>

      {status === "submitted" ? (
        <div className="mt-6 rounded-xl border border-primary/20 bg-primary/10 p-4 text-sm text-foreground">
          <div className="font-semibold">Submission received.</div>
          <div className="mt-1 text-secondary">
            Please keep your phone/email reachable for quick technical clarifications.
          </div>
        </div>
      ) : null}

      <form className="mt-8 grid gap-6" onSubmit={onSubmit}>
        <div className="grid gap-6 sm:grid-cols-2">
          <Field label="Full Name" required>
            <input className={inputClass} name="name" placeholder="Your name" required />
          </Field>
          <Field label="Company / Organization" required>
            <input
              className={inputClass}
              name="company"
              placeholder="Company name"
              required
            />
          </Field>
          <Field label="Business Email" required>
            <input
              className={inputClass}
              type="email"
              name="email"
              placeholder="name@company.com"
              required
            />
          </Field>
          <Field label="Phone / WhatsApp" required>
            <input
              className={inputClass}
              name="phone"
              placeholder="+91 XXXXX XXXXX"
              required
            />
          </Field>
          <Field label="Service Category" required>
            <select className={inputClass} name="service" defaultValue="" required>
              <option value="" disabled>
                Select a service
              </option>
              {serviceOptions.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Quantity / Volume" hint="Prototype, 10 pcs, 500 pcs, etc.">
            <input
              className={inputClass}
              name="quantity"
              placeholder="e.g., 25 units"
            />
          </Field>
          <Field label="Target Timeline" hint="Urgent / Standard / Scheduled">
            <input className={inputClass} name="timeline" placeholder="e.g., 2 weeks" />
          </Field>
          <Field label="Preferred Response Method" hint="Email recommended">
            <select className={inputClass} name="responseMethod" defaultValue="Email">
              <option>Email</option>
              <option>Phone</option>
              <option>WhatsApp</option>
            </select>
          </Field>
        </div>

        <Field label="Requirement Details" required hint="Scope, specs, known issues, notes">
          <textarea
            className={inputClass}
            name="details"
            rows={6}
            placeholder="Describe your requirement clearly (specs, constraints, testing expectations, failure symptoms for repairs, etc.)"
            required
          />
        </Field>

        <div className="grid gap-6 sm:grid-cols-2">
          <Field label="Attach Files" hint="GERBER / BOM / Photos / Reports">
            <input
              className={inputClass}
              type="file"
              name="files"
              multiple
              accept=".zip,.rar,.7z,.pdf,.png,.jpg,.jpeg,.csv,.xlsx,.xls,.txt"
            />
            <div className="mt-2 text-xs text-secondary">
              If files are large, submit the form and share a drive link in the details.
            </div>
          </Field>

          <div className="rounded-xl border border-secondary/10 bg-accent p-5">
            <div className="text-sm font-semibold text-foreground">
              Quality & Handling
            </div>
            <p className="mt-2 text-sm leading-6 text-secondary">
              We follow controlled handling for electronics to reduce rework risk. Mention any ESD sensitivity, component constraints, or critical acceptance criteria.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full border border-secondary/15 bg-white px-3 py-1 text-xs font-medium text-secondary">
                ESD-safe
              </span>
              <span className="rounded-full border border-secondary/15 bg-white px-3 py-1 text-xs font-medium text-secondary">
                Traceable changes
              </span>
              <span className="rounded-full border border-secondary/15 bg-white px-3 py-1 text-xs font-medium text-secondary">
                Verification-focused
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-xs leading-5 text-secondary">
            By submitting, you confirm the shared files/details are suitable for commercial quotation and technical review.
          </div>
          <div className="flex gap-3">
            <Button
              type="submit"
              disabled={status === "submitting"}
              className="min-w-[10rem]"
            >
              {status === "submitting" ? "Submitting..." : "Submit Request"}
            </Button>
          </div>
        </div>
      </form>
    </Card>
  );
}

