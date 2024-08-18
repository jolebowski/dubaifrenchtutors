import { getDictionary } from '@/getDictionary';
import { Locale } from '@/i18n.config';
import Advantages from './components/Advantages';
import Contact from './components/Contact';
import DubaiFrenchClasses from './components/DubaiFrenchClasses';
import FrenchCoursesIntro from './components/FrenchCoursesIntro';

const Home = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const { page } = await getDictionary(lang);

  return (
    <>
      <div className="container mx-auto">
        <main className="max-w-7xl mx-auto p-4">
          <FrenchCoursesIntro page={page} />
          <DubaiFrenchClasses page={page} />
          <Advantages />
          <Contact />
        </main>
      </div>
    </>
  );
};

export default Home;
