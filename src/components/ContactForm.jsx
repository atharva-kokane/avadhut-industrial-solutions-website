"use client";

import { useState } from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";

const inputClass =
  "w-full rounded-xl border border-secondary/15 bg-white px-4 py-3 text-sm text-foreground shadow-sm shadow-black/5 placeholder:text-secondary/70 focus:border-primary/35 focus:outline-none focus:ring-2 focus:ring-primary/20";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");

  function onSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    window.setTimeout(() => setStatus("submitted"), 650);
  }

  return (
    <Card className="p-6 sm:p-8">
      <h2 className="text-lg font-semibold tracking-tight text-foreground">
        Contact Us
      </h2>
      <p className="mt-2 text-sm leading-6 text-secondary">
        Send your query or service request. For quotations with files, use the quote page for faster processing.
      </p>

      {status === "submitted" ? (
        <div className="mt-6 rounded-xl border border-primary/20 bg-primary/10 p-4 text-sm text-foreground">
          <div className="font-semibold">Message received.</div>
          <div className="mt-1 text-secondary">
            We’ll get back to you shortly.
          </div>
        </div>
      ) : null}

      <form className="mt-8 grid gap-6" onSubmit={onSubmit}>
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label className="text-sm font-semibold text-foreground">
              Full Name <span className="text-primary">*</span>
            </label>
            <div className="mt-2">
              <input className={inputClass} name="name" required placeholder="Your name" />
            </div>
          </div>
          <div>
            <label className="text-sm font-semibold text-foreground">
              Email <span className="text-primary">*</span>
            </label>
            <div className="mt-2">
              <input
                className={inputClass}
                type="email"
                name="email"
                required
                placeholder="name@company.com"
              />
            </div>
          </div>
          <div>
            <label className="text-sm font-semibold text-foreground">
              Phone
            </label>
            <div className="mt-2">
              <input className={inputClass} name="phone" placeholder="+91 XXXXX XXXXX" />
            </div>
          </div>
          <div>
            <label className="text-sm font-semibold text-foreground">
              Subject <span className="text-primary">*</span>
            </label>
            <div className="mt-2">
              <input className={inputClass} name="subject" required placeholder="How can we help?" />
            </div>
          </div>
        </div>

        <div>
          <label className="text-sm font-semibold text-foreground">
            Message <span className="text-primary">*</span>
          </label>
          <div className="mt-2">
            <textarea
              className={inputClass}
              name="message"
              rows={6}
              required
              placeholder="Describe your requirement, issue, or question."
            />
          </div>
        </div>

        <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-xs leading-5 text-secondary">
            For service files (GERBER/BOM/photos), use the quote page to attach uploads.
          </div>
          <Button type="submit" disabled={status === "submitting"} className="min-w-[10rem]">
            {status === "submitting" ? "Sending..." : "Send Message"}
          </Button>
        </div>
      </form>
    </Card>
  );
}

