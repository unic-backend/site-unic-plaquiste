import { m as motion } from "framer-motion";
import { ArrowUpRight, Crown, Grid2X2, Home, Layers, Lightbulb, PaintRoller } from "lucide-react";
import { SERVICES } from "../data/content";
import { Reveal, SectionHead } from "./Reveal";

const ICONS: Record<string, typeof Layers> = {
  layers: Layers,
  grid: Grid2X2,
  crown: Crown,
  bulb: Lightbulb,
  paint: PaintRoller,
  home: Home,
};

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-[#f6f7fd] py-20 lg:py-28">
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-60" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead
          eyebrow="Nos expertises"
          title={<>Des finitions impeccables,<br /><span className="text-gold-600">du sol au plafond.</span></>}
          desc="Faux plafonds BA13, cloisons sèches, doublage, isolation, staff et finitions : une gamme complète de second œuvre pour la rénovation et l'aménagement intérieur de vos espaces à Dakar."
        />

        <div className="-mx-4 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain px-4 pb-4 [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-0 lg:grid-cols-3 [&::-webkit-scrollbar]:hidden">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.icon];
            const featured = i === 0;
            return (
              <motion.article
                key={s.title}
                initial={false}
                transition={{ delay: (i % 3) * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative w-[82vw] max-w-[360px] shrink-0 snap-center overflow-hidden rounded-3xl p-[2px] sm:w-auto sm:max-w-none transition-transform duration-300 hover:-translate-y-2 ${
                  featured
                    ? "bg-gradient-to-br from-gold-300 via-gold-500 to-gold-700 shadow-[0_24px_60px_-16px_rgba(255,196,0,.6)]"
                    : "bg-gradient-to-br from-royal-100 to-slate-200 hover:from-gold-300 hover:via-gold-500 hover:to-gold-700 hover:shadow-[0_24px_60px_-16px_rgba(255,196,0,.55)]"
                }`}
              >
                <div className={`relative h-full overflow-hidden rounded-[22px] p-5 sm:p-7 ${featured ? "bg-royal-deep" : "bg-white"}`}>
                  {featured && <div className="blueprint-grid absolute inset-0 opacity-70" />}
                  <div className="relative">
                    <div className="flex items-start justify-between">
                      <span className={`flex h-11 w-11 sm:h-14 sm:w-14 items-center justify-center rounded-2xl shadow-lg transition-transform duration-300 group-hover:rotate-[-6deg] group-hover:scale-110 ${featured ? "bg-gold-gloss text-royal-950" : "bg-royal-deep text-gold-400"}`}>
                        <Icon className="h-5 w-5 sm:h-7 sm:w-7" />
                      </span>
                      <span className={`flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full border transition ${featured ? "border-gold-500/40 text-gold-400 group-hover:bg-gold-500 group-hover:text-royal-950" : "border-slate-200 text-slate-400 group-hover:border-royal-950 group-hover:bg-royal-950 group-hover:text-gold-400"}`}>
                        <ArrowUpRight className="h-5 w-5" />
                      </span>
                    </div>
                    <img src={s.img} alt={s.title} loading="lazy" className="mt-3 h-32 sm:mt-5 sm:h-44 w-full rounded-2xl object-cover" />

                    <h3 className={`mt-3 font-display text-[1.25rem] sm:mt-4 sm:text-[1.45rem] tracking-wide ${featured ? "text-white" : "text-royal-950"}`}>
                      {s.title.toUpperCase()}
                    </h3>
                    <p className={`mt-1.5 text-[14.5px] sm:mt-2 sm:min-h-[66px] sm:text-[15.5px] leading-relaxed ${featured ? "text-royal-100/85" : "text-slate-600"}`}>
                      {s.desc}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-1.5 sm:mt-4 sm:gap-2">
                      {s.tags.map((t) => (
                        <span key={t} className={`rounded-full px-3 py-1 text-[12.5px] font-bold ${featured ? "bg-white/10 text-gold-300 ring-1 ring-gold-500/30" : "bg-royal-50 text-royal-800 ring-1 ring-royal-100"}`}>
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className={`mt-4 flex items-center justify-between border-t pt-3 sm:mt-6 sm:pt-5 ${featured ? "border-white/10" : "border-slate-100"}`}>
                      <span className={`font-condensed text-[12px] font-bold uppercase tracking-[0.2em] ${featured ? "text-white/50" : "text-slate-400"}`}>Devis gratuit</span>
                      <a href="#contact" className={`rounded-full px-4 py-2 sm:px-5 sm:py-2.5 font-condensed text-[14px] font-extrabold uppercase tracking-[0.14em] transition ${featured ? "bg-gold-500 text-royal-950 hover:bg-gold-400" : "bg-royal-950 text-white hover:bg-royal-700"}`}>
                        Demander
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <Reveal delay={0.1} className="mt-10 text-center">
          <p className="text-slate-500">
            Un besoin spécifique ? <a href="#contact" className="font-bold text-royal-800 underline decoration-gold-500 decoration-2 underline-offset-4 hover:text-gold-700">Parlons de votre projet</a>.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
