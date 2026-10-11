import { ClipboardCheck, DraftingCompass, Hammer, Sparkles } from "lucide-react";
import { Reveal, SectionHead } from "./Reveal";

const STEPS = [
  {
    n: "01",
    icon: ClipboardCheck,
    title: "Visite & devis gratuit",
    desc: "Visite sur place ou étude sur plans, écoute de vos envies. Devis détaillé et gratuit sous 48h.",
    meta: "Gratuit — 48h",
  },
  {
    n: "02",
    icon: DraftingCompass,
    title: "Plan & choix des matériaux",
    desc: "Choix des matériaux et des finitions, délai précisé dans le devis. Vous validez tout avant le début des travaux.",
    meta: "Validation client",
  },
  {
    n: "03",
    icon: Hammer,
    title: "Réalisation soignée",
    desc: "Protection des lieux, pose soignée, chantier propre et délais respectés.",
    meta: "Chantier propre",
  },
  {
    n: "04",
    icon: Sparkles,
    title: "Finitions & réception",
    desc: "Contrôle des finitions, nettoyage complet et réception du chantier avec vous.",
    meta: "Réception",
  },
];

export default function Process() {
  return (
    <section id="methode" className="relative overflow-hidden bg-[#f6f7fd] py-20 lg:py-28">
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-50" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead
          eyebrow="Notre méthode"
          title={<>Un chantier <span className="text-gold-600">sans stress,</span> en 4 étapes.</>}
          desc="Un processus clair, transparent et sans surprise."
        />

        <div className="relative mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {/* connector line */}
          <div className="absolute left-0 right-0 top-[52px] hidden h-[3px] lg:block">
            <div className="h-full w-full bg-gradient-to-r from-royal-200 via-gold-400 to-royal-200 opacity-60" />
          </div>

          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.1}>
              <div className="group relative h-full rounded-3xl bg-white p-7 shadow-[0_18px_50px_-18px_rgba(2,8,58,.25)] ring-1 ring-slate-100 transition hover:-translate-y-2 hover:shadow-[0_28px_60px_-18px_rgba(255,170,0,.45)] hover:ring-gold-500/50">
                <div className="flex items-center justify-between">
                  <span className="bg-royal-deep relative z-10 flex h-[72px] w-[72px] items-center justify-center rounded-2xl text-gold-400 shadow-lg transition group-hover:bg-gold-500 group-hover:text-royal-950">
                    <s.icon className="h-8 w-8" />
                  </span>
                  <span className="font-display text-5xl text-slate-100 transition group-hover:text-gold-200">{s.n}</span>
                </div>
                <h3 className="mt-5 font-display text-xl tracking-wide text-royal-950">{s.title.toUpperCase()}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-slate-600">{s.desc}</p>
                <span className="mt-5 inline-block rounded-full bg-royal-50 px-3.5 py-1.5 font-condensed text-[12.5px] font-extrabold uppercase tracking-[0.18em] text-royal-800 ring-1 ring-royal-100 group-hover:bg-gold-200/40 group-hover:text-gold-700 group-hover:ring-gold-500/40">
                  {s.meta}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
