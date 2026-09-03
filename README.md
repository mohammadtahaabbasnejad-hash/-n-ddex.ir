<!doctype html>
<html lang="fa" dir="rtl">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">

  <meta name="theme-color" content="#0b1220">
  <meta name="description"
        content="دستیار آنلاین عیب‌یابی پکیج - مهندس محمد طاها عباس‌نژاد">

  <title>دستیار مهندس محمد طاها عباس‌نژاد</title>

  <style>
    :root {
      --bg: #070b14;
      --card: #101827;
      --card2: #151f31;
      --text: #eef4ff;
      --muted: #9eabc0;
      --accent: #4f9cff;
      --ok: #40d48b;
      --warn: #ffc857;
      --danger: #ff6678;
      --line: #243148;
    }

    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      background: linear-gradient(180deg, #07101f, #070b14);
      color: var(--text);
      font-family:
        system-ui,
        -apple-system,
        BlinkMacSystemFont,
        "Segoe UI",
        Tahoma,
        sans-serif;
    }

    button,
    select,
    input {
      font: inherit;
    }

    button {
      cursor: pointer;
    }

    .app {
      max-width: 720px;
      margin: auto;
      min-height: 100vh;
      padding-bottom: 90px;
    }

    .top {
      padding: 22px 18px 12px;
      position: sticky;
      top: 0;
      background: rgba(7, 11, 20, .94);
      backdrop-filter: blur(14px);
      z-index: 5;
      border-bottom: 1px solid var(--line);
    }

    .brand {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .logo {
      width: 48px;
      height: 48px;
      border-radius: 15px;
      background: linear-gradient(135deg, #1d70d8, #50b7ff);
      display: grid;
      place-items: center;
      font-size: 25px;
      flex-shrink: 0;
    }

    .title {
      font-size: 19px;
      font-weight: 800;
    }

    .sub {
      font-size: 12px;
      color: var(--muted);
      margin-top: 3px;
    }

    .nav {
      display: flex;
      gap: 8px;
      overflow-x: auto;
      padding: 10px 18px;
      scrollbar-width: none;
    }

    .nav::-webkit-scrollbar {
      display: none;
    }

    .nav button {
      white-space: nowrap;
      border: 1px solid var(--line);
      background: var(--card);
      color: var(--muted);
      padding: 9px 13px;
      border-radius: 12px;
    }

    .nav button.active {
      background: #17345d;
      color: #fff;
      border-color: #2b66a9;
    }

    main {
      padding: 8px 18px;
    }

    .section {
      display: none;
    }

    .section.show {
      display: block;
    }

    .hero {
      background: linear-gradient(145deg, #102744, #0e1728);
      border: 1px solid #21466f;
      border-radius: 22px;
      padding: 20px;
      margin-bottom: 14px;
    }

    .hero h1 {
      margin: 0 0 7px;
      font-size: 24px;
    }

    .hero p {
      color: #b9c8dc;
      margin: 0;
      line-height: 1.8;
    }

    .grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
    }

    .card {
      background: var(--card);
      border: 1px solid var(--line);
      border-radius: 18px;
      padding: 15px;
    }

    .card h3 {
      margin: 0 0 6px;
      font-size: 16px;
    }

    .card p {
      margin: 0;
      color: var(--muted);
      font-size: 13px;
      line-height: 1.7;
    }

    .label {
      font-size: 13px;
      color: #b9c8dc;
      margin: 13px 0 7px;
    }

    select,
    input {
      width: 100%;
      background: var(--card);
      border: 1px solid var(--line);
      color: #fff;
      border-radius: 13px;
      padding: 12px;
      outline: none;
    }

    select:focus,
    input:focus {
      border-color: var(--accent);
    }

    .symptoms {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 9px;
      margin-top: 10px;
    }

    .symptoms button {
      padding: 14px 8px;
      border-radius: 14px;
      border: 1px solid var(--line);
      background: var(--card);
      color: #fff;
      transition: .15s;
    }

    .symptoms button:hover {
      border-color: var(--accent);
      transform: translateY(-1px);
    }

    .result {
      margin-top: 14px;
      background: var(--card2);
      border: 1px solid #2b4160;
      border-radius: 18px;
      padding: 16px;
      line-height: 1.9;
    }

    .result.danger {
      border-color: #69313c;
      background: #24131a;
    }

    .result ul {
      margin: 8px 0;
      padding-right: 20px;
    }

    .tag {
      display: inline-block;
      background: #203451;
      color: #bfe0ff;
      border-radius: 9px;
      padding: 3px 8px;
      font-size: 11px;
      margin: 2px;
    }

    .search {
      margin-bottom: 10px;
    }

    .item {
      border: 1px solid var(--line);
      background: var(--card);
      border-radius: 15px;
      padding: 13px;
      margin: 9px 0;
    }

    .item b {
      display: block;
      margin-bottom: 5px;
    }

    .item small {
      color: var(--muted);
      line-height: 1.7;
    }

    .english b {
      color: #fff;
    }

    .english span {
      color: var(--muted);
      float: left;
      direction: ltr;
    }

    .check {
      display: flex;
      gap: 10px;
      align-items: center;
      padding: 12px;
      border-bottom: 1px solid var(--line);
      color: #dce6f5;
    }

    .check input {
      width: auto;
    }

    .install {
      display: none;
      width: 100%;
      margin-top: 10px;
      background: #173e6e;
      border: 1px solid #2f70b7;
      color: white;
      border-radius: 13px;
      padding: 11px;
    }

    .footer {
      text-align: center;
      color: #78879d;
      font-size: 11px;
      padding: 25px 18px;
      line-height: 1.8;
    }

    .danger-box {
      margin-top: 14px;
      border: 1px solid #713441;
      background: #24131a;
      padding: 13px;
      border-radius: 14px;
      color: #ffd7dd;
      font-size: 13px;
      line-height: 1.8;
    }

    @media (max-width: 430px) {
      .grid {
        grid-template-columns: 1fr;
      }

      .hero h1 {
        font-size: 21px;
      }

      .title {
        font-size: 17px;
      }
    }
  </style>
</head>

<body>

<div class="app">

  <!-- HEADER -->
  <header class="top">

    <div class="brand">

      <div class="logo">🔧</div>

      <div>
        <div class="title">
          دستیار مهندس محمد طاها عباس‌نژاد
        </div>

        <div class="sub">
          نسخه ۲ • دستیار تعمیرکار پکیج
        </div>
      </div>

    </div>

    <button id="install" class="install">
      📱 نصب روی گوشی
    </button>

  </header>


  <!-- NAVIGATION -->
  <div class="nav">

    <button class="active" data-tab="home">
      🏠 خانه
    </button>

    <button data-tab="diag">
      🔍 عیب‌یابی
    </button>

    <button data-tab="codes">
      ⚠️ کد خطا
    </button>

    <button data-tab="parts">
      🔩 قطعات
    </button>

    <button data-tab="en">
      🇬🇧 انگلیسی
    </button>

    <button data-tab="check">
      📋 چک‌لیست
    </button>

  </div>


  <main>

    <!-- HOME -->
    <section id="home" class="section show">

      <div class="hero">

        <h1>
          🔧 دستیار تعمیرکار پکیج
        </h1>

        <p>
          عیب‌یابی مرحله‌ای پکیج‌های ایرانی و خارجی.
          ابتدا برند و مدل دستگاه را انتخاب کن و سپس علامت خرابی
          را مشخص کن.
        </p>

      </div>


      <div class="grid">

        <div class="card">
          <h3>🔍 عیب‌یابی هوشمند</h3>
          <p>
            از علامت خرابی شروع کن و مرحله‌به‌مرحله علت‌های
            محتمل را بررسی کن.
          </p>
        </div>


        <div class="card">
          <h3>⚠️ بانک خطا</h3>
          <p>
            کدهای خطای رایج برندهای مختلف.
          </p>
        </div>


        <div class="card">
          <h3>🔩 بانک قطعات</h3>
          <p>
            آشنایی با قطعات مهم پکیج و علائم خرابی احتمالی.
          </p>
        </div>


        <div class="card">
          <h3>🇬🇧 UK Engineer</h3>
          <p>
            اصطلاحات تخصصی انگلیسی برای مسیر کاری انگلستان.
          </p>
        </div>

      </div>


      <div class="danger-box">

        ⚠️ نکته ایمنی:
        این سایت ابزار آموزشی و کمکی برای عیب‌یابی است.
        دستورالعمل سازنده و مقررات محلی همیشه اولویت دارند.
        سیستم‌های ایمنی را هرگز بای‌پس نکن.

      </div>

    </section>


    <!-- DIAGNOSTIC -->
    <section id="diag" class="section">

      <h2>
        🔍 عیب‌یابی مرحله‌ای
      </h2>


      <div class="label">
        برند دستگاه
      </div>

      <select id="brand">

        <option>نامشخص</option>

        <option>بوتان</option>

        <option>ایران‌رادیاتور</option>

        <option>Vaillant</option>

        <option>Worcester Bosch</option>

        <option>Baxi</option>

        <option>Ideal</option>

        <option>Ariston</option>

        <option>Viessmann</option>

        <option>Bosch</option>

        <option>Ferroli</option>

        <option>Immergas</option>

      </select>


      <div class="label">
        مدل دقیق دستگاه
      </div>

      <input
        id="model"
        type="text"
        placeholder="مثلاً ecoTEC plus 832"
      >


      <div class="label">
        علامت خرابی را انتخاب کن
      </div>


      <div class="symptoms">

        <button onclick="diagnose('hot')">
          🚿 آب گرم ندارم
        </button>

        <button onclick="diagnose('heat')">
          🏠 گرمایش ندارم
        </button>

        <button onclick="diagnose('pressure')">
          💧 مشکل فشار
        </button>

        <button onclick="diagnose('ignite')">
          🔥 روشن نمی‌شود
        </button>

        <button onclick="diagnose('noise')">
          🔊 صدای غیرعادی
        </button>

        <button onclick="diagnose('leak')">
          💦 نشتی آب
        </button>

      </div>


      <div id="result"></div>

    </section>


    <!-- ERROR CODES -->
    <section id="codes" class="section">

      <h2>
        ⚠️ بانک کد خطا
      </h2>


      <input
        class="search"
        oninput="filterItems(this,'codesList')"
        placeholder="جستجوی برند یا کد خطا..."
      >


      <div id="codesList">

        <div class="item">

          <b>بوتان — E1</b>

          <small>
            در بسیاری از مدل‌ها با خطای تشکیل یا تشخیص شعله
            مرتبط است. معنی دقیق باید بر اساس مدل دستگاه بررسی شود.
          </small>

        </div>


        <div class="item">

          <b>Vaillant — F22</b>

          <small>
            در مدل‌های رایج با فشار پایین یا کمبود آب سیستم
            مرتبط است. مشخصات دقیق به مدل وابسته است.
          </small>

        </div>


        <div class="item">

          <b>Vaillant — F28</b>

          <small>
            در بسیاری از مدل‌ها با مشکل اشتعال یا راه‌اندازی
            احتراق مرتبط است.
          </small>

        </div>


        <div class="item">

          <b>Vaillant — F29</b>

          <small>
            در مدل‌های مختلف با قطع شعله در حین کار مرتبط است.
            تشخیص دقیق باید بر اساس مدل انجام شود.
          </small>

        </div>


        <div class="item">

          <b>Worcester Bosch — EA</b>

          <small>
            در مدل‌های مختلف با مشکل شعله یا احتراق مرتبط است.
          </small>

        </div>


        <div class="item">

          <b>Worcester Bosch — L2</b>

          <small>
            در برخی مدل‌ها با خطای احتراق یا شعله مرتبط است.
          </small>

        </div>

      </div>

    </section>


    <!-- PARTS -->
    <section id="parts" class="section">

      <h2>
        🔩 بانک قطعات
      </h2>


      <input
        class="search"
        oninput="filterItems(this,'partsList')"
        placeholder="جستجوی قطعه..."
      >


      <div id="partsList">


        <div class="item">

          <b>
            Flow Sensor / فلومتر
          </b>

          <small>
            سنسور تشخیص جریان آب مصرفی.
          </small>

        </div>


        <div class="item">

          <b>
            NTC Thermistor / سنسور NTC
          </b>

          <small>
            سنجش دمای آب در مدار دستگاه.
          </small>

        </div>


        <div class="item">

          <b>
            Diverter Valve / شیر سه‌طرفه
          </b>

          <small>
            تغییر مسیر بین آب گرم مصرفی و مدار گرمایش.
          </small>

        </div>


        <div class="item">

          <b>
            Circulation Pump / پمپ سیرکولاسیون
          </b>

          <small>
            گردش آب مدار گرمایش.
          </small>

        </div>


        <div class="item">

          <b>
            Fan / فن
          </b>

          <small>
            ایجاد شرایط لازم برای تخلیه محصولات احتراق.
          </small>

        </div>


        <div class="item">

          <b>
            Air Pressure Switch / پرشر هوا
          </b>

          <small>
            کنترل شرایط جریان هوا در طراحی‌های مربوطه.
            سیستم ایمنی نباید بای‌پس شود.
          </small>

        </div>


        <div class="item">

          <b>
            Ignition Electrode / الکترود جرقه
          </b>

          <small>
            ایجاد جرقه برای راه‌اندازی احتراق.
          </small>

        </div>


        <div class="item">

          <b>
            Ionisation Electrode / الکترود یون
          </b>

          <small>
            تشخیص وجود شعله.
          </small>

        </div>


        <div class="item">

          <b>
            Gas Valve / شیر گاز
          </b>

          <small>
            قطعه مرتبط با کنترل گاز و احتراق.
            سرویس آن نیازمند صلاحیت و رعایت مقررات است.
          </small>

        </div>


        <div class="item">

          <b>
            Heat Exchanger / مبدل حرارتی
          </b>

          <small>
            انتقال حرارت بین بخش‌های سیستم.
          </small>

        </div>


        <div class="item">

          <b>
            Expansion Vessel / منبع انبساط
          </b>

          <small>
            جبران انبساط آب مدار گرمایش.
          </small>

        </div>


        <div class="item">

          <b>
            PRV / شیر اطمینان
          </b>

          <small>
            حفاظت سیستم در برابر فشار بیش از حد.
          </small>

        </div>


        <div class="item">

          <b>
            PCB / برد کنترل
          </b>

          <small>
            کنترل الکترونیکی دستگاه.
          </small>

        </div>

      </div>

    </section>


    <!-- ENGLISH -->
    <section id="en" class="section">

      <h2>
        🇬🇧 English for Boiler Engineers
      </h2>


      <div class="item english">

        <b>
          Boiler
          <span>بویلر</span>
        </b>

        <small>
          پکیج / دیگ
        </small>

      </div>


      <div class="item english">

        <b>
          Combi boiler
          <span>کُمبی بویلر</span>
        </b>

        <small>
          پکیج دو منظوره
        </small>

      </div>


      <div class="item english">

        <b>
          Central heating
          <span>سنترال هیتینگ</span>
        </b>

        <small>
          گرمایش مرکزی
        </small>

      </div>


      <div class="item english">

        <b>
          Domestic hot water
          <span>دُمِستیک هات واتر</span>
        </b>

        <small>
          آب گرم مصرفی
        </small>

      </div>


      <div class="item english">

        <b>
          Diverter valve
          <span>دای‌وِرتِر وَلْو</span>
        </b>

        <small>
          شیر سه‌طرفه
        </small>

      </div>


      <div class="item english">

        <b>
          Heat exchanger
          <span>هیت اکسچینجِر</span>
        </b>

        <small>
          مبدل حرارتی
        </small>

      </div>


      <div class="item english">

        <b>
          Flue
          <span>فلو</span>
        </b>

        <small>
          مسیر دود و محصولات احتراق
        </small>

      </div>


      <div class="item english">

        <b>
          Fault code
          <span>فالت کُد</span>
        </b>

        <small>
          کد خطا
        </small>

      </div>


      <div class="item english">

        <b>
          Service manual
          <span>سِرویس مَنیوال</span>
        </b>

        <small>
          دفترچه سرویس
        </small>

      </div>


      <div class="item english">

        <b>
          Gas Safe
          <span>گَس سیف</span>
        </b>

        <small>
          عنوان مرتبط با ثبت صلاحیت کار گاز در بریتانیا.
        </small>

      </div>

    </section>


    <!-- CHECKLIST -->
    <section id="check" class="section">

      <h2>
        📋 چک‌لیست تعمیرکار
      </h2>


      <div class="card">

        <label class="check">
          <input type="checkbox">
          مدل و کد دستگاه ثبت شد
        </label>


        <label class="check">
          <input type="checkbox">
          فشار سیستم بررسی شد
        </label>


        <label class="check">
          <input type="checkbox">
          کد خطا ثبت شد
        </label>


        <label class="check">
          <input type="checkbox">
          درخواست آب گرم یا گرمایش بررسی شد
        </label>


        <label class="check">
          <input type="checkbox">
          علائم صدا و نشتی ثبت شد
        </label>


        <label class="check">
          <input type="checkbox">
          دستورالعمل سازنده بررسی شد
        </label>


        <label class="check">
          <input type="checkbox">
          سیستم‌های ایمنی بای‌پس نشده‌اند
        </label>

      </div>

    </section>

  </main>


  <!-- FOOTER -->
  <div class="footer">

    نسخه ۲ — دستیار تعمیرکار پکیج

    <br>

    مهندس محمد طاها عباس‌نژاد

    <br><br>

    این ابزار آموزشی است و جایگزین دفترچه سرویس سازنده،
    مقررات محلی یا صلاحیت حرفه‌ای نیست.

    <br>

    کار گاز و احتراق باید توسط فرد واجد صلاحیت و طبق مقررات انجام شود.

  </div>

</div>


<script>

  /* -------------------------
     Navigation
  ------------------------- */

  const tabs = document.querySelectorAll(".nav button");

  tabs.forEach(button => {

    button.addEventListener("click", () => {

      tabs.forEach(item => {
        item.classList.remove("active");
      });

      button.classList.add("active");

      document.querySelectorAll(".section").forEach(section => {
        section.classList.remove("show");
      });

      const target = document.getElementById(
        button.dataset.tab
      );

      if (target) {
        target.classList.add("show");
      }

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    });

  });


  /* -------------------------
     Diagnostic Engine
  ------------------------- */

  function diagnose(type) {

    const brand =
      document.getElementById("brand").value;

    const modelInput =
      document.getElementById("model").value.trim();

    const model =
      modelInput || "مدل نامشخص";

    const result =
      document.getElementById("result");

    let title = "";

    let steps = [];

    let warning = "";


    if (type === "hot") {

      title = "🚿 آب گرم ندارم";

      steps = [

        "با باز کردن شیر آب گرم بررسی کن آیا دستگاه درخواست آب گرم را تشخیص می‌دهد یا خیر.",

        "اگر دستگاه هیچ واکنشی ندارد، سنسور جریان یا فلومتر و مدار مربوط به آن مطرح است.",

        "اگر شعله تشکیل می‌شود ولی آب گرم پایدار نیست، دما، دبی آب و وضعیت مبدل بررسی شود.",

        "در دستگاه‌های دارای شیر تغییر مسیر، عملکرد Diverter Valve نیز باید در نظر گرفته شود."

      ];

    }


    if (type === "heat") {

      title = "🏠 گرمایش ندارم";

      steps = [

        "فرمان گرمایش و ترموستات یا کنترل دستگاه را بررسی کن.",

        "فشار مدار گرمایش را بررسی و مقدار آن را ثبت کن.",

        "اگر دستگاه روشن می‌شود ولی رادیاتورها گرم نمی‌شوند، گردش آب بررسی شود.",

        "پمپ، شیر تغییر مسیر و وضعیت مدار گرمایش بسته به طراحی دستگاه بررسی شوند."

      ];

    }


    if (type === "pressure") {

      title = "💧 مشکل فشار";

      steps = [

        "فشار دستگاه را در حالت سرد ثبت کن.",

        "تغییر فشار هنگام گرم شدن سیستم را بررسی کن.",

        "اگر فشار مرتب کم می‌شود، احتمال نشتی یا مشکل در مدار باید بررسی شود.",

        "اگر فشار هنگام گرم شدن بیش از حد افزایش می‌یابد، منبع انبساط و شیر اطمینان مطرح هستند."

      ];

    }


    if (type === "ignite") {

      title = "🔥 دستگاه روشن نمی‌شود";

      steps = [

        "کد خطا را ثبت کن.",

        "فرمان راه‌اندازی دستگاه را بررسی کن.",

        "ترتیب فن، جرقه و تشخیص شعله را مطابق دفترچه همان مدل بررسی کن.",

        "اگر شعله ایجاد شده و سریع قطع می‌شود، مدار تشخیص شعله و شرایط احتراق باید بررسی شوند."

      ];

      warning =
        "هرگونه کار روی گاز و احتراق باید توسط فرد واجد صلاحیت انجام شود.";

    }


    if (type === "noise") {

      title = "🔊 صدای غیرعادی";

      steps = [

        "محل دقیق صدا را مشخص کن.",

        "بررسی کن صدا در آب گرم، گرمایش یا هر دو ایجاد می‌شود.",

        "صدای جوشیدن یا تق‌تق می‌تواند نیازمند بررسی گردش آب، دما یا رسوب باشد.",

        "صدای مکانیکی می‌تواند از پمپ یا فن باشد."

      ];

    }


    if (type === "leak") {

      title = "💦 نشتی آب";

      steps = [

        "محل دقیق نشتی را مشخص کن.",

        "فشار سیستم را ثبت کن.",

        "اتصالات، مبدل، پمپ و مسیر تخلیه را از نظر نشتی بررسی کن.",

        "اگر بوی گاز وجود دارد، دستگاه را دستکاری نکن و از فرد یا خدمات اضطراری واجد صلاحیت کمک بگیر."

      ];

      warning =
        "هرگز برای رفع مشکل گاز یا احتراق، سیستم‌های ایمنی را بای‌پس نکن.";

    }


    result.innerHTML = `

      <div class="result ${type === "leak" ? "danger" : ""}">

        <b>${title}</b>

        <div style="margin-top:8px">

          <span class="tag">
            ${escapeHTML(brand)}
          </span>

          <span class="tag">
            ${escapeHTML(model)}
          </span>

        </div>

        <ul>

          ${steps.map(step =>
            `<li>${escapeHTML(step)}</li>`
          ).join("")}

        </ul>

        ${
          warning
          ?
          `<div class="danger-box">
            ⚠️ ${escapeHTML(warning)}
          </div>`
          :
          ""
        }

      </div>

    `;

  }


  /* -------------------------
     Search
  ------------------------- */

  function filterItems(input, containerId) {

    const query =
      input.value.trim().toLowerCase();

    const items =
      document.querySelectorAll(
        "#" + containerId + " .item"
      );

    items.forEach(item => {

      const text =
        item.innerText.toLowerCase();

      item.style.display =
        text.includes(query)
        ? "block"
        : "none";

    });

  }


  /* -------------------------
     Security helper
  ------------------------- */

  function escapeHTML(value) {

    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

  }


  /* -------------------------
     PWA Install
  ------------------------- */

  let deferredPrompt;

  const installButton =
    document.getElementById("install");


  window.addEventListener(
    "beforeinstallprompt",
    event => {

      event.preventDefault();

      deferredPrompt = event;

      installButton.style.display =
        "block";

    }
  );


  installButton.addEventListener(
    "click",
    async () => {

      if (!deferredPrompt) {
        return;
      }

      deferredPrompt.prompt();

      await deferredPrompt.userChoice;

      deferredPrompt = null;

      installButton.style.display =
        "none";

    }
  );

</script>

</body>
</html>
