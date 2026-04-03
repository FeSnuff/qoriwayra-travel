"use client"
// src/app/[locale]/camino-inca/camino-inca-2d/page.tsx
import React from "react";
import ComponentePrincipal from "@/app/components/utils/principal/pricipal";
import img1 from "@/public/images/Valle/ValleVIP/vip1.jpg";
import img2 from "@/public/images/Valle/ValleVIP/vip2.jpg";
import img3 from "@/public/images/Valle/ValleVIP/vip3.jpeg";
import img4 from "@/public/images/Valle/ValleVIP/vip4.jpg";
import img5 from "@/public/images/Valle/ValleVIP/vip5.jpg";
import mainImg from "@/public/images/Valle/ValleVIP/valle main.jpg";

import { useParams } from "next/navigation";
/* 🔹 Definir la Interfaz */
interface TranslationContent {
  generalTitle: string;
  whatsapp: string;
  tripOverview: {
    title: string;
    content: string;
  };
  itinerarySummary: {
    title: string;
    days: {
      title: string;
      steps: { iconType: string; text: string }[];
    }[];
  };
  itinerary: {
    title: string;
    text: React.ReactNode;
    services: string[];
  }[];
  additionalInfo: {
    title: string;
    physicalRating: string;
  };
  includedServices: string;
  notIncluded: string[];
  recommendations: string[];
  groupServices: {
    daysAndNights: string;
    price: string;
    quote: string;
    bookNow: string;
    tourForMe: string;
  };
}

/* 🔹 Imágenes globales */
const globalImages = {
  mapImage: mainImg.src,
  smallImages: [
    img1.src,
    img2.src,
    img3.src,
    img4.src,
    img5.src,
  ],
};

/* 🔹 Definir objeto de traducciones para el tour completo del Valle Sagrado VIP */
const translations: { es: TranslationContent; en: TranslationContent } = {
  es: {
    generalTitle: "Tour Valle Sagrado VIP (Full Day)",
    whatsapp: "Hola, quiero reservar el paquete ",
    tripOverview: {
      title: "Resumen del Viaje",
      content:
        "Tour VIP por el Valle Sagrado de los Incas, una experiencia inolvidable que te permitirá descubrir la magia y el esplendor de este valle sagrado de una manera única y personalizada.",
    },
    itinerarySummary: {
      title: "Resumen del Itinerario",
      days: [
        {
          title: "Itinerario del Tour Valle Sagrado VIP",
          steps: [
            { iconType: "bus", text: "CHINCHERO" },
            { iconType: "walk", text: "MORAY" },
            { iconType: "walk", text: "SALINERAS DE MARAS" },
            { iconType: "walk", text: "OLLANTAYTAMBO" },
            { iconType: "bus", text: "PISAC" },
          ],
        },
      ],
    },
    itinerary: [
      {
        title: "Itinerario del Tour Valle Sagrado VIP",
        text: (
          <>
            <p>
            Nuestro viaje comienza en Chinchero, un pintoresco pueblo andino conocido por su impresionante complejo arqueológico y su vibrante mercado de artesanías. Aquí, exploraremos las ruinas incas, admiraremos la iglesia colonial y disfrutaremos de una demostración de tejidos tradicionales.
            </p>
            <p>
            Continuaremos hacia Moray, un sitio arqueológico fascinante que presenta terrazas circulares concéntricas utilizadas por los incas como laboratorio agrícola. Nos maravillaremos con la ingeniería inca y aprenderemos sobre sus innovadoras técnicas de cultivo.
            </p>
            <p>
            Nuestra siguiente parada será las Salineras de Maras, un paisaje impresionante de miles de pozas de sal que se extienden por la ladera de la montaña. Observaremos el proceso de extracción de sal y capturaremos fotografías espectaculares.
            </p>
            <p>
            Llegaremos a Ollantaytambo, una antigua fortaleza inca que ofrece vistas panorámicas del valle. Exploraremos sus impresionantes templos, terrazas y canales, y nos sumergiremos en la historia de este importante centro administrativo y religioso.
            </p>
            <p>
            Finalmente, visitaremos Pisac, otro complejo arqueológico impresionante con terrazas agrícolas, templos y un cementerio inca. Exploraremos el mercado de artesanías de Pisac, donde podremos adquirir recuerdos únicos.
            </p>
          </>
        ),
        services: [
          "Recojo en el hotel",
          "Transporte turístico VIP",
          "Guía profesional bilingüe",
          "Almuerzo Buffet en Urubamba",
        ],
      },
    ],
    additionalInfo: {
      title: "Detalles del Tour",
      physicalRating: "Moderada",
    },
    includedServices: "Servicios Incluidos:",
    notIncluded: [
      "Ingreso a las Salineras (cobro por parte de la comunidad)",
      "Boleto Turístico General",
    ],
    recommendations: [
      "Llevar ropa cómoda y abrigada",
      "Usar zapatos adecuados y protector solar",
      "Llevar agua y snacks",
      "Sombrero"
    ],
    groupServices: {
      daysAndNights: "Full Day",
      price: "USD $23",
      quote: "Info Adicional",
      bookNow: "Reservar Ahora",
      tourForMe: "¿Este tour es para mí?",
    },
  },
  en: {
    generalTitle: "Sacred Valley VIP Tour (Full Day)",
    whatsapp: "Hello, I want to book the package ",
    tripOverview: {
      title: "Trip Overview",
      content:
        "VIP Tour of the Sacred Valley of the Incas, an unforgettable experience that will allow you to discover the magic and splendor of this sacred valley in a unique and personalized way.",
    },
    itinerarySummary: {
      title: "Itinerary Overview",
      days: [
        {
          title: "Sacred Valley VIP Tour Itinerary",
          steps: [
            { iconType: "bus", text: "CHINCHERO" },
            { iconType: "walk", text: "MORAY" },
            { iconType: "walk", text: "SALINERAS DE MARAS" },
            { iconType: "walk", text: "OLLANTAYTAMBO" },
            { iconType: "bus", text: "PISAC" },
          ],
        },
      ],
    },
    itinerary: [
      {
        title: "Sacred Valley VIP Tour Itinerary",
        text: (
          <>
            <p>
            VIP Tour of the Sacred Valley of the Incas, an unforgettable experience that will allow you to discover the magic and splendor of this sacred valley in a unique and personalized way.
            </p>
            <p>
            Our journey begins in Chinchero, a picturesque Andean town known for its impressive archaeological complex and vibrant handicraft market. Here, we will explore the Inca ruins, admire the colonial church, and enjoy a demonstration of traditional weaving.
            </p>
            <p>
            We will continue to Moray, a fascinating archaeological site featuring concentric circular terraces used by the Incas as an agricultural laboratory. We will marvel at Inca engineering and learn about their innovative cultivation techniques.
            </p>
            <p>
            Our next stop will be the Salt Mines of Maras, an impressive landscape of thousands of salt pans spread across the mountainside. We will observe the salt extraction process and capture spectacular photographs.
            </p>
            <p>
            We will arrive at Ollantaytambo, an ancient Inca fortress that offers panoramic views of the valley. We will explore its impressive temples, terraces, and canals, and immerse ourselves in the history of this important administrative and religious center.
            </p>
          </>
        ),
        services: [
          "Hotel pickup",
          "VIP transportation",
          "Professional bilingual guide",
          "Buffet lunch in Urubamba",
        ],
      },
    ],
    additionalInfo: {
      title: "Tour Details",
      physicalRating: "Moderate",
    },
    includedServices: "Included Services:",
    notIncluded: [
      "Entry to the Salineras (community fee)",
      "General Tourist Ticket",
    ],
    recommendations: [
      "Wear comfortable, warm clothing",
      "Bring proper walking shoes and sunscreen",
      "Carry water and snacks",
      "Hat"
    ],
    groupServices: {
      daysAndNights: "Full Day",
      price: "USD $23",
      quote: "Additional Info",
      bookNow: "Book Now",
      tourForMe: "Is this tour for me?",
    },
  },
};

export default function ValleVIP(){
    const params = useParams();
    const localeValue = params.locale === "en" ? "en" : "es";
    const content = { ...translations[localeValue], ...globalImages };
  
    return <ComponentePrincipal {...content} />;
  }