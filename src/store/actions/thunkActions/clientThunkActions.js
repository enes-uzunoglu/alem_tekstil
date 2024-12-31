import axios from "axios";
import { setRoles, setUser, setLoginError } from "../clientActions";

export const fetchRoles = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "https://workintech-fe-ecommerce.onrender.com/roles"
      );
      dispatch(setRoles(response.data));
    } catch (error) {
      console.error("Error fetching roles:", error);
    }
  };
};

export const postSignUp = (userData) => async (dispatch) => {
  try {
    const response = await axios.post(
      "https://workintech-fe-ecommerce.onrender.com/signup",
      userData
    );
    dispatch(setUser(response.data));
  } catch (error) {
    console.error("Sign up error:", error);
    throw error;
  }
};

export const postLogin = (credentials) => async (dispatch) => {
  try {
    const response = await axios.post(
      "https://workintech-fe-ecommerce.onrender.com/login",
      credentials,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    const user = response.data;
    dispatch(setUser(user));
    return user;
  } catch (error) {
    if (error.response) {
      dispatch(
        setLoginError(
          error.response.data.message || "Geçersiz email ya da şifre"
        )
      );
    } else if (error.request) {
      dispatch(setLoginError("Sunucuya bağlanırken bir hata oluştu"));
    } else {
      dispatch(setLoginError(error.message));
    }
    throw error;
  }
};
