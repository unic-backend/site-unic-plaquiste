import { Sparkle } from "lucide-react";
import { BRANDS } from "../data/content";

/** Bandeau défilant des marques de matériaux (noms en texte : aucun logo de tiers sans autorisation). */
export default function Marquee({ items = BRANDS }: { items?: string[] }) {
  const base = Array.from({ length: Math.max(1, Math.ceil(8 / items.length)) }, () => items).flat();   // assez long pour remplir l'écran
  const row = [...base, ...base];
  return (
    <div className="bg-gold-gloss relative overflow-hidden border-y-4 border-royal-950 py-3.5" aria-label="Marques de matériaux utilisées">
      <div className="animate-marquee flex w-max items-center gap-8 pr-8">
        {row.map((t, i) => (
          <span key={i} aria-hidden={i >= base.length} className="flex items-center gap-8 whitespace-nowrap font-display text-lg tracking-wider text-royal-950 sm:text-xl">
            {t.toUpperCase()}
            <Sparkle className="h-5 w-5 fill-royal-950" />
          </span>
        ))}
      </div>
    </div>
  );
}
