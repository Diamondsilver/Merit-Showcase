import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useMoralis } from "react-moralis";
import { useState } from "react";

export default function SimpleCard() {
  const { authenticate, isAuthenticated, user, isAuthenticating } =
    useMoralis();
  return (
    <Flex
      minH={"40vh"}
      align={"center"}
      justify={"center"}
      id="signin"
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of the cool <Link color={"blue.400"}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <Stack spacing={10}>
              <Button
                bg={"blue.400"}
                isLoading={isAuthenticating}
                onClick={() => authenticate()}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Connect Metamask
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
