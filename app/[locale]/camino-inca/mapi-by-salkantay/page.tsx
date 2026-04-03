"use client"
// src/app/[locale]/camino-inca/camino-inca-2d/page.tsx
import React from "react";
import ComponentePrincipal from "@/app/components/utils/principal/pricipal";
import img1 from "@/public/images/CaminoInca/Salkantay/salkantay1.jpg";
import img2 from "@/public/images/CaminoInca/Salkantay/salkantay2.jpg";
import img3 from "@/public/images/CaminoInca/Salkantay/salkantay3.jpg";
import img4 from "@/public/images/CaminoInca/Salkantay/salkantay4.jpg";
import img5 from "@/public/images/CaminoInca/Salkantay/salkantay5.jpg";
import mainImg from "@/public/images/CaminoInca/Salkantay/salkantay main.jpg";
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
    generalTitle: "Trek Salkantay (4D/3N)",
    whatsapp: "Hola, quiero reservar el paquete ",
    tripOverview: {
      title: "Resumen del Viaje",
      content:
        "Vive la experiencia del Trek Salkantay, un desafiante recorrido que te lleva a través de paisajes de alta montaña, nevados y selva, culminando en la visita a Machu Picchu.",
    },
    itinerarySummary: {
      title: "Resumen del Itinerario",
      days: [
        {
          title: "Día 1: Cusco - Soraypampa",
          steps: [
            { iconType: "bus", text: "Transporte desde Cusco a Soraypampa" },
            { iconType: "walk", text: "Inicio del trekking" },
          ],
        },
        {
          title: "Día 2: Soraypampa - Paso Salkantay",
          steps: [
            { iconType: "walk", text: "Ascenso al Paso Salkantay" },
            { iconType: "pause", text: "Breve descanso en la cima" },
          ],
        },
        {
          title: "Día 3: Paso Salkantay - Aguas Calientes",
          steps: [
            { iconType: "walk", text: "Descenso hacia la selva" },
            { iconType: "bus", text: "Transporte a Aguas Calientes" },
            { iconType: "hotel", text: "Pernocte en Aguas Calientes" },
          ],
        },
        {
          title: "Día 4: Machu Picchu - Cusco",
          steps: [
            { iconType: "bus", text: "Subida a Machu Picchu" },
            { iconType: "walk", text: "Tour guiado y exploración" },
            { iconType: "train", text: "Retorno a Cusco" },
          ],
        },
      ],
    },
    itinerary: [
      {
        title: "Día 1: Cusco - Soraypampa",
        text: (
          <>
            <p>
              Salida temprana desde Cusco en autobús hacia Soraypampa, punto de partida del trekking Salkantay. Durante el trayecto, disfruta de impresionantes vistas del Valle Sagrado.
            </p>
            <p>
              Inicia tu caminata hacia zonas de montaña mientras te adaptas a la altitud.
            </p>
          </>
        ),
        services: ["Transporte en bus", "Inicio del trekking"],
      },
      {
        title: "Día 2: Soraypampa - Paso Salkantay",
        text: (
          <>
            <p>
              El segundo día te lleva al majestuoso Paso Salkantay, donde disfrutarás de vistas espectaculares y del reto de ascender a una altitud considerable.
            </p>
            <p>
              Se hacen pausas para descansar y aclimatarse.
            </p>
          </>
        ),
        services: ["Trekking", "Guía experto", "Pausas de descanso"],
      },
      {
        title: "Día 3: Paso Salkantay - Aguas Calientes",
        text: (
          <>
            <p>
              Inicia el descenso desde el Paso Salkantay, atravesando paisajes de selva alta. Llegada a Aguas Calientes, donde te espera tu alojamiento.
            </p>
            <p>
              Tiempo libre para descansar y prepararte para la visita a Machu Picchu.
            </p>
          </>
        ),
        services: ["Descenso trekking", "Transporte a Aguas Calientes", "Pernocte"],
      },
      {
        title: "Día 4: Machu Picchu - Cusco",
        text: (
          <>
            <p>
              Despierta temprano para tomar el bus a Machu Picchu. Realiza un recorrido guiado por la ciudadela, descubre sus secretos y disfruta de la magia del amanecer.
            </p>
            <p>
              Después, regresa a Cusco en tren o bus.
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
    notIncluded: ["Gastos o itens no mencionados"],
    recommendations: ["Ropa cómoda y abrigo", "Protector solar y agua", "Calzado adecuado", "Sombrero"],
    groupServices: {
      daysAndNights: "4D/3N",
      price: "USD $600",
      quote: "Consulta más información",
      bookNow: "Reservar Ahora",
      tourForMe: "¿Este tour es para mí?",
    },
  },
  en: {
    generalTitle: "Salkantay Trek (4D/3N)",
    whatsapp: "Hello, I want to book the package ",
    tripOverview: {
      title: "Trip Overview",
      content:
        "Embark on an unforgettable Salkantay Trek, a 4-day, 3-night journey through dramatic mountain landscapes, high-altitude passes, and lush jungle, culminating in a visit to Machu Picchu.",
    },
    itinerarySummary: {
      title: "Itinerary Overview",
      days: [
        {
          title: "Day 1: Cusco - Soraypampa",
          steps: [
            { iconType: "bus", text: "Bus from Cusco to Soraypampa" },
            { iconType: "walk", text: "Start of the trek" },
          ],
        },
        {
          title: "Day 2: Soraypampa - Salkantay Pass",
          steps: [
            { iconType: "walk", text: "Hike to Salkantay Pass" },
            { iconType: "pause", text: "Rest at the summit" },
          ],
        },
        {
          title: "Day 3: Salkantay Pass - Aguas Calientes",
          steps: [
            { iconType: "walk", text: "Descent through the jungle" },
            { iconType: "bus", text: "Bus to Aguas Calientes" },
            { iconType: "hotel", text: "Overnight in Aguas Calientes" },
          ],
        },
        {
          title: "Day 4: Machu Picchu - Cusco",
          steps: [
            { iconType: "bus", text: "Bus ride to Machu Picchu" },
            { iconType: "walk", text: "Guided tour at Machu Picchu" },
            { iconType: "train", text: "Return to Cusco" },
          ],
        },
      ],
    },
    itinerary: [
      {
        title: "Day 1: Cusco - Soraypampa",
        text: (
          <>
            <p>
              Depart early from Cusco by bus to Soraypampa, the starting point of the Salkantay Trek. Enjoy breathtaking views of the Sacred Valley during your journey.
            </p>
            <p>
              Begin your trek and acclimate to the altitude as you traverse scenic mountain paths.
            </p>
          </>
        ),
        services: ["Bus transportation", "Start of the trek"],
      },
      {
        title: "Day 2: Soraypampa - Salkantay Pass",
        text: (
          <>
            <p>
              The second day takes you to the majestic Salkantay Pass. Experience stunning panoramic views and the challenge of ascending to high altitudes.
            </p>
            <p>
              Several rest stops are provided to help you acclimatize.
            </p>
          </>
        ),
        services: ["Trekking", "Expert guide", "Rest breaks"],
      },
      {
        title: "Day 3: Salkantay Pass - Aguas Calientes",
        text: (
          <>
            <p>
              Begin your descent from Salkantay Pass through lush, high jungle terrain. Arrive in Aguas Calientes, where you will check in to your hotel.
            </p>
            <p>
              Enjoy some free time to rest and prepare for your Machu Picchu visit.
            </p>
          </>
        ),
        services: ["Descent trek", "Bus to Aguas Calientes", "Overnight stay"],
      },
      {
        title: "Day 4: Machu Picchu - Cusco",
        text: (
          <>
            <p>
              Wake up early and catch a bus to Machu Picchu to witness a stunning sunrise over the ancient citadel. Join a guided tour to explore its iconic ruins.
            </p>
            <p>
              After the tour, return to Cusco by train or bus.
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
    notIncluded: ["Expenses or items not mentioned"],
    recommendations: ["Wear comfortable clothing", "Sunscreen and water", "Proper footwear", "Hat"],
    groupServices: {
      daysAndNights: "4D/3N",
      price: "USD $600",
      quote: "More details available",
      bookNow: "Book Now",
      tourForMe: "Is this tour for me?",
    },
  },
};

export default function MapiBySalkantay(){
    const params = useParams();
    const localeValue = params.locale === "en" ? "en" : "es";
    const content = { ...translations[localeValue], ...globalImages };
  
    return <ComponentePrincipal {...content} />;
  }