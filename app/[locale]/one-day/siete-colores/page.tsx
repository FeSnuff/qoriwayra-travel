"use client"
// src/app/[locale]/camino-inca/camino-inca-2d/page.tsx
import React from "react";
import ComponentePrincipal from "@/app/components/utils/principal/pricipal";
import img1 from "@/public/images/OneDayTour/Siete Colores/color1.jpg";
import img2 from "@/public/images/OneDayTour/Siete Colores/color2.jpg";
import img3 from "@/public/images/OneDayTour/Siete Colores/color3.jpg";
import img4 from "@/public/images/OneDayTour/Siete Colores/color4.jpg";
import img5 from "@/public/images/OneDayTour/Siete Colores/color5.jpg";
import mainImg from "@/public/images/OneDayTour/Siete Colores/color main.jpg";
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
    generalTitle: "Tour de la Montaña de 7 Colores (Vinicunca)",
    whatsapp: "Hola, quiero reservar el paquete ",
    tripOverview: {
      title: "Resumen del Viaje",
      content:
        "La altitud máxima del tour es de 5,036 metros sobre el nivel del mar, por lo que es fundamental estar bien aclimatado.",
    },
    itinerarySummary: {
      title: "Itinerario del Tour",
      days: [
        {
          title: "Día Único: Cusco - Vinicunca - Cusco",
          steps: [
            { iconType: "bus", text: "Salida desde Cusco" },
            { iconType: "walk", text: "Desayuno en Cusipata" },
            { iconType: "sun", text: "Inicio de la caminata" },
            { iconType: "bus", text: "Ascenso a la Montaña de 7 Colores" },
            { iconType: "walk", text: "Llegada a Vinicunca" },
            { iconType: "sun", text: "Descenso y almuerzo" },
            { iconType: "bus", text: "Regreso a Cusco" },
          ],
        },
      ],
    },
    itinerary: [
      {
        title: "Tour de la Montaña de 7 Colores",
        text: (
          <>
            <p>Nuestro día comienza temprano, alrededor de las 5:00 a.m., con el recojo desde tu hotel en Cusco. Nos dirigiremos en transporte privado hacia el sur, atravesando pintorescos pueblos andinos.</p>
            <p>Haremos una parada en el pueblo de Cusipata para disfrutar de un delicioso desayuno, que nos dará la energía necesaria para la caminata.</p>
            <p>Continuaremos hasta el punto de inicio de la caminata (4,650 msnm). Desde aquí, comenzaremos nuestro ascenso hacia la Montaña de 7 Colores.</p>
            <p>La caminata tiene una duración aproximada de 1 hora, con un nivel de dificultad moderado a exigente debido a la altitud. Durante el trayecto, disfrutaremos de paisajes andinos espectaculares, con la presencia de llamas y alpacas.</p>
            <p>Al llegar a la cima (5,036 msnm), seremos recompensados con una vista impresionante de la Montaña de 7 Colores, un espectáculo visual único en el mundo. Tendremos tiempo para tomar fotografías y disfrutar del paisaje.</p>
            <p>Iniciaremos el descenso de regreso al punto de partida, donde nos espera nuestro transporte para regresar a Cusipata. Ahí disfrutaremos de un almuerzo.</p>
            <p>Después del almuerzo, emprenderemos el viaje de regreso a Cusco, llegando aproximadamente a las 5:00 p.m.</p>
          </>
        ),
        services: ["Recojo del hotel", 
          "Transporte turístico de ida y vuelta desde su hotel en Cusco.", 
          "Guía profesional.", 
          "Desayuno y almuerzo Buffet.",
           "Equipo de primeros auxilios.",
           "Bastones artesanales." 
        ],
      },
    ],
    additionalInfo: {
      title: "Detalles del Tour",
      physicalRating: "Moderado",
    },
    includedServices: "Servicios Incluidos:",
    notIncluded: ["Ingreso a la montaña (cobro por parte de la comunidad)"],
    recommendations: [
      "Llevar ropa cómoda y abrigadora (capas), ya que el clima puede variar.",
      "Usar calzado de tracking adecuado.",
      "Protector solar, sombrero y gafas de sol.",
      "Dinero en efectivo para gastos personales.",
    ],
    groupServices: {
      daysAndNights: "1D",
      price: "USD $23",
      quote: "Info Adicional",
      bookNow: "Reservar Ahora",
      tourForMe: "¿Este tour es para mí?",
    },
  },
  en: {
    generalTitle: "7 Color Mountain Tour (Vinicunca)",
    whatsapp: "Hello, I want to book the package ",
    tripOverview: {
      title: "Trip Overview",
      content:
        "The maximum altitude of the tour is 5,036 meters above sea level, so it is essential to be well acclimated.",
    },
    itinerarySummary: {
      title: "Tour Itinerary",
      days: [
        {
          title: "Single Day: Cusco - Vinicunca - Cusco",
          steps: [
            { iconType: "bus", text: "Departure from Cusco" },
            { iconType: "walk", text: "Breakfast in Cusipata" },
            { iconType: "sun", text: "Start of the hike" },
            { iconType: "bus", text: "Ascent to Rainbow Mountain" },
            { iconType: "walk", text: "Arrival at Vinicunca" },
            { iconType: "sun", text: "Descent and lunch" },
            { iconType: "bus", text: "Return to Cusco" },
          ],
        },
      ],
    },
    itinerary: [
      {
        title: "7 Color Mountain Tour",
        text: (
          <>
            <p>Our day begins early, around 5:00 a.m., with pickup from your hotel in Cusco. We will head south in private transportation, passing through picturesque Andean villages.</p>
            <p>We will stop in the town of Cusipata to enjoy a delicious breakfast, giving us the necessary energy for the hike.</p>
            <p>We will continue to the starting point of the hike (4,650 meters above sea level). From here, we will begin our ascent to the Rainbow Mountain.</p>
            <p>The hike takes approximately 1 hour, with a moderate to challenging difficulty level due to the altitude. Along the way, we will enjoy spectacular Andean landscapes, with the presence of llamas and alpacas.</p>
            <p>Upon reaching the summit (5,036 meters above sea level), we will be rewarded with an impressive view of Rainbow Mountain, a unique visual spectacle in the world. We will have time to take photos and enjoy the scenery.</p>
            <p>We will begin the descent back to the starting point, where our transportation will be waiting to take us back to Cusipata. There, we will enjoy lunch.</p>
          <p>After lunch, we will begin our journey back to Cusco, arriving at approximately 5:00 p.m.</p>
          </>
        ),
        services: ["Hotel pickup",
          "Round-trip tourist transportation from your hotel in Cusco.", 
          "Professional guide.", 
          "Buffet breakfast and lunch.",
          "First aid equipment.",
          "Handmade walking sticks"
        ],
      },
    ],
    additionalInfo: {
      title: "Tour Details",
      physicalRating: "Moderate",
    },
    includedServices: "Included Services:",
    notIncluded: ["Entrance to the mountain (charged by the local community)"],
    recommendations: [
      "Wear comfortable and warm clothing (layers), as the weather can change.",
      "Wear proper trekking shoes.",
      "Sunscreen, hat, and sunglasses.",
      "Cash for personal expenses.",
    ],
    groupServices: {
      daysAndNights: "1D",
      price: "USD $23",
      quote: "Additional Information",
      bookNow: "Book Now",
      tourForMe: "Is this tour for me?",
    },
  },
};

export default function VinicuncaTour(){
    const params = useParams();
    const localeValue = params.locale === "en" ? "en" : "es";
    const content = { ...translations[localeValue], ...globalImages };
  
    return <ComponentePrincipal {...content} />;
  }