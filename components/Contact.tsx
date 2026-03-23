export default function Contact() {
  return (
    <section id="contact" className="relative py-24 lg:py-32 grid-bg">
      <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Get in Touch
        </h2>
        <p className="mt-4 text-lg text-surface-100/50 max-w-xl mx-auto leading-relaxed">
          Tell us about your challenge. We&apos;ll respond with a clear
          perspective on how we can help — no sales pitch, just substance.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:murat@visionbridge.ai"
            className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-8 py-4 text-base font-semibold text-white hover:bg-primary-500 transition-all duration-200 shadow-xl shadow-primary-600/25 hover:shadow-primary-500/35 hover:-translate-y-0.5"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Email Us
          </a>
          <a
            href="#services"
            className="inline-flex items-center rounded-lg border border-white/10 bg-white/5 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-all duration-200 hover:-translate-y-0.5"
          >
            Explore Services
          </a>
        </div>
      </div>
    </section>
  );
}
