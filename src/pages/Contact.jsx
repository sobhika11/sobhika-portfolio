import PageWrapper from '../components/PageWrapper';
import ContactContent from '../components/Contact';

export default function Contact() {
  return (
    <PageWrapper>
      <div className="container mx-auto px-6 py-20 mt-16">
        <ContactContent />
      </div>
    </PageWrapper>
  );
}
