"use client";

import React, { useMemo } from "react";
import {
  Rocket,
  TrendingUp,
  Building2,
  HeartPulse,
  Video,
  Pill,
  BrainCircuit,
  GraduationCap,
  ArrowLeft,
  Layers,
} from "lucide-react";
import { SERVICES_DATA } from "@/lib/data";
import { Badge } from "@/components/common/badge";
import { useSiteStore } from "@/store/use-site-store";
import { ServiceItem } from "@/types";

const ICON_MAP: Record<string, React.ElementType> = {
  Rocket,
  TrendingUp,
  Building2,
  HeartPulse,
  Video,
  Pill,
  BrainCircuit,
  GraduationCap,
};

const CATEGORIES = [
  { id: "all", label: "همه خدمات" },
  { id: "startups", label: "استارتاپ‌ها و شتابدهی" },
  { id: "centers", label: "مراکز درمانی و بیمارستان‌ها" },
  { id: "patients", label: "پایش و مراقبت بیماران" },
  { id: "technology", label: "فناوری‌های تشخیصی و دارو" },
];

export const ServicesSection: React.FC = () => {
  const { activeServiceCategory, setActiveServiceCategory, setSelectedService } =
    useSiteStore();

  const filteredServices = useMemo(() => {
    if (activeServiceCategory === "all") return SERVICES_DATA;
    return SERVICES_DATA.filter((item) => item.category === activeServiceCategory);
  }, [activeServiceCategory]);

  return (
    <section id="services" className="py-20 bg-slate-50 dark:bg-slate-900/60 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs sm:text-sm font-bold text-blue-600 dark:text-sky-400 tracking-wider uppercase">
            خدمات یکپارچه سلامت
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
            خدمات سلامت یکجا برای شما
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            با چند کلیک، به هر سرویس سلامت، شتابدهی و ابزارهای فناورانه مورد نیاز خود دسترسی پیدا کنید.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {CATEGORIES.map((cat) => {
            const isActive = activeServiceCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveServiceCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 select-none ${
                  isActive
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/25"
                    : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Services Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredServices.map((service) => {
            const IconComponent = ICON_MAP[service.icon] || Layers;

            return (
              <div
                key={service.id}
                className="group relative rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/70 p-6 flex flex-col justify-between hover:shadow-xl hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div>
                  {/* Top Icon & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-13 h-13 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900/60 flex items-center justify-center text-blue-600 dark:text-sky-400 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                      <IconComponent className="w-7 h-7" />
                    </div>

                    {service.badge && (
                      <Badge variant="primary" className="text-[11px]">
                        {service.badge}
                      </Badge>
                    )}
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                    {service.shortDescription}
                  </p>

                  {/* Features Bullet List Preview */}
                  <ul className="space-y-1.5 border-t border-slate-100 dark:border-slate-700/60 pt-3">
                    {service.features.slice(0, 2).map((feat, i) => (
                      <li
                        key={i}
                        className="text-[11px] text-slate-600 dark:text-slate-300 flex items-center gap-1.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                        <span className="truncate">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Action Trigger */}
                <div className="mt-6 pt-3 border-t border-slate-100 dark:border-slate-700/60">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="w-full inline-flex items-center justify-between text-xs font-bold text-blue-600 dark:text-sky-400 hover:text-blue-700 dark:hover:text-sky-300 transition-colors py-1 group/btn"
                  >
                    <span>مشاهده جزئیات کامل</span>
                    <ArrowLeft className="w-4 h-4 transform group-hover/btn:-translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredServices.length === 0 && (
          <div className="mt-12 text-center py-12 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-8">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              هیچ خدمتی در این دسته‌بندی یافت نشد.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
