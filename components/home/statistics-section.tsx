import React from "react";
import { CircleDollarSign, Globe2, Stethoscope, LineChart } from "lucide-react";
import { STATS_DATA } from "@/lib/data";

const STAT_ICONS: Record<string, React.ElementType> = {
  CircleDollarSign,
  Globe2,
  Stethoscope,
  LineChart,
};

export const StatisticsSection: React.FC = () => {
  return (
    <section id="stats" className="py-20 bg-slate-50 dark:bg-slate-900 scroll-mt-16 border-t border-slate-200/60 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs sm:text-sm font-bold text-blue-600 dark:text-sky-400 tracking-wider uppercase">
            چشم‌انداز و بازار جهانی
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
            این حوزه نه یک فرصت، که یک ضرورت است
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 text-justify sm:text-center leading-relaxed">
            با توجه به گسترش روزافزون و فراگیر شدن سلامت دیجیتال در سطح جهان، داده‌های آماری زیر شتاب خیره‌کننده نفوذ فناوری در ارتقای شاخص‌های حیات را نمایان می‌سازند.
          </p>
        </div>

        {/* 4 Stats Cards Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS_DATA.map((stat) => {
            const IconComp = STAT_ICONS[stat.icon] || LineChart;

            return (
              <div
                key={stat.id}
                className="relative rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 p-6 flex flex-col items-center text-center shadow-sm hover:shadow-xl hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 group"
              >
                <div className="w-13 h-13 rounded-2xl bg-blue-50 dark:bg-blue-950/70 text-blue-600 dark:text-sky-400 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <IconComp className="w-6 h-6" />
                </div>

                <span className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight mb-2">
                  {stat.value}
                </span>

                <h4 className="text-sm font-bold text-blue-700 dark:text-sky-300 mb-2">
                  {stat.label}
                </h4>

                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {stat.sublabel}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
