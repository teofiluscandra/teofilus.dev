import { Layout } from '@/components/layout';
import { request } from '@/lib/datocms';
import { Box, ChakraProps, Container, Heading, HeadingProps, Image, Link, Text } from '@chakra-ui/react';
import { MDXRemote } from 'next-mdx-remote';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote/dist/types';
import { serialize } from 'next-mdx-remote/serialize';

export interface AboutPageProps {
  data: {
    about: {
      heroImage: {
        title: string;
        url: string;
      };
    };
  };
  content: MDXRemoteSerializeResult;
}

const ABOUT_QUERY = `query getAbout {
    about {
      heroImage {
        title
        url
      }
      content
    }
}`;

const components = {
  h3: (props: HeadingProps) => <Heading as="h3" py="5" {...props} />,
  p: (props: ChakraProps) => <Text py="5" {...props} />,
  a: (props: ChakraProps) => <Link color="secondary" isExternal {...props} />,
  br: (props: ChakraProps) => <Box height="24px" {...props} />,
};

export async function getStaticProps() {
  const data = await request({
    query: ABOUT_QUERY,
  });

  const content = await serialize(data.about.content);

  return {
    props: {
      data,
      content,
    },
  };
}

const About = ({ data, content }: AboutPageProps) => {
  return (
    <Layout title="About Me">
      <Container>
        <Image src={data.about.heroImage.url} borderRadius="10" alt={data.about.heroImage.title} />
        <Box py="10">
          <MDXRemote {...content} components={components} />
        </Box>
      </Container>
    </Layout>
  );
};

export default About;
