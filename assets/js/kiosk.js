// kiosk.js - control de pantallas + idiomas + inactividad
// Versión: 2025-09-14_03
(function () {
  console.log("kiosk.js versión 2025-09-14_03 cargado");

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
      no_sim_desc: "Ver pack, GB, duración y productos",
      quick_actions: "Accesos rápidos",
      wifi: "Conexión a Wi-Fi",
      activation: "Activación de línea",
      topup: "Recarga / Top-up",
      qr_note: "Escaneá con la cámara para abrir el enlace",
      back: "← Volver",
      no_sim_title: "Simcard turista",
      featured_plan: "Único pack disponible",
      sim_price: "Valor SIM",
      sim_gb: "Datos",
      sim_time: "Duración",
      sim_type: "Tipo de SIM",
      get_sim: "Quiero esta SIM",
      products_title: "Productos útiles",
      prod_powerbank: "Power Bank",
      prod_powerbank_desc: "Carga rápida para no quedarte sin batería.",
      prod_charger: "Cargador compatible",
      prod_charger_desc: "Compatibilidad universal y protección.",
      prod_anti: "Correa antirrobo",
      prod_anti_desc: "Más seguridad para tus dispositivos.",
      // 🆕 Requisitos
      req_title: "Requisitos para la compra:",
      req_passport: "Pasaporte físico válido",
      req_pay_credit_only: "Pago únicamente con",
      req_credit_card: "tarjeta de crédito",
      req_no_debit_cash: "No se acepta débito ni efectivo",
        advisor_button: "Interno – Solo asesor",
advisor_title: "Información para el cliente",
all_options: "Ver todo",
opt_family: "Familiar argentino",
opt_cash: "Pago en efectivo",
opt_precaria: "Precaria / DNI",
opt_hours: "Horarios",
msg_family: "Si tenés un familiar argentino que pueda acercarse a la sucursal, podemos activar la línea con su DNI con un 80% de descuento.",
msg_cash: "Si solo tenés efectivo, podemos activarte una línea con la compra de un producto.",
msg_precaria: "Cuando tengas tu precaria o DNI, podés acercarte para elegir un abono mensual con más beneficios y descuentos.",
msg_hours: "La sucursal abre de 10:00 a 22:00. Traé la documentación física. No aceptamos fotografías.",
close: "Cerrar",

    },
    en: {
      welcome: "Welcome",
      welcome_sub: "Choose your language and an option to continue",
      language: "Language",
      have_sim: "I have a SIM",
      have_sim_desc: "Quick actions (Wi-Fi, activation, top-up)",
      no_sim: "I don't have a SIM",
      no_sim_desc: "See pack, data, duration and products",
      quick_actions: "Quick actions",
      wifi: "Wi-Fi connection",
      activation: "Line activation",
      topup: "Top-up / Recharge",
      qr_note: "Point your camera at the QR to open the link",
      back: "← Back",
      no_sim_title: "Tourist SIM card",
      featured_plan: "Single available pack",
      sim_price: "SIM price",
      sim_gb: "Data",
      sim_time: "Duration",
      sim_type: "SIM type",
      get_sim: "I want this SIM",
      products_title: "Useful products",
      prod_powerbank: "Power Bank",
      prod_powerbank_desc: "Fast charging so you never run out.",
      prod_charger: "Compatible charger",
      prod_charger_desc: "Universal compatibility and protection.",
      prod_anti: "Anti-theft strap",
      prod_anti_desc: "More security for your devices.",
      // 🆕 Requirements
      req_title: "Requirements for purchase:",
      req_passport: "Valid physical passport",
      req_pay_credit_only: "Payment only with",
      req_credit_card: "credit card",
      req_no_debit_cash: "Debit cards or cash are not accepted",
      advisor_button: "Internal – Advisor only",
advisor_title: "Information for the customer",
all_options: "Show all",
opt_family: "Argentine relative",
opt_cash: "Cash payment",
opt_precaria: "Precaria / ID",
opt_hours: "Opening hours",
msg_family: "If you have an Argentine relative who can visit the store, we can activate the line with their ID with an 80% discount.",
msg_cash: "If you only have cash, we can activate a line with the purchase of a product.",
msg_precaria: "When you get your temporary ID (precaria) or DNI, you can choose a monthly plan with more benefits and discounts.",
msg_hours: "The store is open from 10:00 to 22:00. Please bring your physical documents. Photos are not accepted.",
close: "Close",

      
    },
    pt: {
      welcome: "Bem-vindos",
      welcome_sub: "Escolha o idioma e uma opção para continuar",
      language: "Idioma",
      have_sim: "Já tenho SIM",
      have_sim_desc: "Ações rápidas (Wi-Fi, ativação, recarga)",
      no_sim: "Não tenho SIM",
      no_sim_desc: "Ver pacote, GB, duração e produtos",
      quick_actions: "Ações rápidas",
      wifi: "Conexão Wi-Fi",
      activation: "Ativação da linha",
      topup: "Recarga",
      qr_note: "Aponte a câmera para o QR para abrir o link",
      back: "← Voltar",
      no_sim_title: "SIM para turista",
      featured_plan: "Pacote único disponível",
      sim_price: "Valor do SIM",
      sim_gb: "Dados",
      sim_time: "Duração",
      sim_type: "Tipo de SIM",
      get_sim: "Quero este SIM",
      products_title: "Produtos úteis",
      prod_powerbank: "Power Bank",
      prod_powerbank_desc: "Carga rápida para não ficar sem bateria.",
      prod_charger: "Carregador compatível",
      prod_charger_desc: "Compatibilidade universal e proteção.",
      prod_anti: "Correia anti-furto",
      prod_anti_desc: "Mais segurança para seus dispositivos.",
      // 🆕 Requisitos
      req_title: "Requisitos para a compra:",
      req_passport: "Passaporte físico válido",
      req_pay_credit_only: "Pagamento somente com",
      req_credit_card: "cartão de crédito",
      req_no_debit_cash: "Não se aceita débito nem dinheiro",
      advisor_button: "Interno – Somente assessor",
advisor_title: "Informações para o cliente",
all_options: "Ver tudo",
opt_family: "Familiar argentino",
opt_cash: "Pagamento em dinheiro",
opt_precaria: "Precária / DNI",
opt_hours: "Horários",
msg_family: "Se você tem um familiar argentino que possa ir até a loja, podemos ativar a linha com o DNI dele com 80% de desconto.",
msg_cash: "Se você só tem dinheiro, podemos ativar uma linha com a compra de um produto.",
msg_precaria: "Quando você tiver sua precária ou DNI, pode escolher um plano mensal com mais benefícios e descontos.",
msg_hours: "A loja abre das 10:00 às 22:00. Leve a documentação física. Não aceitamos fotos.",
close: "Fechar",

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



// === FILTRO PARA EL MODAL DEL ASESOR ===
// Ocultar/mostrar ítems según el filtro 's'
function filterScenario(s) {
  // items
  document.querySelectorAll('#asesorModal li.scenario').forEach(li => {
    const show = (s === 'all') || (li.dataset.s === s);
    li.classList.toggle('d-none', !show);
  });
  // botones activos
  document.querySelectorAll('#asesorModal .scenario-filter').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.s === s);
  });
}

// Delegación de eventos sobre los botones de filtro
document.addEventListener('click', (ev) => {
  const btn = ev.target.closest('#asesorModal .scenario-filter');
  if (!btn) return;
  const s = btn.dataset.s || 'all';
  filterScenario(s);
});

// Al abrir el modal, mostrar TODO por defecto
const asesorModalEl = document.getElementById('asesorModal');
if (asesorModalEl) {
  asesorModalEl.addEventListener('show.bs.modal', () => {
    filterScenario('all');
  });
}
