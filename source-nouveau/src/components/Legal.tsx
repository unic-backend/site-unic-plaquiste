import { useEffect, useRef, type ReactNode } from "react";
import { X } from "lucide-react";
import { ADDRESS, EMAIL, NINEA, PHONE, RCCM } from "../data/content";

export type LegalKind = "mentions" | "confidentialite" | "estimation";

const TITLES: Record<LegalKind, string> = {
  mentions: "Mentions légales",
  confidentialite: "Confidentialité et données personnelles",
  estimation: "Demande de devis en ligne : conditions",
};

function Body({ kind }: { kind: LegalKind }): ReactNode {
  if (kind === "mentions") {
    return (
      <>
        <h3>Éditeur du site</h3>
        <p>
          <strong>UniC Plaquiste</strong> — plaquiste (placo BA13, faux plafonds, cloisons, isolation, décoration et rénovation intérieure).<br />
          Adresse : {ADDRESS.join(", ")}<br />
          Téléphone / WhatsApp : {PHONE}<br />
          E-mail : {EMAIL}<br />
          NINEA : {NINEA}<br />
          RCCM : {RCCM}
        </p>
        <h3>Responsable de la publication</h3>
        <p>Uthman, gérant de UniC Plaquiste.</p>
        <h3>Hébergement</h3>
        <p>Netlify, Inc. — 512 2nd Street, Suite 200, San Francisco, CA 94107, États-Unis.</p>
        <h3>Propriété intellectuelle</h3>
        <p>Les textes, photographies, logos et éléments graphiques de ce site appartiennent à UniC Plaquiste. Toute reproduction sans autorisation écrite est interdite.</p>
        <h3>Responsabilité</h3>
        <p>Les informations de ce site sont données à titre indicatif. Seul un devis écrit, établi après visite ou étude des plans, engage UniC Plaquiste. Les liens vers des sites tiers (Google, WhatsApp, réseaux sociaux) n'engagent pas notre responsabilité.</p>
        <h3>Droit applicable</h3>
        <p>Le droit sénégalais s'applique. En cas de litige, nous cherchons d'abord une solution à l'amiable : écrivez-nous à {EMAIL}.</p>
      </>
    );
  }
  if (kind === "confidentialite") {
    return (
      <>
        <h3>Quelles données ?</h3>
        <p>Si vous remplissez le formulaire de devis : votre nom (facultatif), votre quartier ou ville, le type de travaux, la surface, les options et vos préférences. Si vous nous écrivez par e-mail, téléphone ou WhatsApp : les informations que vous nous communiquez.</p>
        <h3>Comment sont-elles utilisées ?</h3>
        <p>Uniquement pour répondre à votre demande, établir votre devis et suivre le chantier. Nous ne vendons ni ne cédons vos données.</p>
        <h3>Le formulaire de ce site</h3>
        <p>Ce site n'enregistre pas le contenu du formulaire sur un serveur : il prépare un message WhatsApp que vous envoyez vous-même. WhatsApp est un service exploité par Meta, soumis à ses propres conditions.</p>
        <h3>Cookies et traceurs</h3>
        <p>Ce site n'utilise aucun cookie publicitaire ni outil de suivi. Les polices de caractères sont chargées depuis Google Fonts : votre adresse IP peut être transmise à Google à cette occasion.</p>
        <h3>Vos droits</h3>
        <p>Conformément à la loi sénégalaise n° 2008-12 du 25 janvier 2008 sur la protection des données à caractère personnel, vous pouvez demander l'accès, la rectification ou la suppression de vos données, ou vous opposer à leur utilisation : {EMAIL}. Vous pouvez aussi saisir la Commission de Protection des Données Personnelles (CDP).</p>
      </>
    );
  }
  return (
    <>
      <h3>Une demande, pas un devis</h3>
      <p>Le formulaire de demande de devis sert à décrire votre projet (travaux, surface, options, préférences). Il n'affiche aucun prix et n'engage ni vous ni UniC Plaquiste.</p>
      <h3>Comment ça marche</h3>
      <p>Votre demande s'ouvre dans WhatsApp, prête à être envoyée par vous. Rien n'est enregistré sur ce site. Vous pouvez y ajouter photos et plans.</p>
      <h3>Le devis définitif</h3>
      <p>Il est gratuit et sans engagement, établi après visite ou étude des plans. Contactez-nous au {PHONE}.</p>
    </>
  );
}

export function LegalDialog({ kind, onClose }: { kind: LegalKind | null; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!kind) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const esc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", esc);
    return () => { document.body.style.overflow = prev; window.removeEventListener("keydown", esc); };
  }, [kind, onClose]);
  if (!kind) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center bg-black/60 p-0 sm:items-center sm:p-6" onClick={onClose}>
      <div role="dialog" aria-modal="true" aria-label={TITLES[kind]} onClick={(e) => e.stopPropagation()}
        className="relative max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-t-3xl bg-white p-6 text-slate-700 shadow-2xl sm:rounded-3xl sm:p-8 [&_h3]:mb-1 [&_h3]:mt-5 [&_h3]:font-display [&_h3]:text-lg [&_h3]:tracking-wide [&_h3]:text-royal-950 [&_p]:text-[15px] [&_p]:leading-relaxed">
        <button ref={closeRef} onClick={onClose} aria-label="Fermer" className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200"><X className="h-5 w-5" /></button>
        <h2 className="pr-12 font-display text-2xl tracking-wide text-royal-950">{TITLES[kind].toUpperCase()}</h2>
        <Body kind={kind} />
        <p className="mt-6 text-[12.5px] text-slate-400">Dernière mise à jour : octobre 2026.</p>
      </div>
    </div>
  );
}
