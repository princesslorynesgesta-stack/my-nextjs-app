import Link from "next/link";

export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 p-6">
      {/* Ambient Background Glows */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 -bottom-24 h-96 w-96 rounded-full bg-cyan-600/20 blur-3xl" />

      {/* Main Card with ONLY the two required Link buttons */}
      <div className="relative z-10 flex w-full max-w-sm flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">
        <Link
          href="/profile"
          className="group relative flex w-full items-center justify-between overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-600 to-blue-600 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-indigo-500/40 active:translate-y-0"
        >
          <span>Profile</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>

        <Link
          href="/contact"
          className="group relative flex w-full items-center justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-base font-semibold text-slate-100 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/50 hover:bg-cyan-500/10 hover:text-cyan-300 active:translate-y-0"
        >
          <span>Contact</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </main>
  );
}