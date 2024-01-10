import { useState } from "react";
import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";

const useSignOutUser = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [signOut] = useSignOut(auth);
  const logout = async () => {
    setIsLoading(true);
    try {
      await signOut();
      localStorage.removeItem("user");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return { isLoading, logout };
};

export default useSignOutUser;
