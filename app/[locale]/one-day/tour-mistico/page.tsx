"use client"
// src/app/[locale]/camino-inca/camino-inca-2d/page.tsx
import React from "react";
import ComponentePrincipal from "@/app/components/utils/principal/pricipal";
import img1 from "@/public/images/OneDayTour/Tour Mistico/mistico1.jpg";
import img2 from "@/public/images/OneDayTour/Tour Mistico/mistico2.jpg";
import img3 from "@/public/images/OneDayTour/Tour Mistico/mistico3.jpg";
import img4 from "@/public/images/OneDayTour/Tour Mistico/mistico4.jpg";
import img5 from "@/public/images/OneDayTour/Tour Mistico/mistico5.jpg";
import mainImg from "@/public/images/OneDayTour/Tour Mistico/mistico main.jpg";
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
  // Usamos una imagen de mapa genérica, puede ser ajustada según el destino
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
    generalTitle: "Tour Místico 4 en 1",
    whatsapp: "Hola, quiero reservar el paquete ",
    tripOverview: {
      title: "Resumen del Viaje",
      content:
        "Embárcate en un tour místico que recorre cuatro destinos emblemáticos: Morada de los Dioses, Parque de los Duendes, Humedal de Huasao y Bosque de los End. Vive una experiencia única en la que se combinan la espiritualidad y la naturaleza ancestral.",
    },
    itinerarySummary: {
      title: "Resumen del Itinerario",
      days: [
        {
          title: "Tour Místico 4 en 1",
          steps: [
            { iconType: "bus", text: "Traslado desde Cusco" },
            { iconType: "walk", text: "Visita a la Morada de los Dioses" },
            { iconType: "walk", text: "Recorrido por el Parque de los Duendes" },
            { iconType: "walk", text: "Exploración del Humedal de Huasao" },
            { iconType: "walk", text: "Descubrimiento del Bosque de los End" },
          ],
        },
      ],
    },
    itinerary: [
      {
        title: "Itinerario del Tour",
        text: (
          <>
            <p>El tour inicia con el traslado desde Cusco. Llegamos a la <strong>Morada de los Dioses</strong>, un lugar lleno de misticismo y leyendas ancestrales. Luego, visitamos el <strong>Parque de los Duendes</strong>, donde la magia de la naturaleza se combina con el folclore local. Continuamos hacia el <strong>Humedal de Huasao</strong>, un ecosistema único que alberga una gran diversidad de flora y fauna, y finalizamos en el <strong>Bosque de los End</strong>, un remanso de paz y belleza natural.</p>
            <p>El tour ofrece una inmersión en la cultura y la naturaleza de la región, complementado con la guía de un experto local que te explicará cada uno de estos fascinantes lugares.</p>
          </>
        ),
        services: [
          "Traslado desde Cusco",
          "Guía profesional bilingüe",
          "Entrada a los sitios místicos",
        ],
      },
    ],
    additionalInfo: {
      title: "Detalles del Tour",
      physicalRating: "Fácil",
    },
    includedServices: "Servicios Incluidos:",
    notIncluded: ["Alimentación adicional", "Propinas"],
    recommendations: [
      "Usar ropa cómoda",
      "Protector solar",
      "Agua y snacks",
      "Calzado para caminar",
      "Lentes de sol",
      "Poncho de lluvia  (según temporada)",
      "Sombrero"
    ],
    groupServices: {
      daysAndNights: "Part Time",
      price: "USD $30",
      quote: "Info Adicional",
      bookNow: "Reservar Ahora",
      tourForMe: "¿Este tour es para mí?",
    },
  },
  en: {
    generalTitle: "Mystical 4-in-1 Tour",
    whatsapp: "Hello, I want to book the package ",
    tripOverview: {
      title: "Trip Overview",
      content:
        "Embark on a mystical tour covering four iconic destinations: The Abode of the Gods, the Enchanted Park, the Huasao Wetland, and the Forest of the End. Experience a unique journey that blends spirituality with ancient natural wonders.",
    },
    itinerarySummary: {
      title: "Itinerary Overview",
      days: [
        {
          title: "Mystical 4-in-1 Tour",
          steps: [
            { iconType: "bus", text: "Transfer from Cusco" },
            { iconType: "walk", text: "Visit to the Abode of the Gods" },
            { iconType: "walk", text: "Tour of the Enchanted Park" },
            { iconType: "walk", text: "Exploration of the Huasao Wetland" },
            { iconType: "walk", text: "Discovery of the Forest of the End" },
          ],
        },
      ],
    },
    itinerary: [
      {
        title: "Tour Itinerary",
        text: (
          <>
            <p>The tour starts with a transfer from Cusco. We arrive at the <strong>Abode of the Gods</strong>, a place filled with mysticism and ancient legends. Next, we visit the <strong>Enchanted Park</strong>, where nature’s magic blends with local folklore. We then explore the unique <strong>Huasao Wetland</strong>, home to diverse flora and fauna, and finally, we discover the <strong>Forest of the End</strong>, a sanctuary of tranquility and natural beauty.</p>
            <p>This tour provides an immersive experience into the region’s culture and nature, guided by a local expert who shares the rich history behind each site.</p>
          </>
        ),
        services: [
          "Transfer from Cusco",
          "Professional bilingual guide",
          "Entrance fees to the mystical sites",
          "Sunglasses",
          "Rain umbrella (seasonal)"
        ],
      },
    ],
    additionalInfo: {
      title: "Tour Details",
      physicalRating: "Easy",
    },
    includedServices: "Included Services:",
    notIncluded: ["Additional Meals", "Tips"],
    recommendations: [
      "Comfortable clothing",
      "Bring sunscreen",
      "Water and snacks",
      "Wear walking shoes",
      "Hat"
    ],
    groupServices: {
      daysAndNights: "Part Time",
      price: "USD $30",
      quote: "Additional Info",
      bookNow: "Book Now",
      tourForMe: "Is this tour for me?",
    },
  },
};

export default function TourMistico(){
    const params = useParams();
    const localeValue = params.locale === "en" ? "en" : "es";
    const content = { ...translations[localeValue], ...globalImages };
  
    return <ComponentePrincipal {...content} />;
  }