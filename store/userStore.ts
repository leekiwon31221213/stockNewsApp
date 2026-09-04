import { create } from "zustand";

interface UserStore {
  userName: string;
  setUserName: (name: string) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  userName: "기원",
  setUserName: (name) =>
    set({
      userName: name,
    }),
}));
