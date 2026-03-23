import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10">
          {/* Brand */}
          <div className="max-w-sm">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/visionbridge.ai/visionbridge-logo.png"
                alt="VisionBridge.ai"
                width={36}
                height={36}
              />
              <span className="text-lg font-bold text-white">
                VisionBridge<span className="text-primary-400">.ai</span>
              </span>
            </div>
            <p className="text-sm text-surface-100/40 leading-relaxed">
              Bridging business vision and technical execution. AI
              transformation, advisory, and engineering for enterprises and
              startups worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-x-16 gap-y-3">
            {[
              { label: "Services", href: "#services" },
              { label: "AI Capabilities", href: "#capabilities" },
              { label: "How We Work", href: "#how-we-work" },
              { label: "Why VisionBridge", href: "#why-visionbridge" },
              { label: "For Startups", href: "#who-we-serve" },
              { label: "For Enterprises", href: "#who-we-serve" },
              { label: "Contact", href: "#contact" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-surface-100/50 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-surface-100/30">
            &copy; {new Date().getFullYear()} VisionBridge.ai. All rights
            reserved.
          </p>
          <a
            href="mailto:murat@visionbridge.ai"
            className="text-xs text-surface-100/30 hover:text-white transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </footer>
  );
}
