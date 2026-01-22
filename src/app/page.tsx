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
    title: "Who can join illuminati?",
    content:
      "Anyone above the age of 18 and wants power, success and influence can join.",
  },
  {
    title: "How do I register quickly?",
    content:
      "Click the 'Register Today' button at the top of the page and fill in your details or send us a message on WhatsApp.",
  },
  {
    title: "What does membership include?",
    content:
      "It includes a lot of good things. Money, Power, Wealth, Fame and many more. Contact us today.",
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
                JOIN ILLUMINATI CULT
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="text-4xl font-semibold text-amber-100 md:text-5xl">
                ILLUMINATI - The new world order for people seeking wealth,
                fame literacy, and a lifetime legacy alignment.
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-base text-zinc-300/80">
                Johann Wolfgang brings you Illuminati membership which comes with a wide range of benefits. These advantages can be both financial and social—offering monetary rewards as well as valuable personal opportunities. Our organization is supported by strong financial resources, powerful global connections, and diverse investments across multiple regions. These assets allow us to operate on a worldwide scale and carry out major missions. Some of the benefits members may experience include the opportunity to: (1. Build wealth and gain recognition, 2. Achieve success in business, 3. Win major lottery opportunities, 4. Become an influential political figure, 5. Rise as a celebrity or public icon, …and much more) Our ultimate mission is to help create a better world. Your growth, success, and prosperity are at the heart of our purpose. Free your mind, embrace abundance, and take the next step. Join us..
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
            "POWER",
            "MONEY",
            "INFLUENCE",
            "FAME",
            "ETERNAL LIFE",
            "ETHICAL MEMBERSHIP",
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
                  The root of all evil can’t be MONEY and you must have it. Let all corners of the world know you, Control the world with single command, Have thousands of benefitsLive life until you decide to retire.
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
                Everything you need in one place by Johann Wolfgang
              </p>
              <h2 className="text-3xl font-semibold text-amber-100">
                Become a Member and start your journey of success, .
              </h2>
              <p className="text-sm text-zinc-300/80">
                A MUST-READ BEFORE YOU SUBMIT YOUR REQUEST - 
How To Join The Illuminati.
              </p>
              <ul className="space-y-3 text-sm text-zinc-300/80">
                <li>• Pay your Illuminati Membership Fee of Usd 200
South Africa: R2500.</li>
                <li>• Receive a Secret Serial Code Number( S.S.C.N) same day..</li>
                <li>• You will receive a Phone Call, email, or text from our Grand Lodge lord who will guide you on the Next step and also the date, Time, and Place for your Initiation Ceremony..</li>
                <li>• NB: Once your payment is complete, you will be emailed an official receipt for this transaction..</li>
                <li>• The Illuminati is an elite organization of world leaders, business authorities, innovators, artists, and other influential members of this planet. To apply for membership, click register today and complete the form on our Contact Page.</li>
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
                "Since the day I became part of this circle, everything I lay my hands on is a success.",
              name: "Private Member",
              role: "Legacy Circle",
            },
            {
              quote:
                "I have got all the money I have always wanted, and I still see more money coming it. A dream come true.",
              name: "Verified Graduate",
              role: "Wealth Track",
            },
            {
              quote:
                "Now everyone listens to me, when I speak, the whole world listens. This is what we call power.",
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
                What do you need to know about the new world order?
                We have all the information that you need. From dreams to reality.
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
                Register today for a private guidance and consultation.
              </h2>
              <p className="text-sm text-zinc-300/80">
                Adults only. You MUST be above the age of 18.
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
