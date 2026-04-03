"use client"
// src/app/[locale]/camino-inca/camino-inca-2d/page.tsx
import React from "react";
import ComponentePrincipal from "@/app/components/utils/principal/pricipal";
import img1 from "@/public/images/OneDayTour/Waqrapukara/waqra1.jpg";
import img2 from "@/public/images/OneDayTour/Waqrapukara/waqra2.jpg";
import img3 from "@/public/images/OneDayTour/Waqrapukara/waqra3.jpg";
import img4 from "@/public/images/OneDayTour/Waqrapukara/waqra4.jpg";
import img5 from "@/public/images/OneDayTour/Waqrapukara/waqra5.jpg";
import mainImg from "@/public/images/OneDayTour/Waqrapukara/waqra main.webp";
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
    generalTitle: "Tour Waqrapukara (Full Day)",
    whatsapp: "Hola, quiero reservar el paquete ",
    tripOverview: {
      title: "Resumen del Viaje",
      content:
        "Vive una experiencia inolvidable en los Andes peruanos con nuestro tour de un día completo a Waqrapukara, un impresionante complejo arqueológico inca ubicado en lo alto de un escarpado cañón.\nSu nombre, que significa “Fortaleza de los Cuernos”, hace referencia a las imponentes formaciones rocosas que rodean el sitio, asemejando los cuernos de un toro sagrado.",
    },
    itinerarySummary: {
      title: "Resumen del Itinerario",
      days: [
        {
          title: "Día Único: Cusco - Waqrapukara - Cusco",
          steps: [
            { iconType: "bus", text: "Transporte desde Cusco a Waqrapukara" },
            { iconType: "walk", text: "Recorrido guiado por el sitio" },
            { iconType: "free", text: "Tiempo libre para explorar" },
            { iconType: "bus", text: "Retorno a Cusco" },
          ],
        },
      ],
    },
    itinerary: [
      {
        title: "Itinerario del Tour",
        text: (
          <>
            <p>Con el acompañamiento de un guía profesional, conocerás las leyendas que envuelven este santuario y apreciarás sus terrazas, recintos ceremoniales y muros ciclópeos.</p>
            <p>Es un día lleno de cultura, paisajes inolvidables y momentos que perdurarán en tu memoria.</p>
             <p>Salida temprano desde Cusco con traslado a Cusipata, donde disfrutaremos de un desayuno andino antes de iniciar la caminata.</p>
             <p>Caminata hacia Waqrapukara, explorando el sitio arqueológico con una visita guiada y tiempo libre para fotos.</p>
             <p>Descenso a Cusipata para un almuerzo tradicional antes de regresar a Cusco. Finalmente, llegada a Cusco por la tarde y fin del tour.</p>
             
          </>
        ),
        services: ["Transporte turístico ida y vuelta.", 
          "Guía profesional bilingüe.",
        "Desayuno y almuerzo en restaurante local.",
        "Bastones de trekking (opcional).",
        "Botiquín de primeros auxilios."
        ],
      },
    ],
    additionalInfo: {
      title: "Detalles del Tour",
      physicalRating: "Baja",
    },
    includedServices: "Servicios Incluidos:",
    notIncluded: ["Boleto de ingreso a Waqrapukara (tarifa comunitaria).", 
      "Bebidas adicionales y snacks.", "Propinas"],
    recommendations: ["Llevar ropa cómoda", "Calzado adecuado", "Protector solar y agua", "Sombrero"],
    groupServices: {
      daysAndNights: "1D",
      price: "USD $41",
      quote: "Info Adicional",
      bookNow: "Reservar Ahora",
      tourForMe: "¿Este tour es para mí?",
    },
  },
  en: {
    generalTitle: "Waqrapukara Tour (Full Day)",
    whatsapp: "Hello, I want to book the package ",
    tripOverview: {
      title: "Trip Overview",
      content:
        "Experience an unforgettable adventure in the Peruvian Andes with our full-day tour to Waqrapukara, an impressive Inca archaeological complex perched atop a steep canyon. \nIts name, meaning Fortress of the Horns, refers to the imposing rock formations surrounding the site, resembling the horns of a sacred bull.",
    },
    itinerarySummary: {
      title: "Itinerary Overview",
      days: [
        {
          title: "One Day: Cusco - Waqrapukara - Cusco",
          steps: [
            { iconType: "bus", text: "Transport from Cusco to Waqrapukara" },
            { iconType: "walk", text: "Guided tour of the site" },
            { iconType: "free", text: "Free time to explore" },
            { iconType: "bus", text: "Return to Cusco" },
          ],
        },
      ],
    },
    itinerary: [
      {
        title: "Tour Itinerary",
        text: (
          <>
            <p>With the guidance of a professional tour guide, you will learn about the legends surrounding this sanctuary and admire its terraces, ceremonial enclosures, and cyclopean walls.</p>
            <p>A day full of culture, breathtaking landscapes, and unforgettable moments.</p>
            <p>Early departure from Cusco with transfer to Cusipata, where we will enjoy an Andean breakfast before starting the hike.</p>
            <p>Hike to Waqrapukara, exploring the archaeological site with a guided tour and free time for photos.</p>
            <p>Descent to Cusipata for a traditional lunch before returning to Cusco. Finally, arrival in Cusco in the afternoon and end of the tour.</p>
          </>
        ),
        services: ["Round-trip tourist transportation.",
           "Professional bilingual guide.",
           "Breakfast and lunch at a local restaurant.",
           "Trekking poles (optional).",
           "First-aid kit.",

          ],
      },
    ],
    additionalInfo: {
      title: "Tour Details",
      physicalRating: "Low",
    },
    includedServices: "Included Services:",
    notIncluded: ["Entrance ticket to Waqrapukara (community fee).",
      "Additional drinks and snacks.",
       "Tips"],
    recommendations: ["Wear comfortable clothing", "Wear appropriate shoes", "Sunscreen and water", "Hat"],
    groupServices: {
      daysAndNights: "1D",
      price: "USD $41",
      quote: "Additional Info",
      bookNow: "Book Now",
      tourForMe: "Is this tour for me?",
    },
  },
};

export default function Waqrapukara(){
    const params = useParams();
    const localeValue = params.locale === "en" ? "en" : "es";
    const content = { ...translations[localeValue], ...globalImages };
  
    return <ComponentePrincipal {...content} />;
  }