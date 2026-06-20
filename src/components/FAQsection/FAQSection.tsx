"use client";

import React from "react";

import { CircleHelp } from "lucide-react";

import styles from "../../styles/faqsection/FAQSection.module.css";

import { FadeInOnScroll } from "../shared/fadeInonscroll";

import { FAQTabsCarousel } from "./FAQtabscarousel";

const FAQSection: React.FC = () => {
  return (
    <section className={styles.faqSection} id="faq">
      <FadeInOnScroll>
        <div className={styles.badgeWrapper}>
          <span className={styles.badge}>
            <CircleHelp size={18} />
            Preguntas frecuentes
          </span>
        </div>

        <h2 className={styles.title}>
          Resolvemos tus dudas sobre marketing digital.
        </h2>

        <p className={styles.description}>
          Conocé cómo trabajamos en FD Forge Media, cuáles son nuestros
          servicios y cómo ayudamos a potenciar marcas, negocios y
          emprendimientos.
        </p>

        <FAQTabsCarousel />
      </FadeInOnScroll>
    </section>
  );
};

export default FAQSection;
