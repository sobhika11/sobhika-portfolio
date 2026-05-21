import PageWrapper from '../components/PageWrapper';
import Skills from '../components/Skills';
import CompetitiveStats from '../components/CompetitiveStats';

export default function About() {
  return (
    <PageWrapper>
      <div className="container mx-auto px-6 space-y-16 py-20 mt-16">
        <Skills />
        <CompetitiveStats />
      </div>
    </PageWrapper>
  );
}
