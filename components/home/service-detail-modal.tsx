"use client";

import React from "react";
import { CheckCircle2, Sparkles, ArrowLeft } from "lucide-react";
import { Modal } from "@/components/common/modal";
import { Button } from "@/components/common/button";
import { Badge } from "@/components/common/badge";
import { useSiteStore } from "@/store/use-site-store";

export const ServiceDetailModal: React.FC = () => {
  const { selectedService, setSelectedService, openConsultationModal } = useSiteStore();

  if (!selectedService) return null;

  return (
    <Modal
      isOpen={Boolean(selectedService)}
      onClose={() => setSelectedService(null)}
      title={selectedService.title}
      description={selectedService.shortDescription}
      maxWidth="lg"
    >
      <div className="space-y-6">
        {selectedService.badge && (
          <Badge variant="primary" className="mb-2">
            {selectedService.badge}
          </Badge>
        )}

        <div className="space-y-2">
          <h4 className="text-sm font-bold text-slate-900 dark:text-white">
            درباره این خدمت:
          </h4>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
            {selectedService.fullDescription}
          </p>
        </div>

        <div className="space-y-3 pt-2">
          <h4 className="text-sm font-bold text-slate-900 dark:text-white">
            ویژگی‌ها و قابلیت‌های کلیدی:
          </h4>
          <ul className="space-y-2.5">
            {selectedService.features.map((feature, idx) => (
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
            بستن
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
            <span>درخواست همکاری در این حوزه</span>
            <ArrowLeft className="w-3.5 h-3.5" />
          </Button>
        </div>
      </div>
    </Modal>
  );
};
