'use client';

import Image from 'next/image';
import Link from 'next/link';

type PageData = {
  home: {
    course: string;
    sixToNightyNine: string;
  };
};

const DubaiFrenchClasses = ({ page, lang }: { page: PageData; lang: string }) => {
  const { home } = page;

  const images = [
    {
      id: 1,
      imageUrl: '/images/casque-audio-drapeau-francais.png',
      text: 'de 18 à 99 ans COURS DE FRANÇAIS POUR ADULTES',
      linkUrl: 'FrenchCoursesAdults',
      desc: "Casque audio décoré avec le drapeau tricolore de la France, illustrant l'écoute de contenus en français."
    },
  ];

  return (
    <section id="section2" className="mt-16 mb-44">
      <div className="text-center">
        <h2 className="mb-4 text-6xl font-bold md:text-6xl lg:text-5xl">
          {home.course}
        </h2>
      </div>

      <div className="flex flex-col items-center mt-8">
        {images.map((image) => {
          const { imageUrl, id, linkUrl, text, desc } = image;
          return (
            <Link
              href={`/${lang}/${linkUrl}`}
              key={id}
              className="cursor-pointer w-full"
            >
              <div className="flex flex-col items-center justify-center mb-4 cursor-pointer md:flex-row md:items-center md:justify-center coco w-full">
                <Image
                  src={imageUrl}
                  width={300}
                  height={200}
                  alt={desc}
                  className="object-contain w-full h-auto mb-4 rounded-lg md:w-1/2 md:mb-0 md:mr-4"
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
