"use client";

import React, { useState, useRef, useEffect } from "react";
import styles from "./principal.module.css";
import Image from "next/image";
import {
  FaWhatsapp,
  FaClock,
  FaDollarSign,
  FaCheckCircle,
  FaChevronDown,
  FaHandPointRight,
} from "react-icons/fa";

/* 🔹 Interfaces */
interface Step {
  iconType: string;
  text: string;
}

interface ItineraryItem {
  title: string;
  text: React.ReactNode;
  services: string[];
}

interface ItinerarySummary {
  title: string;
  days: { title: string; steps: Step[] }[];
}

interface TripOverview {
  title: string;
  content: string;
}

interface AdditionalInfo {
  title: string;
  physicalRating: string;
}

interface GroupServices {
  daysAndNights: string;
  price: string;
  quote: string;
  bookNow: string;
  tourForMe: string;
}

interface EntradaProps {
  generalTitle: string;
  whatsapp: string;
  mapImage: string;
  smallImages: string[];
}

interface InfoProps {
  tripOverview?: TripOverview;
  itinerary: ItineraryItem[];
  includedServices: string;
  additionalInfo: AdditionalInfo;
  itinerarySummary?: ItinerarySummary;
  groupServices: GroupServices;
  recommendations: string[];
  notIncluded: string[];
}

interface ComponentePrincipalProps extends EntradaProps, InfoProps {}

export default function ComponentePrincipal({
  generalTitle,
  whatsapp,
  mapImage,
  smallImages,
  tripOverview,
  itinerary,
  includedServices,
  additionalInfo,
  itinerarySummary,
  groupServices,
  recommendations,
  notIncluded,
}: ComponentePrincipalProps) {
  /** Acordeones del contenido principal (Itinerario) */
  const [openAccordions, setOpenAccordions] = useState<number[]>([]);

  /** Acordeones de la columna izquierda (No Incluye, Recomendaciones) */
  const [openLeftAccordions, setOpenLeftAccordions] = useState<number[]>([]);

  /** Refs para medir la altura de los contenidos */
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const leftContentRefs = useRef<(HTMLDivElement | null)[]>([]);

  /** Datos del acordeón de la izquierda */
  const leftAccordionData = [
    {
      title: "❌ No Incluye",
      content: (
        <ul>
          {notIncluded.map((item, index) => (
            <li key={index}>🚫 {item}</li>
          ))}
        </ul>
      ),
    },
    {
      title: "🎒 Recomendaciones",
      content: (
        <ul>
          {recommendations.map((item, index) => (
            <li key={index}>✅ {item}</li>
          ))}
        </ul>
      ),
    },
  ];

  /** Función para toggle en el acordeón principal */
  const toggleAccordion = (index: number) => {
    setOpenAccordions((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  /** Función para toggle en el acordeón de la izquierda */
  const toggleLeftAccordion = (index: number) => {
    setOpenLeftAccordions((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  /** Función para abrir WhatsApp */
  const handleBookNow = () => {
    window.open(`https://wa.me/51924377454?text=${whatsapp}${generalTitle}`, "_blank");
  };

  /** useEffect para actualizar la altura dinámica del contenido en el acordeón principal */
  useEffect(() => {
    contentRefs.current.forEach((el, i) => {
      if (el) {
        el.style.maxHeight = openAccordions.includes(i)
          ? el.scrollHeight + "px"
          : "0px";
      }
    });
  }, [openAccordions]);

  /** useEffect para actualizar la altura dinámica del contenido en el acordeón izquierdo */
  useEffect(() => {
    leftContentRefs.current.forEach((el, i) => {
      if (el) {
        el.style.maxHeight = openLeftAccordions.includes(i)
          ? el.scrollHeight + "px"
          : "0px";
      }
    });
  }, [openLeftAccordions]);

  return (
    <div className={styles.container}>
      {/* Columna Izquierda: Group Services */}
      <aside className={styles.leftColumn}>
        <div className={styles.groupServices}>
          {/* Datos de Precio y Duración */}
          <div className={styles.priceSection}>
            <h3>
              <FaClock className={styles.bigIcon} /> {groupServices.daysAndNights}
            </h3>
            <h3>
              <FaDollarSign className={styles.bigIcon} /> {groupServices.price}
            </h3>
          </div>

          {/* Información Adicional */}
          <div className={styles.additionalInfo}>
            <p>
              <strong>🔹 Dificultad:</strong> {additionalInfo.physicalRating}
            </p>
          </div>

          {/* Botón de Reserva */}
          <button className={styles.bookButton} onClick={handleBookNow}>
            <FaWhatsapp className={styles.whatsappIcon} />
            {groupServices.bookNow}
          </button>
          <p className={styles.quote}>{groupServices.quote}</p>

          {/* Acordeones de "No Incluye" y "Recomendaciones" */}
          <div className={styles.leftAccordionContainer}>
            {leftAccordionData.map((item, index) => (
              <div
                key={index}
                className={`${styles.leftAccordionItem} ${
                  openLeftAccordions.includes(index) ? styles.open : ""
                }`}
              >
                <button
                  className={styles.leftAccordionHeader}
                  onClick={() => toggleLeftAccordion(index)}
                  aria-expanded={openLeftAccordions.includes(index)}
                >
                  <span>{item.title}</span>
                  <FaChevronDown
                    className={
                      openLeftAccordions.includes(index)
                        ? `${styles.leftArrowIcon} ${styles.leftArrowIconOpen}`
                        : styles.leftArrowIcon
                    }
                  />
                </button>
                <div
                  className={styles.leftAccordionContent}
                  ref={(el) => {
                    leftContentRefs.current[index] = el;
                  }}
                >
                  <div className={styles.leftAccordionText}>{item.content}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </aside>

      {/* CONTENIDO PRINCIPAL */}
      <main className={styles.rightColumn}>
        {/* Título principal */}
        <div className={styles.entradaContainer}>
          <h1 className={styles.mainTitle}>{generalTitle}</h1>
        </div>

        {/* Sección de imágenes: se ubican POR ENCIMA del resumen (Trip Overview) */}
        <div className={styles.imageContainerBelow}>
          <div className={styles.imageGrid}>
            {/* Mapa principal ocupa las posiciones (1,2), (1,3), (2,2) y (2,3) */}
            <div className={styles.mapImageWrapper}>
              <Image
                src={mapImage}
                alt="Mapa del tour"
                fill
                style={{ objectFit: "cover" }}
                className={styles.mapImage}
              />
            </div>
            {/* Las imágenes pequeñas se colocan en (1,1), (2,1), (3,1), (3,2) y (3,3) */}
            <div className={styles.imagePosition1}>
              <Image
                src={smallImages[0]}
                alt="Imagen 1"
                fill
                style={{ objectFit: "cover" }}
                className={styles.smallImage}
              />
            </div>
            <div className={styles.imagePosition2}>
              <Image
                src={smallImages[1]}
                alt="Imagen 2"
                fill
                style={{ objectFit: "cover" }}
                className={styles.smallImage}
              />
            </div>
            <div className={styles.imagePosition3}>
              <Image
                src={smallImages[2]}
                alt="Imagen 3"
                fill
                style={{ objectFit: "cover" }}
                className={styles.smallImage}
              />
            </div>
            <div className={styles.imagePosition4}>
              <Image
                src={smallImages[3]}
                alt="Imagen 4"
                fill
                style={{ objectFit: "cover" }}
                className={styles.smallImage}
              />
            </div>
            <div className={styles.imagePosition5}>
              <Image
                src={smallImages[4]}
                alt="Imagen 5"
                fill
                style={{ objectFit: "cover" }}
                className={styles.smallImage}
              />
            </div>
          </div>
        </div>

        {/* INFORMACIÓN GENERAL */}
        <div className={styles.infoContainer}>
          {tripOverview && (
            <div className={styles.tripOverview}>
              <h2 className={styles.sectionSubtitleInfo}>
                {tripOverview.title}
              </h2>
              <p>{tripOverview.content}</p>
            </div>
          )}

          {/* ACORDEÓN PRINCIPAL */}
          <div className={styles.accordionContainer}>
            {itinerary.map((item, index) => (
              <div key={index} className={styles.accordionItem}>
                <button
                  className={styles.accordionHeader}
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={openAccordions.includes(index)}
                >
                  <span>{item.title}</span>
                  <FaChevronDown
                    className={
                      openAccordions.includes(index)
                        ? `${styles.arrowIcon} ${styles.arrowIconOpen}`
                        : styles.arrowIcon
                    }
                  />
                </button>
                <div
                  className={styles.accordionContent}
                  ref={(el) => {
                    contentRefs.current[index] = el;
                  }}
                >
                  <div className={styles.accordionText}>{item.text}</div>
                  <div className={styles.accordionServices}>
                    <h4>{includedServices}</h4>
                    <ul>
                      {item.services.map((service, i) => (
                        <li key={i}>
                          <FaCheckCircle className={styles.icon} /> {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* TIMELINE DEL ITINERARIO */}
          {itinerarySummary && (
            <div className={styles.timelineContainer}>
              <h2 className={styles.sectionSubtitleTimeLine}>
                {itinerarySummary.title}
              </h2>
              <div className={styles.timelineContent}>
                {itinerarySummary.days.map((day, idx) => (
                  <div key={idx} className={styles.timelineDay}>
                    <h3>{day.title}</h3>
                    {day.steps.map((step, stepIdx) => (
                      <div key={stepIdx} className={styles.timelineStep}>
                        <FaHandPointRight className={styles.icon} />
                        <span>{step.text}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
