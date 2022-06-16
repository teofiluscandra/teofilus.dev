import { Box, Heading, Stack, Text } from '@chakra-ui/react';

const Hero = ({ title, subtitle }: { title: string; subtitle: string }): JSX.Element => (
  <Box py="3vh">
    <Stack spacing={1}>
      <Heading as="h1" size="xl">
        {title}
      </Heading>
      <Text size="sm" as="i">
        {subtitle}
      </Text>
    </Stack>
  </Box>
);
export default Hero;

Hero.defaultProps = {
  title: 'Teofilus Candra',
  subtitle: 'Perekayasa Perangkat Lunak (Software Developer)',
};
