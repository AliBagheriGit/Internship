import { create } from "zustand";
import { ServiceItem, ConsultationFormData, Language } from "@/types";

interface SiteStoreState {
  // Language & i18n
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;

  // Mobile Navigation
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
  toggleMobileMenu: () => void;

  // Service Details Modal
  selectedService: ServiceItem | null;
  setSelectedService: (service: ServiceItem | null) => void;

  // Services Filter Category
  activeServiceCategory: string;
  setActiveServiceCategory: (category: string) => void;

  // Consultation & Pitch Modal
  isConsultationModalOpen: boolean;
  consultationDefaultType: ConsultationFormData["cooperationType"];
  openConsultationModal: (type?: ConsultationFormData["cooperationType"]) => void;
  closeConsultationModal: () => void;

  // Form Submission Status
  isSubmitting: boolean;
  isSubmissionSuccess: boolean;
  submitConsultation: (data: ConsultationFormData) => Promise<boolean>;
  resetConsultationState: () => void;
}

export const useSiteStore = create<SiteStoreState>((set, get) => ({
  // Language State (Persian by default)
  language: "fa",
  setLanguage: (lang: Language) => {
    set({ language: lang });
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("sharif_clinic_lang", lang);
      } catch {
        // ignore localStorage errors (e.g. private mode)
      }
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
    }
  },
  toggleLanguage: () => {
    const nextLang = get().language === "fa" ? "en" : "fa";
    get().setLanguage(nextLang);
  },

  // Mobile Menu
  isMobileMenuOpen: false,
  setIsMobileMenuOpen: (open) => set({ isMobileMenuOpen: open }),
  toggleMobileMenu: () => set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),

  // Service Details Modal
  selectedService: null,
  setSelectedService: (service) => set({ selectedService: service }),

  // Services Filter Category
  activeServiceCategory: "all",
  setActiveServiceCategory: (category) => set({ activeServiceCategory: category }),

  // Consultation Modal
  isConsultationModalOpen: false,
  consultationDefaultType: "startup_idea",
  openConsultationModal: (type = "startup_idea") =>
    set({
      isConsultationModalOpen: true,
      consultationDefaultType: type,
      isSubmissionSuccess: false,
    }),
  closeConsultationModal: () =>
    set({
      isConsultationModalOpen: false,
    }),

  isSubmitting: false,
  isSubmissionSuccess: false,
  submitConsultation: async (data: ConsultationFormData) => {
    void data;
    set({ isSubmitting: true });
    // Simulate real asynchronous API call
    await new Promise((resolve) => setTimeout(resolve, 900));
    set({ isSubmitting: false, isSubmissionSuccess: true });
    return true;
  },
  resetConsultationState: () =>
    set({
      isSubmitting: false,
      isSubmissionSuccess: false,
    }),
}));
