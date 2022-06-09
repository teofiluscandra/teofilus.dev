import { Flex, FlexProps } from '@chakra-ui/react';
import Head from 'next/head';
import { ReactNode } from 'react';
import Footer from './Footer';

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
      <Flex maxWidth="1150px" w="100%" direction="column" mx="auto" px={5} pt={'10'} pb={5} minHeight="90vh" {...props}>
        {children}
      </Flex>
      <Footer />
    </>
  );
};

export default Layout;
