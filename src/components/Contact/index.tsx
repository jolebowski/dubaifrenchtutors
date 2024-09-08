'use client';

const Contact = () => {
  return (
    <section className="flex justify-center items-center min-h-screen mb-8 px-4 md:px-0">
      <div className="w-full max-w-7xl bg-white p-6 md:p-16 rounded-3xl shadow-md md:flex">
        <div className="md:w-1/2 md:pr-8 flex flex-col justify-center items-center md:items-start mb-8 md:mb-0">
          <h2 className="text-2xl font-semibold mb-4 text-center md:text-left">
            Contactez-nous
          </h2>
          <p className="text-gray-700 text-lg md:text-2xl mb-8 text-center md:text-left">
            N'hésitez pas à nous contacter pour toute question ou commentaire.
          </p>
        </div>
        <div className="md:w-1/2 md:pl-8">
          <form>
            <div className="mb-4 md:mb-6 relative">
              <input
                className="appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                id="nom"
                type="text"
                placeholder="Votre nom"
              />
              <div className="h-0.5 w-full absolute bottom-0 bg-gray-300"></div>
            </div>
            <div className="mb-4 md:mb-6 relative">
              <input
                className="appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                id="mail"
                type="email"
                placeholder="example@example.com"
              />
              <div className="h-0.5 w-full absolute bottom-0 bg-gray-300"></div>
            </div>
            <div className="mb-4 md:mb-6 relative">
              <input
                className="appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                id="telephone"
                type="tel"
                placeholder="123-456-7890"
              />
              <div className="h-0.5 w-full absolute bottom-0 bg-gray-300"></div>
            </div>
            <div className="mb-4 md:mb-6 relative">
              <textarea
                className="appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none resize-none"
                id="message"
                placeholder="Votre message"
                rows={4}
              ></textarea>
              <div className="h-0.5 w-full absolute bottom-0 bg-gray-300"></div>
            </div>
            <div className="text-center md:text-right">
              <button
                className="text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline w-full md:w-auto"
                type="button"
              >
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
