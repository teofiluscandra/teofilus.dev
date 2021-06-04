import { Box, HStack, Link, Stack } from '@chakra-ui/react';
import * as React from 'react';
import { FaDotCircle } from 'react-icons/fa';

export interface BannerProps {
  text: string;
}

const Banner: React.FC<BannerProps> = ({ text }: BannerProps) => {
  return (
    <Box as="section">
      <Stack
        direction={{ base: 'column', sm: 'row' }}
        py="3"
        px={{ base: '3', md: '6', lg: '8' }}
        color="white"
        bg={'primary'}
        justifyContent="center"
        alignItems="center"
      >
        <HStack spacing="1">
          <FaDotCircle />
          <Link
            flex={1}
            py={2}
            px={10}
            fontSize={'md'}
            rounded={'full'}
            bg={'rgba(0,0,0,.5)'}
            color={'white'}
            isExternal
            _hover={{
              bg: 'secondary',
              color: 'black',
            }}
            _focus={{
              bg: 'secondary',
              color: 'black',
            }}
          >
            Live Streaming Click Here
          </Link>
        </HStack>
      </Stack>
    </Box>
  );
};

export default Banner;
