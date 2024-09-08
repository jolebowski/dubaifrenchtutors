'use client';

import Image from 'next/image';

const Advantages = () => {
  return (
    <section
      id="section3"
      className="flex justify-center mb-36 items-center min-h-screen"
    >
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 pr-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Avantages</h2>
        <Image
          src="/images/personnes-ecoutant-orateur.png"
          alt="Groupe de personnes assises autour d'un orateur lors d'une présentation."
          width={400}
          height={400}
          className="w-full h-auto rounded-md"
        />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center mt-8 md:mt-0">
          <div className="md:grid md:grid-cols-2 md:gap-4">
            <div className="mb-6 text-center">
              <Image
                src="calendar-bold.svg"
                alt="Description de votre image"
                width={0}
                height={0}
                className="w-14 mb-2 mx-auto animated-svg"
              />
              <p className="text-base md:text-lg font-semibold text-justif">
                Apprenez à votre rythme, selon votre emploi du temps chargé
              </p>
            </div>
            <div className="mb-6 text-center">
              <Image
                src="teacher.svg"
                alt="Description de votre image"
                width={0}
                height={0}
                className="w-14 mb-2 mx-auto animated-svg"
              />
              <p className="text-base md:text-lg font-semibold text-justif">
                Bénéficiez de l&apos;expertise de professeurs francophones
                qualifiés
              </p>
            </div>
            <div className="mb-6 text-center">
              <Image
                src="wallet.svg"
                alt="Description de votre image"
                width={0}
                height={0}
                className="w-14 mb-2 mx-auto animated-svg"
              />
              <p className="text-base md:text-lg font-semibold text-justif">
                Bénéficiez de tarifs compétitifs pour des cours de français de
                haute qualité
              </p>
            </div>
            <div className="mb-6 text-center">
              <Image
                src="./heart-fill.svg"
                alt="Description de votre image"
                width={0}
                height={0}
                className="w-14 mb-2 mx-auto animated-svg"
              />
              <p className="text-base md:text-lg font-semibold text-justif">
                Cours adaptés à vos besoins spécifiques, que ce soit pour
                l&apos;examen, la conversation ou la grammaire
              </p>
            </div>
            <div className="mb-6 text-center">
              <Image
                src="position-marker.svg"
                alt="Description de votre image"
                width={0}
                height={0}
                className="w-14 mb-2 mx-auto animated-svg"
              />
              <p className="text-base md:text-lg font-semibold text-justif">
                Apprenez depuis n&apos;importe quel endroit à Dubaï, sans
                déplacement
              </p>
            </div>
            <div className="mb-6 text-center">
              <Image
                src="twotone-language.svg"
                alt="Description de votre image"
                width={0}
                height={0}
                className="w-14 mb-2 mx-auto animated-svg"
              />
              <p className="text-base md:text-lg font-semibold text-justif">
                Améliorez vos compétences linguistiques rapidement et
                efficacement
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Advantages;
