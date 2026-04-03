"use client";

import { usePathname, useRouter } from "next/navigation";
import styles from "./switch.module.css";

export default function LanguageSwitcher({ locale }: { locale: string }) {
  const pathname = usePathname();
  const router = useRouter();

  const switchLanguage = (newLocale: string) => {
    if (locale !== newLocale) {
      const segments = pathname.split("/").slice(2); // Quita el idioma actual
      const newPath = `/${newLocale}/${segments.join("/")}`;
      router.push(newPath);
    }
  };

  return (
    <div className={styles.languageSwitcher}>
      <button
        className={`${styles.languageButton} ${locale === "es" ? styles.active : ""}`}
        onClick={() => switchLanguage("es")}
        disabled={locale === "es"}
      >
        Es
      </button>
      <button
        className={`${styles.languageButton} ${locale === "en" ? styles.active : ""}`}
        onClick={() => switchLanguage("en")}
        disabled={locale === "en"}
      >
        En
      </button>
    </div>
  );
}
