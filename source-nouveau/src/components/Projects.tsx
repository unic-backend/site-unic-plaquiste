import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, MapPin, Maximize2 } from "lucide-react";
import { PROJECTS, WHATSAPP } from "../data/content";
import { SectionHead } from "./Reveal";

const FILTERS = ["Tous", "Plafonds", "Cloisons", "Décoration"];

export default function Projects() {
  const [filter, setFilter] = useState("Tous");
  const list = PROJECTS.filter((p) => filter === "Tous" || p.cat === filter);

  return (
    <section id="realisations" className="bg-royal-deep noise relative overflow-hidden py-20 lg:py-28">
      <div className="blueprint-grid absolute inset-0" />
      <div className="absolute -right-40 top-10 h-[500px] w-[500px] rounded-full bg-royal-500/20 blur-[130px]" />
      <div className="pointer-events-none absolute -top-4 left-0 select-none whitespace-nowrap font-display text-[18vw] leading-none text-white/[0.025]">
        RÉALISATIONS
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead
          dark
          eyebrow="Nos réalisations"
          title={<>Des chantiers qui parlent <span className="text-gold-3d">d'eux-mêmes.</span></>}
          desc="Quelques projets qui parlent pour nous : faux plafonds, cloisons et décoration murale réalisés à Dakar."
        />

        {/* filters */}
        <div className="mt-9 flex flex-wrap justify-center gap-2.5">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-6 py-2.5 font-condensed text-[15px] font-extrabold uppercase tracking-[0.14em] transition-all ${
                filter === f
                  ? "bg-gold-gloss text-royal-950 shadow-[0_10px_28px_-8px_rgba(255,196,0,.7)]"
                  : "border border-white/20 bg-white/5 text-white/70 hover:border-gold-500/50 hover:text-white"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {list.map((p) => (
              <motion.figure
                layout
                key={p.title}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.4 }}
                className="group relative cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-royal-950 shadow-xl"
              >
                <img src={p.img} alt={p.title} loading="lazy" className="aspect-[4/3.4] w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-royal-950 via-royal-950/20 to-transparent opacity-90" />
                {/* top badges */}
                <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
                  <span className="bg-gold-gloss rounded-full px-3.5 py-1 font-condensed text-[12px] font-extrabold uppercase tracking-[0.16em] text-royal-950">
                    {p.cat}
                  </span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur transition group-hover:opacity-100">
                    <Maximize2 className="h-4.5 w-4.5" />
                  </span>
                </div>
                {/* bottom */}
                <figcaption className="absolute inset-x-0 bottom-0 p-5">
                  <p className="flex items-center gap-1.5 font-condensed text-[13px] font-bold uppercase tracking-[0.18em] text-gold-300">
                    <MapPin className="h-3.5 w-3.5" /> {p.loc}
                  </p>
                  <h3 className="mt-1 font-display text-xl tracking-wide text-white">{p.title.toUpperCase()}</h3>
                  <span className="mt-3 flex items-center gap-2 font-condensed text-[14px] font-extrabold uppercase tracking-[0.16em] text-white/0 transition-all duration-300 group-hover:text-gold-400">
                    Un projet similaire ? <ArrowRight className="h-4 w-4 -translate-x-2 transition-transform duration-300 group-hover:translate-x-0" />
                  </span>
                </figcaption>
                <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600 transition-transform duration-500 group-hover:scale-x-100" />
              </motion.figure>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-10 text-center">
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl border border-gold-500/50 bg-gold-500/10 px-8 py-4 font-condensed text-lg font-extrabold uppercase tracking-[0.1em] text-gold-400 transition hover:bg-gold-500 hover:text-royal-950">
            Votre projet ressemble à ça ? <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
