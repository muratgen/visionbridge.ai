export default function Services() {
  const startupServices = [
    {
      title: "Go-to-Market Support",
      desc: "Accelerate your launch with product strategy, market positioning, and technical enablement tailored for growth.",
    },
    {
      title: "Engineering Team Augmentation",
      desc: "Embed top-tier engineers into your team — software, data, and AI/ML — without the overhead of traditional hiring.",
    },
    {
      title: "Software Engineering",
      desc: "Full-stack development with modern architectures, from web and mobile to APIs and cloud infrastructure.",
    },
    {
      title: "Data Engineering",
      desc: "Build reliable data pipelines, lakes, and platforms that fuel your product and analytics capabilities.",
    },
    {
      title: "AI/ML Engineering",
      desc: "Design, train, and deploy machine learning models that create real product differentiation.",
    },
    {
      title: "Customer Engineering & Support",
      desc: "In-time-zone technical support and customer engineering so your users always have expert help nearby.",
    },
    {
      title: "Geographic Expansion",
      desc: "Enter Europe, Middle East, Asia, and North America with local delivery teams and operational support.",
    },
  ];

  const enterpriseServices = [
    {
      title: "AI Strategy & Roadmap",
      desc: "Define a clear, actionable AI transformation roadmap aligned to business priorities and value creation.",
    },
    {
      title: "Executive Advisory",
      desc: "Seasoned advisors who bridge the gap between boardroom ambition and technical reality.",
    },
    {
      title: "Rapid Prototyping",
      desc: "Validate ideas fast with working prototypes that prove business value before committing to full-scale builds.",
    },
    {
      title: "Scaling AI Capabilities",
      desc: "Take validated use cases from pilot to production across business units and geographies.",
    },
    {
      title: "Function Transformation",
      desc: "Reimagine purchasing, finance, sales, and operations through AI-powered process transformation.",
    },
    {
      title: "Digital Transformation",
      desc: "Modernize operating models, technology stacks, and organizational capabilities for an AI-first world.",
    },
  ];

  return (
    <section id="services" className="relative py-24 lg:py-32 grid-bg">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-surface-100/50 max-w-2xl mx-auto">
            Tailored capabilities for every stage of growth and transformation.
          </p>
        </div>

        {/* Startup Services */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-primary-500/30 to-transparent" />
            <h3 className="text-lg font-semibold text-primary-400 uppercase tracking-wider shrink-0">
              Startup Growth Services
            </h3>
            <div className="h-px flex-1 bg-gradient-to-l from-primary-500/30 to-transparent" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {startupServices.map((s) => (
              <div
                key={s.title}
                className="group rounded-xl border border-white/5 bg-white/[0.02] p-6 hover:border-primary-500/20 hover:bg-white/[0.04] transition-all duration-300"
              >
                <h4 className="text-base font-semibold text-white mb-2 group-hover:text-primary-300 transition-colors">
                  {s.title}
                </h4>
                <p className="text-sm text-surface-100/50 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Enterprise Services */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-accent-500/30 to-transparent" />
            <h3 className="text-lg font-semibold text-accent-400 uppercase tracking-wider shrink-0">
              Enterprise Transformation Services
            </h3>
            <div className="h-px flex-1 bg-gradient-to-l from-accent-500/30 to-transparent" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {enterpriseServices.map((s) => (
              <div
                key={s.title}
                className="group rounded-xl border border-white/5 bg-white/[0.02] p-6 hover:border-accent-500/20 hover:bg-white/[0.04] transition-all duration-300"
              >
                <h4 className="text-base font-semibold text-white mb-2 group-hover:text-accent-400 transition-colors">
                  {s.title}
                </h4>
                <p className="text-sm text-surface-100/50 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
