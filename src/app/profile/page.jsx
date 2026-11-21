import Link from "next/link";

export default function ProfilePage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 p-6">
      {/* Ambient Background Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/15 blur-3xl" />

      <div className="relative z-10 flex w-full max-w-md flex-col items-center rounded-3xl border border-white/10 bg-white/5 p-8 text-center shadow-2xl backdrop-blur-xl">
        {/* Profile Picture with Gradient Border Ring */}
        <div className="relative rounded-full bg-gradient-to-tr from-indigo-500 via-blue-500 to-cyan-400 p-1 shadow-xl shadow-indigo-500/20">
          <img
            src="/profile.jpg"
            alt="Profile Picture"
            className="h-36 w-36 rounded-full border-4 border-slate-950 object-cover"
          />
        </div>

        {/* Student Info */}
        <span className="mt-5 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-3 py-1 text-xs font-medium tracking-wide text-indigo-300 uppercase">
          HCDC Student
        </span>

        <h1 className="mt-3 text-2xl font-bold tracking-tight text-white">
          My Profile
        </h1>
        <p className="mt-1 text-sm text-slate-400">
          Holy Cross of Davao College
        </p>

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
