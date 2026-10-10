"use client";

import React from "react";
import { Workflow, Rocket, Check, ArrowLeft, Layers, ShieldCheck } from "lucide-react";
import { PATHWAYS_DATA } from "@/lib/data";
import { Button } from "@/components/common/button";
import { useSiteStore } from "@/store/use-site-store";

export const DualPathwaysSection: React.FC = () => {
  const { openConsultationModal } = useSiteStore();

  return (
    <section id="pathways" className="py-20 bg-white dark:bg-slate-950 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs sm:text-sm font-bold text-sky-600 dark:text-sky-400 tracking-wider uppercase">
            مدل‌های نوآوری و همکاری
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
            ما دو مسیر مکمل را دنبال می‌کنیم
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            متناسب با اینکه شما صاحب ایده، تیم استارتاپی، پژوهشگر دانشگاهی یا مرکز درمانی باشید، بهترین ساختار همکاری را ارائه می‌دهیم.
          </p>
        </div>

        {/* Pathways Cards */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {PATHWAYS_DATA.map((pathway, idx) => {
            const isStudio = pathway.id === "venture-studio";

            return (
              <div
                key={pathway.id}
                className="relative rounded-3xl bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-900/60 border border-slate-200 dark:border-slate-800 p-8 sm:p-10 flex flex-col justify-between hover:shadow-2xl hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 group"
              >
                <div>
                  {/* Top Badge & Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-blue-600/10 dark:bg-blue-500/20 text-blue-600 dark:text-sky-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {isStudio ? (
                        <Workflow className="w-8 h-8" />
                      ) : (
                        <Rocket className="w-8 h-8" />
                      )}
                    </div>

                    <span className="text-4xl font-black text-slate-200 dark:text-slate-800">
                      ۰{idx + 1}
                    </span>
                  </div>

                  <span className="text-xs font-semibold text-blue-600 dark:text-sky-400 uppercase tracking-wider">
                    {pathway.subtitle}
                  </span>

                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1 mb-4">
                    {pathway.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-justify mb-6">
                    {pathway.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-3 pt-4 border-t border-slate-200/80 dark:border-slate-800">
                    <span className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider block mb-2">
                      محورهای کلیدی این مسیر:
                    </span>
                    {pathway.highlights.map((item, i) => (
                      <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        <div className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="mt-8 pt-6 border-t border-slate-200/80 dark:border-slate-800">
                  <Button
                    onClick={() =>
                      openConsultationModal(
                        isStudio ? "startup_idea" : "investment"
                      )
                    }
                    variant={isStudio ? "primary" : "secondary"}
                    className="w-full justify-between"
                  >
                    <span>
                      {isStudio
                        ? "همکاری در خلق محصول و استودیو"
                        : "درخواست جذب سرمایه و شتابدهی"}
                    </span>
                    <ArrowLeft className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
