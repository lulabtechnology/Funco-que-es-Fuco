// app/programas/page.js

export default function ProgramasPage() {
  return (
    <>
      <section className="section section-subpage">
        <div className="section-header">
          <h1>Programas y áreas de trabajo</h1>
          <p>
            FUCO articula diferentes líneas de acción para acompañar a
            personas con discapacidad y a sus familias de manera integral.
          </p>
        </div>

        <div className="services-grid">
          <article className="service-card">
            <h2>Salud</h2>
            <p>
              Organización y participación en ferias de salud accesibles con
              atenciones médicas y orientación sobre servicios y derechos.
            </p>
          </article>

          <article className="service-card">
            <h2>Educación</h2>
            <p>
              Acompañamiento educativo, orientación a familias y promoción
              de una cultura inclusiva en las comunidades.
            </p>
          </article>

          <article className="service-card">
            <h2>Rehabilitación física y psicológica</h2>
            <p>
              Procesos de rehabilitación, acompañamiento psicológico y
              programas para fortalecer la resiliencia y el bienestar
              emocional.
            </p>
          </article>

          <article className="service-card">
            <h2>Capacitación laboral</h2>
            <p>
              Formación para el trabajo, desarrollo de habilidades y
              preparación para oportunidades laborales y emprendimiento.
            </p>
          </article>

          <article className="service-card">
            <h2>Donaciones y equipamiento</h2>
            <p>
              Donaciones frecuentes y apoyo en equipamiento y herramientas
              necesarias para cada proceso de inclusión.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
