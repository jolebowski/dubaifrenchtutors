'use client';

import Contact from '@/src/components/Contact';

const fakeData = [
  {
    title: 'Groupe',
    subtitle: '1 seul personne',
    imageSrc:
      'https://cambridge-club.kyiv.ua/wp-content/themes/cambridge/images/detal_2.png',
  },
  {
    title: 'Durée',
    subtitle: 'Une fois par semaine',
    imageSrc:
      'https://cambridge-club.kyiv.ua/wp-content/themes/cambridge/images/detal_2.png',
  },
  {
    title: '',
    subtitle: '',
    imageSrc:
      'https://cambridge-club.kyiv.ua/wp-content/themes/cambridge/images/detal_2.png',
  },
  {
    title: 'Niveau',
    subtitle: ' A1 - A2 - B1 - B2 - C1 - C2',
    imageSrc:
      'https://cambridge-club.kyiv.ua/wp-content/themes/cambridge/images/detal_2.png',
  },
  {
    title: 'Âge',
    subtitle: 'de 18 à 99 ans',
    imageSrc:
      'https://cambridge-club.kyiv.ua/wp-content/themes/cambridge/images/detal_2.png',
  },
  {
    title: 'Prix',
    subtitle: '200 euros par leçon',
    imageSrc:
      'https://cambridge-club.kyiv.ua/wp-content/themes/cambridge/images/detal_2.png',
  },
];
const fakeData2 = [
  {
    title: "Caractéristiques de l'apprentissage en individuel",
    subtitle:
      "Caractéristiques de la formation en individuel Le centre de langues Cambridge Club propose des cours individuels de français. Le processus éducatif sera conçu en fonction des éléments suivants : Le niveau de compétence initial. La méthode d'apprentissage préférée. L'intensité d'entraînement optimale.",
    imageSrc:
      'https://cambridge-club.kyiv.ua/wp-content/themes/cambridge/images/detal_2.png',
  },
  {
    title: 'Durée',
    subtitle: 'Une fois par semaine',
    imageSrc:
      'https://cambridge-club.kyiv.ua/wp-content/themes/cambridge/images/detal_2.png',
  },
];

const CourseDetails = () => {
  return (
    <main>
      <section className="container mx-auto">
        <h1 className="text-5xl font-semibold mt-16 mb-12 border-b border-gray-300 pb-12">
          COURS DE FRANÇAIS POUR ADULTES
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {fakeData.map((item, index) => (
            <div key={index} className="bg-white rounded-lg p-4 shadow-md card">
              <div className="square-card-content">
                <h2 className="text-3xl font-bold mb-2">{item.title}</h2>{' '}
                <p className="text-2xl text-gray-700 mb-2">{item.subtitle}</p>{' '}
                <div className="square-image-wrapper">
                  <img
                    src={item.imageSrc}
                    alt={`Image ${item.title}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <p className="font-semibold text-2xl">
            Un cours de français personnalisé constitue la solution idéale pour
            ceux qui désirent acquérir rapidement et efficacement une maîtrise
            de la langue. Les cours individuels de français offrent la
            flexibilité de dispenser un enseignement basé sur des approches
            uniques, adaptées aux besoins et aux préférences de chaque
            apprenant.
          </p>
        </div>
        <div>
          {fakeData2.map((item, index) => (
            <div
              className={`mt-16 flex ${
                index % 2 === 1 ? 'flex-row-reverse' : ''
              }`}
              key={index}
            >
              <div className="w-1/2 text-center mt-16">
                <h3 className="font-semibold text-3xl mb-2">{item.title}</h3>
                <p>{item.subtitle}</p>
              </div>
              <div className="w-1/2 text-center">
                <img src={item.imageSrc} alt="Image" className="w-full" />
              </div>
            </div>
          ))}
        </div>
      </section>
      <Contact />
    </main>
  );
};

export default CourseDetails;
