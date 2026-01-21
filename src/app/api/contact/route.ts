import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const rateLimitStore = new Map<
  string,
  {
    count: number;
    resetAt: number;
  }
>();

const MINIMUM_SUBMIT_TIME_MS = 3000;
const MAX_SUBMISSIONS = 5;
const WINDOW_MS = 60 * 60 * 1000;

function getClientIp(request: NextRequest) {
  const forwarded = request.headers.get("x-forwarded-for");
  const realIp = request.headers.get("x-real-ip");
  return forwarded?.split(",")[0]?.trim() || realIp || "unknown";
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const entry = rateLimitStore.get(ip);
  if (!entry || entry.resetAt < now) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  if (entry.count >= MAX_SUBMISSIONS) {
    return true;
  }
  entry.count += 1;
  return false;
}

export async function POST(request: NextRequest) {
  try {
    const payload = await request.json();
    const {
      name,
      email,
      phone,
      subject,
      message,
      topic,
      company,
      contextLabel,
      referrerPath,
      formStartedAt,
    } = payload ?? {};

    if (company) {
      return NextResponse.json({ error: "Bot detected." }, { status: 400 });
    }

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    if (
      typeof formStartedAt === "number" &&
      Date.now() - formStartedAt < MINIMUM_SUBMIT_TIME_MS
    ) {
      return NextResponse.json(
        { error: "Please take a moment before submitting." },
        { status: 400 }
      );
    }

    const ip = getClientIp(request);
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Rate limit exceeded. Please try again later." },
        { status: 429 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const toEmail = process.env.TO_EMAIL || "info@johann-wolfgang.co.za";

    await transporter.sendMail({
      from: `Johann Wolfgang <${process.env.SMTP_USER}>`,
      to: toEmail,
      subject: `New Registration: ${subject}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "N/A"}`,
        `Topic: ${topic || "N/A"}`,
        `Context: ${contextLabel || "General"}`,
        `Referrer Path: ${referrerPath || "N/A"}`,
        `IP: ${ip}`,
        `Timestamp: ${new Date().toISOString()}`,
        "",
        message,
      ].join("\n"),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Unable to send email. Check SMTP settings." },
      { status: 500 }
    );
  }
}
