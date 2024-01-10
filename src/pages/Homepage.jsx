import useSignOutUser from "../hooks/useSignOutUser";
import Note from "./../components/Note/Note";
import {
  Box,
  Flex,
  Button,
  InputGroup,
  InputLeftElement,
  Input,
  VStack,
} from "@chakra-ui/react";
const Homepage = () => {
  const { isLoading, logout } = useSignOutUser();

  return (
    <Box
      position="absolute"
      top="0"
      left="0"
      px={{ base: "2", md: "28" }}
      py={10}
      w="full"
      bg="white">
      <VStack gap={5} alignItems="center">
        <Flex justifyContent="space-between" alignItems="center" w="full">
          <Box fontWeight="bold" fontSize={"2rem"}>
            Notes
          </Box>
          <Button isLoading={isLoading} onClick={() => logout()}>
            Logout
          </Button>
        </Flex>

        <InputGroup bg="#2322">
          <InputLeftElement pointerEvents="none">
            <Box>Se</Box>
          </InputLeftElement>
          <Input
            type="tel"
            placeholder="type to search..."
            border="1px solid black"
          />
        </InputGroup>
      </VStack>

      <Note />
    </Box>
  );
};

export default Homepage;
