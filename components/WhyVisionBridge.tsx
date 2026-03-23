export default function WhyVisionBridge() {
  const reasons = [
    {
      title: "Strategy Meets Execution",
      desc: "We don't just advise — we build. Our team bridges the gap between boardroom strategy and production-grade implementation.",
    },
    {
      title: "Advisory + Engineering",
      desc: "Seasoned executives and world-class engineers working together. No handoff gaps, no lost context, no translation tax.",
    },
    {
      title: "Startups & Enterprises",
      desc: "We serve both — bringing startup agility to enterprise projects and enterprise discipline to scaling startups.",
    },
    {
      title: "Outcome-Oriented",
      desc: "Every engagement is structured around business outcomes, not billable hours. We validate value early and scale what works.",
    },
    {
      title: "Global Delivery",
      desc: "Teams across Europe, Middle East, Asia, and North America. In-time-zone support, follow-the-sun coverage, local market knowledge.",
    },
    {
      title: "Speed with Quality",
      desc: "Startup velocity paired with enterprise-quality execution. Rapid prototyping, rigorous validation, reliable scaling.",
    },
  ];

  return (
    <section id="why-visionbridge" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Why VisionBridge
          </h2>
          <p className="mt-4 text-lg text-surface-100/50 max-w-2xl mx-auto">
            We exist because the world doesn&apos;t need another strategy deck
            or another dev shop. It needs both — working as one.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="group rounded-xl border border-white/5 bg-white/[0.02] p-6 hover:border-primary-500/15 hover:bg-white/[0.04] transition-all duration-300"
            >
              <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-primary-300 transition-colors">
                {r.title}
              </h4>
              <p className="text-sm text-surface-100/50 leading-relaxed">
                {r.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
