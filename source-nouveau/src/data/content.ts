export const BASE = "";   // chemins relatifs à la racine du site : fonctionne aussi sur un aperçu Netlify
const img = (n: string) => `${BASE}/images/${n}.webp`;

export const IMAGES = {
  logo: img("logo-unic-512"),
  hero: img("poster-03"),
  heroBg: img("hero-salon-arches"),
  about1: img("service-10"),
  about2: img("galerie-19"),
  before1: img("avantapres-11"),
  before2: img("avantapres-12"),
  deco1: img("avantapres-13"),
  deco2: img("avantapres-14"),
};

export const PHONE = "+221 77 708 50 92";
export const PHONE_LINK = "tel:+221777085092";
export const WHATSAPP = "https://wa.me/221777085092?text=Bonjour%20UniC%20Plaquiste%2C%20je%20souhaite%20un%20devis%20gratuit%20pour%20mon%20projet.";
export const EMAIL = "Unicplaquiste@gmail.com";
export const ADDRESS = ["Gueule Tapée, Rue 59 × 62", "Dakar, Sénégal"];
export const MAPS = "https://maps.app.goo.gl/HUsim6vFbBGPtddR7";
export const APP_URL = "https://app.unicplaquiste.com";
export const REVIEW_URL = "https://g.page/r/CVeKa4AmpHn9EAE/review";
export const NINEA = "013141677";
export const RCCM = "SN.DKR.2026.A.22010";
export const SOCIALS = [
  { name: "Facebook", href: "https://www.facebook.com/share/1EQdZy7LCc/" },
  { name: "Instagram", href: "https://www.instagram.com/unic_plaquiste" },
  { name: "TikTok", href: "https://www.tiktok.com/@unic_plaquiste" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/uthman-diop-ba7325214" },
  { name: "Reddit", href: "https://www.reddit.com/u/Iceman_mubarak/" },
];

export const STATS = [
  { value: 8, suffix: "", label: "Ans d'expérience" },
  { value: 180, suffix: "+", label: "Chantiers livrés" },
  { value: 98, suffix: "%", label: "Clients satisfaits" },
  { value: 48, suffix: "h", label: "Délai de devis" },
];

export const SERVICES = [
  { icon: "layers", title: "Pose de placo", desc: "Cloisons, doublages et séparations en plaque de plâtre BA13, sur-mesure, pour aménager et isoler vos pièces.", img: img("galerie-17"), tags: ["BA13", "Cloisons", "Doublage"] },
  { icon: "grid", title: "Faux plafonds", desc: "Plafonds décoratifs, suspendus et lumineux qui subliment vos volumes.", img: img("service-06"), tags: ["Suspendus", "LED", "Décoratifs"] },
  { icon: "crown", title: "Corniches & décors", desc: "Moulures, corniches et éléments décoratifs en plâtre pour sublimer vos pièces.", img: img("service-05"), tags: ["Corniches", "Niches", "Plâtre"] },
  { icon: "paint", title: "Peinture & enduits", desc: "Préparation des surfaces, enduits lissés et peinture pour des finitions impeccables.", img: img("avantapres-12"), tags: ["Enduit", "Peinture", "Finitions"] },
  { icon: "bulb", title: "Isolation", desc: "Isolation thermique et acoustique pour un confort optimal de vos espaces.", img: img("service-09"), tags: ["Thermique", "Acoustique", "Laine de verre"] },
  { icon: "home", title: "Rénovation complète", desc: "Accompagnement de A à Z pour transformer entièrement votre intérieur.", img: img("service-07"), tags: ["Clé en main", "Villas", "Bureaux"] },
];

export const PROJECTS = [
  { img: img("galerie-15"), title: "Séjour & plafond décaissé", loc: "Faux plafond avec retombée lumineuse", cat: "Plafonds" },
  { img: img("galerie-16"), title: "Plafond linéaire", loc: "Éclairage LED indirect", cat: "Plafonds" },
  { img: img("galerie-17"), title: "Doublage de séjour", loc: "Cloisons & plafond, Dakar", cat: "Cloisons" },
  { img: img("galerie-18"), title: "Mur décoratif", loc: "Relief sur-mesure en plâtre", cat: "Décoration" },
  { img: img("galerie-19"), title: "Plafond à spots", loc: "Faux plafond suspendu", cat: "Plafonds" },
  { img: img("galerie-20"), title: "Mur d'accent en relief", loc: "Décoration murale design", cat: "Décoration" },
];

export const ZONES = [
  { title: "Dakar & banlieue", text: "Almadies, Ouakam, Ngor, Yoff, Plateau, Mermoz, Sacré-Cœur, Point E, Fann, Médina, Parcelles, Pikine, Guédiawaye, Rufisque, Diamniadio" },
  { title: "Tout le Sénégal", text: "Sur devis selon le projet" },
  { title: "International", text: "Projets sur demande" },
];

export const TESTIMONIALS = [
  { name: "Aida", role: "Dakar · Rénovation salon", text: "Mon salon est métamorphosé. Travail propre, équipe ponctuelle et vraiment à l'écoute. Je recommande à 100 %.", stars: 5, initial: "A" },
  { name: "Mouhamed Touré", role: "Dakar · Faux plafond", text: "Faux plafond posé impeccablement et dans les délais annoncés. Un vrai savoir-faire, merci UniC Plaquiste.", stars: 5, initial: "M" },
  { name: "Sertem", role: "Dakar · Aménagement bureaux", text: "Aménagement de nos locaux réalisé avec sérieux et des finitions soignées. Des professionnels de confiance.", stars: 5, initial: "S" },
  { name: "Seynabou", role: "Dakar · Décoration intérieure", text: "De la première visite à la dernière retouche, tout était parfait. Le résultat dépasse largement mes attentes.", stars: 5, initial: "S" },
];

export const FAQS = [
  { q: "Quel est le prix d'un faux plafond BA13 à Dakar ?", a: "Le prix dépend de la surface, du type de plafond (simple, décoratif, avec spots LED) et de l'état du chantier. Nous établissons un devis gratuit et détaillé après visite ou sur plans. Contactez-nous au 77 708 50 92 pour une estimation rapide." },
  { q: "Intervenez-vous dans tous les quartiers de Dakar ?", a: "Oui. Nous intervenons dans tout Dakar : Almadies, Ouakam, Ngor, Yoff, Plateau, Mermoz, Sacré-Cœur, Point E, Fann, Médina, Parcelles Assainies, ainsi qu'en banlieue (Pikine, Guédiawaye, Rufisque, Diamniadio) et partout au Sénégal sur devis." },
  { q: "Quels sont vos délais pour un chantier de plâtrerie ?", a: "Les délais varient selon l'ampleur des travaux : quelques jours pour un faux plafond de pièce simple, plus pour une rénovation complète. Nous précisons toujours le délai dans le devis et nous nous y tenons." },
  { q: "Le devis est-il vraiment gratuit ?", a: "Oui, le devis est gratuit et sans engagement. Envoyez-nous vos photos ou plans par WhatsApp au 77 708 50 92, ou demandez une visite sur place à Dakar." },
  { q: "Travaillez-vous pour les professionnels (bureaux, commerces, hôtels) ?", a: "Oui. Au-delà des particuliers, nous réalisons les faux plafonds, cloisons, l'isolation et l'aménagement intérieur de bureaux, commerces, boutiques, restaurants, hôtels, écoles, cliniques et bâtiments administratifs ou industriels. Nous collaborons aussi avec les architectes, promoteurs immobiliers et entreprises du bâtiment." },
  { q: "Posez-vous des cloisons et de l'isolation ?", a: "Oui. Nous montons les cloisons sèches et doublages en plaques de plâtre BA13 et posons l'isolation thermique et acoustique (laine de verre) pour améliorer le confort et l'insonorisation de vos pièces." },
];

// PRIX INDICATIFS DU CALCULATEUR (FCFA) : à confirmer par le patron avant mise en ligne.
// Un seul endroit à modifier : le calculateur se met à jour tout seul.
export const TYPES = [
  { id: "plafond", label: "Faux plafond placo", price: 8500 },
  { id: "pvc", label: "Plafond PVC", price: 6500 },
  { id: "cloison", label: "Cloison placo", price: 12000 },
  { id: "staff", label: "Staff & corniches", price: 9500 },
];
export const OPTIONS = [
  { id: "led", label: "Gorge + ruban LED", desc: "Éclairage indirect (par m²)", price: 3500 },
  { id: "spots", label: "Spots encastrés (x6)", desc: "Par tranche de 25 m²", price: 45000 },
  { id: "peinture", label: "Peinture lessivable", desc: "2 couches (par m²)", price: 2500 },
  { id: "isolation", label: "Isolation phonique", desc: "Laine de verre (par m²)", price: 4000 },
];

export const MAPS_REVIEWS = "https://maps.app.goo.gl/HUsim6vFbBGPtddR7";
export const MAPS_ROUTE = "https://maps.app.goo.gl/TN2j6RFHxGLigf5S8";
export const BEFORE_AFTER = [
  { after: img("avantapres-11"), before: img("avantapres-12"), alt: "Mur et plafond avant et après la pose de placo" },
  { after: img("avantapres-13"), before: img("avantapres-14"), alt: "Mur décoratif en plâtre avant et après finitions" },
];
