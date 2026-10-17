import { useEffect, useState } from "react";
import { AnimatePresence, m as motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { WHATSAPP } from "../data/content";

export function WhatsAppIcon({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.4 14.1c-.2.7-1.4 1.3-1.9 1.4-.5 0-1 .3-3.4-.7-2.9-1.2-4.7-4.1-4.9-4.3-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5s.8 1.9.8 2c.1.1.1.3 0 .5l-.4.5c-.1.2-.3.3-.1.6.1.3.7 1.2 1.6 1.9 1.1 1 2 1.3 2.3 1.4.3.1.4.1.6-.1l.8-1c.2-.2.3-.2.6-.1l1.9.9c.3.1.4.2.5.3 0 .2 0 .6-.2 1.1z" />
    </svg>
  );
}

export default function Floating() {
  const [showTop, setShowTop] = useState(false);
  const [showTip, setShowTip] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    const t = setTimeout(() => setShowTip(true), 3500);
    const t2 = setTimeout(() => setShowTip(false), 10000);
    return () => { window.removeEventListener("scroll", onScroll); clearTimeout(t); clearTimeout(t2); };
  }, []);

  return (
    <>
      {/* WhatsApp */}
      <motion.a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        initial={{ opacity: 0, scale: 0, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 260, damping: 18 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="fixed bottom-5 right-5 z-50 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_16px_40px_-8px_rgba(37,211,102,.7)] ring-4 ring-white/80"
        aria-label="Discuter sur WhatsApp"
      >
        <WhatsAppIcon />
        <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4">
          <span className="absolute h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
          <span className="h-4 w-4 rounded-full border-2 border-white bg-red-500" />
        </span>
      </motion.a>

      {/* tooltip */}
      <AnimatePresence>
        {showTip && (
          <motion.div
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}
            className="fixed bottom-[92px] right-5 z-50 max-w-[240px] rounded-2xl rounded-br-sm bg-white p-4 shadow-2xl ring-1 ring-slate-200"
          >
            <button onClick={() => setShowTip(false)} className="absolute right-2 top-1.5 text-slate-300 hover:text-slate-500">✕</button>
            <p className="text-[14px] font-semibold text-royal-950">👋 Besoin d'un devis gratuit ?</p>
            <p className="mt-0.5 text-[13px] text-slate-500">Écrivez-nous sur WhatsApp.</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* back to top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 16 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="bg-royal-deep fixed bottom-[92px] right-[26px] z-40 flex h-11 w-11 items-center justify-center rounded-full text-gold-400 shadow-xl ring-1 ring-gold-500/40 transition hover:bg-royal-700"
            aria-label="Retour en haut"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
