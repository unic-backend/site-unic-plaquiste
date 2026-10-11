import { MapPin, Navigation } from "lucide-react";
import { MAPS_ROUTE, ZONES } from "../data/content";
import { Reveal, SectionHead } from "./Reveal";

export default function Zones() {
  return (
    <section id="zones" className="relative overflow-hidden bg-[#f6f7fd] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead eyebrow="Où nous intervenons" title={<>Zones <span className="text-gold-600">desservies</span></>} desc="Nous intervenons à Dakar, partout au Sénégal sur devis, et sur demande à l'international." />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {ZONES.map((z, i) => (
            <Reveal key={z.title} delay={i * 0.08}>
              <div className="h-full rounded-3xl bg-white p-7 shadow-[0_18px_50px_-18px_rgba(2,8,58,.25)] ring-1 ring-slate-100">
                <span className="bg-royal-deep flex h-12 w-12 items-center justify-center rounded-2xl text-gold-400"><MapPin className="h-6 w-6" /></span>
                <h3 className="mt-4 font-display text-xl tracking-wide text-royal-950">{z.title.toUpperCase()}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-slate-600">{z.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8 text-center">
          <a href={MAPS_ROUTE} target="_blank" rel="noreferrer" className="bg-royal-deep inline-flex items-center gap-2 rounded-2xl px-7 py-4 font-condensed text-lg font-extrabold uppercase tracking-[0.1em] text-white">
            <Navigation className="h-5 w-5 text-gold-400" /> Obtenir l'itinéraire
          </a>
        </Reveal>
      </div>
    </section>
  );
}
