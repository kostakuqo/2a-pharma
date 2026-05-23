import bloodPressureImg from "../images/blood-presure-monitor.jpg";



export const PRODUCTS = [
  {
    id: 1,
    name: "Digital blood pressure monitor",
    nameAl: "Monitor dixhital i presionit të gjakut",
    category: "Diagnostics",
    categoryAl: "Diagnostikë",
    description: "Automatic upper arm monitor with memory function and irregular heartbeat detection.",
    descriptionAl: "Monitor automatik i krahut të sipërm me funksion memorie dhe zbulim të rrahjeve të parregullta.",
    stock: "in",
    image: bloodPressureImg,
    icon: "❤️",
  },
  {
    id: 2,
    name: "Portable pulse oximeter",
    nameAl: "Oksimetër portativ",
    category: "Respiratory",
    categoryAl: "Respirator",
    description: "Fingertip SpO2 and pulse rate monitor with OLED display and low battery alert.",
    descriptionAl: "Monitor SpO2 dhe frekuencë pulsi me ekran OLED dhe alarm baterie të ulët.",
    stock: "in",
    image: null,
    icon: "🫁",
  },
  {
    id: 3,
    name: "Sterile syringes 5ml",
    nameAl: "Shiringë sterile 5ml",
    category: "Consumables",
    categoryAl: "Konsumabël",
    description: "Single-use sterile syringes with Luer lock tip, individually packaged. Box of 100.",
    descriptionAl: "Shiringa sterile për përdorim të vetëm me majë Luer lock, të paketuara individualisht. Kuti 100 copë.",
    stock: "out",
    image: null,
    icon: "💉",
  },
  {
    id: 4,
    name: "Surgical gloves (L)",
    nameAl: "Doreza kirurgjikale (L)",
    category: "Consumables",
    categoryAl: "Konsumabël",
    description: "Latex-free surgical gloves, powder-free, size Large. Box of 50 pairs.",
    descriptionAl: "Doreza kirurgjikale pa latex, pa pluhur, madhësi Large. Kuti 50 çifte.",
    stock: "low",
    image: null,
    icon: "🧤",
  },
  {
    id: 5,
    name: "Digital thermometer",
    nameAl: "Termometër dixhital",
    category: "Diagnostics",
    categoryAl: "Diagnostikë",
    description: "Fast-reading clinical thermometer with flexible tip and 60-second reading.",
    descriptionAl: "Termometër klinik me lexim të shpejtë, majë fleksibël dhe lexim 60 sekonda.",
    stock: "in",
    image: null,
    icon: "🌡️",
  },
  {
    id: 6,
    name: "Wheelchair standard",
    nameAl: "Karrige me rrota standarde",
    category: "Mobility",
    categoryAl: "Lëvizshmëri",
    description: "Foldable standard wheelchair with adjustable footrests and armrests.",
    descriptionAl: "Karrige me rrota e palosshme standarde me mbështetëse këmbësh dhe krahësh të rregullueshme.",
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
  { num: "500+", label: "Products", labelAl: "Produkte" },
  { num: "12+",  label: "Years experience", labelAl: "Vjet përvojë" },
  { num: "200+", label: "Clients", labelAl: "Klientë" },
];