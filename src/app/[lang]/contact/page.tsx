import 'tailwindcss/tailwind.css';
import '../../../../styles/globals.css';

const ContactPage = () => {
  return (
    <main>
      <section className="container mx-auto">
        <h1 className="text-5xl font-semibold mt-16 mb-12 border-b border-gray-300 pb-12">
          Contact
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Colonne de gauche avec du texte et une icône de téléphone */}
          <div>
            <div className="flex items-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 1C6.48 1 2 5.48 2 11v2a9 9 0 009 9 9 9 0 009-9v-2a9 9 0 00-9-9zM12 7v4m0 6h.01"
                />
              </svg>
              <p className="text-lg">Téléphone : +123456789</p>
            </div>
            <p className="text-lg">
              Votre texte à gauche va ici. Vous pouvez ajouter du contenu
              supplémentaire en fonction de vos besoins.
            </p>
          </div>

          {/* Colonne de droite avec le formulaire */}
          <div>
            <form>
              <div className="mb-4">
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg py-2 px-3 text-lg focus:outline-none focus:border-blue-500"
                  placeholder="Nom"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-lg py-2 px-3 text-lg focus:outline-none focus:border-blue-500"
                  placeholder="Email"
                />
              </div>
              <div className="mb-4">
                <input
                  type="tel"
                  className="w-full border border-gray-300 rounded-lg py-2 px-3 text-lg focus:outline-none focus:border-blue-500"
                  placeholder="Numéro de téléphone"
                />
              </div>
              <div className="mb-8">
                <button
                  type="submit"
                  className="text-white text-lg py-2 px-4 rounded-lg"
                >
                  Envoyer
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
