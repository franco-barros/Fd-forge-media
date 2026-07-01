"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

import styles from "../../styles/utils/WhatsappButton.module.css";

// 👇 Meta Pixel tracking
import { contact } from "../metapixel/facebook";

interface WhatsappButtonProps {
  phoneNumber: string;
  message?: string;
}

const WhatsappButton: React.FC<WhatsappButtonProps> = ({
  phoneNumber,
  message = "Hola, me gustaría más información sobre los servicios de FD Forge Media.",
}) => {
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message,
  )}`;

  const handleClick = () => {
    contact({
      method: "whatsapp",
      source: "floating_button",
      company: "fd_forge_media",
    });
  };

  return (
    <motion.a
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsappButton}
      aria-label="Contactar por WhatsApp con FD Forge Media"
      onClick={handleClick}
    >
      <FaWhatsapp />
    </motion.a>
  );
};

export default WhatsappButton;
