import { BellIcon } from '@chakra-ui/icons';
import { Box, HStack, Stack, Text } from '@chakra-ui/react';
import * as React from 'react';

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
        <HStack direction="row" spacing="3">
          <Box as={BellIcon} fontSize="2xl" h="10" />
          <Text fontWeight="medium" marginEnd="2">
            {text}
          </Text>
        </HStack>
      </Stack>
    </Box>
  );
};

export default Banner;
