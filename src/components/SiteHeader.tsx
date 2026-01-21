"use client";

import Link from "next/link";
import { useState } from "react";

import { NAV_ITEMS, SITE } from "@/lib/site";
import { CTAButton } from "@/components/CTAButton";
import { useModal } from "@/components/ModalProvider";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { open: openModal } = useModal();

  return (
    <header className="sticky top-0 z-40 border-b border-amber-500/20 bg-black/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-amber-400/40 bg-zinc-950 text-amber-200">
            JW
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-amber-300/80">
              {SITE.domain}
            </p>
            <p className="text-lg font-semibold text-white">Johann Wolfgang</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-amber-100/80 lg:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-amber-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-400"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <CTAButton label="Register Today" onClick={openModal} />
        </div>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="flex items-center gap-2 rounded-full border border-amber-500/30 px-4 py-2 text-sm text-amber-100/80 transition hover:border-amber-300 hover:text-amber-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-400 lg:hidden"
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          Menu
          <span className="text-lg">≡</span>
        </button>
      </div>

      {open ? (
        <div className="border-t border-amber-500/20 bg-black/95 px-6 py-6 lg:hidden">
          <nav className="flex flex-col gap-4 text-sm text-amber-100/80">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="transition hover:text-amber-200"
              >
                {item.label}
              </Link>
            ))}
            <CTAButton label="Register Today" onClick={openModal} />
          </nav>
        </div>
      ) : null}
    </header>
  );
}
