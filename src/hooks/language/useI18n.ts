import i18next from 'i18next';

import { SupportedLanguages } from './schema';

const changeLanguage = (lang: SupportedLanguages) => {
  void i18next.changeLanguage(lang);
};

const toggleLanguage = () => {
  const currentLang = i18next.language as SupportedLanguages;
  let nextLang: SupportedLanguages;

  switch (currentLang) {
    case SupportedLanguages.EN_EN: {
      nextLang = SupportedLanguages.FR_FR;
      break;
    }
    case SupportedLanguages.FR_FR: {
      nextLang = SupportedLanguages.PT_BR;
      break;
    }
    default: {
      nextLang = SupportedLanguages.EN_EN;
      break;
    }
  }

  void i18next.changeLanguage(nextLang);
};

export const useI18n = () => {
  return { changeLanguage, toggleLanguage };
};
