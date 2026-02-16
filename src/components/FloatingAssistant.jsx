"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function FloatingAssistant() {
  const [open, setOpen] = useState(true);

  return (
    <div className="fixed bottom-5 left-5 z-50 w-[min(22rem,calc(100vw-2.5rem))]">
      <div
        className={cn(
          "overflow-hidden rounded-2xl border border-secondary/15 bg-white shadow-lg shadow-black/10",
          !open && "rounded-full",
        )}
      >
        <button
          type="button"
          className={cn(
            "flex w-full items-center justify-between gap-3 px-4 py-3 text-left",
            open ? "bg-white" : "bg-foreground text-white",
          )}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
        >
          <div className="flex items-center gap-3">
            <span
              className={cn(
                "grid size-9 place-items-center rounded-xl",
                open ? "bg-accent text-primary" : "bg-white/10 text-white",
              )}
              aria-hidden="true"
            >
              <span className={cn("size-4 rounded-sm border-2", open ? "border-primary/70" : "border-white/70")} />
            </span>
            <div className="leading-tight">
              <div className={cn("text-sm font-semibold tracking-tight", open ? "text-foreground" : "text-white")}>
                Digital Engineer Assistant
              </div>
              {open ? (
                <div className="text-xs font-medium text-secondary">
                  Quick guidance for better RFQs
                </div>
              ) : null}
            </div>
          </div>
          <span className={cn("text-xs font-semibold", open ? "text-secondary" : "text-white/80")}>
            {open ? "Minimize" : "Open"}
          </span>
        </button>

        {open ? (
          <div className="px-4 pb-4">
            <div className="rounded-xl border border-secondary/10 bg-accent p-4">
              <div className="text-sm font-semibold text-foreground">
                Need a faster quote?
              </div>
              <p className="mt-2 text-sm leading-6 text-secondary">
                Share target quantity, PCB layers, BOM/GERBER availability, and timeline.
                Upload files directly in the quotation form.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link
                  href="/get-quote"
                  className="inline-flex items-center justify-center rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-foreground/90 active:bg-foreground/85"
                >
                  Request Quote
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-full border border-secondary/20 bg-white px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-white/70 active:bg-white"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

