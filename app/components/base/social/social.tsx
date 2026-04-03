"use client";

import React from "react";
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";
import styles from "./social.module.css";

export default function SocialButtons() {
  return (
    <div className={styles.socialContainer}>
      <a
        href="https://wa.me/51924377454"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.socialButton}
        aria-label="Contact via WhatsApp"
      >
        <FaWhatsapp />
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=61565691627315"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.socialButton}
        aria-label="Visit our Facebook"
      >
        <FaFacebook />
      </a>
      <a
        href="https://www.instagram.com/qoriwayratravel?igsh=NjRweG5wd3hqZXB2"
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.socialButton} ${styles.instagram}`}
        aria-label="Visit our Instagram"
      >
        <FaInstagram />
      </a>
    </div>
  );
}
