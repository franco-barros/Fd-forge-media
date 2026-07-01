"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import HeroBackground from "../animations/animatedbackground";

import styles from "../../styles/hero/Hero.module.css";

// 👇 IMPORTS DE TRACKING (según tu facebook.ts tipado)
import { lead, customEvent } from "../metapixel/facebook";

const Hero = () => {
  const handleScrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section id="hero" className={styles.hero}>
      <HeroBackground />

      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      >
        <motion.div
          className={styles.heroLogoWrapper}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
          }}
        >
          <Image
            src="/logo/LogoFd2.png"
            alt="FD Forge Media"
            fill
            priority
            style={{ objectFit: "contain" }}
          />
        </motion.div>

        <span className={styles.badge}>Marketing Digital & Publicidad</span>

        <h1 className={styles.title}>
          Transformamos ideas en marcas que generan resultados
        </h1>

        <p className={styles.phrase}>
          Creamos estrategias digitales, contenido creativo y campañas
          publicitarias para impulsar el crecimiento de tu negocio.
        </p>

        <div className={styles.buttons}>
          {/* 🔵 BOTÓN: SERVICIOS */}
          <button
            className={`${styles.btn} ${styles.btnPrimary}`}
            onClick={() => {
              customEvent("ViewContent", {
                section: "hero",
                action: "view_services",
              });

              handleScrollTo("section-practiceareas");
            }}
          >
            Nuestros servicios
          </button>

          {/* 🔴 BOTÓN: CONTACTO (LEAD REAL) */}
          <button
            className={`${styles.btn} ${styles.btnSecondary}`}
            onClick={() => {
              lead({
                source: "hero_cta",
                section: "hero",
              });

              handleScrollTo("contact");
            }}
          >
            Contactanos
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
