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

export default function AdminRemoveAdmin() {
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

  async function revokeAdmin() {
    await enableWeb3();

    let options = {
      contractAddress: "0xBe2F7b474Ed416e04f1568171BDa62b2c569F882",
      functionName: "revokeAdmin",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "_admin",
              type: "address",
            },
          ],
          name: "revokeAdmin",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      params: {
        _admin: document.getElementById("removeAdmin").value,
      },
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
          <Heading fontSize={"4xl"}>Revoke admin role from address</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            Admins only <Link color={"blue.400"}>function</Link> ✌️
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
              <FormControl>
                <FormLabel>Enter Address</FormLabel>
                <Input id="removeAdmin" type="text" />
              </FormControl>
              <Button
                bg={"blue.400"}
                color={"white"}
                onClick={() => revokeAdmin()}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Remove admin
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
