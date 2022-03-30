import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useMoralis } from "react-moralis";

export default function TeacherHero1() {
  const { authenticate, isAuthenticated, user, isAuthenticating } =
    useMoralis();
  return (
    <Flex
      w={"full"}
      h={"100vh"}
      backgroundImage={"url(https://wallpaperaccess.com/full/5576355.jpg)"}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
          <Text
            color={"white"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
          >
            Teachers Area
          </Text>
          <Stack direction={"row"}></Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}
