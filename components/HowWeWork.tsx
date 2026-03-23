export default function HowWeWork() {
  const steps = [
    {
      number: "01",
      title: "Discover",
      desc: "We immerse in your business context, understand your goals, and identify where AI can create the most value. No assumptions — just sharp diagnosis.",
    },
    {
      number: "02",
      title: "Prototype",
      desc: "We build working prototypes fast — testing ideas against real data and user needs to separate signal from noise before you invest further.",
    },
    {
      number: "03",
      title: "Validate",
      desc: "We measure business impact rigorously. Only solutions that prove tangible value move forward — protecting your budget and building stakeholder confidence.",
    },
    {
      number: "04",
      title: "Scale",
      desc: "Validated solutions are hardened for production and rolled out across teams, functions, and geographies with enterprise-grade reliability.",
    },
  ];

  return (
    <section id="how-we-work" className="relative py-24 lg:py-32 grid-bg">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            How We Work
          </h2>
          <p className="mt-4 text-lg text-surface-100/50 max-w-2xl mx-auto">
            A proven delivery model that moves from strategy to impact — with
            validation at every stage.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={step.title} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-6 h-px bg-gradient-to-r from-primary-500/30 to-transparent z-10" />
              )}
              <div className="group rounded-xl border border-white/5 bg-white/[0.02] p-6 hover:border-primary-500/15 hover:bg-white/[0.04] transition-all duration-300 h-full">
                <div className="text-3xl font-extrabold text-primary-500/20 mb-3 group-hover:text-primary-500/40 transition-colors">
                  {step.number}
                </div>
                <h4 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h4>
                <p className="text-sm text-surface-100/50 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-surface-100/40 max-w-xl mx-auto">
            From first conversation to scaled deployment, VisionBridge.ai is
            your partner across the full journey — strategy through
            implementation.
          </p>
        </div>
      </div>
    </section>
  );
}
