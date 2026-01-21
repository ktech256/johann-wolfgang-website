import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

import { ModalProvider } from "@/components/ModalProvider";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ContactModal } from "@/components/ContactModal";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";

const headingFont = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Johann Wolfgang | Private Educational Society",
  description:
    "Premium educational experience with private learning circles, concierge support, and curated resources.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${headingFont.variable} ${bodyFont.variable} bg-black text-white antialiased`}>
        <ModalProvider>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
          <ContactModal />
          <WhatsAppFloatingButton />
        </ModalProvider>
      </body>
    </html>
  );
}
