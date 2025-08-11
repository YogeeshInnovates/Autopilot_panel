// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .init({
    lng: "en", // default language
    fallbackLng: "en",
    debug: false,
    resources: {}, // we will load from public
    backend: {
      loadPath: "/locales/{{lng}}/translation.json"
    }
  });

export default i18n;
