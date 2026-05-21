import PageWrapper from '../components/PageWrapper';
import ExperienceContent from '../components/Experience';
import Certifications from '../components/Certifications';

export default function Experience() {
  return (
    <PageWrapper>
      <div className="container mx-auto px-6 space-y-16 py-20 mt-16">
        <ExperienceContent />
        <Certifications />
      </div>
    </PageWrapper>
  );
}
