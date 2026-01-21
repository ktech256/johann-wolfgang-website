import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Reveal } from "@/components/Reveal";

const values = [
  "Integrity-first education",
  "Discreet member privacy",
  "Clear adult-only consent",
  "Premium learning outcomes",
];

const team = [
  { name: "Lead Curator", role: "Education Director" },
  { name: "Program Host", role: "Member Relations" },
  { name: "Research Guide", role: "Curriculum Lead" },
];

const whatWeDo = [
  {
    title: "Curate Resources",
    description: "We assemble vetted learning assets for ambitious adults.",
  },
  {
    title: "Guide Progress",
    description: "Concierge support ensures clarity at every stage.",
  },
  {
    title: "Build Networks",
    description: "Members connect through private learning circles.",
  },
  {
    title: "Protect Legacy",
    description: "Strategic planning for long-term impact and wealth literacy.",
  },
];

export default function AboutPage() {
  return (
    <div className="space-y-20 pb-24">
      <section className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[1fr_1fr]">
        <Reveal>
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.5em] text-amber-300/80">
              About Us
            </p>
            <h1 className="text-4xl font-semibold text-amber-100">
              A private educational society with premium intent.
            </h1>
            <p className="text-sm text-zinc-300/80">
              This content mirrors a refined layout inspired by premium landing
              pages while remaining original. Replace the placeholder narrative
              with content from external references.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {values.map((value) => (
                <div
                  key={value}
                  className="rounded-2xl border border-amber-500/20 bg-zinc-950/70 p-4 text-sm text-amber-100"
                >
                  {value}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <ImagePlaceholder
            src="/placeholders/about-hero.svg"
            alt="About hero placeholder"
            className="min-h-[420px]"
          />
        </Reveal>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6">
        <Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-amber-500/20 bg-zinc-950/70 p-8">
              <h2 className="text-2xl font-semibold text-amber-100">
                Our Mission
              </h2>
              <p className="mt-4 text-sm text-zinc-300/80">
                To deliver adult-only educational pathways in wealth literacy,
                influence strategy, and legacy planning through respectful,
                transparent guidance.
              </p>
            </div>
            <div className="rounded-3xl border border-amber-500/20 bg-zinc-950/70 p-8">
              <h2 className="text-2xl font-semibold text-amber-100">
                Our Values
              </h2>
              <p className="mt-4 text-sm text-zinc-300/80">
                Clear consent, ethical learning, premium hospitality, and
                sustainable member outcomes.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6">
        <div className="space-y-6">
          <Reveal>
            <h2 className="text-3xl font-semibold text-amber-100">
              Leadership &amp; Team
            </h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {team.map((member) => (
              <Reveal key={member.name}>
                <div className="rounded-3xl border border-amber-500/20 bg-zinc-950/70 p-6">
                  <ImagePlaceholder
                    src="/placeholders/team-card.svg"
                    alt="Team placeholder"
                    className="h-40"
                  />
                  <p className="mt-4 text-lg font-semibold text-amber-100">
                    {member.name}
                  </p>
                  <p className="text-xs uppercase tracking-[0.3em] text-amber-300/70">
                    {member.role}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6">
        <div className="rounded-3xl border border-amber-500/20 bg-gradient-to-r from-black via-zinc-950 to-black p-10">
          <Reveal>
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.4em] text-amber-300/80">
                What We Do
              </p>
              <h2 className="text-3xl font-semibold text-amber-100">
                A timeline of services designed for adult learners.
              </h2>
            </div>
          </Reveal>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {whatWeDo.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.1}>
                <div className="rounded-2xl border border-amber-500/20 bg-zinc-950/70 p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-amber-400/40 text-amber-200">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <h3 className="text-lg font-semibold text-amber-100">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm text-zinc-300/80">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
