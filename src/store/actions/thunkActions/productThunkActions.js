import axios from "axios";
import {
  setFetchState, 
  setCategories,
  setProductList,
  setTotal,
  setProductDetails,
} from "../productActions";
export const fetchCategories = () => {
  return async (dispatch) => {
    dispatch(setFetchState("FETCHING"));

    try {
      const response = await axios.get(
        "https://workintech-fe-ecommerce.onrender.com/categories"
      );
      console.log("Fetched Categories:", response.data);
      dispatch(setCategories(response.data));
      dispatch(setFetchState("FETCHED"));
    } catch (error) {
      console.error("Error fetching categories:", error);
      dispatch(setFetchState("ERROR"));
    }
  };
};

export const fetchProducts = () => {
  return async (dispatch) => {
    dispatch(setFetchState("FETCHING"));
    try {
      const response = await axios.get(
        "https://workintech-fe-ecommerce.onrender.com/products"
      );
      console.log("Fetched Products:", response.data);
      dispatch(setProductList(response.data));
      dispatch(setTotal(response.data.length));
      dispatch(setFetchState("FETCHED"));
    } catch (error) {
      console.error("Error fetching products:", error);
      dispatch(setFetchState("FAILED"));
    }
  };
};

export const fetchProductDetails = (productId) => {
  return async (dispatch) => {
    dispatch(setFetchState("FETCHING"));
    try {
      const response = await axios.get(
        `https://workintech-fe-ecommerce.onrender.com/products/${productId}`
      );
      console.log("Fetched Product Details:", response.data);
      dispatch(setProductDetails(response.data));
      dispatch(setFetchState("FETCHED"));
    } catch (error) {
      console.error("Error fetching product details:", error);
      dispatch(setFetchState("FAILED"));
    }
  };
};
