import { useRef } from "react";
import { Building2, ChevronLeft, ChevronRight } from "lucide-react";
import { REFERENCES } from "../data/content";
import { Reveal, SectionHead } from "./Reveal";

type Ref = (typeof REFERENCES)[number];

const SLIDE = "relative h-[210px] shrink-0 snap-center overflow-hidden rounded-3xl border border-white/10 bg-royal-950 shadow-xl sm:h-[340px]";
const LAND = "aspect-[16/10]";
const PORT = "aspect-[3/4]";
const TALL = "aspect-[9/16]";

/** Une référence = sa propre section : la photo du site en premier, puis nos réalisations en glissant vers la gauche. */
function Block({ r }: { r: Ref }) {
  const track = useRef<HTMLDivElement>(null);
  const slides = r.photos.length;
  const slide = (d: number) => track.current?.scrollBy({ left: d * Math.min(560, track.current.clientWidth * 0.85), behavior: "smooth" });
  return (
    <div className="mt-14 first:mt-12">
      <Reveal instant className="mb-5 flex flex-wrap items-center gap-3">
        <span className={`rounded-full px-3.5 py-1 font-condensed text-[12px] font-extrabold uppercase tracking-[0.16em] ${r.soon ? "bg-white/15 text-white" : "bg-gold-gloss text-royal-950"}`}>{r.tag}</span>
        <h3 className="font-display text-2xl tracking-wide text-white sm:text-3xl">{r.name.toUpperCase()}</h3>
      </Reveal>
      <div className="relative">
        {slides > 0 && (
          <>
            <button onClick={() => slide(-1)} aria-label="Photos précédentes" className="absolute -left-2 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-royal-950 shadow-xl transition hover:bg-gold-500 lg:flex"><ChevronLeft className="h-6 w-6" /></button>
            <button onClick={() => slide(1)} aria-label="Photos suivantes" className="absolute -right-2 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-royal-950 shadow-xl transition hover:bg-gold-500 lg:flex"><ChevronRight className="h-6 w-6" /></button>
          </>
        )}
        <div ref={track} className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain scroll-smooth px-4 pb-3 [scrollbar-width:none] sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden">
          <figure className={`${SLIDE} ${LAND}`}>
            {r.cover ? (
              <img src={r.cover} alt={r.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover object-[65%_50%]" />
            ) : (
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,.55)_0,transparent_1.5px),radial-gradient(circle_at_70%_30%,rgba(255,255,255,.4)_0,transparent_1.5px),radial-gradient(circle_at_45%_55%,rgba(255,255,255,.5)_0,transparent_1.5px),linear-gradient(180deg,#02083a_0%,#071a7d_60%,#0b2a9a_100%)]">
                <span className="bg-gold-gloss absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-3xl text-royal-950 shadow-[0_18px_44px_-10px_rgba(255,196,0,.6)]"><Building2 className="h-10 w-10" /></span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-royal-950/70 via-transparent to-transparent" />
          </figure>
          {r.photos.map((p, k) => (
            <figure key={p.src} className={`${SLIDE} ${p.tall ? TALL : p.portrait ? PORT : LAND}`}>
              <img src={p.src} alt={`${r.name} — réalisation UniC ${k + 1}`} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
            </figure>
          ))}
        </div>
        {slides > 0 && <p className="mt-1 text-center font-condensed text-[13px] font-bold uppercase tracking-[0.2em] text-white/50 lg:hidden">← Glissez pour voir nos réalisations →</p>}
      </div>
    </div>
  );
}

export default function References() {
  return (
    <section id="references" className="bg-royal-deep relative overflow-hidden py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead dark eyebrow="Ils nous font confiance" title={<>Nos grandes <span className="text-gold-3d">références.</span></>} desc="Des chantiers d'envergure, réalisés avec la même exigence que chez les particuliers." />
        {REFERENCES.map((r) => <Block key={r.name} r={r} />)}
      </div>
    </section>
  );
}
