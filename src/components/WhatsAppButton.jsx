import { company } from "@/lib/content";

export default function WhatsAppButton() {
  const href = `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(
    "Hello Avadhut Industrial Solutions — I’d like to discuss a requirement.",
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-3 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-black/10 transition-colors hover:bg-primary/90 active:bg-primary/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
      aria-label="Contact on WhatsApp"
    >
      <span
        className="grid size-8 place-items-center rounded-full bg-white/10"
        aria-hidden="true"
      >
        <span className="size-3.5 rounded-sm border-2 border-white/70" />
      </span>
      WhatsApp
    </a>
  );
}

