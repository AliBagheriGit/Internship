"use client";

import React from "react";
import { Sparkles, DollarSign, Award, Server, Users, ArrowLeft } from "lucide-react";
import { INVESTMENT_PILLARS } from "@/lib/data";
import { Button } from "@/components/common/button";
import { useSiteStore } from "@/store/use-site-store";

const PILLAR_ICONS = [DollarSign, Award, Server, Users];

export const InvestmentCtaSection: React.FC = () => {
  const { openConsultationModal } = useSiteStore();

  return (
    <section id="investment" className="py-20 bg-gradient-to-br from-blue-950 via-[#0a192f] to-slate-950 text-white relative overflow-hidden scroll-mt-16">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Right Column: Statement & CTA */}
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/15 border border-sky-400/30 text-sky-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>فرصتی نو برای نوآوران سلامت</span>
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight text-white">
              سرمایه‌گذاری در آینده سلامت دیجیتال ایران
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed text-justify">
              اگر شما یا تیم شما ایده‌ای برای حل یک مسئله واقعی در نظام سلامت دارید — چه در تشخیص هوشمند با AI، چه مراقبت از راه دور و تله‌مدیسین، چه در داروسازی دیجیتال یا هر نقطه‌ای از زنجیره درمان — شریف کلینیک آماده است تا با حمایت جامع مالی، فنی و اعتبار بالینی همراهتان باشد.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Button
                onClick={() => openConsultationModal("startup_idea")}
                size="lg"
                className="gap-2 shadow-xl shadow-blue-500/30 text-sm sm:text-base font-bold"
              >
                <span>ارسال طرح اولیه و پیچ‌دک</span>
                <ArrowLeft className="w-4 h-4" />
              </Button>

              <Button
                onClick={() => openConsultationModal("investment")}
                variant="glass"
                size="lg"
                className="text-sm sm:text-base"
              >
                <span>درخواست جلسه هم‌افزایی</span>
              </Button>
            </div>
          </div>

          {/* Left Column: 4 Strategic Pillars */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {INVESTMENT_PILLARS.map((pillar, idx) => {
              const IconComp = PILLAR_ICONS[idx] || Sparkles;

              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-5 hover:bg-white/10 hover:border-sky-400/40 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-sky-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-2 leading-snug">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed text-justify">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
