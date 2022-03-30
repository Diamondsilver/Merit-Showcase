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
import BN from "bn.js";
import { useERC20Balances } from "react-moralis";
import { useMoralisWeb3Api } from "react-moralis";

export default function SendMerit() {
  //var a = new BN("0xa30b8d9c6b0e9ef5d5229bdc96188b4d13353d7a", 16);
  //var b = new BN("100000000000000000", 1);

  const { fetchERC20Balances, data, isLoading, isFetching, error } =
    useERC20Balances();

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
  const Web3Api = useMoralisWeb3Api();

  //get the moralis user data
  async function getBalances() {
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

    let balances1 = await Moralis.Web3.getAllERC20(options);
    //console.log(balances1);
    //console.log(balances1[3]);
    //console.log(balances1[3].tokenAddress);

    for (let i = 0; i < balances1.length; ++i) {
      const element = balances1[i];

      if (i < balances1.length) {
        if (
          element.tokenAddress == 0xbe2f7b474ed416e04f1568171bda62b2c569f882
        ) {
          console.log(element.balance);
          break;
        }
      } else {
        console.log("No Merits");
      }
    }
    //gets token balance of the merit contract address in the current user

    console.log(Moralis.User.current().attributes.username);
    // get current user name

    // cloud function to get an array of all the users
    const results = await Moralis.Cloud.run("averageStars");
    console.log(results);

    //gets a users address based of his username
    for (let i = 0; i < results.length; ++i) {
      if (i < results.length) {
        if (results[i].attributes.username == "thesame") {
          console.log(results[i].attributes.ethAddress);
          console.log(results[i].attributes.username);
          break;
        }
      } else {
        console.log("empty");
      }
    }
  }

  async function sendToken() {
    await enableWeb3();

    let options = {
      contractAddress: "0xBe2F7b474Ed416e04f1568171BDa62b2c569F882",
      functionName: "transfer",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "transfer",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      params: {
        to: document.getElementById("sendingTo").value,
        amount: Moralis.Units.ETH(document.getElementById("amountTo").value),
        // to: document.getElementById("sendingTo").value,
        //amount: document.getElementById("amountTo").value * 1e18,
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
          <Heading fontSize={"4xl"}>Send Merits</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            Share the <Link color={"blue.400"}>acheivement</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>Sending To</FormLabel>
              <Input id="sendingTo" type="text" />
            </FormControl>
            <FormControl>
              <FormLabel>Amount</FormLabel>
              <Input id="amountTo" type="text" />
            </FormControl>
            <Stack spacing={10}>
              <Button
                bg={"blue.400"}
                onClick={() => sendToken()}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Send Merits
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
