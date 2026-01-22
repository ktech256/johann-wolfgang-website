import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Reveal } from "@/components/Reveal";

const values = [
  "Private Initiation",
  "Discreet member privacy",
  "Clear adult-only membersip",
  "Premium out-come and results",
];

const team = [
  { name: "Lead Initiator", role: "Takes you through major steps" },
  { name: "Agent", role: "Keeps Contact with you everytime" },
  { name: "Senior Guide", role: "Guides and helps you grow" },
];

const whatWeDo = [
  {
    title: "Initiate you",
    description: "We initiate you into our new world order as an ambitious adult.",
  },
  {
    title: "Guide and support you",
    description: "We help you through the ranks and advise on how quickly you can get what you wants.",
  },
  {
    title: "Build and grow you",
    description: "We help keep you strong every single day as you grow and achieve all that you need.",
  },
  {
    title: "Protect your Legacy",
    description: "We protect you against all odd, dangers and anything which may come to destroy you.",
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
              A new world order that commands wealth, power, influence and fame. A decision that you will never regret.
            </h1>
            <p className="text-sm text-zinc-300/80">
              We initiate you, guide you and help you to attain anything that you have always wanted to get. Power, Money, Fame, Influece and many more.
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
                To empower adults with high-level education and mentorship in wealth creation, personal influence, public visibility, and legacy-building—through transparent, responsible, and results-driven guidance.
              </p>
            </div>
            <div className="rounded-3xl border border-amber-500/20 bg-zinc-950/70 p-8">
              <h2 className="text-2xl font-semibold text-amber-100">
                Our Values
              </h2>
              <p className="mt-4 text-sm text-zinc-300/80">
                Integrity, informed consent, strategic excellence, confidentiality, premium member experience, and sustainable success.
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
                A timeline of services designed for illuminati members.
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
