import * as z from 'zod';

export const enum SupportedLanguages {
  EN_EN = 'en-EN',
  FR_FR = 'fr-FR',
  PT_BR = 'pt-BR',
}

export const languageSchema = z.enum([
  SupportedLanguages.EN_EN,
  SupportedLanguages.FR_FR,
  SupportedLanguages.PT_BR,
]);

export type Language = z.infer<typeof languageSchema>;
