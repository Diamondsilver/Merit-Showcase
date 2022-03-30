import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useMoralis } from "react-moralis";

let userName;

export default function Setuser123() {
  const {
    authenticate,
    isAuthenticated,
    isAuthenticating,
    authError,
    logout,
    Moralis,
    enableWeb3,
  } = useMoralis();

  const { setUserData, userError, isUserUpdating, user } = useMoralis();
  const [username123, setUsername] = useState("");

  async function checkUserName() {
    await enableWeb3();

    let currentUser = Moralis.User.current();
    let currentAddress = Moralis.User.current().attributes.ethAddress;

    if (currentUser) {
      console.log("logged in bro");
    }

    let options = {
      chain: "rinkeby",
      address: currentAddress,
    };

    //gets token balance of the merit contract address in the current user

    console.log(Moralis.User.current().attributes.username);
    let userAdd = Moralis.User.current().attributes.ethAddress;

    // cloud function to get an array of all the users
    const results = await Moralis.Cloud.run("averageStars");
    console.log(results);

    if (Moralis.User.current().attributes.username != username123) {
      document.getElementById(
        "setNewUserName"
      ).innerHTML = `This username is taken, try another.`;
    } else {
      document.getElementById(
        "setNewUserName"
      ).innerHTML = `Your New Username: ${username123}`;
    }
  }

  return (
    <Flex
      minH={"30vh"}
      align={"center"}
      justify={"center"}
      id="sign-up"
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Set Username
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            Get your unique identifier ✌️
          </Text>
          <Text
            id="setNewUserName"
            fontSize={"lg"}
            color={"black.600"}
            fontWeight={"bold"}
          ></Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="username" isRequired>
                  <FormLabel>User Name</FormLabel>
                  <Input
                    value={username123}
                    onChange={(event) => setUsername(event.currentTarget.value)}
                  />
                </FormControl>
              </Box>
            </HStack>

            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                onClick={() =>
                  setUserData({
                    username: username123,
                  }).then(checkUserName())
                }
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Set New Username
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
