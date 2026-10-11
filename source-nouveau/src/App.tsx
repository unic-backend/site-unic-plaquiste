import { MotionConfig } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Services from "./components/Services";
import About from "./components/About";
import Projects from "./components/Projects";
import Process from "./components/Process";
import QuoteCalculator from "./components/QuoteCalculator";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Floating from "./components/Floating";

// Téléphone / tablette : aucune animation de déplacement ou de zoom (fondu seulement) = défilement fluide.
const TOUCH = typeof window !== "undefined" && window.matchMedia("(hover: none)").matches;

export default function App() {
  return (
    <MotionConfig reducedMotion={TOUCH ? "always" : "user"}>
    <div className="min-h-screen bg-[#f6f7fd] font-sans">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <About />
        <Projects />
        <Process />
        <QuoteCalculator />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <Floating />
    </div>
    </MotionConfig>
  );
}
