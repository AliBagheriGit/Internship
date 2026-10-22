"use client";

import React from "react";
import { useSiteStore } from "@/store/use-site-store";
import { translations } from "@/lib/translations";

interface LogoProps {
  className?: string;
  lightMode?: boolean;
}

export const SharifClinicLogo: React.FC<LogoProps> = ({
  className = "h-10 w-auto",
  lightMode = false,
}) => {
  const { language } = useSiteStore();
  const t = translations[language].common;

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Icon Mark: Medical Cross & Tech Waves */}
      <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 via-blue-600 to-sky-400 p-[2px] shadow-md shadow-blue-500/20 flex-shrink-0 flex items-center justify-center overflow-hidden">
        <div className="w-full h-full bg-[#0a192f] rounded-[10px] flex items-center justify-center relative">
          {/* Subtle glow circle */}
          <div className="absolute inset-0 bg-blue-500/10 blur-[6px] rounded-full"></div>

          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="w-6 h-6 text-sky-400 relative z-10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Health Pulse Line */}
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            {/* Tech Nodes */}
            <circle cx="12" cy="12" r="1.5" fill="#38bdf8" />
          </svg>
        </div>
      </div>

      {/* Typography: Sharif Clinic */}
      <div className="flex flex-col">
        <span
          className={`font-black text-xl tracking-tight leading-none ${
            lightMode ? "text-white" : "text-slate-900 dark:text-white"
          }`}
        >
          {t.brandName}
        </span>
        <span
          className={`text-[10px] font-semibold tracking-wider uppercase mt-1 leading-none ${
            lightMode ? "text-sky-200" : "text-blue-600 dark:text-sky-400"
          }`}
        >
          {t.brandSubtitle}
        </span>
      </div>
    </div>
  );
};
