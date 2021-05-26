import { GetStaticProps } from "next";
import React from "react";
import { api } from "../services/api";
import Router from "next/router";

import { Flex, Button } from "@chakra-ui/react";
import { Profile } from "../components/Profile";

interface UserStaticProps {
  data: {
    login: string;
    id: number;
    avatar_url: string;
    name: string;
  };
}

function UserStatic({ data }: UserStaticProps) {
  return (
    <Flex
      w="100vm"
      h="100vh"
      align="center"
      justify="center"
      direction="column"
    >
      <Profile user={data} />
      <Button
        as="a"
        size="sm"
        fontSize="sm"
        colorScheme="pink"
        cursor="pointer"
        marginTop="1rem"
        onClick={() => Router.back()}
      >
        Back
      </Button>
    </Flex>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const user = await api.get("/users/henriqueweiand");

  return {
    props: {
      data: user.data,
    },
    revalidate: 60 * 60 * 24, // 24 horas
  };
};

export default UserStatic;
