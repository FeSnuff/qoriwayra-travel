export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "es";

export const translations = {
  en: {        
    wppMessage1: "https://wa.me/51924377454?text=Hello%2C%20I%20would%20like%20more%20details%20about%20the%20Machu%20Picchu%20%2B%20Sacred%20Valley%20tour%20package",
    wppMessage2: "https://wa.me/51924377454?text=Hello%2C%20I%20would%20like%20more%20details%20about%20the%20Machu%20Picchu%20%2B%20City%20Tour%20package",
    //Paquetes
    mapi_valle: "Machu Pichhu + Sacred Valley",
    mapi_city: "Machu Pichu + City Tour",
    //navbar
    machuPicchuTour: "Machu Picchu Tour",
    partTimeTour: "Part Time Tour",
    oneDayTour: "One Day Tour",
    incaTrail: "Inca Trail",
    packages: "Complete Packages",
    // Dropdown Camino Inca
    incaTrail2d: "Inca Trail 2 Days",
    incaTrail4d: "Inca Trail 4 Days",
    salkantayTrek: "Trek Salkantay to Machu Picchu",
    // Dropdown Machu Picchu Tour
    machupicchuByTrain: "Machupicchu By Train (2D/1N)",
    machupicchuFullDay: "Machupicchu Full Day",
    machupicchuByCar: "Machupicchu By Hidroeléctrica (2D/1N))",    
    // Dropdown Sacred Valley
    traditionalSacredValley: "Traditional Sacred Valley",
    sacredValleyLite: "South Valley Tour",
    sacredValleyVip: "Sacred Valley VIP",
    marasMoray: "Maras Moray - Salt Mines",
    // Dropdown One Day Tour (Aventuras)
    cityTourCusco: "City Tour - Cusco",
    sieteLagunas: "7 Lakes",
    tourMistico: "Mystical Tour (4 in 1)",
    waqraPucara: "Waqra Pucara",
    tourPalccoyo: "Tour Palccoyo",
    lagunaHumantay: "Humantay Lake",
    montana7Colores: "7 Colors Mountain",
  },
  es: {    
    wppMessage1: "https://wa.me/51924377454?text=Hola%2C%20quisiera%20m%C3%A1s%20detalles%20sobre%20el%20paquete%20tur%C3%ADstico%20de%20Macchu%20Picchu%20%2B%20Valle%20Sagrado",
    wppMessage2: "https://wa.me/51924377454?text=Hola%2C%20quisiera%20m%C3%A1s%20detalles%20sobre%20el%20paquete%20tur%C3%ADstico%20de%20Macchu%20Picchu%20%2B%20City%20Tour",
    //Paquetes
    mapi_valle: "Machu Pichhu + Valle Sagrado",
    mapi_city: "Machu Pichu + City Tour",
    //navbar
    machuPicchuTour: "Tour a Machu Picchu",
    partTimeTour: "Tour de Medio Día",
    oneDayTour: "Tour de un día",
    incaTrail: "Camino Inca",
    packages: "Paquetes Completos",
    // Dropdown Camino Inca
    incaTrail2d: "Camino Inca 2 Días",
    incaTrail4d: "Camino Inca 4 Días",
    salkantayTrek: "Salkantay hacia Machu Picchu",
    // Dropdown Machu Picchu Tour
    machupicchuByTrain: "Machupicchu por Tren (2D/1N)",
    machupicchuFullDay: "Machupicchu Día Completo",
    machupicchuByCar: "Machupicchu por Hidroeléctrica (2D/1N)",
    // Dropdown Valle Sagrado
    traditionalSacredValley: "Valle Sagrado Tradicional",
    sacredValleyLite: "Tour del Valle Sur",
    sacredValleyVip: "Valle Sagrado VIP",
    marasMoray: "Maras Moray - Salineras",
    // Dropdown Tour de un día (Aventuras)
    cityTourCusco: "City Tour - Cusco",
    sieteLagunas: "7 Lagunas",
    tourMistico: "Tour Místico (4 en 1)",
    waqraPucara: "Waqra Pucara",
    tourPalccoyo: "Tour Palccoyo",
    lagunaHumantay: "Laguna Humantay",
    montana7Colores: "Montaña de 7 colores",
  },
};
