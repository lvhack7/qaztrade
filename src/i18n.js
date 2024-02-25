// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ruTranslation from './locales/ru.json';
// import kzTranslation from './locales/kz.json'
// import engTranslation from './locales/eng.json'

const resources = {
  ru: { translation: ruTranslation },
//   kz: {translation: kzTranslation},
//   eng: {translation: engTranslation}
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ru', // default language
    fallbackLng: 'ru',
    interpolation: {
      escapeValue: false, // react already escapes by default
    },
  });

export default i18n;
