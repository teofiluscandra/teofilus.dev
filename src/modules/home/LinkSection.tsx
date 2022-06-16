import { Badge, Box, Flex, Heading, Link, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import NextLink from 'next/link';

type Props = {
  category?: string;
  title?: string;
  desc?: string;
  link: string;
  external?: boolean;
};

type SectionProps = {
  title: string;
  contents: Props[];
  detail?: {
    title: string;
    href: string;
  };
};

const GridBox = ({ category, title, desc, link, external }: Props): JSX.Element => {
  return (
    <NextLink href={link} passHref>
      <Box
        as="a"
        target={external ? '_blank' : '_self'}
        _hover={{ backgroundColor: 'primary' }}
        p="3"
        shadow="md"
        textAlign="center"
        borderWidth="1px"
        borderRadius="lg"
      >
        <Stack spacing={1} align="start">
          <Badge variant="outline" colorScheme="yellow">
            {category}
          </Badge>
          <Heading fontSize="4xl" fontFamily="mono">
            {title}
          </Heading>
          <Text fontSize="md">{desc}</Text>
        </Stack>
      </Box>
    </NextLink>
  );
};

const LinkSection = ({ title, contents, detail }: SectionProps): JSX.Element => {
  return (
    <Stack as="section" py={2} spacing={4}>
      <Heading as="h4" size="md">
        {title}
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: '2', md: '4' }}>
        {contents.map((content, index) => (
          <GridBox
            key={index}
            link={content.link}
            title={content.title}
            category={content.category}
            desc={content.desc}
            external={content.external}
          />
        ))}
      </SimpleGrid>
      <Flex justifyContent="flex-end" mt="2">
        <NextLink href={detail?.href ?? '#'} passHref>
          <Link>{detail?.title}</Link>
        </NextLink>
      </Flex>
    </Stack>
  );
};

export default LinkSection;
