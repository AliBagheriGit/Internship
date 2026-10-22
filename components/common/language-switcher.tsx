"use client";

import React from "react";
import { Globe } from "lucide-react";
import { useSiteStore } from "@/store/use-site-store";
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  className?: string;
  showIcon?: boolean;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  className,
  showIcon = true,
}) => {
  const { language, setLanguage } = useSiteStore();

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 p-0.5 rounded-xl bg-slate-100/90 dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-xs backdrop-blur-sm select-none",
        className
      )}
    >
      {showIcon && (
        <span className="ps-2 text-slate-500 dark:text-slate-400 flex items-center">
          <Globe className="w-3.5 h-3.5" />
        </span>
      )}
      <button
        type="button"
        onClick={() => setLanguage("fa")}
        className={cn(
          "px-2.5 py-1 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer",
          language === "fa"
            ? "bg-white dark:bg-slate-700 text-blue-600 dark:text-sky-400 shadow-xs"
            : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-slate-700/50"
        )}
        aria-label="فارسی"
        aria-pressed={language === "fa"}
      >
        فا
      </button>

      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={cn(
          "px-2.5 py-1 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer",
          language === "en"
            ? "bg-white dark:bg-slate-700 text-blue-600 dark:text-sky-400 shadow-xs"
            : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-slate-700/50"
        )}
        aria-label="English"
        aria-pressed={language === "en"}
      >
        EN
      </button>
    </div>
  );
};

