import 'tailwindcss/tailwind.css';
import '../../../../styles/globals.css';

const ContactPage = () => {
  return (
    <main className="px-4 sm:px-6 lg:px-8">
      <section className="container mx-auto max-w-7xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mt-8 sm:mt-12 md:mt-16 mb-6 sm:mb-8 md:mb-12 border-b border-gray-300 pb-6 sm:pb-8 md:pb-12">
          Contact
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="mb-8 lg:mb-0">
            <div className="flex items-center mb-4">
              <a
                href="https://wa.me/0646700715"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base sm:text-lg flex items-center hover:text-blue-500 transition-colors duration-300"
              >
                <span>WhatsApp : +0646700715</span>
                <svg
                  className="w-5 h-5 ml-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
            <p className="text-base sm:text-lg">
              Nous sommes là pour vous aider ! N'hésitez pas à nous contacter
              pour toute question ou demande d'information. Notre équipe se fera
              un plaisir de vous répondre dans les plus brefs délais.
            </p>
          </div>
          <div>
            <form>
              <div className="mb-4">
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg py-2 px-3 text-base sm:text-lg focus:outline-none focus:border-blue-500"
                  placeholder="Nom"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-lg py-2 px-3 text-base sm:text-lg focus:outline-none focus:border-blue-500"
                  placeholder="Email"
                />
              </div>
              <div className="mb-4">
                <input
                  type="tel"
                  className="w-full border border-gray-300 rounded-lg py-2 px-3 text-base sm:text-lg focus:outline-none focus:border-blue-500"
                  placeholder="Numéro de téléphone"
                />
              </div>
              <div className="mb-8">
                <button
                  type="submit"
                  className="w-full sm:w-auto text-white text-base sm:text-lg py-2 px-4 rounded-lg bg-blue-500 hover:bg-blue-600 transition-colors duration-300"
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
