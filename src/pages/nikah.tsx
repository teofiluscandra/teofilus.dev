import Layout from '@/components/layout/Layout';
import { autoplayPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { Box, Heading, Img, Link, Stack, StackDivider, Text } from '@chakra-ui/react';
import { Banner } from 'components/design-system';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import dynamic from 'next/dynamic';

const Carousel = dynamic(() => import('@brainhubeu/react-carousel'), {
  ssr: false,
});
interface Props {
  title?: string;
  image?: string;
}

const Nikah: NextPage<Props> = ({ title, image }: Props) => {
  return (
    <>
      <NextSeo
        title="Pawiwahan Yunita & Teofilus - 3 Juli 2021"
        description="Nuwun wiyosipun manawi Gusti Ingkang Maha Agung amarengaken saha paring kalodhangan ing samudayanipun, kula sanget angajeng-ajeng rawuh panjenengan ing syukuran tuwin pawiwahan dhauping sri penganten anak kula."
        openGraph={{
          url: 'https://teofilus.dev/nikah',
          title: 'Pawiwahan Yunita & Teofilus - 3 Juli 2021',
          description:
            'Nuwun wiyosipun manawi Gusti Ingkang Maha Agung amarengaken saha paring kalodhangan ing samudayanipun, kula sanget angajeng-ajeng rawuh panjenengan ing syukuran tuwin pawiwahan dhauping sri penganten anak kula.',
          site_name: 'teofilus.dev',
          images: [
            {
              url: 'https://teofilus.dev/static/icon-web-nikah.png',
              width: 500,
              height: 500,
              alt: 'Foto Prewed',
            },
          ],
        }}
      />
      <Banner />
      <Layout title="💒 Pawiwahan Yunita & Teofilus" maxW={'2xl'}>
        <Stack spacing={8} w="100%" align="center">
          <Heading
            as="h1"
            fontSize={['2rem', '2rem', '2.3rem', '2.6rem']}
            lineHeight="1.4"
            fontWeight="bold"
            textAlign="center"
          >
            {title}
          </Heading>

          <Box>
            <Img src={image} size="100%" rounded="1rem" loading="eager" tabIndex={0} />
            <Text fontSize="xs" mt={2} textAlign="center" opacity="0.6">
              Puri Lanang - Sibang Kaja
            </Text>
          </Box>

          <Box textAlign={'center'}>
            <Text fontSize="md">
              Kawilujengan saha kabagyan mugi tansah kasalira ing panjenengan sami. Nuwun wiyosipun manawi Gusti Ingkang
              Maha Agung amarengaken saha paring kalodhangan ing samudayanipun, kula sanget angajeng-ajeng rawuh
              panjenengan ing syukuran tuwin pawiwahan dhauping sri penganten anak kula:
            </Text>
          </Box>

          <Stack px={8} spacing={{ base: 4, md: 6 }} align={'center'} direction={'column'}>
            <Box textAlign={'center'}>
              <Text
                fontStyle="italic"
                fontSize={{ base: '2xl', md: '3xl' }}
                textAlign={'center'}
                maxW={'3xl'}
                fontWeight="bold"
              >
                Yunita Hardiyanti Putri
              </Text>
              <Text fontSize={'sm'}>Putri saking Bapak Bambang Trihardjono & Ibu Putri Tjemagawati</Text>
            </Box>
            <Text>Kaliyan</Text>
            <Box textAlign={'center'}>
              <Text
                fontStyle="italic"
                fontSize={{ base: '2xl', md: '3xl' }}
                textAlign={'center'}
                maxW={'3xl'}
                fontWeight="bold"
              >
                Teofilus Candra
              </Text>
              <Text fontSize={'sm'}>Putra saking Bapak Tony Yudiharto & Ibu Ludiya Darmiyati</Text>
            </Box>
          </Stack>

          <Box textAlign={'center'}>
            <Text fontSize="3xl" fontWeight="bold">
              Setu Kliwon, 03 Juli 2021
            </Text>
          </Box>

          <Stack
            align={'center'}
            justify={'center'}
            direction={'row'}
            divider={<StackDivider borderColor="gray.200" />}
            w="100%"
          >
            <Box textAlign={'center'} w={'50%'}>
              <Box mb={'1rem'}>
                <Text fontSize="xl" fontWeight="bold">
                  Dhaup Suci
                </Text>
                <Text>15.00 WIB</Text>
                <Text>Gereja Kristen Jawi Wetan</Text>
                <Text>Probolinggo</Text>
              </Box>
              <Link
                flex={1}
                py={1}
                px={10}
                fontSize={'md'}
                rounded={'full'}
                bg={'primary'}
                color={'white'}
                _hover={{
                  bg: 'secondary',
                  color: 'black',
                }}
                _focus={{
                  bg: 'secondary',
                  color: 'black',
                }}
                href="https://goo.gl/maps/sWB7wZ6TGnx1RTkJ6"
                isExternal
              >
                PETA
              </Link>
            </Box>

            <Box textAlign={'center'} w={'50%'}>
              <Box mb={'1rem'}>
                <Text fontSize="xl" fontWeight="bold">
                  Mangayu Bagya
                </Text>
                <Text>17.00 WIB - 20.00 WIB</Text>
                <Text>Garden City Resto</Text>
                <Text>Sebelah Terminal Bus - Probolinggo</Text>
              </Box>

              <Link
                flex={1}
                py={1}
                px={10}
                fontSize={'md'}
                rounded={'full'}
                bg={'primary'}
                color={'white'}
                _hover={{
                  bg: 'secondary',
                  color: 'black',
                }}
                _focus={{
                  bg: 'secondary',
                  color: 'black',
                }}
                href="https://goo.gl/maps/h7vz6yV49LvFQxo57"
                isExternal
              >
                PETA
              </Link>
            </Box>
          </Stack>

          <Box textAlign={'center'}>
            <Text fontSize="md">
              Wasana awit saking rawuh panjenengan, keparenga kula sagotrah angaturaken genging panuwun ingkang tanpa
              upami.
            </Text>
          </Box>

          <Stack spacing={2} align={'center'} direction={'column'}>
            <Text fontSize={'md'} textAlign={'center'}>
              Mulane wong lanang bakal ninggal bapa-biyunge lan rumaket marang bojone, sarta sakarone iku bakal dadi
              daging siji.
            </Text>
            <Text fontSize={'sm'} color={'gray.500'}>
              Purwaning Dumadi 2: 24
            </Text>
          </Stack>

          <Carousel
            plugins={[
              'infinite',
              {
                resolve: autoplayPlugin,
                options: {
                  interval: 2000,
                },
              },
            ]}
            animationSpeed={1000}
          >
            <img
              src={
                'https://firebasestorage.googleapis.com/v0/b/teofiluscandra-mws.appspot.com/o/banner-1.jpeg?alt=media&token=679020f5-a9be-4389-9ece-bbe69bc18de8'
              }
            />
            <img
              src={
                'https://firebasestorage.googleapis.com/v0/b/teofiluscandra-mws.appspot.com/o/banner-2.jpeg?alt=media&token=df0dd25f-5a7f-4ffb-b924-e785ac144fa2'
              }
            />
            <img
              src={
                'https://firebasestorage.googleapis.com/v0/b/teofiluscandra-mws.appspot.com/o/banner-3.jpeg?alt=media&token=8b1e0171-3522-4872-b70f-8ca0fb233238'
              }
            />
          </Carousel>
        </Stack>
      </Layout>
    </>
  );
};

Nikah.getInitialProps = () => {
  return {
    title: 'PAWIWAHAN',
    image:
      'https://firebasestorage.googleapis.com/v0/b/teofiluscandra-mws.appspot.com/o/pawiwahan-webbanner.jpeg?alt=media&token=55f0a1f3-70d9-41df-90a2-3283aca6e734',
  };
};

export default Nikah;
