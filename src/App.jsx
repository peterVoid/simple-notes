import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import { Flex, Spinner } from "@chakra-ui/react";
import { auth } from "./firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";

const App = () => {
  const [user, loading] = useAuthState(auth);
  console.log(user);
  if (loading && !user) {
    return (
      <Flex w="full" h="100vh" justifyContent={"center"} alignItems={"center"}>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Flex>
    );
  }
  return (
    <>
      <Flex
        bg={"#2322"}
        w="full"
        justify={"center"}
        alignItems="center"
        h="100vh"
        fontFamily="body">
        <Routes>
          <Route
            path="/"
            element={user ? <Homepage /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to="/" />}
          />
        </Routes>
      </Flex>
    </>
  );
};

export default App;
