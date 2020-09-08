import { Box, Heading, Text } from "@chakra-ui/core";

type Props = {
  title?: string;
  count?: string;
};

export function CountBox({ title, count, ...rest }: Props) {
  return (
    <Box p={5} shadow="md" borderWidth="1px" textAlign="center" {...rest}>
      <Heading fontSize="2xl">{count}</Heading>
      <Text fontSize="lg">{title}</Text>
    </Box>
  );
}
