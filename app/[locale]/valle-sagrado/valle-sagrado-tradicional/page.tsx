"use client"
// src/app/[locale]/camino-inca/camino-inca-2d/page.tsx
import React from "react";
import ComponentePrincipal from "@/app/components/utils/principal/pricipal";
import img1 from "@/public/images/Valle/ValleTradicional/vip1.jpg";
import img2 from "@/public/images/Valle/ValleTradicional/vip2.jpg";
import img3 from "@/public/images/Valle/ValleTradicional/vip3.jpg";
import img4 from "@/public/images/Valle/ValleTradicional/vip4.jpg";
import img5 from "@/public/images/Valle/ValleTradicional/vip5.jpg";
import mainImg from "@/public/images/Valle/ValleTradicional/valle main.jpg";

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
    generalTitle: "Valle Sagrado Tradicional (Full Day)",
    whatsapp: "Hola, quiero reservar el paquete ",
    tripOverview: {
      title: "Resumen del Viaje",
      content:
        "Descubre la esencia del Valle Sagrado de los Incas en un tour de un día que combina historia, cultura y paisajes. Comienza en Pisac, explorando sus andenes arqueológicos y mercado artesanal; disfruta un almuerzo andino en Urubamba. Continúa a Ollantaytambo, con su fortaleza inca y calles ancestrales, y finaliza en Chinchero, donde las tejedoras locales comparten técnicas tradicionales de tejido en medio de ruinas históricas y vistas panorámicas.",
    },
    itinerarySummary: {
      title: "Resumen del Itinerario",
      days: [
        {
          title: "Itinerario del Tour Valle Sagrado Tradicional",
          steps: [
            { iconType: "bus", text: "Visita al centro arqueológico de PISAC" },
            { iconType: "bus", text: "Visita al mercado de PISAC" },
            { iconType: "walk", text: "Visita al centro arqueológico de OLLANTAYTAMBO" },
            { iconType: "walk", text: "Almuerzo en Buffet en Urubamba" },
            { iconType: "bus", text: "Visita al centro arqueológico de CHINCHERO" },
          ],
        },
      ],
    },
    itinerary: [
      {
        title: "Itinerario del Tour Valle Sagrado Tradicional",
        text: (
          <>
            <p>Descubre la majestuosidad del Valle Sagrado de los Incas, un recorrido inolvidable por antiguos centros arqueológicos, paisajes impresionantes y cultura viva. Este tour de un día te llevará a conocer los principales atractivos del valle, donde la historia y la naturaleza se fusionan en un escenario único.</p>
            <p>El viaje comienza con una visita a Pisac, donde explorarás su complejo arqueológico con impresionantes andenes incas y disfrutarás del colorido mercado artesanal. Luego, continuaremos hacia Urubamba, el corazón del valle, para degustar un delicioso almuerzo buffet con lo mejor de la gastronomía andina.</p>
            <p>Por la tarde, visitaremos Ollantaytambo, una antigua ciudad inca con una impresionante fortaleza de piedra y estrechas calles que aún conservan su trazado original. Finalmente, llegaremos a Chinchero, un pintoresco pueblo andino donde conoceremos su sitio arqueológico y un centro textil, donde las tejedoras locales preservan sus ancestrales técnicas de teñido y tejido.</p>
            
          </>
        ),
        services: [
          "Transporte turístico ida y vuelta desde Cusco.",
          "Guía profesional bilingüe (español e inglés).",
          "Almuerzo buffet en Urubamba.",
          "Tiempo libre en el mercado artesanal de Pisac.",
        ],
      },
    ],
    additionalInfo: {
      title: "Detalles del Tour",
      physicalRating: "Moderada",
    },
    includedServices: "Servicios Incluidos:",
    notIncluded: [
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
    generalTitle: "Traditional Sacred Valley (Full Day)",
    whatsapp: "Hello, I want to book the package ",
    tripOverview: {
      title: "Trip Overview",
      content:
        "Discover the essence of the Sacred Valley of the Incas on a day tour blending history, culture, and landscapes. Begin in Pisac, exploring its archaeological terraces and artisan market; savor an Andean lunch in Urubamba. Continue to Ollantaytambo, with its Inca fortress and ancient streets, and end in Chinchero, where local weavers showcase traditional textile techniques amidst historic ruins and panoramic views.",
    },
    itinerarySummary: {
      title: "Itinerary Overview",
      days: [
        {
          title: "Traditional Sacred Valley Tour Itinerary",
          steps: [
            { iconType: "bus", text: "Visit to the PISAC Archaeological Site" },
            { iconType: "bus", text: "Visit to the PISAC Market" },
            { iconType: "walk", text: "Visit to the OLLANTAYTAMBO Archaeological Site" },
            { iconType: "walk", text: "Buffet lunch in Urubamba" },
            { iconType: "bus", text: "Visit to the CHINCHERO Archaeological Site" },
          ],
        },
      ],
    },
    itinerary: [
      {
        title: "Traditional Sacred Valley Tour Itinerary",
        text: (
          <>
            <p>Discover the majesty of the Sacred Valley of the Incas, an unforgettable journey through ancient archaeological sites, stunning landscapes, and living culture. This one-day tour will take you to explore the main attractions of the valley, where history and nature merge in a unique setting.</p>
            <p>The journey begins with a visit to Pisac, where you will explore its archaeological complex with impressive Inca terraces and enjoy the colorful artisan market. Then, we will continue to Urubamba, the heart of the valley, to enjoy a delicious buffet lunch with the best of Andean gastronomy.</p>
            <p>In the afternoon, we will visit Ollantaytambo, an ancient Inca city with an impressive stone fortress and narrow streets that still preserve their original layout. Finally, we will arrive at Chinchero, a picturesque Andean town where we will visit its archaeological site and a textile center, where local weavers preserve their ancestral dyeing and weaving techniques.</p>
            
          </>
        ),
        services: [
          "Round trip tourist transportation from Cusco.",
          "Professional bilingual guide (Spanish and English).",
          "Buffet lunch in Urubamba.",
          "Free time at the Pisac artisan market.",
        ],
      },
    ],
    additionalInfo: {
      title: "Tour Details",
      physicalRating: "Moderate",
    },
    includedServices: "Included Services:",
    notIncluded: [
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