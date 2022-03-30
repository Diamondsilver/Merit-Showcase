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

export default function AdminInstruction() {
  return (
    <Box p={10} id="adminInstructions">
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={"3xl"}>Setting and revoking roles</Heading>
        <Text color={"gray.600"} fontSize={"xl"}>
          Only teacher addresses are permitted to print merits for distribution
          among the students. You can set teacher roles to certain addresses by
          entering the teachers address below. The function to set a teacher is
          only available to someone who holds the owner role or the admin role.
          The teacher role can also be revoked by the owner or admin. Below
          setting and revoking the teacher roles is setting and revoking admin
          roles. Only an owner or an admin can set or revoke an admin role.
        </Text>
      </Stack>
    </Box>
  );
}
