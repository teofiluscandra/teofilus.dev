import { Box, Container, Stack, Text, useColorModeValue } from '@chakra-ui/react';

const Footer = (): JSX.Element => {
  return (
    <Box bg={useColorModeValue('gray.50', 'gray.900')} color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Text>© 2021 teofilus.dev</Text>
        {/* <Stack direction={'row'} spacing={6}>
          <SocialButton label={'Twitter'} href={URL_TWITTER}>
            <FaTwitter />
          </SocialButton>
          <SocialButton label={'Github'} href={URL_GITHUB}>
            <FaGithub />
          </SocialButton>
          <SocialButton label={'Instagram'} href={URL_IG}>
            <FaInstagram />
          </SocialButton>
        </Stack> */}
        <Text>Wallet BEP20(BSC): 0xb1a70046e254daa7a452177ddd53046bcfc3721a</Text>
      </Container>
    </Box>
  );
};

export default Footer;
