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
import { useMoralis, useWeb3ExecuteFunction } from "react-moralis";

export default function PrintMerit() {
  const {
    authenticate,
    isAuthenticated,
    isAuthenticating,
    authError,
    logout,
    Moralis,
    enableWeb3,
  } = useMoralis();

  const contractProcessor = useWeb3ExecuteFunction();

  async function print1() {
    await enableWeb3();

    let options = {
      contractAddress: "0xBe2F7b474Ed416e04f1568171BDa62b2c569F882",
      functionName: "teacherTopUp",
      abi: [
        {
          inputs: [],
          name: "teacherTopUp",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      params: {},
      //msgValue: Moralis.Units.ETH(0.1)
      // msgValue: Moralis.Units.ETH(document.getElementById("amountTo").value),
    };

    await contractProcessor.fetch({
      params: options,
    });

    console.log(contractProcessor);
  }

  return (
    <Flex
      minH={"50vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Print merits to account</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            Teachers only <Link color={"blue.400"}>function</Link> ✌️
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
                color={"white"}
                onClick={() => print1()}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Print Merits
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
