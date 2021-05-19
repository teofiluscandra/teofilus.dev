import { Logo } from 'components/design-system';
import { Layout } from 'components/layout';
import { CassesSection, Hero, VaccineSection } from 'modules/home';

const Index = (): JSX.Element => {
  return (
    <Layout title="👋 Hello">
      <Logo boxSize="50px" mb="10px" />
      <Hero />
      <CassesSection />
      <VaccineSection />
    </Layout>
  );
};

export default Index;
