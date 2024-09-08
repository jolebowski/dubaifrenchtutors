'use client';

import Image from 'next/image';
import Link from 'next/link';

type PageData = {
  home: {
    course: string;
    chooseYourFrenchCourse: string;
    sixToNightyNine: string;
  };
};

const DubaiFrenchClasses = ({ page, lang }: { page: PageData; lang: string }) => {
  const { home } = page;

  const images = [
    {
      id: 1,
      imageUrl: 'https://cambridge-club.kyiv.ua/wp-content/themes/cambridge/images/head_img.png',
      text: 'de 18 à 99 ans COURS DE FRANÇAIS POUR ADULTES',
      linkUrl: 'FrenchCoursesAdults',
    },
    {
      id: 2,
      imageUrl:
        'https://cambridge-club.kyiv.ua/wp-content/themes/cambridge/images/head_img.png',
      text: 'de 6 à 12 ans COURS DE FRANÇAIS POUR ENFANTS',
      linkUrl: '/image2-details',
    },
    {
      id: 3,
      imageUrl:
        'https://cambridge-club.kyiv.ua/wp-content/themes/cambridge/images/head_img.png',
      text: 'de 12 à 17 ans COURS DE FRANÇAIS POUR ADOLESCENTS',
      linkUrl: '/image3-details',
    },
  ];

  return (
    <section id="section2" className="mt-16 mb-44">
      <div className="text-center">
        <h2 className="mb-4 text-6xl font-bold md:text-6xl lg:text-5xl">
          {home.course}
        </h2>
        <p className="text-xl text-gray-600">{home.chooseYourFrenchCourse}</p>
      </div>

      <div className="flex flex-col items-center mt-8">
        {images.map((image) => {
          const { imageUrl, id, linkUrl, text } = image;
          return (
            <Link
              href={`/${lang}/${linkUrl}`}
              key={id}
              className="cursor-pointer"
            >
              <div className="flex flex-col items-center mb-4 cursor-pointer md:flex-row md:items-center coco">
                <Image
                  src={imageUrl}
                  width={300}
                  height={200}
                  alt={`Image - ${text}`}
                  className="object-cover w-64 h-64 mb-4 rounded-lg md:w-96 md:h-96 md:mb-0 md:mr-4"
                />
                <div className="flex items-center justify-center transition-transform duration-300 ease-in-out transform rounded-full rounded-courses w-44 h-44 hover:w-52 hover:h-52 hover:scale-105">
                  <p className="text-base text-center md:text-lg lg:text-xl">
                    {text}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default DubaiFrenchClasses;
