import { Layout } from '@/components/layout';
import { request } from '@/lib/datocms';
import { Box, Container, Heading, Image, Link, SimpleGrid, Stack, StackDivider, Text } from '@chakra-ui/react';
import NextLink from 'next/link';

interface Project {
  id: string;
  title: string;
  description: string;
  link: string;
  image: {
    alt: string;
    url: string;
  };
}

interface ProjectPageProps {
  data: Project[];
}

const PROJECT_QUERY = ` query getAllProjects {
  allProjects(orderBy: _firstPublishedAt_ASC) {
    id
    title
    description
    link
    image {
      alt
      url
    }
  }
}
`;

export async function getStaticProps() {
  const data = await request({
    query: PROJECT_QUERY,
  });

  return {
    props: {
      data: data.allProjects,
    },
  };
}

const Projects = ({ data }: ProjectPageProps) => {
  return (
    <Layout title="My Projects">
      <Container maxW="3xl">
        <Heading as="h1" size="lg" mb="10">
          Selected Projects
        </Heading>
        <Stack as="ul" spacing="2rem" divider={<StackDivider w="70%" borderColor="gray" />}>
          {data.map((item: Project) => (
            <SimpleGrid key={item.id} as="li" columns={{ base: 1, md: 2 }} gap={{ base: '1', md: '4' }}>
              <Box>
                <Image src={item.image.url} alt={item.image.alt} borderRadius="10" objectFit="cover" />
              </Box>
              <Box>
                <Heading as="h5" size="md" color="secondary" my="2">
                  {item.title}
                </Heading>
                <Text mb="2" fontSize="sm">
                  {item.description}
                </Text>
                <NextLink href={item.link} passHref>
                  <Link color="secondary" isExternal>
                    Visit website →
                  </Link>
                </NextLink>
              </Box>
            </SimpleGrid>
          ))}
        </Stack>
      </Container>
    </Layout>
  );
};

export default Projects;
