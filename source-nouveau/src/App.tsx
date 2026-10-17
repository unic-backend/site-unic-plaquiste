import { LazyMotion, MotionConfig, domAnimation } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Services from "./components/Services";
import About from "./components/About";
import Projects from "./components/Projects";
import Process from "./components/Process";
import QuoteCalculator from "./components/QuoteCalculator";
import BeforeAfter from "./components/BeforeAfter";
import References from "./components/References";
import Zones from "./components/Zones";
import TrustReviews from "./components/TrustReviews";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Floating from "./components/Floating";

export default function App() {
  return (
    <LazyMotion features={domAnimation} strict>
    <MotionConfig reducedMotion="user">
    <div className="min-h-screen bg-[#f6f7fd] font-sans">
      <a href="#contenu" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:font-bold focus:text-royal-950">Aller au contenu</a>
      <Navbar />
      <main id="contenu">
        <Hero />
        <Marquee />
        <Services />
        <About />
        <BeforeAfter />
        <Projects />
        <References />
        <Process />
        <QuoteCalculator />
        <Zones />
        <Testimonials />
        <TrustReviews />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <Floating />
    </div>
    </MotionConfig>
    </LazyMotion>
  );
}
