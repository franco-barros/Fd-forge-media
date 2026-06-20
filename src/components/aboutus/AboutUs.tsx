"use client";

import React from "react";

import Image from "next/image";

import {
  BriefcaseBusiness,
  Target,
  Megaphone,
  Smartphone,
  Palette,
  TrendingUp,
  Lightbulb,
  Rocket,
  BarChart3,
  Sparkles,
} from "lucide-react";

import styles from "../../styles/about/AboutUs.module.css";

import { FadeInOnScroll } from "../shared/fadeInonscroll";
import { SlideInFromLeft } from "../shared/slideInfromleft";
import { SlideInFromRight } from "../shared/slideInfromright";

const AboutUs: React.FC = () => {
  return (
    <section id="aboutus" className={styles.aboutSection}>
      <FadeInOnScroll>
        <div className={styles.badgeWrapper}>
          <span className={styles.badge}>
            <BriefcaseBusiness size={18} />
            Sobre nosotros
          </span>
        </div>

        <div className={styles.layout}>
          {/* IZQUIERDA */}

          <SlideInFromLeft>
            <div className={styles.leftColumn}>
              {/* Card valores */}

              <div className={styles.statsCard}>
                <h3 className={styles.statsTitle}>Nuestra forma de trabajar</h3>

                <div className={styles.valuesGrid}>
                  <div className={styles.valueItem}>
                    <Lightbulb size={26} />

                    <span>Creatividad</span>
                  </div>

                  <div className={styles.valueItem}>
                    <Rocket size={26} />

                    <span>Innovación</span>
                  </div>

                  <div className={styles.valueItem}>
                    <BarChart3 size={26} />

                    <span>Resultados</span>
                  </div>

                  <div className={styles.valueItem}>
                    <Sparkles size={26} />

                    <span>Estrategia</span>
                  </div>
                </div>
              </div>

              {/* Card servicios */}

              <div className={styles.servicesCard}>
                <h3 className={styles.servicesTitle}>Lo que hacemos</h3>

                <div className={styles.servicesList}>
                  <div className={styles.serviceItem}>
                    <Target size={20} />

                    <span>Estrategia Digital</span>
                  </div>

                  <div className={styles.serviceItem}>
                    <Megaphone size={20} />

                    <span>Publicidad Online</span>
                  </div>

                  <div className={styles.serviceItem}>
                    <Smartphone size={20} />

                    <span>Redes Sociales</span>
                  </div>

                  <div className={styles.serviceItem}>
                    <Palette size={20} />

                    <span>Branding</span>
                  </div>

                  <div className={styles.serviceItem}>
                    <TrendingUp size={20} />

                    <span>Crecimiento de Marca</span>
                  </div>
                </div>
              </div>
            </div>
          </SlideInFromLeft>

          {/* DERECHA */}

          <SlideInFromRight>
            <div className={styles.infoWrapper}>
              <div className={styles.textWrapper}>
                <h2>Impulsamos marcas con estrategias digitales.</h2>

                <p>
                  En <strong>FD Forge Media</strong> ayudamos a empresas,
                  emprendedores y marcas a potenciar su presencia digital
                  mediante estrategias creativas, contenido de alto impacto y
                  campañas orientadas a resultados.
                </p>

                <p>
                  Nos especializamos en{" "}
                  <strong>
                    marketing digital, publicidad online, gestión de redes
                    sociales, branding, creación de contenido y desarrollo de
                    estrategias de crecimiento.
                  </strong>
                </p>

                <p>
                  Trabajamos con{" "}
                  <strong>
                    creatividad, innovación y análisis estratégico
                  </strong>{" "}
                  para transformar ideas en marcas sólidas y generar resultados
                  medibles que impulsen el crecimiento de nuestros clientes.
                </p>

                <div className={styles.logoContainer}>
                  <div className={styles.logoWrapper}>
                    <Image
                      src="/logo/LogoFd3.png"
                      alt="FD Forge Media"
                      fill
                      sizes="120px"
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </SlideInFromRight>
        </div>
      </FadeInOnScroll>
    </section>
  );
};

export default AboutUs;
