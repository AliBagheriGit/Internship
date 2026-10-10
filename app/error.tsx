"use client";

import React, { useEffect } from "react";
import { AlertTriangle, RotateCcw, Home } from "lucide-react";
import { Button } from "@/components/common/button";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to monitoring service
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
            خطایی در بارگذاری رخ داد
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
            متأسفانه در اجرای این بخش از سامانه مشکلی به وجود آمده است. می‌توانید دوباره تلاش کنید یا به صفحه نخست بازگردید.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Button onClick={() => reset()} className="gap-2">
            <RotateCcw className="w-4 h-4" />
            <span>تلاش مجدد</span>
          </Button>

          <a href="/">
            <Button variant="outline" className="gap-2">
              <Home className="w-4 h-4" />
              <span>صفحه اصلی</span>
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
