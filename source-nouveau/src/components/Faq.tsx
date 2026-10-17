import { useState } from "react";
import { AnimatePresence, m as motion } from "framer-motion";
import { MessageCircleQuestion, Minus, Plus } from "lucide-react";
import { FAQS, WHATSAPP } from "../data/content";
import { Reveal, SectionHead } from "./Reveal";

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="bg-white py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <SectionHead
            center={false}
            eyebrow="Questions fréquentes"
            title={<>Tout ce que vous devez <span className="text-gold-600">savoir.</span></>}
            desc="Tarifs, délais, zones d'intervention : les réponses claires."
          />
          <Reveal delay={0.15}>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="bg-royal-deep mt-7 flex items-center gap-4 rounded-2xl p-5 transition hover:-translate-y-1 hover:shadow-xl">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500 text-white">
                <MessageCircleQuestion className="h-6 w-6" />
              </span>
              <span>
                <span className="block font-condensed text-[16px] font-extrabold uppercase tracking-wide text-white">Une autre question ?</span>
                <span className="block text-[14px] font-medium text-gold-300">Discutez avec nous sur WhatsApp →</span>
              </span>
            </a>
          </Reveal>
        </div>

        <div className="space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 0.05}>
                <div className={`overflow-hidden rounded-2xl border-2 transition-all ${isOpen ? "border-gold-500 bg-gold-200/15 shadow-[0_16px_40px_-16px_rgba(255,196,0,.5)]" : "border-slate-100 bg-[#f6f7fd] hover:border-royal-200"}`}>
                  <button onClick={() => setOpen(isOpen ? -1 : i)} className="flex w-full items-center justify-between gap-4 p-5 text-left">
                    <span className="font-condensed text-[17px] font-extrabold uppercase tracking-wide text-royal-950">{f.q}</span>
                    <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition ${isOpen ? "bg-royal-950 text-gold-400" : "bg-white text-royal-900 ring-1 ring-slate-200"}`}>
                      {isOpen ? <Minus className="h-4.5 w-4.5" /> : <Plus className="h-4.5 w-4.5" />}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}>
                        <p className="px-5 pb-5 text-[15.5px] leading-relaxed text-slate-600">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
