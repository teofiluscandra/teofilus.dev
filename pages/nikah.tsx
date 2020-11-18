import React from "react";
import { Flex, Stack, Heading } from "@chakra-ui/core";

const Nikah = () => (
  <>
    <Flex
      align="center"
      justify={{ base: "center", md: "space-around", xl: "space-between" }}
      direction={{ base: "column-reverse", md: "row" }}
      wrap="nowrap"
      minH="60vh"
      px={8}
    >
      <Stack
        spacing={4}
        w={{ base: "80%", md: "40%" }}
        align={["center", "center", "flex-start", "flex-start"]}
      >
        <Heading
          as="h1"
          size="xl"
          fontWeight="bold"
          color="primary.800"
          textAlign={["center", "center", "left", "left"]}
        >
          Wedding
        </Heading>
      </Stack>
    </Flex>
  </>
);

export default Nikah;
