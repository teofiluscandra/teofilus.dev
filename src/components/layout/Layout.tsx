import { Flex, FlexProps } from '@chakra-ui/react';
import Head from 'next/head';
import { ReactNode } from 'react';
import Footer from './Footer';
import { Nav } from './Nav';

interface Props extends FlexProps {
  children?: ReactNode;
  title: string;
}

const Layout = ({ children, title, ...props }: Props): JSX.Element => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Flex maxWidth={title === 'Crypto Market' ? "1020" : "2xl"} w="100%" direction="column" mx="auto" px={5} pt={'10'} pb={5} minHeight="1vh" {...props}>
        {children}
        <Footer />
      </Flex>
      <Nav />
    </>
  );
};

export default Layout;
