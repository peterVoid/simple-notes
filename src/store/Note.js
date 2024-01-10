import { create } from "zustand";

const useNoteUser = create((set) => ({
  note: [],
  setNote: (note) => set((state) => ({ note: [...state.note, note] })),
  getNote: (note) => set({ note }),
  deleteNote: (id) =>
    set((state) => ({ note: state.note.filter((x) => x.id !== id) })),
}));

export default useNoteUser;
