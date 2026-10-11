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

// RÉALISATIONS : une photo par type, choisies par le patron. `exemple: true` = image d'exemple / de rendu (pas un chantier UniC) :
// elle porte l'étiquette « Exemple » pour ne jamais être présentée comme une réalisation de l'entreprise.
export const PROJECTS: { img: string; title: string; loc: string; cat: string; exemple?: boolean }[] = [
  { img: img("realis-01-plafond"), title: "Faux plafond", loc: "Plaques de plâtre et spots encastrés", cat: "Plafonds" },
  { img: img("realis-02-cloisons"), title: "Cloisons", loc: "Cloison en plaques de plâtre", cat: "Cloisons" },
  { img: img("realis-03-plafond-pvc"), title: "Plafond PVC", loc: "Plafond à lames et éclairage encastré", cat: "Plafonds", exemple: true },
  { img: img("realis-04-bureau"), title: "Bureau moderne", loc: "Aménagement et habillage de bureau", cat: "Décoration", exemple: true },
  { img: img("realis-05-deco-murale"), title: "Décoration murale", loc: "Niches arrondies éclairées", cat: "Décoration" },
  { img: img("realis-06-papier-peint"), title: "Papier peint", loc: "Revêtement mural texturé", cat: "Décoration" },
  { img: img("realis-07-habillage-mural"), title: "Habillage mural", loc: "Panneaux muraux modernes", cat: "Décoration" },
];
export const REAL_ANCHOR = PROJECTS.length > 0 ? "#realisations" : "#references";

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

// DEMANDE DE DEVIS : aucun prix affiché (le prix dépend du chantier). Les listes se modifient ici.
export const WORK_TYPES = [
  { id: "ba13", label: "Faux plafond BA13" },
  { id: "cloison", label: "Cloisons placo" },
  { id: "pvc", label: "Plafond PVC" },
  { id: "staff", label: "Staff & corniches" },
  { id: "doublage", label: "Doublage de murs" },
  { id: "peinture", label: "Peinture & enduits" },
  { id: "isolation", label: "Isolation" },
  { id: "decor", label: "Mur décoratif en relief" },
  { id: "renov", label: "Rénovation complète" },
];
export const QUOTE_OPTIONS = [
  { id: "isolation", label: "Isolation", desc: "Thermique et acoustique" },
  { id: "peinture", label: "Peinture", desc: "Finition murs et plafonds" },
  { id: "enduit", label: "Enduit & lissage", desc: "Surfaces prêtes à peindre" },
  { id: "moulure", label: "Moulures & corniches", desc: "Décors en plâtre" },
  { id: "tv", label: "Meuble TV", desc: "Habillage mural pour télévision" },
  { id: "relief", label: "Mur décoratif en relief", desc: "Plâtre sur-mesure" },
  { id: "niche", label: "Niches décoratives", desc: "Rangement et mise en valeur" },
  { id: "trappe", label: "Trappe de visite", desc: "Accès discret aux installations" },
  { id: "depose", label: "Dépose de l'existant", desc: "Démontage avant les travaux" },
];

export const MAPS_REVIEWS = "https://maps.app.goo.gl/HUsim6vFbBGPtddR7";
export const MAPS_ROUTE = "https://maps.app.goo.gl/TN2j6RFHxGLigf5S8";
export const BEFORE_AFTER = [
  { after: img("avantapres-11"), before: img("avantapres-12"), alt: "Mur et plafond avant et après la pose de placo" },
  { after: img("avantapres-13"), before: img("avantapres-14"), alt: "Mur décoratif en plâtre avant et après finitions" },
];

// GRANDES RÉFÉRENCES : noms et photos donnés par le patron.
// `cover` = photo du site (le grand projet). `photos` = photos de NOS réalisations sur ce site : on les ajoute ici
// (ex. img("ref-stade-01")) après les avoir déposées dans /images ; elles apparaissent en glissant vers la gauche.
export const REFERENCES: { name: string; tag: string; cover: string | null; photos: { src: string; portrait?: boolean; tall?: boolean }[]; soon?: boolean }[] = [
  {
    name: "Stade Abdoulaye Wade", tag: "Grand projet", cover: img("ref-stade-abdoulaye-wade"),
    photos: [
      { src: img("ref-stade-03") },   // hall fini : colonnes jaunes et lignes de lumière
      { src: img("ref-stade-01") },   // cloisons placo et colonnes
      { src: img("ref-stade-02"), portrait: true },   // joints en cours
      { src: img("ref-stade-04") },   // l'équipe UniC sur le chantier
    ],
  },
  { name: "Dakar Arena", tag: "Grand projet", cover: img("ref-dakar-arena"), photos: [] },
  {
    name: "Université Amadou Mahtar Mbow (UAM)", tag: "Grand projet", cover: img("ref-uam"),
    photos: [
      { src: img("ref-uam-01"), portrait: true },   // ossature métallique et premières plaques
      { src: img("ref-uam-05"), tall: true },       // pose des cloisons avec l'équipe
      { src: img("ref-uam-02"), portrait: true },   // joints et enduit
      { src: img("ref-uam-03"), portrait: true },   // finition
      { src: img("ref-uam-04") },                   // cloison terminée et porte
      { src: img("ref-uam-06") },                   // bureau terminé
    ],
  },
  { name: "Centre équestre de Diamniadio (CED)", tag: "À venir", cover: null, photos: [], soon: true },
];
