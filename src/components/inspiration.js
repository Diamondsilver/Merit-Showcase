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

export default function GridListWithHeading() {
  return (
    <Box p={10} id="inspiration">
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={"3xl"}>Inspiration</Heading>
        <Text color={"gray.600"} fontSize={"xl"}>
          Some children are self motivated and are incentivised to achieve top
          marks, these are the students you find at the top of all their
          classes. On the other hand you have the average student who is
          incentivised just to get by, with goals of just passing and avoiding
          failing marks. Spendable merits is an incentive program for kids to
          put in that extra effort so that they have a short term goals to work
          towards. As a result, the quality of the students work increases and
          The collaborative effort between peers is also strengthened. Yes, in
          an ideal scenario, the children should work hard solely for the
          betterment of their education and their future prospects. But as we
          know and experienced ourselves, most kids don't think that far ahead,
          they want to enjoy the learning experience and have a good time with
          their friends.
        </Text>
      </Stack>
    </Box>
  );
}
