import NoteItem from "./NoteItem";
import { Flex, Box, Textarea, Button } from "@chakra-ui/react";
import { useState } from "react";
import useSaveNote from "./../../hooks/useSaveNote";
import useNoteUser from "./../../store/Note";
import useAuthUser from "./../../store/AuthUser";
import useGetNoteUserWithId from "../../hooks/useGetNoteUserWithId";

const Note = () => {
  const [notes, setNotes] = useState("");
  const maxChar = 200;

  const { isLoading, handleSaveNote } = useSaveNote();

  const notesUser = useNoteUser((state) => state.note);
  console.log(notesUser);

  const handleChange = (e) => {
    if (maxChar - e.target.value.length >= 0) {
      setNotes(e.target.value);
    }
  };

  const loading = useGetNoteUserWithId();

  return (
    <Flex gap={10} alignItems="center" pt={5} flexWrap="wrap">
      {loading && <Box>Loading...</Box>}
      {!loading &&
        notesUser.map((item) => <NoteItem item={item} k1ey={item.id} />)}
      {!loading && (
        <Box
          p={4}
          minH="350px"
          w="450px"
          bg="blue.300"
          mt={3}
          rounded="lg"
          position="relative">
          <Textarea
            placeholder="Type anything for a note"
            border="none"
            fontSize={"1rem"}
            fontWeight={"semibold"}
            _focus={{ outline: "none" }}
            h="270px"
            value={notes}
            onChange={handleChange}
          />

          <Box position="absolute" bottom="5" w="90%">
            <Flex alignItems="center" justifyContent="space-between" w="full">
              <Box fontWeight="bold" fontSize={"1.2rem"}>
                {maxChar - notes.length} Remaining
              </Box>
              <Button
                onClick={() => handleSaveNote(notes)}
                isLoading={isLoading}>
                Save
              </Button>
            </Flex>
          </Box>
        </Box>
      )}
    </Flex>
  );
};

export default Note;
