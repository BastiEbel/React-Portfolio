import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "../util/translation/en/en.json";
import deTranslation from "../util/translation/de/de.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation,
    },
    de: {
      translation: deTranslation,
    },
  },
  fallbackLng: "en",
  lng: "en",
  interpolation: { escapeValue: false },
});
export default i18n;
