import { Box, Image, Stack, Text } from "@chakra-ui/react";

interface ProfileProps {
  user: {
    login: string;
    id: number;
    avatar_url: string;
    name: string;
  };
}

export function Profile({ user }: ProfileProps) {
  return (
    <Stack
      direction={["column"]}
      alignItems="center"
      justifyContent="center"
      spacing="0.5rem"
    >
      <Image
        borderRadius="full"
        boxSize="100px"
        objectFit="cover"
        fallbackSrc="https://via.placeholder.com/100"
        src={user?.avatar_url}
        alt={user?.name}
      />
      <Box
        alignItems="center"
        justifyContent="center"
        display="flex"
        flexDirection="column"
      >
        <Text fontSize="lg" as="h1">
          {user?.name}
        </Text>
        <Text fontSize="sm">{user?.login}</Text>
      </Box>
    </Stack>
  );
}
