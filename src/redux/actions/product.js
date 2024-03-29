import { toast } from "react-hot-toast";
import axios from "axios";

export const addProduct = (product) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const res = await axios.post(
      "https://ecommerce-backend-xdgl.onrender.com/product/add",
      {
        ...product,
      },
      {
        headers: {
          authorization: `bearer ${token}`,
        },
      }
    );
    const { data, message, success } = res.data;

    if (success) {
      dispatch({
        type: "ADD_PRODUCT_SUCCESS",
        payload: data,
      });
      toast.success(message);
    } else {
      dispatch({
        type: "ADD_PRODUCT_FAILED",
        payload: {},
      });
      toast.error(message);
    }
  } catch (error) {
    console.log(error);
    toast.error(error.message);
    dispatch({
      type: "ADD_PRODUCT_FAILED",
      payload: {},
    });
  }
};

export const getProduct = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "https://ecommerce-backend-xdgl.onrender.com/product/all"
    );
    const { data, message, success } = res.data;
    if (success) {
      dispatch({
        type: "FETCH_PRODUCTS_SUCCESS",
        payload: data,
      });
      // toast.success(message);
    } else {
      dispatch({
        type: "FETCH_PRODUCTS_FAILED",
        payload: {},
      });
      toast.error(message);
    }
  } catch (error) {
    console.log(error);
    toast.error(error.message);
    dispatch({
      type: "FETCH_PRODUCTS_FAILED",
      payload: {},
    });
  }
};
