/* ================================================================
   db.js — يربط المتجر بقاعدة بيانات Supabase
   1) يجلب الفئات والمنتجات وسعر الصرف ← ثم يحمّل script.js
   2) إذا تعذّر الاتصال: يستخدم آخر نسخة محفوظة، وإلا البيانات المدمجة في script.js
   3) يوفّر window.saveOrderToDB لحفظ الطلبات
   (المفتاح هنا "publishable" ومصمم ليكون ظاهرًا؛ الحماية من قواعد RLS في القاعدة)
   ================================================================ */
(function () {
  var URL = "https://gwenlqpuctchtultmxxg.supabase.co";
  var KEY = "sb_publishable_qIv3lEo1hLhrW5NX--HdqQ_WKfJOkBj";
  var CACHE = "boshi_db_cache_v1";
  var TIMEOUT_MS = 5000;

  function api(path, opts) {
    opts = opts || {};
    var ctl = ("AbortController" in window) ? new AbortController() : null;
    var timer = ctl ? setTimeout(function () { ctl.abort(); }, TIMEOUT_MS) : null;
    opts.headers = Object.assign({ apikey: KEY }, opts.headers || {});
    if (ctl) opts.signal = ctl.signal;
    return fetch(URL + "/rest/v1/" + path, opts).then(function (r) {
      if (timer) clearTimeout(timer);
      if (!r.ok) throw new Error("HTTP " + r.status);
      return opts.method === "POST" ? null : r.json();
    });
  }

  function build(cats, subs, prods, sets) {
    var settings = {};
    sets.forEach(function (s) { settings[s.key] = s.value; });
    var byCat = {};
    subs.forEach(function (s) {
      (byCat[s.category_id] = byCat[s.category_id] || []).push({ id: s.id, name: s.name, image: s.image });
    });
    return {
      settings: settings,
      categories: cats.map(function (c) {
        return { id: c.id, name: c.name, image: c.image, subcategories: byCat[c.id] || [] };
      }),
      products: prods.map(function (p) {
        var o = { id: p.id, name: p.name, category: p.category, sub: p.sub, price: Number(p.price),
                  desc: p.desc, image: p.image, badge: p.badge, overlay: !!p.overlay, variantGroups: p.variants || [] };
        return Object.assign(o, p.extra || {});
      })
    };
  }

  function loadScript() {
    var s = document.createElement("script");
    s.src = "script.js";
    document.body.appendChild(s);
  }

  function applyAndStart(db) {
    if (db && db.products.length && db.categories.length) {
      window.__DB = db;
      var r = Number(db.settings.syp_rate);
      if (isFinite(r) && r > 0) window.SYP_RATE = r;
    }
    loadScript();
  }

  window.saveOrderToDB = function (order) {
    return api("orders", {
      method: "POST",
      keepalive: true,
      headers: { "Content-Type": "application/json", Prefer: "return=minimal" },
      body: JSON.stringify(order)
    }).catch(function (e) { console.warn("saveOrderToDB", e); });
  };

  Promise.all([
    api("categories?select=*&order=sort.asc"),
    api("subcategories?select=*&order=sort.asc"),
    api("products?select=*&order=sort.asc,created_at.asc"),
    api("settings?select=*")
  ]).then(function (r) {
    var db = build(r[0], r[1], r[2], r[3]);
    try { localStorage.setItem(CACHE, JSON.stringify(db)); } catch (e) {}
    applyAndStart(db);
  }).catch(function (e) {
    console.warn("Supabase unavailable, using fallback:", e);
    var cached = null;
    try { cached = JSON.parse(localStorage.getItem(CACHE) || "null"); } catch (e2) {}
    applyAndStart(cached);
  });
})();
