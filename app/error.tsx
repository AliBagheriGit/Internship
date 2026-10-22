"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RotateCcw, Home } from "lucide-react";
import { Button } from "@/components/common/button";
import { useSiteStore } from "@/store/use-site-store";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const { language } = useSiteStore();
  const isEn = language === "en";

  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-20 h-20 rounded-3xl bg-red-50 dark:bg-red-950/60 text-red-600 dark:text-red-400 mx-auto flex items-center justify-center">
          <AlertTriangle className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            {isEn ? "Something went wrong" : "خطایی در بارگذاری رخ داد"}
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
            {isEn
              ? "An unexpected error occurred while loading this section. You can try again or return to the home page."
              : "متأسفانه در اجرای این بخش از سامانه مشکلی به وجود آمده است. می‌توانید دوباره تلاش کنید یا به صفحه نخست بازگردید."}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Button onClick={() => reset()} className="gap-2">
            <RotateCcw className="w-4 h-4" />
            <span>{isEn ? "Try Again" : "تلاش مجدد"}</span>
          </Button>

          <Link href="/">
            <Button variant="outline" className="gap-2">
              <Home className="w-4 h-4" />
              <span>{isEn ? "Home Page" : "صفحه اصلی"}</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
