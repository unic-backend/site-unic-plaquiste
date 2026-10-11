import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, MapPin, Phone, Play, ShieldCheck, Star, Timer } from "lucide-react";
import { IMAGES, PHONE, PHONE_LINK, WHATSAPP } from "../data/content";
import { SenegalFlag } from "./Logo";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Hero() {
  return (
    <section id="accueil" className="bg-royal-deep noise relative overflow-hidden pt-[84px] lg:pt-[112px]">
      {/* backdrop décor */}
      {/* photo de fond sombre */}
      <img src={IMAGES.heroBg} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover object-top opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-royal-950/75 via-royal-950/40 to-royal-950/90" />
      <div className="blueprint-grid absolute inset-0" />
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
          </motion.h1>

          <motion.p variants={fadeUp} initial="hidden" animate="show" custom={2}
            className="mt-5 max-w-xl text-lg leading-relaxed text-royal-100/85">
            Faux plafonds, cloisons, staff &amp; LED : <strong className="text-white">Unic Plaquiste</strong> transforme
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
            <a href="#realisations"
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
        <motion.div initial={{ opacity: 0, scale: 0.94, y: 24 }} animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }} className="relative mx-auto w-full max-w-[560px]">
          {/* main frame */}
          <div className="relative overflow-hidden rounded-[28px] border-[3px] border-gold-500/70 shadow-[0_40px_90px_-20px_rgba(0,0,0,.7),0_0_60px_-10px_rgba(255,196,0,.35)]">
            <img src={IMAGES.hero} alt="Salon avec faux plafond et éclairage LED réalisé par UniC Plaquiste à Dakar" className="aspect-[4/4.6] w-full object-cover sm:aspect-[4/4.2]" />
            <div className="absolute inset-0 bg-gradient-to-t from-royal-950/85 via-transparent to-transparent" />
            {/* location tag */}
            <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-royal-950/80 px-3.5 py-1.5 font-condensed text-[13px] font-bold uppercase tracking-widest text-white backdrop-blur">
              <MapPin className="h-3.5 w-3.5 text-gold-400" /> Dakar — Sénégal
            </div>
            {/* bottom info */}
            <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-xl">
              <div>
                <p className="font-condensed text-[12px] font-bold uppercase tracking-[0.2em] text-gold-300">Réalisation UniC</p>
                <p className="font-display text-lg tracking-wide text-white">FAUX PLAFOND &amp; LED</p>
              </div>
              <span className="flex items-center gap-1.5 rounded-full bg-emerald-400/20 px-3 py-1.5 text-[13px] font-bold text-emerald-300 ring-1 ring-emerald-400/40">
                <BadgeCheck className="h-4 w-4" /> Livré
              </span>
            </div>
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

      {/* phone strip mobile */}
      <div className="relative border-t border-white/10 bg-royal-950/60 px-4 py-3 backdrop-blur lg:hidden">
        <a href={PHONE_LINK} className="mx-auto flex w-fit items-center gap-2 font-condensed text-lg font-extrabold uppercase tracking-widest text-gold-400">
          <Phone className="h-5 w-5 animate-pulse" /> Appelez : {PHONE}
        </a>
      </div>
    </section>
  );
}
