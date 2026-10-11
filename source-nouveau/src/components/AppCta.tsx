import { ArrowRight, Smartphone } from "lucide-react";
import { APP_URL, WHATSAPP } from "../data/content";
import { Reveal } from "./Reveal";

export default function AppCta() {
  return (
    <section id="devis" className="bg-royal-deep noise relative overflow-hidden py-16 lg:py-20">
      <div className="blueprint-grid absolute inset-0" />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <Reveal>
          <span className="bg-gold-gloss mx-auto flex h-16 w-16 items-center justify-center rounded-2xl text-royal-950">
            <Smartphone className="h-8 w-8" />
          </span>
          <h2 className="mt-6 font-display text-3xl tracking-wide text-white sm:text-4xl">
            ESTIMATION DE DEVIS EN <span className="text-gold-3d">5 MINUTES</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-royal-100/85">
            Utilisez notre application UniC pour obtenir une estimation, ou envoyez-nous vos photos et plans sur WhatsApp.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href={APP_URL} target="_blank" rel="noreferrer" className="bg-gold-gloss group flex items-center gap-2 rounded-2xl px-7 py-4 font-condensed text-lg font-extrabold uppercase tracking-[0.1em] text-royal-950">
              Ouvrir l'application <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="rounded-2xl border border-white/20 bg-white/5 px-7 py-4 font-condensed text-lg font-extrabold uppercase tracking-[0.1em] text-white transition hover:border-gold-500/60">
              WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
