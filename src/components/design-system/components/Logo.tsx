import { URL_PHOTO } from '@/lib/constants';
import { Box, FlexProps, Image } from '@chakra-ui/react';

const Logo = (props?: FlexProps): JSX.Element => {
  return (
    <Box {...props}>
      <Image src={URL_PHOTO} alt="Logo Web Teofilus.dev" />
    </Box>
  );
};

export default Logo;
