import { Button } from "@chakra-ui/react";
import useShowToast from "./../../hooks/useShowToast";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth, db } from "./../../firebase/firebase";
import { collection, doc, setDoc } from "firebase/firestore";
import useAuthUser from "../../store/AuthUser";
const GoogleAuth = () => {
  const showToast = useShowToast();
  const [signInWithGoogle, loading] = useSignInWithGoogle(auth);
  const loginToStore = useAuthUser((state) => state.login);

  const handleLoginWithGoogle = async () => {
    try {
      const authGoogle = await signInWithGoogle();
      const setDataToFirestore = {
        username: authGoogle.user.displayName,
        notes: [],
        createdAt: Date.now(),
        uid: authGoogle.user.uid,
      };

      const setDocsToFirestore = collection(db, "users");
      await setDoc(
        doc(setDocsToFirestore, authGoogle.user.uid),
        setDataToFirestore
      );

      localStorage.setItem("user", JSON.stringify(setDataToFirestore));
      loginToStore(setDataToFirestore);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Button bg="#2322" onClick={handleLoginWithGoogle}>
      Login With Google
    </Button>
  );
};

export default GoogleAuth;
