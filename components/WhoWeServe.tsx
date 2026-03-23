export default function WhoWeServe() {
  return (
    <section id="who-we-serve" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Who We Serve
          </h2>
          <p className="mt-4 text-lg text-surface-100/50 max-w-2xl mx-auto">
            Whether you&apos;re scaling a startup or transforming an enterprise,
            we meet you where you are.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Startups Card */}
          <div className="group relative rounded-2xl border border-white/5 bg-white/[0.02] p-8 lg:p-10 hover:border-primary-500/20 hover:bg-white/[0.04] transition-all duration-300">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary-500/10 px-3 py-1 text-xs font-semibold text-primary-400 uppercase tracking-wider mb-6">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                For Startups
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Accelerate Growth, Expand Globally
              </h3>
              <p className="text-surface-100/60 mb-6 leading-relaxed">
                Growth-stage startups need speed, talent, and reach. We provide
                the engineering firepower and operational support to scale your
                product, enter new markets, and serve customers across time zones.
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-white/80 mb-3 uppercase tracking-wider">
                  Common Challenges
                </h4>
                <ul className="space-y-2">
                  {[
                    "Scaling engineering and product teams quickly",
                    "Entering new geographies with local support",
                    "Maintaining quality while growing fast",
                    "Providing in-time-zone customer coverage",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-surface-100/50">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h4 className="text-sm font-semibold text-white/80 mb-3 uppercase tracking-wider">
                  How We Help
                </h4>
                <ul className="space-y-2">
                  {[
                    "Top-tier software, data, and AI/ML engineers at competitive cost",
                    "Go-to-market support and geographic expansion",
                    "In-time-zone customer engineering and support",
                    "Scalable team augmentation that grows with you",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-surface-100/50">
                      <svg className="mt-0.5 w-4 h-4 text-primary-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#services"
                className="inline-flex items-center text-sm font-semibold text-primary-400 hover:text-primary-300 transition-colors"
              >
                Explore Startup Services
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Enterprise Card */}
          <div className="group relative rounded-2xl border border-white/5 bg-white/[0.02] p-8 lg:p-10 hover:border-accent-500/20 hover:bg-white/[0.04] transition-all duration-300">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full bg-accent-500/10 px-3 py-1 text-xs font-semibold text-accent-400 uppercase tracking-wider mb-6">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                For Enterprises
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Transform with AI, at Scale
              </h3>
              <p className="text-surface-100/60 mb-6 leading-relaxed">
                Enterprises need more than strategy decks. We combine seasoned
                advisory with hands-on engineering to turn AI ambitions into
                measurable business outcomes — from first prototype to
                enterprise-wide deployment.
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-white/80 mb-3 uppercase tracking-wider">
                  Common Challenges
                </h4>
                <ul className="space-y-2">
                  {[
                    "Defining a practical AI strategy and transformation roadmap",
                    "Moving from pilots to scaled production",
                    "Validating business value before heavy investment",
                    "Modernizing operating models for AI-driven outcomes",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-surface-100/50">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h4 className="text-sm font-semibold text-white/80 mb-3 uppercase tracking-wider">
                  How We Help
                </h4>
                <ul className="space-y-2">
                  {[
                    "AI strategy and transformation roadmap",
                    "Rapid prototyping and business value validation",
                    "Scaling proven capabilities across the enterprise",
                    "Function-level transformation through AI",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-surface-100/50">
                      <svg className="mt-0.5 w-4 h-4 text-accent-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#services"
                className="inline-flex items-center text-sm font-semibold text-accent-400 hover:text-accent-400/80 transition-colors"
              >
                Explore Enterprise Services
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
