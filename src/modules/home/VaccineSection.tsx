import { formattingNumber } from '@/lib/formatting';
import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import { format, parseISO } from 'date-fns';
import useSWR from 'swr';

type Props = {
  title?: string;
  count?: string;
  percentage?: string;
};

const GridBox = ({ title, count, percentage }: Props): JSX.Element => {
  return (
    <Box p={5} shadow="md" textAlign="center" borderWidth="1px" borderRadius="lg">
      <Text fontSize="lg">{title}</Text>
      <Heading fontSize="4xl" fontFamily="mono">
        {count}
      </Heading>
      <Text fontSize="md">{percentage}</Text>
    </Box>
  );
};

const VaccineSection = (): JSX.Element => {
  const url = 'https://cekdiri.id/vaksinasi/';
  const fetcher = (url: string) => fetch(url).then(r => r.json());
  const { data, error } = useSWR(url, fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  const latestData = data.monitoring[data.monitoring.length - 1];

  return (
    <>
      <Heading as="h4" size="md" my="1rem">
        Progress Vaksinasi COVID-19 di Indonesia
      </Heading>
      <Box w="100%" p={4} borderWidth="1px" borderRadius="lg">
        <SimpleGrid spacing={5} columns={[1, 2]}>
          <GridBox
            title="Vaksinasi Dosis 1"
            count={formattingNumber(latestData.vaksinasi1)}
            percentage={latestData.cakupan.vaksinasi1}
          />
          <GridBox
            title="Vaksinasi Dosis 2"
            count={formattingNumber(latestData.vaksinasi2)}
            percentage={latestData.cakupan.vaksinasi2}
          />
        </SimpleGrid>
      </Box>
      <Heading as="h6" size="xs" marginTop="1rem">
        Pembaruan Terakhir : {format(parseISO(data.last_updated), 'dd-MM-yyyy hh:mm OOOO')}
      </Heading>
    </>
  );
};

export default VaccineSection;
