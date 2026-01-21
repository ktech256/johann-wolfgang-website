type TestimonialCardProps = {
  quote: string;
  name: string;
  role: string;
};

export function TestimonialCard({ quote, name, role }: TestimonialCardProps) {
  return (
    <div className="rounded-3xl border border-amber-500/20 bg-zinc-950/70 p-6">
      <p className="text-sm text-zinc-300/80">“{quote}”</p>
      <div className="mt-4">
        <p className="text-sm font-semibold text-amber-100">{name}</p>
        <p className="text-xs uppercase tracking-[0.3em] text-amber-300/60">
          {role}
        </p>
      </div>
    </div>
  );
}
