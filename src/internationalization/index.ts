import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import { LOCALS } from './constants';
import en from './translations/en.json';
import pt from './translations/pt.json';
import ua from './translations/ua.json';

const resources = {
  [LOCALS.EN]: {
    translation: en,
  },
  [LOCALS.UA]: {
    translation: ua,
  },
  [LOCALS.PT]: {
    translation: pt,
  },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: LOCALS.EN,

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
