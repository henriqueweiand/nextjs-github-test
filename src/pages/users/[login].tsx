import { GetStaticProps, GetStaticPaths } from "next";
import { useRouter } from "next/router";
import Router from "next/router";

import { Flex, Button } from "@chakra-ui/react";
import { Profile } from "../../components/Profile";
import { api } from "../../services/api";

interface UserProps {
  data: {
    login: string;
    id: number;
    avatar_url: string;
    name: string;
  };
}

export default function User({ data }: UserProps) {
  const { isFallback } = useRouter();

  if (isFallback) {
    return <p>Carregando...</p>;
  }

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

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await api.get(`users/henriqueweiand/following`);

  const data = response.data;

  const paths = data.map((member) => {
    return { params: { login: member.login } };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { login } = context.params;

  const user = await api.get(`users/${login}`);

  return {
    props: {
      data: user.data,
    },
    revalidate: 60 * 60 * 24, // 24 horas
  };
};
