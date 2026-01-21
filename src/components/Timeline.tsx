import { Reveal } from "@/components/Reveal";

const entries = [
  {
    year: "2008",
    title: "Foundational Research",
    description:
      "Exploratory educational meetings began with a focus on ethical wealth study.",
    image: "/placeholders/timeline-1.svg",
  },
  {
    year: "2012",
    title: "Private Library",
    description:
      "A curated archive of premium learning material was assembled for members.",
    image: "/placeholders/timeline-2.svg",
  },
  {
    year: "2016",
    title: "Global Expansion",
    description:
      "International mentorship circles formed to share leadership insights.",
    image: "/placeholders/timeline-3.svg",
  },
  {
    year: "2020",
    title: "Digital Transformation",
    description:
      "Remote learning programs and concierge support scaled to new regions.",
    image: "/placeholders/timeline-4.svg",
  },
  {
    year: "2024",
    title: "Legacy Commitments",
    description:
      "Refined an adult-only educational charter with clarity and transparency.",
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
