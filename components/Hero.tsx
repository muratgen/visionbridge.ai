"use client";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary-600/20 rounded-full blur-[128px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent-500/15 rounded-full blur-[128px] animate-pulse-glow animation-delay-200" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 pt-24 pb-20 text-center">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-500/20 bg-primary-500/5 px-4 py-1.5 text-sm text-primary-300 mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-400 animate-pulse" />
            AI Transformation &middot; Advisory &middot; Engineering
          </div>
        </div>

        <h1 className="animate-fade-in-up animation-delay-200 text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] max-w-4xl mx-auto">
          Bridge Vision to Value{" "}
          <span className="bg-gradient-to-r from-primary-400 via-accent-400 to-primary-300 bg-clip-text text-transparent">
            with AI
          </span>
        </h1>

        <p className="animate-fade-in-up animation-delay-400 mt-6 text-lg sm:text-xl text-surface-100/60 max-w-2xl mx-auto leading-relaxed">
          From AI strategy to scaled execution — we help enterprises transform
          and startups accelerate with world-class advisory, engineering, and
          global delivery.
        </p>

        <div className="animate-fade-in-up animation-delay-600 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#who-we-serve"
            className="inline-flex items-center rounded-lg bg-primary-600 px-7 py-3.5 text-base font-semibold text-white hover:bg-primary-500 transition-all duration-200 shadow-xl shadow-primary-600/25 hover:shadow-primary-500/35 hover:-translate-y-0.5"
          >
            Explore Our Services
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-lg border border-white/10 bg-white/5 px-7 py-3.5 text-base font-semibold text-white hover:bg-white/10 transition-all duration-200 hover:-translate-y-0.5"
          >
            Talk to Us
          </a>
        </div>

        {/* Stats strip */}
        <div className="animate-fade-in-up animation-delay-600 mt-20 grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-3xl mx-auto">
          {[
            { value: "4", label: "Continents Served" },
            { value: "AI-First", label: "Delivery Model" },
            { value: "50+", label: "Engagements" },
            { value: "24/7", label: "Global Coverage" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="mt-1 text-sm text-surface-100/50">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface-950 to-transparent" />
    </section>
  );
}
