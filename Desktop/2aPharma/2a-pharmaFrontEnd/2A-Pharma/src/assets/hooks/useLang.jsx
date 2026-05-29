import { useState, createContext, useContext } from "react";

const LangContext = createContext();

export function LangProvider({ children }) {
  const [lang, setLang] = useState("al");
  const toggle = (l) => setLang(l);
  return (
    <LangContext.Provider value={{ lang, toggle }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}

/* ── Translations ── */
export const t = {
  al: {
    nav: {
      home: "Kryefaqja",
      about: "Rreth nesh",
      products: "Produktet",
      partners: "Partnerët",
      contact: "Kontakt",
    },
    hero: {
      badge: "Pajisje mjekësore të certifikuara",
      title1: "Pajisje mjekësore",
      title2: "për çdo profesionist",
      title3: "të kujdesit shëndetësor",
      sub: "Distributor i pajisjeve mjekësore dhe farmaceutike të cilësisë së lartë në Shqipëri. I besuar nga spitalet, klinikat dhe farmacitë në të gjithë vendin.",
      btnProducts: "Shiko produktet",
      btnContact: "Na kontaktoni",
    },
    stockTitle: "Gjendja e stoqeve",
    stockSub: "Inventar në kohë reale",
    deliveryTitle: "Dërgim i shpejtë në të gjithë Shqipërinë",
    deliverySub: "Porositë përpunohen brenda 24 orëve",
    products: {
      label: "Produktet tona",
      title: "Katalogu i pajisjeve mjekësore",
      sub: "Shfletoni zgjedhjen tonë të gjerë të pajisjeve mjekësore të certifikuara.",
      viewAll: "Shiko të gjitha produktet",
      details: "Detaje",
    },
    features: {
      label: "Pse të zgjidhni ne",
      title: "Cilësi në të cilën mund të besoni",
      items: [
        { title: "Produkte të certifikuara", desc: "Të gjitha pajisjet plotësojnë rregulloret e BE-së dhe standardet ISO." },
        { title: "Dërgim i shpejtë", desc: "Dërgim kombëtar brenda 24–48 orëve. E njëjtën ditë për Tiranën." },
        { title: "Mbështetje eksperte", desc: "Specialistët tanë ju ndihmojnë të zgjidhni pajisjen e duhur." },
        { title: "Kthim i lehtë", desc: "Politikë kthimi 30-ditore për të gjitha pajisjet jo-konsumabël." },
      ],
    },
    partners: {
      label: "Partnerët tanë",
      title: "Organizata kryesore shëndetësore na besojnë",
    },
    contact: {
      label: "Na kontaktoni",
      title: "Kontakt",
      sub: "Keni një pyetje ose keni nevojë për një ofertë? Jemi këtu për t'ju ndihmuar.",
      name: "Emri",
      email: "Email",
      phone: "Numri i telefonit",
      message: "Mesazhi juaj",
      send: "Dërgo mesazhin",
      hours: "E Hënë – E Premte, 08:00 – 17:00",
    },
    stock: {
      in: "Në gjendje",
      low: "Gjendje e ulët",
      out: "Jashtë gjendjeje",
    },
    footer: {
      copy: "© 2026 2A Pharma. Të gjitha të drejtat e rezervuara.",
      privacy: "Politika e privatësisë",
      terms: "Kushtet",
      sitemap: "Harta e faqes",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About us",
      products: "Products",
      partners: "Partners",
      contact: "Contact",
    },
    hero: {
      badge: "Certified medical equipment",
      title1: "Medical equipment",
      title2: "for every healthcare",
      title3: "professional",
      sub: "Distributor of high-quality medical and pharmaceutical equipment in Albania. Trusted by hospitals, clinics and pharmacies nationwide.",
      btnProducts: "View products",
      btnContact: "Contact us",
    },
    stockTitle: "Stock overview",
    stockSub: "Real-time inventory",
    deliveryTitle: "Fast delivery across Albania",
    deliverySub: "Orders processed within 24h",
    products: {
      label: "Our products",
      title: "Medical equipment catalog",
      sub: "Browse our wide selection of certified medical devices and pharmaceutical supplies.",
      viewAll: "View all products",
      details: "Details",
    },
    features: {
      label: "Why choose us",
      title: "Quality you can trust",
      items: [
        { title: "Certified products", desc: "All equipment meets EU medical device regulations and ISO standards." },
        { title: "Fast delivery", desc: "Nationwide delivery within 24–48 hours. Same-day for Tirana orders." },
        { title: "Expert support", desc: "Our specialists help you choose the right equipment for your needs." },
        { title: "Easy returns", desc: "30-day return policy on all non-consumable medical devices." },
      ],
    },
    partners: {
      label: "Our partners",
      title: "Trusted by leading healthcare organizations",
    },
    contact: {
      label: "Get in touch",
      title: "Contact us",
      sub: "Have a question or need a quote? We're here to help.",
      name: "Name",
      email: "Email",
      phone: "Phone number",
      message: "Your message",
      send: "Send message",
      hours: "Mon – Fri, 08:00 – 17:00",
    },
    stock: {
      in: "In stock",
      low: "Low stock",
      out: "Out of stock",
    },
    footer: {
      copy: "© 2026 2A Pharma. All rights reserved.",
      privacy: "Privacy policy",
      terms: "Terms",
      sitemap: "Sitemap",
    },
  },
  it: {
  nav: {
    home: "Home",
    about: "Chi siamo",
    products: "Prodotti",
    partners: "Partner",
    contact: "Contatto",
  },

  hero: {
    badge: "Attrezzature mediche certificate",
    title1: "Attrezzature mediche",
    title2: "per ogni professionista",
    title3: "sanitario",
    sub: "Distributore di apparecchiature mediche e farmaceutiche di alta qualità in Albania. Scelto da ospedali, cliniche e farmacie in tutto il paese.",
    btnProducts: "Visualizza prodotti",
    btnContact: "Contattaci",
  },

  stockTitle: "Panoramica magazzino",
  stockSub: "Inventario in tempo reale",

  deliveryTitle: "Consegna rapida in tutta l'Albania",
  deliverySub: "Ordini elaborati entro 24 ore",

  products: {
    label: "I nostri prodotti",
    title: "Catalogo attrezzature mediche",
    sub: "Scopri la nostra vasta selezione di dispositivi medici certificati e forniture farmaceutiche.",
    viewAll: "Visualizza tutti i prodotti",
    details: "Dettagli",
  },

  features: {
    label: "Perché scegliere noi",
    title: "Qualità di cui fidarsi",

    items: [
      {
        title: "Prodotti certificati",
        desc: "Tutte le apparecchiature rispettano le normative UE e gli standard ISO."
      },

      {
        title: "Consegna veloce",
        desc: "Consegna nazionale entro 24–48 ore. In giornata per Tirana."
      },

      {
        title: "Supporto esperto",
        desc: "I nostri specialisti ti aiutano a scegliere l'attrezzatura giusta."
      },

      {
        title: "Resi facili",
        desc: "Politica di reso di 30 giorni per tutti i dispositivi non consumabili."
      },
    ],
  },

  partners: {
    label: "I nostri partner",
    title: "Scelti dalle principali organizzazioni sanitarie",
  },

  contact: {
    label: "Contattaci",
    title: "Contatto",

    sub: "Hai una domanda o hai bisogno di un preventivo? Siamo qui per aiutarti.",

    name: "Nome",
    email: "Email",
    phone: "Numero di telefono",
    message: "Il tuo messaggio",
    send: "Invia messaggio",
    hours: "Lun – Ven, 08:00 – 17:00",
  },

  stock: {
    in: "Disponibile",
    low: "Scorte basse",
    out: "Esaurito",
  },

  footer: {
    copy: "© 2026 2A Pharma. Tutti i diritti riservati.",
    privacy: "Privacy policy",
    terms: "Termini",
    sitemap: "Mappa del sito",
  },
},
};