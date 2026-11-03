"use client";

import { useCallback, useEffect, useState } from "react";

const ITERATIONS = 600_000;
const MAGIC = "IRA1";
const REMEMBER_KEY = "case-study-password";
const REMEMBER_DAYS = 7;

// Decrypts a file made by the encrypt script: "IRA1" | salt (16) | iv (12) | AES-GCM data.
async function decrypt(buffer: ArrayBuffer, password: string) {
  const bytes = new Uint8Array(buffer);
  if (new TextDecoder().decode(bytes.slice(0, 4)) !== MAGIC) throw new Error("Unknown file");
  const salt = bytes.slice(4, 20);
  const iv = bytes.slice(20, 32);
  const base = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(password),
    "PBKDF2",
    false,
    ["deriveKey"],
  );
  const key = await crypto.subtle.deriveKey(
    { name: "PBKDF2", salt, iterations: ITERATIONS, hash: "SHA-256" },
    base,
    { name: "AES-GCM", length: 256 },
    false,
    ["decrypt"],
  );
  return crypto.subtle.decrypt({ name: "AES-GCM", iv }, key, bytes.slice(32));
}

function remembered() {
  try {
    const saved = JSON.parse(localStorage.getItem(REMEMBER_KEY) ?? "null");
    return saved && saved.expires > Date.now() ? (saved.password as string) : null;
  } catch {
    return null;
  }
}

function remember(password: string) {
  try {
    const expires = Date.now() + REMEMBER_DAYS * 24 * 60 * 60 * 1000;
    localStorage.setItem(REMEMBER_KEY, JSON.stringify({ password, expires }));
  } catch {
    // Storage blocked: they'll just type it again next time.
  }
}

export default function Unlock({ id, file }: { id: string; file: string }) {
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<"idle" | "working" | "error" | "open">("idle");
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  const open = useCallback(
    async (attempt: string, silent = false) => {
      setStatus("working");
      try {
        const response = await fetch(file);
        if (!response.ok) throw new Error("Could not load the file");
        const pdf = await decrypt(await response.arrayBuffer(), attempt);
        remember(attempt);
        const url = URL.createObjectURL(new Blob([pdf], { type: "application/pdf" }));
        setPdfUrl(url);
        setStatus("open");
        window.location.assign(url);
      } catch {
        setStatus(silent ? "idle" : "error");
      }
    },
    [file],
  );

  // Visitors who unlocked recently go straight in.
  useEffect(() => {
    const saved = remembered();
    if (saved) open(saved, true);
  }, [open]);

  if (status === "open" && pdfUrl) {
    return (
      <p className="mt-10 text-[15px] text-grey">
        Opening the case study… If nothing happens,{" "}
        <a href={pdfUrl} download={`${id}-case-study.pdf`} className="border-b border-ink text-ink">
          download it here
        </a>
        .
      </p>
    );
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (password) open(password);
      }}
      className="mx-auto mt-10 flex w-full max-w-[360px] flex-col gap-3"
    >
      <label htmlFor="password" className="sr-only">
        Password
      </label>
      <input
        id="password"
        name="password"
        type="password"
        required
        autoFocus
        autoComplete="current-password"
        placeholder="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        aria-invalid={status === "error" || undefined}
        aria-describedby={status === "error" ? "password-error" : undefined}
        className="w-full rounded-full border border-line bg-paper px-5 py-3 text-center text-[15px] outline-none transition-colors placeholder:text-grey focus:border-ink"
      />
      <button
        type="submit"
        disabled={status === "working"}
        className="rounded-full border border-ink bg-paper px-6 py-3 text-[15px] font-medium transition-colors hover:bg-ink hover:text-paper disabled:opacity-60"
      >
        {status === "working" ? "Opening…" : "Open case study"}
      </button>
      <p id="password-error" aria-live="polite" className="min-h-[1.5em] text-center text-sm text-grey">
        {status === "error" && "That password didn't work. Please try again."}
      </p>
    </form>
  );
}
