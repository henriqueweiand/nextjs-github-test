import React from "react";
import NextLink from "next/link";
import { GetStaticProps } from "next";

import { Flex, Center, Button, Image } from "@chakra-ui/react";
import { api } from "../services/api";

interface UserProps {
  login: string;
  id: number;
  avatar_url: string;
  name: string;
}

interface HomeProps {
  data: UserProps[];
}

export default function Home({ data }: HomeProps) {
  return (
    <Flex
      w="100vm"
      h="100vh"
      align="center"
      justify="center"
      direction="column"
    >
      <Center>
        <Flex flexWrap="wrap" align="center" justify="center" maxW="50%">
          {data.map((user) => (
            <NextLink key={user.login} href={`/users/${user.login}`} passHref>
              <Image
                data-testid="image"
                borderRadius="full"
                boxSize="30px"
                objectFit="cover"
                fallbackSrc="https://via.placeholder.com/100"
                src={user?.avatar_url}
                alt={user?.name}
                title={user?.name}
                marginRight="0.5rem"
                marginTop="0.5rem"
                cursor="pointer"
              />
            </NextLink>
          ))}
        </Flex>
      </Center>
      <Center marginTop="1rem">
        <NextLink href="/user-static" passHref>
          <Button
            as="a"
            size="sm"
            fontSize="sm"
            colorScheme="pink"
            cursor="pointer"
          >
            henriqueweiand static
          </Button>
        </NextLink>
      </Center>
      <Center marginTop="1rem">
        <NextLink href="/user-server" passHref>
          <Button
            as="a"
            size="sm"
            fontSize="sm"
            colorScheme="pink"
            cursor="pointer"
          >
            henriqueweiand server side
          </Button>
        </NextLink>
      </Center>
    </Flex>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get(`users/henriqueweiand/following`);

  return {
    props: {
      data: response.data,
    },
    revalidate: 60 * 60 * 24, // 24 horas
  };
};
