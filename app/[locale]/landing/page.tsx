"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./landing.module.css";
import {
  FaLeaf,
  FaStar,
  FaRecycle,
  FaHandshake,
  FaHeart,
  FaLightbulb,
} from "react-icons/fa";

// Imágenes para las secciones "Misión" y "Visión"
import imgMission from "@/public/images/Landing/mision.jpeg";
import imgVision from "@/public/images/Landing/vision.jpeg";

// Imágenes del hero slider
import hero1 from "@/public/images/Macchu Picchu/Machu Picchu - Full day/machupichu.jpg";
import hero2 from "@/public/images/Valle/ValleVIP/valle main.jpg";
import hero3 from "@/public/images/OneDayTour/CityTour/Qorikancha-Cusco.jpg";
import hero4 from "@/public/images/CaminoInca/camino2D/main.jpg";
import hero5 from "@/public/images/OneDayTour/Humantay/humantay main.webp";

const heroSlides = [
  {
    image: hero1,
    es: {
      title: "Machu Picchu Full Day",
      buttonText: "Ver más",
      link: "/es/tour-a-machupicchu/mapi-full-day",
    },
    en: {
      title: "Machu Picchu Full Day",
      buttonText: "View more",
      link: "/en/tour-a-machupicchu/mapi-full-day",
    },
  },
  {
    image: hero2,
    es: {
      title: "Valle Sagrado VIP",
      buttonText: "Ver más",
      link: "/es/valle-sagrado/valle-sagrado-vip",
    },
    en: {
      title: "Sacred Valley VIP",
      buttonText: "View more",
      link: "/en/valle-sagrado/valle-sagrado-vip",
    },
  },
  {
    image: hero3,
    es: {
      title: "City Tour",
      buttonText: "Ver más",
      link: "/es/one-day/city-tour-cusco",
    },
    en: {
      title: "City Tour",
      buttonText: "View more",
      link: "/en/one-day/city-tour-cusco",
    },
  },
  {
    image: hero4,
    es: {
      title: "Camino Inca 2D/1N",
      buttonText: "Ver más",
      link: "/es/camino-inca/camino-inca-2d",
    },
    en: {
      title: "Inca Trail 2D/1N",
      buttonText: "View more",
      link: "/en/camino-inca/camino-inca-2d",
    },
  },
  {
    image: hero5,
    es: {
      title: "Laguna Humantay",
      buttonText: "Ver más",
      link: "/es/one-day/laguna-humantay",
    },
    en: {
      title: "Humantay Lagoon",
      buttonText: "View more",
      link: "/en/one-day/laguna-humantay",
    },
  },
];

interface TranslationContent {
  mission: {
    title: string;
    content: string;
  };
  vision: {
    title: string;
    content: string;
  };
  values: {
    title: string;
    list: { title: string; description: string }[];
  };
  about: {
    title: string;
    content: string;
  };
}

const translations: { es: TranslationContent; en: TranslationContent } = {
  es: {
    mission: {
      title: "Misión",
      content:
        "Preservar y proteger nuestro patrimonio cultural y natural mediante un turismo responsable, conectando a los viajeros con la esencia andina.",
    },
    vision: {
      title: "Visión",
      content:
        "Ser la agencia líder en Cusco, ofreciendo experiencias únicas y sostenibles y sirviendo de puente entre el mundo y la cultura andina.",
    },
    values: {
      title: "Valores de QORI WAYRA TRAVEL",
      list: [
        {
          title: "Respeto por la cultura y la naturaleza",
          description:
            "Valoramos nuestras raíces andinas y el entorno natural, promoviendo su preservación en cada experiencia.",
        },
        {
          title: "Compromiso con la calidad",
          description:
            "Ofrecemos un servicio personalizado y de excelencia, cuidando cada detalle.",
        },
        {
          title: "Turismo responsable y sostenible",
          description:
            "Fomentamos un turismo que beneficie a las comunidades y minimice el impacto ambiental.",
        },
        {
          title: "Integridad y transparencia",
          description:
            "Actuamos con ética y responsabilidad, construyendo relaciones de confianza.",
        },
        {
          title: "Pasión por el servicio",
          description:
            "Transmitimos calidez y autenticidad en cada viaje, disfrutando lo que hacemos.",
        },
        {
          title: "Innovación con identidad",
          description:
            "Exploramos nuevas formas de mostrar el Perú sin perder nuestra esencia cultural.",
        },
      ],
    },
    about: {
      title: "Nosotros",
      content: `Somos una agencia de viajes comprometida con brindar experiencias inolvidables en Cusco y sus alrededores. Nuestro enfoque se centra en el turismo responsable y sostenible, conectando a los viajeros con la riqueza cultural y natural de la región.
      
Nuestra misión es ofrecer servicios de calidad, adaptados a las necesidades de cada cliente, garantizando seguridad y excelencia en cada viaje.
      
Con un equipo apasionado y profesional, nos esforzamos por ser el puente entre el mundo y el Perú, transformando cada aventura en una experiencia única y enriquecedora.`,
    },
  },
  en: {
    mission: {
      title: "Mission",
      content:
        "To preserve and protect our cultural and natural heritage through responsible tourism, connecting travelers with the Andean essence.",
    },
    vision: {
      title: "Vision",
      content:
        "To be the leading travel agency in Cusco, offering unique and sustainable experiences and serving as a bridge between the world and Andean culture.",
    },
    values: {
      title: "Values of QORI WAYRA TRAVEL",
      list: [
        {
          title: "Respect for Culture and Nature",
          description:
            "We value our Andean roots and natural environment, promoting their preservation in every experience.",
        },
        {
          title: "Commitment to Quality",
          description:
            "We provide personalized, high-quality service, taking care of every detail.",
        },
        {
          title: "Responsible and Sustainable Tourism",
          description:
            "We foster tourism that benefits local communities and minimizes environmental impact.",
        },
        {
          title: "Integrity and Transparency",
          description:
            "We act with ethics and responsibility, building trusting relationships.",
        },
        {
          title: "Passion for Service",
          description:
            "We deliver warm and genuine attention in every journey, loving what we do.",
        },
        {
          title: "Innovation with Identity",
          description:
            "We explore new ways to showcase Peru while staying true to our cultural essence.",
        },
      ],
    },
    about: {
      title: "About Us",
      content: `We are a travel agency committed to providing unforgettable experiences in Cusco and its surroundings. Our focus is on responsible and sustainable tourism, connecting travelers with the cultural and natural richness of the region.
      
Our mission is to offer quality services, tailored to the needs of each client, ensuring safety and excellence in every journey.
      
With a passionate and professional team, we strive to be the bridge between the world and Peru, turning every adventure into a unique and enriching experience.`,
    },
  },
};

export default function LandingPage() {
  const pathname = usePathname();
  const locale = (pathname.split("/")[1] as "es" | "en") || "es";
  const t = translations[locale];

  const [currentHero, setCurrentHero] = useState(0);

  const nextSlide = () => {
    setCurrentHero((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentHero((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      {/* Hero Slider */}
      <div className={styles.heroSlider}>
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`${styles.heroSlide} ${
              index === currentHero ? styles.activeSlide : ""
            }`}
          >
            <Image
              src={slide.image}
              alt={`Slide ${index + 1}`}
              fill
              className={styles.heroImage}
              priority={index === 0}
            />
            <div className={styles.heroTopLeft}>
              <span className={styles.bestSeller}>Best Seller</span>
            </div>
            <div className={styles.heroOverlay}>
              <h2 className={styles.heroTitle}>{slide[locale].title}</h2>
              <Link href={slide[locale].link}>
                <button className={styles.heroButton}>
                  {slide[locale].buttonText}
                </button>
              </Link>
            </div>
          </div>
        ))}
        <button className={styles.prevArrow} onClick={prevSlide}>
          &#10094;
        </button>
        <button className={styles.nextArrow} onClick={nextSlide}>
          &#10095;
        </button>
      </div>

      {/* Contenedor principal */}
      <div className={styles.contentContainer}>
        {/* Columna Izquierda: Nosotros, Misión y Visión */}
        <div className={styles.leftColumn}>
          {/* Sección Nosotros */}
          <div className={styles.aboutSection}>
            <h2 className={styles.aboutTitle}>{t.about.title}</h2>
            {t.about.content.split("\n").map((para, i) => (
              <p key={i} className={styles.aboutText}>
                {para}
              </p>
            ))}
          </div>

          {/* Misión y Visión en una misma columna */}
          <div className={styles.missionVisionContainer}>
            {/* Tarjeta de Misión */}
            <div className={styles.card}>
              <div className={styles.imageContainer}>
                <Image
                  src={imgMission}
                  alt="Misión"
                  width={1000}
                  height={1000}
                  quality={100}
                  className={styles.image}
                  priority
                />
              </div>
              <div className={styles.cardContent}>
                <h2 className={styles.title}>{t.mission.title}</h2>
                <p className={styles.text}>{t.mission.content}</p>
              </div>
            </div>

            {/* Tarjeta de Visión */}
            <div className={styles.card}>
              <div className={styles.imageContainer}>
                <Image
                  src={imgVision}
                  alt="Visión"
                  width={1000}
                  height={1000}
                  quality={100}
                  className={styles.image}
                  priority
                />
              </div>
              <div className={styles.cardContent}>
                <h2 className={styles.title}>{t.vision.title}</h2>
                <p className={styles.text}>{t.vision.content}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Columna Derecha: Valores */}
        <div className={styles.rightColumn}>
          <h2 className={styles.subtitle}>{t.values.title}</h2>
          <ul className={styles.valuesList}>
            {t.values.list.map((value, index) => {
              const IconComponent = [
                FaLeaf,
                FaStar,
                FaRecycle,
                FaHandshake,
                FaHeart,
                FaLightbulb,
              ][index];
              return (
                <li key={index} className={styles.valueItem}>
                  <div className={styles.valueHeader}>
                    <IconComponent className={styles.valueIcon} />
                    <h3 className={styles.valueTitle}>{value.title}</h3>
                  </div>
                  <p className={styles.valueText}>{value.description}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}