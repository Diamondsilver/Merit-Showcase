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

export default function DonateInsp() {
  return (
    <Box p={10} id="inspiration">
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={"3xl"}>Why donate and how it works</Heading>
        <Text color={"gray.600"} fontSize={"xl"}>
          After earning merits through your hard work, they can be spent in the
          school shop. Another way merits can be paid is by donating it to a
          charity. When you send tokens to one of the charities below, your
          token is saved and taken count off. Each token sent to a charity will
          be backed by £1 which will be paid by the school at the end of the
          academic year!
        </Text>
      </Stack>
    </Box>
  );
}
