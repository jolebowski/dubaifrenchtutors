import type { Locale } from '@/i18n.config';

const dictionaries = {
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
  ar: () => import('@/dictionaries/ar.json').then((module) => module.default),
  fr: () => import('@/dictionaries/fr.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => {
  const langCode = locale.split('-')[0].toLowerCase();
  
  if (!(langCode in dictionaries)) {
    console.log(`Unsupported locale: ${locale}. Falling back to English.`);
    return dictionaries.en();
  }
  
  return dictionaries[langCode as keyof typeof dictionaries]();
};
