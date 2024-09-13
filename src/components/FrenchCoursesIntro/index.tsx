'use client';
import Image from 'next/image';


type PageData = {
  home: {
    title: string;
    desc: string;
    joinUs: string;
  };
};

const FrenchCoursesIntro = ({ page }: { page: PageData }) => {
  const { home } = page;

  return (
    <section
      id="section1"
      className="mb-44 flex flex-col md:flex-row items-center"
    >
      <div className="md:w-3/5 pr-8 mb-8 md:mb-0 mt-0">
        <div className="flex flex-col justify-between p-6">
          <h2 className="text-4xl md:text-5xl font-semibold mb-4 md:mb-8">
            {home.title}
          </h2>
          <p className="text-gray-600 mb-4 md:mb-8 whitespace-normal">
            {home.desc}
          </p>
          <div className="flex flex-col md:flex-row items-start md:items-center md:justify-between">
            <button
              className="text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline self-start md:self-auto"
              type="button"
            >
              {home.joinUs}
            </button>
          </div>
        </div>
      </div>
      <div className="md:w-4/5 pl-4">
        <Image
          src="/images/fille-drapeau-francais-livres.png"
          alt="Jeune fille tenant un drapeau français et des livres, illustrant l'apprentissage de la langue française"
          width={600}
          height={600}
          className="w-full h-auto rounded-md"
        />
      </div>
    </section>
  );
};

export default FrenchCoursesIntro;
