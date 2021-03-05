import i18next from 'i18next';
import en from './en';
import fr from './fr';

export const languages = {
    en: { code: 'en', name: 'English'},
    fr: { code: 'fr', name: 'Français'}
}

export const getCurrentLanguage = () => {
    return languages[i18next.language];
}

export const getToggledLanguage = () => {
    const newLangCode = i18next.language === 'fr' ? 'en' : 'fr';
    return languages[newLangCode];
}

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
