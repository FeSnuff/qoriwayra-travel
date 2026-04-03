"use client"
// src/app/[locale]/camino-inca/camino-inca-2d/page.tsx
import React from "react";
import ComponentePrincipal from "@/app/components/utils/principal/pricipal";
import img1 from "@/public/images/OneDayTour/CityTour/city1.jpg";
import img2 from "@/public/images/OneDayTour/CityTour/city2.jpg";
import img3 from "@/public/images/OneDayTour/CityTour/city3.jpg";
import img4 from "@/public/images/OneDayTour/CityTour/city4.jpg";
import img5 from "@/public/images/OneDayTour/CityTour/city5.jpg";
import mainImg from "@/public/images/OneDayTour/CityTour/Saqsayhuaman.webp";

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
    generalTitle: "City Tour Cusco (1D)",
    whatsapp: "Hola, quiero reservar el paquete ",
    tripOverview: {
      title: "Resumen del Viaje",
      content:
        "City Tour por la majestuosa ciudad de Cusco, la antigua capital del Imperio Inca.\nPrepárate para un viaje lleno de historia, cultura y paisajes impresionantes. \nPara iniciar el tour, el punto de encuentro será a las 8:30 a.m. o 12:30 p.m. en la Plaza de Armas de Cusco. Este tour tiene una duración aproximada de 5 horas.\nRecorre los 5 lugares turísticos más importantes de Cusco, revelando el fascinante legado inca y colonial.",
    },
    itinerarySummary: {
      title: "Resumen del Itinerario",
      days: [
        {
          title: "Día 1: Recorrido por Cusco",
          steps: [
            { iconType: "bus", text: "QORICANCHA (Templo del Sol)" },
            { iconType: "walk", text: "SACSAYHUAMÁN" },
            { iconType: "walk", text: "QENQO" },
            { iconType: "walk", text: "PUCA PUCARA" },
            { iconType: "market", text: "TAMBOMACHAY" },
          ],
        },
      ],
    },
    itinerary: [
      {
        title: "Día 1: Recorrido por Cusco",
        text: (
          <>
            <p>A pocos pasos de la plaza, visitaremos el Qoricancha, el templo más importante del Imperio Inca, dedicado al dios Inti (Sol). Bajo el convento de Santo Domingo, aún se pueden apreciar los muros de oro y las finas piedras labradas que alguna vez cubrieron este recinto sagrado.</p>
            <p>A las afueras de la ciudad, nos maravillaremos con la fortaleza de Sacsayhuamán, una obra maestra de la ingeniería inca. Sus enormes bloques de piedra, algunos de hasta 120 toneladas, encajan a la perfección, creando muros ciclópeos que dominan el valle del Cusco.</p>
            <p>Continuaremos nuestro recorrido hacia el complejo arqueológico de Qenqo, un laberinto de rocas talladas con altares, canales y nichos, donde los incas realizaban rituales y ceremonias religiosas.</p>
            <p>Nuestra siguiente parada será Puca Pucara, una fortaleza roja que sirvió como puesto de control militar y tambo (lugar de descanso) para los viajeros que ingresaban a Cusco.</p>
            <p>Finalmente, llegaremos a Tambomachay, conocido como el Baño del Inca, un complejo de fuentes y canales de agua que demuestran la maestría de los incas en ingeniería hidráulica.</p>
          
          </>
        ),
        services: ["Bus turístico", "Guía profesional"],
      },
    ],
    additionalInfo: {
      title: "Detalles del Tour",
      physicalRating: "Fácil",
    },
    includedServices: "Servicios Incluidos:",
    notIncluded: ["Ticket de ingreso a Qoricancha.", "PTP. Boleto Turístico Parcial."],
    recommendations: ["Protector solar.", "Sombrero.", "Protector solar", "Poncho de lluvia por temporada."],
    groupServices: {
      daysAndNights: "1D",
      price: "USD $10",
      quote: "Info Adicional",
      bookNow: "Reservar Ahora",
      tourForMe: "¿Este tour es para mí?",
    },
  },
  en: {
    generalTitle: "City Tour Cusco (1D)",
    whatsapp: "Hello, I want to book the package ",
    tripOverview: {
      title: "Trip Overview",
      content:
        "City Tour through the majestic city of Cusco, the ancient capital of the Inca Empire.\nGet ready for a journey full of history, culture, and breathtaking landscapes.\nTo start the tour, the meeting point will be at 8:30 a.m. or 12:30 p.m. in Cusco’s Plaza de Armas. This tour lasts approximately 5 hours.\nExplore the 5 most important tourist sites in Cusco, unveiling the fascinating Inca and colonial legacy.",
    },
    itinerarySummary: {
      title: "Itinerary Overview",
      days: [
        {
          title: "Day 1: Cusco City Tour",
          steps: [
            { iconType: "bus", text: "QORICANCHA (Temple of the Sun)" },
            { iconType: "walk", text: "SACSAYHUAMÁN" },
            { iconType: "walk", text: "QENQO" },
            { iconType: "walk", text: "PUCA PUCARA" },
            { iconType: "market", text: "TAMBOMACHAY" },
          ],
        },
      ],
    },
    itinerary: [
      {
        title: "Day 1: Cusco City Tour",
        text: (
          <>
            <p>Just a few steps from the square, we will visit Qoricancha, the most important temple of the Inca Empire, dedicated to the god Inti (Sun). Beneath the Santo Domingo convent, you can still admire the golden walls and finely carved stones that once covered this sacred site.</p>
            <p>Just outside the city, we will marvel at the Sacsayhuamán fortress, a masterpiece of Inca engineering. Its massive stone blocks, some weighing up to 120 tons, fit perfectly together, creating cyclopean walls that dominate the Cusco valley.</p>
            <p>We will continue our tour to the Qenqo archaeological complex, a labyrinth of carved rocks with altars, channels, and niches, where the Incas performed rituals and religious ceremonies.</p>
            <p>Our next stop will be Puca Pucara, a red fortress that served as a military checkpoint and tambo (resting place) for travelers entering Cusco.</p>
            <p>Finally, we will arrive at Tambomachay, known as the Of Inca Bath, a complex of fountains and water channels that showcase the of Inca mastery of hydraulic engineering.</p>
          </>
        ),
        services: ["Tourist bus", "Professional guide"],
      },
    ],
    additionalInfo: {
      title: "Tour Details",
      physicalRating: "Easy",
    },
    includedServices: "Included Services:",
    notIncluded: ["Entrance ticket to Qoricancha.", "PTP. Partial Tourist Ticket."],
    recommendations: ["Sunscreen.", "Hat.", "Sunglasses.", "Rain poncho (seasonal)."],
    groupServices: {
      daysAndNights: "1D",
      price: "USD $10",
      quote: "Check availability and schedules",
      bookNow: "Book Now",
      tourForMe: "Is this tour for me?",
    },
  },
};

export default function CityTourCusco(){
    const params = useParams();
    const localeValue = params.locale === "en" ? "en" : "es";
    const content = { ...translations[localeValue], ...globalImages };
  
    return <ComponentePrincipal {...content} />;
  }