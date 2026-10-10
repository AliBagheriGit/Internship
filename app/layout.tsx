import type { Metadata, Viewport } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { ConsultationModal } from "@/components/home/consultation-modal";
import { ServiceDetailModal } from "@/components/home/service-detail-modal";

const vazirmatn = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "شریف کلینیک | شتاب‌دهنده و استارتاپ استودیوی سلامت هوشمند",
  description:
    "شریف کلینیک با تلفیق دقت مهندسی دانشگاه صنعتی شریف و تخصص بالینی پزشکی، بستری یکپارچه برای توسعه استارتاپ‌های سلامت، هوشمندسازی مراکز درمانی و سرمایه‌گذاری خطرپذیر فراهم می‌کند.",
  keywords: [
    "شریف کلینیک",
    "سلامت هوشمند",
    "استارتاپ استودیو سلامت",
    "شتاب‌دهنده سلامت دیجیتال",
    "تله مدیسین",
    "دانشگاه صنعتی شریف",
    "هوش مصنوعی پزشکی",
  ],
  authors: [{ name: "Sharif Clinic" }],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={`${vazirmatn.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col antialiased selection:bg-blue-600 selection:text-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />

        {/* Global Modals & Drawers */}
        <MobileMenu />
        <ConsultationModal />
        <ServiceDetailModal />
      </body>
    </html>
  );
}
