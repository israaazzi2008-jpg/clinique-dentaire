import { DentalService, PatientTestimonial, ToothNode, FAQItem } from './types';

export const CLINIC_INFO = {
  name: "Cabinet Dr. Émilie Laurent",
  subtitle: "Soins Dentaires Modernes & Indolores",
  phone: "01 42 68 53 00",
  formattedPhone: "+33 1 42 68 53 00",
  email: "contact@dentaire-laurent.fr",
  address: "14 Avenue de la République, 75011 Paris",
  metro: "Métro : République",
  hours: [
    { days: "Lundi - Vendredi", hours: "09:00 - 19:30" },
    { days: "Samedi", hours: "09:00 - 13:00" }
  ],
  emergencyNotice: "Urgence douloureuse ? Nous vous recevons le jour même. Appelez-nous dès 8h30 !"
};

export const DENTAL_SERVICES: DentalService[] = [
  {
    id: "preventive",
    title: "Prévention & Hygiène",
    description: "Nettoyage doux et détartrage ultrasonique pour des gencives saines.",
    benefits: [
      "Détartrage 100% indolore",
      "Élimine les taches de thé/café"
    ],
    duration: "30 min",
    urgencyLevel: "Standard",
    iconName: "ShieldCheck"
  },
  {
    id: "implants",
    title: "Implant & Couronne",
    description: "Remplacement de dent absente par racine titane et couronne céramique 3D.",
    benefits: [
      "Restauration esthétique immédiate",
      "Matériaux français biocompatibles"
    ],
    duration: "2-3 rdv",
    urgencyLevel: "Prioritaire",
    iconName: "Sparkles"
  },
  {
    id: "veneer",
    title: "Facettes Esthétiques",
    description: "Fines pellicules en céramique pour corriger la teinte et l'alignement.",
    benefits: [
      "Résultat sur mesure immédiat",
      "Émail naturel préservé"
    ],
    duration: "2 rdv",
    urgencyLevel: "Standard",
    iconName: "Smile"
  },
  {
    id: "ortho",
    title: "Aligneurs Invisibles",
    description: "Redressez vos dents discrètement avec des gouttières transparentes amovibles.",
    benefits: [
      "Totalement invisible",
      "Amovibles pour manger"
    ],
    duration: "6-12 mois",
    urgencyLevel: "Standard",
    iconName: "Layers"
  },
  {
    id: "whitening",
    title: "Blanchiment LED",
    description: "Éclaircissement spectaculaire de vos dents en une seule séance.",
    benefits: [
      "Gain de plusieurs teintes en 1h",
      "Sûr et respectueux de l'émail"
    ],
    duration: "1h",
    urgencyLevel: "Standard",
    iconName: "Zap"
  },
  {
    id: "emergency",
    title: "Urgences Dentaires",
    description: "Rage de dent ou abcès ? Prise en charge prioritaire pour vous soulager.",
    benefits: [
      "RDV assuré aujourd'hui",
      "Soulagement direct de la douleur"
    ],
    duration: "30 min",
    urgencyLevel: "Urgence",
    iconName: "HeartPulse"
  }
];

export const PATIENT_TESTIMONIALS: PatientTestimonial[] = [
  {
    id: "t1",
    name: "Marc-Antoine G.",
    role: "Patient rassuré",
    text: "Une douceur exceptionnelle ! Moi qui avais la phobie du dentiste, je n'ai absolument rien senti. Cabinet propre et moderne.",
    rating: 5,
    date: "Récent",
    treatmentReceived: "Détartrage & Carie"
  },
  {
    id: "t2",
    name: "Sophie L.",
    role: "Patiente ravie",
    text: "Le résultat de mes facettes est incroyable et très naturel. Merci à toute l'équipe pour leur écoute attentive.",
    rating: 5,
    date: "Récent",
    treatmentReceived: "Facettes Céramiques"
  },
  {
    id: "t3",
    name: "Karim B.",
    role: "Patient - Invisalign",
    text: "Matériel 3D de pointe. Mon traitement par gouttières invisibles s'est terminé en 8 mois avec un alignement parfait.",
    rating: 5,
    date: "Récent",
    treatmentReceived: "Aligneurs Invisalign"
  }
];

export const TOOTH_NODES: ToothNode[] = [
  {
    id: "tooth-incisive",
    number: 11,
    type: "incisive",
    nameInFrench: "Incisive",
    englishType: "Incisor",
    roleDescription: "Sert à couper. C'est l'élément central du sourire.",
    primaryProcedure: "Blanchiment & Facettes",
    procedureDetail: "Correction de teinte, forme ou fêlure via facettes ultra-fines.",
    symptoms: [
      "Coloration jaune",
      "Ébréchure"
    ],
    treatmentDuration: "1-2 rdv",
    aestheticImpact: "Éclat immédiat du sourire."
  },
  {
    id: "tooth-canine",
    number: 13,
    type: "canine",
    nameInFrench: "Canine",
    englishType: "Canine",
    roleDescription: "Déchire les aliments. Très solide avec une longue racine.",
    primaryProcedure: "Couronne Céramique",
    procedureDetail: "Pose de céramique haute résistance en cas de choc ou fracture.",
    symptoms: [
      "Fêlure douloureuse",
      "Choc frontal"
    ],
    treatmentDuration: "1 rdv",
    aestheticImpact: "Restauration robuste invisible."
  },
  {
    id: "tooth-premolaire",
    number: 14,
    type: "premolaire",
    nameInFrench: "Prémolaire",
    englishType: "Premolar",
    roleDescription: "Initie le broyage des aliments.",
    primaryProcedure: "Composite & Onlay blanc",
    procedureDetail: "Reconstruction esthétique de caries sans plombages gris inesthétiques.",
    symptoms: [
      "Sensibilité au froid",
      "Petite carie"
    ],
    treatmentDuration: "45 min",
    aestheticImpact: "Soin invisible et solide."
  },
  {
    id: "tooth-molaire",
    number: 16,
    type: "molaire",
    nameInFrench: "Molaire",
    englishType: "Molar",
    roleDescription: "Brique essentielle de la mastication.",
    primaryProcedure: "Dévitalisation & Couronne",
    procedureDetail: "Traitement de canal sous microscope pour sauver la dent naturelle.",
    symptoms: [
      "Rage de dent vive",
      "Sensibilité chaud/froid"
    ],
    treatmentDuration: "1h",
    aestheticImpact: "Sauvegarde de la racine naturelle."
  },
  {
    id: "tooth-sagesse",
    number: 18,
    type: "sagesse",
    nameInFrench: "Sagesse",
    englishType: "Wisdom Tooth",
    roleDescription: "Pousse tardivement tout au fond.",
    primaryProcedure: "Extraction en douceur",
    procedureDetail: "Extraction rapide sans gêne sous anesthésie locale ciblée.",
    symptoms: [
      "Pression douloureuse",
      "Manque de place"
    ],
    treatmentDuration: "45 min",
    aestheticImpact: "Soulagement de la pression bucco-dentaire."
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    category: "Général",
    question: "Comment se passe la première consultation ?",
    answer: "Un bilan rapide de 30 minutes : examen approfondi, radio panoramique et conseils personnalisés."
  },
  {
    category: "Tarifs",
    question: "Le cabinet accepte-t-il la carte Vitale ?",
    answer: "Oui ! Nous sommes conventionnés Secteur 1, pratiquons le Tiers Payant Sécu et mutuelles."
  }
];
