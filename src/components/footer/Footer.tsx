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
      section.scrollIntoView({ behavior: "smooth" });
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
        {/* LOGO + INFO */}
        <div className={styles.section}>
          <div className={styles.iconWrapper}>
            <Image
              src="/logo/LogoFd1.png"
              alt="FD Forge Media"
              width={160}
              height={90}
              className={styles.icon}
            />
          </div>

          <p className={styles.description}>
            Impulsamos marcas, negocios y emprendedores mediante estrategias
            digitales innovadoras, contenido de alto impacto y campañas
            orientadas a resultados.
          </p>
        </div>

        {/* NAVEGACIÓN */}
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
      </div>

      {/* REDES FUERA DEL GRID */}
      <div className={styles.socialWrapper}>
        <div className={styles.socials}>
          <a
            href="https://www.instagram.com/fdforgemedia"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.instagram}
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.facebook.com/fdforgemedia"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.facebook}
          >
            <FaFacebookF />
          </a>

          <a
            href="https://wa.me/542645878987"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsapp}
          >
            <FaWhatsapp />
          </a>
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
