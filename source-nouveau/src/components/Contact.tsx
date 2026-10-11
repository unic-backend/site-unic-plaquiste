import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { ADDRESS, EMAIL, MAPS, PHONE, PHONE_LINK, WHATSAPP } from "../data/content";
import { Reveal } from "./Reveal";
import { SocialLinks } from "./SocialIcons";
import { SenegalFlag } from "./Logo";

const INFOS = [
  { icon: Phone, title: "Téléphone / WhatsApp", lines: [PHONE], link: PHONE_LINK },
  { icon: Mail, title: "E-mail", lines: [EMAIL], link: `mailto:${EMAIL}` },
  { icon: MapPin, title: "Adresse", lines: ADDRESS, link: MAPS },
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", type: "Faux plafond", message: "" });

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Aucun serveur : la demande part par WhatsApp, envoyée par le client lui-même (rien n'est perdu en silence).
    const text = `Bonjour UniC Plaquiste, je souhaite un devis gratuit.\nNom : ${form.name}\nTéléphone : ${form.phone}\nProjet : ${form.type}\n${form.message}`;
    window.open(`https://wa.me/221777085092?text=${encodeURIComponent(text)}`, "_blank", "noopener");
    setLoading(false);
    setSent(true);
  };

  return (
    <section id="contact" className="bg-royal-deep noise relative overflow-hidden py-20 lg:py-28">
      <div className="blueprint-grid absolute inset-0" />
      <div className="absolute -left-40 bottom-0 h-[440px] w-[440px] rounded-full bg-royal-500/20 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          {/* left infos */}
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-gold-500/15 px-4 py-1.5 font-condensed text-[13px] font-bold uppercase tracking-[0.22em] text-gold-400 ring-1 ring-gold-500/40">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold-400" /> Contact & devis gratuit
              </span>
              <h2 className="mt-5 font-display text-3xl leading-[1.05] tracking-wide text-white sm:text-4xl lg:text-[2.8rem]">
                UN PROJET ? <span className="text-gold-3d">PARLONS-EN.</span>
              </h2>
              <p className="mt-4 max-w-lg text-[16.5px] leading-relaxed text-royal-100/80">
                Devis gratuit et sans engagement sous 48h. Décrivez votre projet : votre demande est préparée sur WhatsApp,
                prête à être envoyée. <SenegalFlag className="inline-block h-3.5 w-5 align-[-2px]" />
              </p>
            </Reveal>

            <div className="mt-8 space-y-3">
              {INFOS.map((c, i) => (
                <Reveal key={c.title} delay={i * 0.08}>
                  <a href={c.link} className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur transition hover:border-gold-500/50 hover:bg-white/10">
                    <span className="bg-gold-gloss flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-royal-950 shadow-lg">
                      <c.icon className="h-6 w-6" />
                    </span>
                    <span>
                      <span className="block font-condensed text-[13px] font-bold uppercase tracking-[0.2em] text-gold-300">{c.title}</span>
                      <span className="block font-display text-lg tracking-wide text-white">{c.lines[0]}</span>
                      <span className="block text-[13.5px] font-medium text-white/60">{c.lines[1]}</span>
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-2.5">
              <SocialLinks boxClass="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition hover:border-gold-500/60 hover:text-gold-300" iconClass="h-5 w-5" />
            </div>

            {/* map */}
            <Reveal delay={0.2}>
              <a href={MAPS} target="_blank" rel="noreferrer" className="mt-5 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4 font-condensed text-[15px] font-extrabold uppercase tracking-[0.14em] text-gold-300 transition hover:border-gold-500/50 hover:bg-white/10">Obtenir l'itinéraire <MapPin className="h-5 w-5" /></a>
            </Reveal>
          </div>

          {/* right form */}
          <Reveal delay={0.1}>
            <div className="relative rounded-[28px] bg-white p-7 shadow-[0_40px_90px_-20px_rgba(0,0,0,.5)] sm:p-9">
              <div className="absolute inset-x-8 top-0 h-1.5 rounded-b-full bg-gradient-to-r from-royal-800 via-gold-500 to-royal-800" />
              {!sent ? (
                <form onSubmit={submit} className="mt-2 space-y-5">
                  <div>
                    <h3 className="font-display text-2xl tracking-wide text-royal-950">DEMANDE DE DEVIS GRATUIT</h3>
                    <p className="mt-1 text-[14.5px] text-slate-500">Votre demande est préparée sur WhatsApp : vous l'envoyez d'un clic.</p>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-1.5 block font-condensed text-[13px] font-extrabold uppercase tracking-[0.18em] text-royal-800">Votre nom *</span>
                      <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Votre nom"
                        className="w-full rounded-xl border-2 border-slate-200 bg-[#f6f7fd] px-4 py-3 text-[15px] font-medium outline-none transition placeholder:text-slate-400 focus:border-gold-500 focus:bg-white" />
                    </label>
                    <label className="block">
                      <span className="mb-1.5 block font-condensed text-[13px] font-extrabold uppercase tracking-[0.18em] text-royal-800">Téléphone *</span>
                      <input required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="Ex : 77 000 00 00" inputMode="tel"
                        className="w-full rounded-xl border-2 border-slate-200 bg-[#f6f7fd] px-4 py-3 text-[15px] font-medium outline-none transition placeholder:text-slate-400 focus:border-gold-500 focus:bg-white" />
                    </label>
                  </div>
                  <label className="block">
                    <span className="mb-1.5 block font-condensed text-[13px] font-extrabold uppercase tracking-[0.18em] text-royal-800">Type de projet</span>
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                      {["Faux plafond", "Cloison", "Rénovation", "Autre"].map((t) => (
                        <button type="button" key={t} onClick={() => setForm({ ...form, type: t })}
                          className={`rounded-xl border-2 px-3 py-2.5 font-condensed text-[14px] font-extrabold uppercase tracking-wide transition ${form.type === t ? "border-royal-950 bg-royal-950 text-gold-400" : "border-slate-200 bg-white text-slate-500 hover:border-royal-300"}`}>
                          {t}
                        </button>
                      ))}
                    </div>
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block font-condensed text-[13px] font-extrabold uppercase tracking-[0.18em] text-royal-800">Décrivez votre besoin</span>
                    <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={4}
                      placeholder="Ex : Faux plafond + LED pour salon 40 m² aux Almadies, dispo pour visite cette semaine…"
                      className="w-full resize-none rounded-xl border-2 border-slate-200 bg-[#f6f7fd] px-4 py-3 text-[15px] font-medium outline-none transition placeholder:text-slate-400 focus:border-gold-500 focus:bg-white" />
                  </label>
                  <button type="submit" disabled={loading}
                    className="bg-royal-deep group flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-4 font-condensed text-lg font-extrabold uppercase tracking-[0.1em] text-white transition hover:-translate-y-0.5 hover:bg-royal-700 disabled:opacity-70">
                    {loading ? <><Loader2 className="h-5 w-5 animate-spin text-gold-400" /> Envoi en cours…</> : <>Envoyer ma demande <Send className="h-5 w-5 text-gold-400 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" /></>}
                  </button>
                  <p className="text-center text-[12.5px] text-slate-400">
                    Ou écrivez-nous directement sur <a href={WHATSAPP} target="_blank" rel="noreferrer" className="font-bold text-emerald-600 underline">WhatsApp</a> — réponse immédiate.
                  </p>
                </form>
              ) : (
                <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} className="flex min-h-[480px] flex-col items-center justify-center py-10 text-center">
                  <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.1 }}
                    className="flex h-24 w-24 items-center justify-center rounded-full bg-emerald-50 ring-8 ring-emerald-100">
                    <CheckCircle2 className="h-12 w-12 text-emerald-500" />
                  </motion.span>
                  <h3 className="mt-6 font-display text-3xl tracking-wide text-royal-950">MERCI {form.name.split(" ")[0]?.toUpperCase() || ""} !</h3>
                  <p className="mt-3 max-w-sm text-[16px] leading-relaxed text-slate-600">
                    Votre demande de <strong>{form.type.toLowerCase()}</strong> est prête dans WhatsApp.
                    Appuyez sur « Envoyer » là-bas pour la transmettre : nous revenons vers vous sous 48h.
                  </p>
                  <div className="mt-7 flex flex-wrap justify-center gap-3">
                    <a href={WHATSAPP} target="_blank" rel="noreferrer" className="rounded-2xl bg-emerald-500 px-6 py-3 font-condensed text-[16px] font-extrabold uppercase tracking-widest text-white transition hover:bg-emerald-600">
                      Ouvrir WhatsApp
                    </a>
                    <button onClick={() => { setSent(false); setForm({ name: "", phone: "", type: "Faux plafond", message: "" }); }} className="rounded-2xl border-2 border-slate-200 px-6 py-3 font-condensed text-[16px] font-extrabold uppercase tracking-widest text-slate-500 transition hover:border-royal-950 hover:text-royal-950">
                      Nouvelle demande
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
