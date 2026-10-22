"use client";

import React from "react";
import Link from "next/link";
import { Home, Search } from "lucide-react";
import { Button } from "@/components/common/button";
import { useSiteStore } from "@/store/use-site-store";

export default function NotFound() {
  const { language } = useSiteStore();
  const isEn = language === "en";

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-20 h-20 rounded-3xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-sky-400 mx-auto flex items-center justify-center">
          <Search className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <span className="text-5xl font-black text-blue-600 dark:text-sky-400 tracking-tight">
            {isEn ? "404" : "۴۰۴"}
          </span>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            {isEn ? "Page Not Found" : "صفحه مورد نظر پیدا نشد"}
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
            {isEn
              ? "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable."
              : "صفحه‌ای که به دنبال آن هستید تغییر نام یافته، حذف شده یا موقتاً در دسترس نیست."}
          </p>
        </div>

        <div className="pt-2">
          <Link href="/">
            <Button className="gap-2">
              <Home className="w-4 h-4" />
              <span>
                {isEn
                  ? "Back to Sharif Clinic Home"
                  : "بازگشت به صفحه اصلی شریف کلینیک"}
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
