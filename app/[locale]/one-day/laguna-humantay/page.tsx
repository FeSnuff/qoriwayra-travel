"use client"
// src/app/[locale]/camino-inca/camino-inca-2d/page.tsx
import React from "react";
import ComponentePrincipal from "@/app/components/utils/principal/pricipal";
import img1 from "@/public/images/OneDayTour/Humantay/humantay1.jpg";
import img2 from "@/public/images/OneDayTour/Humantay/humantay2.jpg";
import img3 from "@/public/images/OneDayTour/Humantay/humantay3.jpg";
import img4 from "@/public/images/OneDayTour/Humantay/humantay4.webp";
import img5 from "@/public/images/OneDayTour/Humantay/humantay5.jpg";
import mainImg from "@/public/images/OneDayTour/Humantay/humantay main.webp";
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

/* 🔹 Definir objeto de traducciones */
const translations: { es: TranslationContent; en: TranslationContent } = {
  es: {
    generalTitle: "Tour a la Laguna Humantay (Full Day)",
    whatsapp: "Hola, quiero reservar el paquete ",
    tripOverview: {
      title: "Resumen del Viaje",
      content:
        "Embárcate en una aventura inolvidable hacia la impresionante Laguna Humantay, un paraíso natural enclavado en el corazón de los Andes peruanos. Este tour de un día te llevará a través de paisajes de montaña espectaculares, pueblos pintorescos y te permitirá experimentar la majestuosidad de una de las lagunas más hermosas del mundo. \nLa altitud de la Laguna Humantay es de aproximadamente 4,200 metros sobre el nivel del mar.",
    },
    itinerarySummary: {
      title: "Resumen del Itinerario",
      days: [
        {
          title: "Día Único: Cusco - Laguna Humantay - Cusco",
          steps: [
            { iconType: "bus", text: "Salida desde Cusco en bus" },
            { iconType: "lunch", text: "Desayuno" },
            { iconType: "walk", text: "Caminata por senderos andinos" },
            { iconType: "lake", text: "Llegada a la Laguna Humantay" },
            { iconType: "lunch", text: "Almuerzo" },
            { iconType: "bus", text: "Regreso a Cusco en bus" },
          ],
        },
      ],
    },
    itinerary: [
      {
        title: "Itinerario Completo",
        text: (
          <>
            <p>Recojo en su hotel en Cusco. Nuestro transporte privado y guía bilingüe lo recogerán temprano para aprovechar al máximo el día.</p>
            <p>Viaje en autobús hacia el pueblo de Mollepata. Disfrute de un desayuno andino tradicional en un restaurante local para recargar energías.</p>
            <p>Continuación del viaje en autobús hasta el campamento base de Soraypampa.</p>
            <p>Caminata escénica de ascenso a la Laguna Humantay (3 km aproximadamente). Admire las vistas panorámicas de las montañas nevadas, los valles verdes y la flora y fauna local.</p>
            <p>Tiempo libre en la Laguna Humantay. Maravíllese con el color turquesa intenso de la laguna, tome fotografías impresionantes y disfrute de la tranquilidad del entorno.</p>
            <p>Descenso de regreso al campamento base de Soraypampa.</p>
            <p>Almuerzo en Mollepata. Pruebe los sabores auténticos de la cocina peruana en un ambiente acogedor.</p>
            <p>Regreso a Cusco. Relájese y disfrute del paisaje mientras lo llevamos de vuelta a su hotel.</p>
              
          </>
        ),
        services: [
          "Recojo del hotel",
          "Transporte turístico de ida y vuelta.",
          "Guía profesional.",
          "Desayuno y almuerzo Buffet.",
          "Equipo de primeros auxilios.",
          "Bastones artesanales",
        ],
      },
    ],
    additionalInfo: {
      title: "Detalles del Tour",
      physicalRating: "Moderada",
    },
    includedServices: "Servicios Incluidos:",
    notIncluded: ["Propinas", "Bebidas adicionales", "Entrada al área natural",],
    recommendations: [
      "Llevar ropa cómoda y abrigada",
      "Calzado adecuado para trekking",
      "Protector solar y agua",
      "Cámara fotográfica",
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
    generalTitle: "Laguna Humantay Tour (Full Day)",
    whatsapp: "Hello, I want to book the package ",
    tripOverview: {
      title: "Trip Overview",
      content:
        "Embark on an unforgettable adventure to the stunning Humantay Lagoon, a natural paradise nestled in the heart of the Peruvian Andes. This full-day tour will take you through breathtaking mountain landscapes, picturesque villages, and allow you to experience the majesty of one of the most beautiful lagoons in the world. \nThe altitude of Humantay Lagoon is approximately 4,200 meters above sea level.",
    },
    itinerarySummary: {
      title: "Itinerary Overview",
      days: [
        {
          title: "Single Day: Cusco - Laguna Humantay - Cusco",
          steps: [
            { iconType: "bus", text: "Departure from Cusco by bus" },
            { iconType: "lunch", text: "Break Fast" },
            { iconType: "walk", text: "Trek through Andean trails" },
            { iconType: "lake", text: "Arrival at Laguna Humantay" },
            { iconType: "lunch", text: "Lunch" },
            { iconType: "bus", text: "Return to Cusco by bus" },
          ],
        },
      ],
    },
    itinerary: [
      {
        title: "Full Day Itinerary",
        text: (
          <>
            <p>Pickup from your hotel in Cusco. Our private transport and bilingual guide will pick you up early to make the most of the day.</p>
            <p>Bus trip to the town of Mollepata. Enjoy a traditional Andean breakfast at a local restaurant to recharge your energy.</p>
            <p>Continue the bus journey to the Soraypampa base camp.</p>
            <p>Scenic hike up to Humantay Lagoon (approximately 3 km). Admire the panoramic views of the snow-capped mountains, green valleys, and local flora and fauna.</p>
            <p>Free time at Humantay Lagoon. Marvel at the deep turquoise color of the lagoon, take stunning photographs, and enjoy the tranquility of the surroundings.</p>
            <p>Descent back to the Soraypampa base camp.</p>
            <p>Lunch in Mollepata. Taste the authentic flavors of Peruvian cuisine in a cozy setting.</p>
            <p>Return to Cusco. Relax and enjoy the scenery as we take you back to your hotel.</p>
          </>
        ),
        services: [
          "Pickup at hotel",
          "Round-trip tourist transportation.",
          "Professional guide.",
          "Buffet breakfast and lunch.",
          "First aid kit.",
          "Handmade walking sticks.",
        ],
      },
    ],
    additionalInfo: {
      title: "Tour Details",
      physicalRating: "Moderate",
    },
    includedServices: "Included Services:",
    notIncluded: ["Tips", "Additional beverages", "Entrance fee to the natural area"],
    recommendations: [
      "Wear comfortable and warm clothing",
      "Use proper trekking shoes",
      "Bring sunscreen and water",
      "Carry a camera",
      "Hat"
    ],
    groupServices: {
      daysAndNights: "Full Day",
      price: "USD $23",
      quote: "More Information",
      bookNow: "Book Now",
      tourForMe: "Is this tour for me?",
    },
  },
};

export default function LagunaHumantay(){
    const params = useParams();
    const localeValue = params.locale === "en" ? "en" : "es";
    const content = { ...translations[localeValue], ...globalImages };
  
    return <ComponentePrincipal {...content} />;
  }