import { useEffect, useState } from "react";
import { AnimatePresence, m as motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { TESTIMONIALS } from "../data/content";
import { SectionHead } from "./Reveal";

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState(1);

  const go = (d: number) => {
    setDir(d);
    setIdx((p) => (p + d + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  useEffect(() => {
    const t = setInterval(() => go(1), 6000);
    return () => clearInterval(t);
  }, []);

  if (TESTIMONIALS.length === 0) return null;   // pas de faux avis : la section n'apparaît qu'avec de vrais avis Google
  const cur = TESTIMONIALS[idx];

  return (
    <section id="avis" className="relative overflow-hidden bg-[#f6f7fd] py-20 lg:py-28">
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-50" />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHead
          eyebrow="Ils nous font confiance"
          title={<>Ils nous font <span className="text-gold-600">confiance.</span></>}
          desc="Les retours de nos clients. Retrouvez aussi tous les avis sur Google."
        />

        <div className="relative mt-12">
          <div className="overflow-hidden rounded-[28px] bg-white shadow-[0_28px_70px_-24px_rgba(2,8,58,.35)] ring-1 ring-slate-100">
            <div className="h-2 bg-gradient-to-r from-royal-800 via-gold-500 to-royal-800" />
            <div className="relative min-h-[300px] p-8 sm:p-12">
              <Quote className="absolute right-8 top-8 h-16 w-16 text-gold-200" />
              <AnimatePresence mode="wait" custom={dir}>
                <motion.div
                  key={idx}
                  custom={dir}
                  initial={{ opacity: 0, x: dir * 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: dir * -60 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="flex items-center gap-1 text-gold-500">
                    {Array.from({ length: cur.stars }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <blockquote className="mt-5 max-w-3xl text-xl leading-relaxed text-royal-950 sm:text-2xl">
                    « {cur.text} »
                  </blockquote>
                  <div className="mt-7 flex items-center gap-4">
                    <span className="bg-royal-deep flex h-14 w-14 items-center justify-center rounded-2xl font-display text-lg tracking-wide text-gold-400">
                      {cur.initial}
                    </span>
                    <div>
                      <p className="font-condensed text-lg font-extrabold uppercase tracking-wide text-royal-950">{cur.name}</p>
                      <p className="text-[14px] font-semibold text-slate-500">{cur.role}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* controls */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <button onClick={() => go(-1)} aria-label="Avis précédent" className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-royal-900 shadow-lg ring-1 ring-slate-200 transition hover:bg-royal-950 hover:text-gold-400">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button key={i} onClick={() => { setDir(i > idx ? 1 : -1); setIdx(i); }} aria-label={`Avis ${i + 1}`}
                  className={`h-2.5 rounded-full transition-all ${i === idx ? "w-10 bg-gold-500" : "w-2.5 bg-slate-300 hover:bg-slate-400"}`} />
              ))}
            </div>
            <button onClick={() => go(1)} aria-label="Avis suivant" className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-royal-900 shadow-lg ring-1 ring-slate-200 transition hover:bg-royal-950 hover:text-gold-400">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
