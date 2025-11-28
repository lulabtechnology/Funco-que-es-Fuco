// components/Footer.js
import Link from "next/link";
import {
  INSTAGRAM_URL,
  FACEBOOK_URL,
  WHATSAPP_NUMBER
} from "../lib/constants";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-col">
          <p className="footer-brand">Fundación Colores (FUCO)</p>
          <p className="footer-text">
            Desarrollando nuevos estilos de vida para las personas con
            discapacidad y sus familias.
          </p>
          <p className="footer-text-sm">
            Fundación sin ánimo de lucro · Panamá
          </p>
        </div>

        <div className="footer-col">
          <p className="footer-heading">Navegación</p>
          <ul>
            <li>
              <Link href="/#sobre">Sobre FUCO</Link>
            </li>
            <li>
              <Link href="/#programas">Programas</Link>
            </li>
            <li>
              <Link href="/#ayuda">Cómo ayudar</Link>
            </li>
            <li>
              <Link href="/#contacto">Contacto</Link>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <p className="footer-heading">Redes</p>
          <ul>
            <li>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>WhatsApp: {WHATSAPP_NUMBER}</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Fundación Colores (FUCO).</p>
      </div>
    </footer>
  );
}
