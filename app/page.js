import Image from "next/image";

const WHATSAPP_NUMBER = "50766651109";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hola, me gustaría recibir más información sobre Fundación Colores (FUCO)."
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export default function Home() {
  return (
    <div className="app-shell">
      <main className="main">
        {/* HERO */}
        <section className="hero">
          <div className="hero-inner">
            {/* LADO IZQUIERDO */}
            <div className="hero-left">
              <div className="hero-pill">
                Fundación sin fines de lucro · Desde 2011
              </div>

              <h1 className="hero-title">
                Fundación{" "}
                <span className="hero-title-colores">
                  <span>C</span>
                  <span>o</span>
                  <span>l</span>
                  <span>o</span>
                  <span>r</span>
                  <span>e</span>
                  <span>s</span>
                </span>{" "}
                <span className="hero-title-short">(FUCO)</span>
              </h1>

              <p className="hero-subtitle">
                Desarrollando nuevos estilos de vida para las personas con
                discapacidad y sus familias, impulsando resiliencia,
                inclusión y autonomía.
              </p>

              <div className="hero-actions">
                <a
                  href={WHATSAPP_URL}
                  className="whatsapp-button"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="whatsapp-icon">💬</span>
                  <span className="whatsapp-text">
                    Escribir a FUCO por WhatsApp
                  </span>
                </a>
              </div>

              <div style={{ marginTop: "0.9rem", marginBottom: "0.6rem" }}>
                <p style={{ fontSize: "0.9rem", color: "#6b7280" }}>
                  También puedes llamar o escribir a:
                </p>
                <p
                  style={{
                    fontSize: "0.98rem",
                    fontWeight: 600,
                    color: "#111827",
                  }}
                >
                  +507 382-3498 · +507 6665-1109
                </p>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "#4b5563",
                    marginTop: "0.15rem",
                  }}
                >
                  Info@coloresfuco.org
                </p>
              </div>

              <div className="hero-tags">
                <span>Salud</span>
                <span>Educación</span>
                <span>Rehabilitación física y psicológica</span>
                <span>Capacitación laboral</span>
                <span>Donaciones</span>
                <span>Apoyo en equipamiento y herramientas</span>
              </div>
            </div>

            {/* LADO DERECHO: TARJETA RESUMEN CON LOGO */}
            <div className="hero-right">
              <aside className="hero-card">
                <div className="hero-logo-wrap">
                  <div className="hero-logo-circle">
                    <Image
                      src="/logo-fuco.png"
                      alt="Logo Fundación Colores (FUCO)"
                      width={64}
                      height={64}
                      className="hero-logo-image"
                    />
                  </div>
                  <div>
                    <h2>Inclusión con propósito</h2>
                    <p>
                      Acompañamiento integral para personas con discapacidad y
                      sus familias.
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
                    <h3>Red de programas</h3>
                    <p>
                      Programas de educación, capacitación laboral y entrega de
                      ayudas técnicas según cada proceso de inclusión.
                    </p>
                  </div>
                </div>

                <div className="hero-card-footer">
                  <div className="hero-address-label">Dirección</div>
                  <div className="hero-address">
                    Ciudad de Panamá, República de Panamá.
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* PROGRAMAS PRINCIPALES */}
        <section id="programas" className="section section-alt">
          <div className="section-header">
            <h2>Sociedad · Programas</h2>
            <p>
              Fundación Colores (FUCO) desarrolla programas que responden a las
              necesidades reales de las personas con discapacidad y sus
              familias.
            </p>
          </div>

          <div className="section-grid">
            <div className="section-card">
              <h3>Salud</h3>
              <p>
                Jornadas de salud, evaluaciones y acompañamiento para cuidar el
                bienestar físico y emocional de cada persona.
              </p>
            </div>

            <div className="section-card">
              <h3>Educación</h3>
              <p>
                Procesos de formación, orientación y sensibilización para
                fortalecer capacidades y promover una cultura de inclusión.
              </p>
            </div>

            <div className="section-card">
              <h3>Rehabilitación física y psicológica</h3>
              <p>
                Acompañamiento en rehabilitación, apoyo psicológico y
                articulación con profesionales y servicios especializados.
              </p>
            </div>

            <div className="section-card">
              <h3>Capacitación laboral</h3>
              <p>
                Capacitación para el empleo, desarrollo de habilidades y apoyo
                para el emprendimiento inclusivo.
              </p>
            </div>

            <div className="section-card">
              <h3>Donaciones</h3>
              <p>
                Canalización de donaciones que se convierten en apoyos
                concretos para familias y personas con discapacidad.
              </p>
            </div>

            <div className="section-card">
              <h3>Apoyo en equipamiento y herramientas</h3>
              <p>
                Gestión de ayudas técnicas, equipamiento y recursos necesarios
                para cada proceso de inclusión.
              </p>
            </div>
          </div>
        </section>

        {/* ACOMPAÑAMIENTO INTEGRAL */}
        <section id="acompanamiento" className="section">
          <div className="section-header">
            <h2>Inclusión con acompañamiento integral</h2>
            <p>
              FUCO acompaña a las personas con discapacidad y a sus familias de
              manera cercana, reconociendo cada historia, contexto y necesidad.
            </p>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <h3>Acompañamiento a familias</h3>
              <p>
                Escucha activa, contención y orientación para que las familias
                se sientan acompañadas en todo el proceso.
              </p>
              <ul>
                <li>Visitas y seguimiento personalizado.</li>
                <li>Orientación sobre recursos y trámites.</li>
                <li>Red de apoyo entre familias.</li>
              </ul>
            </div>

            <div className="service-card">
              <h3>Articulación con la comunidad</h3>
              <p>
                Trabajo conjunto con organizaciones, empresas y voluntariado para
                abrir espacios de participación real.
              </p>
              <ul>
                <li>Actividades comunitarias y ferias.</li>
                <li>Vinculación con redes de apoyo locales.</li>
                <li>Promoción de entornos accesibles.</li>
              </ul>
            </div>

            <div className="service-card">
              <h3>Fortalecimiento de autonomía</h3>
              <p>
                Acciones orientadas a desarrollar habilidades, independencia y
                toma de decisiones informadas.
              </p>
              <ul>
                <li>Talleres y espacios formativos.</li>
                <li>Apoyo para la movilidad y la comunicación.</li>
                <li>Orientación en proyectos de vida.</li>
              </ul>
            </div>

            <div className="service-card">
              <h3>Red de aliados y voluntariado</h3>
              <p>
                Personas y organizaciones que se suman con tiempo, recursos y
                servicios para ampliar el impacto de la fundación.
              </p>
              <ul>
                <li>Voluntariado en actividades y jornadas.</li>
                <li>Alianzas institucionales y empresariales.</li>
                <li>Campañas de sensibilización y apoyo.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* GALERÍA DE FOTOS (SIN VIDEO) */}
        <section id="galeria" className="section section-media">
          <div className="section-header">
            <h2>FUCO en imágenes</h2>
            <p>
              Cada actividad, entrega y jornada refleja el compromiso con la
              inclusión y la dignidad de las personas con discapacidad.
            </p>
          </div>

          <div className="media-grid">
            <figure className="media-card">
              <div className="media-image-wrapper portrait">
                <Image
                  src="/fuco-fundadora.jpg"
                  alt="Yisel Vásquez, fundadora de Fundación Colores (FUCO)"
                  width={600}
                  height={900}
                  className="media-image"
                />
              </div>
              <figcaption>
                Yisel Vásquez, fundadora de FUCO, impulsando una visión
                de esperanza y resiliencia.
              </figcaption>
            </figure>

            <figure className="media-card">
              <div className="media-image-wrapper">
                <Image
                  src="/fuco-darien.jpg"
                  alt="Actividad comunitaria de Fundación Colores"
                  width={900}
                  height={600}
                  className="media-image"
                />
              </div>
              <figcaption>
                Participación en actividades comunitarias y ferias donde
                se comparte, se aprende y se construyen oportunidades.
              </figcaption>
            </figure>

            <figure className="media-card">
              <div className="media-image-wrapper portrait">
                <Image
                  src="/fuco-actividad-1.jpg"
                  alt="Personas en proceso de rehabilitación y apoyo en FUCO"
                  width={768}
                  height={1024}
                  className="media-image"
                />
              </div>
              <figcaption>
                Acompañamiento a personas con discapacidad en su proceso
                de rehabilitación y autonomía.
              </figcaption>
            </figure>

            <figure className="media-card">
              <div className="media-image-wrapper portrait">
                <Image
                  src="/fuco-actividad-2.jpg"
                  alt="Jóvenes voluntarios apoyando en actividades de FUCO"
                  width={768}
                  height={1024}
                  className="media-image"
                />
              </div>
              <figcaption>
                Voluntariado comprometido que une manos y corazones para
                servir a la comunidad.
              </figcaption>
            </figure>

            <figure className="media-card">
              <div className="media-image-wrapper portrait">
                <Image
                  src="/fuco-actividad-3.jpg"
                  alt="Entrega de donaciones a personas beneficiarias de FUCO"
                  width={768}
                  height={1024}
                  className="media-image"
                />
              </div>
              <figcaption>
                Donaciones que se convierten en apoyo directo y concreto
                a quienes más lo necesitan.
              </figcaption>
            </figure>

            <figure className="media-card">
              <div className="media-image-wrapper portrait">
                <Image
                  src="/fuco-actividad-4.jpg"
                  alt="Equipo de salud y voluntariado trabajando junto a FUCO"
                  width={768}
                  height={1024}
                  className="media-image"
                />
              </div>
              <figcaption>
                Trabajo coordinado con personal de salud y aliados para
                brindar atención integral.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* CÓMO APOYAR Y DONACIONES */}
        <section id="apoyo" className="section section-alt">
          <div className="section-header">
            <h2>¿Cómo puedes apoyar a FUCO?</h2>
            <p>
              Cada aporte suma: tiempo, conocimiento, recursos o simplemente
              compartir la información. Juntos podemos cambiar la mirada
              sobre la discapacidad.
            </p>
          </div>

          <div className="support-grid">
            <div className="support-card">
              <h3>Donaciones</h3>
              <p>
                ¿Quieres apoyar a <strong>Fundación Colores (FUCO)</strong>?
                Tus aportes permiten sostener programas, entregar ayudas
                técnicas y acompañar a más familias.
              </p>
              <p style={{ marginTop: "0.55rem", fontSize: "0.9rem" }}>
                Puedes realizar tus donaciones por transferencia a nuestra
                cuenta:
              </p>
              <p
                style={{
                  marginTop: "0.45rem",
                  fontSize: "0.9rem",
                  lineHeight: 1.6,
                }}
              >
                <strong>FUNDACIÓN COLORES (FUCO)</strong>
                <br />
                <strong>Cuenta de Ahorros · Banco General</strong>
                <br />
                <strong>04-3499853090-5</strong>
              </p>
            </div>

            <div className="support-card">
              <h3>Voluntariado</h3>
              <p>
                Puedes sumarte como voluntario en actividades, jornadas y
                programas específicos, aportando tu tiempo y habilidades.
              </p>
              <p style={{ marginTop: "0.5rem", fontSize: "0.9rem" }}>
                Escríbenos por WhatsApp o correo para conocer las opciones
                de voluntariado.
              </p>
            </div>

            <div className="support-card">
              <h3>Alianzas y proyectos</h3>
              <p>
                Si representas a una empresa, institución o colectivo, puedes
                impulsar proyectos conjuntos para ampliar el impacto.
              </p>
              <p style={{ marginTop: "0.5rem", fontSize: "0.9rem" }}>
                Juntos podemos diseñar iniciativas de responsabilidad social,
                inclusión laboral y apoyo comunitario.
              </p>
            </div>
          </div>
        </section>

        {/* CONTACTO FINAL */}
        <section id="contacto" className="section section-contact">
          <div className="section-header">
            <h2>Contacto</h2>
            <p>
              Si deseas más información, necesitas apoyo o quieres colaborar,
              puedes escribir directamente por WhatsApp o enviar un correo.
            </p>
          </div>

          <div className="contact-grid">
            <div className="contact-card contact-card-highlight">
              <h3>Escríbenos por WhatsApp</h3>
              <p>
                Para consultas rápidas y coordinación de apoyos, puedes
                escribirnos directamente:
              </p>

              <a
                href={WHATSAPP_URL}
                className="whatsapp-button"
                target="_blank"
                rel="noreferrer"
                style={{ marginTop: "0.8rem" }}
              >
                <span className="whatsapp-icon">💬</span>
                <span className="whatsapp-text">
                  Escribir a FUCO por WhatsApp
                </span>
              </a>

              <ul style={{ marginTop: "1rem" }}>
                <li>
                  <span className="contact-label">Teléfonos:</span>{" "}
                  +507 382-3498 · +507 6665-1109
                </li>
                <li>
                  <span className="contact-label">Correo:</span>{" "}
                  <a href="mailto:Info@coloresfuco.org">
                    Info@coloresfuco.org
                  </a>
                </li>
              </ul>
            </div>

            <div className="contact-card">
              <h3>Enviar mensaje por correo</h3>
              <p>
                Completa el siguiente formulario y se abrirá tu cliente de
                correo con la información preparada para enviar.
              </p>

              <form
                className="contact-form"
                action="mailto:Info@coloresfuco.org"
                method="GET"
                encType="text/plain"
              >
                <div className="contact-form-row">
                  <label>
                    Nombre completo
                    <input
                      type="text"
                      name="subject"
                      placeholder="Tu nombre"
                      required
                    />
                  </label>
                </div>

                <div className="contact-form-row contact-form-row-inline">
                  <label>
                    Correo electrónico
                    <input
                      type="email"
                      name="email"
                      placeholder="tucorreo@ejemplo.com"
                    />
                  </label>
                  <label>
                    Teléfono / WhatsApp
                    <input
                      type="tel"
                      name="telefono"
                      placeholder="+507 ..."
                    />
                  </label>
                </div>

                <div className="contact-form-row">
                  <label>
                    Mensaje
                    <textarea
                      name="body"
                      rows={4}
                      placeholder="Cuéntanos cómo podemos apoyarte o en qué te gustaría colaborar."
                      required
                    />
                  </label>
                </div>

                <button type="submit" className="contact-form-button">
                  Preparar correo
                </button>

                <p className="contact-form-helper">
                  Al hacer clic se abrirá tu aplicación de correo para que
                  puedas revisar y enviar el mensaje.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER CON LOGO TAMBIÉN AL FINAL */}
      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-col">
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.5rem" }}>
              <Image
                src="/logo-fuco.png"
                alt="Logo Fundación Colores (FUCO)"
                width={40}
                height={40}
              />
              <div>
                <p className="footer-brand">Fundación Colores (FUCO)</p>
                <p className="footer-text">
                  Contigo podemos cambiar la mirada sobre la discapacidad.
                </p>
              </div>
            </div>
            <p className="footer-text-sm">
              Desde 2011 acompañando a personas con discapacidad y sus
              familias en Panamá.
            </p>
          </div>

          <div className="footer-col">
            <p className="footer-heading">Contacto</p>
            <ul>
              <li>Tel: +507 382-3498</li>
              <li>WhatsApp: +507 6665-1109</li>
              <li>
                Correo:{" "}
                <a href="mailto:Info@coloresfuco.org">
                  Info@coloresfuco.org
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <p className="footer-heading">Redes sociales</p>
            <ul>
              <li>
                <a
                  href="https://www.instagram.com/fundacioncoloresfuco"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          Sitio informativo de Fundación Colores (FUCO). Diseño web por Lulab
          Tech.
        </div>
      </footer>
    </div>
  );
}
