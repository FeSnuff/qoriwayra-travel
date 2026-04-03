"use client"
// src/app/[locale]/camino-inca/camino-inca-2d/page.tsx
import React from "react";
import ComponentePrincipal from "@/app/components/utils/principal/pricipal";
import img1 from "@/public/images/Macchu Picchu/MachuCar/car1.jpg";
import img2 from "@/public/images/Macchu Picchu/MachuCar/car2.jpg";
import img3 from "@/public/images/Macchu Picchu/MachuCar/car3.jpg";
import img4 from "@/public/images/Macchu Picchu/MachuCar/car4.jpg";
import img5 from "@/public/images/Macchu Picchu/MachuCar/car5.jpg";
import mainImg from "@/public/images/Macchu Picchu/MachuCar/Machu Picchu main.jpg";
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
    generalTitle: "Machupicchu vía Hidroeléctrica (2D/1N)",
    whatsapp: "Hola, quiero reservar el paquete ",
    tripOverview: {
      title: "Resumen del Viaje",
      content:
        "Experimenta una aventura única viajando hacia Machu Picchu a través de Hidroeléctrica. Disfruta de un recorrido de 2 días y 1 noche que combina transporte terrestre, caminata y un tour guiado en Machu Picchu.",
    },
    itinerarySummary: {
      title: "Resumen del Itinerario",
      days: [
        {
          title: "Día 1: Cusco - Hidroeléctrica - Aguas Calientes",
          steps: [
            { iconType: "bus", text: "Transporte  turístico ida y retorno." },
            { iconType: "walk", text: "Hospedaje u Hotel en Aguas Calientes." },
            
          ],
        },
        {
          title: "Día 2: Machu Picchu - Cusco",
          steps: [
            { iconType: "hotel", text: "Tikeck bus de subida y bajada a Machupicchu." },
            { iconType: "train", text: "Ticket de ingreso a Machupicchu." },
            { iconType: "walk", text: "Guía profesional." },            
          ],
        },
      ],
    },
    itinerary: [
      {
        title: "Día 1: Cusco - Hidroeléctrica - Aguas Calientes",
        text: (
          <>
            <p>
              Salida temprana desde Cusco en autobús hacia Hidroeléctrica. Durante el trayecto, disfrutarás de paisajes impresionantes del Valle Sagrado.
            </p>
            <p>
              Al llegar a Hidroeléctrica, tendrás la opción de caminar (aproximadamente 1 hora) hasta Aguas Calientes, donde te espera tu alojamiento.
            </p>
          </>
        ),
        services: ["Transporte en bus", "Opción de caminata o taxi", "Pernocte en Aguas Calientes"],
      },
      {
        title: "Día 2: Machu Picchu - Cusco",
        text: (
          <>
            <p>
              Despierta temprano para tomar el bus a Machu Picchu y disfrutar del amanecer en la ciudadela. Se realizará un recorrido guiado por los principales puntos históricos.
            </p>
            <p>
              Tras el tour, tendrás tiempo libre para explorar por tu cuenta antes de regresar a Cusco en tren o bus.
            </p>
          </>
        ),
        services: ["Entrada a Machu Picchu", "Tour guiado", "Transporte de regreso"],
      },
    ],
    additionalInfo: {
      title: "Detalles del Tour",
      physicalRating: "Moderada",
    },
    includedServices: "Servicios Incluidos:",
    notIncluded: ["Alimentación", "Propinas", "Bebidas"],
    recommendations: ["Llevar ropa cómoda", "Protector solar y agua", "Calzado adecuado", "Sombrero"],
    groupServices: {
      daysAndNights: "2D/1N",
      price: "USD $170",
      quote: "Consulta más información",
      bookNow: "Reservar Ahora",
      tourForMe: "¿Este tour es para mí?",
    },
  },
  en: {
    generalTitle: "Hidroeléctrica Route to Machu Picchu (2D/1N)",
    whatsapp: "Hello, I want to book the package ",
    tripOverview: {
      title: "Trip Overview",
      content:
        "Experience a unique adventure traveling to Machu Picchu via Hidroeléctrica. Enjoy a 2-day, 1-night tour that combines ground transportation, a scenic walk (or taxi ride), and a guided tour at Machu Picchu.",
    },
    itinerarySummary: {
      title: "Itinerary Overview",
      days: [
        {
          title: "Day 1: Cusco - Hidroeléctrica - Aguas Calientes",
          steps: [
            { iconType: "bus", text: "Round-trip tourist transportation." },
            { iconType: "walk", text: "Lodging or hotel in Aguas Calientes." },
            
            ],
        },
        {
          title: "Day 2: Machu Picchu - Cusco",
          steps: [
            { iconType: "hotel", text: "Bus ticket up and down to Machu Picchu." },
            { iconType: "train", text: "Admission ticket to Machu Picchu." },
            { iconType: "walk", text: "Professional bilingual guide." },
            ],
        },
      ],
    },
    itinerary: [
      {
        title: "Day 1: Cusco - Hidroeléctrica - Aguas Calientes",
        text: (
          <>
            <p>
              Depart early from Cusco by bus to Hidroeléctrica. Enjoy breathtaking views of the Sacred Valley along the way.
            </p>
            <p>
              Upon arrival at Hidroeléctrica, choose between a scenic walk (about 1 hour) to Aguas Calientes, where your overnight stay begins.
            </p>
          </>
        ),
        services: ["Bus transportation", "Option: Walk or taxi", "Overnight in Aguas Calientes"],
      },
      {
        title: "Day 2: Machu Picchu - Cusco",
        text: (
          <>
            <p>
              Wake up early to catch the bus to Machu Picchu and witness a breathtaking sunrise. Join a guided tour to explore the iconic citadel.
            </p>
            <p>
              After the tour, enjoy some free time before returning to Cusco by train or bus.
            </p>
          </>
        ),
        services: ["Entrance ticket", "Guided tour", "Return transportation"],
      },
    ],
    additionalInfo: {
      title: "Tour Details",
      physicalRating: "Moderate",
    },
    includedServices: "Included Services:",
    notIncluded: ["Meals", "Tips", "Drinks"],
    recommendations: ["Wear comfortable clothing", "Sunscreen and water", "Proper footwear", "Hat"],
    groupServices: {
      daysAndNights: "2D/1N",
      price: "USD $170",
      quote: "More details available",
      bookNow: "Book Now",
      tourForMe: "Is this tour for me?",
    },
  },
};

export default function MapiByCar(){
    const params = useParams();
    const localeValue = params.locale === "en" ? "en" : "es";
    const content = { ...translations[localeValue], ...globalImages };
  
    return <ComponentePrincipal {...content} />;
  }