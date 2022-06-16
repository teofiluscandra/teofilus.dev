import { PROFILE_PIC } from '@/lib/constants';
import { Avatar, Box, Flex, HStack, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

interface NavigationItem {
  name: string;
  href: string;
  external?: boolean;
}

const links: NavigationItem[] = [
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Projects',
    href: '/projects',
  },
  {
    name: 'Activity',
    href: 'https://works.teofilus.dev',
    external: true,
  },
  {
    name: 'Bookmarks',
    href: 'https://www.instapaper.com/p/teofilus',
    external: true,
  },
];

export function Nav() {
  return (
    <Box width="100%" position="fixed" bottom={0} left={0} right={0} display="flex" justifyContent="center">
      <Flex
        as="nav"
        w="100%"
        boxShadow="dark-lg"
        bg="gray.200"
        rounded="xl"
        py={2}
        px={4}
        my={10}
        maxWidth="xl"
        alignItems="center"
        justifyContent="space-between"
        bgGradient="linear(to-r, red.500, yellow.500)"
        _hover={{
          bgGradient: 'linear(to-l, red.500, yellow.500)',
        }}
      >
        <NextLink href="/" passHref>
          <Link>
            <Avatar size={'sm'} src={PROFILE_PIC} />
          </Link>
        </NextLink>
        <HStack>
          {links.map(link => (
            <NextLink href={link.href} key={link.name} passHref>
              <Link color={'blackAlpha.800'} isExternal={link.external}>
                {link.name}
              </Link>
            </NextLink>
          ))}
        </HStack>
      </Flex>
    </Box>
  );
}
