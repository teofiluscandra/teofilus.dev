import { Flex, Heading, Link } from "@chakra-ui/core";
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
    <Flex justifyContent="center">
      <Link color="teal.500" size={80} href={URL_GITHUB}>
        Github
      </Link>
      <Link color="teal.500" size={80} href={URL_IG}>
        Instagram
      </Link>
      <Link color="teal.500" size={80} href={URL_TWITTER}>
        Twitter
      </Link>
    </Flex>
    <p>❤️</p>
  </Flex>
);
