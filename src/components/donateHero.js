import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useMoralis } from "react-moralis";

export default function DonateHero1() {
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
            Spending your efforts to help
          </Text>
          <Stack direction={"row"}>
            <Button
              bg={"blue.400"}
              as={"a"}
              href={"#charity1"}
              rounded={"full"}
              color={"white"}
              _hover={{ bg: "blue.500" }}
            >
              Begin
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}
