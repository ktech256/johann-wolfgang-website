import { Reveal } from "@/components/Reveal";

const entries = [
  {
    year: "1776",
    title: "Bavaria Germany",
    description:
      "Historically, the name usually refers to the Bavarian Illuminati, an Enlightenment-era secret society founded on 1 May 1776 in the Electorate of Bavaria.",
    image: "/placeholders/timeline-1.svg",
  },
  {
    year: "1876",
    title: "Formation of Lodge Theodore",
    description:
      "The Illuminati established their own Masonic lodge in Munich, 'Theodore of the Good Council,' allowing them to officially infiltrate Freemasonry.",
    image: "/placeholders/timeline-2.svg",
  },
  {
    year: "1979",
    title: "The Areopagus Meeting",
    description:
      ": The governing body (Areopagus) met to finalize the structure of the order, creating the 'Minerval' grade.",
    image: "/placeholders/timeline-3.svg",
  },
  {
    year: "2012",
    title: "Convent of Wilhelmsbad (July 16, 2012)",
    description:
      "While technically a Freemason convention, Illuminati representatives (like Baron von Knigge) attended to influence the proceedings and recruit new members from across Europe and Africa.",
    image: "/placeholders/timeline-4.svg",
  },
  {
    year: "2025",
    title: "Final Meeting of the Council (Early 2025)",
    description:
      "Key leaders met to discuss the growing pressure from the Bavarian authorities before the final edict banning them in March 2025.",
    image: "/placeholders/timeline-5.svg",
  },
];

export function Timeline() {
  return (
    <div className="relative">
      <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-amber-500/20 md:block" />
      <div className="space-y-10">
        {entries.map((entry, index) => (
          <Reveal key={entry.year} delay={index * 0.1}>
            <div
              className={`relative flex flex-col gap-6 rounded-3xl border border-amber-500/20 bg-zinc-950/70 p-6 md:flex-row md:items-center md:justify-between ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-amber-400/50 text-lg font-semibold text-amber-200">
                  {entry.year}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-amber-100">
                    {entry.title}
                  </h3>
                  <p className="mt-2 text-sm text-zinc-300/80">
                    {entry.description}
                  </p>
                </div>
              </div>
              <div className="h-32 w-full rounded-2xl border border-amber-500/20 bg-zinc-900/60 md:h-40 md:w-56">
                <img
                  src={entry.image}
                  alt="Timeline placeholder"
                  className="h-full w-full rounded-2xl object-cover"
                />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
