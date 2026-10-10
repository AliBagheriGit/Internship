"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, Sparkles, PhoneCall } from "lucide-react";
import { NAV_ITEMS, CLINIC_CONTACT } from "@/lib/data";
import { SharifClinicLogo } from "@/components/icons/logo";
import { Button } from "@/components/common/button";
import { useSiteStore } from "@/store/use-site-store";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { toggleMobileMenu, openConsultationModal } = useSiteStore();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm border-b border-slate-200/80 dark:border-slate-800/80 py-3.5"
          : "bg-white/70 dark:bg-slate-950/70 backdrop-blur-sm border-b border-slate-100 dark:border-slate-900 py-4.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <Link href="/" className="transition-transform hover:scale-[1.01] active:scale-[0.99]">
            <SharifClinicLogo />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50/70 dark:hover:bg-slate-800/60 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <a
              href={`tel:${CLINIC_CONTACT.phones[0]}`}
              className="hidden sm:inline-flex items-center gap-2 px-3 py-2 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/60"
            >
              <PhoneCall className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400" />
              <span>{CLINIC_CONTACT.phones[0]}</span>
            </a>

            <Button
              onClick={() => openConsultationModal("startup_idea")}
              size="sm"
              className="hidden sm:inline-flex shadow-sm hover:shadow-md transition-all gap-1.5 text-xs font-semibold"
            >
              <Sparkles className="w-3.5 h-3.5 text-sky-200" />
              <span>همکاری و جذب سرمایه</span>
            </Button>

            {/* Mobile Hamburger Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="منوی سایت"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
