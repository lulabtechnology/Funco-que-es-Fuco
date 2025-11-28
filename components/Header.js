// components/Header.js
import Link from "next/link";
import Image from "next/image";
import {
  INSTAGRAM_URL,
  FACEBOOK_URL,
  WHATSAPP_URL
} from "../lib/constants";

const navLinks = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Sobre FUCO", href: "/#sobre" },
  { label: "Programas", href: "/#programas" },
  { label: "Cómo ayudar", href: "/#ayuda" },
  { label: "Contacto", href: "/#contacto" }
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/#inicio" className="header-brand">
          <div className="header-logo">
            <Image
              src="/logo-fuco.png"
              alt="Fundación Colores (FUCO)"
              width={40}
              height={40}
            />
          </div>
          <div className="header-text">
            <span className="header-title">Fundación Colores</span>
            <span className="header-subtitle">FUCO</span>
          </div>
        </Link>

        <nav className="header-nav">
          {navLinks.map((item) => (
            <Link key={item.href} href={item.href} className="header-link">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="header-cta"
          >
            WhatsApp
          </a>

          <div className="header-social">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Fundación Colores"
            >
              <span className="social-icon">IG</span>
            </a>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Fundación Colores"
            >
              <span className="social-icon">FB</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
