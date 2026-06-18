# Turista • Kiosco SIM (Bienvenida → Idioma → Opciones)

🔗 **Demo en vivo:** https://romherre.github.io/turistas/

Versión enfocada en pantalla inicial de bienvenida con selector de idioma y dos opciones:

- **Ya tengo SIM** → muestra tres QR (Wi‑Fi, Activación, Recarga) usando tus imágenes.
- **No tengo SIM** → muestra plan recomendado (precio, GB, duración) y productos útiles.

Incluye modo kiosco con auto‑reset a bienvenida tras 45s de inactividad.

## Archivos

- `index.html` — Flujo completo de 3 pantallas.
- `assets/css/styles.css` — Base, dark mode.
- `assets/css/kiosk.css` — Estilos para botones grandes/QR.
- `assets/js/kiosk.js` — Idiomas, navegación, inactividad.
- `assets/img/` — Colocá tus QR: qr-wifi.png, qr-activation.png, qr-topup.png (y cualquier imagen adicional).

## Personalización rápida

- **Textos por idioma:** editar en `assets/js/kiosk.js` (objeto i18n).
- **Valores del plan (precio/GB/duración):** en `index.html` (ids: plan-price, plan-gb, plan-time).
- **Tiempo de inactividad:** cambiar `INACTIVITY_MS` en `kiosk.js`.

## Tecnologías

- HTML5, CSS3, JavaScript vanilla.

## Contacto

- **Nombre:** Romina Herrera
- **Correo electrónico:** herrera.romina.tamara@gmail.com
- **LinkedIn:** https://www.linkedin.com/in/romina-herreramicv/
