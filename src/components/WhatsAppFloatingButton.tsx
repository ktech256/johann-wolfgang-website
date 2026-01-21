import Link from "next/link";

import { SITE } from "@/lib/site";

export function WhatsAppFloatingButton() {
  return (
    <Link
      href={SITE.whatsappLink}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-[0_0_30px_rgba(16,185,129,0.6)] transition hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-200"
      aria-label="Chat on WhatsApp"
    >
      <span className="text-lg font-semibold">WA</span>
    </Link>
  );
}
