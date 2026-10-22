import { ServiceItem, PathwayItem, StatItem, NavItem } from "@/types";

export type Language = "fa" | "en";

export interface TranslationSchema {
  common: {
    dir: "rtl" | "ltr";
    lang: "fa" | "en";
    brandName: string;
    brandSubtitle: string;
    switchLanguage: string;
    phoneLabel: string;
    callDirect: string;
  };
  nav: NavItem[];
  header: {
    ctaText: string;
    menuAria: string;
    closeMenuAria: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    card1: {
      title: string;
      description: string;
      badge: string;
    };
    centerCard: {
      badge: string;
      title: string;
      description: string;
      stat1Label: string;
      stat1Value: string;
      stat2Label: string;
      stat2Value: string;
    };
    card2: {
      title: string;
      description: string;
      badge: string;
    };
  };
  services: {
    badge: string;
    title: string;
    description: string;
    categories: { id: string; label: string }[];
    items: ServiceItem[];
    viewDetailsCta: string;
  };
  pathways: {
    badge: string;
    title: string;
    description: string;
    keyHighlightsLabel: string;
    items: PathwayItem[];
    studioCta: string;
    acceleratorCta: string;
  };
  investment: {
    badge: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    pillars: { title: string; description: string }[];
  };
  stats: {
    badge: string;
    title: string;
    description: string;
    items: StatItem[];
  };
  faq: {
    badge: string;
    title: string;
    description: string;
    items: { question: string; answer: string }[];
  };
  consultationModal: {
    title: string;
    description: string;
    successTitle: string;
    successDescription: string;
    successCta: string;
    fullNameLabel: string;
    fullNamePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    cooperationTypeLabel: string;
    cooperationOptions: {
      startup_idea: string;
      investment: string;
      hospital_integration: string;
      general_inquiry: string;
    };
    descriptionLabel: string;
    descriptionPlaceholder: string;
    submitCta: string;
    submittingText: string;
    errors: {
      nameRequired: string;
      phoneInvalid: string;
      genericError: string;
    };
  };
  serviceDetailModal: {
    aboutLabel: string;
    featuresLabel: string;
    closeCta: string;
    applyCta: string;
  };
  footer: {
    mission: string;
    badge1: string;
    badge2: string;
    quickLinksTitle: string;
    studioLink: string;
    investmentLink: string;
    contactTitle: string;
    address: string;
    telegramText: string;
    copyrightText: string;
    tagline: string;
  };
}

export const translations: Record<Language, TranslationSchema> = {
  fa: {
    common: {
      dir: "rtl",
      lang: "fa",
      brandName: "شریف کلینیک",
      brandSubtitle: "SHARIF HEALTH TECH STUDIO",
      switchLanguage: "تغییر زبان",
      phoneLabel: "تماس با ما",
      callDirect: "تماس مستقیم",
    },
    nav: [
      { label: "خدمات سلامت", href: "#services" },
      { label: "مسیرهای همکاری", href: "#pathways" },
      { label: "سرمایه‌گذاری", href: "#investment" },
      { label: "آمار و ارقام", href: "#stats" },
      { label: "درباره ما", href: "#about" },
      { label: "تماس با ما", href: "#contact" },
    ],
    header: {
      ctaText: "همکاری و جذب سرمایه",
      menuAria: "منوی سایت",
      closeMenuAria: "بستن منو",
    },
    hero: {
      badge: "شتاب‌دهنده و استارتاپ استودیوی تخصصی سلامت هوشمند",
      titleLine1: "دقت مهندسی و تخصص پزشکی،",
      titleLine2: "آینده سلامت را امروز بسازید",
      description:
        "شریف کلینیک، پلی میان پیشرفته‌ترین فناوری‌های مهندسی دانشگاه صنعتی شریف و چالش‌های واقعی بالینی برای تحول در مراقبت از سلامت بیماران.",
      primaryCta: "ثبت ایده و درخواست شتابدهی",
      secondaryCta: "مشاهده خدمات سلامت",
      card1: {
        title: "هم‌گرایی پزشکی و مهندسی",
        description:
          "شریف کلینیک با همکاری متخصصان برجسته پزشکی و نخبگان مهندسی، شتاب‌دهنده و استارتاپ استودیوی حوزه سلامت هوشمند است که راه‌حل‌های نوآورانه برای ارتقای نظام سلامت ایران ارائه می‌دهد.",
        badge: "اعتبارسنجی بالینی و استانداردسازی جهانی",
      },
      centerCard: {
        badge: "اکوسیستم سلامت دیجیتال",
        title: "نوآوری بر پایه شواهد علمی",
        description:
          "تلفیق پردازش موازی، هوش مصنوعی، حسگرهای زیستی و پروتکل‌های پزشکی روز دنیا",
        stat1Label: "پوشش بالینی",
        stat1Value: "+۳۰ بیمارستان",
        stat2Label: "تیم‌های فناور",
        stat2Value: "+۴۵ استارتاپ",
      },
      card2: {
        title: "زیرساخت و شبکه‌سازی آینده",
        description:
          "آینده سلامت با فناوری گره خورده است؛ ما با فراهم‌کردن زیرساخت، توسعه، آموزش و شبکه‌سازی گسترده میان دانشگاهیان و تصمیم‌گیران، از پیشرفت و همه‌گیری فناوری‌های سلامت حمایت می‌کنیم.",
        badge: "تسهیل ورود به بازارهای دانش‌بنیان",
      },
    },
    services: {
      badge: "خدمات یکپارچه سلامت",
      title: "خدمات سلامت یکجا برای شما",
      description:
        "با چند کلیک، به هر سرویس سلامت، شتابدهی و ابزارهای فناورانه مورد نیاز خود دسترسی پیدا کنید.",
      categories: [
        { id: "all", label: "همه خدمات" },
        { id: "startups", label: "استارتاپ‌ها و شتابدهی" },
        { id: "centers", label: "مراکز درمانی و بیمارستان‌ها" },
        { id: "patients", label: "پایش و مراقبت بیماران" },
        { id: "technology", label: "فناوری‌های تشخیصی و دارو" },
      ],
      items: [
        {
          id: "startup-incubation",
          title: "توسعه استارتاپ‌های سلامت",
          category: "startups",
          shortDescription: "حمایت از نوآوری‌های سلامت دیجیتال",
          fullDescription:
            "شریف کلینیک بستر جامع شتاب‌دهی و تجاری‌سازی ایده‌های فناورانه در مرز پزشکی و مهندسی است. ما از مرحله ایده تا ورود به بازارهای ملی و بین‌المللی در کنار شما هستیم.",
          features: [
            "تأمین سرمایه اولیه و بذری (Seed Funding)",
            "اعتبارسنجی بالینی ایده‌ها در مراکز درمانی طرف قرارداد",
            "پشتیبانی فنی و مهندسی سیستم‌های نرم‌افزاری و سخت‌افزاری",
            "همراهی در اخذ تاییدیه‌های وزارت بهداشت و سازمان غذا و دارو",
          ],
          icon: "Rocket",
          badge: "ویژه نخبگان",
        },
        {
          id: "accelerator-growth",
          title: "شتابدهی استارتاپ سلامت",
          category: "startups",
          shortDescription: "منتورینگ، حمایت و ورود به بازار",
          fullDescription:
            "برنامه‌های فشرده شتابدهی با حضور مربیان برجسته حوزه سلامت، متخصصان بالینی، سرمایه‌گذاران جسورانه و مدیران ارشد صنعت سلامت دیجیتال.",
          features: [
            "منتورینگ اختصاصی یک‌به‌یک با پزشکان و مهندسان باسابقه",
            "دسترسی به شبکه گسترده فرشتگان کسب‌وکار و صندوق‌های جسورانه",
            "کارگاه‌های تخصصی قیمت‌گذاری و مدل‌های درآمدی سلامت",
            "آماده‌سازی برای راندهای جذب سرمایه سری A",
          ],
          icon: "TrendingUp",
          badge: "برنامه جامع",
        },
        {
          id: "hospital-smart-systems",
          title: "هوشمندسازی مراکز درمانی",
          category: "centers",
          shortDescription: "سیستم‌های یکپارچه مدیریت درمان",
          fullDescription:
            "پیاده‌سازی نسل نوین سامانه‌های بیمارستانی (HIS هوشمند)، بهینه‌سازی زنجیره درمان، کاهش خطاهای پزشکی و اتوماسیون فرآیندهای پذیرش تا ترخیص.",
          features: [
            "یکپارچه‌سازی سامانه‌های HIS با هوش مصنوعی تحلیلی",
            "داشبوردهای مدیریتی بلادرنگ برای رؤسا و مدیران بیمارستان",
            "نوبت‌دهی هوشمند و توزیع متوازن بار مراجعات بیماران",
            "مدیریت خودکار پرونده الکترونیک سلامت (EHR)",
          ],
          icon: "Building2",
          badge: "راهکار سازمانی",
        },
        {
          id: "patient-monitoring",
          title: "پایش هوشمند بیماران",
          category: "patients",
          shortDescription: "مراقبت لحظه‌ای با پایش دیجیتال و اینترنت اشیاء (IoT)",
          fullDescription:
            "سامانه‌های پایش از راه دور علائم حیاتی بیماران مزمن (فشار خون، قند، نوار قلب و اکسیژن) با گجت‌های پوشیدنی متصل به کلود درمانی.",
          features: [
            "هشدار زودهنگام ریسک حملات حاد با الگوریتم‌های هوش مصنوعی",
            "ارتباط پیوسته بیمار با تیم پرستاری و پزشک معالج در ۲۴ ساعت",
            "گزارش‌های هفتگی و ماهانه روند سلامت به زبان ساده برای بیمار",
            "کاهش نیاز به بستری مجدد و مراجعات غیرضروری اورژانس",
          ],
          icon: "HeartPulse",
        },
        {
          id: "telemedicine",
          title: "تله‌مدیسین و کلینیک مجازی",
          category: "technology",
          shortDescription: "مشاوره، درمان و مراقبت دیجیتال از راه دور",
          fullDescription:
            "پلتفرم امن ارتباط تصویری، صوتی و متنی پزشک و بیمار به همراه نسخه الکترونیک معتبر و ارسال مستقیم دارو به درب منزل.",
          features: [
            "کیفیت ویدیویی پایدار با حداقل مصرف پهنای باند",
            "امنیت بالای اطلاعات طبق استانداردهای حفظ حریم خصوصی سلامت",
            "سامانه پرداخت یکپارچه و صدور فاکتور بیمه",
            "امکان ویزیت چندتخصصی و کمیسیون آنلاین پزشکی",
          ],
          icon: "Video",
        },
        {
          id: "pharma-digitalization",
          title: "دیجیتال‌سازی زنجیره دارو",
          category: "technology",
          shortDescription: "ردیابی، اصالت‌سنجی و توزیع دیجیتال",
          fullDescription:
            "مدیریت بهینه انبارداری، ردیابی زنجیره تأمین داروهای خاص، اتصال داروخانه‌ها به سیستم‌های نسخه الکترونیک و جلوگیری از هدررفت منابع دارویی.",
          features: [
            "ردیابی اصالت کالا و انطباق با سامانه تی‌تک (TTAC)",
            "پیش‌بینی کمبودهای دارویی با هوش مصنوعی و مدل‌های فصلی",
            "سامانه توزیع سریع به درب منزل بیمار با حفظ زنجیره سرد",
            "مدیریت ارتباط داروساز با بیمار در پیگیری مصرف دارو",
          ],
          icon: "Pill",
        },
        {
          id: "health-ai-analytics",
          title: "تحلیل هوشمند سلامت و کلان‌داده",
          category: "technology",
          shortDescription: "پیش‌بینی بیماری‌ها و پشتیبانی تصمیم بالینی با هوش مصنوعی",
          fullDescription:
            "پردازش تصاویر پزشکی (رادیولوژی، ام‌آر‌آی، سی‌تی‌اسکن) و داده‌های بالینی با موتورهای یادگیری عمیق برای دستیابی به تشخیص سریع‌تر و دقیق‌تر.",
          features: [
            "دقت بالای ۹۷٪ در غربالگری اولیه آسیب‌های بافتی",
            "تفسیر خودکار و علامت‌گذاری ناهنجاری‌ها جهت بازبینی پزشک",
            "کاهش چشمگیر زمان رسیدگی به پرونده‌های اورژانسی",
            "سازگاری کامل با استانداردهای دایکام (DICOM) و پکس (PACS)",
          ],
          icon: "BrainCircuit",
          badge: "فناوری روز",
        },
        {
          id: "healthcare-empowerment",
          title: "هم‌افزایی نیروهای سلامت",
          category: "startups",
          shortDescription: "ارتقای مهارت دیجیتال و توانمندسازی کادر درمان",
          fullDescription:
            "برگزاری دوره‌های تخصصی سلامت دیجیتال، هوش مصنوعی در پزشکی و آشنایی با ابزارهای نوین بالینی برای دانشجویان، پزشکان و کادر پیراپزشکی.",
          features: [
            "دوره‌های عملی کار با داده‌های پزشکی و مدل‌های تشخیصی",
            "کارگاه‌های بین‌رشته‌ای مهندسی پزشکی و بالینی در دانشگاه صنعتی شریف",
            "شبکه‌سازی میان پزشکان نوآور و تیم‌های مهندسی نرم‌افزار",
            "اعطای گواهی‌نامه مشترک معتبر صنعتی و دانشگاهی",
          ],
          icon: "GraduationCap",
        },
      ],
      viewDetailsCta: "مشاهده جزئیات و درخواست",
    },
    pathways: {
      badge: "مدل‌های نوآوری و همکاری",
      title: "ما دو مسیر مکمل را دنبال می‌کنیم",
      description:
        "متناسب با اینکه شما صاحب ایده، تیم استارتاپی، پژوهشگر دانشگاهی یا مرکز درمانی باشید، بهترین ساختار همکاری را ارائه می‌دهیم.",
      keyHighlightsLabel: "محورهای کلیدی این مسیر:",
      items: [
        {
          id: "venture-studio",
          title: "استارتاپ استودیو (Startup Studio)",
          subtitle: "خلق و توسعه محصول از ایده تا مقیاس با تیم داخلی",
          description:
            "در این مسیر، چالش‌های کلان و گره‌های واقعی نظام سلامت کشور شناسایی شده و راهکارهای نوآورانه از مرحله صفر تا محصول نهایی، توسط تیم‌های چندرشته‌ای مهندسی و پزشکی مقیم شریف کلینیک ساخته و به بازار عرضه می‌شوند.",
          highlights: [
            "تشکیل تیم‌های تخصصی مهندسی نرم‌افزار، هوش مصنوعی و پزشکی بالینی",
            "تأمین تمام زیرساخت‌های سروری، ابری، حقوقی و مالی مورد نیاز",
            "طراحی تجربه کاربری (UI/UX) منطبق با رفتارهای بیمار و پزشک ایرانی",
            "آزمایش و بهینه‌سازی مستمر محصول در محیط‌های درمانی واقعی",
          ],
          icon: "Workflow",
          accentColor: "from-blue-600 to-indigo-600",
        },
        {
          id: "accelerator-vc",
          title: "شتاب‌دهنده و سرمایه‌گذار حامی",
          subtitle: "همراهی و تأمین سرمایه برای استارتاپ‌ها و پژوهشگران مستقل",
          description:
            "در کنار تیم‌های نوپا، استارتاپ‌های در حال رشد یا پژوهشگران خلاق دانشگاهی می‌ایستیم و با تزریق سرمایه هوشمند، دسترسی به شبکه بیمارستانی و منتورینگ بالینی، مسیر رشد آنها را کوتاه و هموار می‌کنیم.",
          highlights: [
            "سرمایه‌گذاری مرحله بذری (Seed) و پیش‌بذری (Pre-seed)",
            "اتصال مستقیم به بیش از ۳۰ مرکز درمانی و بیمارستان مرجع",
            "تسهیل در جذب تاییدیه‌های فنی، دانش‌بنیان و مجوزهای وزارت بهداشت",
            "معرفی و ارتباط با شبکه صندوق‌های سرمایه‌گذاری جسورانه (VC)",
          ],
          icon: "Rocket",
          accentColor: "from-sky-500 to-cyan-600",
        },
      ],
      studioCta: "همکاری در خلق محصول و استودیو",
      acceleratorCta: "درخواست جذب سرمایه و شتابدهی",
    },
    investment: {
      badge: "فرصتی نو برای نوآوران سلامت",
      title: "سرمایه‌گذاری در آینده سلامت دیجیتال ایران",
      description:
        "اگر شما یا تیم شما ایده‌ای برای حل یک مسئله واقعی در نظام سلامت دارید — چه در تشخیص هوشمند با AI، چه مراقبت از راه دور و تله‌مدیسین، چه در داروسازی دیجیتال یا هر نقطه‌ای از زنجیره درمان — شریف کلینیک آماده است تا با حمایت جامع مالی، فنی و اعتبار بالینی همراهتان باشد.",
      primaryCta: "ارسال طرح اولیه و پیچ‌دک",
      secondaryCta: "درخواست جلسه هم‌افزایی",
      pillars: [
        {
          title: "سرمایه‌گذاری هدفمند برای توسعه ایده",
          description:
            "تأمین منابع مالی منعطف و مرحله‌ای متناسب با نقشه راه اعتبارسنجی تا بازار",
        },
        {
          title: "منتورینگ تخصصی توسط خبرگان سلامت و فناوری",
          description:
            "بهره‌مندی مستقیم از تجربیات اساتید دانشگاه صنعتی شریف و پزشکان متخصص بالینی",
        },
        {
          title: "دسترسی به زیرساخت‌های فنی، ابری و آزمایشگاهی",
          description:
            "سرورهای پردازش موازی هوش مصنوعی و محیط‌های آزمون داده‌های پزشکی ایمن",
        },
        {
          title: "ارتباط با شبکه گسترده متخصصان و نهادهای سلامت",
          description:
            "دسترسی مستقیم به بازار هدف درمان، انجمن‌های پزشکی و نهادهای تصمیم‌گیر حوزه سلامت",
        },
      ],
    },
    stats: {
      badge: "چشم‌انداز و بازار جهانی",
      title: "این حوزه نه یک فرصت، که یک ضرورت است",
      description:
        "با توجه به گسترش روزافزون و فراگیر شدن سلامت دیجیتال در سطح جهان، داده‌های آماری زیر شتاب خیره‌کننده نفوذ فناوری در ارتقای شاخص‌های حیات را نمایان می‌سازند.",
      items: [
        {
          id: "stat-1",
          value: "۷۵+ میلیارد دلار",
          label: "سرمایه‌گذاری جهانی سالانه",
          sublabel: "در توسعه اکوسیستم سلامت هوشمند و فناوری‌های نوین پزشکی",
          icon: "CircleDollarSign",
        },
        {
          id: "stat-2",
          value: "۲۵+ کشور",
          label: "توسعه‌دهنده فعال",
          sublabel: "بیمارستان‌های تمام هوشمند با زیرساخت خودکار سلامت",
          icon: "Globe2",
        },
        {
          id: "stat-3",
          value: "۱۱۶ میلیون+",
          label: "ویزیت تله‌مدیسین در جهان",
          sublabel: "ثبت شده در سال گذشته میلادی با رشد پیوسته پذیرش همگانی",
          icon: "Stethoscope",
        },
        {
          id: "stat-4",
          value: "۱۴.۸٪+",
          label: "نرخ رشد مرکب سالانه (CAGR)",
          sublabel: "افزایش سهم اقتصاد فناوری‌های سلامت در بازارهای پیشرو",
          icon: "LineChart",
        },
      ],
    },
    faq: {
      badge: "پرسش‌های متداول",
      title: "پاسخ به سوالات پرتکرار شما",
      description:
        "هر آنچه درباره نحوه تعامل، مدل‌های شتابدهی و پذیرش شریف کلینیک باید بدانید.",
      items: [
        {
          question: "شریف کلینیک برای چه کسانی طراحی شده است؟",
          answer:
            "کلیه پزشکان، کادر درمان، متخصصان حوزه مهندسی، هوش مصنوعی، بیوانفورماتیک، تیم‌های نوپای سلامت و همچنین بیمارستان‌ها و مراکزی که به دنبال راهکارهای تحول دیجیتال و بهبود تجربه بیمار هستند.",
        },
        {
          question: "استارتاپ استودیو (Startup Studio) چه تفاوتی با شتاب‌دهنده دارد؟",
          answer:
            "در استارتاپ استودیو، ایده‌ها از ابتدا توسط تیم‌های داخلی شریف کلینیک خلق و ساخته می‌شوند؛ در حالی که در شتاب‌دهنده، تیم‌های استارتاپی از پیش شکل‌گرفته با داشتن نمونه محصول اولیه پذیرش شده و سرمایه، منتورینگ و شبکه بازار دریافت می‌کنند.",
        },
        {
          question: "آیا ایده‌ها و طرح‌های ارسالی مشمول قرارداد محرمانگی (NDA) می‌شوند؟",
          answer:
            "بله، حفظ مالکیت فکری و امنیت اطلاعات ایده‌پردازان خط قرمز شریف کلینیک است. تمامی ارزیابی‌ها در فضایی کاملاً محرمانه و با تعهد کامل حقوقی انجام می‌پذیرد.",
        },
        {
          question: "فرآیند بررسی طرح‌ها و پاسخ‌دهی به متقاضیان چقدر زمان می‌برد؟",
          answer:
            "پس از ثبت فرم در وبسایت، بررسی اولیه توسط کمیته علمی طی حداکثر ۴۸ ساعت کاری انجام و جهت هماهنگی جلسه حضوری یا آنلاین با نماینده تیم تماس گرفته خواهد شد.",
        },
      ],
    },
    consultationModal: {
      title: "ثبت طرح، ایده و درخواست همکاری",
      description:
        "اطلاعات اولیه خود را تکمیل کنید تا کارشناسان شتاب‌دهنده شریف کلینیک در اسرع وقت با شما تماس بگیرند.",
      successTitle: "درخواست شما با موفقیت ثبت شد!",
      successDescription:
        "از حسن اعتماد شما متشکریم. تیم ارزیابی طرح‌های شریف کلینیک اطلاعات شما را بررسی کرده و حداکثر ظرف ۴۸ ساعت کاری با شما تماس خواهد گرفت.",
      successCta: "متوجه شدم",
      fullNameLabel: "نام و نام خانوادگی",
      fullNamePlaceholder: "مثال: دکتر علی رضایی",
      phoneLabel: "شماره تلفن همراه",
      phonePlaceholder: "0912...",
      emailLabel: "آدرس ایمیل (اختیاری)",
      emailPlaceholder: "name@example.com",
      cooperationTypeLabel: "موضوع همکاری",
      cooperationOptions: {
        startup_idea: "ارائه ایده و ورود به استارتاپ استودیو",
        investment: "درخواست جذب سرمایه و شتابدهی",
        hospital_integration: "هوشمندسازی مرکز درمانی یا کلینیک",
        general_inquiry: "سایر همکاری‌های علمی و صنعتی",
      },
      descriptionLabel: "خلاصه طرح یا پیام شما",
      descriptionPlaceholder:
        "توضیح مختصری درباره چالش مورد نظر، راهکار و سطح پیشرفت طرح...",
      submitCta: "ارسال و ثبت درخواست",
      submittingText: "در حال ثبت اطلاعات...",
      errors: {
        nameRequired: "لطفاً نام و نام خانوادگی خود را وارد کنید.",
        phoneInvalid: "لطفاً یک شماره تماس معتبر وارد کنید.",
        genericError:
          "خطایی در ثبت درخواست رخ داد. لطفاً مجدداً تلاش فرمایید.",
      },
    },
    serviceDetailModal: {
      aboutLabel: "درباره این خدمت:",
      featuresLabel: "ویژگی‌ها و قابلیت‌های کلیدی:",
      closeCta: "بستن",
      applyCta: "درخواست همکاری در این حوزه",
    },
    footer: {
      mission:
        "شریف کلینیک یک شتاب‌دهنده و استارتاپ استودیوی تخصصی در حوزه سلامت هوشمند است که با تکیه بر ظرفیت‌های علمی متخصصان پزشکی و بهره‌گیری از دقت مهندسی دانشگاه صنعتی شریف، بستری یکپارچه برای توسعه راه‌حل‌های نوآورانه در نظام سلامت کشور فراهم می‌آورد.",
      badge1: "شتاب‌دهنده تخصصی فناوری‌های سلامت",
      badge2: "پشتیبان نوآوران و نخبگان",
      quickLinksTitle: "دسترسی سریع",
      studioLink: "استارتاپ استودیو سلامت",
      investmentLink: "درخواست جذب سرمایه",
      contactTitle: "اطلاعات تماس و نشانی",
      address:
        "تهران، ضلع غربی دانشگاه صنعتی شریف، خیابان شهید ولی‌الله صادقی، پلاک ۲۶، واحد ۱۰",
      telegramText: "ارتباط مستقیم در تلگرام",
      copyrightText:
        "کلیه حقوق این وبسایت متعلق به شرکت «شریف کلینیک» می‌باشد.",
      tagline:
        "تلفیق نوآوری مهندسی و تخصص پزشکی برای آینده سلامت ایران",
    },
  },
  en: {
    common: {
      dir: "ltr",
      lang: "en",
      brandName: "Sharif Clinic",
      brandSubtitle: "SHARIF HEALTH TECH STUDIO",
      switchLanguage: "Switch Language",
      phoneLabel: "Contact Us",
      callDirect: "Direct Call",
    },
    nav: [
      { label: "Health Services", href: "#services" },
      { label: "Collaboration Pathways", href: "#pathways" },
      { label: "Investment", href: "#investment" },
      { label: "Global Stats", href: "#stats" },
      { label: "About Us", href: "#about" },
      { label: "Contact Us", href: "#contact" },
    ],
    header: {
      ctaText: "Partnership & Funding",
      menuAria: "Site menu",
      closeMenuAria: "Close menu",
    },
    hero: {
      badge: "Smart Health Accelerator & Specialized Venture Studio",
      titleLine1: "Engineering Precision Meets Clinical Excellence,",
      titleLine2: "Building the Future of Healthcare Today",
      description:
        "Sharif Clinic bridges cutting-edge engineering from Sharif University of Technology with real-world clinical challenges to transform healthcare delivery.",
      primaryCta: "Pitch Your Idea & Apply for Acceleration",
      secondaryCta: "Explore Health Services",
      card1: {
        title: "Convergence of Medicine & Engineering",
        description:
          "In collaboration with leading medical experts and top engineering talent, Sharif Clinic provides a specialized launchpad delivering innovative solutions to elevate the healthcare system.",
        badge: "Clinical Validation & Global Standards",
      },
      centerCard: {
        badge: "Digital Health Ecosystem",
        title: "Evidence-Based Innovation",
        description:
          "Integrating parallel computing, artificial intelligence, biosensors, and modern clinical protocols.",
        stat1Label: "Clinical Network",
        stat1Value: "+30 Hospitals",
        stat2Label: "Tech Ventures",
        stat2Value: "+45 Startups",
      },
      card2: {
        title: "Future Infrastructure & Networking",
        description:
          "The future of healthcare is intertwined with technology. We champion healthcare innovation by providing infrastructure, R&D, clinical training, and bridging academia with key decision-makers.",
        badge: "Accelerating Knowledge-Based Market Access",
      },
    },
    services: {
      badge: "Integrated Health Services",
      title: "All Your Healthcare Solutions in One Place",
      description:
        "Access specialized health services, startup acceleration, and advanced technological tools in just a few clicks.",
      categories: [
        { id: "all", label: "All Services" },
        { id: "startups", label: "Startups & Acceleration" },
        { id: "centers", label: "Hospitals & Medical Centers" },
        { id: "patients", label: "Patient Monitoring & Care" },
        { id: "technology", label: "Diagnostic AI & Pharma Tech" },
      ],
      items: [
        {
          id: "startup-incubation",
          title: "Health Startup Development",
          category: "startups",
          shortDescription: "Empowering digital health innovations",
          fullDescription:
            "Sharif Clinic is a comprehensive incubation platform for commercializing health-tech ventures bridging medicine and engineering. We stand by you from inception to global market entry.",
          features: [
            "Pre-seed and Seed stage funding",
            "Clinical validation across network partner hospitals",
            "Hardware and software engineering infrastructure support",
            "Regulatory clearance and health authority compliance",
          ],
          icon: "Rocket",
          badge: "Elite Track",
        },
        {
          id: "accelerator-growth",
          title: "Health Startup Acceleration",
          category: "startups",
          shortDescription: "Mentorship, growth & market expansion",
          fullDescription:
            "Intensive acceleration tracks featuring prominent healthcare mentors, clinical specialists, venture capitalists, and digital health executives.",
          features: [
            "Dedicated 1-on-1 mentorship with seasoned clinicians & engineers",
            "Access to an extensive network of angel investors and VC funds",
            "Specialized pricing strategy and health-tech revenue model workshops",
            "Preparation for Series A investment rounds",
          ],
          icon: "TrendingUp",
          badge: "Comprehensive Program",
        },
        {
          id: "hospital-smart-systems",
          title: "Hospital Smart Systems",
          category: "centers",
          shortDescription: "Integrated healthcare management systems",
          fullDescription:
            "Implementing next-generation smart hospital systems (Smart HIS), streamlining care workflows, minimizing medical errors, and automating admission-to-discharge operations.",
          features: [
            "Seamless HIS integration with analytical AI engines",
            "Real-time executive dashboards for hospital directors",
            "Smart appointment scheduling and patient load balancing",
            "Automated Electronic Health Record (EHR) management",
          ],
          icon: "Building2",
          badge: "Enterprise Solution",
        },
        {
          id: "patient-monitoring",
          title: "Remote Patient Monitoring",
          category: "patients",
          shortDescription: "Real-time care via digital telemetry & IoT",
          fullDescription:
            "Continuous remote vital signs tracking for chronic condition patients (blood pressure, glucose, ECG, SpO2) using medical IoT wearables linked to clinical cloud.",
          features: [
            "Early-warning anomaly detection algorithms powered by AI",
            "24/7 continuous connection between patient, nursing team & physician",
            "Simplified weekly and monthly health trend analytics",
            "Substantial reduction in hospital readmissions and ER visits",
          ],
          icon: "HeartPulse",
        },
        {
          id: "telemedicine",
          title: "Telemedicine & Virtual Clinic",
          category: "technology",
          shortDescription: "Remote consultations, diagnostics & clinical care",
          fullDescription:
            "Secure video, audio, and text communication platform between clinicians and patients with digital prescriptions and doorstep medication delivery.",
          features: [
            "High-definition, low-bandwidth optimized video streaming",
            "Enterprise-grade HIPAA/health privacy and data encryption",
            "Integrated payment processing and insurance claims",
            "Multi-specialty online clinical consultations and medical boards",
          ],
          icon: "Video",
        },
        {
          id: "pharma-digitalization",
          title: "Pharmaceutical Supply Digitalization",
          category: "technology",
          shortDescription: "Tracing, verification & smart distribution",
          fullDescription:
            "Optimizing inventory logistics, cold-chain monitoring for specialized therapeutics, digital prescription integration, and curtailing pharmaceutical waste.",
          features: [
            "Authenticity verification and regulatory compliance tracking",
            "AI-driven drug shortage prediction based on seasonal models",
            "Rapid home delivery with certified cold-chain preservation",
            "Pharmacist-patient adherence follow-up protocols",
          ],
          icon: "Pill",
        },
        {
          id: "health-ai-analytics",
          title: "AI Health Analytics & Big Data",
          category: "technology",
          shortDescription: "Disease prediction & clinical decision support",
          fullDescription:
            "Processing diagnostic medical imaging (Radiology, MRI, CT) and clinical telemetry through deep learning pipelines for faster, highly accurate diagnoses.",
          features: [
            ">97% accuracy in preliminary lesion and tissue screening",
            "Automated anomaly annotation for specialist review",
            "Significant reduction in emergency radiology triage turnaround time",
            "Native interoperability with DICOM and PACS standards",
          ],
          icon: "BrainCircuit",
          badge: "Frontier Tech",
        },
        {
          id: "healthcare-empowerment",
          title: "Healthcare Workforce Empowerment",
          category: "startups",
          shortDescription: "Digital skills training for clinical practitioners",
          fullDescription:
            "Executive digital health masterclasses, clinical AI workshops, and emerging technologies for medical students, clinicians, and allied healthcare teams.",
          features: [
            "Hands-on medical data science and diagnostic model labs",
            "Interdisciplinary bioengineering seminars at Sharif University of Technology",
            "Networking opportunities linking innovative doctors with software architects",
            "Accredited dual academic-industry certifications",
          ],
          icon: "GraduationCap",
        },
      ],
      viewDetailsCta: "View Details & Apply",
    },
    pathways: {
      badge: "Innovation & Partnership Models",
      title: "We Pursue Two Complementary Pathways",
      description:
        "Whether you are an aspiring founder, an existing startup, an academic researcher, or a healthcare institution, we offer a tailored collaboration framework.",
      keyHighlightsLabel: "Key pillars of this pathway:",
      items: [
        {
          id: "venture-studio",
          title: "Venture Studio",
          subtitle: "Building ventures from ideation to scale with our in-house team",
          description:
            "In this pathway, high-impact systemic challenges in healthcare are identified, and end-to-end innovative solutions are engineered from ground zero by multidisciplinary resident engineering and clinical teams at Sharif Clinic.",
          highlights: [
            "Dedicated squads in software engineering, AI, and clinical medicine",
            "Full cloud infrastructure, compute clusters, legal, and capital coverage",
            "UI/UX designed around localized patient and clinician workflows",
            "Continuous pilot testing in real clinical hospital environments",
          ],
          icon: "Workflow",
          accentColor: "from-blue-600 to-indigo-600",
        },
        {
          id: "accelerator-vc",
          title: "Accelerator & VC Partner",
          subtitle: "Backing and funding independent health startups & researchers",
          description:
            "We partner with early-stage startups and visionary university researchers, injecting smart capital, clinical hospital access, and regulatory mentorship to accelerate their growth trajectory.",
          highlights: [
            "Pre-seed and Seed equity investment",
            "Direct integration into 30+ partner hospitals and clinics",
            "Fast-track technical accreditation and regulatory health licensing",
            "Syndication with premier domestic and international VC networks",
          ],
          icon: "Rocket",
          accentColor: "from-sky-500 to-cyan-600",
        },
      ],
      studioCta: "Partner with Our Venture Studio",
      acceleratorCta: "Apply for Capital & Acceleration",
    },
    investment: {
      badge: "A New Opportunity for Health Innovators",
      title: "Investing in the Future of Digital Health",
      description:
        "If you or your team have a compelling solution for a real-world healthcare bottleneck — whether in AI diagnostic assistance, remote monitoring, digital therapeutics, or supply chain — Sharif Clinic is prepared to empower your journey with capital, engineering firepower, and clinical credibility.",
      primaryCta: "Submit Pitch Deck & Apply",
      secondaryCta: "Request Strategic Meeting",
      pillars: [
        {
          title: "Targeted Capital for Venture Growth",
          description:
            "Flexible, milestone-driven funding structured from hypothesis validation to commercial market launch.",
        },
        {
          title: "Specialized Mentorship from Health & Tech Leaders",
          description:
            "Direct advisory from Sharif University engineering faculty and leading clinical physicians.",
        },
        {
          title: "Access to High-Performance Cloud & Lab Infrastructure",
          description:
            "GPU clusters for AI training and secure clinical sandbox environments for medical data.",
        },
        {
          title: "Extensive Network of Healthcare Stakeholders",
          description:
            "Direct pipeline to hospital buyers, medical associations, and healthcare policy makers.",
        },
      ],
    },
    stats: {
      badge: "Global Market & Outlook",
      title: "This Field is Not Just an Opportunity, It is a Necessity",
      description:
        "With digital health experiencing unprecedented global adoption, the numbers highlight the transformative momentum of healthcare technologies worldwide.",
      items: [
        {
          id: "stat-1",
          value: "$75B+",
          label: "Global Annual Investment",
          sublabel:
            "In smart health ecosystems and pioneering medical technologies worldwide",
          icon: "CircleDollarSign",
        },
        {
          id: "stat-2",
          value: "25+ Countries",
          label: "Active Smart Hospital Adopters",
          sublabel:
            "Deploying automated healthcare and intelligent diagnostic infrastructure",
          icon: "Globe2",
        },
        {
          id: "stat-3",
          value: "116M+",
          label: "Global Telemedicine Encounters",
          sublabel:
            "Logged over the past year with accelerating mainstream adoption",
          icon: "Stethoscope",
        },
        {
          id: "stat-4",
          value: "14.8%+",
          label: "Compound Annual Growth (CAGR)",
          sublabel:
            "Expanding market share of health-tech across leading global economies",
          icon: "LineChart",
        },
      ],
    },
    faq: {
      badge: "Frequently Asked Questions",
      title: "Answers to Frequently Asked Questions",
      description:
        "Everything you need to know about partnering with Sharif Clinic, our tracks, and acceleration criteria.",
      items: [
        {
          question: "Who is Sharif Clinic designed for?",
          answer:
            "Physicians, healthcare personnel, engineers, AI researchers, bioinformaticians, early-stage health-tech startups, as well as hospitals and clinics seeking digital transformation and improved patient outcomes.",
        },
        {
          question:
            "How does a Venture Studio differ from a Startup Accelerator?",
          answer:
            "In our Venture Studio, products and ventures are built from the ground up by Sharif Clinic's internal multidisciplinary team; in the Accelerator, existing startup teams with early prototypes receive smart capital, mentorship, and commercial hospital pilot access.",
        },
        {
          question: "Are submitted ideas and pitch decks protected by an NDA?",
          answer:
            "Yes. Intellectual property protection and information security are paramount at Sharif Clinic. All reviews are conducted under strict confidentiality and legal discretion.",
        },
        {
          question: "How long does the application review process take?",
          answer:
            "Following form submission, our scientific and investment committee completes initial screening within 48 business hours and reaches out to schedule an in-person or virtual consultation.",
        },
      ],
    },
    consultationModal: {
      title: "Submit Pitch, Idea & Partnership Request",
      description:
        "Provide your initial information so Sharif Clinic's acceleration team can connect with you promptly.",
      successTitle: "Your Request Has Been Submitted Successfully!",
      successDescription:
        "Thank you for reaching out. Sharif Clinic's evaluation team will review your submission and contact you within 48 business hours.",
      successCta: "Understood",
      fullNameLabel: "Full Name",
      fullNamePlaceholder: "e.g. Dr. Alex Morgan",
      phoneLabel: "Phone Number",
      phonePlaceholder: "+1 ... or 0912...",
      emailLabel: "Email Address (Optional)",
      emailPlaceholder: "name@example.com",
      cooperationTypeLabel: "Collaboration Topic",
      cooperationOptions: {
        startup_idea: "Submit Idea to Venture Studio",
        investment: "Apply for Funding & Acceleration",
        hospital_integration: "Hospital or Clinic Smart Integration",
        general_inquiry: "Other Scientific & Industry Collaborations",
      },
      descriptionLabel: "Project Summary or Your Message",
      descriptionPlaceholder:
        "Briefly outline the healthcare challenge, your proposed solution, and project stage...",
      submitCta: "Submit Application",
      submittingText: "Submitting...",
      errors: {
        nameRequired: "Please enter your full name.",
        phoneInvalid: "Please enter a valid phone number.",
        genericError:
          "An error occurred while submitting. Please try again.",
      },
    },
    serviceDetailModal: {
      aboutLabel: "About this service:",
      featuresLabel: "Key Features & Capabilities:",
      closeCta: "Close",
      applyCta: "Request Partnership in this Area",
    },
    footer: {
      mission:
        "Sharif Clinic is a dedicated smart health accelerator and venture studio combining clinical excellence with the engineering precision of Sharif University of Technology to deliver groundbreaking solutions for healthcare.",
      badge1: "Specialized Health-Tech Accelerator",
      badge2: "Backing Innovators & Pioneers",
      quickLinksTitle: "Quick Links",
      studioLink: "Health Venture Studio",
      investmentLink: "Apply for Investment",
      contactTitle: "Contact Information & Address",
      address:
        "Tehran, West of Sharif University of Technology, Shahid Sadeghi St., No. 26, Unit 10",
      telegramText: "Direct Telegram Contact",
      copyrightText: "All rights reserved for Sharif Clinic.",
      tagline:
        "Bridging engineering innovation and clinical medicine for the future of healthcare",
    },
  },
};

