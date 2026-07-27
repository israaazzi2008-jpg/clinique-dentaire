export interface DentalService {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  duration: string;
  urgencyLevel: 'Standard' | 'Prioritaire' | 'Urgence';
  iconName: string;
}

export interface PatientTestimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
  date: string;
  treatmentReceived: string;
}

export interface ToothNode {
  id: string;
  number: number;
  type: 'incisive' | 'canine' | 'premolaire' | 'molaire' | 'sagesse';
  nameInFrench: string;
  englishType: string;
  roleDescription: string;
  primaryProcedure: string;
  procedureDetail: string;
  symptoms: string[];
  treatmentDuration: string;
  aestheticImpact: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}
