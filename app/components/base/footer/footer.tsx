"use client";

import React, { FC, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./footer.module.css";

// Textos para cada idioma
const texts = {
  es: {
    contact: "CONTÁCTENOS",
    office: "Oficina: PP.JJ. Construcción Civil L-3 Ruta Qapacñan, Cusco - PERÚ.",
    cellphone: "Contactanos: +51 924377454, +51 977608581",
    email: "Correo: qoriwayra.cuscotravel@gmail.com",
    privacyPolicy: "Políticas de Privacidad",
    terms: "Términos y Condiciones",
    noTrae: "No Trata de Personas",
    license: "Licencia de Operación",
    endorsedBy: "Avalados por",
    meansOfPayment: "Medios de Pago",
    formTitle: "Escríbenos",
    fullName: "Nombres Completos",
    nationality: "Nacionalidad",
    mail: "Correo",
    message: "Mensaje",
    submit: "Enviar Mensaje",
    successMessage: "Mensaje enviado con éxito!",
    errorMessage: "Error al enviar el mensaje. Intente nuevamente.",

    companyName: "QORI WAYRA TRAVEL",
    ruc: "RUC: 20613386484",
    rSocial: "Razón Social: QORI WAYRA TRAVEL EIRL",
  },
  en: {
    contact: "CONTACT US",
    office: "Office: PP.JJ. Civil Construction L-3 Ruta Qapacñan, Cusco - PERU.",
    cellphone: "Contact us: +51 924377454, +51 977608581",
    email: "Email: qoriwayra.cuscotravel@gmail.com",
    privacyPolicy: "Privacy Policy",
    terms: "Terms & Conditions",
    noTrae: "No Human Trafficking",
    license: "Lincese to Operate",
    endorsedBy: "Endorsed by",
    meansOfPayment: "Means of Payment",
    formTitle: "Write to Us",
    fullName: "Full Name",
    nationality: "Nationality",
    mail: "Email",
    message: "Message",
    submit: "Send Message",
    successMessage: "Message sent successfully!",
    errorMessage: "Error sending message. Please try again.",

    companyName: "QORI WAYRA TRAVEL",
    ruc: "RUC: 20613386484",
    rSocial: "Razón Social: QORI WAYRA TRAVEL EIRL",
  },
};

// Texto de la política de privacidad
const privacyPolicyText = {
  es: `QORI WAYRA TRAVEL protege tu información de tus datos personales. Recopilamos datos como nombre, contacto y preferencias de viaje para procesar reservas y mejorar nuestros servicios. No compartimos tu información con terceros, salvo cuando sea necesario para tu viaje. 
Nos reservamos el derecho de actualizar esta política.`, // Texto original
  en: `QORI WAYRA TRAVEL protects your personal information. We collect information such as your name, contact information, and travel preferences to process reservations and improve our services. We do not share your information with third parties except when necessary for your trip.
We reserve the right to update this policy.`,         // Texto original
};

interface FooterProps {
  locale: "es" | "en";
}

const Footer: FC<FooterProps> = ({ locale }) => {
  // Selección de textos según el idioma
  const t = texts[locale];

  // Estados para modales y formulario
  const [showNoTraeModal, setShowNoTraeModal] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showLicenseModal, setShowLicenseModal] = useState(false);
  const [formData, setFormData] = useState({
    full_name: "",
    nacionality: "",
    email: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  // Función para abrir modales, reutilizando el setter
  const openModal = (setter: React.Dispatch<React.SetStateAction<boolean>>) => (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault();
    setter(true);
  };

  // Función para cerrar modales
  const closeModal = (setter: React.Dispatch<React.SetStateAction<boolean>>) => () =>
    setter(false);

  // Manejo del envío del formulario
  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setSubmitStatus("idle");

  try {
    const response = await fetch(
      "https://formsubmit.co/ajax/fscreativestudio@proton.me",
      {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          full_name: formData.full_name,
          nacionality: formData.nacionality,
          email: formData.email,
          message: formData.message,
        }),
      }
    );

    if (response.ok) {
      setSubmitStatus("success");
      setFormData({ full_name: "", nacionality: "", email: "", message: "" });
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } else {
      setSubmitStatus("error");
    }
  } catch (error) {
    console.error("Error al enviar formulario:", error);
    setSubmitStatus("error");
  }
};

  // Manejo de cambios en los inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          {/* Columna 1: Información de contacto y avales */}
          <div className={styles.contactColumn}>
            <h3 className={styles.header}>{t.contact}</h3>
            <p className={styles.text}>{t.office}</p>
            <p className={styles.text}>{t.cellphone}</p>
            <p className={styles.text}>{t.email}</p>



            <div className={styles.logoGroup}>
              <h4 className={styles.groupTitle}>{t.endorsedBy}</h4>
              <div className={styles.logoItems}>

                <Image
                  src="/images/gercetur.png"
                  alt="Gercetur"
                  width={80}
                  height={80}
                  className={styles.logoImage}
                />
              </div>
            </div>
          </div>

          {/* Columna 2: Enlaces y medios de pago */}
          <div className={styles.linksColumn}>
            <div className={styles.linksGroup}>
              <Link href={`/${locale}/terminos-condiciones`} className={styles.linkButton}>
                {t.terms}
              </Link>
              <a href="#" className={styles.linkButton} onClick={openModal(setShowPrivacyModal)}>
                {t.privacyPolicy}
              </a>
              <a href="#" className={styles.linkButton} onClick={openModal(setShowLicenseModal)}>
                {t.license}
              </a>
              <a href="#" className={styles.linkButton} onClick={openModal(setShowNoTraeModal)}>
                {t.noTrae}
              </a>
            </div>

            <div className={styles.logoGroup}>
              <h4 className={styles.groupTitle}>{t.meansOfPayment}</h4>
              <div className={styles.paymentLogos}>
                <Image
                  src="/images/visa3.png"
                  alt="Visa"
                  width={60}
                  height={40}
                  className={styles.paymentLogo}
                />
                <Image
                  src="/images/masterCard.jpg"
                  alt="MasterCard"
                  width={60}
                  height={40}
                  className={styles.paymentLogo}
                />
                <Image
                  src="/images/aExpress.png"
                  alt="aExpress"
                  width={60}
                  height={40}
                  className={styles.paymentLogo}
                />
                <Image
                  src="/images/yape.png"
                  alt="Yape"
                  width={60}
                  height={40}
                  className={styles.paymentLogo}
                />
                <Image
                  src="/images/plin.jpg"
                  alt="Plin"
                  width={60}
                  height={40}
                  className={styles.paymentLogo}
                />
              </div>
            </div>
            <div>
              <p className={styles.text}>{t.companyName}</p>
              <p className={styles.text}>{t.ruc}</p>
              <p className={styles.text}>{t.rSocial}</p>
            </div>
          </div>

          {/* Columna 3: Formulario de contacto */}
          <div className={styles.formColumn}>
            <h3 className={styles.formHeader}>{t.formTitle}</h3>
            <form onSubmit={handleSubmit} className={styles.contactForm}>
              <div className={styles.formGroup}>
                <label className={styles.inputLabel}>{t.fullName}</label>
                <input
                  type="text"
                  name="full_name"
                  value={formData.full_name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.inputLabel}>{t.nationality}</label>
                <input
                  type="text"
                  name="nacionality"
                  value={formData.nacionality}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.inputLabel}>{t.mail}</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.inputLabel}>{t.message}</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                />
              </div>

              <button type="submit" className={styles.submitButton}>
                {t.submit}
              </button>

              {submitStatus === "success" && (
                <p className={styles.successMessage}>{t.successMessage}</p>
              )}
              {submitStatus === "error" && (
                <p className={styles.errorMessage}>{t.errorMessage}</p>
              )}
            </form>
          </div>
        </div>

        {/* Sección de copyright centrada */}
        <div className={styles.copy}>
          <p>
            © 2025 Qori Wayra.{" "}
            {locale === "es" ? "Todos los derechos reservados." : "All rights reserved."}
          </p>
        </div>
      </footer>

      {/* Modal para "No Trata de Personas" */}
      {showNoTraeModal && (
        <div className={styles.modalOverlay} onClick={closeModal(setShowNoTraeModal)}>
          <div className={styles.modalContent}>
            <Image
              src="/images/esnna.jpg"
              alt="No trata de personas"
              fill
              style={{ objectFit: "contain" }}
              className={styles.modalImage}
            />
            <button className={styles.modalClose} onClick={closeModal(setShowNoTraeModal)}>
              &times;
            </button>
          </div>
        </div>
      )}

      {/* Modal para "No Trata de Personas" */}
      {showLicenseModal && (
        <div className={styles.modalOverlay} onClick={closeModal(setShowLicenseModal)}>
          <div className={styles.modalContent}>
            <Image
              src="/images/licensia.jpeg"
              alt="No trata de personas"
              fill
              style={{ objectFit: "contain" }}
              className={styles.modalImage}
            />
            <button className={styles.modalClose} onClick={closeModal(setShowLicenseModal)}>
              &times;
            </button>
          </div>
        </div>
      )}

      {/* Modal para Política de Privacidad */}
      {showPrivacyModal && (
        <div className={styles.modalOverlay} onClick={closeModal(setShowPrivacyModal)}>
          <div className={styles.modalContentText}>
            <button className={styles.modalClose} onClick={closeModal(setShowPrivacyModal)}>
              &times;
            </button>
            <h2>{locale === "es" ? "POLÍTICA DE PRIVACIDAD" : "PRIVACY POLICY"}</h2>
            <pre className={styles.modalText}>
              {locale === "es" ? privacyPolicyText.es : privacyPolicyText.en}
            </pre>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
