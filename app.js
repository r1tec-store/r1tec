(() => {
  const C = window.R1TEC;
  const GH = "https://github.com/r1tec-store";

  // ---------- Texts ----------
  const T = {
    ar: {
      title: "R1tec — متجرك الرقمي",
      nav_apps: "تطبيقاتنا", nav_products: "المنتجات", nav_contact: "تواصل معنا",
      hero_eyebrow: "R1tec Digital Products",
      hero_title: "تطبيقات Android TV <em>واشتراكات رقمية</em> في مكان واحد",
      hero_lead: "حمّل تطبيقاتنا مجاناً واطلب اشتراكاتك المفضلة مباشرة عبر واتساب — حسابات مضمونة وتفعيل فوري.",
      hero_cta_apps: "تطبيقاتنا", hero_cta_products: "تصفح المنتجات",
      trust_1: "حسابات مضمونة", trust_2: "تفعيل فوري", trust_3: "خدمة موثوقة",
      apps_title: "تطبيقاتنا", apps_sub: "تطبيقات من تطوير R1tec لأجهزة Android TV والهواتف وويندوز",
      products_title: "المنتجات", products_sub: "اختر المنتج واضغط للطلب — سنرد عليك على واتساب",
      all: "الكل", order: "اطلب عبر واتساب",
      download: "تحميل APK", download_win: "نسخة ويندوز", source: "GitHub", help: "مساعدة عبر واتساب",
      dl_code: "كود Downloader", dl_hint: "اكتبه في تطبيق Downloader على التلفاز",
      contact_title: "عندك سؤال؟", contact_sub: "راسلنا على واتساب وسنرد عليك بسرعة.",
      contact_wa: "راسلنا على واتساب",
      footer: "متجرك الرقمي",
      disclaimer: "R1TV Player مشغل فقط ولا يوفر أي قنوات أو اشتراكات IPTV.",
      wa_product: p => `السلام عليكم، أريد طلب: ${p}`,
      wa_app: a => `السلام عليكم، أحتاج مساعدة في تطبيق ${a}`,
      wa_contact: "السلام عليكم، لدي استفسار عن R1tec"
    },
    en: {
      title: "R1tec — Your digital store",
      nav_apps: "Our apps", nav_products: "Products", nav_contact: "Contact",
      hero_eyebrow: "R1tec Digital Products",
      hero_title: "Android TV apps <em>and digital subscriptions</em> in one place",
      hero_lead: "Download our apps for free and order your favorite subscriptions straight on WhatsApp — verified accounts, instant activation.",
      hero_cta_apps: "Our apps", hero_cta_products: "Browse products",
      trust_1: "Verified accounts", trust_2: "Instant activation", trust_3: "Trusted service",
      apps_title: "Our apps", apps_sub: "Built by R1tec for Android TV, phones and Windows",
      products_title: "Products", products_sub: "Pick a product and tap to order — we reply on WhatsApp",
      all: "All", order: "Order on WhatsApp",
      download: "Download APK", download_win: "Windows version", source: "GitHub", help: "Help on WhatsApp",
      dl_code: "Downloader code", dl_hint: "Type it in the Downloader app on your TV",
      contact_title: "Got a question?", contact_sub: "Message us on WhatsApp and we'll get back to you fast.",
      contact_wa: "Chat on WhatsApp",
      footer: "Your digital store",
      disclaimer: "R1TV Player is a player only and does not provide any IPTV channels or subscriptions.",
      wa_product: p => `Hello, I'd like to order: ${p}`,
      wa_app: a => `Hello, I need help with ${a}`,
      wa_contact: "Hello, I have a question about R1tec"
    }
  };

  // ---------- Apps ----------
  const APPS = [
    {
      id: "launcher", name: "R1tec Launcher", ver: "v1.2.4", icon: "R1",
      grad: "linear-gradient(135deg,#7b3fe4,#f2c14e)", glow: "#f2c14e",
      code: "6185367",
      apk: `${GH}/R1tec-Launcher/releases/latest/download/R1tec-Launcher.apk`,
      repo: `${GH}/R1tec-Launcher`,
      platforms: ["Android TV", "Google TV", "Android 8+"],
      ar: {
        desc: "واجهة رئيسية أنيقة لتلفازك: الساعة والتاريخ الهجري والميلادي، أوقات الصلاة، الطقس ومباريات اليوم.",
        feat: ["مباريات اليوم بنتائج مباشرة ومتابعة الفرق والمنتخبات", "أوقات الصلاة مع الأذان والتذكير حسب مدينتك", "الطقس وخلفيات يومية وخلفيات فيديو حية", "صف المفضلة وشبكة التطبيقات، عربي/إنجليزي، تحديثات تلقائية"]
      },
      en: {
        desc: "A clean home screen for your TV: clock with Hijri & Gregorian dates, prayer times, weather and today's matches.",
        feat: ["Today's matches with live scores, follow teams & national teams", "Prayer times with adhan and reminders for your city", "Weather, daily wallpapers and live video wallpapers", "Favorites row & apps grid, Arabic/English, in-app updates"]
      }
    },
    {
      id: "player", name: "R1TV Player", ver: "v1.9.5", icon: "TV",
      grad: "linear-gradient(135deg,#1e66ff,#7b3fe4)", glow: "#7b3fe4",
      code: C.tvAppsCode,
      apk: `${GH}/R1TV-Player/releases/latest/download/R1TV-Player.apk`,
      win: `${GH}/R1TV-Player/releases/latest/download/R1TV-Player-Windows-Setup.exe`,
      repo: `${GH}/R1TV-Player`,
      platforms: ["Android TV", "Android", "Windows 10/11"],
      ar: {
        desc: "مشغل IPTV سريع للتلفاز والهاتف وويندوز: قنوات مباشرة، أفلام، مسلسلات ومباريات اليوم.",
        feat: ["دعم M3U و Xtream Codes مع عدة قوائم وتحديث تلقائي", "مباريات اليوم مع القنوات المتوفرة في قائمتك", "دليل البرامج EPG، المفضلة ومتابعة المشاهدة", "5 لغات منها العربية، نسخ احتياطي، مصمم لريموت التلفاز"]
      },
      en: {
        desc: "A fast IPTV player for TV, phone and Windows: live TV, movies, series and today's matches.",
        feat: ["M3U & Xtream Codes, multiple playlists with auto-refresh", "Today's matches linked to channels in your own playlist", "EPG guide, favorites and resume watching", "5 languages incl. Arabic, backup/restore, remote-first UI"]
      }
    }
  ];

  // ---------- Products (from @r1tec.store) ----------
  const CATS = {
    streaming: { ar: "ترفيه وبث", en: "Streaming" },
    software: { ar: "برامج", en: "Software" },
    ai: { ar: "ذكاء اصطناعي وتصميم", en: "AI & Design" },
    cards: { ar: "بطاقات ورصيد", en: "Cards & Crypto" },
    security: { ar: "حماية", en: "Security" }
  };
  const PRODUCTS = [
    { img: "netflix", cat: "streaming", name: "Netflix Premium 4K", ar: "اشتراك نتفليكس بريميوم بجودة 4K", en: "Netflix Premium subscription in 4K" },
    { img: "shahid", cat: "streaming", name: "Shahid VIP", ar: "اشتراك شاهد VIP — مسلسلات وبرامج عربية", en: "Shahid VIP — Arabic series & shows" },
    { img: "spotify", cat: "streaming", name: "Spotify Premium", ar: "موسيقى بدون إعلانات وتحميل بلا حدود", en: "Ad-free music & unlimited downloads" },
    { img: "chatgpt", cat: "ai", name: "ChatGPT Plus", ar: "اشتراك ChatGPT Plus من OpenAI", en: "ChatGPT Plus subscription by OpenAI" },
    { img: "canva", cat: "ai", name: "Canva Pro", ar: "كل أدوات وقوالب Canva Pro للتصميم", en: "All Canva Pro tools & templates" },
    { img: "windows11", cat: "software", name: "Windows 11 Pro", ar: "مفتاح تفعيل ويندوز 11 برو", en: "Windows 11 Pro activation key" },
    { img: "windows10", cat: "software", name: "Windows 10 Pro", ar: "مفتاح تفعيل ويندوز 10 برو", en: "Windows 10 Pro activation key" },
    { img: "office", cat: "software", name: "Office Professional Plus", ar: "حزمة أوفيس بروفيشنال بلس", en: "Office Professional Plus suite" },
    { img: "microsoft365", cat: "software", name: "Microsoft 365 Pro", ar: "اشتراك مايكروسوفت 365 مع التخزين السحابي", en: "Microsoft 365 with cloud storage" },
    { img: "nordvpn", cat: "security", name: "NordVPN", ar: "اشتراك NordVPN لحماية وخصوصية الاتصال", en: "NordVPN for a private, secure connection" },
    { img: "playstation", cat: "cards", name: "PlayStation Gift Card", ar: "بطاقات شحن بلايستيشن", en: "PlayStation Store gift cards" },
    { img: "usdt", cat: "cards", name: "USDT → MAD", ar: "بيع وشراء USDT بالدرهم", en: "USDT to MAD exchange" }
  ];

  // ---------- Helpers ----------
  let lang = localStorage.getItem("r1tec-lang") || "ar";
  let cat = "all";
  const $ = s => document.querySelector(s);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const wa = text => `https://wa.me/${C.whatsapp}?text=${encodeURIComponent(text)}`;

  function renderApps() {
    const t = T[lang];
    $("#apps-grid").innerHTML = APPS.map(a => {
      const L = a[lang];
      return `<article class="app" style="--grad:${a.grad};--glow:${a.glow}">
        <div class="app-top"><div class="app-icon">${a.icon}</div>
          <div><h3>${a.name}</h3><span class="ver">${a.ver}</span></div></div>
        <p class="desc">${esc(L.desc)}</p>
        <ul class="feat">${L.feat.map(f => `<li>${esc(f)}</li>`).join("")}</ul>
        <div class="platforms">${a.platforms.map(p => `<span>${p}</span>`).join("")}</div>
        <div class="code"><div><small>${t.dl_code}</small><br><small>${t.dl_hint}</small></div><b>${a.code}</b></div>
        <div class="app-actions">
          <a class="btn gold sm" href="${a.apk}">${t.download}</a>
          ${a.win ? `<a class="btn ghost sm" href="${a.win}">${t.download_win}</a>` : ""}
          <a class="btn ghost sm" href="${a.repo}" target="_blank" rel="noopener">${t.source}</a>
          <a class="btn wa sm" href="${wa(t.wa_app(a.name))}" target="_blank" rel="noopener">${t.help}</a>
        </div>
      </article>`;
    }).join("");
  }

  function renderFilters() {
    const t = T[lang];
    const keys = ["all", ...Object.keys(CATS)];
    $("#filters").innerHTML = keys.map(k =>
      `<button data-cat="${k}" class="${k === cat ? "on" : ""}">${k === "all" ? t.all : CATS[k][lang]}</button>`).join("");
  }

  function renderProducts() {
    const t = T[lang];
    $("#products-grid").innerHTML = PRODUCTS.filter(p => cat === "all" || p.cat === cat).map(p => `
      <article class="card">
        <a class="img" href="${wa(t.wa_product(p.name))}" target="_blank" rel="noopener">
          <img src="assets/products/${p.img}.jpg" alt="${esc(p.name)}" loading="lazy" width="640" height="640"></a>
        <div class="body">
          <span class="tag">${CATS[p.cat][lang]}</span>
          <h3>${esc(p.name)}</h3>
          <p>${esc(p[lang])}</p>
          <a class="btn wa sm block" href="${wa(t.wa_product(p.name))}" target="_blank" rel="noopener">${t.order}</a>
        </div>
      </article>`).join("");
  }

  function apply() {
    const t = T[lang];
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.title = t.title;
    document.querySelectorAll("[data-i18n]").forEach(el => { el.innerHTML = t[el.dataset.i18n]; });
    document.querySelectorAll(".js-wa").forEach(el => el.href = wa(t.wa_contact));
    $("#lang").textContent = lang === "ar" ? "EN" : "عربي";
    renderApps(); renderFilters(); renderProducts();
  }

  $("#lang").addEventListener("click", () => {
    lang = lang === "ar" ? "en" : "ar";
    localStorage.setItem("r1tec-lang", lang);
    apply();
  });
  $("#filters").addEventListener("click", e => {
    const b = e.target.closest("button"); if (!b) return;
    cat = b.dataset.cat; renderFilters(); renderProducts();
  });
  document.querySelectorAll(".js-ig").forEach(el => el.href = C.instagram);
  document.querySelectorAll(".js-gh").forEach(el => el.href = C.github);
  $("#year").textContent = new Date().getFullYear();
  apply();
})();
