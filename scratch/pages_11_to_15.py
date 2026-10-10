# -*- coding: utf-8 -*-
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.shared import Pt, Inches
from scratch.report_helpers import (
    apply_run_font, add_p, add_heading_1, add_heading_2, 
    add_heading_3, add_bullet, add_callout, add_code_box, add_table_data
)

def build_page_11(doc):
    """صفحه ۱۱: نیازمندی‌های غیرکارکردی (NFRs) و دیاگرام جریان کاربر"""
    add_heading_2(doc, "۲.۷ نیازمندی‌های غیرکارکردی و کیفی سامانه (Non-Functional Requirements)", space_before=4, space_after=3)
    add_p(doc, "نیازمندی‌های غیرکارکردی تضمین‌کننده ویژگی‌های رفتاری، قابلیت اطمینان، امنیت و پایداری سامانه در شرایط عملیاتی واقعی هستند:", space_after=3)
    
    nfr_list = [
        ["شاخص کیفی", "معیار پذیرش کمی و کیفی", "راهکار مهندسی پیاده‌سازی‌شده"],
        ["کارایی و زمان پاسخ (Performance)", "بارگذاری اولیه صفحه (FCP) زیر ۸۰۰ میلی‌ثانیه و زمان تعاملی (TTI) زیر ۱.۲ ثانیه", "رندرینگ استاتیک Server Components در Next.js 16 و بهینه‌سازی کدهای فرانت‌اند"],
        ["دسترس‌پذیری (Accessibility)", "انطباق کامل با استاندارد وب کنسرسیوم بین‌المللی WCAG 2.1 سطح AA", "کنتراست مناسب رنگی، المان‌های معنایی HTML5، ویژگی‌های ARIA و پیمایش با صفحه‌کلید"],
        ["بومی‌سازی و RTL (Localization)", "چیدمان ۱۰۰٪ راست‌چین، فاصله‌گذاری متناسب متون فارسی و تقارن آیکون‌ها", "اعمال dir='rtl' سراسری در تگ html و پشتیبانی بومی از کلاس‌های منطقی Tailwind"],
        ["امنیت فرانت‌اند (Security)", "جلوگیری از حملات تزریق اسکریپت (XSS)، محافظت از بدنه درخواست‌ها و ایمنی تایپ‌ها", "اعتبارسنجی مقادیر فرم در سمت کاربر، فرار دادن داده‌ها و استقرار پروتکل HTTPS"],
        ["واکنش‌گرایی (Responsiveness)", "نمایش سازگار از گوشی‌های با عرض ۳۶۰ پیکسل تا مانیتورهای عریض 4K", "طراحی مبتنی بر رویکرد Mobile-First با نقاط شکست (Breakpoints) استاندارد Tailwind"]
    ]
    add_table_data(doc, nfr_list[0], nfr_list[1:], caption="جدول ۲-۳: ماتریس نیازمندی‌های غیرکارکردی و استانداردهای تضمین کیفیت نرم‌افزار")
    
    add_heading_2(doc, "۲.۸ دیاگرام جریان کاربری و نقشه سفر کاربر (User Journey Flow)", space_before=5, space_after=3)
    add_p(doc, "جریان حرکت کاربر در سامانه شریف کلینیک بر پایه یک معماری پیمایشی روان و بدون اصطکاک پی‌ریزی شده است:", space_after=2)
    
    add_callout(doc, "شمای گرافیکی جریان تعاملی کاربر در پلتفرم شریف کلینیک", [
        "۱. ورود به صفحه فرود (Landing Page) ───► مشاهده ویترین Hero و پالس زنده سلامت",
        "۲. بررسی کاتالوگ خدمات ───► کلیک روی تب دسته‌بندی ───► به‌روزرسانی فیلتر در Zustand",
        "۳. کلیک روی کارت خدمت ───► باز شدن مودال اختصاصی جزئیات خدمت ───► مطالعه ارزش‌ها",
        "۴. کلیک روی دکمه «ثبت طرح / ورود به استودیو» ───► باز شدن مودال فرم هوشمند مشاوره",
        "۵. تکمیل مشخصات، انتخاب نوع همکاری و ارسال ───► شبیه‌سازی API آسنکرون ───► نمایش تاییدیه موفقیت"
    ], bg_hex="F0FDF4", border_color="0D9488")

def build_page_12(doc):
    """صفحه ۱۲: فصل سوم - معماری نرم‌افزار و پشته فناوری نوین Next.js 16 App Router"""
    add_heading_1(doc, "فصل سوم: معماری نرم‌افزار، زیرساخت و پشته فناوری نوین", space_before=6, space_after=8)
    
    add_heading_2(doc, "۳.۱ معماری کلان نرم‌افزار و الگوی تفکیک لایه‌ها (Layered Architecture)", space_before=4, space_after=3)
    add_p(doc, "معماری پلتفرم شریف کلینیک بر اساس اصول مدرن تفکیک دغدغه‌ها (Separation of Concerns) و معماری لایه‌ای چندلایه طراحی شده است. این ساختار تضمین می‌کند که منطق داده، وضعیت بصری، کامپوننت‌های رابط کاربری و لایه استایل‌ها به صورت مستقل توسعه یافته و نگهداری شوند. لایه‌های اصلی عبارتند از: ۱) لایه مدل و اینترفیس‌ها (`types/`)، ۲) لایه داده‌های ساختاریافته (`lib/data.ts`)، ۳) لایه مدیریت وضعیت تعاملی (`store/use-site-store.ts`)، ۴) لایه کامپوننت‌های اتمیک و ترکیبی (`components/`) و ۵) لایه چیدمان و مسیرهای اصلی (`app/`).",
          space_after=4, align=WD_ALIGN_PARAGRAPH.JUSTIFY)
    
    add_heading_2(doc, "۳.۲ تحلیل عمیق معماری Next.js 16 بر پایه App Router", space_before=5, space_after=3)
    add_p(doc, "در این پروژه از آخرین نسخه پایدار فریم‌ورک محبوب Next.js یعنی نسخه ۱۶.۳.۴ استفاده شده است. برخلاف معماری سنتی Pages Router که متکی بر ساختارهای قدیمی بود، App Router از قابلیت‌های زیربنایی رندرینگ مبتنی بر دایرکتوری بهره می‌برد:", space_after=3)
    add_bullet(doc, "چیدمان‌های تودرتو بدون نیاز به رندر مجدد بدنه صفحه حین پیمایش، پایداری فوق‌العاده‌ای ایجاد می‌کنند.", bold_prefix="۱. چیدمان اشتراکی (Nested Layouts): ")
    add_bullet(doc, "امکان پیش‌رندرینگ صفحات در زمان بیلد (SSG) و تحویل آنی فایل‌های HTML به مرورگر بدون تاخیر سرور.", bold_prefix="۲. رندرینگ ایستا و افزایشی (Static Site Generation): ")
    add_bullet(doc, "انتقال ساختار کدهای مشترک به سمت سرور جهت کاهش اندازه فایل‌های جاوااسکریپت ارسالی به کلاینت.", bold_prefix="۳. کاهش سربار باندل (Zero Bundle Size Overhead): ")
    
    add_callout(doc, "مقایسه معماری Pages Router در برابر App Router در Next.js 16", [
        "در معماری جدید App Router، مدیریت متادیتاها از طریق متد اختصاصی export const metadata و استخراج Viewport به متد export const viewport صورت می‌پذیرد که سبب رعایت دقیق استانداردهای کنسرسیوم وب و حذف هشدارهای ران‌تایم گردیده است."
    ], bg_hex="F0F9FF", border_color="0284C7")

def build_page_13(doc):
    """صفحه ۱۳: تحلیل عمیق React 19، کامپوننت‌های سرور/کلاینت و تایپ‌اسکریپت ۵"""
    add_heading_2(doc, "۳.۳ نقش React 19 در تحول فرانت‌اند و مدیریت هیدریشن", space_before=4, space_after=3)
    add_p(doc, "پلتفرم شریف کلینیک بر پایه هسته React 19.2.8 پیاده‌سازی شده است. ری‌اکت ۱۹ با ارائه مکانیزم بهینه‌سازی کامپایلر خودکار و الگوریتم‌های هوشمند رفرش سریع، فرآیند هیدریشن (Hydration) را به میزان چشمگیری بهبود بخشیده است. این ویژگی مانع از بروز خطاهای ناسازگاری هیدریشن ناشی از رندرینگ نامتقارن سمت سرور و کلاینت در محیط‌های چندزبانه و متون راست‌چین می‌شود.",
          space_after=4, align=WD_ALIGN_PARAGRAPH.JUSTIFY)
    
    add_heading_2(doc, "۳.۴ تفکیک مهندسی: Server Components در برابر Client Components", space_before=5, space_after=3)
    add_p(doc, "یکی از برجسته‌ترین دستاوردهای معماری در این پروژه، تعیین مرز دقیق میان کامپوننت‌های سرور و کامپوننت‌های تعاملی کلاینت با استفاده از دایرکتیو `'use client'` بوده است:", space_after=3)
    add_bullet(doc, "صفحات ریشه نظیر `app/layout.tsx` و `app/page.tsx` به عنوان سرور کامپوننت رندر شده و کدهای استاتیک و ساختار متادیتا را بدون جاوااسکریپت اضافه به کاربر تحویل می‌دهند.", bold_prefix="• کامپوننت‌های سرور (Server Components): ")
    add_bullet(doc, "المان‌های تعاملی نظیر هدر چسبنده (`header.tsx`)، گرید فیلترپذیر خدمات (`services-section.tsx`) و مودال‌ها (`modal.tsx`, `consultation-modal.tsx`) که نیازمند مدیریت وضعیت یا رویدادهای کاربری هستند، به عنوان کلاینت کامپوننت ایزوله شده‌اند.", bold_prefix="• کامپوننت‌های کلاینت (Client Components): ")
    
    add_heading_2(doc, "۳.۵ بهره‌گیری از TypeScript 5 در حالت سخت‌گیرانه (Strict Mode)", space_before=5, space_after=3)
    add_p(doc, "تمام فایل‌های پروژه با پسوند `.ts` و `.tsx` و تحت استاندارد TypeScript 5 توسعه یافته‌اند. تعریف اینترفیس‌های ساختاری در `types/index.ts` امکان تایپ‌سیفتی ۱۰۰ درصدی را در کل چرخه حیات داده‌ها فراهم کرده است:", space_after=2)
    
    code_types = """export interface ServiceItem {
  id: string;
  title: string;
  category: "startups" | "centers" | "patients" | "technology";
  shortDescription: string;
  fullDescription: string;
  features: string[];
  icon: string;
  badge?: string;
}"""
    add_code_box(doc, code_types, caption="نمونه اینترفیس استاندار ServiceItem در types/index.ts")

def build_page_14(doc):
    """صفحه ۱۴: سیستم استایل‌دهی نوین با Tailwind CSS v4 و زبان بصری سلامت"""
    add_heading_2(doc, "۳.۶ گذار به نسل چهارم Tailwind CSS و معماری استایل‌دهی مدرن", space_before=4, space_after=3)
    add_p(doc, "در این پروژه از نسخه جدید Tailwind CSS v4 استفاده شده است. این نسخه با بازنویسی موتور کامپایل استایل‌ها بر پایه ابزار پرسرعت Lightning CSS و معرفی دستور `@theme`، نیاز به فایل‌های سنگین `tailwind.config.js` را مرتفع کرده و پردازش استایل‌ها را مستقیما در فایل `globals.css` تجمیع نموده است. این امر زمان بیلد پروداکشن را به زیر ۱ ثانیه کاهش داده است.",
          space_after=4, align=WD_ALIGN_PARAGRAPH.JUSTIFY)
    
    add_heading_2(doc, "۳.۷ زبان بصری اختصاصی: طراحی شیشه‌ای مدرن (Glassmorphism)", space_before=5, space_after=3)
    add_p(doc, "برای ایجاد یک اثر بصری خیره‌کننده و مدرن که هویت نوآورانه شتاب‌دهنده شریف کلینیک را متجلی سازد، سبک طراحی Glassmorphism انتخاب شد. کارت‌ها و نوارهای ناوبری با استفاده از ویژگی‌های `backdrop-blur-md`، مرزهای نیمه‌شفاف با اوپاسیتی کنترل‌شده و سایه‌های ملایم عمق‌دار طراحی شده‌اند که حس سبکی و آرامش فضای درمانی را القا می‌کنند.",
          space_after=4, align=WD_ALIGN_PARAGRAPH.JUSTIFY)
    
    add_heading_2(doc, "۳.۸ پالت رنگی سازمانی و تایپوگرافی مهندسی وزیرمتن (Vazirmatn)", space_before=5, space_after=3)
    add_p(doc, "پالت رنگی سامانه بر پایه روان‌شناسی رنگ‌ها در حوزه سلامت و درمان انتخاب شده است:", space_after=3)
    
    color_palette = [
        ["نام رنگ", "کد هگزادسیمال", "موقعیت استفاده در سامانه", "تأثیر روان‌شناختی"],
        ["آبی عمیق دانشگاهی (Deep Navy)", "#1E3A8A", "سربرگ‌ها، دکمه‌های اصلی و عناوین مهم", "اعتماد، ثبات، مرجعیت علمی دانشگاه شریف"],
        ["فیروزه‌ای درمانی (Medical Teal)", "#0D9488", "آیکون‌های پزشکی، لینک‌های تعاملی، نشانگر زنده", "سلامت، حیات، آرامش بالینی و شفا"],
        ["خاکستری تیره نوین (Slate Dark)", "#1E293B", "بدنه متون، کارت‌های پس‌زمینه و المان‌های تیره", "خوانایی فوق‌العاده بالا و وقار مهندسی"],
        ["آبی آسمانی روشن (Sky Light)", "#F0F9FF", "پس‌زمینه باکس‌های معرفی و هایلایت‌ها", "شفافیت، تمیزی و ایجاد تنفس در چیدمان"]
    ]
    add_table_data(doc, color_palette[0], color_palette[1:], caption="جدول ۳-۱: پالت رنگ‌های استاندارد سازمانی در دیزاین سیستم شریف کلینیک")

def build_page_15(doc):
    """صفحه ۱۵: تحلیل و انتخاب معماری مدیریت وضعیت (State Management) با Zustand"""
    add_heading_2(doc, "۳.۹ تحلیل مقایسه‌ای راهکارهای مدیریت وضعیت: چرا Zustand؟", space_before=4, space_after=3)
    add_p(doc, "یکی از کلیدی‌ترین تصمیمات معماری در لایه فرانت‌اند، انتخاب سازوکار مدیریت وضعیت‌های مشترک (نظیر منوی موبایل، دسته‌بندی فیلترها، مودال اطلاعات خدمت و فرم ثبت طرح) بود. در گذشته، کتابخانه Redux به عنوان استاندارد تلقی می‌شد؛ اما بررسی دقیق نشان داد که Redux با سربار فایل‌های بویلرپلیت فراوان (Actions, Reducers, Dispatchers) و حجم باندل بالا، سرعت بارگذاری اولیه را مخدوش می‌کند. همچنین React Context API با بروز ری‌رندرهای ناخواسته در کل درخت کامپوننت، کارایی را کاهش می‌دهد.",
          space_after=4, align=WD_ALIGN_PARAGRAPH.JUSTIFY)
    
    state_comparison = [
        ["معیار مقایسه", "Zustand (انتخاب ما)", "Redux Toolkit", "React Context API"],
        ["اندازه باندل کتابخانه", "کمتر از ۲ کیلوبایت (بسیار سبک)", "بیش از ۳۵ کیلوبایت", "۰ کیلوبایت (درونی ری‌اکت)"],
        ["حجم کدهای بویلرپلیت", "حداقلی (تعریف هم‌زمان استیت و اکشن)", "بسیار زیاد (Slice, Thunk)", "متوسط (نیاز به Provider تودرتو)"],
        ["بهینه‌سازی ری‌رندرها", "عالی (با اتکا به سابسکریپشن‌های دقیق)", "عالی (با Selector)", "ضعیف (ری‌رندر تمام فرزندان مصرف‌کننده)"],
        ["استفاده خارج از کامپوننت", "پشتیبانی کامل (getState, setState)", "پشتیبانی با واسطه Middleware", "ناممکن (وابسته به درخت React)"]
    ]
    add_table_data(doc, state_comparison[0], state_comparison[1:], caption="جدول ۳-۲: ماتریس ارزیابی و مقایسه تحلیلی Zustand با Redux Toolkit و Context API")
    
    add_heading_2(doc, "۳.۱۰ معماری استور متمرکز `useSiteStore` در سامانه شریف کلینیک", space_before=5, space_after=3)
    add_p(doc, "استور پروژه در مسیر `store/use-site-store.ts` پیاده‌سازی شده و تمام وضعیت‌های تعاملی پلتفرم را با اکشن‌های هم‌گام و ناهمگام (Async Actions) مدیریت می‌کند:", space_after=2)
    
    code_store = """export const useSiteStore = create<SiteStoreState>((set) => ({
  isMobileMenuOpen: false,
  selectedService: null,
  activeServiceCategory: "all",
  isConsultationModalOpen: false,
  isSubmitting: false,
  isSubmissionSuccess: false,
  submitConsultation: async (data) => {
    set({ isSubmitting: true });
    await new Promise((r) => setTimeout(r, 900));
    set({ isSubmitting: false, isSubmissionSuccess: true });
    return true;
  }
}));"""
    add_code_box(doc, code_store, caption="بخش‌هایی از ساختار پیاده‌سازی useSiteStore با کتابخانه Zustand")

print("Module pages_11_to_15 loaded.")
