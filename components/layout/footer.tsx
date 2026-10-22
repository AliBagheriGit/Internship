"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, ShieldCheck, HeartHandshake, Send } from "lucide-react";
import { SharifClinicLogo } from "@/components/icons/logo";
import { CLINIC_CONTACT } from "@/lib/data";
import { translations } from "@/lib/translations";
import { useSiteStore } from "@/store/use-site-store";

export const Footer: React.FC = () => {
  const { language } = useSiteStore();
  const t = translations[language];
  const isRtl = language === "fa";

  return (
    <footer id="contact" className="bg-[#0b1528] text-slate-300 pt-16 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">
          {/* Brand & Mission Statement */}
          <div className="lg:col-span-5 space-y-4">
            <SharifClinicLogo lightMode />
            <p className="text-sm leading-relaxed text-slate-400 text-justify pt-2">
              {t.footer.mission}
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-sky-400">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                {t.footer.badge1}
              </span>
              <span className="text-slate-600">•</span>
              <span className="flex items-center gap-1">
                <HeartHandshake className="w-4 h-4 text-sky-400" />
                {t.footer.badge2}
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-base mb-4 flex items-center gap-2">
              <span className="w-1.5 h-4 rounded-full bg-blue-500"></span>
              {t.footer.quickLinksTitle}
            </h4>
            <ul className="space-y-2.5 text-sm">
              {t.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-sky-400 transition-colors inline-flex items-center gap-1 text-slate-400"
                  >
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="#services"
                  className="hover:text-sky-400 transition-colors inline-flex items-center gap-1 text-slate-400"
                >
                  <span>{t.footer.studioLink}</span>
                </a>
              </li>
              <li>
                <a
                  href="#investment"
                  className="hover:text-sky-400 transition-colors inline-flex items-center gap-1 text-slate-400"
                >
                  <span>{t.footer.investmentLink}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-white font-bold text-base mb-4 flex items-center gap-2">
              <span className="w-1.5 h-4 rounded-full bg-sky-500"></span>
              {t.footer.contactTitle}
            </h4>
            <ul className="space-y-3.5 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{t.footer.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-sky-400 flex-shrink-0" />
                <div className="flex flex-wrap gap-2 text-slate-300 dir-ltr text-left">
                  {CLINIC_CONTACT.phones.map((phone, idx) => (
                    <a
                      key={phone}
                      href={`tel:${phone}`}
                      className="hover:text-sky-400 transition-colors"
                    >
                      {phone} {idx < CLINIC_CONTACT.phones.length - 1 ? "•" : ""}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-sky-400 flex-shrink-0" />
                <a
                  href={`mailto:${CLINIC_CONTACT.emails[0]}`}
                  className="hover:text-sky-400 transition-colors text-slate-300 dir-ltr"
                >
                  {CLINIC_CONTACT.emails[0]}
                </a>
              </li>
            </ul>

            <div className="pt-2">
              <a
                href={CLINIC_CONTACT.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 border border-sky-400/30 text-xs font-semibold transition-colors"
              >
                <span>{t.footer.telegramText} ({CLINIC_CONTACT.telegramPhone})</span>
                <Send className={`w-4 h-4 text-sky-400 ${isRtl ? "rotate-180" : ""}`} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} {t.footer.copyrightText}</p>
          <p className="flex items-center gap-1 text-slate-400">
            {t.footer.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
};
