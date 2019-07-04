import i18next from 'i18next';
import en from './en';
import fr from './fr';

i18next
  .init({
    interpolation: {
      escapeValue: false,
    },
    lng: 'en',
    resources: {
      en,
      fr
    },
  })

export default i18next;