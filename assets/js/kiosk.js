// kiosk.js - control de pantallas + idiomas + inactividad
// Versión: 2025-09-14_02
(function () {
  console.log("kiosk.js versión 2025-09-14_02 cargado");

  const screens = {
    welcome: document.querySelector("#screen-welcome"),
    have: document.querySelector("#screen-have-sim"),
    nosim: document.querySelector("#screen-no-sim"),
  };
  const langSel = document.querySelector("#lang");

  const i18n = {
    es: {
      welcome: "Bienvenidos",
      welcome_sub: "Seleccioná tu idioma y una opción para continuar",
      language: "Idioma",
      have_sim: "Ya tengo SIM",
      have_sim_desc: "Accesos rápidos (Wi-Fi, activación, recarga)",
      no_sim: "No tengo SIM",
      no_sim_desc: "Ver pack, GB, duración y productos",      // ← actualizado
      quick_actions: "Accesos rápidos",
      wifi: "Conexión a Wi-Fi",
      activation: "Activación de línea",
      topup: "Recarga / Top-up",
      qr_note: "Escaneá con la cámara para abrir el enlace",
      back: "← Volver",
      no_sim_title: "Simcard turista",                        // ← actualizado
      featured_plan: "Único pack disponible",                 // ← actualizado
      sim_price: "Valor SIM",
      sim_gb: "Datos",
      sim_time: "Duración",
      sim_type: "Tipo de SIM",                                // ← NUEVA clave
      get_sim: "Quiero esta SIM",
      products_title: "Productos útiles",
      prod_powerbank: "Power Bank",
      prod_powerbank_desc: "Carga rápida para no quedarte sin batería.",
      prod_charger: "Cargador compatible",
      prod_charger_desc: "Compatibilidad universal y protección.",
      prod_anti: "Correa antirrobo",
      prod_anti_desc: "Más seguridad para tus dispositivos.",
    },
    en: {
      welcome: "Welcome",
      welcome_sub: "Choose your language and an option to continue",
      language: "Language",
      have_sim: "I have a SIM",
      have_sim_desc: "Quick actions (Wi-Fi, activation, top-up)",
      no_sim: "I don't have a SIM",
      no_sim_desc: "See pack, data, duration and products",   // ← match ES wording
      quick_actions: "Quick actions",
      wifi: "Wi-Fi connection",
      activation: "Line activation",
      topup: "Top-up / Recharge",
      qr_note: "Point your camera at the QR to open the link",
      back: "← Back",
      no_sim_title: "Tourist SIM card",                       // ← match ES wording
      featured_plan: "Single available pack",
      sim_price: "SIM price",
      sim_gb: "Data",
      sim_time: "Duration",
      sim_type: "SIM type",                                   // ← NEW key
      get_sim: "I want this SIM",
      products_title: "Useful products",
      prod_powerbank: "Power Bank",
      prod_powerbank_desc: "Fast charging so you never run out.",
      prod_charger: "Compatible charger",
      prod_charger_desc: "Universal compatibility and protection.",
      prod_anti: "Anti-theft strap",
      prod_anti_desc: "More security for your devices.",
    },
    pt: {
      welcome: "Bem-vindos",
      welcome_sub: "Escolha o idioma e uma opção para continuar",
      language: "Idioma",
      have_sim: "Já tenho SIM",
      have_sim_desc: "Ações rápidas (Wi-Fi, ativação, recarga)",
      no_sim: "Não tenho SIM",
      no_sim_desc: "Ver pacote, GB, duração e produtos",      // ← match ES wording
      quick_actions: "Ações rápidas",
      wifi: "Conexão Wi-Fi",
      activation: "Ativação da linha",
      topup: "Recarga",
      qr_note: "Aponte a câmera para o QR para abrir o link",
      back: "← Voltar",
      no_sim_title: "SIM para turista",                       // ← match ES wording
      featured_plan: "Pacote único disponível",
      sim_price: "Valor do SIM",
      sim_gb: "Dados",
      sim_time: "Duração",
      sim_type: "Tipo de SIM",                                // ← NOVA chave
      get_sim: "Quero este SIM",
      products_title: "Produtos úteis",
      prod_powerbank: "Power Bank",
      prod_powerbank_desc: "Carga rápida para não ficar sem bateria.",
      prod_charger: "Carregador compatível",
      prod_charger_desc: "Compatibilidade universal e proteção.",
      prod_anti: "Correia anti-furto",
      prod_anti_desc: "Mais segurança para seus dispositivos.",
    },
  };

  function applyLang(code) {
    const dict = i18n[code] || i18n.es;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) el.textContent = dict[key];
    });
    document.documentElement.setAttribute("lang", code);
  }

  function show(id) {
    Object.values(screens).forEach((s) => s.classList.add("d-none"));
    screens[id].classList.remove("d-none");
    resetInactivityTimer();
  }

  // Inactividad → volver a bienvenida (modo kiosco)
  let inactivityTimer = null;
  const INACTIVITY_MS = 45000; // 45s
  function resetInactivityTimer() {
    if (inactivityTimer) clearTimeout(inactivityTimer);
    inactivityTimer = setTimeout(() => show("welcome"), INACTIVITY_MS);
  }
  ["click", "touchstart", "keypress", "mousemove"].forEach((evt) => {
    document.addEventListener(evt, resetInactivityTimer, { passive: true });
  });

  // Eventos
  document.querySelector("#btn-have-sim").addEventListener("click", () => show("have"));
  document.querySelector("#btn-no-sim").addEventListener("click", () => show("nosim"));
  document.querySelector("#back1").addEventListener("click", () => show("welcome"));
  document.querySelector("#back2").addEventListener("click", () => show("welcome"));
  langSel.addEventListener("change", (e) => applyLang(e.target.value));

  // Idioma inicial por navegador
  const nav = (navigator.language || "es").slice(0, 2);
  langSel.value = ["es", "en", "pt"].includes(nav) ? nav : "es";
  applyLang(langSel.value);
  show("welcome");
})();
