'use client';

const Footer = () => {
  return (
    <footer className="border-t pt-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="mb-8 sm:mb-0">
          <h3 className="text-3xl sm:text-3xl font-semibold mb-4">
            Liens utiles
          </h3>
          <ul className="space-y-3">
            <li>
              <a href="#" className="text-blue-700 hover:underline text-xl">
                Accueil
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-700 hover:underline text-xl">
                Cours en ligne
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-700 hover:underline text-xl">
                À propos de nous
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-700 hover:underline text-xl">
                À propos de nous
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-700 hover:underline text-xl">
                À propos de nous
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-700 hover:underline text-xl">
                À propos de nous
              </a>
            </li>
          </ul>
          <p className="text-sm max-lines-2 mt-3">
            Description de votre entreprise ici. Elle peut être assez longue
            pour occuper plus dune ligne, mais elle sera coupée après deux
            lignes.
          </p>
        </div>
        <div className="mb-8 sm:mb-0">
          <h3 className="text-3xl sm:text-3xl font-semibold mb-4">
            Ressources
          </h3>
          <ul className="space-y-3">
            <li>
              <a href="#" className="text-blue-700 hover:underline text-xl">
                Les meilleurs cours danglais pour enfants à Kiev
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-700 hover:underline text-xl">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-700 hover:underline text-xl">
                Contactez-nous
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-700 hover:underline text-xl">
                Contactez-nous
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-700 hover:underline text-xl">
                Contactez-nous
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-3xl sm:text-3xl font-semibold mb-4">
            Contactez-nous
          </h3>
          <ul className="space-y-3">
            <li>
              <a
                href="tel:+123456789"
                className="text-blue-700 hover:underline"
              >
                123-456-789
              </a>
            </li>
            <li>
              <a
                href="mailto:info@example.com"
                className="text-blue-700 hover:underline"
              >
                info@example.com
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-700 hover:underline text-xl">
                Adresse
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-700 hover:underline text-xl">
                Adresse
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-700 hover:underline text-xl">
                Adresse
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className=" p-6 sm:p-8 text-center mt-12">
        <p className="text-gray-600 text-lg">
          &copy; 2023 Mon Entreprise. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
