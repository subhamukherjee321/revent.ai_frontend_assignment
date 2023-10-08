import axios from "axios";

export default class productsApi {
  static async getProduct(
    page = 1,
    filters,
    minPriceRange,
    maxPriceRange,
    search,
    sort
  ) {
    console.log(sort);
    const { menClothing, womenClothing, electronics, jewelery } = filters;

    let filterURL = "";
    if (menClothing) {
      filterURL += "&category=menClothing";
    }

    if (womenClothing) {
      filterURL += "&category=womenClothing";
    }

    if (electronics) {
      filterURL += "&category=electronics";
    }

    if (jewelery) {
      filterURL += "&category=jewelery";
    }

    let priceURL = "";

    if (minPriceRange) {
      priceURL += `&price_gte=${minPriceRange}&price_lte=${maxPriceRange}`;
    }

    let sortURL = "";

    if (sort) {
      let name = sort.charAt(0);
      let condition = sort.substring(1);
      if (name == "p") {
        sortURL += `&_sort=price&_order=${condition}`;
      }
      if (name == "r") {
        sortURL += `&_sort=rating.rate&_order=${condition}`;
      }
    }

    let searchURL = "";

    if(search) {
      searchURL += `&q=${search}`;
    }

    const res = await axios.get(
      `https://mock-server-movies-lxf4adyx8-subhamukherjee321.vercel.app/products?_page=${page}&_limit=8${filterURL}${priceURL}${sortURL}${searchURL}`
    );

    return res.data;
  }
}