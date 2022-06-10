import { ButtonGroup, Container, IconButton, Stack, Text } from '@chakra-ui/react';
import { FaGithub, FaMastodon, FaTwitter } from 'react-icons/fa';

const Footer = (): JSX.Element => {
  return (
    <Container as="footer" role="contentinfo" py={{ base: '12', md: '16' }} mb="30">
      <Stack spacing={1} align="center">
        <Text fontSize="sm" color="subtle">
          Made using Next.js and Chakra UI
        </Text>
        <Text fontSize="sm" color="subtle">
          &copy; {new Date().getFullYear()} Teofilus Candra
        </Text>
        <Stack direction="row" align="center">
          <ButtonGroup variant="ghost">
            <IconButton
              as="a"
              href="https://github.com/teofiluscandra"
              aria-label="GitHub"
              target="_blank"
              icon={<FaGithub fontSize="1.25rem" />}
            />
            <IconButton
              as="a"
              href="https://twitter.com/_teofiluscandra"
              aria-label="Twitter"
              target="_blank"
              icon={<FaTwitter fontSize="1.25rem" />}
            />
            <IconButton
              as="a"
              href="https://mastodon.social/@teofilus"
              aria-label="LinkedIn"
              target="_blank"
              icon={<FaMastodon fontSize="1.25rem" />}
            />
          </ButtonGroup>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Footer;
