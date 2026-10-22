"use client";

import React from "react";
import { CheckCircle2, Sparkles, ArrowLeft, ArrowRight } from "lucide-react";
import { Modal } from "@/components/common/modal";
import { Button } from "@/components/common/button";
import { Badge } from "@/components/common/badge";
import { useSiteStore } from "@/store/use-site-store";
import { translations } from "@/lib/translations";

export const ServiceDetailModal: React.FC = () => {
  const { selectedService, setSelectedService, openConsultationModal, language } = useSiteStore();
  const t = translations[language];
  const isRtl = language === "fa";

  if (!selectedService) return null;

  // Resolve localized service version by id
  const currentItem =
    t.services.items.find((s) => s.id === selectedService.id) || selectedService;

  return (
    <Modal
      isOpen={Boolean(selectedService)}
      onClose={() => setSelectedService(null)}
      title={currentItem.title}
      description={currentItem.shortDescription}
      maxWidth="lg"
    >
      <div className="space-y-6">
        {currentItem.badge && (
          <Badge variant="primary" className="mb-2">
            {currentItem.badge}
          </Badge>
        )}

        <div className="space-y-2">
          <h4 className="text-sm font-bold text-slate-900 dark:text-white">
            {t.serviceDetailModal.aboutLabel}
          </h4>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
            {currentItem.fullDescription}
          </p>
        </div>

        <div className="space-y-3 pt-2">
          <h4 className="text-sm font-bold text-slate-900 dark:text-white">
            {t.serviceDetailModal.featuresLabel}
          </h4>
          <ul className="space-y-2.5">
            {currentItem.features.map((feature, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSelectedService(null)}
            className="text-xs"
          >
            {t.serviceDetailModal.closeCta}
          </Button>

          <Button
            size="sm"
            onClick={() => {
              setSelectedService(null);
              openConsultationModal("startup_idea");
            }}
            className="gap-2 text-xs font-semibold"
          >
            <Sparkles className="w-4 h-4" />
            <span>{t.serviceDetailModal.applyCta}</span>
            {isRtl ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
          </Button>
        </div>
      </div>
    </Modal>
  );
};
