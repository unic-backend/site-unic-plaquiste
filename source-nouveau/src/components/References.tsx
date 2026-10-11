import { Building2 } from "lucide-react";
import { REFERENCES } from "../data/content";
import { Reveal, SectionHead } from "./Reveal";

/** Grandes références. Sans photo : fond « nuit » étoilé ; avec photo : la photo plein cadre. */
export default function References() {
  return (
    <section id="references" className="bg-royal-deep relative overflow-hidden py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead dark eyebrow="Ils nous font confiance" title={<>Nos grandes <span className="text-gold-3d">références.</span></>} desc="Des chantiers d'envergure, réalisés avec la même exigence que chez les particuliers." />
        <div className="-mx-4 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain px-4 pb-4 [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-5 sm:overflow-visible sm:px-0 [&::-webkit-scrollbar]:hidden">
          {REFERENCES.map((r, i) => (
            <Reveal key={r.name} instant delay={i * 0.08} className="w-[78vw] max-w-[360px] shrink-0 snap-center sm:w-auto sm:max-w-none">
              <figure className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-royal-950 shadow-xl">
                {r.img ? (
                  <img src={r.img} alt={r.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                ) : (
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,.55)_0,transparent_1.5px),radial-gradient(circle_at_70%_25%,rgba(255,255,255,.4)_0,transparent_1.5px),radial-gradient(circle_at_45%_40%,rgba(255,255,255,.5)_0,transparent_1.5px),radial-gradient(circle_at_85%_55%,rgba(255,255,255,.35)_0,transparent_1.5px),linear-gradient(180deg,#02083a_0%,#071a7d_55%,#0b2a9a_100%)]">
                    <span className="bg-gold-gloss absolute left-1/2 top-[38%] flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-3xl text-royal-950 shadow-[0_18px_44px_-10px_rgba(255,196,0,.6)]"><Building2 className="h-10 w-10" /></span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-royal-950/90 via-transparent to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-6">
                  <span className="bg-gold-gloss rounded-full px-3.5 py-1 font-condensed text-[12px] font-extrabold uppercase tracking-[0.16em] text-royal-950">{r.tag}</span>
                  <h3 className="mt-3 font-display text-2xl tracking-wide text-white">{r.name.toUpperCase()}</h3>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
