'use client';

import { useEffect, useState } from 'react';

import { getDictionary } from '@/getDictionary';
import { Locale } from '@/i18n.config';
import Link from 'next/link';
import LocaleSwitcher from '../LocaleSwitcher';

const Navbar = ({ lang }: { lang: Locale }) => {
  const [navigation, setNavigation] = useState<any>({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDictionary(lang);
      setNavigation(data.navigation);
    };

    fetchData();
  }, [lang]);

  return (
    <header className="flex justify-between items-center p-4 mb-8">
      <div className="logo">
        <p>Cest le logo</p>
        {/* <Link href="/">
          <a>
            <img src="/logo.png" alt="Logo" className="max-w-20" />
          </a>
        </Link> */}
      </div>
      <nav className="flex items-center space-x-4">
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
    </header>
  );
};

export default Navbar;
