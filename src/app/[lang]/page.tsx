import { getDictionary } from '@/getDictionary';
import { Locale } from '@/i18n.config';
import { Advice } from '@/src/components/Advice';
import Advantages from '@/src/components/Advantages';
import Contact from '@/src/components/Contact';
import DubaiFrenchClasses from '@/src/components/DubaiFrenchClasses';
import FrenchCoursesIntro from '@/src/components/FrenchCoursesIntro';
import { AboutSection } from '@/src/components/AboutSection';

const Home = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const { page } = await getDictionary(lang);

  return (
    <>
      <div className="container mx-auto">
        <main className="max-w-7xl mx-auto p-4">
          <FrenchCoursesIntro page={page} />
          <DubaiFrenchClasses page={page} />
          <Advantages />
          {/* <Advice /> */}
          <AboutSection />
          <Contact />
        </main>
      </div>
    </>
  );
};

export default Home;
