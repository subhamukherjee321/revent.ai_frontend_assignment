import { create } from "zustand";

export const useProduct = create((set) => ({
  loading: false,
  setLoading: (val) => set((state) => ({ loading: val })),

  products: [],
  setProducts: (val) => set((state) => ({ products: val })),

  page: 1,
  setPage: (val) => set((state) => ({ page: val })),

  search: "",
  setSearch: (val) => set((state) => ({ search: val })),

  filters: {},
  setFilters: (val) => set((state) => ({ filters: val })),

  minPriceRange: 0,
  setMinPriceRange: (val) => set((state) => ({ minPriceRange: val })),

  maxPriceRange: 1000,
  setMaxPriceRange: (val) => set((state) => ({ maxPriceRange: val })),

  sort: "",
  setSort: (val) => set((state) => ({ sort: val })),
}));
