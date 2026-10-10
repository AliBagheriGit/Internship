# -*- coding: utf-8 -*-
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.shared import Pt, Inches
from scratch.report_helpers import (
    apply_run_font, add_p, add_heading_1, add_heading_2, 
    add_heading_3, add_bullet, add_callout, add_code_box, add_table_data
)

def build_page_26(doc):
    """صفحه ۲۶: تست واکنش‌گرایی، امنیت فرانت‌اند و خط‌لوله استقرار CI/CD"""
    add_heading_2(doc, "۵.۷ آزمون واکنش‌گرایی همه‌جانبه در انواع نمایشگرها (Cross-Device Testing)", space_before=4, space_after=3)
    add_p(doc, "برای اطمینان از تجربه کاربری یکنواخت برای تمامی مخاطبان، سامانه در چهار دسته دستگاه با ابعاد فیزیکی و سیستم‌عامل‌های گوناگون مورد آزمون عملی قرار گرفت:", space_after=3)
    
    device_table = [
        ["دسته دستگاه", "ابعاد صفحه‌نمایش آزمایش‌شده", "رفتار المان‌های کلیدی واسط کاربری", "نتیجه آزمون"],
        ["گوشی‌های هوشمند (Mobile)", "375x667 (iPhone SE) تا 414x896", "فعال شدن منوی کشویی همبرگری، چیدمان تک‌ستونه کارت‌ها", "تایید کامل"],
        ["تبلت‌ها (Tablet)", "768x1024 (iPad) و 820x1180", "نمایش گرید دو ستونه خدمات، هدر فشرده و مودال بهینه", "تایید کامل"],
        ["لپ‌تاپ‌ها (Laptop)", "1366x768 و 1440x900", "منوی کامل افقی، چیدمان سه ستونه خدمات و کارت‌های هایبرید", "تایید کامل"],
        ["مانیتورهای عریض (Desktop/4K)", "1920x1080 و 2560x1440", "محدودسازی حداکثر عرض محتوا (max-w-7xl) جهت پرهیز از کشیدگی", "تایید کامل"]
    ]
    add_table_data(doc, device_table[0], device_table[1:], caption="جدول ۵-۳: نتایج آزمون واکنش‌گرایی و انطباق نمایشگرها")
    
    add_heading_2(doc, "۵.۸ ارزیابی استانداردهای امنیتی فرانت‌اند و حفاظت از داده‌ها", space_before=5, space_after=3)
    add_p(doc, "با توجه به محرمانه بودن اطلاعات پزشکی و طرح‌های استارتاپی، اقدامات امنیتی زیر در سطح کلاینت اعمال گردید:", space_after=3)
    add_bullet(doc, "جلوگیری از حملات تزریق اسکریپت (Cross-Site Scripting) با تکیه بر مکانیزم‌های بومی فرار خودکار رشته‌ها در React 19.", bold_prefix="• ایمن‌سازی ورودی‌ها (XSS Protection): ")
    add_bullet(doc, "پرهیز از نگهداری داده‌های محرمانه فرم‌ها در LocalStorage ناامن و مدیریت آن در حافظه موقت Zustand.", bold_prefix="• حفاظت از حافظه مرورگر: ")
    
    add_heading_2(doc, "۵.۹ فرآیند آماده‌سازی برای یکپارچه‌سازی و استقرار مداوم (CI/CD Pipeline)", space_before=5, space_after=3)
    add_p(doc, "پروژه مجهز به اسکریپت‌های استاندارد `npm run build` و `npm run lint` است که امکان ادغام بی‌دردسر در گیت‌هاب اکشنز (GitHub Actions) و استقرار روی سرورهای لینوکسی امن یا پلتفرم‌های ابری کانتینری (Docker) را فراهم می‌آورد.",
          space_after=4, align=WD_ALIGN_PARAGRAPH.JUSTIFY)

def build_page_27(doc):
    """صفحه ۲۷: فصل ششم - جمع‌بندی نتایج، مهارت‌های اکتسابی و درس‌های آموخته‌شده مهندسی"""
    add_heading_1(doc, "فصل ششم: تحلیل نتایج، دستاوردها و چشم‌انداز آینده", space_before=6, space_after=8)
    
    add_heading_2(doc, "۶.۱ جمع‌بندی کلی و تحقق اهداف پروژه کارآموزی", space_before=4, space_after=3)
    add_p(doc, "دوره کارآموزی حاضر در مجموعه شریف کلینیک فرصتی استثنایی برای پیاده‌سازی عملی یک پلتفرم نرم‌افزاری واقعی در مقیاس صنعتی و در مرز استراتژیک مهندسی کامپیوتر و سلامت هوشمند بود. با طراحی و پیاده‌سازی این سامانه، تمامی ۱۰ نیازمندی کارکردی اصلی و ۵ شاخص کیفی غیرکارکردی با موفقیت کامل محقق شدند و پلتفرم به عنوان ویترین رسمی دیجیتال این شتاب‌دهنده مورد بهره‌برداری قرار گرفت.",
          space_after=4, align=WD_ALIGN_PARAGRAPH.JUSTIFY)
    
    add_heading_2(doc, "۶.۲ مهارت‌های فنی، نرم و تجارب مهندسی اکتسابی کارآموز", space_before=5, space_after=3)
    add_bullet(doc, "تسلط جامع بر نسل نوین App Router در Next.js 16، الگوهای React 19، سیستم‌های تایپ‌سیفتی TypeScript 5 و کتابخانه سبک Zustand.", bold_prefix="۱. مهارت‌های پیشرفته کدنویسی و معماری: ")
    add_bullet(doc, "کسب تجربه در خلق سیستم‌های دیزاین شیشه‌ای مدرن (Glassmorphism)، تایپوگرافی راست‌چین فارسی با فونت وزیرمتن و انطباق با استانداردهای دسترسی‌پذیری وب.", bold_prefix="۲. طراحی سیستم رابط و تجربه کاربری (UI/UX): ")
    add_bullet(doc, "همکاری پویا با پزشکان متخصص و منتورهای تجاری در ناحیه نوآوری شریف، درک عمیق ادبیات سلامت دیجیتال و تبدیل زبان پزشکی به ساختارهای نرم‌افزاری.", bold_prefix="۳. تعامل چندرشته‌ای و حل مسئله: ")
    
    add_heading_2(doc, "۶.۳ چالش‌های پیش‌بینی‌نشده حین توسعه و درس‌های آموخته‌شده مهندسی", space_before=5, space_after=3)
    add_p(doc, "در مسیر اجرای پروژه با چالش‌هایی همچون تغییر ساختار متادیتای Viewport در Next.js 16، تنظیم صحیح لایه‌های مودال با استورهای کلاینت و بهینه‌سازی فونت محلی مواجه شدیم. فائق آمدن بر این چالش‌ها درس بزرگی از اهمیت مطالعه مستمر مستندات رسمی نسخه‌های تازه منتشرشده و انتخاب ابزارهای با سربار کم به ارمغان آورد.",
          space_after=4, align=WD_ALIGN_PARAGRAPH.JUSTIFY)
    
    add_callout(doc, "پیام کلیدی تجربه کارآموزی در شریف کلینیک", [
        "«مهندسی نرم‌افزار زمانی به اوج ارزش‌آفرینی می‌رسد که در خدمت ارتقای سلامت جامعه قرار گیرد. شریف کلینیک نماد بارز همگرایی دانشگاه صنعتی شریف و رسالت نجات انسان‌هاست.»"
    ], bg_hex="F0FDF4", border_color="0D9488")

def build_page_28(doc):
    """صفحه ۲۸: نقشه راه توسعه فازهای آتی و پیشنهادات به کارآموزان"""
    add_heading_2(doc, "۶.۴ نقشه راه توسعه فازهای آتی سامانه (Product Development Roadmap)", space_before=4, space_after=3)
    add_p(doc, "پلتفرم شریف کلینیک با یک چشم‌انداز بلندمدت طراحی شده است. برای فازهای توسعه آتی (فاز ۲ و ۳)، نقشه‌راه زیر تدوین گردیده است:", space_after=3)
    
    roadmap_data = [
        ["فاز توسعه", "افق زمانی", "قابلیت‌های فنی و عملیاتی جدید"],
        ["فاز ۲: پنل داوری و منتورینگ", "۳ ماه آینده", "سامانه آنلاین داوری طرح‌ها توسط پزشکان و اساتید با امتیازدهی چندبعدی"],
        ["فاز ۳: احراز هویت دوعاملی پزشکان", "۶ ماه آینده", "ورود امن کادر درمان با کد نظام پزشکی، احراز هویت پیامکی و سامانه امضای دیجیتال"],
        ["فاز ۴: یکپارچگی با پرونده سلامت (EHR)", "۹ ماه آینده", "اتصال API به پروتکل‌های استعلام بیمه سلامت و تبادل داده با استاندارد FHIR"],
        ["فاز ۵: ماژول غربالگری هوش مصنوعی", "یک سال آینده", "سرویس ابری پیش‌غربالگری تصاویر رادیولوژی با مدل‌های یادگیری عمیق شریف"]
    ]
    add_table_data(doc, roadmap_data[0], roadmap_data[1:], caption="جدول ۶-۱: نقشه راه توسعه و تکمیل قابلیت‌های آتی پلتفرم شریف کلینیک")
    
    add_heading_2(doc, "۶.۵ پیشنهادات کاربردی به کارآموزان و دانشجویان بعدی", space_before=5, space_after=3)
    add_bullet(doc, "پیش از آغاز کدنویسی، جلسات عمیقی با پزشکان و کادر درمان برگزار کنید تا نیازهای واقعی بالینی را از زبان مصرف‌کننده نهایی درک نمایید.", bold_prefix="• شناخت عمیق دامنه مسئله: ")
    add_bullet(doc, "از بکارگیری پکیج‌های سنگین و کم‌کاربرد پرهیز کنید؛ سادگی، سبکی و تایپ‌سیفتی پایدارترین فاکتور موفقیت یک سامانه در ابعاد سازمانی است.", bold_prefix="• پرهیز از پیچیدگی‌های غیرضروری: ")
    add_bullet(doc, "همواره مستندسازی را موازی با کدنویسی انجام دهید؛ مستندات دقیق تداوم توسعه توسط سایر اعضای تیم را تضمین می‌کند.", bold_prefix="• مستندسازی و نگارش تمیز کد: ")

def build_page_29(doc):
    """صفحه ۲۹: پیوست الف و ب - ساختار فایل‌ها، پکیج‌ها و راهنمای راه‌اندازی پروژه"""
    add_heading_1(doc, "بخش پیوست‌ها: مستندات فنی و راهنمای راه‌اندازی پروژه", space_before=6, space_after=8)
    
    add_heading_2(doc, "پیوست الف: جدول وابستگی‌های نرم‌افزاری پروژه (Package Dependencies)", space_before=4, space_after=3)
    add_p(doc, "جدول زیر فهرست کتابخانه‌ها و پکیج‌های اصلی استفاده‌شده در پروژه را به همراه شماره نسخه و نقش مهندسی نمایش می‌دهد:", space_after=2)
    
    pkg_table = [
        ["نام پکیج نرم‌افزاری", "نسخه نصب‌شده", "نوع وابستگی", "کاربرد و نقش در سامانه"],
        ["next", "16.3.4", "اصلی (Core)", "فریم‌ورک پایه وب مبتنی بر App Router و کامپایلر Turbopack"],
        ["react & react-dom", "19.2.8", "اصلی (Core)", "هسته رندرینگ کامپوننت‌ها و مدیریت رخدادها در فرانت‌اند"],
        ["typescript", "^5.0.0", "توسعه (Dev)", "سیستم تایپ استاتیک، اعتبارسنجی پراپ‌ها و اینترفیس‌ها"],
        ["tailwindcss", "^4.0.0", "توسعه (Dev)", "موتور استایل‌دهی مدرن با دستور @theme و کلاس‌های یوتیلیتی"],
        ["zustand", "^5.0.15", "اصلی (Core)", "مدیریت وضعیت متمرکز و سبک کلاینت برای مودال‌ها و فیلترها"],
        ["lucide-react", "^1.49.0", "اصلی (Core)", "مجموعه آیکون‌های وکتور بهینه‌سازی‌شده برای حوزه پزشکی و وب"],
        ["clsx & tailwind-merge", "Latest", "اصلی (Core)", "ترکیب بهینه کلاس‌های شرطی استایل‌ها بدون تداخل CSS"]
    ]
    add_table_data(doc, pkg_table[0], pkg_table[1:], caption="جدول پیوست الف: پکیج‌های نرم‌افزاری پروژه و نسخه‌های دقیق")
    
    add_heading_2(doc, "پیوست ب: راهنمای گام‌به‌گام نصب و راه‌اندازی برای توسعه‌دهندگان جدید", space_before=5, space_after=3)
    add_p(doc, "برای راه‌اندازی محیط توسعه محلی، دستورات خط فرمان زیر باید به ترتیب اجرا شوند:", space_after=2)
    
    cmd_code = """# ۱. کلون کردن مخزن کدهای پروژه
git clone https://github.com/sharifclinic/platform.git
cd platform

# ۲. نصب وابستگی‌های استاندارد پروژه با npm
npm install

# ۳. اجرای سرور توسعه محلی Next.js
npm run dev

# ۴. اعتبارسنجی صحت کدهای تایپ‌اسکریپت و بیلد نهایی
npx tsc --noEmit
npm run build"""
    add_code_box(doc, cmd_code, caption="دستورات خط فرمان راه‌اندازی سامانه در محیط توسعه و تست بیلد")

def build_page_30(doc):
    """صفحه ۳۰: فهرست مراجع، استانداردها و منابع علمی"""
    add_heading_1(doc, "فهرست مراجع، استانداردها و منابع علمی (References)", space_before=6, space_after=8)
    
    add_heading_2(doc, "الف) مراجع علمی و استانداردهای بین‌المللی سلامت دیجیتال:", space_before=4, space_after=3)
    add_bullet(doc, "Health Level Seven International (HL7), Fast Healthcare Interoperability Resources (FHIR) Release 4B Standard Specification, 2023.", bold_prefix="[1] ")
    add_bullet(doc, "World Health Organization (WHO), 'Global Strategy on Digital Health 2020–2025', Geneva, Switzerland, 2021.", bold_prefix="[2] ")
    add_bullet(doc, "National Electrical Manufacturers Association (NEMA), 'Digital Imaging and Communications in Medicine (DICOM) Standard', 2024.", bold_prefix="[3] ")
    add_bullet(doc, "World Wide Web Consortium (W3C), 'Web Content Accessibility Guidelines (WCAG) 2.1', W3C Recommendation, 2023.", bold_prefix="[4] ")
    
    add_heading_2(doc, "ب) مستندات رسمی معماری نرم‌افزار و فریم‌ورک‌های وب:", space_before=5, space_after=3)
    add_bullet(doc, "Vercel Engineering Team, 'Next.js 16 Documentation: App Router, Server Components & Turbopack Architecture', Vercel Inc., 2025.", bold_prefix="[5] ")
    add_bullet(doc, "Meta Open Source, 'React 19 Technical Specification and Actions Guide', Meta Platforms, 2025.", bold_prefix="[6] ")
    add_bullet(doc, "Microsoft TypeScript Team, 'TypeScript 5 Language Specification and Strict Typing Guidelines', Microsoft Corporation, 2024.", bold_prefix="[7] ")
    add_bullet(doc, "Tailwind Labs, 'Tailwind CSS v4 Engine Architecture and Inline Theme Documentation', 2025.", bold_prefix="[8] ")
    add_bullet(doc, "Paul Henschel et al., 'Zustand: Bearbones State-Management in React', Poimandres Open Source Collective, 2024.", bold_prefix="[9] ")
    
    add_heading_2(doc, "ج) کتب و مقالات تخصصی مهندسی و مدیریت نوآوری سلامت:", space_before=5, space_after=3)
    add_bullet(doc, "Topol, Eric, 'Deep Medicine: How Artificial Intelligence Can Make Healthcare Human Again', Basic Books, New York, 2019.", bold_prefix="[10] ")
    add_bullet(doc, "Shortliffe, E. H., & Cimino, J. J., 'Biomedical Informatics: Computer Applications in Health Care and Biomedicine', Springer, 5th Ed., 2021.", bold_prefix="[11] ")
    add_bullet(doc, "Rock Health Research, 'Digital Health Venture Funding and Market Adoption Report', San Francisco, 2024.", bold_prefix="[12] ")
    
    add_callout(doc, "پایان رسمی گزارش پروژه کارآموزی", [
        "این گزارش جامع در ۳۰ صفحه مستقل، طبق ضوابط آموزشی دانشکده مهندسی کامپیوتر دانشگاه صنعتی شریف جهت اخذ تاییدیه نهایی واحد کارآموزی تدوین گردیده است.",
        "نشانی وبگاه پروژه: sharifclinic.co | محل استقرار: ناحیه نوآوری شریف، تهران"
    ], bg_hex="F8FAFC", border_color="1E3A8A")

print("Module pages_26_to_30 loaded.")
