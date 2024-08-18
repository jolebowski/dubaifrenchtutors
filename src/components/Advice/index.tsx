'use client';

export const Advice = () => {
  return (
    <section
      id="section3"
      className="flex justify-center mb-36 items-center min-h-screen"
    >
      <div className="w-full md:w-[90%] lg:w-[85%] xl:w-[80%]">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          Avis
        </h2>
        <div className="flex space-x-8 overflow-x-auto pb-4">
          {/* Avis 1 */}
          <div className="bg-white p-10 rounded-2xl shadow-lg flex-shrink-0 w-96 flex items-start space-x-8">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Profil"
              className="w-28 h-28 rounded-full border-4 border-gray-300"
            />
            <div>
              <p className="font-bold text-3xl">John Doe</p>
              <p className="text-gray-600 mt-4 text-xl">
                "Excellent cours, j'ai beaucoup appris!"
              </p>
            </div>
          </div>
          {/* Avis 2 */}
          <div className="bg-white p-10 rounded-2xl shadow-lg flex-shrink-0 w-96 flex items-start space-x-8">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Profil"
              className="w-28 h-28 rounded-full border-4 border-gray-300"
            />
            <div>
              <p className="font-bold text-3xl">Jane Smith</p>
              <p className="text-gray-600 mt-4 text-xl">
                "Les professeurs sont très compétents et attentifs."
              </p>
            </div>
          </div>
          {/* Avis 3 */}
          <div className="bg-white p-10 rounded-2xl shadow-lg flex-shrink-0 w-96 flex items-start space-x-8">
            <img
              src="https://randomuser.me/api/portraits/men/45.jpg"
              alt="Profil"
              className="w-28 h-28 rounded-full border-4 border-gray-300"
            />
            <div>
              <p className="font-bold text-3xl">Alex Brown</p>
              <p className="text-gray-600 mt-4 text-xl">
                "Je recommande vivement ces cours, ils m'ont vraiment aidé à
                progresser."
              </p>
            </div>
          </div>
          {/* Avis 4 */}
          <div className="bg-white p-10 rounded-2xl shadow-lg flex-shrink-0 w-96 flex items-start space-x-8">
            <img
              src="https://randomuser.me/api/portraits/women/65.jpg"
              alt="Profil"
              className="w-28 h-28 rounded-full border-4 border-gray-300"
            />
            <div>
              <p className="font-bold text-3xl">Emily Davis</p>
              <p className="text-gray-600 mt-4 text-xl">
                "Une expérience d'apprentissage agréable et efficace. Les cours
                sont bien structurés et adaptés à mes besoins."
              </p>
            </div>
          </div>
          {/* Avis 5 */}
          <div className="bg-white p-10 rounded-2xl shadow-lg flex-shrink-0 w-96 flex items-start space-x-8">
            <img
              src="https://randomuser.me/api/portraits/men/46.jpg"
              alt="Profil"
              className="w-28 h-28 rounded-full border-4 border-gray-300"
            />
            <div>
              <p className="font-bold text-3xl">Michael Johnson</p>
              <p className="text-gray-600 mt-4 text-xl">
                "Un service client exceptionnel et des cours de qualité."
              </p>
            </div>
          </div>
          {/* Avis 6 */}
          <div className="bg-white p-10 rounded-2xl shadow-lg flex-shrink-0 w-96 flex items-start space-x-8">
            <img
              src="https://randomuser.me/api/portraits/women/66.jpg"
              alt="Profil"
              className="w-28 h-28 rounded-full border-4 border-gray-300"
            />
            <div>
              <p className="font-bold text-3xl">Sophie Lee</p>
              <p className="text-gray-600 mt-4 text-xl">
                "Les cours sont très interactifs et bien organisés."
              </p>
            </div>
          </div>
          {/* Avis 7 */}
          <div className="bg-white p-10 rounded-2xl shadow-lg flex-shrink-0 w-96 flex items-start space-x-8">
            <img
              src="https://randomuser.me/api/portraits/men/47.jpg"
              alt="Profil"
              className="w-28 h-28 rounded-full border-4 border-gray-300"
            />
            <div>
              <p className="font-bold text-3xl">David Wilson</p>
              <p className="text-gray-600 mt-4 text-xl">
                "Un apprentissage adapté à mon emploi du temps."
              </p>
            </div>
          </div>
          {/* Avis 8 */}
          <div className="bg-white p-10 rounded-2xl shadow-lg flex-shrink-0 w-96 flex items-start space-x-8">
            <img
              src="https://randomuser.me/api/portraits/women/67.jpg"
              alt="Profil"
              className="w-28 h-28 rounded-full border-4 border-gray-300"
            />
            <div>
              <p className="font-bold text-3xl">Laura King</p>
              <p className="text-gray-600 mt-4 text-xl">
                "Je me sens beaucoup plus confiante en parlant français
                maintenant."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
