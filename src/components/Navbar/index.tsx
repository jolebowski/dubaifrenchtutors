'use client';

import { useEffect, useState } from 'react';

import { getDictionary } from '@/getDictionary';
import { Locale } from '@/i18n.config';
import Link from 'next/link';
import LocaleSwitcher from '../LocaleSwitcher';

const Navbar = ({ lang }: { lang: Locale }) => {
  const [navigation, setNavigation] = useState<any>({});
  const [isOpen, setIsOpen] = useState(false); 

  useEffect(() => {
    const fetchNavigation = async () => {
      const { navigation } = await getDictionary(lang);
      setNavigation(navigation);
    };

    fetchNavigation();
  }, [lang]);

  return (
    <header className="flex items-center justify-between p-4 mb-8">
      <div className="logo">
        <p>Cest le logo</p>
        {/* <Link href="/">
          <a>
            <img src="/logo.png" alt="Logo" className="max-w-20" />
          </a>
        </Link> */}
      </div>
      <div className="sm:hidden">
        <button
          onClick={() => setIsOpen(true)}
          className="text-gray-700 hover:text-gray-900 focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      <nav className="hidden space-x-4 sm:flex">
        <Link href={`/${lang}`} className="text-gray-700 hover:text-gray-900">
          {navigation.home}
        </Link>
        <Link
          href={`/${lang}/contact`}
          className="text-gray-700 hover:text-gray-900"
        >
          {navigation.contact}
        </Link>
        <Link
          href={`/${lang}/teachers`}
          className="text-gray-700 hover:text-gray-900"
        >
          {navigation.teachers}
        </Link>
        <Link
          href={`/${lang}/about-us`}
          className="text-gray-700 hover:text-gray-900"
        >
          {navigation.aboutUs}
        </Link>
        <LocaleSwitcher />
      </nav>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center p-8 bg-white">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute text-gray-700 top-4 right-4 hover:text-gray-900 focus:outline-none"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <nav className="flex flex-col items-center space-y-4">
            <Link href={`/${lang}`} className="text-2xl text-gray-700 hover:text-gray-900" onClick={() => setIsOpen(false)}>
              {navigation.home}
            </Link>
            <Link
              href={`/${lang}/contact`}
              className="text-2xl text-gray-700 hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              {navigation.contact}
            </Link>
            <Link
              href={`/${lang}/teachers`}
              className="text-2xl text-gray-700 hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              {navigation.teachers}
            </Link>
            <Link
              href={`/${lang}/about-us`}
              className="text-2xl text-gray-700 hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              {navigation.aboutUs}
            </Link>
            <LocaleSwitcher />
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
