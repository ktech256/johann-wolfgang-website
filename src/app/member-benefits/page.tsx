import Link from "next/link";

import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Reveal } from "@/components/Reveal";

const benefits = [
  "1. A Cash Reward (Welcome Ransom) Of $9,000,000 USD and  A Very Powerful Talisman And Supremacy Ring (Offered To You For Magical And Protective Purposes)",
  "2. A New Sleek Dream CAR Valued At USD $201,000 USD, Your Illuminati Membership ID Which Has Various Accessories And Advantages Worldwide",
  "3. A Dream House Bought In The Country Of Your Own Choice (USA)Or Any, ",
  "4. One Month Holiday (Fully Paid) To Your Dream Tourist Destination.(Were You Have All Ways Dreamt To Visit)",
  "6. A V.I.P Treatment In All Airports In The World, 7. A Total Lifestyle Change and  A Green Card Given By The USA Government(Making You A Full Citizen Of America) Authorise By The Worldwide Illuminati Organisation",
  "9. A International Bank Account Created By The USA International Globalism (You Will Be Able To Use This Account In All Banks In The World And Any Part Of The World As well) Monthly Payment Of$1,000,000 USD Into Your Bank Account Every Month",
];

export default function MemberBenefitsPage() {
  return (
    <div className="space-y-20 pb-24">
      <section className="mx-auto w-full max-w-6xl px-6 py-20">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.5em] text-amber-300/80">
            Member Benefits
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-amber-100">
            Benefits designed for discerning adult learners.
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-zinc-300/80">
            Premium educational support with clear outcomes. Replace this copy
            with external content references as needed.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <Reveal key={benefit}>
              <div className="rounded-3xl border border-amber-500/20 bg-zinc-950/70 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-amber-400/40 text-amber-200">
                  ✦
                </div>
                <h3 className="mt-4 text-lg font-semibold text-amber-100">
                  {benefit}
                </h3>
                <p className="mt-2 text-sm text-zinc-300/80">
                  ILLUMINATI #1.
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-3xl border border-amber-500/20 bg-zinc-950/70 p-8">
              <h2 className="text-2xl font-semibold text-amber-100">
                Before / After Educational Outcomes
              </h2>
              <p className="mt-3 text-sm text-zinc-300/80">
                A neutral comparison of learning progression. Replace with real
                metrics and content later.
              </p>
              <div className="mt-6 overflow-hidden rounded-2xl border border-amber-500/20">
                <table className="w-full text-left text-sm">
                  <thead className="bg-amber-500/10 text-amber-200">
                    <tr>
                      <th className="px-4 py-3">Before</th>
                      <th className="px-4 py-3">After</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-amber-500/10 text-zinc-300/80">
                    <tr>
                      <td className="px-4 py-3">Unstructured learning</td>
                      <td className="px-4 py-3">Guided curriculum map</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">Limited accountability</td>
                      <td className="px-4 py-3">Concierge progress check-ins</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">Scattered resources</td>
                      <td className="px-4 py-3">Curated vault access</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="rounded-3xl border border-amber-500/20 bg-zinc-950/70 p-8">
              <blockquote className="text-xl font-semibold text-amber-100">
                “A premium educational experience that prioritizes clarity,
                discretion, and ethical growth.”
              </blockquote>
              <p className="mt-4 text-sm text-zinc-300/80">
                Replace this quote with verified testimonials or editorial
                feedback.
              </p>
              <ImagePlaceholder
                src="/placeholders/benefits-callout.svg"
                alt="Benefits callout placeholder"
                className="mt-6 h-56"
              />
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6">
        <div className="rounded-3xl border border-amber-500/20 bg-zinc-950/70 p-8">
          <Reveal>
            <h2 className="text-2xl font-semibold text-amber-100">
              Download Resources
            </h2>
            <p className="mt-3 text-sm text-zinc-300/80">
              Downloadable placeholders for curriculum guides and overview
              documents.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/docs/wealth-overview.txt"
                className="rounded-full border border-amber-300/60 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-amber-100"
              >
                Wealth Overview
              </Link>
              <Link
                href="/docs/fame-guide.txt"
                className="rounded-full border border-amber-300/60 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-amber-100"
              >
                Fame Guide
              </Link>
              <Link
                href="/docs/legacy-roadmap.txt"
                className="rounded-full border border-amber-300/60 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-amber-100"
              >
                Legacy Roadmap
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
