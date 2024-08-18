'use client';

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
      className="mt-8 mb-44 flex flex-col md:flex-row items-center"
    >
      <div className="md:w-3/5 pr-8 mb-8 md:mb-0 mt-0">
        <div className="flex flex-col justify-between p-8">
          <h2 className="text-4xl md:text-5xl font-semibold mb-4 md:mb-8">
            {home.title}
          </h2>
          <p className="text-gray-600 mb-4 md:mb-8 whitespace-normal">
            {home.desc}
            {/* Nous vous proposons des cours de français dispensés par un Français
            natif. Avec notre programme personnalisé, vous apprendrez rapidement
            et efficacement.&nbsp;
            <span className="font-semibold">Rejoignez-nous dès maintenant</span>
            et découvrez une nouvelle façon
            <span className="font-semibold">
              {' '}
              d&apos;apprendre le français.
            </span>{' '}
            Parlez français avec assurance
            <span className="font-semibold"> dès aujourd&apos;hui !</span> */}
          </p>
          <div className="flex flex-col md:flex-row items-center md:justify-between">
            <button
              className="text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              {home.joinUs}
            </button>
          </div>
        </div>
      </div>
      <div className="md:w-4/5 pl-4 border border-green500">
        {' '}
        {/* Augmentation de la largeur du conteneur */}
        <img
          src="https://cambridge-club.kyiv.ua/wp-content/themes/cambridge/images/head_img.png"
          alt="Image de la section"
          className="w-full h-auto rounded-md"
        />
      </div>
    </section>
  );
};

export default FrenchCoursesIntro;
