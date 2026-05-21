import PageWrapper from '../components/PageWrapper';
import Hero from '../components/Hero';
import AboutContent from '../components/About';
import Extracurricular from '../components/Extracurricular';

export default function Home() {
  return (
    <PageWrapper>
      <Hero />
      <div className="container mx-auto px-6 py-20 space-y-16">
        <AboutContent />
        <Extracurricular />
      </div>
    </PageWrapper>
  );
}
