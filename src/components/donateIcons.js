import { ReactElement } from "react";
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from "@chakra-ui/react";
import { FcDonate, FcInTransit, FcPuzzle, FcRuler, FcOk } from "react-icons/fc";

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        bg={"gray.100"}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={"gray.600"}>{text}</Text>
    </Stack>
  );
};

export default function DonateColumns() {
  return (
    <Box p={50} marginLeft={100} id="points">
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={<Icon as={FcOk} w={10} h={10} />}
          title={"Not just stickers"}
          text={
            "Instead of stars in their homework diary, kids can spend their merits on charity!"
          }
        />
        <Feature
          icon={<Icon as={FcDonate} w={10} h={10} />}
          title={"Fully supported"}
          text={"Every token donated is backed by £1 to the said charity!"}
        />
        <Feature
          icon={<Icon as={FcRuler} w={10} h={10} />}
          title={"Another reason to excel!"}
          text={"Work hard and save lives!"}
        />
      </SimpleGrid>
    </Box>
  );
}
