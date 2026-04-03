"use client"
// src/app/[locale]/camino-inca/camino-inca-2d/page.tsx
import React from "react";
import ComponentePrincipal from "@/app/components/utils/principal/pricipal";
import img1 from "@/public/images/OneDayTour/Siete Lagunas/lake1.jpg";
import img2 from "@/public/images/OneDayTour/Siete Lagunas/lake2.jpg";
import img3 from "@/public/images/OneDayTour/Siete Lagunas/lake3.jpg";
import img4 from "@/public/images/OneDayTour/Siete Lagunas/lake4.jpg";
import img5 from "@/public/images/OneDayTour/Siete Lagunas/lake5.jpg";
import mainImg from "@/public/images/OneDayTour/Siete Lagunas/lake main.webp";
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
    generalTitle: "Tour 7 Lagunas (Full Day)",
    whatsapp: "Hola, quiero reservar el paquete ",
    tripOverview: {
      title: "Resumen del Viaje",
      content:
        "Disfruta de un recorrido de día completo por 7 lagunas de gran belleza, ubicado en un entorno natural único de los Andes. Experimenta paisajes impresionantes y descubre la riqueza de la biodiversidad andina.",
    },
    itinerarySummary: {
      title: "Resumen del Itinerario",
      days: [
        {
          title: "Itinerario: 7 Lagunas",
          steps: [
            { iconType: "bus", text: "Recojo en el hotel en Cusco" },
            { iconType: "walk", text: "Traslado al inicio del tour" },
            { iconType: "lake", text: "Visita a la primera laguna" },
            { iconType: "lake", text: "Paradas en lagunas intermedias" },
            { iconType: "bus", text: "Retorno a Cusco" },
          ],
        },
      ],
    },
    itinerary: [
      {
        title: "Itinerario del Tour 7 Lagunas",
        text: (
          <>
            <p>El tour inicia temprano en Cusco con el recojo en el hotel. Tras un corto traslado en vehículo, iniciamos nuestra caminata hacia las lagunas, atravesando senderos con vistas panorámicas y paisajes andinos.</p>
            <p>Nuestras vistas serán: <strong>Laguna Azulcocha</strong>, <strong>Laguna Otorongo</strong>, <strong>Laguna Pucacocha</strong>, <strong>Laguna Alqacocha</strong>, <strong>Laguna Qqomercocha</strong>, <strong>Laguna Orqo Otorongo</strong>, <strong>Laguna China Otorongo</strong> y <strong>Aguas Termales de Pacchanta</strong> </p>
            <p>Durante el día, visitaremos estas siete lagunas, cada una con características únicas, donde podrás disfrutar de la tranquilidad del agua y el impresionante entorno natural.</p>
          </>
        ),
        services: ["Recojo en el hotel", 
          "Transporte turístico", 
          "Guía profesional bilingüe", 
          "Desayuno", "Almuerzo", 
          "Primeros Auxilios", 
          "Balon de Oxigeno",
          "Bastones Artesanales"
        ],
      },
    ],
    additionalInfo: {
      title: "Detalles del Tour",
      physicalRating: "Baja a Moderada",
    },
    includedServices: "Servicios Incluidos:",
    notIncluded: ["Ingreso a las lagunas", "Gastos personales"],
    recommendations: [
      "Llevar ropa cómoda",
      "Protector solar",
      "Sombrero y agua",
      "Calzado para caminatas"
    ],
    groupServices: {
      daysAndNights: "Full Day",
      price: "USD $30",
      quote: "Info Adicional",
      bookNow: "Reservar Ahora",
      tourForMe: "¿Este tour es para mí?",
    },
  },
  en: {
    generalTitle: "7 Lagunas Tour (Full Day)",
    whatsapp: "Hello, I want to book the package ",
    tripOverview: {
      title: "Trip Overview",
      content:
        "Enjoy a full-day tour through 7 stunning high-altitude lagoons in the Andes. Experience breathtaking landscapes and discover the rich Andean biodiversity.",
    },
    itinerarySummary: {
      title: "Itinerary Overview",
      days: [
        {
          title: "Itinerary: 7 Lagoons",
          steps: [
            { iconType: "bus", text: "Hotel pickup in Cusco" },
            { iconType: "walk", text: "Transfer to tour starting point" },
            { iconType: "lake", text: "Visit the first lagoon" },
            { iconType: "lake", text: "Stops at intermediate lagoons" },
            { iconType: "bus", text: "Return to Cusco" },
          ],
        },
      ],
    },
    itinerary: [
      {
        title: "7 Lagoons Tour Itinerary",
        text: (
          <>
            <p>The tour begins early with hotel pickup in Cusco. After a short drive, we start our hike towards the lagoons, traversing scenic Andean trails.</p>
            <p>We will visit: <strong>Azulcocha Lake</strong>, <strong>Otorongo Lake</strong>, <strong>Pucacocha Lake</strong>, <strong>Alqacocha Lake</strong>, <strong>Qqomercocha Lake</strong>, <strong>Orqo Otorongo Lake</strong>, <strong>China Otorongo Lake</strong> y <strong>Medicinal Water of Pacchanta</strong> </p>
            
            <p>Throughout the day, we will visit these seven unique lagoons where you can relax and admire the serene beauty of the high Andes.</p>
          </>
        ),
        services: [
          "Hotel pickup", 
          "Tour transportation", 
          "Professional bilingual guide", 
          "Break Fast", 
          "Lunch", 
          "First Aid", 
          "Oxygen Cylinder",
        "Handmade walking sticks"
        ],
      },
    ],
    additionalInfo: {
      title: "Tour Details",
      physicalRating: "Low to Moderate",
    },
    includedServices: "Included Services:",
    notIncluded: ["Local entrance fees", "Personal expenses"],
    recommendations: [
      "Wear comfortable clothing",
      "Bring sunscreen",
      "Hat and water",
      "Wear hiking shoes"
    ],
    groupServices: {
      daysAndNights: "Full Day",
      price: "USD $30",
      quote: "Additional Info",
      bookNow: "Book Now",
      tourForMe: "Is this tour for me?",
    },
  },
};

export default function SieteLagunas(){
    const params = useParams();
    const localeValue = params.locale === "en" ? "en" : "es";
    const content = { ...translations[localeValue], ...globalImages };
  
    return <ComponentePrincipal {...content} />;
  }