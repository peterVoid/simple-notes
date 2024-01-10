import { create } from "zustand";

const useAuthUser = create((set) => ({
  user: JSON.parse(localStorage.getItem("user")),
  login: (user) => set({ user }),
  logout: () => set({ user: null }),
}));

export default useAuthUser;
