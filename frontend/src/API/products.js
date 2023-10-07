import axios from "axios";

export default class productsApi {
  static async getProduct(
    loading,
    page = 1,
    filters,
    minPriceRange,
    maxPriceRange,
    search,
    sort
  ) {
    try {
      const { menClothing, womenClothing, electronics, jewelery } = filters;

      const res = await axios.get(
        `http://localhost:8080/products?_page=${page}&_limit=8`
      );
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
}
