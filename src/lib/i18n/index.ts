import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import resources from "./resources";

export const instanceI18next = () => {
    const i18nInstance = i18n.use(initReactI18next);
    i18nInstance.init({
      resources: resources,
      lng: "ptBR",
      fallbackLng: "ptBR",
      interpolation: {
        escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
      }
    })
}
