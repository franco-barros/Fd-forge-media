"use client";

import React, { useState, useEffect } from "react";

import styles from "../../styles/practicearea/PracticeAreas.module.css";

import { Layers, Target, Megaphone, Smartphone, Palette } from "lucide-react";

import { FaCheck } from "react-icons/fa";

import PracticeAreasMobile from "./practiceareasmobile";

import { FadeInOnScroll } from "../shared/fadeInonscroll";

interface PracticeArea {
  id: string;

  title: string;

  items: string[];

  icon?: React.ReactNode;
}

const practiceAreas: PracticeArea[] = [
  {
    id: "1",

    title: "Marketing Digital",

    items: [
      "Estrategias digitales personalizadas",

      "Planificación y ejecución de campañas",

      "Análisis y optimización de resultados",

      "Posicionamiento de marca",
    ],

    icon: <Target size={28} />,
  },

  {
    id: "2",

    title: "Publicidad Online",

    items: [
      "Campañas en Meta Ads",

      "Campañas en Google Ads",

      "Segmentación avanzada",

      "Optimización de conversiones",
    ],

    icon: <Megaphone size={28} />,
  },

  {
    id: "3",

    title: "Redes Sociales",

    items: [
      "Gestión de Instagram y Facebook",

      "Planificación de contenido",

      "Calendario editorial",

      "Interacción con la comunidad",
    ],

    icon: <Smartphone size={28} />,
  },

  {
    id: "4",

    title: "Branding y Crecimiento",

    items: [
      "Diseño de identidad visual",

      "Creación de contenido",

      "Estrategias de crecimiento",

      "Desarrollo de marca",
    ],

    icon: <Palette size={28} />,
  },
];

const PracticeAreas: React.FC = () => {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const renderArea = (area: PracticeArea) => (
    <article key={area.id} id={`area-${area.id}`} className={styles.areaCard}>
      {area.icon && <div className={styles.iconWrapper}>{area.icon}</div>}

      <h4>{area.title}</h4>

      <ul className={styles.itemList}>
        {area.items.map((item, index) => (
          <li key={index}>
            <span className={styles.checkCircle}>
              <FaCheck size={10} />
            </span>

            {item}
          </li>
        ))}
      </ul>
    </article>
  );

  return (
    <section id="section-practiceareas" className={styles.practiceAreasSection}>
      <FadeInOnScroll>
        <div className={styles.badgeWrapper}>
          <span className={styles.badge}>
            <Layers size={18} />
            Lo que hacemos
          </span>
        </div>

        <p className={styles.description}>
          Diseñamos estrategias digitales, creamos contenido de alto impacto y
          desarrollamos campañas publicitarias orientadas a resultados para
          impulsar el crecimiento de tu marca.
        </p>
      </FadeInOnScroll>

      <FadeInOnScroll delay={0.15}>
        {isMobile ? (
          <PracticeAreasMobile practiceAreas={practiceAreas} />
        ) : (
          <div className={styles.gridDesktop}>
            {practiceAreas.map(renderArea)}
          </div>
        )}
      </FadeInOnScroll>
    </section>
  );
};

export default PracticeAreas;
