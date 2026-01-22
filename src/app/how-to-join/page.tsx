import { RegisterCTAButton } from "@/components/RegisterCTAButton";
import { Reveal } from "@/components/Reveal";
import { Stepper } from "@/components/Stepper";

export default function HowToJoinPage() {
  return (
    <div className="space-y-20 pb-24">
      <section className="mx-auto w-full max-w-6xl px-6 py-20">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.5em] text-amber-300/80">
            How To Join
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-amber-100">
            Five steps to secure your educational membership.
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-zinc-300/80">
            Our process is designed for adults seeking a premium, transparent
            educational journey.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto w-full max-w-5xl px-6">
        <Stepper />
      </section>

      <section className="mx-auto w-full max-w-6xl px-6">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-3xl border border-amber-500/20 bg-zinc-950/70 p-8">
              <h2 className="text-2xl font-semibold text-amber-100">
                Eligibility
              </h2>
              <ul className="mt-4 space-y-3 text-sm text-zinc-300/80">
                <li>• Adults 18+ only with verified consent.</li>
                <li>• Commitment to ethical wealth education.</li>
                <li>• Willingness to engage with confidential learning circles.</li>
                <li>• Respect for member privacy and community guidelines.</li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-amber-500/20 bg-zinc-950/70 p-8">
              <h2 className="text-2xl font-semibold text-amber-100">
                Code of Conduct (Fame &amp; Wealth, Power, Control, Authority and Respect)
              </h2>
              <p className="mt-4 text-sm text-zinc-300/80">
                We promote responsible wealth gain, ethical public visibility, and power
                discourse and influence. Respectful engagement at all times.
              </p>
              <p className="mt-4 text-xs text-amber-200/80">
                18+ Disclaimer: This educational program is intended for adults
                only.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6">
        <Reveal>
          <div className="rounded-3xl border border-amber-500/20 bg-zinc-950/70 p-8">
            <h2 className="text-2xl font-semibold text-amber-100">
              Application Checklist
            </h2>
            <ul className="mt-4 grid gap-3 text-sm text-zinc-300/80 md:grid-cols-2">
              <li>• Completed and submitted registration form.</li>
              <li>• Validate contact information.</li>
              <li>• Selected options focus.</li>
              <li>• Agreement to ethics.</li>
            </ul>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6">
        <div className="rounded-3xl border border-amber-500/20 bg-gradient-to-r from-amber-500/10 via-zinc-950/90 to-black p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-3xl font-semibold text-amber-100">
                Ready to join?
              </h2>
              <p className="mt-3 text-sm text-zinc-300/80">
                Start the registration form now. 18+.
              </p>
            </div>
            <RegisterCTAButton label="Register Today" />
          </div>
        </div>
      </section>
    </div>
  );
}
