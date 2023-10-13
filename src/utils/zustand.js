import { create } from "zustand";

const useStore = create((set) => ({
  detailUser: [],
  setDetailUser: (data) => set({ detailUser: data }),
}));

export default useStore;
