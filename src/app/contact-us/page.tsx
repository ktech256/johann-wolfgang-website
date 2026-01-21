import Link from "next/link";

import { ContactForm } from "@/components/ContactForm";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Reveal } from "@/components/Reveal";
import { SITE } from "@/lib/site";

export default function ContactPage() {
  return (
    <div className="space-y-20 pb-24">
      <section className="mx-auto w-full max-w-6xl px-6 py-20">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.5em] text-amber-300/80">
            Contact Us
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-amber-100">
            Speak with our private educational concierge.
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-zinc-300/80">
            Adults only. Use the form or WhatsApp link to reach the team.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="space-y-6 rounded-3xl border border-amber-500/20 bg-zinc-950/70 p-8">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-amber-300/80">
                Address
              </p>
              <p className="mt-2 text-sm text-zinc-300/80">{SITE.address}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-amber-300/80">
                Email
              </p>
              <p className="mt-2 text-sm text-zinc-300/80">{SITE.email}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-amber-300/80">
                WhatsApp
              </p>
              <Link
                href={SITE.whatsappLink}
                className="mt-2 inline-flex text-sm text-amber-200"
              >
                {SITE.whatsappNumber}
              </Link>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-amber-300/80">
                Office Hours
              </p>
              <p className="mt-2 text-sm text-zinc-300/80">
                Mon - Fri, 09:00 - 18:00 (SAST)
              </p>
            </div>
            <div className="rounded-2xl border border-amber-500/20 bg-zinc-900/60 p-4 text-xs text-amber-200/80">
              18+ Disclaimer: This contact channel is for adults only.
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-3xl border border-amber-500/20 bg-zinc-950/70 p-8">
            <ContactForm contextLabel="Contact Page" />
          </div>
        </Reveal>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <div className="rounded-3xl border border-amber-500/20 bg-zinc-950/70 p-8">
              <h2 className="text-2xl font-semibold text-amber-100">
                Map Placeholder
              </h2>
              <p className="mt-3 text-sm text-zinc-300/80">
                Replace this block with an embedded map or updated location
                visuals.
              </p>
              <ImagePlaceholder
                src="/placeholders/map-placeholder.svg"
                alt="Map placeholder"
                className="mt-6 h-56"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-amber-500/20 bg-zinc-950/70 p-8">
              <h2 className="text-2xl font-semibold text-amber-100">
                Mini FAQ
              </h2>
              <ul className="mt-4 space-y-3 text-sm text-zinc-300/80">
                <li>• Response time within 24-48 hours.</li>
                <li>• Secure and confidential communications.</li>
                <li>• Adults-only consultations.</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
