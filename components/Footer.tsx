import { Flex, Heading, Link, Box } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { URL_GITHUB, URL_IG, URL_TWITTER } from "@/lib/constants";

export const Footer: FunctionComponent = (props) => (
  <Flex
    direction="column"
    alignContent="center"
    justifyContent="center"
    textAlign="center"
    as="footer"
    py="2rem"
    width="100%"
    {...props}
  >
    <Heading as="h6" size="sm">
      Software Engineer & Co-op
    </Heading>
    <Heading as="h6" size="sm">
      Bali, Indonesia
    </Heading>
    <Box flexBasis={{base: '100%', md: 'auto'}}>
      <Flex
          align="center"
          justify={["center"]}
          direction={["column", "row"]}
          pt={[4, 4, 0, 0]}
      >
        <Link mr={[0, 4]} color="teal.500" size="80px" href={URL_GITHUB}>
          Github
        </Link>
        <Link mr={[0, 4]} color="teal.500" size="80px" href={URL_IG}>
          Instagram
        </Link>
        <Link color="teal.500" size="80px" href={URL_TWITTER}>
          Twitter
        </Link>
      </Flex>
    </Box>
  </Flex>
);
