import bloodPressureImg from "../images/blood-presure-monitor.jpg";

/* Helper — returnează câmpul corect în funcție de limbă */
export function getField(product, field, lang) {
  if (lang === "al" && product[`${field}Al`]) return product[`${field}Al`];
  if (lang === "it" && product[`${field}It`]) return product[`${field}It`];
  return product[field]; // fallback engleza
}

export const PRODUCTS = [
  {
    id: 1,
    name:          "Digital blood pressure monitor",
    nameAl:        "Monitor dixhital i presionit të gjakut",
    nameIt:        "Monitor digitale della pressione sanguigna",
    category:      "Diagnostics",
    categoryAl:    "Diagnostikë",
    categoryIt:    "Diagnostica",
    description:   "Automatic upper arm monitor with memory function and irregular heartbeat detection.",
    descriptionAl: "Monitor automatik i krahut të sipërm me funksion memorie dhe zbulim të rrahjeve të parregullta.",
    descriptionIt: "Monitor automatico da braccio con funzione memoria e rilevamento battito cardiaco irregolare.",
    stock: "in",
    image: bloodPressureImg,
    icon: "❤️",
  },
  {
    id: 2,
    name:          "Portable pulse oximeter",
    nameAl:        "Oksimetër portativ",
    nameIt:        "Pulsossimetro portatile",
    category:      "Respiratory",
    categoryAl:    "Respirator",
    categoryIt:    "Respiratorio",
    description:   "Fingertip SpO2 and pulse rate monitor with OLED display and low battery alert.",
    descriptionAl: "Monitor SpO2 dhe frekuencë pulsi me ekran OLED dhe alarm baterie të ulët.",
    descriptionIt: "Monitor SpO2 e frequenza del polso con display OLED e avviso batteria scarica.",
    stock: "in",
    image: null,
    icon: "🫁",
  },
  {
    id: 3,
    name:          "Sterile syringes 5ml",
    nameAl:        "Shiringë sterile 5ml",
    nameIt:        "Siringhe sterili 5ml",
    category:      "Consumables",
    categoryAl:    "Konsumabël",
    categoryIt:    "Materiali di consumo",
    description:   "Single-use sterile syringes with Luer lock tip, individually packaged. Box of 100.",
    descriptionAl: "Shiringa sterile për përdorim të vetëm me majë Luer lock, të paketuara individualisht. Kuti 100 copë.",
    descriptionIt: "Siringhe sterili monouso con punta Luer lock, confezionate singolarmente. Scatola da 100 pezzi.",
    stock: "out",
    image: null,
    icon: "💉",
  },
  {
    id: 4,
    name:          "Surgical gloves (L)",
    nameAl:        "Doreza kirurgjikale (L)",
    nameIt:        "Guanti chirurgici (L)",
    category:      "Consumables",
    categoryAl:    "Konsumabël",
    categoryIt:    "Materiali di consumo",
    description:   "Latex-free surgical gloves, powder-free, size Large. Box of 50 pairs.",
    descriptionAl: "Doreza kirurgjikale pa latex, pa pluhur, madhësi Large. Kuti 50 çifte.",
    descriptionIt: "Guanti chirurgici senza lattice, senza polvere, taglia Large. Scatola da 50 paia.",
    stock: "low",
    image: null,
    icon: "🧤",
  },
  {
    id: 5,
    name:          "Digital thermometer",
    nameAl:        "Termometër dixhital",
    nameIt:        "Termometro digitale",
    category:      "Diagnostics",
    categoryAl:    "Diagnostikë",
    categoryIt:    "Diagnostica",
    description:   "Fast-reading clinical thermometer with flexible tip and 60-second reading.",
    descriptionAl: "Termometër klinik me lexim të shpejtë, majë fleksibël dhe lexim 60 sekonda.",
    descriptionIt: "Termometro clinico a lettura rapida con punta flessibile e lettura in 60 secondi.",
    stock: "in",
    image: null,
    icon: "🌡️",
  },
  {
    id: 6,
    name:          "Wheelchair standard",
    nameAl:        "Karrige me rrota standarde",
    nameIt:        "Sedia a rotelle standard",
    category:      "Mobility",
    categoryAl:    "Lëvizshmëri",
    categoryIt:    "Mobilità",
    description:   "Foldable standard wheelchair with adjustable footrests and armrests.",
    descriptionAl: "Karrige me rrota e palosshme standarde me mbështetëse këmbësh dhe krahësh të rregullueshme.",
    descriptionIt: "Sedia a rotelle pieghevole con poggiapiedi e braccioli regolabili.",
    stock: "in",
    image: null,
    icon: "♿",
  },
];

export const CATEGORIES = ["All", "Diagnostics", "Respiratory", "Consumables", "Mobility"];

export const PARTNERS = [
  { id: 1, name: "Hospital Shefqet Ndroqi" },
  { id: 2, name: "Hygeia Albania" },
  { id: 3, name: "American Hospital" },
  { id: 4, name: "Polyclinic Nr. 3" },
  { id: 5, name: "PharmAlb" },
  { id: 6, name: "Spitali Rajonal Durrës" },
];

export const STATS = [
  { num: "500+", label: "Products",         labelAl: "Produkte",      labelIt: "Prodotti" },
  { num: "12+",  label: "Years experience", labelAl: "Vjet përvojë",  labelIt: "Anni di esperienza" },
  { num: "200+", label: "Clients",          labelAl: "Klientë",       labelIt: "Clienti" },
];