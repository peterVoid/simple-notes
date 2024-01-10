import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../firebase/firebase";
import useAuthUser from "./../store/AuthUser";
import useNoteUser from "./../store/Note";

const useSaveNote = () => {
  const [isLoading, setIsLoading] = useState(false);
  const userNow = useAuthUser((state) => state.user);
  const setNoteToFirestore = useNoteUser((state) => state.setNote);
  const handleSaveNote = async (text) => {
    const now = new Date();
    if (text.length === 0) return;
    setIsLoading(true);
    const data = {
      text: text,
      createdBy: userNow.uid,
      createdAt: now.toLocaleDateString(),
    };
    try {
      const docRef = await addDoc(collection(db, "notes"), data);
      if (docRef) {
        setNoteToFirestore({ ...data, id: docRef.id });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return { isLoading, handleSaveNote };
};

export default useSaveNote;
