export type Language = "fa" | "en";

export interface ServiceItem {
  id: string;
  title: string;
  category: "startups" | "centers" | "patients" | "technology";
  shortDescription: string;
  fullDescription: string;
  features: string[];
  icon: string;
  badge?: string;
}

export interface PathwayItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  icon: string;
  accentColor: string;
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
  sublabel: string;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface ConsultationFormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  cooperationType: "startup_idea" | "hospital_integration" | "investment" | "general_inquiry";
  description: string;
}
