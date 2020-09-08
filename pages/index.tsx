import Head from "next/head";
import { useEffect, useState } from "react";
import { parseISO, format } from "date-fns";
import { Box, Heading, SimpleGrid } from "@chakra-ui/core";

import { Container } from "@/components/Container";
import { DarkModeSwitch } from "@/components/DarkModeSwitch";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { CountBox } from "@/components/CountBox";
import { formattingNumber } from "@/lib/formatting";

const Index = () => {
  const defaultValue = "-----";

  const [covidData, setCovidData] = useState({
    confirmed: defaultValue,
    recovered: defaultValue,
    deaths: defaultValue,
    ongoing: defaultValue,
    lastUpdate: defaultValue,
  });

  useEffect(() => {
    async function fetchData() {
      const data = await fetch("https://covid19.mathdro.id/api/countries/ID");
      const item = await data.json();
      setCovidData({
        confirmed: formattingNumber(item.confirmed.value),
        recovered: formattingNumber(item.recovered.value),
        deaths: formattingNumber(item.deaths.value),
        ongoing: formattingNumber(
          (
            parseInt(item.confirmed.value) -
            (parseInt(item.recovered.value) + parseInt(item.deaths.value))
          ).toString()
        ),
        lastUpdate: format(parseISO(item.lastUpdate), "dd-MM-yyyy hh:mm OOOO"),
      });
    }

    fetchData();
  }, []);

  return (
    <Container>
      <Head>
        <title>👋Hey!</title>
      </Head>
      <Hero />

      <Box bg="teal.500" w="100%" p={4} color="white" marginTop="-10rem">
        <Heading as="h4" size="md" my="1rem" textAlign="center">
          Jumlah kasus COVID-19 di Indonesia
        </Heading>
        <SimpleGrid spacing={5} columns={[1, 4]}>
          <CountBox title="Terkonfirmasi" count={covidData.confirmed} />
          <CountBox title="Dalam Perawatan" count={covidData.ongoing} />
          <CountBox title="Sembuh" count={covidData.recovered} />
          <CountBox title="Meninggal" count={covidData.deaths} />
        </SimpleGrid>
        <Heading as="h6" size="xs" marginTop="1rem">
          Pembaruan Terakhir : {covidData.lastUpdate}
        </Heading>
      </Box>

      <Footer />
      <DarkModeSwitch />
    </Container>
  );
};

export default Index;
