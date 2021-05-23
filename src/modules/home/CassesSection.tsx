import fetch from '@/lib/fetch';
import { formatNumber } from '@/lib/formatting';
import { Box, Heading, SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import { format, parseISO } from 'date-fns';
import { useQuery } from 'react-query';

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

const URL = `https://covid19.mathdro.id/api/countries/ID`;

const CassesSection = (): JSX.Element => {
  const { data, isError, isLoading, isFetching, isSuccess } = useQuery(['casses'], async () => await fetch(URL));

  return (
    <>
      <Heading as="h4" size="md" my="1rem">
        Jumlah kasus COVID-19 di Indonesia
      </Heading>

      <Box w="100%" p={4} borderWidth="1px" borderRadius="lg">
        {isError && <Text>Something wrong ...</Text>}
        {isLoading || (isFetching && <Spinner color="secondary" />)}
        {isSuccess && (
          <SimpleGrid spacing={5} columns={[1, 2]}>
            <CountBox title="Terkonfirmasi" count={formatNumber(data.confirmed.value)} />
            <CountBox
              title="Dalam Perawatan"
              count={formatNumber(
                parseInt(data.confirmed.value) - (parseInt(data.recovered.value) + parseInt(data.deaths.value))
              )}
            />
            <CountBox title="Sembuh" count={formatNumber(data.recovered.value)} />
            <CountBox title="Meninggal" count={formatNumber(data.deaths.value)} />
          </SimpleGrid>
        )}
      </Box>
      {isSuccess && (
        <Heading as="h6" size="xs" marginTop="1rem">
          Pembaruan Terakhir : {format(parseISO(data?.lastUpdate), 'dd-MM-yyyy hh:mm OOOO')}
        </Heading>
      )}
    </>
  );
};

export default CassesSection;
