import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Box, Flex, Link, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import React, { ReactNode } from 'react';

const Logo = () => {
  return (
    <Box>
      <Text fontSize="lg" fontWeight="bold">
        TC
      </Text>
    </Box>
  );
};

interface MenuItemProps {
  children?: ReactNode;
  isLast?: boolean;
  to?: string;
}

const MenuItem = ({ children, isLast, to = '/', ...rest }: MenuItemProps) => {
  return (
    <Text mb={{ base: isLast ? 0 : 8, sm: 0 }} mr={{ base: 0, sm: isLast ? 0 : 8 }} display="block" {...rest}>
      <NextLink href={to} passHref>
        <Link>{children}</Link>
      </NextLink>
    </Text>
  );
};

const Header = (): JSX.Element => {
  const [show, setShow] = React.useState(false);
  const toggleMenu = () => setShow(!show);

  return (
    <Flex as="nav" align="center" justify="space-between" wrap="wrap" w="100%" mb={8} p={8}>
      <Flex align="center">
        <Logo />
      </Flex>

      <Box display={{ base: 'block', md: 'none' }} onClick={toggleMenu}>
        {show ? <CloseIcon /> : <HamburgerIcon />}
      </Box>

      <Box display={{ base: show ? 'block' : 'none', md: 'block' }} flexBasis={{ base: '100%', md: 'auto' }}>
        <Flex
          align="center"
          justify={['center', 'space-between', 'flex-end', 'flex-end']}
          direction={['column', 'row', 'row', 'row']}
          pt={[4, 4, 0, 0]}
        >
          <MenuItem to="/">Home</MenuItem>
          <MenuItem to="/how">How It works </MenuItem>
          <MenuItem to="/faetures">Features </MenuItem>
          <MenuItem to="/pricing" isLast>
            Pricing{' '}
          </MenuItem>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Header;
