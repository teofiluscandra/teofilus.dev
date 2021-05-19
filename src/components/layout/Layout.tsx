import { DarkModeSwitch } from '@/components/design-system';
import { Flex, FlexProps } from '@chakra-ui/react';
import Head from 'next/head';
import { ReactNode } from 'react';
import Footer from './Footer';

type Props = {
  children?: ReactNode;
  title: string;
  rest?: FlexProps;
};

const Layout = ({ children, title, ...rest }: Props): JSX.Element => {
  return (
    <>
      <Head>{title}</Head>
      <Flex maxWidth="1150px" w="100%" direction="column" mx="auto" px={5} pt={'20'} pb={5} minHeight="90vh" {...rest}>
        {children}
      </Flex>
      <DarkModeSwitch />
      <Footer />
    </>
  );
};

export default Layout;
