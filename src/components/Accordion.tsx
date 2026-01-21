"use client";

import { useState } from "react";

type AccordionItem = {
  title: string;
  content: string;
};

type AccordionProps = {
  items: AccordionItem[];
};

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={item.title}
          className="rounded-2xl border border-amber-500/20 bg-zinc-950/70 p-4"
        >
          <button
            type="button"
            className="flex w-full items-center justify-between text-left text-amber-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-400"
            onClick={() =>
              setOpenIndex((prev) => (prev === index ? null : index))
            }
            aria-expanded={openIndex === index}
          >
            <span className="text-sm font-semibold uppercase tracking-[0.2em]">
              {item.title}
            </span>
            <span className="text-2xl">{openIndex === index ? "−" : "+"}</span>
          </button>
          {openIndex === index ? (
            <p className="mt-3 text-sm text-zinc-300/80">{item.content}</p>
          ) : null}
        </div>
      ))}
    </div>
  );
}
