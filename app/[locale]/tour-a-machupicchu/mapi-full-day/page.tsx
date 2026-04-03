"use client"
// src/app/[locale]/camino-inca/camino-inca-2d/page.tsx
import React from "react";
import ComponentePrincipal from "@/app/components/utils/principal/pricipal";
import img1 from "@/public/images/Macchu Picchu/Machu Picchu - Full day/Machu Picchu 1.jpg";
import img2 from "@/public/images/Macchu Picchu/Machu Picchu - Full day/Machu Picchu 2.jpg";
import img3 from "@/public/images/Macchu Picchu/Machu Picchu - Full day/Machu Picchu 3.jpg";
import img4 from "@/public/images/Macchu Picchu/Machu Picchu - Full day/Machu Picchu 4.jpg";
import img5 from "@/public/images/Macchu Picchu/Machu Picchu - Full day/Machu Picchu 5.jpg";
import mainImg from "@/public/images/Macchu Picchu/Machu Picchu - Full day/Machu Picchu main.jpg";
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
    generalTitle: "Machu Picchu Full Day",
    whatsapp: "Hola, quiero reservar el paquete ",
    tripOverview: {
      title: "Resumen del Tour",
      content:
        "Embárcate en un viaje mágico a Machu Picchu, una de las Nuevas Siete Maravillas del Mundo y Patrimonio de la Humanidad por la UNESCO.\nEste tour de un día te llevará a través de paisajes impresionantes, desde los valles sagrados hasta las montañas nubladas, para descubrir la majestuosidad de la ciudadela inca y su rica historia.",
    },
    itinerarySummary: {
      title: "Itinerario Resumido",
      days: [
        {
          title: "Machu Picchu - Aventura Full Day",
          steps: [
            { iconType: "bus", text: "Transporte desde Cusco a Machu Picchu" },
            { iconType: "walk", text: "Tour guiado en Machu Picchu" },
            { iconType: "free", text: "Tiempo libre para explorar" },
            { iconType: "bus", text: "Retorno a Cusco" },
          ],
        },
      ],
    },
    itinerary: [
      {
        title: "Mañana: Salida y Llegada a Machu Picchu",
        text: (
          <>
            <p>Recojo en su hotel en Cusco. Nuestro transporte privado y guía bilingüe lo recogerán para aprovechar al máximo el día.</p>
            <p>Viaje en autobús hacia la estación de tren de Ollantaytambo.</p>
            <p>Abordaremos el tren turístico que nos llevará a través del Valle Sagrado de los Incas, con vistas espectaculares de montañas, ríos y pueblos pintorescos.</p>
            <p>Llegada a la estación de tren de Aguas Calientes, la puerta de entrada a Machu Picchu.</p>
            <p>Traslado en autobús a la ciudadela de Machu Picchu. El viaje en autobús ofrece vistas panorámicas del río Urubamba y las montañas circundantes.</p>
            <p>Tour guiado por Machu Picchu. Nuestro guía experto lo llevará a través de los lugares más emblemáticos de la ciudadela, como la Plaza Principal, el Templo del Sol, el Intihuatana y el sector residencial. Aprenderá sobre la historia, la cultura y los misterios de Machu Picchu.</p>
            <p>Tiempo libre en Machu Picchu. Explore la ciudadela por su cuenta, tome fotografías impresionantes y disfrute de la energía mágica del lugar.</p>
            <p>Descenso en autobús a Aguas Calientes.</p>
            <p>Almuerzo en Aguas Calientes. Pruebe los sabores auténticos de la cocina peruana en un restaurante local.</p>
            <p>Tiempo libre en Aguas Calientes. Relájese en las aguas termales, visite el mercado de artesanías o simplemente pasee por el pueblo.</p>
            <p>Regreso en tren a Ollantaytambo.</p>
            <p>Traslado en autobús a Cusco.</p>
            <p>Llegada a Cusco.</p>
          </>
        ),
        services: ["Transporte turístico de ida y vuelta desde su hotel en Cusco.", 
          "Guía bilingüe profesional (español/inglés).", 
          "Boletos de tren de ida y vuelta a Aguas Calientes.",
          "Boletos de autobús de subida y bajada a Machu Picchu.",
          "Entrada a Machu Picchu."
        ],
      },
    ],
    additionalInfo: {
      title: "Detalles del Tour",
      physicalRating: "Baja a Moderada",
    },
    includedServices: "Servicios Incluidos:",
    notIncluded: ["Alimentación en Machu Picchu."],
    recommendations: ["Llevar ropa cómoda", "Protector solar", "Agua", "Sombrero"],
    groupServices: {
      daysAndNights: "Full Day",
      price: "USD $260",
      quote: "Info Adicional",
      bookNow: "Reservar Ahora",
      tourForMe: "¿Es este tour para mí?",
    },
  },
  en: {
    generalTitle: "Machu Picchu Full Day",
    whatsapp: "Hello, I want to book the package ",
    tripOverview: {
      title: "Tour Overview",
      content:
        "Embark on a magical journey to Machu Picchu, one of the New Seven Wonders of the World and a UNESCO World Heritage Site.\nThis one-day tour will take you through breathtaking landscapes, from sacred valleys to misty mountains, to discover the majesty of the Inca citadel and its rich history.",
    },
    itinerarySummary: {
      title: "Itinerary Summary",
      days: [
        {
          title: "Single Day: Cusco - Machu Picchu - Cusco",
          steps: [
            { iconType: "bus", text: "Transportation from Cusco to Machu Picchu" },
            { iconType: "walk", text: "Guided tour at Machu Picchu" },
            { iconType: "free", text: "Free time to explore" },
            { iconType: "bus", text: "Return to Cusco" },
          ],
        },
      ],
    },
    itinerary: [
      {
        title: "Machu Picchu - Full Day Adventure",
        text: (
          <>
            <p>Pickup from your hotel in Cusco. Our private transportation and bilingual guide will pick you up to make the most of the day.</p>
            <p>Bus trip to the Ollantaytambo train station.</p>
            <p>We will board the tourist train that will take us through the Sacred Valley of the Incas, offering spectacular views of mountains, rivers, and picturesque villages.</p>
            <p>Arrival at the Aguas Calientes train station, the gateway to Machu Picchu.</p>
            <p>Bus transfer to the Machu Picchu citadel. The bus ride offers panoramic views of the Urubamba River and the surrounding mountains.</p>
            <p>Guided tour of Machu Picchu. Our expert guide will take you through the most iconic sites of the citadel, such as the Main Square, the Temple of the Sun, the Intihuatana, and the residential sector. You will learn about the history, culture, and mysteries of Machu Picchu.</p>
            <p>Free time in Machu Picchu. Explore the citadel on your own, take stunning photographs, and soak in the magical energy of the place.</p>
            <p>Bus descent to Aguas Calientes.</p>
            <p>Lunch in Aguas Calientes. Taste the authentic flavors of Peruvian cuisine in a local restaurant.</p>
            <p>Free time in Aguas Calientes. Relax in the hot springs, visit the handicraft market, or simply stroll through the town.</p>
            <p>Return train to Ollantaytambo.</p>
            <p>Bus transfer to Cusco.</p>
            <p>Arrival in Cusco.</p>
          </>
        ),
        services: ["Round-trip tourist transportation from your hotel in Cusco.",
           "Professional bilingual guide (Spanish/English).",
           "Round-trip train tickets to Aguas Calientes.",
            "Bus tickets for the ascent and descent to Machu Picchu.",
            "Entrance ticket to Machu Picchu."
          ],
      },
    ],
    additionalInfo: {
      title: "Tour Details",
      physicalRating: "Low to Moderate",
    },
    includedServices: "Included Services:",
    notIncluded: ["Meals in Machu Picchu."],
    recommendations: ["Wear comfortable clothing", "Sunscreen", "Water", "Hat"],
    groupServices: {
      daysAndNights: "Full Day",
      price: "USD $260",
      quote: "Additional Info",
      bookNow: "Book Now",
      tourForMe: "Is this tour for me?",
    },
  },
};

export default function MapiFullDay(){
    const params = useParams();
    const localeValue = params.locale === "en" ? "en" : "es";
    const content = { ...translations[localeValue], ...globalImages };
  
    return <ComponentePrincipal {...content} />;
  }