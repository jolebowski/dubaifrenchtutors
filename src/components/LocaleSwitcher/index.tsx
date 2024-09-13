'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { i18n } from '@/i18n.config';

export default function LocaleSwitcher() {
  const pathName = usePathname();

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/';
    const segments = pathName.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  return (
    <select
      className="rounded-md border bg-transparent px-3 py-2 text-gray-300 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
      onChange={(e) => {
        window.location.href = redirectedPathName(e.target.value);
      }}
      value={pathName.split('/')[1]}
    >
      {i18n.locales.map((locale) => {
        const flag = locale === 'fr' ? '🇫🇷' : locale === 'en' ? '🇬🇧' : locale === 'ar' ? '🇦🇪' : locale;
        return (
          <option key={locale} value={locale}>
            {flag}
          </option>
        );
      })}
    </select>
  );
}
