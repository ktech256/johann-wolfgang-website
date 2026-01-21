import Link from "next/link";

import { NAV_ITEMS, SITE } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-amber-500/20 bg-black/90 text-zinc-200">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.2fr_1fr_1fr]">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.4em] text-amber-300/80">
            {SITE.domain}
          </p>
          <h2 className="text-2xl font-semibold text-amber-100">
            Johann Wolfgang Educational Society
          </h2>
          <p className="text-sm text-zinc-300/80">
            This premium educational space is for adults only. Every journey is
            designed to be transparent, respectful, and inspired by personal
            growth.
          </p>
          <p className="text-xs text-amber-200/80">
            18+ Disclaimer: This site is for 18+. No deception, and you consent
            to joining the money and fame team.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-200">
            Explore
          </p>
          <ul className="mt-4 space-y-2 text-sm text-zinc-300">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-amber-200">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4 text-sm text-zinc-300">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-200">
            Contact
          </p>
          <div>
            <p className="text-amber-100">Email</p>
            <p>{SITE.email}</p>
          </div>
          <div>
            <p className="text-amber-100">WhatsApp</p>
            <p>{SITE.whatsappNumber}</p>
          </div>
          <div>
            <p className="text-amber-100">Address</p>
            <p>{SITE.address}</p>
          </div>
        </div>
      </div>
      <div className="border-t border-amber-500/10 py-6 text-center text-xs text-zinc-500">
        © 2024 Johann Wolfgang. All rights reserved.
      </div>
    </footer>
  );
}
