"use client";

import { useEffect } from "react";
import { useSiteStore } from "@/store/use-site-store";
import { Language } from "@/types";

export const LanguageSync: React.FC = () => {
  const { setLanguage } = useSiteStore();

  useEffect(() => {
    try {
      // 1. URL search param check (?lang=en or ?lang=fa)
      const params = new URLSearchParams(window.location.search);
      const urlLang = params.get("lang");
      if (urlLang === "en" || urlLang === "fa") {
        setLanguage(urlLang as Language);
        return;
      }

      // 2. Local storage check
      const savedLang = localStorage.getItem("sharif_clinic_lang");
      if (savedLang === "en" || savedLang === "fa") {
        setLanguage(savedLang as Language);
        return;
      }

      // 3. Browser language fallback (if browser starts with 'en' and no saved pref)
      // Default remains 'fa' as per design
    } catch {
      // ignore in environments with restricted storage
    }
  }, [setLanguage]);

  return null;
};

