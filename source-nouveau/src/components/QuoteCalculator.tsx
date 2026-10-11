import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, BadgePercent, Calculator, Check, Crown, Grid2X2, Home, Layers } from "lucide-react";
import { OPTIONS, TYPES as TYPES_DATA, WHATSAPP } from "../data/content";
import { Reveal } from "./Reveal";

const TYPES = TYPES_DATA.map((t, k) => ({ ...t, icon: [Layers, Grid2X2, Home, Crown][k] }));

const fmt = (n: number) => n.toLocaleString("fr-FR").replace(/\u202f/g, " ") + " FCFA";

export default function QuoteCalculator() {
  const [type, setType] = useState("plafond");
  const [surface, setSurface] = useState(50);
  const [opts, setOpts] = useState<string[]>(["led"]);

  const selected = TYPES.find((t) => t.id === type)!;

  const { base, optionsTotal, total, perM2 } = useMemo(() => {
    const b = selected.price * surface;
    let o = 0;
    if (opts.includes("led")) o += OPTIONS[0].price * surface;
    if (opts.includes("spots")) o += OPTIONS[1].price * Math.max(1, Math.round(surface / 25));
    if (opts.includes("peinture")) o += OPTIONS[2].price * surface;
    if (opts.includes("isolation")) o += OPTIONS[3].price * surface;
    const t = b + o;
    return { base: b, optionsTotal: o, total: t, perM2: Math.round(t / surface) };
  }, [selected, surface, opts]);

  const toggle = (id: string) =>
    setOpts((prev) => (prev.includes(id) ? prev.filter((o) => o !== id) : [...prev, id]));

  const waLink = `${WHATSAPP.split("?")[0]}?text=${encodeURIComponent(
    `Bonjour UniC Plaquiste, estimation en ligne : ${selected.label}, ${surface} m², options: ${opts.join(", ") || "aucune"}. Total estimé : ${fmt(total)}. Je souhaite un devis précis gratuit.`
  )}`;

  return (
    <section id="devis" className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          {/* left : controls */}
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-royal-800 px-4 py-1.5 font-condensed text-[13px] font-bold uppercase tracking-[0.22em] text-gold-400">
                <Calculator className="h-4 w-4" /> Estimation instantanée
              </span>
              <h2 className="mt-5 font-display text-3xl leading-[1.05] tracking-wide text-royal-950 sm:text-4xl lg:text-[2.8rem]">
                CHIFFREZ VOTRE PROJET <span className="text-gold-600">EN 30 SECONDES</span>
              </h2>
              <p className="mt-3 text-[16.5px] text-slate-600">
                Sélectionnez votre ouvrage, ajustez la surface, ajoutez des options — le prix se calcule en direct. Devis définitif gratuit après visite.
              </p>
            </Reveal>

            {/* type */}
            <Reveal delay={0.05}>
              <p className="mt-8 font-condensed text-[14px] font-extrabold uppercase tracking-[0.2em] text-royal-800">1 — Type d'ouvrage</p>
              <div className="mt-3 grid grid-cols-2 gap-3">
                {TYPES.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setType(t.id)}
                    className={`flex items-center gap-3 rounded-2xl border-2 p-3.5 text-left transition-all ${
                      type === t.id
                        ? "border-gold-500 bg-gold-200/25 shadow-[0_12px_30px_-10px_rgba(255,196,0,.6)]"
                        : "border-slate-150 border-slate-200 bg-white hover:border-royal-300"
                    }`}
                  >
                    <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${type === t.id ? "bg-royal-950 text-gold-400" : "bg-royal-50 text-royal-800"}`}>
                      <t.icon className="h-5.5 w-5.5" />
                    </span>
                    <span>
                      <span className="block font-condensed text-[15px] font-extrabold uppercase leading-tight tracking-wide text-royal-950">{t.label}</span>
                      <span className="block text-[13px] font-bold text-gold-700">{t.price.toLocaleString("fr-FR")} F/m²</span>
                    </span>
                  </button>
                ))}
              </div>
            </Reveal>

            {/* surface */}
            <Reveal delay={0.1}>
              <div className="mt-7 flex items-center justify-between">
                <p className="font-condensed text-[14px] font-extrabold uppercase tracking-[0.2em] text-royal-800">2 — Surface</p>
                <span className="rounded-full bg-royal-950 px-4 py-1.5 font-display text-lg tracking-wide text-gold-400">{surface} M²</span>
              </div>
              <input
                type="range" min={10} max={300} step={5} value={surface}
                onChange={(e) => setSurface(Number(e.target.value))}
                className="mt-4 w-full"
                style={{ ["--fill" as string]: `${((surface - 10) / 290) * 100}%` }}
                aria-label="Surface en m²"
              />
              <div className="mt-1 flex justify-between text-[12px] font-bold text-slate-400"><span>10 m²</span><span>300 m²</span></div>
            </Reveal>

            {/* options */}
            <Reveal delay={0.15}>
              <p className="mt-7 font-condensed text-[14px] font-extrabold uppercase tracking-[0.2em] text-royal-800">3 — Options</p>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {OPTIONS.map((o) => {
                  const on = opts.includes(o.id);
                  return (
                    <button
                      key={o.id}
                      onClick={() => toggle(o.id)}
                      className={`flex items-center gap-3 rounded-2xl border-2 p-3.5 text-left transition-all ${
                        on ? "border-royal-800 bg-royal-50" : "border-slate-200 bg-white hover:border-royal-300"
                      }`}
                    >
                      <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition ${on ? "bg-royal-800 text-gold-400" : "bg-slate-100 text-transparent ring-1 ring-slate-200"}`}>
                        <Check className="h-4 w-4" strokeWidth={3} />
                      </span>
                      <span>
                        <span className="block text-[14.5px] font-bold leading-tight text-royal-950">{o.label}</span>
                        <span className="block text-[12.5px] font-medium text-slate-500">{o.desc} — <strong className="text-gold-700">+{o.price >= 10000 ? (o.price / 1000) + "k F" : o.price.toLocaleString("fr-FR") + " F"}</strong></span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </Reveal>
          </div>

          {/* right : result */}
          <Reveal delay={0.1} className="lg:sticky lg:top-32">
            <div className="bg-royal-gloss noise relative overflow-hidden rounded-[28px] p-8 shadow-[0_36px_80px_-20px_rgba(2,8,58,.6)] ring-1 ring-white/20">
              <div className="blueprint-grid absolute inset-0" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <p className="font-condensed text-[13px] font-bold uppercase tracking-[0.24em] text-white/70">Votre estimation</p>
                  <span className="flex items-center gap-1.5 rounded-full bg-gold-500/15 px-3 py-1 text-[12px] font-bold text-gold-300 ring-1 ring-gold-500/40">
                    <BadgePercent className="h-3.5 w-3.5" /> Estimation indicative
                  </span>
                </div>

                <div className="mt-4 rounded-2xl bg-white/10 p-5 backdrop-blur ring-1 ring-white/15">
                  <p className="font-condensed text-[13px] font-bold uppercase tracking-[0.2em] text-gold-300">{selected.label} — {surface} m²</p>
                  <motion.p key={total} initial={{ scale: 0.96, opacity: 0.6 }} animate={{ scale: 1, opacity: 1 }} className="text-gold-3d mt-1 font-display text-[2.6rem] leading-none">
                    {fmt(total)}
                  </motion.p>
                  <p className="mt-1 text-[13.5px] font-semibold text-white/60">soit ~{perM2.toLocaleString("fr-FR")} FCFA/m² estimé</p>
                </div>

                <div className="mt-4 space-y-2.5 rounded-2xl bg-royal-950/50 p-5 text-[14.5px] ring-1 ring-white/10">
                  <div className="flex justify-between text-white/80"><span>Base ({surface} m² × {selected.price.toLocaleString("fr-FR")} F)</span><strong className="text-white">{fmt(base)}</strong></div>
                  <div className="flex justify-between text-white/80"><span>Options ({opts.length})</span><strong className="text-white">{opts.length ? "+" + fmt(optionsTotal) : "—"}</strong></div>
                </div>

                <a href={waLink} target="_blank" rel="noreferrer" className="bg-gold-gloss group mt-5 flex items-center justify-center gap-2 rounded-2xl px-6 py-4 font-condensed text-lg font-extrabold uppercase tracking-[0.1em] text-royal-950 shadow-[0_18px_44px_-10px_rgba(255,196,0,.7)] transition hover:-translate-y-0.5">
                  Recevoir mon devis précis <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
                <p className="mt-3 text-center text-[12.5px] leading-snug text-white/50">
                  Estimation indicative. Devis définitif gratuit après visite & mesures — sans engagement.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
