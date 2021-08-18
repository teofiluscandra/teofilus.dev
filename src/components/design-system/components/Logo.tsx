import { URL_PHOTO } from '@/lib/constants';
import { Box, FlexProps, Img } from '@chakra-ui/react';
import LazyLoad from 'react-lazyload';

const Logo = (props?: FlexProps): JSX.Element => {
  return (
    <Box {...props}>
      <LazyLoad height={50}>
        <Img src={URL_PHOTO} alt="Logo Web Teofilus.dev" />
      </LazyLoad>
    </Box>
  );
};

export default Logo;
