import { Sparkle } from "lucide-react";

export default function Marquee({
  items = ["Placo BA13", "Faux plafonds", "Corniches & décors", "Peinture & enduits", "Isolation", "Rénovation complète"],
}: {
  items?: string[];
}) {
  const row = [...items, ...items];
  return (
    <div className="bg-gold-gloss relative overflow-hidden border-y-4 border-royal-950 py-3.5">
      <div className="animate-marquee flex w-max items-center gap-8 pr-8">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-8 whitespace-nowrap font-display text-lg tracking-wider text-royal-950 sm:text-xl">
            {t.toUpperCase()}
            <Sparkle className="h-5 w-5 fill-royal-950" />
          </span>
        ))}
      </div>
    </div>
  );
}
