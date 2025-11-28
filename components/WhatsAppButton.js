// components/WhatsAppButton.js
import { WHATSAPP_URL } from "../lib/constants";

export default function WhatsAppButton({ children }) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      <span className="whatsapp-icon">💬</span>
      <span className="whatsapp-text">
        {children || "Escríbenos por WhatsApp"}
      </span>
    </a>
  );
}
