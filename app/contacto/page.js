// app/contacto/page.js
import WhatsAppButton from "../../components/WhatsAppButton";
import {
  ADDRESS,
  EMAIL,
  PHONE_NUMBER,
  WHATSAPP_NUMBER
} from "../../lib/constants";

export default function ContactoPage() {
  return (
    <>
      <section className="section section-subpage section-contact">
        <div className="section-header">
          <h1>Contacto Fundación Colores (FUCO)</h1>
          <p>
            Si necesitas información, apoyo o deseas colaborar con la
            Fundación, puedes usar cualquiera de estos canales.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-card">
            <h2>Datos generales</h2>
            <ul>
              <li>
                <span className="contact-label">Teléfono fijo:</span>{" "}
                {PHONE_NUMBER}
              </li>
              <li>
                <span className="contact-label">WhatsApp:</span>{" "}
                {WHATSAPP_NUMBER}
              </li>
              <li>
                <span className="contact-label">Correo:</span> {EMAIL}
              </li>
              <li>
                <span className="contact-label">Dirección:</span> {ADDRESS}
              </li>
            </ul>
          </div>

          <div className="contact-card contact-card-highlight">
            <h2>Escribir ahora por WhatsApp</h2>
            <p>
              El canal más rápido de contacto es WhatsApp. Envía tu
              mensaje y explica brevemente tu caso o la forma en que
              quieres apoyar.
            </p>
            <WhatsAppButton>
              Abrir chat de WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </section>
    </>
  );
}
