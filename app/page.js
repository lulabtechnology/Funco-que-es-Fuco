// app/page.js
import Image from "next/image";
import WhatsAppButton from "../components/WhatsAppButton";
import ContactForm from "../components/ContactForm";
import {
  ADDRESS,
  EMAIL,
  PHONE_NUMBER,
  WHATSAPP_NUMBER,
  SERVICES
} from "../lib/constants";

export default function HomePage() {
  return (
    <>
      {/* HERO – portada colorida */}
      <section id="inicio" className="hero">
        <div className="hero-inner">
          <div className="hero-left">
            <span className="hero-pill">
              FUNDACIÓN SIN FINES DE LUCRO · DESDE 2011
            </span>

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
              <WhatsAppButton>Escribir a FUCO por WhatsApp</WhatsAppButton>
            </div>

            <div className="hero-tags">
              <span>Salud</span>
              <span>Educación</span>
              <span>Rehabilitación física y psicológica</span>
              <span>Capacitación laboral</span>
              <span>Donaciones</span>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-card">
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
                    Acompañamiento integral para personas con discapacidad
                    y sus familias, desde la salud y la rehabilitación hasta
                    el apoyo social y económico.
                  </p>
                </div>
              </div>

              <div className="hero-card-grid">
                <div className="hero-card-item">
                  <h3>Apoyo integral</h3>
                  <p>
                    Ferias de salud, orientaciones, rehabilitación física y
                    psicológica y acompañamiento cercano.
                  </p>
                </div>
                <div className="hero-card-item">
                  <h3>Familias acompañadas</h3>
                  <p>
                    Procesos de duelo, contención emocional y espacios de
                    escucha para las familias.
                  </p>
                </div>
                <div className="hero-card-item">
                  <h3>Oportunidades</h3>
                  <p>
                    Capacitaciones laborales y apoyo en equipamiento para
                    promover autonomía e inclusión.
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
            FUCO nace de la experiencia y resiliencia de su fundadora, Yisel
            Vásquez, quien transformó su propia historia como persona con
            discapacidad en un impulso para acompañar a otras personas y
            familias.
          </p>
        </div>

        <div className="section-grid">
          <article className="section-card">
            <h3>Nuestra misión</h3>
            <p>
              Empoderar integralmente a las personas con discapacidad,
              derribando barreras y ofreciendo apoyo económico, formación
              laboral y acompañamiento psicológico y social para promover la
              autosuficiencia y una vida digna.
            </p>
          </article>

          <article className="section-card">
            <h3>Nuestra visión</h3>
            <p>
              Construir una sociedad donde cada persona con discapacidad
              cuente con las herramientas y el entorno necesarios para
              desarrollarse plenamente y participar activamente en la
              comunidad.
            </p>
          </article>

          <article className="section-card section-card-soft">
            <h3>Lo que nos mueve</h3>
            <ul>
              <li>Resiliencia y respeto por la dignidad humana.</li>
              <li>Inclusión real, no solo en el discurso.</li>
              <li>
                Acompañamiento cercano a las familias en momentos difíciles.
              </li>
              <li>Compromiso ético, transparencia y trabajo en red.</li>
            </ul>
          </article>
        </div>
      </section>

      {/* PROGRAMAS Y SERVICIOS */}
      <section id="programas" className="section section-alt">
        <div className="section-header">
          <h2>Servicios y apoyo</h2>
          <p>
            FUCO ofrece una gama integral de servicios para mejorar la
            calidad de vida de las personas con discapacidad y sus familias,
            promoviendo su plena inclusión y autonomía.
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
            <h3>Educación y capacitación laboral</h3>
            <ul>
              <li>
                Acompañamiento educativo y desarrollo de habilidades
                básicas.
              </li>
              <li>
                Capacitaciones para impulsar la autonomía económica y la
                empleabilidad.
              </li>
              <li>Talleres sobre manejo del duelo y resiliencia.</li>
            </ul>
          </article>

          <article className="service-card">
            <h3>Apoyo a familias</h3>
            <ul>
              <li>Acompañamiento psicológico y social.</li>
              <li>
                Espacios de escucha, contención y orientación en momentos
                de crisis.
              </li>
              <li>
                Redes de apoyo para no transitar el proceso en soledad.
              </li>
            </ul>
          </article>

          <article className="service-card">
            <h3>Donaciones y equipamiento</h3>
            <ul>
              <li>
                Donaciones frecuentes según las necesidades detectadas.
              </li>
              <li>
                Apoyo en equipamiento y herramientas necesarias para cada
                proceso de inclusión.
              </li>
              <li>
                Articulación con empresas y aliados para ampliar el impacto.
              </li>
            </ul>
          </article>
        </div>
      </section>

           {/* SECCIÓN DE FOTOS Y VIDEO */}
      <section id="galeria" className="section section-media">
        <div className="section-header">
          <h2>FUCO en imágenes</h2>
          <p>
            La Fundación Colores está viva en cada rostro, feria y actividad
            comunitaria. Estas imágenes muestran parte del trabajo que se
            realiza día a día.
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
              Yisel Vásquez, fundadora de FUCO, cuyo testimonio de
              resiliencia inspira el trabajo de la fundación.
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
              Actividades comunitarias y ferias donde se comparte, se
              acompaña y se construyen oportunidades.
            </figcaption>
          </figure>

          <div className="media-video-card">
            <div className="media-video-frame">
              <video controls className="media-video">
                <source src="/fuco-video.mp4" type="video/mp4" />
                Tu navegador no soporta video HTML5.
              </video>
            </div>
            <p className="media-video-caption">
              Video institucional de Fundación Colores (FUCO), para conocer
              más de cerca su labor.
            </p>
          </div>
        </div>
      </section>


      {/* CÓMO AYUDAR */}
      <section id="ayuda" className="section">
        <div className="section-header">
          <h2>¿Cómo puedes apoyar a FUCO?</h2>
          <p>
            Cada aporte suma: tiempo, conocimiento, recursos o simplemente
            compartir la información. Juntos podemos cambiar la mirada sobre
            la discapacidad.
          </p>
        </div>

        <div className="support-grid">
          <div className="support-card">
            <h3>Donaciones</h3>
            <p>
              Tu apoyo económico permite continuar con ferias de salud,
              rehabilitación, donaciones y acompañamiento directo a
              familias.
            </p>
          </div>

          <div className="support-card">
            <h3>Voluntariado</h3>
            <p>
              Desde el área de salud, educación, psicología, trabajo social,
              logística y más, hay muchas formas de sumarte como voluntario.
            </p>
          </div>

          <div className="support-card">
            <h3>Alianzas</h3>
            <p>
              Empresas, organizaciones y personas pueden convertirse en
              aliados estratégicos para proyectos e iniciativas de inclusión.
            </p>
          </div>
        </div>

        <div className="support-cta">
          <WhatsAppButton>Quiero apoyar a la Fundación</WhatsAppButton>
        </div>
      </section>

      {/* CONTACTO – AHORA AL FINAL */}
      <section id="contacto" className="section section-contact">
        <div className="section-header">
          <h2>Contacto</h2>
          <p>
            Si necesitas apoyo, más información sobre los programas o deseas
            colaborar con Fundación Colores (FUCO), puedes escribir por
            WhatsApp, llamar o completar el formulario para enviar un
            correo.
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
                <span className="contact-label">WhatsApp principal:</span>{" "}
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
              <li>
                <span className="contact-label">Instagram:</span>{" "}
                <a
                  href="https://www.instagram.com/fundacioncoloresfuco?igsh=MTI0OG9vY3VhdzI1bw%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @fundacioncoloresfuco
                </a>
              </li>
            </ul>

            <div style={{ marginTop: "1rem" }}>
              <WhatsAppButton>Escribir por WhatsApp</WhatsAppButton>
            </div>
          </div>

          <div className="contact-card contact-card-highlight">
            <h3>Escríbenos por correo</h3>
            <p>
              Completa el formulario y se abrirá tu aplicación de correo con
              todos los datos llenos para que solo tengas que revisar y
              enviar.
            </p>

            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
