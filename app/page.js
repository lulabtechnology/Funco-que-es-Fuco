// app/page.js
import Image from "next/image";
import WhatsAppButton from "../components/WhatsAppButton";
import { ADDRESS, EMAIL, PHONE_NUMBER } from "../lib/constants";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section id="inicio" className="hero">
        <div className="hero-inner">
          <div className="hero-left">
            <span className="hero-pill">
              Fundación sin fines de lucro · Desde 2011
            </span>

            <h1 className="hero-title">
              Fundación Colores (FUCO)
            </h1>

            <p className="hero-subtitle">
              Desarrollando nuevos estilos de vida para las personas con
              discapacidad y sus familias, impulsando resiliencia,
              inclusión y autonomía.
            </p>

            <div className="hero-actions">
              <WhatsAppButton>
                Escribir a FUCO por WhatsApp
              </WhatsAppButton>

              <div className="hero-contact-mini">
                <p>También puedes llamar o escribir a:</p>
                <p className="hero-contact-strong">{PHONE_NUMBER}</p>
                <p className="hero-contact-muted">{EMAIL}</p>
              </div>
            </div>

            <div className="hero-tags">
              <span>Salud</span>
              <span>Educación</span>
              <span>Rehabilitación física y psicológica</span>
              <span>Capacitación laboral</span>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-card">
              <div className="hero-logo-wrap">
                <div className="hero-logo-circle">
                  <Image
                    src="/logo-fuco.png"
                    alt="Logo Fundación Colores (FUCO)"
                    width={72}
                    height={72}
                    className="hero-logo-image"
                  />
                </div>
                <div>
                  <h2>Inclusión con propósito</h2>
                  <p>
                    Acompañamiento integral para personas con discapacidad
                    y sus familias.
                  </p>
                </div>
              </div>

              <div className="hero-card-grid">
                <div className="hero-card-item">
                  <h3>Apoyo integral</h3>
                  <p>
                    Desde atenciones de salud y rehabilitación, hasta
                    acompañamiento emocional y orientación social.
                  </p>
                </div>
                <div className="hero-card-item">
                  <h3>Formación y empleo</h3>
                  <p>
                    Capacitaciones laborales para promover autonomía
                    económica y acceso a oportunidades.
                  </p>
                </div>
                <div className="hero-card-item">
                  <h3>Familias acompañadas</h3>
                  <p>
                    Programas de apoyo, manejo del duelo y donaciones
                    según las necesidades.
                  </p>
                </div>
              </div>

              <div className="hero-card-footer">
                <p className="hero-address-label">Estamos en</p>
                <p className="hero-address">{ADDRESS}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE FUCO */}
      <section id="sobre" className="section">
        <div className="section-header">
          <h2>Acerca de Fundación Colores (FUCO)</h2>
          <p>
            FUCO nace de la experiencia de su fundadora, Yisel Vásquez, una
            historia de resiliencia que se transforma en un motor de cambio
            para otras personas con discapacidad y sus familias.
          </p>
        </div>

        <div className="section-grid">
          <div className="section-card">
            <h3>Nuestra misión</h3>
            <p>
              Empoderar integralmente a las personas con discapacidad,
              derribando barreras y ofreciendo apoyo económico, formación
              laboral y acompañamiento psicológico y social para promover
              la autosuficiencia y una vida digna.
            </p>
          </div>

          <div className="section-card">
            <h3>Nuestra visión</h3>
            <p>
              Construir una sociedad donde cada persona con discapacidad
              cuente con las herramientas y el entorno necesarios para
              desarrollarse plenamente y participar activamente en la
              comunidad.
            </p>
          </div>

          <div className="section-card section-card-soft">
            <h3>Valores que nos guían</h3>
            <ul>
              <li>Resiliencia y respeto por la dignidad humana.</li>
              <li>Inclusión y participación activa.</li>
              <li>Acompañamiento cercano a las familias.</li>
              <li>Compromiso ético y transparencia.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PROGRAMAS Y SERVICIOS */}
      <section id="programas" className="section section-alt">
        <div className="section-header">
          <h2>Programas y servicios</h2>
          <p>
            FUCO ofrece una gama integral de servicios para mejorar la
            calidad de vida de las personas con discapacidad y sus
            familias, promoviendo su plena inclusión y autonomía.
          </p>
        </div>

        <div className="services-grid">
          <article className="service-card">
            <h3>Salud y rehabilitación</h3>
            <ul>
              <li>Ferias de salud accesibles con atenciones médicas.</li>
              <li>Rehabilitación física y psicológica.</li>
              <li>Orientación sobre derechos y programas disponibles.</li>
            </ul>
          </article>

          <article className="service-card">
            <h3>Educación y capacitación</h3>
            <ul>
              <li>Acompañamiento educativo para personas con discapacidad.</li>
              <li>Capacitación laboral y desarrollo de habilidades.</li>
              <li>Talleres sobre manejo del duelo y resiliencia.</li>
            </ul>
          </article>

          <article className="service-card">
            <h3>Apoyo a familias</h3>
            <ul>
              <li>Acompañamiento psicológico y social.</li>
              <li>Espacios de escucha y contención emocional.</li>
              <li>Orientación para procesos de inclusión en la comunidad.</li>
            </ul>
          </article>

          <article className="service-card">
            <h3>Donaciones y equipamiento</h3>
            <ul>
              <li>Donaciones periódicas según las necesidades detectadas.</li>
              <li>
                Apoyo con equipamiento y herramientas para procesos de
                inclusión.
              </li>
              <li>
                Articulación con aliados y empresas para ampliar el impacto.
              </li>
            </ul>
          </article>
        </div>
      </section>

      {/* CÓMO AYUDAR */}
      <section id="ayuda" className="section">
        <div className="section-header">
          <h2>¿Cómo puedes apoyar a FUCO?</h2>
          <p>
            Cada aporte suma: tiempo, conocimiento, recursos o difusión.
            Juntos podemos cambiar la mirada sobre la discapacidad.
          </p>
        </div>

        <div className="support-grid">
          <div className="support-card">
            <h3>Donaciones</h3>
            <p>
              Tu apoyo económico ayuda a sostener ferias de salud,
              capacitaciones, rehabilitación y apoyo directo a familias.
            </p>
          </div>

          <div className="support-card">
            <h3>Voluntariado</h3>
            <p>
              Puedes aportar desde tu profesión o experiencia: salud,
              educación, psicología, trabajo social, logística, etc.
            </p>
          </div>

          <div className="support-card">
            <h3>Alianzas</h3>
            <p>
              Empresas y organizaciones pueden sumarse como aliados para
              proyectos, programas de inclusión y apoyo sostenido.
            </p>
          </div>
        </div>

        <div className="support-cta">
          <WhatsAppButton>
            Quiero apoyar a la Fundación
          </WhatsAppButton>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="section section-contact">
        <div className="section-header">
          <h2>Contacto</h2>
          <p>
            Si quieres más información, necesitas apoyo o deseas colaborar
            con FUCO, puedes escribir directamente por WhatsApp o por los
            siguientes canales.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-card">
            <h3>Datos de contacto</h3>
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
              <li>
                <span className="contact-label">Sitio web:</span>{" "}
                <a
                  href="https://www.fundacioncoloresfuco.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  fundacioncoloresfuco.com
                </a>
              </li>
            </ul>
          </div>

          <div className="contact-card contact-card-highlight">
            <h3>Escríbenos ahora</h3>
            <p>
              Atienden principalmente por WhatsApp. Cuéntales tu situación
              o cómo te gustaría colaborar, y el equipo de FUCO te
              responderá a la brevedad.
            </p>

            <WhatsAppButton />
          </div>
        </div>
      </section>
    </>
  );
}
