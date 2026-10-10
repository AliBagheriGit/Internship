"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "شریف کلینیک برای چه کسانی طراحی شده است؟",
    answer: "کلیه پزشکان، کادر درمان، متخصصان حوزه مهندسی، هوش مصنوعی، بیوانفورماتیک، تیم‌های نوپای سلامت و همچنین بیمارستان‌ها و مراکزی که به دنبال راهکارهای تحول دیجیتال و بهبود تجربه بیمار هستند.",
  },
  {
    question: "استارتاپ استودیو (Startup Studio) چه تفاوتی با شتاب‌دهنده دارد؟",
    answer: "در استارتاپ استودیو، ایده‌ها از ابتدا توسط تیم‌های داخلی شریف کلینیک خلق و ساخته می‌شوند؛ در حالی که در شتاب‌دهنده، تیم‌های استارتاپی از پیش شکل‌گرفته با داشتن نمونه محصول اولیه پذیرش شده و سرمایه، منتورینگ و شبکه بازار دریافت می‌کنند.",
  },
  {
    question: "آیا ایده‌ها و طرح‌های ارسالی مشمول قرارداد محرمانگی (NDA) می‌شوند؟",
    answer: "بله، حفظ مالکیت فکری و امنیت اطلاعات ایده‌پردازان خط قرمز شریف کلینیک است. تمامی ارزیابی‌ها در فضایی کاملاً محرمانه و با تعهد کامل حقوقی انجام می‌پذیرد.",
  },
  {
    question: "فرآیند بررسی طرح‌ها و پاسخ‌دهی به متقاضیان چقدر زمان می‌برد؟",
    answer: "پس از ثبت فرم در وبسایت، بررسی اولیه توسط کمیته علمی طی حداکثر ۴۸ ساعت کاری انجام و جهت هماهنگی جلسه حضوری یا آنلاین با نماینده تیم تماس گرفته خواهد شد.",
  },
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-950 scroll-mt-16 border-t border-slate-200/60 dark:border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs sm:text-sm font-bold text-blue-600 dark:text-sky-400 tracking-wider uppercase flex items-center justify-center gap-1.5">
            <HelpCircle className="w-4 h-4" />
            <span>پرسش‌های متداول</span>
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            پاسخ به سوالات پرتکرار شما
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            هر آنچه درباره نحوه تعامل، مدل‌های شتابدهی و پذیرش شریف کلینیک باید بدانید.
          </p>
        </div>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-4.5 text-right flex items-center justify-between text-sm sm:text-base font-bold text-slate-900 dark:text-white hover:text-blue-600 transition-colors"
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform duration-200 flex-shrink-0 mr-4 ${
                      isOpen ? "rotate-180 text-blue-600" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-justify border-t border-slate-200/50 dark:border-slate-800/50">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
