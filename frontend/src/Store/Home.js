import { create } from "zustand";

export const useProduct = create((set) => ({
  products: [],
  page: 1,
  setProducts: (value) => set((state) => ({ products: value })),
  setPage: (val) => set((state) => ({ page: val })),
}));
