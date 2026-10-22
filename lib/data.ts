import { ServiceItem, PathwayItem, StatItem, NavItem } from "@/types";
import { translations, Language } from "./translations";

export const getNavItems = (lang: Language): NavItem[] => translations[lang].nav;
export const getServicesData = (lang: Language): ServiceItem[] => translations[lang].services.items;
export const getPathwaysData = (lang: Language): PathwayItem[] => translations[lang].pathways.items;
export const getStatsData = (lang: Language): StatItem[] => translations[lang].stats.items;
export const getInvestmentPillars = (lang: Language) => translations[lang].investment.pillars;

// Default exports for backward compatibility
export const NAV_ITEMS = translations.fa.nav;
export const SERVICES_DATA = translations.fa.services.items;
export const PATHWAYS_DATA = translations.fa.pathways.items;
export const STATS_DATA = translations.fa.stats.items;
export const INVESTMENT_PILLARS = translations.fa.investment.pillars;

export const CLINIC_CONTACT = {
  phones: ["09376075279", "09938582868"],
  emails: ["info@sharifclinic.co", "invest@sharifclinic.co"],
  address: {
    fa: "تهران، ضلع غربی دانشگاه صنعتی شریف، خیابان شهید ولی‌الله صادقی، پلاک ۲۶، واحد ۱۰",
    en: "Tehran, West side of Sharif University of Technology, Shahid Sadeghi St., No. 26, Unit 10",
  },
  telegramUrl: "https://t.me/+989376075279",
  telegramPhone: "09376075279",
};
