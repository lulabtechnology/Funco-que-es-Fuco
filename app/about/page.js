// app/about/page.js
import WhatsAppButton from "../../components/WhatsAppButton";

export default function AboutPage() {
  return (
    <>
      <section className="section section-subpage">
        <div className="section-header">
          <h1>Acerca de Fundación Colores (FUCO)</h1>
          <p>
            FUCO nace del testimonio de vida de su fundadora, Yisel Vásquez,
            quien después de enfrentar su propia discapacidad decidió
            transformar su experiencia en un impulso para acompañar a otras
            personas y familias.
          </p>
        </div>

        <div className="section-grid">
          <article className="section-card">
            <h2>Historia</h2>
            <p>
              Fundación Colores fue creada en 2011 con el propósito de
              ofrecer un acompañamiento integral a personas con discapacidad
              y a sus familias, brindando herramientas para afrontar los
              retos físicos, emocionales y sociales.
            </p>
          </article>

          <article className="section-card">
            <h2>Enfoque</h2>
            <p>
              El trabajo de FUCO combina salud, educación, rehabilitación,
              apoyo emocional y capacitación laboral, siempre con una mirada
              centrada en la dignidad de la persona y en el fortalecimiento
              de su entorno familiar.
            </p>
          </article>
        </div>

        <div className="support-cta">
          <WhatsAppButton>
            Hablar con la Fundación
          </WhatsAppButton>
        </div>
      </section>
    </>
  );
}
