import { useCallback, useEffect, useRef, useState } from "react";
import { BadgeCheck, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { HERO_SLIDES } from "../data/content";

const DELAY = 4000;   // une photo toutes les 4 secondes
const SWIPE = 45;     // distance (px) pour compter un glissement du doigt

/** Cadre de la photo du hero : défilement automatique en fondu, plus flèches, points et glissement du doigt. */
export default function HeroSlides() {
  const n = HERO_SLIDES.length;
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const start = useRef<{ x: number; y: number } | null>(null);
  const reduce = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const go = useCallback((d: number) => setI((p) => (p + d + n) % n), [n]);

  // Le minuteur repart à zéro à chaque changement (automatique ou manuel) : la photo choisie reste 4 s.
  useEffect(() => {
    if (paused || reduce) return;
    const t = window.setTimeout(() => go(1), DELAY);
    return () => window.clearTimeout(t);
  }, [i, paused, reduce, go]);

  const cur = HERO_SLIDES[i];
  return (
    <div
      className="relative aspect-[4/4.6] select-none overflow-hidden rounded-[25px] bg-royal-950 sm:aspect-[4/4.2]"
      style={{ touchAction: "pan-y" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onPointerDown={(e) => { start.current = { x: e.clientX, y: e.clientY }; }}
      onPointerUp={(e) => {
        const s = start.current; start.current = null;
        if (!s) return;
        const dx = e.clientX - s.x, dy = e.clientY - s.y;
        if (Math.abs(dx) > SWIPE && Math.abs(dx) > Math.abs(dy) * 1.3) go(dx < 0 ? 1 : -1);
      }}
      onKeyDown={(e) => { if (e.key === "ArrowRight") go(1); if (e.key === "ArrowLeft") go(-1); }}
      role="group" aria-roledescription="carrousel" aria-label="Photos de réalisations UniC"
    >
      {HERO_SLIDES.map((s, k) => {
        const near = k === i || k === (i + 1) % n || k === (i - 1 + n) % n;   // on ne charge que la photo courante et ses voisines
        return (
          <div key={s.src} aria-hidden={k !== i}
            className="absolute inset-0 transition-opacity duration-[1100ms] ease-in-out"
            style={{ opacity: k === i ? 1 : 0, willChange: near ? "opacity" : "auto" }}>
            {near && (
              <img src={s.src} alt={s.alt} draggable={false} decoding="async"
                className="h-full w-full object-cover transition-transform duration-[5500ms] ease-out"
                style={{ transform: k === i ? "scale(1)" : "scale(1.07)", willChange: near ? "transform" : "auto" }} />
            )}
          </div>
        );
      })}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-royal-950/85 via-transparent to-royal-950/10" />

      <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-royal-950/80 px-3.5 py-1.5 font-condensed text-[13px] font-bold uppercase tracking-widest text-white">
        <MapPin className="h-3.5 w-3.5 text-gold-400" /> Dakar — Sénégal
      </div>

      <button onClick={() => go(-1)} aria-label="Photo précédente" className="absolute left-2 top-[42%] flex h-10 w-10 items-center justify-center rounded-full bg-royal-950/55 text-white transition hover:bg-gold-500 hover:text-royal-950"><ChevronLeft className="h-5 w-5" /></button>
      <button onClick={() => go(1)} aria-label="Photo suivante" className="absolute right-2 top-[42%] flex h-10 w-10 items-center justify-center rounded-full bg-royal-950/55 text-white transition hover:bg-gold-500 hover:text-royal-950"><ChevronRight className="h-5 w-5" /></button>

      <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/15 bg-white/10 p-4">
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="font-condensed text-[12px] font-bold uppercase tracking-[0.2em] text-gold-300">Réalisation UniC</p>
            <p key={cur.label} className="animate-[fadeIn_.7s_ease] truncate font-display text-lg tracking-wide text-white">{cur.label}</p>
          </div>
          <span className="flex shrink-0 items-center gap-1.5 rounded-full bg-emerald-400/20 px-3 py-1.5 text-[13px] font-bold text-emerald-300 ring-1 ring-emerald-400/40">
            <BadgeCheck className="h-4 w-4" /> Livré
          </span>
        </div>
        <div className="mt-3 flex justify-center gap-1.5" role="tablist" aria-label="Choisir une photo">
          {HERO_SLIDES.map((_, k) => (
            <button key={k} onClick={() => setI(k)} role="tab" aria-selected={k === i} aria-label={`Photo ${k + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${k === i ? "w-6 bg-gold-500" : "w-1.5 bg-white/40 hover:bg-white/70"}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
