import { Flex, Box, Button } from "@chakra-ui/react";
import useDeleteNote from "../../hooks/useDeleteNote";

const NoteItem = ({ item }) => {
  const { deleteNote, isLoading } = useDeleteNote();
  const handleDelete = async () => {
    try {
      await deleteNote(item.id);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box
      p={4}
      minH="350px"
      w="450px"
      bg="yellow.300"
      mt={3}
      rounded="lg"
      position="relative">
      <Box>{item.text}</Box>

      <Box position="absolute" bottom="5" w="90%">
        <Flex alignItems="center" justifyContent="space-between" w="full">
          <Box>{item.createdAt}</Box>
          <Button onClick={handleDelete} isLoading={isLoading}>
            Delete
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default NoteItem;
