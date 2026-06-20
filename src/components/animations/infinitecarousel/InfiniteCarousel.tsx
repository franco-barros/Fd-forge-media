"use client";

import React from "react";

import styles from "../../../styles/animations/InfiniteCarousel.module.css";

const items = [
  "Branding",
  "Social Media",
  "SEO",
  "Contenido",
  "Email Marketing",
  "Diseño Web",
  "Estrategia Digital",
  "Publicidad en Meta & Google",
];

const InfiniteCarousel: React.FC = () => {
  const duplicatedItems = [...items, ...items];

  return (
    <section className={styles.wrapper}>
      <div className={styles.fadeLeft} />

      <div className={styles.fadeRight} />

      <div className={styles.track}>
        {duplicatedItems.map((item, index) => (
          <React.Fragment key={index}>
            <div className={styles.item}>{item}</div>

            <div className={styles.separator}>✦</div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default InfiniteCarousel;
