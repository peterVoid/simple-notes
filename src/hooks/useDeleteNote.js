import { deleteDoc, doc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../firebase/firebase";
import useNoteUser from "../store/Note";

const useDeleteNote = () => {
  const [isLoading, setIsLoading] = useState(false);
  const notesStoreDelete = useNoteUser((state) => state.deleteNote);
  const deleteNote = async (id) => {
    if (!window.confirm("are you sure?")) return;
    setIsLoading(true);
    try {
      await deleteDoc(doc(db, "notes", id));
      notesStoreDelete(id);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return { deleteNote, isLoading };
};

export default useDeleteNote;
