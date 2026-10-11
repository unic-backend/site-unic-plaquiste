import { IMAGES } from "../data/content";
import { cn } from "../utils/cn";

/** Senegal flag mini */
export function SenegalFlag({ className = "h-4 w-6" }: { className?: string }) {
  return (
    <span className={cn("relative inline-flex overflow-hidden rounded-[2px] shadow-sm", className)}>
      <span className="w-1/3 bg-[#00853f]" />
      <span className="relative flex w-1/3 items-center justify-center bg-[#fdef42]">
        <svg viewBox="0 0 24 24" className="h-3/5 w-3/5 fill-[#00853f]">
          <path d="M12 2l2.9 6.6 7.1.7-5.4 4.8 1.6 7-6.2-3.7-6.2 3.7 1.6-7L2 9.3l7.1-.7L12 2z" />
        </svg>
      </span>
      <span className="w-1/3 bg-[#e31b23]" />
    </span>
  );
}

/**
 * Full emblem — faithful recreation of the Unic Plaquiste badge:
 * deep-blue gloss rounded square, gold 3D "UP NIC", chrome house beam, PLAQUISTE + SENEGAL
 */
export function LogoEmblem({ size = 200, className = "" }: { size?: number; className?: string }) {
  return <img src={IMAGES.logo} alt="Logo UniC Plaquiste" width={size} height={size} className={className} style={{ width: size, height: size }} />;
}

/** Compact navbar lockup */
export function LogoLockup({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#accueil" className="group flex items-center gap-3">
      <img src={IMAGES.logo} alt="Logo UniC Plaquiste" width={48} height={48} className="h-12 w-12 rounded-2xl shadow-lg transition-transform duration-300 group-hover:rotate-[-4deg] group-hover:scale-105" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[21px] tracking-wide text-royal-950">
          UNIC <span className="text-gold-600">PLAQUISTE</span>
        </span>
        {!compact && (
          <span className="mt-1 flex items-center gap-1.5 font-condensed text-[11px] font-bold uppercase tracking-[0.3em] text-royal-800/80">
            Rénovation & Déco
            <SenegalFlag className="h-[11px] w-[16px]" />
          </span>
        )}
      </span>
    </a>
  );
}
