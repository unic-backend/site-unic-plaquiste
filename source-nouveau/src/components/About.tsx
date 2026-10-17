import { m as motion } from "framer-motion";
import { ArrowRight, Award, CheckCircle2, HardHat, Phone } from "lucide-react";
import { IMAGES, PHONE, PHONE_LINK, STATS, WHATSAPP } from "../data/content";
import { Counter, Reveal } from "./Reveal";
import { SenegalFlag } from "./Logo";

const POINTS = [
  { title: "Spécialistes du placo BA13", desc: "Cloisons sèches, faux plafonds, staff, isolation et décoration." },
  { title: "Matériaux de qualité", desc: "Des finitions soignées, du gros œuvre aux détails." },
  { title: "Chantiers propres, délais respectés", desc: "Nous précisons toujours le délai dans le devis et nous nous y tenons." },
  { title: "Devis clair, gratuit et sans surprise", desc: "Après visite ou sur plans, sans engagement." },
];


export default function About() {
  return (
    <section id="apropos" className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2">
        {/* visuals */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[28px] shadow-[0_30px_70px_-20px_rgba(2,8,58,.4)]"
          >
            <img src={IMAGES.about1} alt="Faux plafond lumineux réalisé par UniC Plaquiste à Dakar" className="aspect-[4/3] w-full object-cover sm:aspect-[4/4.4]" />
            <div className="absolute inset-0 bg-gradient-to-t from-royal-950/60 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 rounded-2xl bg-white/95 p-4 backdrop-blur">
              <span className="bg-royal-deep flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-gold-400">
                <HardHat className="h-6 w-6" />
              </span>
              <div>
                <p className="font-display text-[15px] tracking-wide text-royal-950">DEVIS GRATUIT SOUS 48H</p>
                <p className="text-[13.5px] font-medium text-slate-500">Envoyez vos photos ou plans sur WhatsApp</p>
              </div>
            </div>
          </motion.div>

          {/* second image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }}
            className="absolute -bottom-8 -right-2 hidden w-[46%] overflow-hidden rounded-3xl border-4 border-white shadow-2xl sm:block lg:-right-8"
          >
            <img src={IMAGES.about2} alt="Faux plafond avec spots et LED réalisé à Dakar" className="aspect-square w-full object-cover" />
          </motion.div>

          {/* experience badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.25 }}
            className="bg-royal-gloss absolute -top-6 -left-2 flex h-32 w-32 flex-col items-center justify-center rounded-[26px] text-center shadow-[0_20px_50px_-12px_rgba(2,8,58,.6)] ring-2 ring-gold-500 lg:-left-6"
          >
            <span className="text-gold-3d font-display text-4xl leading-none">8</span>
            <span className="mt-1 font-condensed text-[11px] font-bold uppercase tracking-[0.2em] text-white">années d'expertise</span>
          </motion.div>
        </div>

        {/* text */}
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-royal-800 px-4 py-1.5 font-condensed text-[13px] font-bold uppercase tracking-[0.22em] text-gold-400">
              <Award className="h-4 w-4" /> Pourquoi Unic Plaquiste
            </span>
            <h2 className="mt-5 font-display text-3xl leading-[1.05] tracking-wide text-royal-950 sm:text-4xl lg:text-[2.9rem]">
              LE PLAQUISTE DE CONFIANCE <span className="text-gold-600">DES DAKAROIS</span> DEPUIS 8 ANS
            </h2>
            <p className="mt-4 text-[17px] leading-relaxed text-slate-600">
              Depuis 8 ans, <strong className="text-royal-900">UniC Plaquiste</strong> façonne les intérieurs de Dakar avec une exigence d'artisan :
              des cloisons parfaitement droites, des faux plafonds qui jouent avec la lumière et des finitions sans le moindre défaut.
              Particuliers, bureaux, commerces, hôtels, architectes et promoteurs : même exigence partout. <SenegalFlag className="inline-block h-3.5 w-5 align-[-2px]" />
            </p>
            <p className="mt-3 text-[16px] leading-relaxed text-slate-600">
              Spécialistes du placo et des cloisons sèches en plaques de plâtre BA13, des faux plafonds, du staff, de l'isolation (thermique et acoustique)
              et de la décoration, nous mettons la même passion dans chaque projet, du simple salon à la rénovation intérieure complète.
              Notre signature : un chantier propre, des délais tenus et un résultat à la hauteur de vos attentes.
            </p>
            <p className="mt-3 text-[16px] leading-relaxed text-slate-600">
              Nous intervenons chez les particuliers (maisons, villas, appartements, résidences) comme pour les professionnels : bureaux, commerces, boutiques,
              restaurants, hôtels, écoles, cliniques et bâtiments industriels ou administratifs. Nous accompagnons aussi les architectes, promoteurs immobiliers
              et entreprises du bâtiment sur les faux plafonds, cloisons, isolation et aménagement intérieur, à Dakar et partout au Sénégal.
            </p>
          </Reveal>

          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            {POINTS.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="group flex gap-3 rounded-2xl border border-slate-100 bg-[#f6f7fd] p-4 transition hover:border-gold-500/60 hover:bg-gold-200/20 hover:shadow-lg">
                  <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-emerald-500 transition group-hover:scale-110" />
                  <div>
                    <p className="font-condensed text-[16px] font-extrabold uppercase tracking-wide text-royal-950">{p.title}</p>
                    <p className="mt-0.5 text-[14px] leading-snug text-slate-500">{p.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15} className="mt-8 flex flex-wrap items-center gap-4">
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="bg-royal-deep group flex items-center gap-2 rounded-2xl px-7 py-4 font-condensed text-lg font-extrabold uppercase tracking-[0.1em] text-white shadow-[0_18px_40px_-12px_rgba(2,8,58,.6)] transition hover:-translate-y-1 hover:bg-royal-700">
              Discuter du projet <ArrowRight className="h-5 w-5 text-gold-400 transition-transform group-hover:translate-x-1" />
            </a>
            <a href={PHONE_LINK} className="flex items-center gap-3 rounded-2xl border-2 border-royal-100 px-6 py-3 transition hover:border-gold-500">
              <span className="bg-gold-gloss flex h-11 w-11 items-center justify-center rounded-full text-royal-950"><Phone className="h-5 w-5" /></span>
              <span>
                <span className="block font-condensed text-[12px] font-bold uppercase tracking-[0.2em] text-slate-400">Appelez-nous</span>
                <span className="block font-display text-lg tracking-wide text-royal-950">{PHONE}</span>
              </span>
            </a>
          </Reveal>
        </div>
      </div>

      {/* stats band */}
      <div className="mx-auto mt-20 max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7 }}
          className="bg-royal-gloss noise relative overflow-hidden rounded-[28px] px-6 py-10 shadow-[0_30px_70px_-20px_rgba(2,8,58,.6)] ring-1 ring-white/20 sm:px-10"
        >
          <div className="blueprint-grid absolute inset-0" />
          <div className="absolute inset-x-10 top-0 h-[3px] rounded-full bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
          <div className="relative grid grid-cols-2 gap-8 lg:grid-cols-4">
            {STATS.map((s, i) => (
              <div key={s.label} className={`text-center ${i > 0 ? "lg:border-l lg:border-white/15" : ""}`}>
                <p className="text-gold-3d font-display text-4xl sm:text-5xl">
                  <Counter to={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-2 font-condensed text-[14px] font-bold uppercase tracking-[0.24em] text-white/80">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
