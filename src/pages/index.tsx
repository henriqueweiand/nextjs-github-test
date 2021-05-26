import NextLink from "next/link";
import { Flex, Center, Button } from "@chakra-ui/react";
import React from "react";

export default function Home() {
  return (
    <Flex
      w="100vm"
      h="100vh"
      align="center"
      justify="center"
      direction="column"
    >
      <Center>
        <NextLink href="/user-static" passHref>
          <Button
            as="a"
            size="sm"
            fontSize="sm"
            colorScheme="pink"
            cursor="pointer"
          >
            User static
          </Button>
        </NextLink>
      </Center>
      <Center>
        <NextLink href="/user-server" passHref>
          <Button
            as="a"
            size="sm"
            fontSize="sm"
            colorScheme="pink"
            cursor="pointer"
          >
            User server side
          </Button>
        </NextLink>
      </Center>
    </Flex>
  );
}
