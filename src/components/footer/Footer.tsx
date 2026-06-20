"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

import styles from "../../styles/Footer.module.css";

const Footer = () => {
  const pathname = usePathname();

  const isAdmin = pathname.startsWith("/admin");
  const isHome = pathname === "/";

  if (isAdmin) return null;

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const sections = [
    { id: "hero", label: "Inicio" },

    { id: "aboutus", label: "Sobre Nosotros" },

    { id: "services", label: "Servicios" },

    { id: "contact", label: "Contacto" },
  ];

  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.content}>
        {/* INFORMACIÓN */}

        <div className={styles.section}>
          <div className={styles.iconWrapper}>
            <Image
              src="/logo/LogoFd3.png"
              alt="FD Forge Media"
              width={220}
              height={120}
              className={styles.icon}
            />
          </div>

          <p className={styles.description}>
            Impulsamos marcas, negocios y emprendedores mediante estrategias
            digitales innovadoras, contenido de alto impacto y campañas
            orientadas a resultados.
          </p>

          <div className={styles.socials}>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.instagram}
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.facebook}
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsapp}
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* ENLACES */}

        {isHome && (
          <div className={styles.section}>
            <h4 className={styles.subtitle}>Navegación</h4>

            <ul className={styles.list}>
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    type="button"
                    className={styles.linkButton}
                    onClick={() => scrollToSection(section.id)}
                  >
                    {section.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* SERVICIOS */}

        <div className={styles.section}>
          <h4 className={styles.subtitle}>Servicios</h4>

          <ul className={styles.list}>
            <li>Branding</li>

            <li>Social Media</li>

            <li>Publicidad Digital</li>

            <li>Diseño Web</li>

            <li>Estrategia Digital</li>
          </ul>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p className={styles.copy}>
          © 2026 FD Forge Media | Marketing, Branding & Publicidad Digital.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
