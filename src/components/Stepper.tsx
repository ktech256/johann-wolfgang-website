import { Reveal } from "@/components/Reveal";

const steps = [
  {
    title: "Initial Signal",
    description: "Complete the private registration form to begin.",
  },
  {
    title: "Eligibility Review",
    description: "Our team confirms alignment with the educational code.",
  },
  {
    title: "Orientation Call",
    description: "Receive guidance on curriculum access and timelines.",
  },
  {
    title: "Membership Access",
    description: "Unlock secure resources and private sessions.",
  },
  {
    title: "Ongoing Path",
    description: "Continue learning with quarterly progress reviews.",
  },
];

export function Stepper() {
  return (
    <div className="space-y-6">
      {steps.map((step, index) => (
        <Reveal key={step.title} delay={index * 0.1}>
          <div className="flex items-start gap-6 rounded-3xl border border-amber-500/20 bg-zinc-950/70 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-amber-400/40 text-lg font-semibold text-amber-200">
              {String(index + 1).padStart(2, "0")}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-amber-100">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-zinc-300/80">
                {step.description}
              </p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
