import fetch from '@/lib/fetch';
import { formatNumber } from '@/lib/formatting';
import { Box, Heading, SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import { format, parseISO } from 'date-fns';
import { useQuery } from 'react-query';

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

const URL = 'https://cekdiri.id/vaksinasi/';

const VaccineSection = (): JSX.Element => {
  const { data, isError, isLoading, isFetching, isSuccess } = useQuery(['vaccine'], async () => await fetch(URL));

  const latestData = isSuccess ? data.monitoring[data.monitoring.length - 1] : undefined;

  return (
    <>
      <Heading as="h4" boxSize="md" my="1rem">
        COVID-19 Vaccination in Indonesia
      </Heading>
      <Box w="100%" p={4} borderWidth="1px" borderRadius="lg">
        {isError && <Text>Something wrong ...</Text>}
        {isLoading || (isFetching && <Spinner color="secondary" />)}
        {isSuccess && (
          <SimpleGrid spacing={5} columns={[1, 2]}>
            <GridBox
              title="First Dose"
              count={formatNumber(latestData.vaksinasi1)}
              percentage={latestData.cakupan.vaksinasi1}
            />
            <GridBox
              title="Second Dose"
              count={formatNumber(latestData.vaksinasi2)}
              percentage={latestData.cakupan.vaksinasi2}
            />
          </SimpleGrid>
        )}
      </Box>
      {isSuccess && (
        <Heading as="h6" boxSize="xs" marginTop="1rem">
          Last Update : {format(parseISO(data.last_updated), 'dd-MM-yyyy hh:mm OOOO')}
        </Heading>
      )}
    </>
  );
};

export default VaccineSection;
