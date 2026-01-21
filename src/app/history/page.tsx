import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Reveal } from "@/components/Reveal";
import { Timeline } from "@/components/Timeline";

export default function HistoryPage() {
  return (
    <div className="space-y-20 pb-24">
      <section className="mx-auto w-full max-w-6xl px-6 py-20">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.5em] text-amber-300/80">
            History
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-amber-100">
            A legacy of discreet, adult-only educational expansion.
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-zinc-300/80">
            The timeline below is a placeholder narrative inspired by premium
            private societies. Replace with factual content sourced externally.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto w-full max-w-5xl px-6">
        <Timeline />
      </section>

      <section className="mx-auto w-full max-w-6xl px-6">
        <Reveal>
          <h2 className="text-3xl font-semibold text-amber-100">
            Key Moments
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {["Foundational Charter", "Education Milestone", "Legacy Pact"].map(
            (moment) => (
              <Reveal key={moment}>
                <div className="rounded-3xl border border-amber-500/20 bg-zinc-950/70 p-6">
                  <ImagePlaceholder
                    src="/placeholders/history-card.svg"
                    alt="History placeholder"
                    className="h-40"
                  />
                  <h3 className="mt-4 text-lg font-semibold text-amber-100">
                    {moment}
                  </h3>
                  <p className="mt-2 text-sm text-zinc-300/80">
                    Replace this story with a verified historical highlight and
                    supporting evidence.
                  </p>
                </div>
              </Reveal>
            )
          )}
        </div>
      </section>

      <section className="bg-[url('/placeholders/parallax.svg')] bg-cover bg-center py-20">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="rounded-3xl border border-amber-500/20 bg-black/70 p-10">
            <Reveal>
              <h2 className="text-3xl font-semibold text-amber-100">
                A parallax-inspired legacy statement.
              </h2>
              <p className="mt-4 text-sm text-zinc-300/80">
                This section simulates a parallax background without external
                embeds. Update the copy and imagery as needed.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
