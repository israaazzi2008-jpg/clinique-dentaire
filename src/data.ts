import { DentalService, PatientTestimonial, ToothNode, FAQItem } from './types';

export const CLINIC_INFO = {
  name: "Abir Smile Clinic Dentaire",
  subtitle: "Dr. Ghouti Mohamed Cherif",
  doctors: [
    { name: "Dr. Ghouti Mohamed Cherif", title: "Chirurgien-Dentiste" }
  ],
  phone: "0770304203",
  formattedPhone: "+213 770 30 42 03",
  email: "medchird7@gmail.com",
  facebookUrl: "https://www.facebook.com/share/1BBZGWPLoR/?mibextid=wwXIfr",
  googleMapsUrl: "https://maps.app.goo.gl/4yuPJstXzXbfsx9Z7?g_st=aw",
  address: "Abir Smile Clinic Dentaire",
  hours: [
    { days: "Samedi - Jeudi", hours: "08:30 - 18:00" },
    { days: "Vendredi", hours: "Fermé / Urgences par Téléphone" }
  ],
  emergencyNotice: "Le cabinet dentaire Abir Smile vous accueille pour tous vos soins et urgences dentaires."
};

export const DENTAL_SERVICES: DentalService[] = [
  {
    id: "radio-rvg",
    title: "Radio numérique RVG",
    description: "Imagerie intra-orale numérique instantanée à très faible radiation pour un diagnostic d'une précision millimétrique.",
    benefits: [
      "Visualisation immédiate sur écran",
      "Dose de rayons X réduite de 90%"
    ],
    duration: "10 min",
    urgencyLevel: "Standard",
    iconName: "Activity"
  },
  {
    id: "detartrage",
    title: "Détartrage ultrasonique",
    description: "Nettoyage indolore et polissage des dents pour éliminer le tartre et retrouver des gencives parfaitement saines.",
    benefits: [
      "Élimination totale de la plaque & tartre",
      "Traitement doux pour l'émail et la gencive"
    ],
    duration: "30 min",
    urgencyLevel: "Standard",
    iconName: "Sparkles"
  },
  {
    id: "extractions",
    title: "Extractions dentaires",
    description: "Extractions douces de dents abîmées ou de sagesse sous anesthésie locale efficace et indolore.",
    benefits: [
      "Geste chirurgical rapide et sans douleur",
      "Accompagnement post-opératoire attentif"
    ],
    duration: "30-45 min",
    urgencyLevel: "Prioritaire",
    iconName: "ShieldCheck"
  },
  {
    id: "chirurgies",
    title: "Chirurgies",
    description: "Actes chirurgicaux bucco-dentaires avancés réalisés dans des conditions d'asepsie et de stérilité rigoureuses.",
    benefits: [
      "Protocole chirurgical moderne",
      "Récupération rapide"
    ],
    duration: "45-60 min",
    urgencyLevel: "Prioritaire",
    iconName: "Zap"
  },
  {
    id: "prothese-amovible",
    title: "Prothèse amovible",
    description: "Appareils dentaires amovibles partiels ou complets sur-mesure pour rétablir le confort de mastication.",
    benefits: [
      "Ajustement très confortable",
      "Matériaux légers et résistants"
    ],
    duration: "Plusieurs séances",
    urgencyLevel: "Standard",
    iconName: "Layers"
  },
  {
    id: "prothese-fixe",
    title: "Prothèse fixe",
    description: "Couronnes et bridges fixes en céramique pour restaurer durablement vos dents abîmées.",
    benefits: [
      "Aspect naturel identique à une vraie dent",
      "Grande solidité à la mastication"
    ],
    duration: "2-3 rdv",
    urgencyLevel: "Standard",
    iconName: "Smile"
  },
  {
    id: "blanchiment",
    title: "Blanchiment dentaire",
    description: "Traitement d'éclaircissement dentaire professionnel pour gagner plusieurs teintes d'éclat.",
    benefits: [
      "Résultat visible immédiatement",
      "Formule protectrice de l'émail"
    ],
    duration: "45 min",
    urgencyLevel: "Standard",
    iconName: "Sun"
  },
  {
    id: "odf",
    title: "ODF (Orthodontie)",
    description: "Orthopédie Dento-Faciale et alignement des dents pour enfants et adultes pour un sourire harmonieux.",
    benefits: [
      "Correction fonctionnelle & esthétique",
      "Suivi personnalisé à chaque étape"
    ],
    duration: "Suivi régulier",
    urgencyLevel: "Standard",
    iconName: "Maximize2"
  },
  {
    id: "atm",
    title: "Douleurs ATM",
    description: "Diagnostic et traitement des dysfonctionnements de l'articulation temporo-mandibulaire et du claquement de mâchoire.",
    benefits: [
      "Soulagement des blocages & céphalées",
      "Gouttières de libération de pression"
    ],
    duration: "30 min",
    urgencyLevel: "Prioritaire",
    iconName: "HeartPulse"
  },
  {
    id: "botox-filler",
    title: "Botox et Filler",
    description: "Traitements d'esthétique du sourire et du tiers inférieur du visage pour harmoniser les lèvres et les rides péri-buccales.",
    benefits: [
      "Comblement & rajeunissement du sourire",
      "Résultats naturels et harmonieux"
    ],
    duration: "30-45 min",
    urgencyLevel: "Standard",
    iconName: "Feather"
  }
];

export const PATIENT_TESTIMONIALS: PatientTestimonial[] = [
  {
    id: "t1",
    name: "Karim M.",
    role: "Patient du cabinet",
    text: "Un accueil chaleureux et une prise en charge très professionnelle par les docteurs. Le soin s'est déroulé sans aucune douleur !",
    rating: 5,
    date: "Récent",
    treatmentReceived: "Détartrage & Radio RVG"
  },
  {
    id: "t2",
    name: "Amel B.",
    role: "Patiente ravie",
    text: "Cabinet très propre et équipe attentionnée. Ma prothèse est parfaitement ajustée, je peux remanger normalement !",
    rating: 5,
    date: "Récent",
    treatmentReceived: "Prothèse fixe"
  },
  {
    id: "t3",
    name: "Yassine K.",
    role: "Patient d'orthodontie",
    text: "Le Dr. Ghouti Mohamed Cherif prend le temps d'expliquer chaque étape. Résultat magnifique pour mes soins ODF.",
    rating: 5,
    date: "Récent",
    treatmentReceived: "ODF & Blanchiment"
  }
];

export const TOOTH_NODES: ToothNode[] = [
  {
    id: "tooth-incisive",
    number: 11,
    type: "incisive",
    nameInFrench: "Incisive",
    englishType: "Incisor",
    roleDescription: "Sert à couper les aliments et forme la façade esthétique du sourire.",
    primaryProcedure: "Blanchiment & ODF",
    procedureDetail: "Alignement ODF et éclaircissement pour un sourire uniforme.",
    symptoms: [
      "Problème d'alignement",
      "Taches d'émail"
    ],
    treatmentDuration: "1-2 séances",
    aestheticImpact: "Éclat immédiat du sourire."
  },
  {
    id: "tooth-canine",
    number: 13,
    type: "canine",
    nameInFrench: "Canine",
    englishType: "Canine",
    roleDescription: "Dent solide assurant le guidage de la mâchoire.",
    primaryProcedure: "Prothèse Fixe & Couronne",
    procedureDetail: "Protection par couronne solide en céramique.",
    symptoms: [
      "Sensibilité au froid",
      "Ébréchure"
    ],
    treatmentDuration: "1 rdv",
    aestheticImpact: "Restauration naturelle."
  },
  {
    id: "tooth-premolaire",
    number: 14,
    type: "premolaire",
    nameInFrench: "Prémolaire",
    englishType: "Premolar",
    roleDescription: "Initie la mastication des aliments.",
    primaryProcedure: "Détartrage & Soin",
    procedureDetail: "Nettoyage ultrasonique et radio numérique RVG.",
    symptoms: [
      "Saignement gingival",
      "Sensibilité"
    ],
    treatmentDuration: "30 min",
    aestheticImpact: "Gencives saines."
  },
  {
    id: "tooth-molaire",
    number: 16,
    type: "molaire",
    nameInFrench: "Molaire",
    englishType: "Molar",
    roleDescription: "Dent maîtresse de la mastication.",
    primaryProcedure: "Chirurgie / Prothèse",
    procedureDetail: "Soin chirurgical ou pose de prothèse adaptée.",
    symptoms: [
      "Douleur à la pression",
      "Carie profonde"
    ],
    treatmentDuration: "45 min",
    aestheticImpact: "Mastication confortable."
  },
  {
    id: "tooth-sagesse",
    number: 18,
    type: "sagesse",
    nameInFrench: "Sagesse",
    englishType: "Wisdom Tooth",
    roleDescription: "Se trouve tout au fond de l'arcade dentaire.",
    primaryProcedure: "Extraction Douce",
    procedureDetail: "Extraction sous anesthésie douce et radio RVG préalable.",
    symptoms: [
      "Pression et douleur",
      "Infection ou gêne"
    ],
    treatmentDuration: "30 min",
    aestheticImpact: "Soulagement de la pression."
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    category: "Consultation",
    question: "Comment prendre contact avec le cabinet ?",
    answer: "Vous pouvez nous contacter par e-mail ou via notre page de contact sur ce site. Nous vous répondrons dans les plus brefs délais."
  },
  {
    category: "Soins & Urgences",
    question: "Que faire en cas de douleur vive ou d'urgence dentaire ?",
    answer: "Nous prévoyons des créneaux de prise en charge rapide pour soulager la douleur au cabinet Abir Smile."
  },
  {
    category: "Accès & Horaires",
    question: "Quels sont les jours d'ouverture du cabinet ?",
    answer: "Nous sommes ouverts du Samedi au Jeudi de 08:30 à 18:00. Retrouvez notre adresse exacte sur la page de contact."
  }
];
