/* Alexandria Real Estate */
(function () {
  "use strict";

  document.documentElement.classList.add("js");
  if (document.body) document.body.classList.add("js");

  var PHONE = "971581048601";
  var PHONE_DISPLAY = "+971 58 104 8601";

  var i18n = {
    en: {
      "nav.home": "Home",
      "nav.properties": "Properties",
      "nav.services": "Services",
      "nav.about": "Why Us",
      "nav.agents": "Agents",
      "nav.faq": "FAQ",
      "nav.contact": "Contact",
      "nav.cta": "Book Consultation",
      "page.propTitle": "Properties",
      "page.propLead": "A curated selection of off-plan and ready homes across Dubai's strongest communities.",
      "page.aboutTitle": "About Alexandria",
      "page.aboutLead": "A licensed Dubai brokerage built for measured advice and careful execution.",
      "page.svcTitle": "Services",
      "page.svcLead": "End-to-end support from first conversation to handover and beyond.",
      "page.agentsTitle": "Our advisors",
      "page.agentsLead": "Bilingual specialists with deep market knowledge and a private-office approach.",
      "page.faqTitle": "FAQ",
      "page.faqLead": "Clear answers to the questions investors ask before they buy.",
      "page.contactTitle": "Contact",
      "page.contactLead": "Speak with a senior advisor. We respond within one business hour.",
      "agents.1n": "Layla Hassan",
      "agents.1r": "Senior Investment Advisor",
      "agents.1b": "Specialises in off-plan and Golden Visa acquisitions for regional investors.",
      "agents.2n": "Omar Farouk",
      "agents.2r": "Head of Client Advisory",
      "agents.2b": "Guides portfolio buyers across Dubai Marina, Downtown, and Creek Harbour.",
      "agents.3n": "Sofia Rahman",
      "agents.3r": "Residential Specialist",
      "agents.3b": "Supports end-user families with ready villas and community living options.",
      "agents.cta": "Message on WhatsApp",

      "hero.kicker": "Licensed Broker · RERA Certified · International Clients",
      "hero.title": "Own Property in Dubai with Confidence.",
      "hero.lead": "Whether you're purchasing your dream home, relocating your family, or expanding your investment portfolio, Alexandria helps you discover exceptional opportunities backed by local expertise and honest guidance.",
      "hero.cta1": "Book a Private Consultation",
      "hero.cta2": "Explore Properties",
      "hero.hot": "Live opportunities",
      "hero.proof1": "RERA licensed",
      "hero.proof2": "Bilingual advisors",
      "hero.proof3": "Same-day shortlist",
      "form.response": "Avg. reply 15 min",
      "hero.s1": "500+",
      "hero.s1l": "Properties Sold",
      "hero.s2": "AED 1.2B+",
      "hero.s2l": "Portfolio Managed",
      "hero.s3": "15 min",
      "hero.s3l": "Average Response",
      "form.private": "Instant matching",
      "form.title": "Get matched in 15 minutes",
      "form.sub": "Tell us your budget and goal. A senior advisor replies with tailored options that fit your objectives.",
      "form.name": "Full name",
      "form.phone": "Phone / WhatsApp",
      "form.email": "Email",
      "form.budget": "Budget",
      "form.interest": "Interest",
      "form.submit": "Get my options",
      "form.note": "Confidential. No spam. RERA-regulated advice only.",
      "form.okTitle": "Received",
      "form.okMsg": "Thank you. Continue on WhatsApp to speak with an advisor, or wait for our call.",
      "form.continueWa": "Continue on WhatsApp",
      "form.b1": "Under AED 1M",
      "form.b2": "AED 1M – 3M",
      "form.b3": "AED 3M – 7M",
      "form.b4": "AED 7M – 15M",
      "form.b5": "AED 15M+",
      "form.i1": "Off-plan investment",
      "form.i2": "Ready property",
      "form.i3": "Luxury villa",
      "form.i4": "Rental income",
      "form.i5": "Golden Visa property",
      "trust.1t": "Licensed Broker",
      "trust.1s": "RERA Certified · DLD #69664",
      "trust.2t": "International Clients",
      "trust.2s": "30+ nationalities served worldwide",
      "trust.3t": "Investment Specialists",
      "trust.3s": "Data-driven guidance, not sales pressure",
      "trust.4t": "Long-Term Partner",
      "trust.4s": "Support continues well after purchase",
      "prop.eye": "Featured Opportunities",
      "prop.title": "Curated Properties for Serious Buyers",
      "prop.lead": "Six premium opportunities hand-selected by our advisors — each with clear investment metrics and lifestyle context.",
      "prop.all": "All",
      "prop.offplan": "Off-plan",
      "prop.ready": "Ready",
      "prop.villa": "Villas",
      "prop.apt": "Apartments",
      "prop.view": "Details",
      "prop.ask": "Enquire",
      "prop.more": "Request full list",
      "svc.eye": "Why Alexandria",
      "svc.title": "More Than Property Experts",
      "svc.lead": "Buying property overseas is one of the biggest financial decisions you'll ever make. We simplify every step — from identifying the right opportunity to supporting you long after the transaction is complete.",
      "svc.1t": "Deep Market Knowledge",
      "svc.1d": "We track every community, developer, and payment structure in real time. Recommendations built on data, not commission.",
      "svc.2t": "Personalised Guidance",
      "svc.2d": "Your goals are unique. We build a strategy around your budget, timeline, and whether you're buying to live, rent, or hold.",
      "svc.3t": "End-to-End Support",
      "svc.3d": "From first consultation through handover, DLD registration, and post-purchase management — we handle every detail.",
      "svc.4t": "Golden Visa Pathway",
      "svc.4d": "Eligibility review, documentation, and coordination for 10-year residency through property investment.",
      "svc.5t": "Property Management",
      "svc.5d": "Leasing, tenant care, maintenance coordination, and owner reporting after purchase.",
      "svc.6t": "Long-Term Relationships",
      "svc.6d": "Many clients return for their second and third purchases. We measure success by the lifetime of the relationship.",
      "proc.eye": "Process",
      "proc.title": "A straightforward path to ownership",
      "proc.lead": "Four steps. Full transparency. No pressure.",
      "proc.1t": "Discovery",
      "proc.1d": "Goals, budget, and timeline. A shortlist within 24 hours.",
      "proc.2t": "Selection",
      "proc.2d": "Vetted options with payment plans, yields, and location context.",
      "proc.3t": "Viewing",
      "proc.3d": "Virtual or on-site tours with clear side-by-side comparison.",
      "proc.4t": "Completion",
      "proc.4d": "Contracts, DLD registration, escrow, and handover handled.",
      "why.eye": "Why Alexandria",
      "why.title": "A brokerage that works like a private office",
      "why.lead":
        "Deep familiarity with Dubai and Egyptian markets, and a bilingual team that serves local and international clients with equal care.",
      "why.q": "Toward a better real estate future — building it together.",
      "why.cite": "Alexandria Real Estate",
      "why.1t": "Local knowledge, institutional discipline",
      "why.1d": "Micro-market insight paired with clear process and documented advice.",
      "why.2t": "Transparent fees, zero pressure",
      "why.2d": "Honest recommendations. We only succeed when the acquisition is right for you.",
      "why.3t": "Direct developer relationships",
      "why.3d": "Preferred access to inventory, pricing, and payment structures.",
      "why.4t": "A long relationship, not a single deal",
      "why.4d": "From first purchase to portfolio growth and ongoing management.",
      "dev.eye": "Partners",
      "dev.title": "Developers we work with regularly",
      "calc.eye": "Planning tool",
      "calc.title": "Model a simple return scenario",
      "calc.lead": "Illustrative only. Adjust the assumptions to understand order-of-magnitude outcomes.",
      "calc.price": "Property price",
      "calc.down": "Down payment",
      "calc.yield": "Annual rental yield",
      "calc.apprec": "Annual appreciation",
      "calc.years": "Holding period",
      "calc.annual": "Annual rent",
      "calc.total": "Projected value",
      "calc.profit": "Estimated gain",
      "calc.roi": "Return on capital",
      "calc.cta": "Request a tailored analysis",
      "calc.note": "Estimates only. Actual results depend on asset, location, and market conditions.",
      "test.eye": "Clients",
      "test.title": "Trusted by investors who value clarity",
      "test.1q":
        "Alexandria helped me secure an off-plan residence that appreciated meaningfully before handover. Measured, responsive, and precise.",
      "test.1n": "Ahmed K.",
      "test.1r": "Investor · Cairo",
      "test.2q":
        "As a first-time buyer from Europe, I needed guidance at every step. The process from viewing to Golden Visa was handled with care.",
      "test.2n": "Sophie M.",
      "test.2r": "Homebuyer · Paris",
      "test.3q":
        "I manage a multi-property portfolio with Alexandria. After-sales and management have been consistently excellent.",
      "test.3n": "Rajesh P.",
      "test.3r": "Portfolio investor · Dubai",
      "faq.eye": "Questions",
      "faq.title": "What investors ask first",
      "faq.lead": "Direct answers to the decisions that matter.",
      "faq.cta": "Prefer a conversation?",
      "faq.btn": "Talk to an advisor",
      "faq.1q": "Can non-residents buy property in Dubai?",
      "faq.1a":
        "Yes. Non-UAE nationals may purchase freehold property in designated areas. Ownership is freehold with a Dubai Land Department title deed.",
      "faq.2q": "What investment supports a Golden Visa?",
      "faq.2a":
        "Property investment of AED 2 million or more may qualify for a 10-year UAE Golden Visa. We advise on eligibility and documentation.",
      "faq.3q": "Which payment plans are typical for off-plan?",
      "faq.3a":
        "Common structures include 60/40, 50/50, and post-handover plans, often with 10–20% down payments. We secure the best available terms.",
      "faq.4q": "How long does a purchase take?",
      "faq.4a":
        "Ready properties often complete in 2–4 weeks. Off-plan registration is quick; handover follows the construction programme.",
      "faq.5q": "What fees should I budget for?",
      "faq.5a":
        "Typically 4% DLD transfer fee, agency commission where applicable, trustee fees, and NOC charges. We provide a full breakdown in advance.",
      "faq.6q": "Do you assist non-residents with financing?",
      "faq.6a":
        "Yes. We introduce clients to UAE banks that finance non-residents, commonly up to 50–60% LTV depending on profile.",
      "cta.title": "Let's Find the Right Property for You.",
      "cta.lead": "Every investor has different goals. Let's understand yours and recommend opportunities that fit — not just what's available.",
      "cta.1": "Schedule Your Consultation",
      "cta.2": "WhatsApp an Advisor",
      "con.eye": "Contact",
      "con.title": "Start a private conversation",
      "con.lead": "Write to us or call directly. We respond within one business hour.",
      "con.info": "Direct lines",
      "con.infoSub": "Prefer messaging? WhatsApp is the fastest route.",
      "con.phone": "Phone / WhatsApp",
      "con.email": "Email",
      "con.hours": "Hours",
      "con.hoursV": "Sun–Thu · 9:00 – 19:00 GST",
      "con.license": "RERA licence",
      "con.formTitle": "Send a message",
      "con.formSub": "We reply within one business hour.",
      "con.fname": "First name",
      "con.lname": "Last name",
      "con.message": "Message",
      "con.send": "Send message",
      "con.okTitle": "Message sent",
      "con.okMsg": "Thank you. Our team will be in touch shortly.",
      "foot.about":
        "Licensed real estate brokerage in Dubai. Connecting clients with carefully selected property opportunities across the UAE.",
      "foot.explore": "Explore",
      "foot.services": "Services",
      "foot.legal": "Legal",
      "foot.rights": "© 2026 Alexandria Real Estate. All rights reserved.",
      "foot.privacy": "Privacy",
      "foot.terms": "Terms",
      "pop.eye": "Complimentary guide",
      "pop.title": "Dubai Investment Brief 2026",
      "pop.sub": "Market context, communities, yield ranges, and payment structures — a concise PDF.",
      "pop.submit": "Send the brief",
      "pop.ok": "Thank you. Check your messages shortly.",
      "wa.msg": "Hello Alexandria RE. I'd like to schedule a consultation about Dubai property."
    },
    ar: {
      "nav.home": "الرئيسية",
      "nav.properties": "العقارات",
      "nav.services": "الخدمات",
      "nav.about": "لماذا نحن",
      "nav.agents": "الوكلاء",
      "nav.faq": "الأسئلة",
      "nav.contact": "تواصل",
      "nav.cta": "استشارة",
      "page.propTitle": "العقارات",
      "page.propLead": "مجموعة منتقاة من العقارات على الخارطة والجاهزة في أقوى مجتمعات دبي.",
      "page.aboutTitle": "عن الإسكندرية",
      "page.aboutLead": "وساطة مرخّصة في دبي مبنية على نصيحة مدروسة وتنفيذ دقيق.",
      "page.svcTitle": "الخدمات",
      "page.svcLead": "دعم متكامل من أول محادثة حتى التسليم وما بعده.",
      "page.agentsTitle": "مستشارونا",
      "page.agentsLead": "متخصصون ثنائيو اللغة بمعرفة سوقية عميقة وأسلوب مكتب خاص.",
      "page.faqTitle": "الأسئلة الشائعة",
      "page.faqLead": "إجابات واضحة لأسئلة المستثمرين قبل الشراء.",
      "page.contactTitle": "تواصل",
      "page.contactLead": "تحدث مع مستشار أول. نرد خلال ساعة عمل واحدة.",
      "agents.1n": "ليلى حسن",
      "agents.1r": "مستشارة استثمار أولى",
      "agents.1b": "متخصصة في عقارات على الخارطة والتأشيرة الذهبية للمستثمرين الإقليميين.",
      "agents.2n": "عمر فاروق",
      "agents.2r": "رئيس استشارات العملاء",
      "agents.2b": "يرشد مشتري المحافظ في مارينا وداون تاون وكريك هاربور.",
      "agents.3n": "صوفيا رحمن",
      "agents.3r": "أخصائية سكنية",
      "agents.3b": "تدعم العائلات في الفلل الجاهزة وخيارات العيش المجتمعي.",
      "agents.cta": "راسل عبر واتساب",

      "hero.kicker": "وساطة مرخّصة · معتمدة من ريرا · عملاء دوليون",
      "hero.title": "تملك عقاراً في دبي بثقة.",
      "hero.lead": "سواء كنت تشتري منزلك أو تنقل عائلتك أو توسع محفظتك الاستثمارية، تساعدك الإسكندرية في اكتشاف فرص استثنائية مدعومة بخبرة محلية وإرشاد صادق.",
      "hero.cta1": "احجز استشارة خاصة",
      "hero.cta2": "استكشف العقارات",
      "hero.hot": "فرص متاحة الآن",
      "hero.proof1": "مرخّص من ريرا",
      "hero.proof2": "مستشارون ثنائيو اللغة",
      "hero.proof3": "قائمة قصيرة في نفس اليوم",
      "form.response": "متوسط الرد 15 دقيقة",
      "hero.s1": "+500",
      "hero.s1l": "صفقة بإشرافنا",
      "hero.s2": "+1.2 مليار درهم",
      "hero.s2l": "قيمة محافظ العملاء",
      "hero.s3": "15 دقيقة",
      "hero.s3l": "متوسط زمن الرد",
      "form.private": "مطابقة فورية",
      "form.title": "خيارات مناسبة خلال 15 دقيقة",
      "form.sub": "أخبرنا بميزانيتك وهدفك. يرد مستشار أول عبر واتساب بخيارات مخصصة.",
      "form.name": "الاسم الكامل",
      "form.phone": "الهاتف / واتساب",
      "form.email": "البريد",
      "form.budget": "الميزانية",
      "form.interest": "الاهتمام",
      "form.submit": "أرسل خياراتي",
      "form.note": "سرية تامة. بلا رسائل مزعجة. استشارات مرخّصة فقط.",
      "form.okTitle": "تم الاستلام",
      "form.okMsg": "شكراً لك. تابع عبر واتساب للتحدث مع مستشار، أو انتظر اتصالنا.",
      "form.continueWa": "المتابعة عبر واتساب",
      "form.b1": "أقل من مليون درهم",
      "form.b2": "1 – 3 مليون",
      "form.b3": "3 – 7 مليون",
      "form.b4": "7 – 15 مليون",
      "form.b5": "أكثر من 15 مليون",
      "form.i1": "استثمار على الخارطة",
      "form.i2": "عقار جاهز",
      "form.i3": "فيلا فاخرة",
      "form.i4": "دخل إيجاري",
      "form.i5": "عقار التأشيرة الذهبية",
      "trust.1t": "وساطة مرخّصة",
      "trust.1s": "معتمدة من ريرا · دائرة الأراضي #69664",
      "trust.2t": "عملاء دوليون",
      "trust.2s": "نخدم أكثر من 30 جنسية حول العالم",
      "trust.3t": "متخصصون استثماريون",
      "trust.3s": "إرشاد مبني على البيانات لا الضغط البيعي",
      "trust.4t": "شراكة طويلة الأمد",
      "trust.4s": "الدعم يستمر بعد الصفقة",
      "prop.eye": "مخزون مختار",
      "prop.title": "عقارات مختارة للعائد وقيمة الإقامة",
      "prop.lead": "قائمة قصيرة من الفرص في أكثر مناطق دبي طلباً.",
      "prop.all": "الكل",
      "prop.offplan": "على الخارطة",
      "prop.ready": "جاهز",
      "prop.villa": "فلل",
      "prop.apt": "شقق",
      "prop.view": "التفاصيل",
      "prop.ask": "استفسر",
      "prop.more": "اطلب القائمة الكاملة",
      "svc.eye": "لماذا الإسكندرية",
      "svc.title": "أكثر من مجرد خبراء عقارات",
      "svc.lead": "شراء عقار في الخارج من أكبر القرارات المالية. نبسّط كل خطوة — من تحديد الفرصة المناسبة إلى دعمكم بعد الصفقة.",
      "svc.1t": "استثمار على الخارطة",
      "svc.1d": "وصول مبكر للإطلاقات وخطط السداد وفرص النمو مع مطورين موثوقين.",
      "svc.2t": "منازل جاهزة",
      "svc.2d": "مساكن جاهزة في مجتمعات راسخة مع مقارنات إيجار وإعادة بيع شفافة.",
      "svc.3t": "الاستشارات الاستثمارية",
      "svc.3d": "إحاطات سوقية ونمذجة العائد وقرارات المحفظة وفق أفقك ومخاطرك.",
      "svc.4t": "إدارة العقارات",
      "svc.4d": "تأجير ورعاية مستأجرين وصيانة وتقارير للمالك بعد الشراء.",
      "svc.5t": "مسار التأشيرة الذهبية",
      "svc.5d": "مراجعة الأهلية والوثائق والتنسيق للإقامة عبر الاستثمار العقاري.",
      "svc.6t": "دعم ما بعد البيع",
      "svc.6d": "التسجيل وشهادة عدم الممانعة وفحص العيوب والتسليم بعناية بعد العقد.",
      "proc.eye": "العملية",
      "proc.title": "مسار واضح للملكية",
      "proc.lead": "أربع خطوات. شفافية كاملة. بلا ضغط.",
      "proc.1t": "التعارف",
      "proc.1d": "الأهداف والميزانية والجدول. قائمة قصيرة خلال 24 ساعة.",
      "proc.2t": "الاختيار",
      "proc.2d": "خيارات مفحوصة مع خطط السداد والعوائد وسياق الموقع.",
      "proc.3t": "المعاينة",
      "proc.3d": "جولات افتراضية أو ميدانية مع مقارنة واضحة.",
      "proc.4t": "الإتمام",
      "proc.4d": "العقود والتسجيل والحساب الضمان والتسليم نتولاها.",
      "why.eye": "لماذا الإسكندرية",
      "why.title": "وساطة تعمل كمكتب خاص",
      "why.lead":
        "معرفة عميقة بأسواق دبي ومصر، وفريق ثنائي اللغة يخدم العملاء المحليين والدوليين بعناية متساوية.",
      "why.q": "نحو مستقبل عقاري أفضل — نبنيه معاً.",
      "why.cite": "الإسكندرية للعقارات",
      "why.1t": "معرفة محلية وانضباط مؤسسي",
      "why.1d": "رؤية للأسواق المصغّرة مع عملية واضحة ونصيحة موثّقة.",
      "why.2t": "رسوم شفافة بلا ضغط",
      "why.2d": "توصيات صادقة. ننجح فقط عندما يكون الشراء مناسباً لك.",
      "why.3t": "علاقات مباشرة مع المطورين",
      "why.3d": "وصول مفضل للمخزون والأسعار وهياكل السداد.",
      "why.4t": "علاقة طويلة لا صفقة واحدة",
      "why.4d": "من أول شراء إلى نمو المحفظة والإدارة المستمرة.",
      "dev.eye": "الشركاء",
      "dev.title": "مطورون نعمل معهم بانتظام",
      "calc.eye": "أداة تخطيط",
      "calc.title": "نمذجة سيناريو عائد مبسط",
      "calc.lead": "للتوضيح فقط. عدّل الافتراضات لفهم النتائج التقريبية.",
      "calc.price": "سعر العقار",
      "calc.down": "الدفعة الأولى",
      "calc.yield": "العائد الإيجاري السنوي",
      "calc.apprec": "الارتفاع السنوي",
      "calc.years": "مدة الاحتفاظ",
      "calc.annual": "الإيجار السنوي",
      "calc.total": "القيمة المتوقعة",
      "calc.profit": "الربح التقديري",
      "calc.roi": "العائد على رأس المال",
      "calc.cta": "اطلب تحليلاً مخصصاً",
      "calc.note": "تقديرات فقط. النتائج الفعلية تعتمد على الأصل والموقع وظروف السوق.",
      "test.eye": "العملاء",
      "test.title": "يثق بنا مستثمرون يقدّرون الوضوح",
      "test.1q":
        "ساعدتني الإسكندرية في تأمين وحدة على الخارطة ارتفعت قيمتها قبل التسليم. دقة واستجابة واحتراف.",
      "test.1n": "أحمد ك.",
      "test.1r": "مستثمر · القاهرة",
      "test.2q":
        "كمشترٍ أول مرة من أوروبا احتجت إرشاداً في كل خطوة. من المعاينة حتى التأشيرة الذهبية بعناية.",
      "test.2n": "صوفي م.",
      "test.2r": "مشترية · باريس",
      "test.3q":
        "أدير محفظة متعددة عبر الإسكندرية. خدمة ما بعد البيع والإدارة ممتازة باستمرار.",
      "test.3n": "راجيش ب.",
      "test.3r": "مستثمر محافظ · دبي",
      "faq.eye": "أسئلة",
      "faq.title": "ما يسأله المستثمرون أولاً",
      "faq.lead": "إجابات مباشرة للقرارات المهمة.",
      "faq.cta": "تفضل محادثة؟",
      "faq.btn": "تحدث مع مستشار",
      "faq.1q": "هل يمكن لغير المقيمين الشراء في دبي؟",
      "faq.1a":
        "نعم. يمكن لغير مواطني الإمارات شراء عقارات التملك الحر في المناطق المحددة بصك ملكية من دائرة الأراضي.",
      "faq.2q": "ما الاستثمار الداعم للتأشيرة الذهبية؟",
      "faq.2a":
        "استثمار عقاري بقيمة مليوني درهم أو أكثر قد يؤهل لتأشيرة ذهبية لعشر سنوات. نرشدك في الأهلية والوثائق.",
      "faq.3q": "ما خطط السداد الشائعة على الخارطة؟",
      "faq.3a":
        "هياكل شائعة مثل 60/40 و50/50 وبعد التسليم، وغالباً بدفعة أولى 10–20%. نحصّل أفضل الشروط المتاحة.",
      "faq.4q": "كم يستغرق إتمام الشراء؟",
      "faq.4a":
        "العقارات الجاهزة غالباً خلال 2–4 أسابيع. تسجيل على الخارطة سريع؛ التسليم يتبع برنامج البناء.",
      "faq.5q": "ما الرسوم المتوقعة؟",
      "faq.5a":
        "عادة 4% رسوم نقل ملكية دائرة الأراضي وعمولة عند الانطباق ورسوم أمين وشهادة عدم ممانعة. نقدّم تفصيلاً مسبقاً.",
      "faq.6q": "هل تساعدون غير المقيمين في التمويل؟",
      "faq.6a":
        "نعم. نقدّم العملاء لبنوك إماراتية تموّل غير المقيمين، غالباً حتى 50–60% من القيمة حسب الملف.",
      "cta.title": "لنجد العقار المناسب لك.",
      "cta.lead": "كل مستثمر أهداف مختلفة. لنفهم أهدافك ونوصي بفرص تناسبك — وليس فقط ما هو متاح.",
      "cta.1": "احجز استشارتك الخاصة",
      "cta.2": "واتساب مستشار",
      "con.eye": "تواصل",
      "con.title": "ابدأ محادثة خاصة",
      "con.lead": "راسلنا أو اتصل مباشرة. نرد خلال ساعة عمل.",
      "con.info": "خطوط مباشرة",
      "con.infoSub": "تفضل المراسلة؟ واتساب هو الأسرع.",
      "con.phone": "الهاتف / واتساب",
      "con.email": "البريد",
      "con.hours": "الساعات",
      "con.hoursV": "الأحد–الخميس · 9:00 – 19:00 بتوقيت الخليج",
      "con.license": "رخصة ريرا",
      "con.formTitle": "أرسل رسالة",
      "con.formSub": "نرد خلال ساعة عمل.",
      "con.fname": "الاسم الأول",
      "con.lname": "اسم العائلة",
      "con.message": "الرسالة",
      "con.send": "إرسال",
      "con.okTitle": "تم الإرسال",
      "con.okMsg": "شكراً لك. سيتواصل فريقنا قريباً.",
      "foot.about":
        "وساطة عقارية مرخّصة في دبي. نربط العملاء بفرص عقارية مختارة بعناية في أنحاء الإمارات.",
      "foot.explore": "استكشف",
      "foot.services": "الخدمات",
      "foot.legal": "قانوني",
      "foot.rights": "© 2026 الإسكندرية للعقارات. جميع الحقوق محفوظة.",
      "foot.privacy": "الخصوصية",
      "foot.terms": "الشروط",
      "pop.eye": "دليل مجاني",
      "pop.title": "موجز استثمار دبي 2026",
      "pop.sub": "سياق السوق والمجتمعات ونطاقات العائد وخطط السداد — PDF موجز.",
      "pop.submit": "أرسل الموجز",
      "pop.ok": "شكراً لك. تحقق من رسائلك قريباً.",
      "wa.msg": "مرحباً الإسكندرية للعقارات. أريد حجز استشارة بخصوص عقارات دبي."
    }
  };

  var lang = "en";
  try {
    var stored = localStorage.getItem("are-lang");
    if (stored === "ar" || stored === "en") lang = stored;
  } catch (e) {}

  function t(key) {
    if (i18n[lang] && Object.prototype.hasOwnProperty.call(i18n[lang], key)) {
      return i18n[lang][key];
    }
    if (Object.prototype.hasOwnProperty.call(i18n.en, key)) return i18n.en[key];
    return key;
  }

  function applyLang() {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.body.classList.toggle("lang-ar", lang === "ar");

    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      var key = el.getAttribute("data-i18n");
      var val = t(key);
      if (el.getAttribute("data-i18n-html") !== null) el.innerHTML = val;
      else el.textContent = val;
    }

    var placeholders = document.querySelectorAll("[data-i18n-placeholder]");
    for (var p = 0; p < placeholders.length; p++) {
      placeholders[p].placeholder = t(placeholders[p].getAttribute("data-i18n-placeholder"));
    }

    var options = document.querySelectorAll("[data-i18n-option]");
    for (var o = 0; o < options.length; o++) {
      options[o].textContent = t(options[o].getAttribute("data-i18n-option"));
    }

    var toggles = document.querySelectorAll(".lang-toggle button");
    for (var b = 0; b < toggles.length; b++) {
      var isActive = toggles[b].getAttribute("data-lang") === lang;
      toggles[b].classList.toggle("active", isActive);
      toggles[b].setAttribute("aria-pressed", isActive ? "true" : "false");
    }

    var wa = encodeURIComponent(t("wa.msg"));
    var waLinks = document.querySelectorAll("[data-wa]");
    for (var w = 0; w < waLinks.length; w++) {
      waLinks[w].href = "https://api.whatsapp.com/send?phone=" + PHONE + "&text=" + wa;
      waLinks[w].setAttribute("target", "_blank");
      waLinks[w].setAttribute("rel", "noopener noreferrer");
    }

    try {
      localStorage.setItem("are-lang", lang);
    } catch (err) {}
  }

  function setLang(next) {
    if (next !== "en" && next !== "ar") return;
    lang = next;
    applyLang();
  }

  document.addEventListener("click", function (e) {
    var btn = e.target.closest(".lang-toggle button[data-lang]");
    if (!btn) return;
    e.preventDefault();
    e.stopPropagation();
    setLang(btn.getAttribute("data-lang"));
  });

  var header = document.querySelector(".site-header") || document.getElementById("site-header");
  function onScroll() {
    if (!header) return;
    // Solid premium bar always; scrolled only deepens shadow
    header.classList.add("scrolled");
    if (window.scrollY > 8) header.classList.add("is-deep");
    else header.classList.remove("is-deep");
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* Mobile hamburger menu */
  var menuToggle = document.querySelector(".menu-toggle");
  var mobileNav = document.getElementById("mobile-nav") || document.querySelector(".mobile-nav");

  function closeMobileMenu() {
    if (!mobileNav || !menuToggle) return;
    mobileNav.classList.remove("open");
    mobileNav.setAttribute("aria-hidden", "true");
    menuToggle.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("nav-open");
    document.body.style.overflow = "";
  }

  function openMobileMenu() {
    if (!mobileNav || !menuToggle) return;
    mobileNav.classList.add("open");
    mobileNav.setAttribute("aria-hidden", "false");
    menuToggle.classList.add("open");
    menuToggle.setAttribute("aria-expanded", "true");
    document.body.classList.add("nav-open");
    document.body.style.overflow = "hidden";
  }

  function toggleMobileMenu(e) {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (!mobileNav || !menuToggle) return;
    if (mobileNav.classList.contains("open")) closeMobileMenu();
    else openMobileMenu();
  }

  if (menuToggle && mobileNav) {
    closeMobileMenu();
    menuToggle.addEventListener("click", toggleMobileMenu);
    menuToggle.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleMobileMenu(e);
      }
    });
    mobileNav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        closeMobileMenu();
      });
    });
    // Close when clicking dark backdrop area outside links (optional: whole panel is menu)
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMobileMenu();
    });
  }

  var sections = document.querySelectorAll("section[id]");
  var navLinks = document.querySelectorAll(".nav a");
  window.addEventListener(
    "scroll",
    function () {
      var current = "";
      for (var i = 0; i < sections.length; i++) {
        if (window.scrollY >= sections[i].offsetTop - 120) current = sections[i].id;
      }
      for (var n = 0; n < navLinks.length; n++) {
        navLinks[n].classList.toggle("active", navLinks[n].getAttribute("href") === "#" + current);
      }
    },
    { passive: true }
  );

  document.querySelectorAll(".filter-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      document.querySelectorAll(".filter-btn").forEach(function (b) {
        b.classList.remove("active");
      });
      btn.classList.add("active");
      var filter = btn.getAttribute("data-filter");
      document.querySelectorAll(".prop-card").forEach(function (card) {
        var cat = card.getAttribute("data-category") || "";
        card.style.display = filter === "all" || cat.indexOf(filter) !== -1 ? "" : "none";
      });
    });
  });

  document.querySelectorAll(".faq-q").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var item = btn.parentElement;
      var open = item.classList.contains("open");
      document.querySelectorAll(".faq-item").forEach(function (i) {
        i.classList.remove("open");
      });
      if (!open) item.classList.add("open");
    });
  });

  var priceEl = document.getElementById("calc-price");
  var downEl = document.getElementById("calc-down");
  var yieldEl = document.getElementById("calc-yield");
  var apprecEl = document.getElementById("calc-apprec");
  var yearsEl = document.getElementById("calc-years");

  function formatAED(n) {
    if (n >= 1e6) return "AED " + (n / 1e6).toFixed(2) + "M";
    if (n >= 1e3) return "AED " + Math.round(n / 1e3) + "K";
    return "AED " + Math.round(n);
  }

  function updateCalc() {
    if (!priceEl || !downEl || !yieldEl || !apprecEl || !yearsEl) return;
    var price = +priceEl.value;
    var downPct = +downEl.value;
    var yld = +yieldEl.value / 100;
    var apprec = +apprecEl.value / 100;
    var years = +yearsEl.value;

    var map = {
      "val-price": formatAED(price),
      "val-down": downPct + "%",
      "val-yield": yieldEl.value + "%",
      "val-apprec": apprecEl.value + "%",
      "val-years": years + (years === 1 ? " yr" : " yrs")
    };
    Object.keys(map).forEach(function (id) {
      var el = document.getElementById(id);
      if (el) el.textContent = map[id];
    });

    var annualRent = price * yld;
    var futureValue = price * Math.pow(1 + apprec, years);
    var profit = futureValue - price + annualRent * years;
    var invested = price * (downPct / 100);
    var roi = invested > 0 ? ((profit / invested) * 100).toFixed(0) : "0";

    var res = {
      "res-annual": formatAED(annualRent),
      "res-total": formatAED(futureValue),
      "res-profit": formatAED(profit),
      "res-roi": roi + "%"
    };
    Object.keys(res).forEach(function (id) {
      var el = document.getElementById(id);
      if (el) el.textContent = res[id];
    });
  }

  [priceEl, downEl, yieldEl, apprecEl, yearsEl].forEach(function (el) {
    if (el) el.addEventListener("input", updateCalc);
  });
  updateCalc();

  function waUrl(text) {
    return (
      "https://api.whatsapp.com/send?phone=" +
      PHONE +
      "&text=" +
      encodeURIComponent(text || t("wa.msg"))
    );
  }

  function openWhatsApp(text) {
    var a = document.createElement("a");
    a.href = waUrl(text);
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  function handleForm(formId, successId) {
    var form = document.getElementById(formId);
    var success = document.getElementById(successId);
    if (!form) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var data = new FormData(form);
      var name = data.get("name") || data.get("fname") || "Guest";
      var phone = data.get("phone") || "";
      var interest = data.get("interest") || data.get("message") || "General enquiry";
      var budget = data.get("budget") || "";
      var plain =
        "Hello Alexandria RE\n\nName: " +
        name +
        "\nPhone: " +
        phone +
        "\nInterest: " +
        interest +
        (budget ? "\nBudget: " + budget : "") +
        "\n\nSubmitted via website.";

      form.style.display = "none";
      if (success) {
        success.classList.add("show");
        var cont = success.querySelector("[data-wa-continue]");
        if (cont) {
          cont.setAttribute("href", waUrl(plain));
          cont.setAttribute("target", "_blank");
          cont.setAttribute("rel", "noopener noreferrer");
        }
      }
      openWhatsApp(plain);
      form.reset();
    });
  }

  handleForm("hero-form", "hero-form-success");
  handleForm("contact-form", "contact-form-success");
  handleForm("popup-form", "popup-form-success");

  document.querySelectorAll("[data-inquire]").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      var title = btn.getAttribute("data-inquire") || "a property";
      openWhatsApp(
        "Hello Alexandria RE,\n\nI am interested in: " +
          title +
          "\n\nPlease share details and availability."
      );
    });
  });

  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var obs = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("on");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -20px 0px" }
    );
    revealEls.forEach(function (el) {
      obs.observe(el);
    });
  }
  setTimeout(function () {
    revealEls.forEach(function (el) {
      el.classList.add("on");
    });
  }, 800);

  var modal = document.getElementById("lead-modal");
  var shown = false;
  try {
    shown = sessionStorage.getItem("are-popup") === "1";
  } catch (e) {}

  function openModal() {
    if (shown || !modal) return;
    modal.classList.add("open");
    shown = true;
    try {
      sessionStorage.setItem("are-popup", "1");
    } catch (err) {}
    document.body.style.overflow = "hidden";
  }
  function closeModal() {
    if (!modal) return;
    modal.classList.remove("open");
    document.body.style.overflow = "";
  }

  document.addEventListener("mouseout", function (e) {
    if (e.clientY < 8 && !e.relatedTarget) openModal();
  });
  setTimeout(openModal, 60000);

  if (modal) {
    var closeBtn = modal.querySelector(".modal-close");
    if (closeBtn) closeBtn.addEventListener("click", closeModal);
    modal.addEventListener("click", function (e) {
      if (e.target === modal) closeModal();
    });
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeModal();
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth >= 1100) closeMobileMenu();
  });

  var stickyCta = document.querySelector(".sticky-cta");
  if (stickyCta) {
    window.addEventListener(
      "scroll",
      function () {
        stickyCta.classList.toggle("show", window.scrollY > 480);
      },
      { passive: true }
    );
  }


  // Multi-page active navigation
  (function () {
    var path = location.pathname.replace(/\/+$/, '').split('/').pop() || '';
    if (!path || path === 'index.html') path = '/';
    else path = '/' + path + '/';
    document.querySelectorAll('.nav a, .mobile-nav a, .footer-col a').forEach(function (a) {
      var href = (a.getAttribute('href') || '').replace(/\/+$/, '') + '/';
      if (href === path || (path === '/' && (href === '/' || href === '//'))) {
        a.classList.add('active');
      }
    });
  })();

  document.querySelectorAll(".reveal").forEach(function (el) {
    el.classList.add("on");
    el.style.opacity = "1";
    el.style.transform = "none";
  });





  (function initHeroBannerRotator() {
    var root = document.getElementById("hero-bg-rotator");
    if (!root) return;
    var slides = Array.prototype.slice.call(root.querySelectorAll(".hero-bg-slide"));
    var dots = Array.prototype.slice.call(document.querySelectorAll("#hero-bg-dots [data-dot]"));
    var progress = document.getElementById("hero-bg-progress");
    var btnPrev = document.getElementById("hero-bg-prev");
    var btnNext = document.getElementById("hero-bg-next");
    var btnPause = document.getElementById("hero-bg-pause");
    var capTag = document.getElementById("hero-cap-tag");
    var capTitle = document.getElementById("hero-cap-title");
    var capMeta = document.getElementById("hero-cap-meta");
    var capPrice = document.getElementById("hero-cap-price");
    var total = slides.length;
    if (!total) return;
    var data = [];
    try {
      data = JSON.parse((root.getAttribute("data-slides") || "[]").replace(/&quot;/g, '"'));
    } catch (e) { data = []; }
    var index = 0, paused = false, hovering = false, reduceMotion = false, timer = null;
    try { reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (e) {}
    var interval = parseInt(root.getAttribute("data-interval") || "5500", 10);
    if (isNaN(interval) || interval < 3000) interval = 5500;
    function setPausedUI(p) {
      if (!btnPause) return;
      btnPause.setAttribute("aria-pressed", p ? "true" : "false");
      var a = btnPause.querySelector(".icon-pause"), b = btnPause.querySelector(".icon-play");
      if (a) a.style.display = p ? "none" : "";
      if (b) b.style.display = p ? "" : "none";
    }
    function updateCaption(i) {
      var d = data[i] || {};
      if (capTag) capTag.textContent = d.tag || "";
      if (capTitle) capTitle.textContent = d.title || "";
      if (capMeta) capMeta.textContent = d.meta || "";
      if (capPrice) capPrice.textContent = d.price || "";
    }
    function goTo(i) {
      index = (i + total) % total;
      slides.forEach(function (s, si) {
        var on = si === index;
        s.classList.toggle("is-active", on);
        s.setAttribute("aria-hidden", on ? "false" : "true");
      });
      dots.forEach(function (d, di) { d.classList.toggle("is-active", di === index); });
      updateCaption(index);
      restartProgress();
    }
    function restartProgress() {
      if (!progress) return;
      progress.classList.remove("is-running");
      progress.style.animationDuration = "";
      progress.style.width = "0%";
      void progress.offsetWidth;
      if (paused || hovering || reduceMotion) return;
      progress.style.animationDuration = interval + "ms";
      progress.classList.add("is-running");
    }
    function next() { goTo(index + 1); }
    function prev() { goTo(index - 1); }
    function stopTimer() { if (timer) { clearInterval(timer); timer = null; } }
    function startTimer() {
      stopTimer();
      if (paused || hovering || reduceMotion) return;
      timer = setInterval(next, interval);
      restartProgress();
    }
    function pauseToggle() {
      paused = !paused;
      setPausedUI(paused);
      if (paused) { stopTimer(); if (progress) progress.classList.remove("is-running"); }
      else startTimer();
    }
    if (btnNext) btnNext.addEventListener("click", function () { next(); if (!paused) startTimer(); });
    if (btnPrev) btnPrev.addEventListener("click", function () { prev(); if (!paused) startTimer(); });
    if (btnPause) btnPause.addEventListener("click", pauseToggle);
    dots.forEach(function (dot) {
      dot.addEventListener("click", function () {
        goTo(parseInt(dot.getAttribute("data-dot"), 10) || 0);
        if (!paused) startTimer();
      });
    });
    var hero = document.querySelector(".hero");
    if (hero) {
      hero.addEventListener("mouseenter", function () {
        hovering = true; stopTimer(); if (progress) progress.classList.remove("is-running");
      });
      hero.addEventListener("mouseleave", function () {
        hovering = false; if (!paused) startTimer();
      });
      var touchX = null;
      hero.addEventListener("touchstart", function (e) {
        if (e.changedTouches && e.changedTouches.length) touchX = e.changedTouches[0].clientX;
      }, { passive: true });
      hero.addEventListener("touchend", function (e) {
        if (touchX == null || !e.changedTouches || !e.changedTouches.length) return;
        var dx = e.changedTouches[0].clientX - touchX;
        touchX = null;
        if (Math.abs(dx) > 50) {
          if (dx < 0) next(); else prev();
          if (!paused) startTimer();
        }
      }, { passive: true });
    }
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) { stopTimer(); if (progress) progress.classList.remove("is-running"); }
      else if (!paused && !hovering) startTimer();
    });
    goTo(0);
    if (!reduceMotion) startTimer(); else setPausedUI(true);
  })();

  applyLang();
})();
