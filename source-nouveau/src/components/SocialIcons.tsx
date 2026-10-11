import type React from "react";
import { SOCIALS } from "../data/content";

type P = { className?: string };
const ICONS: Record<string, (p: P) => React.JSX.Element> = {
  Facebook: ({ className }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.3-1.5 1.6-1.5h1.3V4.9c-.3 0-1.1-.1-2-.1-2 0-3.4 1.2-3.4 3.5V11H7.5v3H10v7h3.5z" /></svg>
  ),
  Instagram: ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}><rect x="3.5" y="3.5" width="17" height="17" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" stroke="none" /></svg>
  ),
  TikTok: ({ className }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M16.5 3c.3 2.2 1.7 3.8 3.9 4v3a7 7 0 0 1-3.9-1.2v6.2a5.5 5.5 0 1 1-5.5-5.5c.3 0 .6 0 .9.1v3.1a2.5 2.5 0 1 0 1.6 2.3V3h3z" /></svg>
  ),
  LinkedIn: ({ className }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M4.5 9h3v10h-3zM6 4.5a1.7 1.7 0 1 1 0 3.4 1.7 1.7 0 0 1 0-3.4zM10 9h2.9v1.4c.5-.9 1.6-1.6 3.1-1.6 3 0 3.6 2 3.6 4.6V19h-3v-5c0-1.2 0-2.7-1.7-2.7s-1.9 1.3-1.9 2.6V19h-3z" /></svg>
  ),
  Reddit: ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" className={className}><ellipse cx="12" cy="14" rx="7.5" ry="5.2" /><circle cx="9.3" cy="13.4" r="1" fill="currentColor" stroke="none" /><circle cx="14.7" cy="13.4" r="1" fill="currentColor" stroke="none" /><path d="M9.5 16.3c1.4.9 3.6.9 5 0M12 8.8l1-4.3 3.3.8" /><circle cx="17.5" cy="5.6" r="1.2" /><circle cx="4.6" cy="11.4" r="1.3" /><circle cx="19.4" cy="11.4" r="1.3" /></svg>
  ),
};

/** Réseaux sociaux de UniC : mêmes liens que le site actuel. */
export function SocialLinks({ boxClass = "", iconClass = "h-5 w-5", only }: { boxClass?: string; iconClass?: string; only?: string[] }) {
  return (
    <>
      {SOCIALS.filter((s) => !only || only.includes(s.name)).map((s) => {
        const Icon = ICONS[s.name];
        return (
          <a key={s.name} href={s.href} target="_blank" rel="noreferrer" aria-label={s.name} className={boxClass}>
            <Icon className={iconClass} />
          </a>
        );
      })}
    </>
  );
}
