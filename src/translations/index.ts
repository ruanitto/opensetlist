import 'intl-pluralrules';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import type { Language } from '@/hooks/language/schema';

import en from './en-EN.json';
import fr from './fr-FR.json';
import pt from './pt-BR.json';

export const defaultNS = 'opensetlist';

export const resources = {
  'en-EN': en,
  'fr-FR': fr,
  'pt-BR': pt,
} as const satisfies Record<Language, unknown>;

void i18n.use(initReactI18next).init({
  defaultNS,
  fallbackLng: 'pt-BR',
  lng: 'pt-BR',
  resources,
});

// add capitalization formatter
i18n.services.formatter?.add(
  'capitalize',
  (value: string) =>
    value.charAt(0).toUpperCase() + value.slice(1).toLowerCase(),
);

export { default } from 'i18next';
