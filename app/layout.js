// app/layout.js
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Fundación Colores (FUCO)",
  description:
    "Desarrollando nuevos estilos de vida para las personas con discapacidad y sus familias."
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <div className="app-shell">
          <Header />
          <main className="main">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
