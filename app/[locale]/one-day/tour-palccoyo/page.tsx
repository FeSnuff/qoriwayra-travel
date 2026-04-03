"use client"
// src/app/[locale]/camino-inca/camino-inca-2d/page.tsx
import React from "react";
import ComponentePrincipal from "@/app/components/utils/principal/pricipal";
import img1 from "@/public/images/OneDayTour/Palccoyo/palco1.jpg";
import img2 from "@/public/images/OneDayTour/Palccoyo/palco2.jpg";
import img3 from "@/public/images/OneDayTour/Palccoyo/palco3.jpg";
import img4 from "@/public/images/OneDayTour/Palccoyo/palco4.jpg";
import img5 from "@/public/images/OneDayTour/Palccoyo/palco5.jpg";
import mainImg from "@/public/images/OneDayTour/Palccoyo/palco main.jpg";
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
    generalTitle: "Tour Montaña de Colores Palccoyo (Full Day)",
    whatsapp: "Hola, quiero reservar el paquete ",
    tripOverview: {
      title: "Resumen del Viaje",
      content:
        "La Montaña de Colores Palccoyo es una alternativa menos concurrida a la famosa Vinicunca, ideal para quienes buscan disfrutar paisajes espectaculares sin largas caminatas. Palccoyo sorprende con su belleza natural: tres montañas de colores, el Bosque de Piedras y vistas panorámicas de los Andes, todo accesible con una caminata suave y placentera.",
    },
    itinerarySummary: {
      title: "Resumen del Itinerario",
      days: [
        {
          title: "Día Único: Cusco - Palccoyo - Cusco",
          steps: [
            { iconType: "bus", text: "04:30 – 05:00 hrs – Recojo del hotel en Cusco" },
            { iconType: "walk", text: "Desayuno en ruta – Cusipata o Checacupe" },
            { iconType: "walk", text: "Llegada a Palccoyo (4,900 m s.n.m.)" },
            { iconType: "photo", text: "Retorno" },
            { iconType: "bus", text: "Llegada a Cusco." },
          ],
        },
      ],
    },
    itinerary: [
      {
        title: "Tour de un Día: Cusco - Palccoyo - Cusco",
        text: (
          <>
            <p>Partimos rumbo al sur de Cusco, pasando por bellos paisajes andinos y pueblos tradicionales.</p>
            <p>Disfrutamos un desayuno típico andino antes de continuar hacia Palccoyo.</p>
            <p>Iniciamos una caminata suave de 45 minutos aprox., durante la cual admiraremos: 1.Las Montañas de Colores (3 formaciones multicolores únicas), 2.El enigmático Bosque de Piedras. 3.Vistas al nevado Ausangate</p>
            <p>Tiempo libre para fotografías y disfrutar del entorno. Finalmente, descenso tranquilo, almuerzo en ruta y retorno a Cusco.</p>
          </>
        ),
        services: [
          "Transporte turístico ida y vuelta",
          "Guía profesional bilingüe",
          "Desayuno y almuerzo",
          "Asistencia permanente",
          "Bastones Artesanales"
        ],
      },
    ],
    additionalInfo: {
      title: "Detalles del Tour",
      physicalRating: "Baja",
    },
    includedServices: "Servicios Incluidos:",
    notIncluded: [
      "Entradas a Palccoyo",
      "Propinas",
      "Snacks y bebidas extras",
      "Otros gastos no mencionados"
    ],
    recommendations: [
      "Llevar ropa abrigadora (temperaturas bajas)",
      "Zapatos de trekking",
      "Sombrero, bloqueador solar y gafas de sol",
      "Agua, snacks y cámara fotográfica",
      "Pastillas para el mal de altura (opcional)"
    ],
    groupServices: {
      daysAndNights: "1D",
      price: "USD $25",
      quote: "Info Adicional",
      bookNow: "Reservar Ahora",
      tourForMe: "¿Es este tour para mí?",
    },
  },
  en: {
    generalTitle: "Palccoyo Color Mountain Tour (Full Day)",
    whatsapp: "Hello, I want to book the package ",
    tripOverview: {
      title: "Trip Overview",
      content:
        "The Palccoyo Rainbow Mountain is a less crowded alternative to the famous Vinicunca, perfect for those who want to enjoy spectacular landscapes without long hikes. Palccoyo amazes with its natural beauty: three colorful mountains, the Stone Forest, and panoramic views of the Andes, all accessible with a gentle and pleasant walk.",
    },
    itinerarySummary: {
      title: "Itinerary Overview",
      days: [
        {
          title: "One Day Tour: Cusco - Palccoyo - Cusco",
          steps: [
            { iconType: "bus", text: "04:30 – 05:00 hrs – Hotel pickup in Cusco" },
            { iconType: "walk", text: "Breakfast on the way – Cusipata or Checacupe" },
            { iconType: "walk", text: "Arrival at Palccoyo (4,900 m.a.s.l.)" },
            { iconType: "photo", text: "	Return" },
            { iconType: "bus", text: "Arrival in Cusco." },
          ],
        },
      ],
    },
    itinerary: [
      {
        title: "One Day Tour: Cusco - Palccoyo - Cusco",
        text: (
          <>
            <p>We depart south of Cusco, passing through beautiful Andean landscapes and traditional villages.</p>
            <p>We enjoy a traditional Andean breakfast before continuing to Palccoyo.</p>
            <p>We start a gentle 45-minute hike, during which we will admire: 1.The Rainbow Mountains (3 unique multicolored formations), 2.The enigmatic Stone Forest, 3.Views of the Ausangate snow-capped mountain.</p>
            <p>Free time for photos and to enjoy the surroundings. Finally, a gentle descent, lunch on the way, and return to Cusco.</p>
          </>
        ),
        services: [
          "Round-trip tourist transportation",
          "Professional bilingual guide",
          "Breakfast and lunch",
          "Permanent assistance",
          "Handmade walking sticks"
        ],
      },
    ],
    additionalInfo: {
      title: "Tour Details",
      physicalRating: "Low",
    },
    includedServices: "Included Services:",
    notIncluded: [
      "Entrance fees to Palccoyo",
      "Tips",
      "Extra snacks and drinks",
      "Other expenses not mentioned"
    ],
    recommendations: [
      "Wear warm clothing (low temperatures)",
      "Trekking shoes",
      "Hat, sunscreen, and sunglasses",
      "Water, snacks, and a camera",
      "Altitude sickness pills (optional)"
    ],
    groupServices: {
      daysAndNights: "1D",
      price: "USD $25",
      quote: "Additional Info",
      bookNow: "Book Now",
      tourForMe: "Is this tour for me?",
    },
  },
};

export default function Palccoyo(){
    const params = useParams();
    const localeValue = params.locale === "en" ? "en" : "es";
    const content = { ...translations[localeValue], ...globalImages };
  
    return <ComponentePrincipal {...content} />;
  }