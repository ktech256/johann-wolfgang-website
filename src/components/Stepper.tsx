import { Reveal } from "@/components/Reveal";

const steps = [
  {
    title: "Click 'Register Today' or Send a WhatsApp Message",
    description: "Complete the private registration form to begin.",
  },
  {
    title: "We recieve your application and send CODE",
    description: "Our team confirms alignment with the requirements and age and sends you a secret confirmation/serial code via email or WhatsApp.",
  },
  {
    title: "Orientation Call",
    description: "Receive guidance Phone Call from our Grand Lodge lord who will guide you on the Next step and also the dates.",
  },
  {
    title: " Initiation Ceremony",
    description: "Invitation to the initiation ceremony to a temple within your country or area of residence.",
  },
  {
    title: "Membership Access",
    description: "Have full access and start recieving the wealth benefits, power, fame, control and any other thing that you may ask for.",
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
