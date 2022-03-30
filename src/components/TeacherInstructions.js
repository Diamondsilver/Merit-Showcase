import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

// Replace test data with your own
/*const features = Array.apply(null, Array(8)).map(function (x, i) {
      return {
        id: i,
        title: "Lorem ipsum dolor sit amet2",
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.",
      };
    });*/

export default function TeacherInstruction() {
  return (
    <Box p={10} id="inspiration">
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={"3xl"}>How to print more merits</Heading>
        <Text color={"gray.600"} fontSize={"xl"}>
          When you are running low on merits, simply press the print merit
          button below and 50 merits will be accredited to your account. Note
          that the print function can ony be pressed once every 2 weeks.
          Furthermore the function to print more merits can only be called if an
          address has a teacher's role, which is set and revoked by an admin. If
          you're address does not have the teachers role, you can click the
          print button all day long and not have any merits deposited to your
          account. If you need more test ether to make the transaction simply
          request some from https://faucets.chain.link/
        </Text>
      </Stack>
    </Box>
  );
}
