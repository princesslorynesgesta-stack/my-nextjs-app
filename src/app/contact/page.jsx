import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 p-6">
      {/* Ambient Background Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/15 blur-3xl" />

      <div className="relative z-10 w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 text-center shadow-2xl backdrop-blur-xl">
        {/* Icon Badge */}
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-500/10 text-cyan-400 shadow-inner">
          <svg
            className="h-7 w-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
        </div>

        <h1 className="text-2xl font-bold tracking-tight text-white">
          Contact Me
        </h1>
        <p className="mt-1.5 text-sm text-slate-400">
          Official Holy Cross of Davao College Email
        </p>

        {/* Email Pill */}
        <div className="mt-6 flex items-center justify-center gap-2.5 rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-4 shadow-inner">
          <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-400" />
          <p className="font-mono text-sm font-medium text-cyan-300 sm:text-base">
            Princesslorynes.gesta@hcdc.edu.ph
          </p>
        </div>

        {/* Back Button */}
        <Link
          href="/"
          className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/10 px-5 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-white/20"
        >
          <span>←</span>
          <span>Back to Home</span>
        </Link>
      </div>
    </main>
  );
}