import { useRef, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, MoveHorizontal } from "lucide-react";
import { BEFORE_AFTER } from "../data/content";
import { Reveal, SectionHead } from "./Reveal";

/** Comparateur Avant / Après : on glisse la poignée (doigt, souris ou flèches du clavier). */
function Compare({ before, after, alt }: { before: string; after: string; alt: string }) {
  const [pos, setPos] = useState(50);
  const box = useRef<HTMLDivElement>(null);
  const move = (clientX: number) => {
    const r = box.current!.getBoundingClientRect();
    setPos(Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100)));
  };
  return (
    <div
      ref={box}
      className="relative aspect-[4/3] w-full select-none overflow-hidden rounded-3xl bg-royal-950 shadow-2xl ring-1 ring-slate-200"
      style={{ touchAction: "pan-y" }}
      onPointerDown={(e) => { e.currentTarget.setPointerCapture(e.pointerId); move(e.clientX); }}
      onPointerMove={(e) => { if (e.buttons || e.pointerType === "touch") move(e.clientX); }}
    >
      <img src={after} alt={`${alt} — après`} loading="lazy" draggable={false} className="absolute inset-0 h-full w-full object-cover" />
      <img src={before} alt={`${alt} — avant`} loading="lazy" draggable={false} className="absolute inset-0 h-full w-full object-cover" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }} />
      <span className="bg-royal-950/80 absolute left-4 top-4 rounded-full px-3.5 py-1 font-condensed text-[13px] font-extrabold uppercase tracking-[0.18em] text-white">Avant</span>
      <span className="bg-gold-gloss absolute right-4 top-4 rounded-full px-3.5 py-1 font-condensed text-[13px] font-extrabold uppercase tracking-[0.18em] text-royal-950">Après</span>
      <div className="pointer-events-none absolute inset-y-0 w-[3px] -translate-x-1/2 bg-white shadow-[0_0_12px_rgba(0,0,0,.5)]" style={{ left: `${pos}%` }}>
        <span className="bg-gold-gloss absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-royal-950 shadow-xl ring-4 ring-white">
          <MoveHorizontal className="h-5 w-5" />
        </span>
      </div>
      <input
        type="range" min={0} max={100} value={Math.round(pos)} onChange={(e) => setPos(Number(e.target.value))}
        aria-label="Comparer avant et après" className="sr-only"
      />
    </div>
  );
}

export default function BeforeAfter() {
  const [i, setI] = useState(0);
  const n = BEFORE_AFTER.length;
  const go = (d: number) => setI((p) => (p + d + n) % n);
  const cur = BEFORE_AFTER[i];
  return (
    <section id="avant-apres" className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHead
          eyebrow="La transformation"
          title={<>Avant / <span className="text-gold-600">Après</span></>}
          desc="Glissez le curseur pour découvrir la métamorphose de nos chantiers. Utilisez les boutons pour voir d'autres réalisations."
        />
        <Reveal className="mt-10">
          <Compare key={i} before={cur.before} after={cur.after} alt={cur.alt} />
          <div className="mt-5 flex items-center justify-center gap-4">
            <button onClick={() => go(-1)} className="flex items-center gap-1.5 rounded-full border border-slate-200 px-4 py-2.5 font-condensed text-[13px] sm:px-5 sm:text-[14px] font-extrabold uppercase tracking-[0.12em] text-royal-900 transition hover:border-gold-500">
              <ChevronLeft className="h-4 w-4" /> Précédent
            </button>
            <span className="whitespace-nowrap font-condensed text-[15px] font-bold tracking-widest text-slate-500">{i + 1} / {n}</span>
            <button onClick={() => go(1)} className="flex items-center gap-1.5 rounded-full border border-slate-200 px-4 py-2.5 font-condensed text-[13px] sm:px-5 sm:text-[14px] font-extrabold uppercase tracking-[0.12em] text-royal-900 transition hover:border-gold-500">
              Suivant <ChevronRight className="h-4 w-4" />
            </button>
          </div>
          <div className="mt-6 text-center">
            <a href="#contact" className="bg-royal-deep inline-flex items-center gap-2 rounded-2xl px-7 py-4 font-condensed text-lg font-extrabold uppercase tracking-[0.1em] text-white">
              Lancer mon projet <ArrowRight className="h-5 w-5 text-gold-400" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
