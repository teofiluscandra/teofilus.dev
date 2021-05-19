import { Heading } from '@chakra-ui/react';

const Hero = ({ title }: { title: string }): JSX.Element => <Heading>{title}</Heading>;
export default Hero;

Hero.defaultProps = {
  title: 'Teofilus Candra',
};
