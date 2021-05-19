import { formattingNumber } from '@/lib/formatting';
import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import { format, parseISO } from 'date-fns';
import useSWR from 'swr';

type Props = {
  title?: string;
  count?: string;
};

const CountBox = ({ title, count }: Props): JSX.Element => {
  return (
    <Box p={5} shadow="md" textAlign="center" borderWidth="1px" borderRadius="lg">
      <Heading fontSize="4xl" fontFamily="mono">
        {count}
      </Heading>
      <Text fontSize="lg">{title}</Text>
    </Box>
  );
};

const CassesSection = (): JSX.Element => {
  const url = 'https://covid19.mathdro.id/api/countries/ID';
  const fetcher = (url: string) => fetch(url).then(r => r.json());
  const { data, error } = useSWR(url, fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <>
      <Heading as="h4" size="md" my="1rem">
        Jumlah kasus COVID-19 di Indonesia
      </Heading>
      <Box w="100%" p={4} borderWidth="1px" borderRadius="lg">
        <SimpleGrid spacing={5} columns={[1, 2]}>
          <CountBox title="Terkonfirmasi" count={formattingNumber(data.confirmed.value)} />
          <CountBox
            title="Dalam Perawatan"
            count={formattingNumber(
              (
                parseInt(data.confirmed.value) -
                (parseInt(data.recovered.value) + parseInt(data.deaths.value))
              ).toString()
            )}
          />
          <CountBox title="Sembuh" count={formattingNumber(data.recovered.value)} />
          <CountBox title="Meninggal" count={formattingNumber(data.deaths.value)} />
        </SimpleGrid>
      </Box>
      <Heading as="h6" size="xs" marginTop="1rem">
        Pembaruan Terakhir : {format(parseISO(data.lastUpdate), 'dd-MM-yyyy hh:mm OOOO')}
      </Heading>
    </>
  );
};

export default CassesSection;
