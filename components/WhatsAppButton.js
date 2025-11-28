// components/WhatsAppButton.js
"use client";

import { WHATSAPP_NUMBER } from "../lib/constants";

export default function WhatsAppButton({ children }) {
  const cleanNumber = WHATSAPP_NUMBER.replace(/[^0-9]/g, "");
  const defaultMessage =
    "Hola, me gustaría recibir más información sobre Fundación Colores (FUCO).";
  const href = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(
    defaultMessage
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      <span className="whatsapp-icon">💬</span>
      <span className="whatsapp-text">
        {children || "Escribir a FUCO por WhatsApp"}
      </span>
    </a>
  );
}
