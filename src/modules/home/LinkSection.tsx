import { Badge, Box, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import Link from 'next/link';

type Props = {
  category?: string;
  title?: string;
  desc?: string;
  link: string;
};

type SectionProps = {
  title: string;
  contents: Props[];
};

const GridBox = ({ category, title, desc, link }: Props): JSX.Element => {
  return (
    <Link href={link}>
      <Box
        as="button"
        _hover={{ backgroundColor: 'primary' }}
        p="5"
        shadow="md"
        textAlign="center"
        borderWidth="1px"
        borderRadius="lg"
      >
        <Badge colorScheme="pink">{category}</Badge>
        <Heading fontSize="4xl" fontFamily="mono">
          {title}
        </Heading>
        <Text fontSize="md">{desc}</Text>
      </Box>
    </Link>
  );
};

const LinkSection = ({ title, contents }: SectionProps): JSX.Element => {
  return (
    <>
      <Heading as="h4" size="md" mb="1rem" mt="2rem">
        {title}
      </Heading>
      <Box w="100%" p={4} borderWidth="1px" borderRadius="lg">
        <SimpleGrid spacing={5} columns={[1, 2]}>
          {contents.map((content, index) => (
            <GridBox key={index} link={ content.link } title={ content.title } category={ content.category } desc={ content.desc } />
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default LinkSection;
