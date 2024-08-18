import 'tailwindcss/tailwind.css';
import '../../../../styles/globals.css';

const fakeData = [
  {
    title: 'Card 1Card 1Card 1Card 1Card 1Card 1Card 1',
    subtitle: 'Sous-titre de la carte 1Card 1Card 1Card 1Card 1Card 1Card 1',
    imageSrc:
      'https://cambridge-club.kyiv.ua/wp-content/themes/cambridge/images/detal_2.png',
  },
  {
    title: 'Card 1Card 1Card 1Card 1Card 1Card 1Card 1',
    subtitle: 'Sous-titre de la carte 1Card 1Card 1Card 1Card 1Card 1Card 1',
    imageSrc:
      'https://cambridge-club.kyiv.ua/wp-content/themes/cambridge/images/detal_2.png',
  },
];

const TeachersPage = () => {
  return (
    <main>
      <section className="container mx-auto">
        <h1 className="text-5xl font-semibold mt-16 mb-12 border-b border-gray-300 pb-12">
          Enseignants
        </h1>
        <div className="'mt-16 flex">
          <div className="w-1/2 text-center mt-16">
            <p>
              Sous-titre de la carte 1Card 1Card 1Card 1Card 1Card 1Card 1
              Sous-titre de la carte 1Card 1Card 1Card 1Card 1Card 1Card
              1Sous-titre de la carte 1Card 1Card 1Card 1Card 1Card 1Card
              1Sous-titre de la carte 1Card 1Card 1Card 1Card 1Card 1Card
              1Sous-titre de la carte 1Card 1Card 1Card 1Card 1Card 1Card
              1Sous-titre de la carte 1Card 1Card 1Card 1Card 1Card 1Card
              1Sous-titre de la carte 1Card 1Card 1Card 1Card 1Card 1Card 1
            </p>
            <div className="flex flex-col md:flex-row items-center md:justify-between">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md mt-6">
                En savoir plus
              </button>
            </div>
          </div>
          <div className="w-1/2 text-center">
            <img
              src="https://cambridge-club.kyiv.ua/wp-content/themes/cambridge/images/detal_2.png"
              alt="Image"
              className="w-full"
            />
          </div>
        </div>
        <div className="mt-20 flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 text-center mb-8 md:mb-0 px-4">
            <img
              src="https://cambridge-club.kyiv.ua/wp-content/themes/cambridge/images/detal_2.png"
              alt="Image"
              className="w-1/2 mx-auto mb-4"
            />
            <p className="text-justify">
              Sous-titre de la carte 1Card 1Card 1Card 1Card 1Card 1Card 1
              Sous-titre de la carte 1Card 1Card 1Card 1Card 1Card 1Card
            </p>
          </div>

          {/* Colonne 2 */}
          <div className="w-full md:w-1/4 text-center mb-8 md:mb-0 px-4">
            <img
              src="https://cambridge-club.kyiv.ua/wp-content/themes/cambridge/images/detal_2.png"
              alt="Image"
              className="w-1/2 mx-auto mb-4"
            />
            <p className="text-justify">
              Sous-titre de la carte 1Card 1Card 1Card 1Card 1Card 1Card 1
              Sous-titre de la carte 1Card 1Card 1Card 1Card 1Card 1Card
            </p>
          </div>

          {/* Colonne 3 */}
          <div className="w-full md:w-1/4 text-center mb-8 md:mb-0 px-4">
            <img
              src="https://cambridge-club.kyiv.ua/wp-content/themes/cambridge/images/detal_2.png"
              alt="Image"
              className="w-1/2 mx-auto mb-4"
            />
            <p className="text-justify">
              Sous-titre de la carte 1Card 1Card 1Card 1Card 1Card 1Card 1
              Sous-titre de la carte 1Card 1Card 1Card 1Card 1Card 1Card
            </p>
          </div>

          {/* Colonne 4 */}
          <div className="w-full md:w-1/4 text-center px-4">
            <img
              src="https://cambridge-club.kyiv.ua/wp-content/themes/cambridge/images/detal_2.png"
              alt="Image"
              className="w-1/2 mx-auto mb-4"
            />
            <p className="text-justify">
              Sous-titre de la carte 1Card 1Card 1Card 1Card 1Card 1Card 1
              Sous-titre de la carte 1Card 1Card 1Card 1Card 1Card 1Card
            </p>
          </div>
        </div>
        <div className="text-center mt-32">
          <img
            src="https://cambridge-club.kyiv.ua/wp-content/themes/cambridge/images/detal_2.png"
            alt="Image"
            className="mx-auto rounded-lg border-2 border-white p-4 max-w-4xl"
          />
        </div>
        <div>
          {fakeData.map((item, index) => (
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
    </main>
  );
};

export default TeachersPage;
