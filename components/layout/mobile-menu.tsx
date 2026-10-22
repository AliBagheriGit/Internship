"use client";

import React from "react";
import Link from "next/link";
import { X, ArrowLeft, ArrowRight, Phone, Sparkles } from "lucide-react";
import { useSiteStore } from "@/store/use-site-store";
import { CLINIC_CONTACT } from "@/lib/data";
import { translations } from "@/lib/translations";
import { SharifClinicLogo } from "@/components/icons/logo";
import { Button } from "@/components/common/button";
import { LanguageSwitcher } from "@/components/common/language-switcher";

export const MobileMenu: React.FC = () => {
  const { isMobileMenuOpen, setIsMobileMenuOpen, openConsultationModal, language } = useSiteStore();
  const t = translations[language];
  const isRtl = language === "fa";

  if (!isMobileMenuOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden flex">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity"
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Drawer Panel */}
      <div
        className={`relative w-full max-w-xs sm:max-w-sm h-full bg-white dark:bg-slate-900 shadow-2xl flex flex-col p-6 overflow-y-auto z-10 duration-300 animate-in ${
          isRtl
            ? "mr-auto border-l border-slate-200 dark:border-slate-800 slide-in-from-right"
            : "ml-auto border-r border-slate-200 dark:border-slate-800 slide-in-from-left"
        }`}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between pb-6 border-b border-slate-100 dark:border-slate-800">
          <SharifClinicLogo className="scale-90 origin-start" />
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label={t.header.closeMenuAria}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Language Switcher in Mobile Drawer */}
        <div className="pt-4 pb-2 flex items-center justify-between border-b border-slate-100 dark:border-slate-800">
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
            {t.common.switchLanguage}:
          </span>
          <LanguageSwitcher />
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-2 py-5">
          {t.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-between px-4 py-3 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 font-medium text-sm transition-all"
            >
              <span>{item.label}</span>
              {isRtl ? (
                <ArrowLeft className="w-4 h-4 opacity-40" />
              ) : (
                <ArrowRight className="w-4 h-4 opacity-40" />
              )}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-3">
          <Button
            onClick={() => {
              setIsMobileMenuOpen(false);
              openConsultationModal("startup_idea");
            }}
            className="w-full gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>{t.header.ctaText}</span>
          </Button>

          <a
            href={`tel:${CLINIC_CONTACT.phones[0]}`}
            className="flex items-center justify-center gap-2 p-3 text-xs text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors dir-ltr"
          >
            <Phone className="w-4 h-4 text-blue-500" />
            <span>{CLINIC_CONTACT.phones[0]}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
