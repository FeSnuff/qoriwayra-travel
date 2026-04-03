"use client"
// src/app/[locale]/camino-inca/camino-inca-2d/page.tsx
import React from "react";
import ComponentePrincipal from "@/app/components/utils/principal/pricipal";
import img1 from "@/public/images/CaminoInca/camino4D/large1.jpg";
import img2 from "@/public/images/CaminoInca/camino4D/large2.jpg";
import img3 from "@/public/images/CaminoInca/camino4D/large3.jpg";
import img4 from "@/public/images/CaminoInca/camino4D/large4.jpg";
import img5 from "@/public/images/CaminoInca/camino4D/large5.jpg";
import mainImg from "@/public/images/CaminoInca/camino4D/large main.jpg";
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
    accommodation: string;
    meals: string;
  };
  includedServices: string;
  notIncluded: string[];
  recommendations: string[];
  groupServices: {
    daysAndNights: string;
    price: string;
    priceSubText: string;
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

/* 🔹 Definir objeto de traducciones para 4D/3N */
const translations: { es: TranslationContent; en: TranslationContent } = {
  es: {
    generalTitle: "Camino Inca Extendido (4D/3N)",
    whatsapp: "Hola, quiero reservar el paquete ",
    tripOverview: {
      title: "Resumen del Viaje",
      content:
        "Vive la experiencia completa del Camino Inca en un recorrido de 4 días y 3 noches. Descubre paisajes impresionantes, ruinas ancestrales y culmina con la majestuosa Machu Picchu.",
    },
    itinerarySummary: {
      title: "Resumen del Itinerario",
      days: [
        {
          title: "Día 1: Cusco - Ollantaytambo - Km 104",
          steps: [
            { iconType: "bus", text: "Transporte de Cusco a Ollantaytambo" },
            { iconType: "train", text: "Tren a Km 104" },
            { iconType: "walk", text: "Inicio de la caminata hasta Wayllabamba" },
          ],
        },
        {
          title: "Día 2: Wayllabamba - Pacaymayo",
          steps: [
            { iconType: "walk", text: "Hike hacia Runkurakay y Phuyupatamarca" },
            { iconType: "camp", text: "Acampada cerca de Pacaymayo" },
          ],
        },
        {
          title: "Día 3: Pacaymayo - Wiñay Wayna",
          steps: [
            { iconType: "walk", text: "Continuación de la caminata y visita a ruinas incas" },
            { iconType: "hotel", text: "Pernocte en Wiñay Wayna" },
          ],
        },
        {
          title: "Día 4: Wiñay Wayna - Machu Picchu - Cusco",
          steps: [
            { iconType: "walk", text: "Ascenso hasta la Puerta del Sol" },
            { iconType: "bus", text: "Bus a Machu Picchu" },
            { iconType: "guide", text: "Tour guiado en Machu Picchu" },
            { iconType: "train", text: "Regreso en tren a Cusco" },
          ],
        },
      ],
    },
    itinerary: [
      {
        title: "Día 1: Cusco - Ollantaytambo - Km 104",
        text: (
          <>
            <p>
              Partimos temprano desde Cusco hacia Ollantaytambo para tomar el tren a Km 104, punto de inicio de nuestro viaje. Desde allí, comenzamos la caminata hacia Wayllabamba, disfrutando de paisajes andinos únicos.
            </p>
          </>
        ),
        services: ["Transporte", "Boleto de tren", "Guía"],
      },
      {
        title: "Día 2: Wayllabamba - Pacaymayo",
        text: (
          <>
            <p>
              La jornada continúa con una ruta desafiante que nos lleva por impresionantes senderos, pasando por Runkurakay y Phuyupatamarca. Al finalizar el día, acampamos cerca de Pacaymayo.
            </p>
          </>
        ),
        services: ["Equipo de campamento", "Guía experto"],
      },
      {
        title: "Día 3: Pacaymayo - Wiñay Wayna",
        text: (
          <>
            <p>
              En este día, avanzamos hacia Wiñay Wayna, visitando antiguas ruinas incas en el camino y disfrutando de la belleza natural de la región. Se pernocta en Wiñay Wayna.
            </p>
          </>
        ),
        services: ["Pernocte", "Guía", "Asistencia en ruta"],
      },
      {
        title: "Día 4: Wiñay Wayna - Machu Picchu - Cusco",
        text: (
          <>
            <p>
              El último día inicia con la caminata hasta la Puerta del Sol, donde se vislumbra Machu Picchu al amanecer. Tras un tour guiado, tomamos el bus y tren de regreso a Cusco.
            </p>
          </>
        ),
        services: ["Transporte de regreso", "Entrada a Machu Picchu", "Tour guiado"],
      },
    ],
    additionalInfo: {
      title: "Detalles del Tour",
      physicalRating: "Dificultad: Alta",
      accommodation: "Campamento y alojamiento en Wiñay Wayna",
      meals: "Desayunos, almuerzos y cenas incluidos",
    },
    includedServices: "Servicios Incluidos:",
    notIncluded: ["Gastos o itens no mencionados"],
    recommendations: [
      "Ropa y calzado adecuado",
      "Protector solar",
      "Agua y snacks",
      "Equipo de lluvia",
      "Sombrero"
    ],
    groupServices: {
      daysAndNights: "4D/3N",
      price: "USD $700",
      priceSubText: "Precio por persona",
      quote: "Info Adicional",
      bookNow: "Reservar Ahora",
      tourForMe: "¿Este tour es para mí?",
    },
  },
  en: {
    generalTitle: "Extended Inca Trail (4D/3N)",
    whatsapp: "Hello, I want to book the package ",
    tripOverview: {
      title: "Trip Overview",
      content:
        "Experience the full Inca Trail in a 4-day, 3-night adventure. Explore breathtaking landscapes, ancient ruins, and conclude your journey at Machu Picchu.",
    },
    itinerarySummary: {
      title: "Itinerary Overview",
      days: [
        {
          title: "Day 1: Cusco - Ollantaytambo - Km 104",
          steps: [
            { iconType: "bus", text: "Transport from Cusco to Ollantaytambo" },
            { iconType: "train", text: "Train to Km 104" },
            { iconType: "walk", text: "Hike to Wayllabamba" },
          ],
        },
        {
          title: "Day 2: Wayllabamba - Pacaymayo",
          steps: [
            { iconType: "walk", text: "Hike through Runkurakay and Phuyupatamarca" },
            { iconType: "camp", text: "Camp near Pacaymayo" },
          ],
        },
        {
          title: "Day 3: Pacaymayo - Wiñay Wayna",
          steps: [
            { iconType: "walk", text: "Continue hiking with visits to Inca ruins" },
            { iconType: "hotel", text: "Overnight stay at Wiñay Wayna" },
          ],
        },
        {
          title: "Day 4: Wiñay Wayna - Machu Picchu - Cusco",
          steps: [
            { iconType: "walk", text: "Hike to the Sun Gate" },
            { iconType: "bus", text: "Bus to Machu Picchu" },
            { iconType: "guide", text: "Guided tour at Machu Picchu" },
            { iconType: "train", text: "Return to Cusco by train" },
          ],
        },
      ],
    },
    itinerary: [
      {
        title: "Day 1: Cusco - Ollantaytambo - Km 104",
        text: (
          <>
            <p>
              Depart early from Cusco to Ollantaytambo, then take the train to Km 104 – the starting point of our journey. Begin the hike towards Wayllabamba while enjoying stunning Andean views.
            </p>
          </>
        ),
        services: ["Transport", "Train ticket", "Guide"],
      },
      {
        title: "Day 2: Wayllabamba - Pacaymayo",
        text: (
          <>
            <p>
              The adventure continues as we traverse challenging trails through Runkurakay and Phuyupatamarca. The day ends with a camping experience near Pacaymayo.
            </p>
          </>
        ),
        services: ["Camping gear", "Expert guide"],
      },
      {
        title: "Day 3: Pacaymayo - Wiñay Wayna",
        text: (
          <>
            <p>
              We proceed towards Wiñay Wayna, stopping to explore ancient Inca ruins along the way. Enjoy the natural beauty of the region during an overnight stay at Wiñay Wayna.
            </p>
          </>
        ),
        services: ["Overnight stay", "Guide", "Trail support"],
      },
      {
        title: "Day 4: Wiñay Wayna - Machu Picchu - Cusco",
        text: (
          <>
            <p>
              The final day begins with a hike to the Sun Gate, offering a spectacular sunrise view of Machu Picchu. After a guided tour, we take the bus and train back to Cusco.
            </p>
          </>
        ),
        services: ["Return transport", "Machu Picchu entry", "Guided tour"],
      },
    ],
    additionalInfo: {
      title: "Tour Details",
      physicalRating: "Difficulty: High",
      accommodation: "Camping and accommodation at Wiñay Wayna",
      meals: "Includes all meals (breakfast, lunch, dinner)",
    },
    includedServices: "Included Services:",
    notIncluded: ["Expenses or items not mentioned"],
    recommendations: [
      "Proper hiking attire",
      "Sunscreen",
      "Water and snacks",
      "Rain gear",
      "Hat"
    ],
    groupServices: {
      daysAndNights: "4D/3N",
      price: "USD $700",
      priceSubText: "Price per person",
      quote: "Additional Info",
      bookNow: "Book Now",
      tourForMe: "Is this tour for me?",
    },
  },
};

export default function CaminoInca4D(){
    const params = useParams();
    const localeValue = params.locale === "en" ? "en" : "es";
    const content = { ...translations[localeValue], ...globalImages };
  
    return <ComponentePrincipal {...content} />;
  }