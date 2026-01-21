# Johann Wolfgang Website

Premium educational landing site for **johann-wolfgang.co.za** built with Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion.

## Quick Start

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Environment Variables

Create `.env.local` in the project root:

```bash
SMTP_HOST=your.smtp.host
SMTP_PORT=587
SMTP_USER=your_smtp_username
SMTP_PASS=your_smtp_password
TO_EMAIL=info@johann-wolfgang.co.za
```

You can copy from `.env.example` and update values.

## SMTP Configuration

- **SMTP_HOST**: Mail server host
- **SMTP_PORT**: Usually `587` (STARTTLS) or `465` (SSL)
- **SMTP_USER/SMTP_PASS**: Credentials for the sending mailbox
- **TO_EMAIL**: Destination inbox for contact form submissions

The contact form posts to `/api/contact` which sends email via Nodemailer.

## Deployment

- **Vercel**: Import the repo, add environment variables in the dashboard, and deploy.
- **Netlify**: Use the Next.js build settings and set environment variables in site settings.

## Project Structure (key paths)

```text
src/
  app/
    about-us/page.tsx
    api/contact/route.ts
    contact-us/page.tsx
    history/page.tsx
    how-to-join/page.tsx
    member-benefits/page.tsx
    register-today/page.tsx
    globals.css
    layout.tsx
    page.tsx
  components/
    Accordion.tsx
    ContactForm.tsx
    ContactModal.tsx
    CTAButton.tsx
    ImagePlaceholder.tsx
    Modal.tsx
    ModalProvider.tsx
    NumberTilesWhatsAppSection.tsx
    RegisterCTAButton.tsx
    Reveal.tsx
    SiteFooter.tsx
    SiteHeader.tsx
    Stepper.tsx
    TestimonialCard.tsx
    Timeline.tsx
    WhatsAppFloatingButton.tsx
  lib/
    site.ts
public/
  docs/
    fame-guide.txt
    legacy-roadmap.txt
    wealth-overview.txt
  placeholders/
    about-hero.svg
    benefits-callout.svg
    feature-split.svg
    hero-luxe.svg
    history-card.svg
    map-placeholder.svg
    parallax.svg
    register-card.svg
    team-card.svg
    timeline-1.svg
    timeline-2.svg
    timeline-3.svg
    timeline-4.svg
    timeline-5.svg
```

## Notes

- All images are placeholder SVG assets located in `/public/placeholders`.
- Download resources in `/public/docs` are placeholders for future content.
- The floating WhatsApp button links to the configured WhatsApp deep link.
