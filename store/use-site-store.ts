import { create } from "zustand";
import { ServiceItem, ConsultationFormData } from "@/types";

interface SiteStoreState {
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

export const useSiteStore = create<SiteStoreState>((set) => ({
  isMobileMenuOpen: false,
  setIsMobileMenuOpen: (open) => set({ isMobileMenuOpen: open }),
  toggleMobileMenu: () => set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),

  selectedService: null,
  setSelectedService: (service) => set({ selectedService: service }),

  activeServiceCategory: "all",
  setActiveServiceCategory: (category) => set({ activeServiceCategory: category }),

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
