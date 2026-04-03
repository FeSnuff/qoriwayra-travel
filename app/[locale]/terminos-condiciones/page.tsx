"use client";

import React from "react";
import { usePathname } from "next/navigation";
import styles from "./terminos.module.css";

interface Section {
  sectionTitle: string;
  content: React.ReactNode;
}

interface TranslationContent {
  title: string;
  subtitle: string;
  sections: Section[];
}

const translations: { es: TranslationContent; en: TranslationContent } = {
  es: {
    title: "Términos y Condiciones",
    subtitle:
      "¡Gracias por elegir a QORI WAYRA TRAVEL E.I.R.L! Antes de reservar, lea atentamente nuestros términos y condiciones.",
    sections: [
      {
        sectionTitle: "Reservas",
        content: (
          <>
            <ul className={styles.list}>
              <li>Se requiere información personal completa de todos los viajeros.</li>
              <li>
                Para estudiantes menores de 24 años, se requiere una tarjeta de estudiante vigente.
              </li>
              <li>Depósito del 50% del costo del tour.</li>
              <li>
                Para caminatas a Machu Picchu, se requiere un depósito no reembolsable de $200.
              </li>
            </ul>
          </>
        ),
      },
      {
        sectionTitle: "Pagos",
        content: (
          <>
            <p className={styles.text}>
              El saldo restante deberá pagarse un día antes de la salida en nuestra oficina en Cusco.
            </p>
            <p className={styles.highlight}>📍 Calle Garcilaso 210, int. 110</p>
            <ul className={styles.list}>
              <li>Efectivo</li>
              <li>Tarjeta de crédito/débito (Visa, American Express)</li>
              <li>Transferencias bancarias</li>
            </ul>
          </>
        ),
      },
      {
        sectionTitle: "Cancelaciones",
        content: (
          <>
            <p className={styles.text}>
              El depósito de reserva no es reembolsable ni transferible.
            </p>
            <p className={styles.text}>
              No hay reembolsos una vez abonado el saldo total.
            </p>
          </>
        ),
      },
      {
        sectionTitle: "Normas de Conducta",
        content: (
          <>
            <ul className={styles.list}>
              <li>Se deben respetar las leyes y normas locales.</li>
              <li>
                La decisión del guía es inapelable si la seguridad del grupo está en riesgo.
              </li>
              <li>
                Si un cliente afecta al grupo, puede ser retirado del tour sin derecho a reembolso.
              </li>
            </ul>
          </>
        ),
      },
      {
        sectionTitle: "Salud y Seguros",
        content: (
          <>
            <p className={styles.text}>
              Todo cliente debe contar con un seguro médico personal de viaje.
            </p>
            <ul className={styles.list}>
              <li>Accidentes personales</li>
              <li>Gastos médicos y repatriación</li>
              <li>Pérdida de efectos personales</li>
            </ul>
          </>
        ),
      },
      {
        sectionTitle: "Precauciones contra el Mal de Altura",
        content: (
          <>
            <ul className={styles.list}>
              <li>
                Permanecer al menos 2 días a más de 3,000 metros de altitud antes del viaje.
              </li>
              <li>
                Beber líquidos en abundancia y consumir alimentos ricos en carbohidratos.
              </li>
              <li>Evitar alcohol y cigarrillos.</li>
              <li>Tomar té de hoja de coca.</li>
            </ul>
          </>
        ),
      },
      {
        sectionTitle: "Reclamaciones y Quejas",
        content: (
          <>
            <p className={styles.text}>
              Si el cliente tiene una queja, debe informarlo de inmediato al guía o jefe de grupo.
            </p>
            <p className={styles.text}>
              Las reclamaciones deben enviarse por correo electrónico dentro de los 5 días posteriores al tour.
            </p>
          </>
        ),
      },
      {
        sectionTitle: "Adicional",
        content: (
          <>
            <p className={styles.text}>
              1. Aceptación: Al utilizar nuestros canales digitales, aceptas estos términos.
            </p>
            <p className={styles.text}>
              2. Uso adecuado: Prohibido el uso con fines ilegales, fraudulentos o dañinos.
            </p>
            <p className={styles.text}>
              3. Propiedad: Todo el contenido de QORI WAYRA TRAVEL es de su propiedad. No se permite su uso sin autorización.
            </p>
          </>
        ),
      },
    ],
  },
  en: {
    title: "Terms & Conditions",
    subtitle:
      "Thank you for choosing QORI WAYRA TRAVEL E.I.R.L! Please read our terms and conditions carefully before booking.",
    sections: [
      {
        sectionTitle: "Reservations",
        content: (
          <>
            <ul className={styles.list}>
              <li>Complete personal information is required for all travelers.</li>
              <li>
                For students under 24 years old, a valid student ID is required.
              </li>
              <li>50% deposit of the tour cost.</li>
              <li>
                For Machu Picchu hikes, a non-refundable deposit of $200 is required.
              </li>
            </ul>
          </>
        ),
      },
      {
        sectionTitle: "Payments",
        content: (
          <>
            <p className={styles.text}>
              The remaining balance must be paid one day before departure at our Cusco office.
            </p>
            <p className={styles.highlight}>📍 Calle Garcilaso 210, int. 110</p>
            <ul className={styles.list}>
              <li>Cash</li>
              <li>Credit/Debit Card (Visa, American Express)</li>
              <li>Bank transfers</li>
            </ul>
          </>
        ),
      },
      {
        sectionTitle: "Cancellations",
        content: (
          <>
            <p className={styles.text}>
              The reservation deposit is non-refundable and non-transferable.
            </p>
            <p className={styles.text}>
              No refunds once the full balance is paid.
            </p>
          </>
        ),
      },
      {
        sectionTitle: "Code of Conduct",
        content: (
          <>
            <ul className={styles.list}>
              <li>Local laws and regulations must be respected.</li>
              <li>
                The guide’s decision is final if the group’s safety is at risk.
              </li>
              <li>
                If a client disrupts the group, they may be removed from the tour without refund.
              </li>
            </ul>
          </>
        ),
      },
      {
        sectionTitle: "Health and Insurance",
        content: (
          <>
            <p className={styles.text}>
              Every client must have personal travel medical insurance.
            </p>
            <ul className={styles.list}>
              <li>Personal accidents</li>
              <li>Medical expenses and repatriation</li>
              <li>Loss of personal belongings</li>
            </ul>
          </>
        ),
      },
      {
        sectionTitle: "Altitude Sickness Precautions",
        content: (
          <>
            <ul className={styles.list}>
              <li>
                Spend at least 2 days above 3,000 meters altitude before the trip.
              </li>
              <li>
                Drink plenty of fluids and consume carbohydrate-rich foods.
              </li>
              <li>Avoid alcohol and cigarettes.</li>
              <li>Drink coca leaf tea.</li>
            </ul>
          </>
        ),
      },
      {
        sectionTitle: "Complaints and Claims",
        content: (
          <>
            <p className={styles.text}>
              If a client has a complaint, it must be reported immediately to the guide or group leader.
            </p>
            <p className={styles.text}>
              Claims must be submitted via email within 5 days after the tour.
            </p>
          </>
        ),
      },
      {
        sectionTitle: "Additional",
        content: (
          <>
            <p className={styles.text}>
              1. Acceptance: By using our digital channels, you agree to these terms.
            </p>
            <p className={styles.text}>
              2. Appropriate Use: Use for illegal, fraudulent, or harmful purposes is prohibited.
            </p>
            <p className={styles.text}>
              3. Ownership: All QORI WAYRA TRAVEL content is its property. Unauthorized use is prohibited.
            </p>
          </>
        ),
      },
    ],
  },
};

export default function TerminosCondiciones() {
  const pathname = usePathname();
    const locale = (pathname.split("/")[1] as "es" | "en") || "es";
    const t = translations[locale];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{t.title}</h1>
      <p className={styles.subtitle}>{t.subtitle}</p>
      {t.sections.map((section, index) => (
        <section key={index} className={styles.section}>
          <h2 className={styles["section-title"]}>{section.sectionTitle}</h2>
          <div className={styles["section-content"]}>{section.content}</div>
        </section>
      ))}
    </div>
  );
}
