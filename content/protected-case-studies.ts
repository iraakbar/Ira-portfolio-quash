// Case studies shared as encrypted PDFs. Each file in public/case-studies/ is AES-256-GCM
// encrypted with a key derived from the password (PBKDF2-SHA256, 600,000 rounds) and is
// decrypted in the visitor's browser. The password itself is not stored anywhere in the site.
// To add or re-encrypt one, run scripts/encrypt-case-study.py.

export const protectedCaseStudies: Record<string, { title: string; file: string }> = {
  jiva: { title: "JIVA", file: "/case-studies/jiva.enc" },
  apperture: { title: "Apperture", file: "/case-studies/apperture.enc" },
  "bial-pulse": { title: "BIAL Pulse", file: "/case-studies/bial-pulse.enc" },
};
