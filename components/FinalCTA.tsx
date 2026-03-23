export default function FinalCTA() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[400px] bg-primary-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
          Ready to Bridge Vision{" "}
          <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
            to Value?
          </span>
        </h2>
        <p className="mt-6 text-lg text-surface-100/60 max-w-2xl mx-auto leading-relaxed">
          Whether you&apos;re an enterprise defining your AI strategy or a
          startup scaling your engineering team — let&apos;s talk about what
          VisionBridge.ai can do for you.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:murat@visionbridge.ai"
            className="inline-flex items-center rounded-lg bg-primary-600 px-8 py-4 text-base font-semibold text-white hover:bg-primary-500 transition-all duration-200 shadow-xl shadow-primary-600/25 hover:shadow-primary-500/35 hover:-translate-y-0.5"
          >
            Start a Conversation
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
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
          <a
            href="#who-we-serve"
            className="inline-flex items-center rounded-lg border border-white/10 bg-white/5 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-all duration-200 hover:-translate-y-0.5"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
