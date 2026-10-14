import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Phone, Play, ShieldCheck, Star, Timer } from "lucide-react";
import { IMAGES, PHONE, PHONE_LINK, WHATSAPP, REAL_ANCHOR } from "../data/content";
import { SenegalFlag } from "./Logo";
import HeroSlides from "./HeroSlides";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

/** Bannière vers le portfolio (page /portfolio/, avec le PDF à télécharger). */
function PortfolioBanner({ className = "" }: { className?: string }) {
  return (
    <motion.a href="/portfolio/" variants={fadeUp} initial="hidden" animate="show" custom={0}
      aria-label="Voir notre portfolio : nos projets en photos"
      className={`group items-center gap-3 rounded-2xl border border-gold-500/60 bg-royal-950/70 p-2 pr-4 shadow-[0_18px_44px_-18px_rgba(255,196,0,.55)] backdrop-blur transition hover:-translate-y-0.5 hover:border-gold-400 ${className}`}>
      <span className="bg-gold-gloss flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-royal-950">
        <BookOpen className="h-6 w-6" />
      </span>
      <span className="min-w-0 flex-1 leading-tight">
        <span className="block font-condensed text-lg font-extrabold uppercase tracking-[0.08em] text-white">Voir notre portfolio</span>
        <span className="block truncate text-[13px] text-royal-100/80">Nos projets en photos · version PDF</span>
      </span>
      <ArrowRight className="h-5 w-5 shrink-0 text-gold-400 transition-transform group-hover:translate-x-1" />
    </motion.a>
  );
}

export default function Hero() {
  return (
    <section id="accueil" className="bg-royal-deep noise relative overflow-hidden pt-[84px] lg:pt-[112px]">
      {/* backdrop décor */}
      {/* photo de fond sombre */}
      <img src={IMAGES.heroBg} alt="" aria-hidden="true" loading="lazy" decoding="async" className="absolute inset-0 hidden h-full w-full object-cover object-center lg:block" />
      {/* mobile : fond bleu classique avec quadrillage ; ordinateur : photo */}
      <div className="blueprint-grid absolute inset-0 lg:hidden" />
      <div className="absolute inset-0 hidden bg-gradient-to-r from-royal-950/85 via-royal-950/65 to-royal-950/20 lg:block" />
      <div className="absolute inset-0 hidden bg-gradient-to-t from-royal-950/80 via-transparent to-royal-950/20 lg:block" />
      <div className="absolute -left-40 top-20 h-[480px] w-[480px] rounded-full bg-royal-500/25 blur-[120px]" />
      <div className="absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full bg-gold-500/15 blur-[120px]" />
      <div className="absolute left-1/2 top-0 h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-gold-500/60 to-transparent" />
      {/* giant watermark */}
      <div className="pointer-events-none absolute -bottom-8 left-0 select-none whitespace-nowrap font-display text-[22vw] leading-none text-white/[0.03]">
        UNIC PLAQUISTE
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 pt-10 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:pb-24 lg:pt-16">
        {/* ------- left ------- */}
        <div>
          <PortfolioBanner className="mb-6 flex lg:hidden" />
          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}
            className="inline-flex max-w-full items-center gap-2 rounded-full border border-gold-500/30 bg-white/5 py-1.5 pl-1.5 pr-4 backdrop-blur">
            <span className="bg-gold-gloss flex items-center gap-1 rounded-full px-3 py-1 font-condensed text-[13px] font-extrabold uppercase tracking-widest text-royal-950">
              <Star className="h-3.5 w-3.5 fill-royal-950" /> 8 ans
            </span>
            <span className="whitespace-nowrap font-condensed text-[12px] font-bold uppercase tracking-[0.12em] text-white/90 sm:text-[13px] sm:tracking-[0.18em]">
              Plaquiste · Dakar, Sénégal
            </span>
          </motion.div>

          <motion.h1 variants={fadeUp} initial="hidden" animate="show" custom={1}
            className="mt-6 font-display text-[2.7rem] leading-[0.98] tracking-wide text-white sm:text-6xl lg:text-[4.4rem]">
            L'ART DU <span className="text-gold-3d">PLACO</span>
            <br />
            <span className="text-silver-3d">&amp; DE LA DÉCO</span>
            <br />
            <span className="mt-2 flex items-center gap-3 text-[1.4rem] tracking-[0.2em] text-white/90 sm:text-2xl">
              <span className="h-[3px] w-12 bg-gold-500" /> AU SÉNÉGAL <SenegalFlag className="h-5 w-8 rounded shadow" />
            </span>
            <span className="sr-only"> — UniC Plaquiste, plaquiste à Dakar</span>
          </motion.h1>

          <motion.p variants={fadeUp} initial="hidden" animate="show" custom={2}
            className="mt-5 max-w-xl text-lg leading-relaxed text-royal-100/85">
            <strong className="text-white">Unic Plaquiste</strong>, plaquiste à Dakar : faux plafonds BA13, cloisons, staff &amp; LED. Nous transformons
            vos villas, bureaux et commerces avec précision : placo, faux plafonds et finitions sur-mesure.
            <span className="text-gold-300"> Devis gratuit sous 48h.</span>
          </motion.p>

          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={3} className="mt-8 flex flex-wrap items-center gap-4">
            <a href={WHATSAPP} target="_blank" rel="noreferrer"
              className="bg-gold-gloss group relative overflow-hidden rounded-2xl px-7 py-4 font-condensed text-lg font-extrabold uppercase tracking-[0.1em] text-royal-950 shadow-[0_18px_44px_-10px_rgba(255,196,0,.7)] transition hover:-translate-y-1 hover:shadow-[0_24px_54px_-10px_rgba(255,196,0,.85)]">
              <span className="relative z-10 flex items-center gap-2">
                Devis gratuit <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </a>
            <a href={REAL_ANCHOR}
              className="group flex items-center gap-3 rounded-2xl border border-white/20 bg-white/5 px-6 py-4 backdrop-blur transition hover:border-gold-500/60 hover:bg-white/10">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/25 transition group-hover:bg-gold-500 group-hover:text-royal-950">
                <Play className="h-4 w-4 fill-current" />
              </span>
              <span className="font-condensed text-lg font-bold uppercase tracking-[0.1em] text-white">
                Nos réalisations
              </span>
            </a>
          </motion.div>

          {/* trust row */}
          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={4} className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {["A", "M", "S", "S"].map((t, i) => (
                  <span key={t} className={`flex h-10 w-10 items-center justify-center rounded-full border-2 border-royal-950 font-condensed text-xs font-extrabold ${i % 2 ? "bg-gold-500 text-royal-950" : "bg-white text-royal-900"}`}>
                    {t}
                  </span>
                ))}
              </div>
              <div className="text-sm leading-tight text-white/80">
                <div className="flex items-center gap-0.5 text-gold-400">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}
                </div>
                <strong className="text-white">Avis clients</strong> sur Google
              </div>
            </div>
            <div className="hidden h-10 w-px bg-white/15 sm:block" />
            <div className="flex items-center gap-5 text-[13px] font-semibold text-white/75">
              <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-gold-400" /> Travail soigné</span>
              <span className="flex items-center gap-1.5"><Timer className="h-4 w-4 text-gold-400" /> Devis 48h</span>
            </div>
          </motion.div>
        </div>

        {/* ------- right visual ------- */}
        <div className="mx-auto w-full max-w-[560px]">
        <PortfolioBanner className="mb-5 hidden lg:flex" />
        <motion.div initial={{ opacity: 0, scale: 0.94, y: 24 }} animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }} className="relative w-full">
          {/* main frame */}
          <div className="relative overflow-hidden rounded-[28px] border-[3px] border-gold-500/70 shadow-[0_40px_90px_-20px_rgba(0,0,0,.7),0_0_60px_-10px_rgba(255,196,0,.35)]">
            <HeroSlides />
          </div>
          {/* rotating badge */}
          <div className="absolute -top-7 right-6 hidden h-28 w-28 items-center justify-center sm:flex">
            <svg viewBox="0 0 100 100" className="animate-spin-slow absolute inset-0 h-full w-full">
              <defs><path id="circ" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" /></defs>
              <circle cx="50" cy="50" r="49" className="fill-royal-950" stroke="#FFC400" strokeWidth="1.5" />
              <text className="fill-gold-400 font-condensed" style={{ fontSize: 11.5, fontWeight: 800, letterSpacing: 2.5 }}>
                <textPath href="#circ">UNIC PLAQUISTE • SÉNÉGAL • DEVIS GRATUIT •</textPath>
              </text>
            </svg>
            <a href={PHONE_LINK} className="bg-gold-gloss animate-pulse-gold flex h-12 w-12 items-center justify-center rounded-full text-royal-950">
              <Phone className="h-5 w-5" />
            </a>
          </div>
        </motion.div>
        </div>
      </div>

      {/* phone strip mobile */}
      <div className="relative border-t border-white/10 bg-royal-950/60 px-4 py-3 backdrop-blur lg:hidden">
        <a href={PHONE_LINK} className="mx-auto flex w-fit items-center gap-2 font-condensed text-lg font-extrabold uppercase tracking-widest text-gold-400">
          <Phone className="h-5 w-5 animate-pulse" /> Appelez : {PHONE}
        </a>
      </div>
    </section>
  );
}
