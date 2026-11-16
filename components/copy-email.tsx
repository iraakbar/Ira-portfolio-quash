"use client";

import { useState } from "react";

const email = "helloiraakbar@gmail.com";

// Copies the email address. Falls back to opening the mail app if copying isn't allowed.
export default function CopyEmail({ className }: { className: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <button type="button" onClick={copy} className={className}>
      <span aria-live="polite">{copied ? "Email copied" : "Let’s talk"}</span>
    </button>
  );
}
