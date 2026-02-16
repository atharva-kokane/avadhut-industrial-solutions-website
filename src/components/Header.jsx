"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Button from "@/components/Button";
import { cn } from "@/lib/utils";
import { navLinks } from "@/lib/content";

function LogoMark() {
  return (
    <div className="flex items-center gap-2.5 sm:gap-3">
      <div className="relative h-9 w-9 sm:h-10 sm:w-10">
        <Image
          src="/logo-ais.png"
          alt="Avadhut Industrial Solutions logo"
          fill
          sizes="44px"
          className="object-contain"
          priority
        />
      </div>
      <div className="hidden flex-col justify-center leading-tight sm:flex">
        <div className="text-sm sm:text-base font-semibold tracking-tight text-foreground">
          Avadhut Industrial Solutions
        </div>
        <div className="text-[0.7rem] sm:text-xs font-medium text-secondary">
          Industrial Solutions
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = navLinks;

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-secondary/10 bg-white/85 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3.5 sm:px-5">
        <Link
          href="/"
          className="shrink-0"
          aria-label="Go to homepage"
          onClick={() => setOpen(false)}
        >
          <LogoMark />
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {links.map((l) => {
            const active = l.href === "/" ? pathname === "/" : pathname?.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "text-sm font-medium text-secondary transition-colors hover:text-foreground",
                  active && "text-foreground",
                )}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button href="/contact" variant="outline">
            Contact
          </Button>
          <Button href="/get-quote">Get Quote</Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-xl border border-secondary/15 bg-white px-3 py-2 text-sm font-semibold text-foreground shadow-sm shadow-black/5 transition-colors hover:bg-accent md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="grid gap-1.5">
            <span className={cn("h-0.5 w-5 rounded bg-foreground transition-transform", open && "translate-y-2 rotate-45")} />
            <span className={cn("h-0.5 w-5 rounded bg-foreground transition-opacity", open && "opacity-0")} />
            <span className={cn("h-0.5 w-5 rounded bg-foreground transition-transform", open && "-translate-y-2 -rotate-45")} />
          </div>
        </button>
      </div>

      {open ? (
        <div className="border-t border-secondary/10 bg-white md:hidden">
          <div className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-5">
            <div className="grid gap-2">
              {links.map((l) => {
                const active = l.href === "/" ? pathname === "/" : pathname?.startsWith(l.href);
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "rounded-xl px-3 py-2 text-sm font-medium text-secondary hover:bg-accent hover:text-foreground",
                      active && "bg-accent text-foreground",
                    )}
                  >
                    {l.label}
                  </Link>
                );
              })}
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <Button
                href="/contact"
                variant="outline"
                className="w-full"
                onClick={() => setOpen(false)}
              >
                Contact
              </Button>
              <Button
                href="/get-quote"
                className="w-full"
                onClick={() => setOpen(false)}
              >
                Get Quote
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

