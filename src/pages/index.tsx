import { Container } from '@chakra-ui/react';
import { Logo } from 'components/design-system';
import { Layout } from 'components/layout';
import { Hero, LinkSection } from '../modules/home';

// data structure
const data = {
  stayupdate: {
    title: 'Projects',
    contents: [
      {
        category: 'blockchain',
        title: '/kripto',
        desc: 'check crypto prices regularly',
        link: '/kripto',
      },
      {
        category: 'web',
        title: 'Lapak Sawiran',
        desc: 'A cooperative marketplace.',
        link: 'https://lapaksawiran.com',
        external: true,
      },
    ],
    detail: {
      title: 'View all projects →',
      href: '/work',
    },
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
      <Container maxW="2xl" py="10vh">
        <Logo boxSize="50px" mb="10px" />
        <Hero />
        {/* Stay Update */}
        <LinkSection
          title={data.stayupdate.title}
          contents={data.stayupdate.contents}
          detail={data.stayupdate.detail}
        />
        {/* Public Announcement */}
        <LinkSection title={data.announcement.title} contents={data.announcement.contents} />
      </Container>
    </Layout>
  );
};

export default Index;
