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
    title: 'Card 2',
    subtitle: 'Sous-titre de la carte 2',
    imageSrc:
      'https://cambridge-club.kyiv.ua/wp-content/themes/cambridge/images/detal_2.png',
  },
  {
    title: 'Card 2',
    subtitle:
      'lorem ipsum text for testing purposes only (https://www.lipsum.com/) - 2 paragraphs of 100 words each (200 words total) - 1 paragraph of 50 words',
    imageSrc:
      'https://cambridge-club.kyiv.ua/wp-content/themes/cambridge/images/detal_2.png',
  },
  {
    title: 'Card 2',
    subtitle: 'Sous-titre de la carte 2',
    imageSrc:
      'https://cambridge-club.kyiv.ua/wp-content/themes/cambridge/images/detal_2.png',
  },
  {
    title: 'Card 2',
    subtitle: 'Sous-titre de la carte 2',
    imageSrc:
      'https://cambridge-club.kyiv.ua/wp-content/themes/cambridge/images/detal_2.png',
  },
  {
    title: 'Card 2',
    subtitle: 'Sous-titre de la carte 2',
    imageSrc:
      'https://cambridge-club.kyiv.ua/wp-content/themes/cambridge/images/detal_2.png',
  },
];

const AboutUsPage = () => {
  return (
    <main>
      <section className="container mx-auto">
        <h1 className="text-5xl font-semibold mt-16 mb-12 border-b border-gray-300 pb-12">
          Les cours de français
        </h1>
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

export default AboutUsPage;
