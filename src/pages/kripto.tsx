import fetch from '@/lib/fetch';
import {
  Badge,
  Box,
  Button,
  ButtonGroup,
  Flex,
  Image,
  Spinner,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { Layout } from 'components/layout';
import { formatNumber } from 'lib/formatting';
import { useState } from 'react';
import { FaGasPump } from 'react-icons/fa';
import { useQuery } from 'react-query';

type Market = {
  id: string;
  symbol: string;
  name: string;
  image: string;
  market_cap_rank: number;
  current_price: number;
  price_change_percentage_24h: number;
  total_volume: number;
  market_cap: number;
};

const getMarkets = async (page: number) => {
  const URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${page}&sparkline=false`;
  return await fetch(URL);
};

const getGasFee = async () => {
  const URL = `https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=${process.env.API_KEY_ETHERSCAN}`;
  return await fetch(URL);
};

const Percentage = ({ percent }: { percent: number }): JSX.Element => {
  const formatPercent = Intl.NumberFormat('en-US', {
    style: 'percent',
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(percent / 100);
  return (
    <Text color={percent > 0 ? 'green.500' : 'red.500'} px="2" py="1" rounded="sm">
      {formatPercent}
    </Text>
  );
};

const Kripto = (): JSX.Element => {
  const [page, setPage] = useState(1);
  const nextPage = () => {
    setPage(prev => prev + 1);
  };
  const previousPage = () => {
    setPage(prev => prev - 1);
  };
  const { data, isError, isLoading, isFetching, isSuccess } = useQuery(
    ['crypto_markets', page],
    () => getMarkets(page),
    {
      refetchInterval: 3000,
    }
  );

  const gasFeeQuery = useQuery(['gas_fee', page], () => getGasFee());

  return (
    <Layout title="Crypto Market" fontFamily="mono">
      {isFetching && <Spinner color="secondary" position="fixed" top={10} right={10} />}
      <Box p={2} display="flex">
        <FaGasPump />
        <Box color="gray.500" fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase" ml="2">
          {gasFeeQuery.data?.result.ProposeGasPrice} Gwei &bull; Average
        </Box>
      </Box>
      <Table variant="simple" mb="5">
        <Thead>
          <Tr>
            <Th>Rank</Th>
            <Th>Coin</Th>
            <Th>Last Price</Th>
            <Th>24h % Change</Th>
            <Th isNumeric>Total Volume</Th>
            <Th isNumeric>Market Cap</Th>
          </Tr>
        </Thead>
        <Tbody>
          {isLoading && <Text>Loading ...</Text>}
          {(isError || gasFeeQuery.isError) && <Text>Please try again.</Text>}
          {isSuccess &&
            data?.map((market: Market) => (
              <Tr key={market.id}>
                <Td isNumeric>{market.market_cap_rank}</Td>
                <Td>
                  <Flex alignItems="center">
                    <Image src={market.image} boxSize="24px" ignoreFallback={true} />
                    <Text pl={2} fontWeight="bold" textTransform="capitalize">
                      {market.name}
                    </Text>
                    <Badge ml={3}>{market.symbol}</Badge>
                  </Flex>
                </Td>
                <Td>{formatNumber(market.current_price)}</Td>
                <Td>
                  <Percentage percent={market.price_change_percentage_24h} />
                </Td>
                <Td isNumeric>{formatNumber(market.total_volume)}</Td>
                <Td isNumeric>{formatNumber(market.market_cap)}</Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
      <Flex align="center" justify="flex-end">
        <ButtonGroup variant="outline">
          <Button onClick={previousPage} as="a" rel="prev" disabled={page === 1 ? true : false}>
            Previous
          </Button>
          <Button onClick={nextPage} as="a" rel="next">
            Next
          </Button>
        </ButtonGroup>
      </Flex>
    </Layout>
  );
};

export default Kripto;
