// components/ContactForm.js
"use client";

import { EMAIL } from "../lib/constants";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    mensaje: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { nombre, correo, telefono, mensaje } = formData;

    const subject = `Consulta desde la web de Fundación Colores (FUCO)`;
    const bodyLines = [
      `Nombre: ${nombre}`,
      `Correo: ${correo}`,
      `Teléfono: ${telefono}`,
      "",
      "Mensaje:",
      mensaje
    ];

    const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

    // Abre el cliente de correo con todo llenito
    window.location.href = mailto;
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form-row">
        <label>
          Nombre completo
          <input
            type="text"
            name="nombre"
            required
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Nombre y apellido"
          />
        </label>
      </div>

      <div className="contact-form-row contact-form-row-inline">
        <label>
          Correo electrónico
          <input
            type="email"
            name="correo"
            required
            value={formData.correo}
            onChange={handleChange}
            placeholder="tucorreo@ejemplo.com"
          />
        </label>

        <label>
          Teléfono / WhatsApp
          <input
            type="tel"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            placeholder="+507 ..."
          />
        </label>
      </div>

      <div className="contact-form-row">
        <label>
          Mensaje
          <textarea
            name="mensaje"
            rows={4}
            required
            value={formData.mensaje}
            onChange={handleChange}
            placeholder="Cuéntanos brevemente en qué podemos apoyarte."
          />
        </label>
      </div>

      <button type="submit" className="contact-form-button">
        Completar correo para enviar
      </button>

      <p className="contact-form-helper">
        Al hacer clic se abrirá tu aplicación de correo con toda la
        información escrita. Solo revisas y envías.
      </p>
    </form>
  );
}
