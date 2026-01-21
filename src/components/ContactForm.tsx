"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { TOPIC_OPTIONS } from "@/lib/site";

type ContactFormProps = {
  contextLabel?: string;
  onSuccess?: () => void;
  compact?: boolean;
};

type FormStatus = "idle" | "loading" | "success" | "error";

const initialState = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
  topic: "",
  company: "",
};

export function ContactForm({
  contextLabel = "General",
  onSuccess,
  compact = false,
}: ContactFormProps) {
  const pathname = usePathname();
  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [startedAt, setStartedAt] = useState<number>(Date.now());

  useEffect(() => {
    setStartedAt(Date.now());
  }, []);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage(null);

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setErrorMessage("Please complete all required fields.");
      setStatus("error");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          contextLabel,
          referrerPath: pathname,
          formStartedAt: startedAt,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      setFormData(initialState);
      setStartedAt(Date.now());
      onSuccess?.();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Unable to send your request."
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`space-y-4 ${compact ? "text-sm" : "text-base"}`}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2">
          <span className="text-xs uppercase tracking-[0.3em] text-amber-200">
            Full Name *
          </span>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full rounded-2xl border border-amber-500/20 bg-zinc-900/60 px-4 py-3 text-white focus:border-amber-300 focus:outline-none"
          />
        </label>
        <label className="space-y-2">
          <span className="text-xs uppercase tracking-[0.3em] text-amber-200">
            Email *
          </span>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full rounded-2xl border border-amber-500/20 bg-zinc-900/60 px-4 py-3 text-white focus:border-amber-300 focus:outline-none"
          />
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2">
          <span className="text-xs uppercase tracking-[0.3em] text-amber-200">
            Phone
          </span>
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full rounded-2xl border border-amber-500/20 bg-zinc-900/60 px-4 py-3 text-white focus:border-amber-300 focus:outline-none"
          />
        </label>
        <label className="space-y-2">
          <span className="text-xs uppercase tracking-[0.3em] text-amber-200">
            Topic
          </span>
          <select
            name="topic"
            value={formData.topic}
            onChange={handleChange}
            className="w-full rounded-2xl border border-amber-500/20 bg-zinc-900/60 px-4 py-3 text-white focus:border-amber-300 focus:outline-none"
          >
            <option value="">Select a topic</option>
            {TOPIC_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="space-y-2">
        <span className="text-xs uppercase tracking-[0.3em] text-amber-200">
          Subject *
        </span>
        <input
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full rounded-2xl border border-amber-500/20 bg-zinc-900/60 px-4 py-3 text-white focus:border-amber-300 focus:outline-none"
        />
      </label>

      <label className="space-y-2">
        <span className="text-xs uppercase tracking-[0.3em] text-amber-200">
          Message *
        </span>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={compact ? 4 : 6}
          className="w-full rounded-2xl border border-amber-500/20 bg-zinc-900/60 px-4 py-3 text-white focus:border-amber-300 focus:outline-none"
        />
      </label>

      <label className="hidden">
        <span>Company</span>
        <input
          name="company"
          value={formData.company}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </label>

      <div className="flex flex-col gap-3">
        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "loading" ? "Sending..." : "Send Request"}
        </button>
        <p className="text-xs text-amber-200/80">
          18+ Disclaimer: This form is intended for adults only. Please allow at
          least a few seconds before submitting.
        </p>
      </div>

      {status === "success" ? (
        <div className="rounded-2xl border border-emerald-400/40 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
          Thank you. Your request was received and our team will respond soon.
        </div>
      ) : null}

      {status === "error" && errorMessage ? (
        <div className="rounded-2xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">
          {errorMessage}
        </div>
      ) : null}
    </form>
  );
}
