export const AboutSection = () => {
  return (
    <section className="mt-16 mb-44">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
          Dubai French Tutors - Votre Porte d'Entrée vers le Monde Francophone
        </h2>
        <div className="space-y-4">
          <details className="bg-white shadow-md rounded-lg">
            <summary className="px-4 py-3 font-semibold cursor-pointer">
              Pourquoi choisir Dubai French Tutors ?
            </summary>
            <div className="px-4 py-3">
              <p className="mb-4">
                Contrairement à d'autres écoles de langues, où la qualité de
                l'enseignement peut être inégale,
                <strong>Dubai French Tutors</strong> vous garantit un apprentissage
                rigoureux et des résultats concrets. Nos enseignants sont des experts
                qualifiés, avec de nombreuses années d'expérience dans l'enseignement
                du français. À la fin de votre formation, vous recevrez un certificat
                reconnu attestant de vos compétences, vous ouvrant ainsi de nombreuses
                opportunités académiques et professionnelles.
              </p>
            </div>
          </details>
          
          <details className="bg-white shadow-md rounded-lg">
            <summary className="px-4 py-3 font-semibold cursor-pointer">
              Quels sont nos programmes de cours ?
            </summary>
            <div className="px-4 py-3">
              <p className="mb-4">
                Les cours chez <strong>Dubai French Tutors</strong> sont conçus pour
                répondre aux besoins de tous, quel que soit l'âge ou l'objectif. Nos
                programmes incluent :
              </p>
              <ul className="list-disc list-inside mb-4">
                <li>Des cours pour enfants de 6 à 12 ans ;</li>
                <li>Des sessions pour adolescents de 13 à 17 ans ;</li>
                <li>Des formations pour adultes, de 18 à 99 ans ;</li>
                <li>
                  Des cours spécialisés pour les professionnels et les entrepreneurs ;
                </li>
                <li>
                  Des ateliers pour les enseignants souhaitant approfondir leurs
                  compétences pédagogiques.
                </li>
              </ul>
            </div>
          </details>
          
          <details className="bg-white shadow-md rounded-lg">
            <summary className="px-4 py-3 font-semibold cursor-pointer">
              Quels sont les avantages d'apprendre le français avec Dubai French Tutors ?
            </summary>
            <div className="px-4 py-3">
              <p className="mb-4">
                En suivant nos cours, vous ne vous limitez pas à l'apprentissage d'une
                langue. Vous ouvrez la porte à un monde de nouvelles possibilités :
              </p>
              <ul className="list-disc list-inside mb-4">
                <li>
                  Voyager à travers le monde et communiquer avec une vaste communauté
                  francophone ;
                </li>
                <li>
                  Accéder à l'université de vos rêves dans un pays francophone ;
                </li>
                <li>
                  Saisir des opportunités d'emploi à l'international grâce à vos
                  compétences en français ;
                </li>
                <li>
                  Développer vos affaires en concluant des partenariats avec des
                  entreprises francophones ;
                </li>
                <li>
                  Rejoindre une communauté de personnes partageant les mêmes idées,
                  enrichissant ainsi vos relations personnelles et professionnelles.
                </li>
              </ul>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
};
