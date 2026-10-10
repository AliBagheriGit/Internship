# -*- coding: utf-8 -*-
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.shared import Pt, Inches
from scratch.report_helpers import (
    apply_run_font, apply_latin_font, add_p, add_heading_1, add_heading_2, 
    add_heading_3, add_bullet, add_callout, add_code_box, add_table_data
)

def build_page_01(doc):
    """صفحه ۱: صفحه جلد رسمی دانشگاهی"""
    # Header space
    p_top = add_p(doc, "", space_after=12)
    
    # University Header
    p_uni = add_p(doc, "جمهوری اسلامی ایران", align=WD_ALIGN_PARAGRAPH.CENTER, size_pt=11, bold_prefix="", space_after=2)
    p_ministry = add_p(doc, "وزارت علوم، تحقیقات و فناوری", align=WD_ALIGN_PARAGRAPH.CENTER, size_pt=11.5, bold_prefix="", space_after=4)
    p_sharif = add_p(doc, "دانشگاه صنعتی شریف", align=WD_ALIGN_PARAGRAPH.CENTER, size_pt=16, bold_prefix="", space_after=2, color_rgb=(15, 53, 98))
    p_faculty = add_p(doc, "دانشکده مهندسی کامپیوتر", align=WD_ALIGN_PARAGRAPH.CENTER, size_pt=13, bold_prefix="", space_after=18, color_rgb=(13, 92, 117))
    
    # Decorative line
    add_callout(doc, "گزارش نهایی دوره کارآموزی مهندسی کامپیوتر", [
        "مقطع کارشناسی مهندسی نرم‌افزار — نیم‌سال تحصیلی ۱۴۰۴-۱۴۰۵",
        "محل کارآموزی: استارتاپ استودیو و شتاب‌دهنده سلامت هوشمند «شریف کلینیک»"
    ], bg_hex="F0F9FF", border_color="0284C7")
    
    # Main Report Title
    p_rep = add_p(doc, "گزارش فنی و تخصصی کارآموزی", align=WD_ALIGN_PARAGRAPH.CENTER, size_pt=14, bold_prefix="", space_after=6, space_before=10)
    p_title = add_p(doc, "طراحی، معماری و پیاده‌سازی پلتفرم شتاب‌دهنده و استارتاپ استودیوی سلامت هوشمند «شریف کلینیک»", 
                    align=WD_ALIGN_PARAGRAPH.CENTER, size_pt=15, bold_prefix="", space_after=10, color_rgb=(15, 53, 98), line_spacing=1.25)
    
    p_tech = add_p(doc, "بر پایه پشته مدرن وب: Next.js 16 (App Router)، React 19، TypeScript 5، Tailwind CSS v4 و مدیریت وضعیت Zustand",
                   align=WD_ALIGN_PARAGRAPH.CENTER, size_pt=11, bold_prefix="", space_after=22, color_rgb=(100, 116, 139))
    
    # Details Table
    details_data = [
        ["دانشجو / کارآموز:", "توسعه‌دهنده فرانت‌اند و مهندس نرم‌افزار"],
        ["رشته و مقطع تحصیلی:", "مهندسی کامپیوتر (گرایش نرم‌افزار) - دانشگاه صنعتی شریف"],
        ["عنوان و نقش در پروژه:", "طراح رابط کاربری و توسعه‌دهنده ارشد فرانت‌اند (Senior Frontend Developer)"],
        ["نام محل کارآموزی:", "شتاب‌دهنده و استارتاپ استودیوی شریف کلینیک (Sharif Clinic)"],
        ["نشانی محل کارآموزی:", "تهران، ناحیه نوآوری شریف، خیابان شهید ولی‌الله صادقی، پلاک ۲۶"],
        ["پایگاه وب مرجع پروژه:", "sharifclinic.co"],
        ["استاد محترم راهنما و ارزیاب:", "استاد محترم کارآموزی دانشکده مهندسی کامپیوتر"],
        ["سرپرست کارآموزی در شرکت:", "مدیر فنی و راهبر پلتفرم شریف کلینیک"],
        ["تاریخ ارائه گزارش:", "نیم‌سال تحصیلی ۱۴۰۴ - ۱۴۰۵"]
    ]
    add_table_data(doc, ["عنوان مشخصه", "اطلاعات ثبت‌شده"], details_data, caption="")

def build_page_02(doc):
    """صفحه ۲: صفحه تقدیم و سپاسگزاری"""
    add_heading_1(doc, "صفحه تقدیم و سپاسگزاری", space_before=10, space_after=12)
    
    add_heading_2(doc, "تقدیم به:", space_before=6, space_after=4)
    add_p(doc, "به نام یگانه هستی‌بخش و دانای مطلق،", align=WD_ALIGN_PARAGRAPH.RIGHT, size_pt=11, bold_prefix="", space_after=6)
    add_p(doc, "این اثر علمی و مهندسی را با تمام وجود و احترام تقدیم می‌دارم به:", align=WD_ALIGN_PARAGRAPH.JUSTIFY, size_pt=10.5, space_after=4)
    add_bullet(doc, "پدر و مادر بزرگوار و صبورم که همواره پشتیبان بی‌دریغ، مظهر امید، مهرورزی و ایثار در مسیر کسب علم و معرفت بوده‌اند.", bold_prefix="خانواده دلسوز و فداکارم: ")
    add_bullet(doc, "که همواره در جهت اعتلای جایگاه ایران اسلامی، نجات جان انسان‌ها و کاهش آلام بیماران در سراسر گیتی مجاهدت و تلاش می‌نمایند.", bold_prefix="تمامی مدافعان سلامت، پزشکان و کادر درمان کشور: ")
    add_bullet(doc, "که با نگاهی نو و هم‌افزا، پل‌های استوار میان دنیای کدهای صفر و یک و فناوری‌های زیستی را برای بهبود کیفیت حیات بنا می‌نهند.", bold_prefix="پژوهشگران و مهندسان جوان حوزه سلامت دیجیتال: ")
    
    add_heading_2(doc, "سپاسگزاری و قدردانی ویژه:", space_before=10, space_after=4)
    add_p(doc, "بر خود لازم می‌دانم مراتب امتنان و سپاسگزاری صمیمانه خود را تقدیم نمایم به:", align=WD_ALIGN_PARAGRAPH.JUSTIFY, size_pt=10.5, space_after=4)
    add_bullet(doc, "استاد گرانقدر و ارزیاب محترم درس کارآموزی در دانشکده مهندسی کامپیوتر دانشگاه صنعتی شریف، که با هدایت‌های دلسوزانه و رهنمودهای علمی خود، بستر رشد آکادمیک و غنای مهندسی این پروژه را فراهم ساختند.", bold_prefix="استاد محترم راهنمای پروژه کارآموزی: ")
    add_bullet(doc, "مدیران ارشد، سرپرستان، همکاران فنی و کادر محترم شتاب‌دهنده و استارتاپ استودیوی «شریف کلینیک»، که با فراهم آوردن بستری پویا، خلاق و مبتنی بر همکاری میان‌رشته‌ای در ناحیه نوآوری شریف، فرصت کسب تجربیات عملی گرانبها را در مرز دانش نرم‌افزار و سلامت میسر نمودند.", bold_prefix="تیم تخصصی و سرپرستان شریف کلینیک: ")
    add_bullet(doc, "دوستان و همراهان دلسوزی که با نقدها و ایده‌های ارزنده‌شان در تمام مراحل توسعه این سامانه یار و مشوق بودند.", bold_prefix="هم‌کلاسی‌ها و هم‌تیمی‌های عزیز: ")
    
    add_callout(doc, "بیانیه تعهد مهندسی در نظام سلامت", [
        "«مهندسی نرم‌افزار در ساحت سلامت و بهداشت، فراتر از کدنویسی صرف، مسئولیتی مستقیم در قبال حیات و کیفیت زندگی انسان‌هاست. این پروژه گامی استوار در جهت تجلی اخلاق حرفه‌ای، دقت مهندسی و ارزش‌آفرینی در نظام سلامت مدرن به شمار می‌رود.»"
    ], bg_hex="F8FAFC", border_color="1E3A8A")

def build_page_03(doc):
    """صفحه ۳: چکیده تفصیلی و کلمات کلیدی (فارسی و انگلیسی)"""
    add_heading_1(doc, "چکیده تفصیلی پروژه (Executive Abstract)", space_before=6, space_after=6)
    
    add_heading_2(doc, "چکیده فارسی:", space_before=4, space_after=3)
    add_p(doc, "پروژه حاضر حاصل دوره کارآموزی مهندسی کامپیوتر و با هدف طراحی، معماری و پیاده‌سازی جامع پلتفرم وب رسمی «شریف کلینیک» (شتاب‌دهنده و استارتاپ استودیوی تخصصی حوزه سلامت هوشمند مستقر در جوار دانشگاه صنعتی شریف - ناحیه نوآوری شریف) به انجام رسیده است. در این سامانه، رویکرد اصلی تجلی شعار استراتژیک «دقت مهندسی و تخصص پزشکی، آینده سلامت را امروز بسازید» در قالبی نرم‌افزاری با بالاترین سطح کارایی، سرعت بارگذاری، سازگاری فراگیر با انواع نمایشگرها و تایپوگرافی استاندارد فارسی راست‌چین (RTL) بوده است.", 
          space_after=4, align=WD_ALIGN_PARAGRAPH.JUSTIFY)
    
    add_p(doc, "در لایه معماری نرم‌افزار، از جدیدترین فناوری‌های دنیای وب شامل فریم‌ورک Next.js 16 مبتنی بر App Router، کتابخانه React 19، سیستم تایپ استاتیک و ایمن TypeScript 5، موتور استایل‌دهی مدرن Tailwind CSS نسخه ۴ و معماری سبک مدیریت وضعیت Zustand بهره‌برداری شده است. سامانه مشتمل بر ویترین پویای شاخص‌های سلامت، گرید تعاملی ۸ خدمت محوری بالینی و فناورانه با قابلیت فیلترینگ چندبعدی، تفکیک استراتژیک دو مدل همکاری استودیو و شتاب‌دهنده، داشبورد داده‌های کلان سلامت بین‌المللی، ارکان چهارگانه جذب سرمایه و فرم هوشمند ثبت طرح با اعتبارسنجی فرانت‌اند است. ارزیابی‌های کیفی با ابزار Google Lighthouse دستیابی به نمرات عالی عملکرد، دسترسی‌پذیری و سئو را اثبات می‌نماید.", 
          space_after=4, align=WD_ALIGN_PARAGRAPH.JUSTIFY)
    
    add_p(doc, "واژگان کلیدی: سلامت هوشمند، استارتاپ استودیو، شتاب‌دهنده سلامت، نکس‌جی‌اس ۱۶، ری‌اکت ۱۹، تایپ‌اسکریپت، زوستند، تله‌مدیسین، اینترنت اشیاء پزشکی (IoMT)، دانشگاه صنعتی شریف.", 
          bold_prefix="واژگان کلیدی (Keywords): ", size_pt=10, color_rgb=(13, 92, 117), space_after=8)
    
    add_heading_2(doc, "Abstract (English):", space_before=6, space_after=3)
    p_en = doc.add_paragraph()
    p_en.paragraph_format.alignment = WD_ALIGN_PARAGRAPH.JUSTIFY
    p_en.paragraph_format.bidi = False
    p_en.paragraph_format.space_after = Pt(4)
    p_en.paragraph_format.line_spacing = 1.15
    r_en = p_en.add_run(
        "This internship report presents the end-to-end design, system architecture, and production implementation of the official digital platform for 'Sharif Clinic'—a premier smart health venture studio and accelerator situated adjacent to Sharif University of Technology in the Sharif Innovation District. Built to embody the core philosophy of 'Engineering Precision and Medical Expertise', the platform bridges the gap between state-of-the-art software systems and healthcare challenges. The software architecture leverages Next.js 16 (App Router), React 19, TypeScript 5 (Strict Mode), Tailwind CSS v4, and Zustand state store. Key deliverables encompass an interactive 8-service healthcare catalog with dynamic category filters, dual collaborative pathway modules (Venture Studio vs. Accelerator), global digital health statistical dashboard, pitch submission flow with robust client validation, and full WCAG 2.1 AA accessibility and RTL Persian typography. Performance audits demonstrate near-perfect Google Lighthouse scores and superior responsiveness across all device form factors."
    )
    apply_latin_font(r_en, font_name="Calibri", size_pt=9.5, color_rgb=(30, 41, 59))
    
    p_kw = doc.add_paragraph()
    p_kw.paragraph_format.alignment = WD_ALIGN_PARAGRAPH.LEFT
    p_kw.paragraph_format.bidi = False
    p_kw.paragraph_format.space_after = Pt(4)
    r_kw_title = p_kw.add_run("Keywords: ")
    apply_latin_font(r_kw_title, font_name="Calibri", size_pt=9.5, bold=True, color_rgb=(15, 53, 98))
    r_kw = p_kw.add_run("Smart Healthcare, Digital Health, Venture Studio, Accelerator, Next.js 16, React 19, TypeScript, Zustand, Telemedicine, RTL Typography, Sharif University of Technology.")
    apply_latin_font(r_kw, font_name="Calibri", size_pt=9.5, color_rgb=(13, 92, 117))

def build_page_04(doc):
    """صفحه ۴: فهرست مطالب و جداول"""
    add_heading_1(doc, "فهرست مطالب و ساختار گزارش", space_before=6, space_after=8)
    
    toc_data = [
        ["عنوان بخش / فصل", "شماره صفحه"],
        ["صفحه جلد رسمی، تقدیم، چکیده تفصیلی و فهرست مطالب", "صفحه ۱ تا ۴"],
        ["فصل اول: معرفی محل کارآموزی، زیست‌بوم و اهداف دوره کارآموزی", "صفحه ۵ تا ۷"],
        ["  • ۱.۱ تا ۱.۴: پیشینه، مأموریت و زیست‌بوم ناحیه نوآوری شریف", "صفحه ۵"],
        ["  • ۱.۵ تا ۱.۷: ساختار سازمانی، مدل‌های همکاری و شبکه شرکای درمانی", "صفحه ۶"],
        ["  • ۱.۸ تا ۱.۱۰: جایگاه کارآموز، شرح وظایف و گانت‌چارت هفتگی پیشبرد پروژه", "صفحه ۷"],
        ["فصل دوم: مفاهیم پایه، تحلیل مسئله و نیازمندی‌های سامانه سلامت هوشمند", "صفحه ۸ تا ۱۱"],
        ["  • ۲.۱ تا ۲.۳: مفاهیم پایه سلامت هوشمند و چالش‌های انفورماتیک سلامت", "صفحه ۸"],
        ["  • ۲.۴ تا ۲.۵: تحلیل ذی‌نفعان، پرسونای مخاطبان و بنچ‌مارک الگوهای جهانی", "صفحه ۹"],
        ["  • ۲.۶: تحلیل جامع نیازمندی‌های کارکردی (FR-01 تا FR-10) و ماتریس ردیابی", "صفحه ۱۰"],
        ["  • ۲.۷ تا ۲.۸: نیازمندی‌های غیرکارکردی (NFRs) و دیاگرام جریان کاربر", "صفحه ۱۱"],
        ["فصل سوم: معماری نرم‌افزار، زیرساخت و پشته فناوری نوین", "صفحه ۱۲ تا ۱۶"],
        ["  • ۳.۱ تا ۳.۳: معماری کلان سیستم و تحلیل عمیق Next.js 16 App Router", "صفحه ۱۲"],
        ["  • ۳.۴ تا ۳.۶: تحلیل React 19، کامپوننت‌های سرور/کلاینت و تایپ‌اسکریپت ۵", "صفحه ۱۳"],
        ["  • ۳.۷ تا ۳.۹: سیستم استایل‌دهی Tailwind CSS v4، زبان بصری و فونت وزیرمتن", "صفحه ۱۴"],
        ["  • ۳.۱۰ تا ۳.۱۲: معماری مدیریت وضعیت Zustand در برابر Redux و Context", "صفحه ۱۵"],
        ["  • ۳.۱۳ تا ۳.۱۵: معماری سئو پیشرفته، OpenGraph و بهینه‌سازی Web Vitals", "صفحه ۱۶"],
        ["فصل چهارم: طراحی تفصیلی و پیاده‌سازی ماژول‌های سامانه", "صفحه ۱۷ تا ۲۳"],
        ["  • ۴.۱ تا ۴.۳: ساختار پوشه‌ها، چیدمان ریشه (Layout) و خطایابی سراسری", "صفحه ۱۷"],
        ["  • ۴.۴ تا ۴.۵: پیاده‌سازی هدر هوشمند چسبنده و منوی کشویی موبایل", "صفحه ۱۸"],
        ["  • ۴.۶ تا ۴.۷: پیاده‌سازی ویترین اصلی (Hero) و نشانگر زنده سلامت", "صفحه ۱۹"],
        ["  • ۴.۸ تا ۴.۱۰: پیاده‌سازی کاتالوگ تعاملی ۸ خدمت و فیلترینگ دسته‌بندی", "صفحه ۲۰"],
        ["  • ۴.۱۱ تا ۴.۱۲: پیاده‌سازی سیستم مودال سراسری و جزئیات خدمت بالینی", "صفحه ۲۱"],
        ["  • ۴.۱۳ تا ۴.۱۵: ماژول مسیرهای دوگانه همکاری، سرمایه‌گذاری و آمار جهانی", "صفحه ۲۲"],
        ["  • ۴.۱۶ تا ۴.۱۸: فرم ثبت طرح، سوالات متداول (FAQ) و فوتر چندستونه", "صفحه ۲۳"],
        ["فصل پنجم: ارزیابی کیفی، آزمون، بهینه‌سازی کارایی و استقرار", "صفحه ۲۴ تا ۲۶"],
        ["  • ۵.۱ تا ۵.۳: استراتژی آزمون و ارزیابی استاتیک با TypeScript و ESLint", "صفحه ۲۴"],
        ["  • ۵.۴ تا ۵.۶: فرآیند بیلد Turbopack، رفع باگ Next.js 16 و نتایج Lighthouse", "صفحه ۲۵"],
        ["  • ۵.۷ تا ۵.۹: تست واکنش‌گرایی، امنیت فرانت‌اند و خط‌لوله استقرار CI/CD", "صفحه ۲۶"],
        ["فصل ششم: تحلیل نتایج، دستاوردها و چشم‌انداز آینده", "صفحه ۲۷ تا ۲۸"],
        ["  • ۶.۱ تا ۶.۴: جمع‌بندی نتایج، مهارت‌های اکتسابی و درس‌های آموخته‌شده", "صفحه ۲۷"],
        ["  • ۶.۵ تا ۶.۶: نقشه راه توسعه فازهای آتی و پیشنهادات به کارآموزان", "صفحه ۲۸"],
        ["بخش پایانی: پیوست‌ها و فهرست مراجع علمی", "صفحه ۲۹ تا ۳۰"],
        ["  • پیوست الف و ب: ساختار فایل‌ها، پکیج‌ها و راهنمای راه‌اندازی پروژه", "صفحه ۲۹"],
        ["  • مراجع و استانداردهای علمی، کتاب‌ها، مقالات و منابع رسمی وب", "صفحه ۳۰"]
    ]
    add_table_data(doc, ["سرفصل‌های گزارش کارآموزی", "محدوده صفحات"], toc_data, caption="جدول فهرست تفصیلی فصول و مباحث گزارش")

def build_page_05(doc):
    """صفحه ۵: فصل اول - پیشینه، مأموریت و زیست‌بوم ناحیه نوآوری شریف"""
    add_heading_1(doc, "فصل اول: معرفی محل کارآموزی، زیست‌بوم و اهداف دوره", space_before=6, space_after=8)
    
    add_heading_2(doc, "۱.۱ مقدمه و تاریخچه پیدایش استارتاپ استودیوی شریف کلینیک", space_before=4, space_after=3)
    add_p(doc, "استارتاپ استودیو و شتاب‌دهنده تخصصی «شریف کلینیک» (Sharif Clinic) با درک ضرورت عمیق تحول دیجیتال در نظام سلامت کشور و با هدف ایجاد پلی پایدار میان فناوری‌های نوین مهندسی نرم‌افزار، هوش مصنوعی و تخصص‌های بالینی پزشکی شکل گرفت. در سال‌های اخیر، عدم همگرایی کارآمد میان مهندسان خلاق و کادر پزشکی باعث شده بود که بسیاری از نیازهای مبرم نظام درمانی بدون پاسخ فناورانه باقی بماند. شریف کلینیک به عنوان یک بازیگر پیشرو، فرآیند نوآوری را با رویکرد Venture Studio پایه‌ریزی کرده است تا ایده‌های ناب از مرحله شناسایی بالینی تا بلوغ محصول و نفوذ به بازار هدایت شوند.",
          space_after=4, align=WD_ALIGN_PARAGRAPH.JUSTIFY)
    
    add_heading_2(doc, "۱.۲ زیست‌بوم نوآوری دانشگاه صنعتی شریف و استقرار در ناحیه نوآوری", space_before=5, space_after=3)
    add_p(doc, "محل استقرار شریف کلینیک در مجاورت مستقیم دانشگاه صنعتی شریف (واقع در خیابان شهید ولی‌الله صادقی) و در قلب «ناحیه نوآوری شریف» قرار دارد. این موقعیت جغرافیایی و راهبردی فرصتی بی‌بدیل پدید آورده است تا پلتفرم به صورت پیوسته از ظرفیت‌های پژوهشی نخبگان، دانشجویان برتر مهندسی کامپیوتر و آزمایشگاه‌های پیشرفته بهره‌مند گردد. هم‌افزایی با شتاب‌دهنده‌های فناوری، پارک علم و فناوری شریف و مراکز درمانی معتبر تهران، شریف کلینیک را به قطب همگرایی سلامت دیجیتال در کشور مبدل ساخته است.",
          space_after=4, align=WD_ALIGN_PARAGRAPH.JUSTIFY)
    
    add_heading_2(doc, "۱.۳ مأموریت، ارزش‌ها و شعار راهبردی سازمانی", space_before=5, space_after=3)
    add_p(doc, "مأموریت بنیادی شریف کلینیک عبارت است از «کوتاه کردن فاصله میان ایده پزشکی تا نجات جان بیمار به واسطه زیرساخت‌های نرم‌افزاری مقیاس‌پذیر و ایمن». شعار استراتژیک این مجموعه «دقت مهندسی و تخصص پزشکی، آینده سلامت را امروز بسازید» نشان‌دهنده اراده محوری تیم در ادغام معیارهای سخت‌گیرانه مهندسی با اخلاق و موازین سلامت است.",
          space_after=4, align=WD_ALIGN_PARAGRAPH.JUSTIFY)
    
    add_callout(doc, "سه رکن بنیادین ارزش‌های سازمانی در شریف کلینیک", [
        "۱. دقت بالینی و امنیت اطلاعات (Clinical Rigor): تعهد خدشه‌ناپذیر به حفظ سلامت بیمار و حریم خصوصی داده‌های بالینی.",
        "۲. چابکی و تعالی مهندسی (Engineering Excellence): به کارگیری مدرن‌ترین الگوهای معماری نرم‌افزار و پایداری کلاینت-سرور.",
        "۳. هم‌افزایی انسان‌محور (Human-Centric Synergy): تبدیل فناوری به ابزاری آرامش‌بخش برای بیمار و تسهیل‌کننده کار پزشک."
    ], bg_hex="F0FDF4", border_color="0D9488")

print("Module pages_01_to_05 loaded.")
