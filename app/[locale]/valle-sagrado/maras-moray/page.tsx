"use client"
// src/app/[locale]/camino-inca/camino-inca-2d/page.tsx
import React from "react";
import ComponentePrincipal from "@/app/components/utils/principal/pricipal";
import img1 from "@/public/images/Valle/ValleMaras/maras1.jpg";
import img2 from "@/public/images/Valle/ValleMaras/maras2.jpg";
import img3 from "@/public/images/Valle/ValleMaras/maras3.jpg";
import img4 from "@/public/images/Valle/ValleMaras/maras4.jpg";
import img5 from "@/public/images/Valle/ValleMaras/maras5.jpg";
import mainImg from "@/public/images/Valle/ValleMaras/maras main.jpg";
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
    generalTitle: "Maras - Moray - Salineras",
    whatsapp: "Hola, quiero reservar el paquete ",
    tripOverview: {
      title: "Resumen del Viaje",
      content:
        "Explora los asombrosos paisajes del Valle Sagrado en un tour inolvidable que te llevará a Maras, Moray y las impresionantes Salineras. Adéntrate en el misterio de Moray, un innovador centro agrícola inca con terrazas concéntricas que desafían el tiempo. Déjate sorprender por las Salineras de Maras, un espectáculo natural donde la extracción de sal sigue realizándose como en la época ancestral. Sumérgete en la magia de los Andes y vive la perfecta armonía entre historia, cultura y naturaleza en este fascinante recorrido por el corazón de los incas.",
    },
    itinerarySummary: {
      title: "Resumen del Itinerario",
      days: [
        {
          title: "Itinerario del Tour Maras - Moray - Salineras",
          steps: [
            { iconType: "bus", text: "Recojo en tu hotel en Cusco." },
            { iconType: "walk", text: "Visita guiada a las Salineras de Maras, donde aprenderás proceso de extracción de sal." },
            { iconType: "bus", text: "Continuación hacia Moray, donde explorarás las terrazas circulares utilizadas como laboratorio agrícola inca." },
          ],
        },
      ],
    },
    itinerary: [
      {
        title: "Itinerario del Tour Maras - Moray - Salineras",
        text: (
          <>
            <p>Embárcate en un tour inolvidable por el Valle Sagrado y déjate cautivar por la magia de sus paisajes. Este recorrido te sumerge en la belleza natural de Perú, donde cada rincón cuenta una historia milenaria y la tierra se funde con la tradición ancestral.</p>
            <p>Descubre el enigmático complejo de Moray, un laboratorio agrícola inca formado por terrazas circulares que demuestran la avanzada ingeniería de esta civilización. Sus escalas naturales y patrones únicos te invitan a explorar y a imaginar el conocimiento que los incas tenían sobre la agricultura y el clima.</p>
            <p>Maravíllate con las Salineras de Maras, un paisaje impresionante donde cientos de pozas de sal se extienden sobre la ladera de la montaña. Aquí, la extracción tradicional de sal se une a la fuerza de la naturaleza, creando un escenario que combina historia, color y tradición en uno de los lugares más pintorescos del país.</p>
          </>
        ),
        services: [
          "Transporte turístico de ida y vuelta.",
          "Guía profesional bilingüe",
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
      "Llevar ropa cómoda",
      "Usar zapatos adecuados",
      "Agua, snacks y protector solar",
      "Sombrero"
    ],
    groupServices: {
      daysAndNights: "Full Day",
      price: "USD $17",
      quote: "Info Adicional",
      bookNow: "Reservar Ahora",
      tourForMe: "¿Este tour es para mí?",
    },
  },
  en: {
    generalTitle: "Maras - Moray - Salineras",
    whatsapp: "Hello, I want to book the package ",
    tripOverview: {
      title: "Trip Overview",
      content:
        "Explore the stunning landscapes of the Sacred Valley on an unforgettable tour that will take you to Maras, Moray, and the impressive Salt Mines. Delve into the mystery of Moray, an innovative Inca agricultural center with concentric terraces that defy time. Be amazed by the Maras Salt Mines, a natural spectacle where salt extraction continues as it did in ancient times. Immerse yourself in the magic of the Andes and experience the perfect harmony between history, culture, and nature on this fascinating tour through the heart of the Incas.",
    },
    itinerarySummary: {
      title: "Itinerary Overview",
      days: [
        {
          title: "Maras - Moray - Salineras Tour Itinerary",
          steps: [
            { iconType: "bus", text: "Pickup from your hotel in Cusco." },
            { iconType: "walk", text: "Guided visit to the Salineras of Maras, where you will learn about salt extraction process." },
            { iconType: "bus", text: "Continue to Moray, where you will explore the circular terraces used as an Inca agricultural laboratory." },
          ],
        },
      ],
    },
    itinerary: [
      {
        title: "Moray - Salineras",
        text: (
          <>
            <p>Embark on an unforgettable adventure through the breathtaking landscapes of the Sacred Valley. Explore the mystical region of Maras, Moray, and the Maras Salt Mines, where nature blends with history to offer a unique and magical experience.</p>
            <p>Discover the enigmatic Moray complex, an Inca agricultural laboratory famous for its circular terraces that defy the passage of time. Here, ancient engineering meets natural beauty, revealing the secrets and innovation of an ancient civilization.</p>
            <p>Marvel at the spectacular landscape of the salt mines, where salt is extracted traditionally amidst a setting that evokes the grandeur of the Andes. This tour is a celebration of the fusion of nature and Andean culture, inviting you to immerse yourself in one of Peru most picturesque corners.</p>
          </>
        ),
        services: [
          "Round-trip tourist transportation.",
          "Professional bilingual guide",
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
      "Wear comfortable clothing",
      "Proper walking shoes",
      "Water, snacks and sunscreen",
      "Hat"
    ],
    groupServices: {
      daysAndNights: "Full Day",
      price: "USD $17",
      quote: "Additional Info",
      bookNow: "Book Now",
      tourForMe: "Is this tour for me?",
    },
  },
};

export default function MarasMoray(){
    const params = useParams();
    const localeValue = params.locale === "en" ? "en" : "es";
    const content = { ...translations[localeValue], ...globalImages };
  
    return <ComponentePrincipal {...content} />;
  }
