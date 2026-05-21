import PageWrapper from '../components/PageWrapper';
import ProjectsContent from '../components/Projects';

export default function Projects() {
  return (
    <PageWrapper>
      <div className="container mx-auto px-6 py-20 mt-16">
        <ProjectsContent />
      </div>
    </PageWrapper>
  );
}
