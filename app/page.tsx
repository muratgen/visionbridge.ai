import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import WhoWeServe from "@/components/WhoWeServe";
import Services from "@/components/Services";
import AICapabilities from "@/components/AICapabilities";
import HowWeWork from "@/components/HowWeWork";
import WhyVisionBridge from "@/components/WhyVisionBridge";
import FinalCTA from "@/components/FinalCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <WhoWeServe />
        <Services />
        <AICapabilities />
        <HowWeWork />
        <WhyVisionBridge />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
