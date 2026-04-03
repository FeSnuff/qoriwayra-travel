"use client"
// src/app/[locale]/camino-inca/camino-inca-2d/page.tsx
import React from "react";
import ComponentePrincipal from "@/app/components/utils/principal/pricipal";
import img1 from "@/public/images/Valle/ValleStantar/valle1.jpg";
import img2 from "@/public/images/Valle/ValleStantar/valle2.jpg";
import img3 from "@/public/images/Valle/ValleStantar/valle3.jpg";
import img4 from "@/public/images/Valle/ValleStantar/valle4.jpg";
import img5 from "@/public/images/Valle/ValleStantar/valle5.jpg";
import mainImg from "@/public/images/Valle/ValleStantar/valle main.jpg";
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

/* 🔹 Definir objeto de traducciones para Valle Sagrado Sur */
const translations: { es: TranslationContent; en: TranslationContent } = {
  es: {
    generalTitle: "Tour Valle Sagrado Sur (Full Day)",
    whatsapp: "Hola, quiero reservar el paquete ",
    tripOverview: {
      title: "Resumen del Viaje",
      content:
        "El tour al Valle Sur de Cusco es ideal para quienes desean explorar rutas menos concurridas, pero ricas en historia, cultura y paisajes. Este circuito combina el legado incaico, colonial y preincaico, acompañado de impresionantes vistas del Valle del Vilcanota y sus pueblos tradicionales.",
    },
    itinerarySummary: {
      title: "Resumen del Itinerario",
      days: [
        {
          title: "Itinerario del Tour Valle Sagrado Sur",
          steps: [
            { iconType: "walk", text: "08:30 hrs – Recojo del hotel y salida hacia el Valle Sur" },
            { iconType: "bus", text: "Tipón – Complejo Hidráulico Inca (a 25 km de Cusco)" },
            { iconType: "walk", text: "Pikillaqta – Ciudad Preinca Wari" },
            { iconType: "bus", text: "Andahuaylillas – “La Capilla Sixtina de América”" },
            { iconType: "walk", text: "2 p.m – Retorno a Cusco. Llegada aproximada al centro de Cusco." },
                        
          ],
        },
      ],
    },
    itinerary: [
      {
        title: "Tour Valle Sagrado Sur",
        text: (
          <>
            <p>Iniciamos el recorrido dirigiéndonos hacia el sureste de Cusco a las 8:30AM.</p>
            <p>Un impresionante conjunto arqueológico que demuestra la avanzada ingeniería hidráulica de los incas. Canales, andenes y fuentes de agua que aún funcionan perfectamente, rodeados de paisajes verdes y armoniosos.</p>
            <p>Una antigua ciudad construida por la cultura Wari, con calles rectas, murallas y numerosas edificaciones. Es un ejemplo único de urbanismo preincaico en los Andes.</p>
            <p>Templo colonial del siglo XVII, famoso por su extraordinaria decoración barroca: murales, retablos dorados y una valiosa colección de arte religioso. El interior está lleno de detalles que deslumbran a todos los visitantes.</p>
            <p>Retorno a Cusco. Llegada aproximada al centro de Cusco, a las 2:00PM</p>
          </>
        ),
        services: [
          "Transporte turístico",
          "Guía profesional bilingüe",
          "Asistencia permanente",
        ],
      },
    ],
    additionalInfo: {
      title: "Detalles del Tour",
      physicalRating: "Moderado",
    },
    includedServices: "Servicios Incluidos:",
    notIncluded: [
      "Boleto Turístico Parcial",
      "Ingreso a la Capilla",
      "Alimentación",
      "Propinas",
      "Otros gastos no mencionados"
    ],
    recommendations: [
      "Llevar ropa ligera y abrigo (clima variable)",
      "Protector solar, sombrero y agua",
      "Cámara fotográfica",
    ],
    groupServices: {
      daysAndNights: "Part Time",
      price: "USD $17",
      quote: "Info Adicional",
      bookNow: "Reservar Ahora",
      tourForMe: "¿Este tour es para mí?",
    },
  },
  en: {
    generalTitle: "Sacred Valley South Tour (Full Day)",
    whatsapp: "Hello, I want to book the package ",
    tripOverview: {
      title: "Trip Overview",
      content:
        "The South Valley tour of Cusco is ideal for those who want to explore less crowded routes rich in history, culture, and landscapes. This circuit combines Inca, colonial, and pre-Inca heritage, accompanied by breathtaking views of the Vilcanota Valley and its traditional villages.",
    },
    itinerarySummary: {
      title: "Itinerary Overview",
      days: [
        {
          title: "Sacred Valley South Tour Itinerary",
          steps: [
            { iconType: "bus", text: "08:30 hrs – Hotel pickup and departure to the South Valley" },
            { iconType: "walk", text: "Tipón – Inca Hydraulic Complex (25 km from Cusco)" },
            { iconType: "bus", text: "Pikillaqta – Pre-Inca Wari City" },
            { iconType: "walk", text: "Andahuaylillas – The Sistine Chapel of America" },
            { iconType: "bus", text: "2:00 p.m – Return to Cusco. Approximate arrival at Cusco’s city center." },
          ],
        },
      ],
    },
    itinerary: [
      {
        title: "Sacred Valley South Tour",
        text: (
          <>
            <p>We begin the journey heading southeast from Cusco at 8:30AM</p>
            <p>An impressive archaeological complex that showcases the Incas’ advanced hydraulic engineering. Canals, terraces, and water fountains that still function perfectly, surrounded by lush green landscapes.</p>
            <p>An ancient city built by the Wari culture, featuring straight streets, walls, and numerous buildings. It is a unique example of pre-Inca urban planning in the Andes.</p>
            <p>A 17th-century colonial church, famous for its extraordinary Baroque decoration: murals, golden altarpieces, and a valuable collection of religious art. The interior is filled with details that amaze all visitors.</p>

          </>
        ),
        services: [
          "Tourist transportation",
          "Professional bilingual guide",
          "Permanent assistance",
        ],
      },
    ],
    additionalInfo: {
      title: "Tour Details",
      physicalRating: "Moderate",
    },
    includedServices: "Included Services:",
    notIncluded: [
      "Partial Tourist Ticket",
      "Entrance to the Chapel",
      "Meals",
      "Tips",
      "Other expenses not mentioned"
    ],
    recommendations: [
      "Bring light clothing and a jacket (variable weather)",
      "Sunscreen, hat, and water",
      "Camera",
    ],
    groupServices: {
      daysAndNights: "Full Day",
      price: "USD $17",
      quote: "Additional Info",
      bookNow: "Book Now",
      tourForMe: "Is this tour for me?",
    },
  },
};

export default function ValleSagradoSur() {
    const params = useParams();
    const localeValue = params.locale === "en" ? "en" : "es";
    const content = { ...translations[localeValue], ...globalImages };
  
    return <ComponentePrincipal {...content} />;
  }