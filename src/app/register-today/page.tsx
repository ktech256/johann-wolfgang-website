import Link from "next/link";

import { ContactForm } from "@/components/ContactForm";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Reveal } from "@/components/Reveal";
import { SITE } from "@/lib/site";

export default function RegisterTodayPage() {
  return (
    <div className="space-y-20 pb-24">
      <section className="mx-auto w-full max-w-6xl px-6 py-20">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.5em] text-amber-300/80">
            Register Today
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-amber-100">
            BECOME A MEMBER OF THE ILLUMINATI SOCIETY.
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-zinc-300/80">
            This form is for 18+. Provide your details and our registration
            team will respond promptly.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-10 px-6 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal>
          <div className="rounded-3xl border border-amber-500/20 bg-zinc-950/70 p-8">
            <ContactForm contextLabel="Register Today" />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="space-y-6 rounded-3xl border border-amber-500/20 bg-zinc-950/70 p-8">
            <h2 className="text-2xl font-semibold text-amber-100">
              WhatsApp Quick Chat
            </h2>
            <p className="text-sm text-zinc-300/80">
              Prefer instant access? Connect directly with our registration
              concierge via WhatsApp.
            </p>
            <Link
              href={SITE.whatsappLink}
              className="rounded-full bg-emerald-500 px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.2em] text-white"
            >
              Open WhatsApp
            </Link>
            <ImagePlaceholder
              src="/placeholders/register-card.svg"
              alt="Register placeholder"
              className="h-48"
            />
            <div className="rounded-2xl border border-amber-500/20 bg-zinc-900/60 p-4 text-xs text-amber-200/80">
              18+ Disclaimer: This educational registration is intended for
              adults only.
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
