import Link from "next/link";

import { SITE } from "@/lib/site";

const tiles = [
  {
    number: "01",
    title: "Private Introductions",
    description: "Start with a discreet onboarding chat.",
  },
  {
    number: "02",
    title: "Learning Circles",
    description: "Weekly guided educational sessions.",
  },
  {
    number: "03",
    title: "Wealth Tools",
    description: "Premium resources curated for you.",
  },
  {
    number: "04",
    title: "Legacy Strategy",
    description: "Long-term planning with clarity.",
  },
  {
    number: "05",
    title: "Fame Literacy",
    description: "Understand influence, ethics, and reach.",
  },
  {
    number: "06",
    title: "Private Network",
    description: "Connect with aligned members.",
  },
];

export function NumberTilesWhatsAppSection() {
  return (
    <section className="bg-gradient-to-r from-black via-zinc-950 to-black py-16">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-amber-300/80">
              Direct Access
            </p>
            <h2 className="text-3xl font-semibold text-amber-100">
              Tap a number to begin on WhatsApp
            </h2>
          </div>
          <p className="max-w-md text-sm text-zinc-300/80">
            Every tile is an instant connection to our registration concierge.
            Select any number to launch the WhatsApp chat.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tiles.map((tile) => (
            <Link
              key={tile.number}
              href={SITE.whatsappLink}
              className="group rounded-3xl border border-amber-500/20 bg-zinc-950/80 p-6 transition hover:-translate-y-1 hover:border-amber-300/60 hover:shadow-[0_0_30px_rgba(255,202,128,0.2)]"
            >
              <div className="flex items-center justify-between">
                <span className="text-4xl font-semibold text-amber-300">
                  {tile.number}
                </span>
                <span className="text-xs uppercase tracking-[0.3em] text-zinc-400">
                  Tap to chat
                </span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-amber-100">
                {tile.title}
              </h3>
              <p className="mt-2 text-sm text-zinc-300/80">
                {tile.description}
              </p>
              <div className="mt-4 h-px w-full bg-amber-500/20" />
              <p className="mt-3 text-xs uppercase tracking-[0.3em] text-amber-300/70">
                Open WhatsApp
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
