import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MapPin, Menu, Phone, X } from "lucide-react";

import { LogoLockup, SenegalFlag } from "./Logo";
import { PHONE, PHONE_LINK, WHATSAPP } from "../data/content";
import { SocialLinks } from "./SocialIcons";

const LINKS = [
  { label: "Accueil", href: "#accueil" },
  { label: "Services", href: "#services" },
  { label: "Réalisations", href: "#realisations" },
  { label: "Méthode", href: "#methode" },
  { label: "Estimation", href: "#devis" },
  { label: "Avis", href: "#avis" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Accueil");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* topbar */}
      <div className="bg-royal-deep hidden border-b border-white/10 lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-[13px] font-medium text-royal-100/90">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-gold-400" /> Gueule Tapée, Dakar — Sénégal
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a href={PHONE_LINK} className="flex items-center gap-1.5 font-bold text-gold-400 hover:text-gold-300">
              <Phone className="h-3.5 w-3.5" /> {PHONE}
            </a>
            <span className="h-4 w-px bg-white/15" />
            <div className="flex items-center gap-3 text-white/80">
              <SocialLinks boxClass="transition hover:text-gold-400" iconClass="h-4 w-4" />
              <SenegalFlag className="h-3.5 w-5" />
            </div>
          </div>
        </div>
      </div>

      {/* main nav */}
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-white/95 shadow-[0_12px_36px_-12px_rgba(2,8,58,.28)] backdrop-blur-xl"
            : "bg-white shadow-sm"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <LogoLockup />

          <nav className="hidden items-center gap-1 xl:flex">
            {LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setActive(l.label)}
                className={`relative whitespace-nowrap rounded-full px-2 py-2 font-condensed text-[14px] font-bold uppercase tracking-[0.08em] transition 2xl:px-4 2xl:text-[15px] 2xl:tracking-[0.12em] ${
                  active === l.label ? "text-royal-800" : "text-slate-600 hover:text-royal-800"
                }`}
              >
                {l.label}
                <span
                  className={`absolute inset-x-2 -bottom-0.5 2xl:inset-x-4 h-[3px] rounded-full bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600 transition-all duration-300 ${
                    active === l.label ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
                  }`}
                />
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 xl:flex">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="bg-gold-gloss group relative overflow-hidden whitespace-nowrap rounded-full px-5 py-3 2xl:px-6 font-condensed text-[15px] font-extrabold uppercase tracking-[0.12em] text-royal-950 shadow-[0_10px_28px_-8px_rgba(255,196,0,.7)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_36px_-8px_rgba(255,196,0,.8)]"
            >
              <span className="relative z-10">Devis gratuit</span>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-royal-950 text-white xl:hidden"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="bg-royal-deep mx-3 rounded-2xl border border-white/10 p-4 shadow-2xl xl:hidden"
          >
            <div className="grid gap-1">
              {LINKS.map((l, i) => (
                <motion.a
                  key={l.label}
                  href={l.href}
                  onClick={() => { setActive(l.label); setOpen(false); }}
                  initial={{ opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className={`rounded-xl px-4 py-3 font-condensed text-lg font-bold uppercase tracking-widest ${
                    active === l.label ? "bg-gold-500 text-royal-950" : "text-white hover:bg-white/10"
                  }`}
                >
                  {l.label}
                </motion.a>
              ))}
            </div>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="bg-gold-gloss mt-3 flex items-center justify-center gap-2 rounded-xl px-4 py-3.5 font-condensed text-lg font-extrabold uppercase tracking-widest text-royal-950"
            >
              <Phone className="h-5 w-5" /> {PHONE}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
