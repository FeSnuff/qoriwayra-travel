"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import { translations } from "../../../lib/i18n";
import LanguageSwitcher from "@/app/components/base/switcher/switch";
import Image from "next/image";

export default function Navbar({ locale }: { locale: string }) {
  const t = translations[locale as keyof typeof translations] || translations.es;
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  const toggleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const closeDropdown = () => {
    setOpenDropdown(null);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Cierra menú y dropdown al hacer clic fuera del navbar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        closeDropdown();
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className={styles.navbar} ref={navRef}>
      <div className={styles.navContent}>
        {/* Top Section: Selector de idioma + botón hamburguesa */}
        <div className={styles.topSection}>
          <div className={styles.leftContent}>
            <LanguageSwitcher locale={locale} />
            <button className={styles.hamburger} onClick={toggleMobileMenu}>
              ☰
            </button>
          </div>
          {/* Centro: Logo */}
          <div className={styles.centerContent}>
            <Link
              href={`/${locale}/landing`}
              onClick={() => {
                closeDropdown();
                setMobileMenuOpen(false);
              }}
            >
              <Image
                src="https://guru-almacen.s3.us-east-1.amazonaws.com/quechua/logo-qori-wayra.png"
                alt="Logo Qori Wayra"
                width={1000}
                height={1000}
                quality={100}
                className={styles.logo}
              />
            </Link>
          </div>
        </div>

        {/* Menú principal */}
        <div className={`${styles.menu} ${mobileMenuOpen ? styles.active : ""}`}>
          <ul className={styles.navList}>

            {/* Tour a Machu Picchu */}
            <li className={styles.navItem}>
              <button onClick={() => toggleDropdown("machupicchu")}>
                {t.machuPicchuTour}
              </button>
              {openDropdown === "machupicchu" && (
                <ul className={styles.dropdown}>
                  <li>
                    <Link
                      href={`/${locale}/tour-a-machupicchu/mapi-full-day`}
                      onClick={() => {
                        closeDropdown();
                        setMobileMenuOpen(false);
                      }}
                    >
                      {t.machupicchuFullDay}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`/${locale}/tour-a-machupicchu/mapi-by-train`}
                      onClick={() => {
                        closeDropdown();
                        setMobileMenuOpen(false);
                      }}
                    >
                      {t.machupicchuByTrain}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`/${locale}/tour-a-machupicchu/mapi-by-car`}
                      onClick={() => {
                        closeDropdown();
                        setMobileMenuOpen(false);
                      }}
                    >
                      {t.machupicchuByCar}
                    </Link>
                  </li>
                  {/* Eliminamos Machu Picchu por Salkantay de aquí */}
                </ul>
              )}
            </li>

            {/* Tour de un día */}
            <li className={styles.navItem}>
              <button onClick={() => toggleDropdown("oneday")}>
                {t.oneDayTour}
              </button>
              {openDropdown === "oneday" && (
                <ul className={styles.dropdown}>
                  <li>
                    <Link
                      href={`/${locale}/valle-sagrado/valle-sagrado-vip`}
                      onClick={() => {
                        closeDropdown();
                        setMobileMenuOpen(false);
                      }}
                    >
                      {t.sacredValleyVip}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`/${locale}/valle-sagrado/valle-sagrado-tradicional`}
                      onClick={() => {
                        closeDropdown();
                        setMobileMenuOpen(false);
                      }}
                    >
                      {t.traditionalSacredValley}
                    </Link>
                  </li>
                  
                  <li>
                    <Link
                      href={`/${locale}/one-day/siete-lagunas`}
                      onClick={() => {
                        closeDropdown();
                        setMobileMenuOpen(false);
                      }}
                    >
                      {t.sieteLagunas}
                    </Link>
                  </li>
                  
                  <li>
                    <Link
                      href={`/${locale}/one-day/waqrapukara`}
                      onClick={() => {
                        closeDropdown();
                        setMobileMenuOpen(false);
                      }}
                    >
                      {t.waqraPucara}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`/${locale}/one-day/tour-palccoyo`}
                      onClick={() => {
                        closeDropdown();
                        setMobileMenuOpen(false);
                      }}
                    >
                      {t.tourPalccoyo}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`/${locale}/one-day/laguna-humantay`}
                      onClick={() => {
                        closeDropdown();
                        setMobileMenuOpen(false);
                      }}
                    >
                      {t.lagunaHumantay}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`/${locale}/one-day/siete-colores`}
                      onClick={() => {
                        closeDropdown();
                        setMobileMenuOpen(false);
                      }}
                    >
                      {t.montana7Colores}
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Part Time Tour */}
            <li className={styles.navItem}>
              <button onClick={() => toggleDropdown("valle")}>
                {t.partTimeTour}
              </button>
              {openDropdown === "valle" && (
                <ul className={styles.dropdown}>
                  <li>
                    <Link
                      href={`/${locale}/one-day/city-tour-cusco`}
                      onClick={() => {
                        closeDropdown();
                        setMobileMenuOpen(false);
                      }}
                    >
                      {t.cityTourCusco}
                    </Link>
                  </li>                  
                  <li>
                    <Link
                      href={`/${locale}/valle-sagrado/maras-moray`}
                      onClick={() => {
                        closeDropdown();
                        setMobileMenuOpen(false);
                      }}
                    >
                      {t.marasMoray}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`/${locale}/valle-sagrado/valle-sagrado-sur`}
                      onClick={() => {
                        closeDropdown();
                        setMobileMenuOpen(false);
                      }}
                    >
                      {t.sacredValleyLite}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`/${locale}/one-day/tour-mistico`}
                      onClick={() => {
                        closeDropdown();
                        setMobileMenuOpen(false);
                      }}
                    >
                      {t.tourMistico}
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Camino Inca (Penúltimo) */}
            <li className={styles.navItem}>
              <button onClick={() => toggleDropdown("inca")}>
                {t.incaTrail}
              </button>
              {openDropdown === "inca" && (
                <ul className={styles.dropdown}>
                  <li>
                    <Link
                      href={`/${locale}/camino-inca/camino-inca-2d`}
                      onClick={() => {
                        closeDropdown();
                        setMobileMenuOpen(false);
                      }}
                    >
                      {t.incaTrail2d}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`/${locale}/camino-inca/camino-inca-4d`}
                      onClick={() => {
                        closeDropdown();
                        setMobileMenuOpen(false);
                      }}
                    >
                      {t.incaTrail4d}
                    </Link>
                  </li>
                  {/* Movemos Machu Picchu por Salkantay aquí */}
                  <li>
                    <Link
                      href={`/${locale}/camino-inca/mapi-by-salkantay`}
                      onClick={() => {
                        closeDropdown();
                        setMobileMenuOpen(false);
                      }}
                    >
                      {t.salkantayTrek}
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Paquetes Completos (Último) */}
            <li className={styles.navItem}>
              <button onClick={() => toggleDropdown("bestPackages")}>
              {t.packages}
              </button>
              {openDropdown === "bestPackages" && (
                <ul className={styles.dropdown}>
                  <li>
                    <Link
                      href={t.wppMessage1}
                      target="_blank"
                      onClick={() => {
                        closeDropdown();
                        setMobileMenuOpen(false);
                      }}
                    >
                      {t.mapi_valle}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={t.wppMessage2}
                      target="_blank"
                      onClick={() => {
                        closeDropdown();
                        setMobileMenuOpen(false);
                      }}
                    >
                      {t.mapi_city}
                    </Link>
                  </li>
                  
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
