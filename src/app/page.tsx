import Link from "next/link";

import { Accordion } from "@/components/Accordion";
import { CTAButton } from "@/components/CTAButton";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { NumberTilesWhatsAppSection } from "@/components/NumberTilesWhatsAppSection";
import { RegisterCTAButton } from "@/components/RegisterCTAButton";
import { Reveal } from "@/components/Reveal";
import { TestimonialCard } from "@/components/TestimonialCard";
import { SITE } from "@/lib/site";

const faqItems = [
  {
    title: "Is this educational content only?",
    content:
      "Yes. Every module is structured as an educational resource with transparent, adults-only guidance.",
  },
  {
    title: "How do I register quickly?",
    content:
      "Use the Register Today CTA or tap any WhatsApp tile to speak to our concierge.",
  },
  {
    title: "What does membership include?",
    content:
      "Curated resources, private sessions, and guided learning paths across wealth, fame literacy, and legacy planning.",
  },
];

export default function HomePage() {
  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-black via-zinc-950 to-black py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.15),transparent_60%)]" />
        <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.5em] text-amber-300/80">
                Premium Educational Society
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="text-4xl font-semibold text-amber-100 md:text-5xl">
                Private learning experiences for visionaries seeking wealth,
                fame literacy, and legacy alignment.
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-base text-zinc-300/80">
                Johann Wolfgang is a premium, adults-only educational community
                designed to guide ambitious individuals with curated resources,
                private mentorship, and discreet concierge support. Replace this
                placeholder copy with text inspired by external references.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="flex flex-wrap gap-4">
                <RegisterCTAButton label="Register Today" />
                <CTAButton
                  label="Chat on WhatsApp"
                  href={SITE.whatsappLink}
                  variant="secondary"
                />
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="flex flex-wrap gap-6 text-sm text-zinc-400">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-amber-300/80">
                    Domain
                  </p>
                  <p>{SITE.domain}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-amber-300/80">
                    WhatsApp
                  </p>
                  <p>{SITE.whatsappNumber}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-amber-300/80">
                    Address
                  </p>
                  <p>{SITE.address}</p>
                </div>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <ImagePlaceholder
              src="/placeholders/hero-luxe.svg"
              alt="Premium hero placeholder"
              className="min-h-[420px]"
            />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Private Curriculum",
            "Concierge Support",
            "Legacy Planning",
            "Wealth Literacy",
            "Influence Strategy",
            "Ethical Membership",
          ].map((feature, index) => (
            <Reveal key={feature} delay={index * 0.1}>
              <div className="rounded-3xl border border-amber-500/20 bg-zinc-950/70 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-amber-400/40 text-amber-200">
                  ◎
                </div>
                <h3 className="mt-4 text-lg font-semibold text-amber-100">
                  {feature}
                </h3>
                <p className="mt-2 text-sm text-zinc-300/80">
                  Placeholder copy that mirrors a premium, discreet educational
                  experience. Replace with text from external sources later.
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <ImagePlaceholder
              src="/placeholders/feature-split.svg"
              alt="Feature placeholder"
              className="min-h-[380px]"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.4em] text-amber-300/80">
                Private Guidance
              </p>
              <h2 className="text-3xl font-semibold text-amber-100">
                Carefully staged onboarding with curated learning objectives.
              </h2>
              <p className="text-sm text-zinc-300/80">
                This block provides editable educational copy with a refined
                layout inspired by premium landing pages. Update the bullets to
                align with future curriculum updates.
              </p>
              <ul className="space-y-3 text-sm text-zinc-300/80">
                <li>• Discreet orientation, adult-only access.</li>
                <li>• Ethical guidelines and transparent commitments.</li>
                <li>• Private discussion circles and mentorship slots.</li>
                <li>• Resource vault with modular learning paths.</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <NumberTilesWhatsAppSection />

      <section className="mx-auto w-full max-w-6xl px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              quote:
                "The education modules felt premium and discreet. Everything was explained clearly.",
              name: "Private Member",
              role: "Legacy Circle",
            },
            {
              quote:
                "The onboarding experience was thoughtful and well structured.",
              name: "Verified Graduate",
              role: "Wealth Track",
            },
            {
              quote:
                "A respectful space that feels focused on real outcomes and ethics.",
              name: "Confidential",
              role: "Influence Track",
            },
          ].map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.4em] text-amber-300/80">
                FAQ
              </p>
              <h2 className="text-3xl font-semibold text-amber-100">
                Answers to common membership questions.
              </h2>
              <p className="text-sm text-zinc-300/80">
                Replace these placeholder answers with more detailed educational
                information sourced from external references.
              </p>
            </div>
          </Reveal>
          <Accordion items={faqItems} />
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6">
        <div className="rounded-3xl border border-amber-500/20 bg-gradient-to-r from-amber-500/10 via-zinc-950/90 to-black p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.4em] text-amber-300/80">
                Ready to begin
              </p>
              <h2 className="text-3xl font-semibold text-amber-100">
                Register today for a private educational consultation.
              </h2>
              <p className="text-sm text-zinc-300/80">
                Adults only. Transparent, respectful, and guided by informed
                consent.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <RegisterCTAButton label="Register Today" />
              <Link
                href={SITE.whatsappLink}
                className="rounded-full border border-amber-300/60 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-amber-100 transition hover:border-amber-200"
              >
                WhatsApp fallback
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
