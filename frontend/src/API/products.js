import axios from "axios";

export default class productsApi {
    static async getProduct(page = 1, search, filter, sort) {
     const res = await axios.get(`http://localhost:8080/products?_page=${page}&_limit=8`);
     return res;
    }
}