import { BadgeCheck, FileText, PenLine, Star } from "lucide-react";
import { MAPS_REVIEWS, NINEA, RCCM, REVIEW_URL } from "../data/content";
import { Reveal } from "./Reveal";

/** Avis Google + identité légale de l'entreprise (confiance). */
export default function TrustReviews() {
  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <Reveal>
          <div className="flex justify-center gap-1 text-gold-500">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-6 w-6 fill-current" />)}</div>
          <h3 className="mt-3 font-display text-2xl tracking-wide text-royal-950 sm:text-3xl">DÉCOUVREZ LES AVIS DE NOS CLIENTS</h3>
          <p className="mx-auto mt-3 max-w-xl text-slate-600">Consultez les avis Google authentiques de nos clients et partagez votre expérience avec UniC Plaquiste.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href={MAPS_REVIEWS} target="_blank" rel="noreferrer" className="bg-royal-deep inline-flex items-center gap-2 rounded-2xl px-6 py-3.5 font-condensed text-[16px] font-extrabold uppercase tracking-[0.1em] text-white"><Star className="h-4 w-4 fill-gold-400 text-gold-400" /> Voir nos avis Google</a>
            <a href={REVIEW_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl border-2 border-royal-100 px-6 py-3.5 font-condensed text-[16px] font-extrabold uppercase tracking-[0.1em] text-royal-900 transition hover:border-gold-500"><PenLine className="h-4 w-4" /> Laisser un avis</a>
          </div>
          <div className="mx-auto mt-8 grid max-w-2xl gap-3 rounded-2xl bg-[#f6f7fd] p-5 text-left text-[15px] text-slate-700 sm:grid-cols-3">
            <p className="flex items-center gap-2 font-semibold"><BadgeCheck className="h-5 w-5 shrink-0 text-emerald-500" /> Entreprise enregistrée au Sénégal</p>
            <p className="flex items-center gap-2"><FileText className="h-5 w-5 shrink-0 text-royal-700" /> <span><strong>NINEA :</strong> {NINEA}</span></p>
            <p className="flex items-center gap-2"><FileText className="h-5 w-5 shrink-0 text-royal-700" /> <span><strong>RCCM :</strong> {RCCM}</span></p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
