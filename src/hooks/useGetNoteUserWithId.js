import { useEffect, useState } from "react";
import useAuthUser from "../store/AuthUser";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/firebase";
import useNoteUser from "../store/Note";

const useGetNoteUserWithId = () => {
  const [loading, setIsLoading] = useState(true);

  const authUser = useAuthUser((state) => state.user);
  const getNote = useNoteUser((state) => state.getNote);

  useEffect(() => {
    const handleRerenderNote = async () => {
      setIsLoading(true);
      try {
        const q = query(
          collection(db, "notes"),
          where("createdBy", "==", authUser.uid)
        );

        const querySnapShot = await getDocs(q);
        let data = [];
        if (!querySnapShot.empty) {
          querySnapShot.forEach((doc) => {
            data.push({ ...doc.data(), id: doc.id });
          });
        }
        getNote(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    handleRerenderNote();
  }, [getNote]);
  return loading;
};

export default useGetNoteUserWithId;
