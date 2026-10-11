import { useMemo, useRef, useState } from "react";
import { ArrowRight, Check, ClipboardList, Crown, Grid2X2, Home, Layers, Paintbrush, Hammer, Snowflake, Sparkles } from "lucide-react";
import { QUOTE_OPTIONS, WHATSAPP, WORK_TYPES } from "../data/content";
import { Reveal } from "./Reveal";

const ICONS = [Layers, Home, Grid2X2, Crown, Hammer, Paintbrush, Snowflake, Sparkles, ClipboardList];
const FIELD = "w-full rounded-xl border-2 border-slate-200 bg-[#f6f7fd] px-4 py-3 text-[15px] font-medium outline-none transition placeholder:text-slate-400 focus:border-gold-500 focus:bg-white";

/** Demande de devis : le client choisit, écrit sa surface réelle et ses préférences ; tout part sur WhatsApp. Aucun prix affiché. */
export default function QuoteCalculator() {
  const [type, setType] = useState(WORK_TYPES[0].id);
  const [surface, setSurface] = useState("50");
  const [opts, setOpts] = useState<string[]>([]);
  const [city, setCity] = useState("");
  const [name, setName] = useState("");
  const [prefs, setPrefs] = useState("");
  const input = useRef<HTMLInputElement>(null);

  const area = Number(surface.replace(",", "."));
  const areaOk = Number.isFinite(area) && area > 0;
  const sliderVal = areaOk ? Math.min(300, Math.max(10, area)) : 50;
  const work = WORK_TYPES.find((t) => t.id === type)!;
  const chosen = QUOTE_OPTIONS.filter((o) => opts.includes(o.id));
  const toggle = (id: string) => setOpts((p) => (p.includes(id) ? p.filter((o) => o !== id) : [...p, id]));
  const setArea = (v: string) => setSurface(v.replace(/[^0-9.,]/g, "").slice(0, 9));

  const waLink = useMemo(() => {
    const lines = [
      "Bonjour UniC Plaquiste, je souhaite un devis gratuit.",
      "",
      `Travaux : ${work.label}`,
      `Surface : ${areaOk ? `${surface} m²` : "à préciser"}`,
      `Options : ${chosen.length ? chosen.map((o) => o.label).join(", ") : "aucune pour le moment"}`,
      city.trim() ? `Quartier / ville : ${city.trim()}` : null,
      prefs.trim() ? `Mes préférences : ${prefs.trim()}` : null,
      name.trim() ? `Nom : ${name.trim()}` : null,
    ].filter((l): l is string => typeof l === "string");
    return `${WHATSAPP.split("?")[0]}?text=${encodeURIComponent(lines.join("\n"))}`;
  }, [work, surface, areaOk, chosen, city, prefs, name]);

  return (
    <section id="devis" className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          {/* gauche : le client décrit son projet */}
          <div className="min-w-0">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-royal-800 px-4 py-1.5 font-condensed text-[13px] font-bold uppercase tracking-[0.22em] text-gold-400">
                <ClipboardList className="h-4 w-4" /> Demande de devis
              </span>
              <h2 className="mt-5 font-display text-3xl leading-[1.05] tracking-wide text-royal-950 sm:text-4xl lg:text-[2.8rem]">
                DÉCRIVEZ VOTRE PROJET <span className="text-gold-600">EN 1 MINUTE</span>
              </h2>
              <p className="mt-3 text-[16.5px] text-slate-600">
                Choisissez vos travaux, indiquez votre surface réelle et vos envies. Votre demande arrive directement sur notre WhatsApp : devis gratuit sous 48h.
              </p>
            </Reveal>

            {/* 1 — type : on glisse vers la gauche */}
            <Reveal delay={0.05}>
              <p className="mt-8 font-condensed text-[14px] font-extrabold uppercase tracking-[0.2em] text-royal-800">1 — Type de travaux</p>
              <div className="-mx-4 mt-3 flex snap-x gap-3 overflow-x-auto overscroll-x-contain px-4 pb-3 [scrollbar-width:none] sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden">
                {WORK_TYPES.map((t, k) => {
                  const Icon = ICONS[k % ICONS.length];
                  const on = type === t.id;
                  return (
                    <button key={t.id} onClick={() => setType(t.id)} aria-pressed={on}
                      className={`flex w-[150px] shrink-0 snap-start flex-col items-start gap-3 rounded-2xl border-2 p-4 text-left transition-all ${on ? "border-gold-500 bg-gold-200/25 shadow-[0_12px_30px_-10px_rgba(255,196,0,.6)]" : "border-slate-200 bg-white hover:border-royal-300"}`}>
                      <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${on ? "bg-royal-950 text-gold-400" : "bg-royal-50 text-royal-800"}`}><Icon className="h-6 w-6" /></span>
                      <span className="font-condensed text-[15px] font-extrabold uppercase leading-tight tracking-wide text-royal-950">{t.label}</span>
                    </button>
                  );
                })}
              </div>
              <p className="text-center font-condensed text-[12.5px] font-bold uppercase tracking-[0.2em] text-slate-400 sm:hidden">← Glissez pour voir les autres →</p>
            </Reveal>

            {/* 2 — surface : la pastille se tape (au-delà de 300 m²) */}
            <Reveal delay={0.1}>
              <div className="mt-7 flex items-center justify-between gap-3">
                <p className="font-condensed text-[14px] font-extrabold uppercase tracking-[0.2em] text-royal-800">2 — Surface</p>
                <label className="flex items-center rounded-full bg-royal-950 px-4 py-1.5 ring-2 ring-transparent focus-within:ring-gold-500" onClick={() => input.current?.focus()}>
                  <input ref={input} value={surface} onChange={(e) => setArea(e.target.value)} onFocus={(e) => e.target.select()}
                    inputMode="decimal" aria-label="Surface réelle en m²" placeholder="0"
                    className="w-[5.2ch] min-w-0 bg-transparent text-right font-display text-lg tracking-wide text-gold-400 outline-none placeholder:text-gold-400/40" style={{ width: `${Math.max(2, surface.length) + 0.4}ch` }} />
                  <span className="ml-1 font-display text-lg tracking-wide text-gold-400">M²</span>
                </label>
              </div>
              <input type="range" min={10} max={300} step={5} value={sliderVal} onChange={(e) => setSurface(String(e.target.value))}
                className="mt-4 w-full" style={{ ["--fill" as string]: `${((sliderVal - 10) / 290) * 100}%` }} aria-label="Régler la surface" />
              <div className="mt-1 flex justify-between text-[12px] font-bold text-slate-400"><span>10 m²</span><span>300 m²</span></div>
              <p className="mt-2 text-[13.5px] text-slate-500">Plus grand ? Touchez le chiffre en haut à droite et tapez votre surface exacte.</p>
            </Reveal>

            {/* 3 — options : liste verticale à faire défiler */}
            <Reveal delay={0.15}>
              <p className="mt-7 font-condensed text-[14px] font-extrabold uppercase tracking-[0.2em] text-royal-800">3 — Options (facultatif)</p>
              <div className="mt-3 grid max-h-[330px] gap-3 overflow-y-auto overscroll-contain pr-1 sm:max-h-none sm:grid-cols-2 sm:overflow-visible">
                {QUOTE_OPTIONS.map((o) => {
                  const on = opts.includes(o.id);
                  return (
                    <button key={o.id} onClick={() => toggle(o.id)} aria-pressed={on}
                      className={`flex items-center gap-3 rounded-2xl border-2 p-3.5 text-left transition-all ${on ? "border-royal-800 bg-royal-50" : "border-slate-200 bg-white hover:border-royal-300"}`}>
                      <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition ${on ? "bg-royal-800 text-gold-400" : "bg-slate-100 text-transparent ring-1 ring-slate-200"}`}><Check className="h-4 w-4" strokeWidth={3} /></span>
                      <span>
                        <span className="block text-[14.5px] font-bold leading-tight text-royal-950">{o.label}</span>
                        <span className="block text-[12.5px] font-medium text-slate-500">{o.desc}</span>
                      </span>
                    </button>
                  );
                })}
              </div>
              <p className="mt-2 text-center font-condensed text-[12.5px] font-bold uppercase tracking-[0.2em] text-slate-400 sm:hidden">↓ Faites défiler pour voir toutes les options</p>
            </Reveal>

            {/* 4 — préférences et contact */}
            <Reveal delay={0.2}>
              <p className="mt-7 font-condensed text-[14px] font-extrabold uppercase tracking-[0.2em] text-royal-800">4 — Vos envies</p>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <input value={city} onChange={(e) => setCity(e.target.value)} placeholder="Quartier / ville (ex : Almadies)" className={FIELD} autoComplete="address-level2" />
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Votre nom (facultatif)" className={FIELD} autoComplete="name" />
                <textarea value={prefs} onChange={(e) => setPrefs(e.target.value)} rows={4} maxLength={600} placeholder="Vos préférences : style, couleurs, délais, pièces concernées…" className={`${FIELD} sm:col-span-2`} />
              </div>
            </Reveal>
          </div>

          {/* droite : résumé et envoi */}
          <Reveal delay={0.1} className="lg:sticky lg:top-32">
            <div className="bg-royal-gloss relative overflow-hidden rounded-[28px] p-6 shadow-[0_36px_80px_-20px_rgba(2,8,58,.6)] ring-1 ring-white/20 sm:p-8">
              <div className="relative">
                <p className="font-condensed text-[13px] font-bold uppercase tracking-[0.24em] text-white/70">Votre demande</p>
                <div className="mt-4 space-y-3 rounded-2xl bg-white/10 p-5 ring-1 ring-white/15">
                  <p className="font-display text-2xl tracking-wide text-gold-300">{work.label.toUpperCase()}</p>
                  <p className="text-white/90"><span className="text-white/60">Surface :</span> <strong>{areaOk ? `${surface} m²` : "à préciser"}</strong></p>
                  <div>
                    <p className="text-white/60">Options :</p>
                    {chosen.length ? (
                      <div className="mt-1.5 flex flex-wrap gap-2">{chosen.map((o) => <span key={o.id} className="rounded-full bg-gold-500/15 px-3 py-1 text-[13px] font-bold text-gold-300 ring-1 ring-gold-500/40">{o.label}</span>)}</div>
                    ) : <p className="text-white/80">aucune pour le moment</p>}
                  </div>
                  {city.trim() && <p className="text-white/90"><span className="text-white/60">Lieu :</span> <strong>{city.trim()}</strong></p>}
                </div>
                <a href={waLink} target="_blank" rel="noreferrer" className="bg-gold-gloss group mt-5 flex items-center justify-center gap-2 rounded-2xl px-6 py-4 font-condensed text-lg font-extrabold uppercase tracking-[0.1em] text-royal-950 shadow-[0_18px_44px_-10px_rgba(255,196,0,.7)] transition hover:-translate-y-0.5">
                  Envoyer sur WhatsApp <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
                <p className="mt-3 text-center text-[12.5px] leading-snug text-white/60">
                  Votre demande s'ouvre dans WhatsApp, prête à envoyer. Ajoutez-y vos photos ou plans. Devis gratuit et sans engagement.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
