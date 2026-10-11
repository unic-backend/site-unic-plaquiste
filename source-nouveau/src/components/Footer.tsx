import { useState } from "react";
import { LegalDialog, type LegalKind } from "./Legal";
import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import { LogoEmblem, SenegalFlag } from "./Logo";
import { SocialLinks } from "./SocialIcons";
import { REAL_ANCHOR, APP_URL, NINEA, PHONE, PHONE_LINK, RCCM, WHATSAPP } from "../data/content";

export default function Footer() {
  const [legal, setLegal] = useState<LegalKind | null>(null);
  return (
    <footer className="bg-[#01041f] relative overflow-hidden text-white">
      {/* gold top line */}
      <div className="h-1.5 bg-gradient-to-r from-gold-700 via-gold-400 to-gold-700" />

      {/* CTA band */}
      <div className="relative border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-12 sm:px-6 lg:flex-row">
          <div className="text-center lg:text-left">
            <p className="font-condensed text-[14px] font-bold uppercase tracking-[0.28em] text-gold-400">Devis gratuit et sans engagement</p>
            <p className="mt-2 font-display text-3xl tracking-wide sm:text-4xl">
              PRÊT À TRANSFORMER <span className="text-gold-3d">VOTRE INTÉRIEUR ?</span>
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="bg-gold-gloss rounded-2xl px-8 py-4 font-condensed text-lg font-extrabold uppercase tracking-[0.1em] text-royal-950 shadow-[0_18px_44px_-10px_rgba(255,196,0,.6)] transition hover:-translate-y-1">
              Devis gratuit 48h
            </a>
            <a href={PHONE_LINK} className="flex items-center gap-2 rounded-2xl border border-white/20 bg-white/5 px-7 py-4 font-condensed text-lg font-extrabold uppercase tracking-[0.1em] transition hover:border-gold-500/60 hover:bg-white/10">
              <Phone className="h-5 w-5 text-gold-400" /> {PHONE}
            </a>
          </div>
        </div>
      </div>

      {/* main footer */}
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1fr]">
        <div>
          <div className="flex items-center gap-5">
            <LogoEmblem size={92} />
            <div>
              <p className="font-display text-2xl tracking-wide">UNIC <span className="text-gold-400">PLAQUISTE</span></p>
              <p className="mt-1 flex items-center gap-2 font-condensed text-[13px] font-bold uppercase tracking-[0.26em] text-white/60">
                Rénovation & Décoration — Sénégal <SenegalFlag className="h-3.5 w-5" />
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-white/60">
            Depuis 8 ans, nous façonnons les intérieurs de Dakar : placo, faux plafonds,
            cloisons, isolation et finitions. L'exigence d'un artisan.
          </p>
          <div className="mt-5 flex flex-wrap gap-2.5">
            <SocialLinks boxClass="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white/75 transition hover:border-gold-500/60 hover:bg-gold-500/15 hover:text-gold-300" iconClass="h-5 w-5" />
          </div>
        </div>

        <div>
          <p className="font-condensed text-[14px] font-extrabold uppercase tracking-[0.24em] text-gold-400">Nos services</p>
          <ul className="mt-4 space-y-2.5 text-[15px] font-medium text-white/70">
            {["Pose de placo", "Faux plafonds", "Corniches & décors", "Peinture & enduits", "Isolation", "Rénovation complète"].map((s) => (
              <li key={s}><a href="#services" className="group inline-flex items-center gap-1.5 transition hover:text-gold-300">{s} <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition group-hover:opacity-100" /></a></li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-condensed text-[14px] font-extrabold uppercase tracking-[0.24em] text-gold-400">Navigation</p>
          <ul className="mt-4 space-y-2.5 text-[15px] font-medium text-white/70">
            {[["Accueil", "#accueil"], ["Réalisations", REAL_ANCHOR], ["Méthode", "#methode"], ["Devis", "#devis"], ["Avis clients", "#avis"], ["Contact", "#contact"]].map(([l, h]) => (
              <li key={l}><a href={h} className="transition hover:text-gold-300">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-condensed text-[14px] font-extrabold uppercase tracking-[0.24em] text-gold-400">Contact direct</p>
          <ul className="mt-4 space-y-3.5 text-[15px] font-medium text-white/70">
            <li className="flex gap-2.5"><MapPin className="h-5 w-5 shrink-0 text-gold-400" /> Gueule Tapée, Rue 59 × 62<br />Dakar, Sénégal</li>
            <li><a href={PHONE_LINK} className="flex gap-2.5 transition hover:text-gold-300"><Phone className="h-5 w-5 shrink-0 text-gold-400" /> {PHONE}</a></li>
          </ul>
          <p className="mt-5 text-[13px] text-white/50">NINEA : {NINEA} · RCCM : {RCCM}</p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-[13.5px] font-medium text-white/45 sm:flex-row sm:px-6">
          <p>© 2026 UniC Plaquiste — Tous droits réservés. Fait avec exigence à Dakar <SenegalFlag className="ml-1 inline-block h-3 w-4.5 align-[-1px]" /></p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <button onClick={() => setLegal("mentions")} className="transition hover:text-gold-300">Mentions légales</button>
            <button onClick={() => setLegal("confidentialite")} className="transition hover:text-gold-300">Confidentialité</button>
            <button onClick={() => setLegal("estimation")} className="transition hover:text-gold-300">Conditions de la demande de devis</button>
            <a href={APP_URL} target="_blank" rel="noreferrer" className="transition hover:text-gold-300">Espace client</a>
          </div>
        </div>
      </div>
    <LegalDialog kind={legal} onClose={() => setLegal(null)} />
    </footer>
  );
}
