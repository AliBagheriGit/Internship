"use client";

import React from "react";
import { Sparkles, ArrowLeft, Activity, Shield, Cpu, Network } from "lucide-react";
import { Button } from "@/components/common/button";
import { Badge } from "@/components/common/badge";
import { useSiteStore } from "@/store/use-site-store";

export const HeroSection: React.FC = () => {
  const { openConsultationModal } = useSiteStore();

  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 bg-gradient-to-b from-blue-900 via-blue-950 to-slate-950 text-white">
      {/* Background Tech Mesh & Gradient Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 right-1/4 w-[500px] h-[500px] bg-blue-500/15 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 -left-32 w-[450px] h-[450px] bg-sky-500/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-10 w-[350px] h-[350px] bg-indigo-500/10 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:32px_32px] opacity-15" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Tagline Badge */}
        <div className="flex justify-center mb-6">
          <Badge
            variant="glass"
            className="py-1.5 px-4 text-xs sm:text-sm font-medium border-sky-400/30 text-sky-200 gap-2 shadow-lg"
          >
            <span className="flex h-2 w-2 rounded-full bg-sky-400 animate-ping" />
            <span>شتاب‌دهنده و استارتاپ استودیوی تخصصی سلامت هوشمند</span>
          </Badge>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.25] text-white">
            دقت مهندسی و تخصص پزشکی،
            <br />
            <span className="bg-gradient-to-r from-sky-400 via-blue-300 to-white bg-clip-text text-transparent">
              آینده سلامت را امروز بسازید
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed pt-2">
            شریف کلینیک، پلی میان پیشرفته‌ترین فناوری‌های مهندسی دانشگاه صنعتی شریف و چالش‌های واقعی بالینی برای تحول در مراقبت از سلامت بیماران.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-4">
            <Button
              onClick={() => openConsultationModal("startup_idea")}
              size="lg"
              className="w-full sm:w-auto text-sm sm:text-base font-bold shadow-xl shadow-blue-500/25"
            >
              <Sparkles className="w-4 h-4 ml-1 text-sky-200" />
              <span>ثبت ایده و درخواست شتابدهی</span>
              <ArrowLeft className="w-4 h-4 mr-1" />
            </Button>

            <a href="#services" className="w-full sm:w-auto">
              <Button
                variant="glass"
                size="lg"
                className="w-full sm:w-auto text-sm sm:text-base font-semibold border-white/20"
              >
                <span>مشاهده خدمات سلامت</span>
              </Button>
            </a>
          </div>
        </div>

        {/* Dual High-Impact Cards (From Sharif Clinic website structure) */}
        <div className="mt-14 md:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Feature Card */}
          <div className="lg:col-span-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/15 p-6 sm:p-7 flex flex-col justify-between hover:bg-white/15 transition-all duration-300 shadow-xl group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-400/30 to-blue-600/30 border border-sky-400/30 flex items-center justify-center text-sky-300 group-hover:scale-105 transition-transform">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">هم‌گرایی پزشکی و مهندسی</h3>
              <p className="text-sm leading-relaxed text-slate-300 text-justify">
                شریف کلینیک با همکاری متخصصان برجسته پزشکی و نخبگان مهندسی، شتاب‌دهنده و استارتاپ استودیوی حوزه سلامت هوشمند است که راه‌حل‌های نوآورانه برای ارتقای نظام سلامت ایران ارائه می‌دهد.
              </p>
            </div>
            <div className="pt-4 flex items-center gap-2 text-xs text-sky-300 font-medium">
              <Shield className="w-4 h-4 text-emerald-400" />
              <span>اعتبارسنجی بالینی و استانداردسازی جهانی</span>
            </div>
          </div>

          {/* Central Interactive Health-Tech Visual Graphic */}
          <div className="lg:col-span-4 rounded-2xl bg-gradient-to-b from-blue-900/60 to-slate-900/80 backdrop-blur-md border border-sky-500/20 p-6 flex flex-col items-center justify-center text-center relative overflow-hidden shadow-2xl">
            {/* Animated Glow Rings */}
            <div className="absolute w-44 h-44 rounded-full bg-blue-500/20 blur-xl animate-pulse" />
            
            {/* Tech-Heart Stethoscope Centerpiece */}
            <div className="relative z-10 w-24 h-24 rounded-2xl bg-gradient-to-tr from-blue-600 to-sky-400 p-[2px] shadow-2xl shadow-sky-500/30 mb-5 flex items-center justify-center">
              <div className="w-full h-full bg-[#0a1835] rounded-[14px] flex items-center justify-center">
                <Activity className="w-12 h-12 text-sky-400 animate-bounce duration-1000" />
              </div>
            </div>

            <span className="text-xs font-semibold text-sky-300 tracking-wider uppercase">
              اکوسیستم سلامت دیجیتال
            </span>
            <h4 className="text-lg font-extrabold text-white mt-1">
              نوآوری بر پایه شواهد علمی
            </h4>
            <p className="text-xs text-slate-400 mt-2 max-w-xs leading-relaxed">
              تلفیق پردازش موازی، هوش مصنوعی، حسگرهای زیستی و پروتکل‌های پزشکی روز دنیا
            </p>

            {/* Quick Live Indicators */}
            <div className="mt-5 grid grid-cols-2 gap-2 w-full pt-4 border-t border-white/10 text-xs">
              <div className="bg-white/5 rounded-xl p-2.5">
                <span className="block text-slate-400 text-[11px]">پوشش بالینی</span>
                <span className="font-bold text-sky-300">+۳۰ بیمارستان</span>
              </div>
              <div className="bg-white/5 rounded-xl p-2.5">
                <span className="block text-slate-400 text-[11px]">تیم‌های فناور</span>
                <span className="font-bold text-sky-300">+۴۵ استارتاپ</span>
              </div>
            </div>
          </div>

          {/* Right Feature Card */}
          <div className="lg:col-span-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/15 p-6 sm:p-7 flex flex-col justify-between hover:bg-white/15 transition-all duration-300 shadow-xl group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/30 to-indigo-600/30 border border-blue-400/30 flex items-center justify-center text-sky-300 group-hover:scale-105 transition-transform">
                <Network className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">زیرساخت و شبکه‌سازی آینده</h3>
              <p className="text-sm leading-relaxed text-slate-300 text-justify">
                آینده سلامت با فناوری گره خورده است؛ ما با فراهم‌کردن زیرساخت، توسعه، آموزش و شبکه‌سازی گسترده میان دانشگاهیان و تصمیم‌گیران، از پیشرفت و همه‌گیری فناوری‌های سلامت حمایت می‌کنیم.
              </p>
            </div>
            <div className="pt-4 flex items-center gap-2 text-xs text-sky-300 font-medium">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>تسهیل ورود به بازارهای دانش‌بنیان</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
