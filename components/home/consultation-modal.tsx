"use client";

import React, { useState } from "react";
import { CheckCircle2, Sparkles, AlertCircle } from "lucide-react";
import { Modal } from "@/components/common/modal";
import { Button } from "@/components/common/button";
import { useSiteStore } from "@/store/use-site-store";
import { ConsultationFormData } from "@/types";

export const ConsultationModal: React.FC = () => {
  const {
    isConsultationModalOpen,
    closeConsultationModal,
    consultationDefaultType,
    isSubmitting,
    isSubmissionSuccess,
    submitConsultation,
    resetConsultationState,
  } = useSiteStore();

  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: "",
    phoneNumber: "",
    email: "",
    cooperationType: consultationDefaultType || "startup_idea",
    description: "",
  });

  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    // Basic Validation
    if (!formData.fullName.trim()) {
      setErrorMsg("لطفاً نام و نام خانوادگی خود را وارد کنید.");
      return;
    }
    if (!formData.phoneNumber.trim() || formData.phoneNumber.length < 10) {
      setErrorMsg("لطفاً یک شماره تماس معتبر وارد کنید.");
      return;
    }

    try {
      await submitConsultation(formData);
    } catch {
      setErrorMsg("خطایی در ثبت درخواست رخ داد. لطفاً مجدداً تلاش فرمایید.");
    }
  };

  const handleClose = () => {
    closeConsultationModal();
    setTimeout(() => {
      resetConsultationState();
      setFormData({
        fullName: "",
        phoneNumber: "",
        email: "",
        cooperationType: "startup_idea",
        description: "",
      });
      setErrorMsg(null);
    }, 200);
  };

  return (
    <Modal
      isOpen={isConsultationModalOpen}
      onClose={handleClose}
      title={isSubmissionSuccess ? undefined : "ثبت طرح، ایده و درخواست همکاری"}
      description={
        isSubmissionSuccess
          ? undefined
          : "اطلاعات اولیه خود را تکمیل کنید تا کارشناسان شتاب‌دهنده شریف کلینیک در اسرع وقت با شما تماس بگیرند."
      }
      maxWidth="lg"
    >
      {isSubmissionSuccess ? (
        <div className="py-6 text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/70 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center animate-in zoom-in-75">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            درخواست شما با موفقیت ثبت شد!
          </h3>

          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-sm mx-auto leading-relaxed">
            از حسن اعتماد شما متشکریم. تیم ارزیابی طرح‌های شریف کلینیک اطلاعات شما را بررسی کرده و حداکثر ظرف ۴۸ ساعت کاری با شما تماس خواهد گرفت.
          </p>

          <div className="pt-4">
            <Button onClick={handleClose} className="w-full sm:w-auto px-8">
              متوجه شدم
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {errorMsg && (
            <div className="p-3 rounded-xl bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-900/50 text-red-600 dark:text-red-400 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Full Name */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
              نام و نام خانوادگی <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.fullName}
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
              placeholder="مثال: دکتر علی رضایی"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
              شماره تلفن همراه <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              required
              dir="ltr"
              value={formData.phoneNumber}
              onChange={(e) =>
                setFormData({ ...formData, phoneNumber: e.target.value })
              }
              placeholder="0912..."
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-right"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
              آدرس ایمیل (اختیاری)
            </label>
            <input
              type="email"
              dir="ltr"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="name@example.com"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-right"
            />
          </div>

          {/* Type of Cooperation */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
              موضوع همکاری
            </label>
            <select
              value={formData.cooperationType}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  cooperationType: e.target.value as ConsultationFormData["cooperationType"],
                })
              }
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
            >
              <option value="startup_idea">ارائه ایده و ورود به استارتاپ استودیو</option>
              <option value="investment">درخواست جذب سرمایه و شتابدهی</option>
              <option value="hospital_integration">هوشمندسازی مرکز درمانی یا کلینیک</option>
              <option value="general_inquiry">سایر همکاری‌های علمی و صنعتی</option>
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
              خلاصه طرح یا پیام شما
            </label>
            <textarea
              rows={3}
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              placeholder="توضیح مختصری درباره چالش مورد نظر، راهکار و سطح پیشرفت طرح..."
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors resize-none"
            />
          </div>

          {/* Submit CTA */}
          <div className="pt-2">
            <Button
              type="submit"
              isLoading={isSubmitting}
              className="w-full font-bold gap-2 text-sm shadow-md"
            >
              <Sparkles className="w-4 h-4" />
              <span>ارسال و ثبت درخواست</span>
            </Button>
          </div>
        </form>
      )}
    </Modal>
  );
};
