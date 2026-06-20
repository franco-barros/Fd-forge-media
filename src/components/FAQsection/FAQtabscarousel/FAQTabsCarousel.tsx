"use client";

import React, { useState } from "react";

import styles from "../../../styles/faqsection/FAQTabsCarousel.module.css";

import {
  ChevronDown,
  Megaphone,
  Target,
  BriefcaseBusiness,
} from "lucide-react";

const faqItems = [
  {
    category: "Servicios",

    icon: <Megaphone size={18} />,

    questions: [
      {
        question: "¿Qué servicios ofrece FD Forge Media?",

        answer:
          "Ofrecemos marketing digital, gestión de redes sociales, publicidad online, branding, creación de contenido y estrategias de crecimiento.",
      },

      {
        question: "¿Trabajan con emprendedores y empresas?",

        answer:
          "Sí. Trabajamos con emprendedores, marcas personales, negocios locales y empresas de distintos tamaños.",
      },

      {
        question: "¿Pueden gestionar todas mis redes sociales?",

        answer:
          "Sí. Creamos estrategias, diseñamos contenido, planificamos publicaciones y optimizamos la presencia digital de tu marca.",
      },
    ],
  },

  {
    category: "Publicidad",

    icon: <Target size={18} />,

    questions: [
      {
        question: "¿Realizan campañas en Meta y Google Ads?",

        answer:
          "Sí. Creamos y optimizamos campañas publicitarias en Instagram, Facebook y Google para atraer nuevos clientes.",
      },

      {
        question: "¿Cuánto tiempo tardan en verse los resultados?",

        answer:
          "Depende del objetivo y la estrategia aplicada. Algunas campañas generan resultados en pocos días y otras requieren un proceso de optimización continuo.",
      },

      {
        question: "¿Necesito invertir dinero en publicidad?",

        answer:
          "Sí. La inversión publicitaria es independiente del servicio de gestión y se adapta al presupuesto de cada negocio.",
      },
    ],
  },

  {
    category: "Trabajo",

    icon: <BriefcaseBusiness size={18} />,

    questions: [
      {
        question: "¿Cómo es el proceso de trabajo?",

        answer:
          "Analizamos tu negocio, definimos objetivos, creamos una estrategia personalizada y ejecutamos acciones orientadas a resultados.",
      },

      {
        question: "¿Ofrecen asesoramiento personalizado?",

        answer:
          "Sí. Cada cliente recibe una estrategia adaptada a sus necesidades y objetivos comerciales.",
      },

      {
        question: "¿Cómo puedo empezar a trabajar con ustedes?",

        answer:
          "Podés contactarnos por WhatsApp, Instagram o mediante el formulario de la web para coordinar una reunión inicial.",
      },
    ],
  },
];

const FAQTabsCarousel: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveQuestion((prev) => (prev === index ? null : index));
  };

  return (
    <>
      <div className={styles.tabList}>
        {faqItems.map((item, index) => (
          <button
            key={item.category}
            className={`${styles.tabItem} ${
              activeCategory === index ? styles.tabItemActive : ""
            }`}
            onClick={() => {
              setActiveCategory(index);

              setActiveQuestion(null);
            }}
          >
            {item.icon}

            <span>{item.category}</span>
          </button>
        ))}
      </div>

      <div className={styles.questionList}>
        {faqItems[activeCategory].questions.map((item, index) => {
          const open = activeQuestion === index;

          return (
            <button
              key={item.question}
              className={`${styles.questionItem} ${
                open ? styles.questionOpen : ""
              }`}
              onClick={() => toggle(index)}
            >
              <div className={styles.questionHeader}>
                <span className={styles.questionText}>{item.question}</span>

                <ChevronDown
                  size={20}
                  className={`${styles.chevron} ${
                    open ? styles.chevronOpen : ""
                  }`}
                />
              </div>

              {open && <div className={styles.answer}>{item.answer}</div>}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default FAQTabsCarousel;
