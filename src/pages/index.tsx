import { Logo } from 'components/design-system';
import { Layout } from 'components/layout';
import { Hero, LinkSection, VaccineSection } from 'modules/home';

// data structure
const data = {
  stayupdate: {
    title: 'Stay Update',
    contents: [
      {
        category: 'blockchain',
        title: '/kripto',
        desc: 'check crypto prices regularly',
        link: '/kripto',
      },
    ],
  },
  announcement: {
    title: 'Public Announcement',
    contents: [
      {
        category: 'wedding',
        title: '/pawarta',
        desc: 'wedding announcement',
        link: '/pawarta',
      },
    ],
  },
};

const Index = (): JSX.Element => {
  return (
    <Layout title="👋 Hello">
      <Logo boxSize="50px" mb="10px" />
      <Hero />
      <VaccineSection />
      {/* Stay Update */}
      <LinkSection title={data.stayupdate.title} contents={data.stayupdate.contents} />
      {/* Public Announcement */}
      <LinkSection title={data.announcement.title} contents={data.announcement.contents} />
    </Layout>
  );
};

export default Index;
