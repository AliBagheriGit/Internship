import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "secondary" | "success" | "outline" | "glass";
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = "primary",
  children,
  ...props
}) => {
  const variants = {
    primary: "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 border-blue-200/60 dark:border-blue-700/40",
    secondary: "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700",
    success: "bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 border-emerald-200/60 dark:border-emerald-700/40",
    outline: "border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300",
    glass: "bg-white/15 backdrop-blur-md text-white border-white/20 shadow-sm",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border transition-colors",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
