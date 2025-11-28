// app/layout.js
import "./globals.css";

export const metadata = {
  title: "Fundación Colores (FUCO)",
  description:
    "Fundación Colores (FUCO) – Desarrollando nuevos estilos de vida para las personas con discapacidad y sus familias.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <div className="app-shell">
          {children}
        </div>
      </body>
    </html>
  );
}
