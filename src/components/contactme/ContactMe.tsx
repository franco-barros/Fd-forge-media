"use client";

import React, { useState } from "react";
import Image from "next/image";
import { sileo } from "sileo";

import styles from "../../styles/contactme/ContactMe.module.css";

import { FadeInOnScroll } from "../shared/fadeInonscroll";
import { SlideInFromLeft } from "../shared/slideInfromleft";
import { SlideInFromRight } from "../shared/slideInfromright";

import { lead, contact } from "../metapixel/facebook";

import {
  FaInfoCircle,
  FaEnvelopeOpenText,
  FaPhoneAlt,
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";

const ContactMe: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    empresa: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        sileo.error({
          title: "Error",
          description: data?.error || "Error al enviar el mensaje.",
        });

        setLoading(false);
        return;
      }

      sileo.success({
        title: "Mensaje enviado",
        description: "Nos pondremos en contacto pronto.",
      });

      // 👇 META EVENT (AGREGADO)
      lead({
        source: "contact_form",
        section: "contact_page",
      });

      setFormData({
        name: "",
        email: "",
        empresa: "",
        message: "",
      });
    } catch (error) {
      console.error(error);

      sileo.error({
        title: "Error de conexión",
        description: "No se pudo conectar con el servidor.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <FadeInOnScroll>
        <div className={styles.badgeWrapper}>
          <div className={styles.badge}>Conectemos</div>
        </div>

        <p className={styles.subHeading}>
          Contanos sobre tu proyecto y creemos juntos una estrategia digital que
          impulse tu marca.
        </p>
      </FadeInOnScroll>

      <div className={styles.contactWrapper}>
        {/* INFORMACIÓN */}
        <SlideInFromLeft delay={0.1}>
          <div className={styles.contactInfo}>
            <h3 className={styles.cardTitle}>
              <FaInfoCircle />
              Información de Contacto
            </h3>

            <h4 className={styles.infoTitle}>
              <FaMapMarkerAlt />
              Ubicación
            </h4>
            <p>San Juan, Argentina</p>

            <h4 className={styles.infoTitle}>
              <FaPhoneAlt />
              WhatsApp
            </h4>
            <p>
              <FaWhatsapp /> +542645878987
            </p>

            <h4 className={styles.infoTitle}>
              <FaEnvelope />
              Correo electrónico
            </h4>
            <p>fdforgemedia@gmail.com</p>
          </div>
        </SlideInFromLeft>

        {/* FORMULARIO */}
        <SlideInFromRight delay={0.15}>
          <form onSubmit={handleSubmit} className={styles.contactForm}>
            <h3 className={styles.cardTitle}>
              <FaEnvelopeOpenText />
              Envíanos un mensaje
            </h3>

            <input
              type="text"
              name="name"
              placeholder="Tu nombre"
              value={formData.name}
              onChange={handleChange}
              className={styles.inputField}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Tu correo"
              value={formData.email}
              onChange={handleChange}
              className={styles.inputField}
              required
            />

            {/* EMPRESA NUEVO CAMPO */}
            <input
              type="text"
              name="empresa"
              placeholder="Tu empresa (opcional)"
              value={formData.empresa}
              onChange={handleChange}
              className={styles.inputField}
            />

            <textarea
              name="message"
              placeholder="Contanos sobre tu proyecto..."
              value={formData.message}
              onChange={handleChange}
              className={styles.textAreaField}
              required
            />

            <button
              type="submit"
              className={styles.submitButton}
              disabled={loading}
            >
              {loading ? "Enviando mensaje..." : "Enviar mensaje"}
            </button>
          </form>
        </SlideInFromRight>
      </div>

      {/* REDES */}
      <FadeInOnScroll delay={0.3}>
        <div className={styles.socialCardWrapper}>
          <div className={styles.socialCard}>
            <h3 className={styles.cardTitle}>Seguinos en nuestras redes</h3>

            <p>
              Descubrí nuestras novedades, proyectos y estrategias digitales.
            </p>

            <div className={styles.socialButtons}>
              <a
                href="https://www.instagram.com/fdforgemedia"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.socialButton} ${styles.instagramButton}`}
                onClick={() =>
                  contact({
                    method: "instagram",
                    source: "contact_social",
                  })
                }
              >
                <FaInstagram />
                Instagram
              </a>

              <a
                href="https://www.facebook.com/fdforgemedia"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.socialButton} ${styles.facebookButton}`}
                onClick={() =>
                  contact({
                    method: "facebook",
                    source: "contact_social",
                  })
                }
              >
                <FaFacebookF />
                Facebook
              </a>
            </div>

            <div className={styles.bottomImageWrapper}>
              <Image
                src="/logo/LogoFd3.png"
                alt="FD Forge Media"
                width={180}
                height={180}
                className={styles.bottomImage}
              />
            </div>
          </div>
        </div>
      </FadeInOnScroll>
    </section>
  );
};

export default ContactMe;
