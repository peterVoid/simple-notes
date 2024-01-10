import GoogleAuth from "./../components/Login/GoogleAuth";
import { VStack, Box } from "@chakra-ui/react";
const Login = () => {
  return (
    <VStack
      gap={5}
      alignItems="center"
      p={10}
      border="3px solid #328991"
      rounded="lg"
      bg="white">
      <Box fontSize={"2rem"} fontWeight="bold">
        Welcome👋
      </Box>
      <GoogleAuth />
    </VStack>
  );
};

export default Login;
