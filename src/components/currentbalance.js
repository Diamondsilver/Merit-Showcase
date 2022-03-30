import {
  Box,
  chakra,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
  Center,
  Button,
  Stack,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  Text,
  TableCaption,
  Link,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import React, { useState, useEffect } from "react";
import { BsPerson } from "react-icons/bs";
import { FiServer } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { useMoralis, useWeb3ExecuteFunction } from "react-moralis";
import BN from "bn.js";
import { useERC20Balances } from "react-moralis";
import { useMoralisWeb3Api } from "react-moralis";

interface StatsCardProps {
  title: string;
  stat: string;
  icon: ReactNode;
}
function StatsCard(props: StatsCardProps) {
  const { title, stat, icon } = props;
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={"5"}
      shadow={"xl"}
      border={"1px solid"}
      borderColor={useColorModeValue("gray.800", "gray.500")}
      rounded={"lg"}
    >
      <Flex justifyContent={"space-between"}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight={"medium"} isTruncated>
            {title}
          </StatLabel>
          <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
            {stat}
          </StatNumber>
        </Box>
        <Box
          my={"auto"}
          color={useColorModeValue("gray.800", "gray.200")}
          alignContent={"center"}
        >
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
}

let userBalance;
let userName;

export default function Balances1() {
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

  async function getUserName() {
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

    //gets a users address based of his username
    for (let i = 0; i < results.length; ++i) {
      if (i < results.length) {
        if (results[i].attributes.ethAddress == userAdd) {
          userName = results[i].attributes.username;

          document.getElementById("currentUsername").innerHTML = `${userName}`;

          document.getElementById("currentAddress").innerHTML = `${userAdd}`;
          // console.log(results[i].attributes.ethAddress);

          console.log(results[i].attributes.username);
          break;
        }
      } else {
        console.log("empty");
      }
    }
  }

  async function getUserBalance() {
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

    let check = false;

    for (let i = 0; i < balances1.length; ++i) {
      const element = balances1[i];

      if (element.tokenAddress == 0xbe2f7b474ed416e04f1568171bda62b2c569f882) {
        check = true;
        console.log(element.balance);
        userBalance = element.balance / 1e18;
        document.getElementById("meritBalance").innerHTML = `${userBalance}  `;

        document.getElementById("tokenName").innerHTML = `Merits`;
      }
    }
    if (check == false) {
      document.getElementById("meritBalance").innerHTML = `0`;
      document.getElementById("tokenName").innerHTML = `Merits`;
    }
  }

  return (
    <Box maxW="7xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1
        textAlign={"center"}
        fontSize={"4xl"}
        py={10}
        fontWeight={"bold"}
      >
        Your current account information.
      </chakra.h1>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 5, lg: 8 }}>
        <Stack>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Username</Th>
                <Th isNumeric>Account Address</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td id="currentUsername"> </Td>
                <Td isNumeric id="currentAddress" fontSize="xs">
                  {" "}
                </Td>
              </Tr>
            </Tbody>
            <Tfoot>
              <Tr></Tr>
            </Tfoot>
          </Table>

          <Button
            bg={"blue.400"}
            onClick={() => getUserName()}
            color={"white"}
            _hover={{
              bg: "blue.500",
            }}
          >
            Check User Name
          </Button>
          <Text>
            {" "}
            Haven't made a unique username?{" "}
            <Link color={"blue.400"} href={"/setusername"}>
              Click here to set a new username
            </Link>{" "}
            ✌️
          </Text>
        </Stack>
        <Stack>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Token</Th>
                <Th isNumeric>Balance</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td id="tokenName"></Td>
                <Td isNumeric id="meritBalance"></Td>
              </Tr>
            </Tbody>
            <Tfoot>
              <Tr></Tr>
            </Tfoot>
          </Table>
          <Button
            bg={"blue.400"}
            onClick={() => getUserBalance()}
            color={"white"}
            _hover={{
              bg: "blue.500",
            }}
          >
            Check Merit Balance
          </Button>
        </Stack>
      </SimpleGrid>
    </Box>
  );
}
