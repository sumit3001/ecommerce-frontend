import { toast } from "react-hot-toast";
import axios from "axios";

export const addCategory = (name, description) => async (dispatch) => {
  try {
    const token = localStorage.getItem('token')
    const res = await axios.post("http://localhost:8080/category/add", {
      name,
      description,
    },
    {
      headers: {
        'authorization': `bearer ${token}`
      }
    });
    const { data, message, success } = res.data;

    if (success) {
      dispatch({
        type: "ADD_CATEGORY_SUCCESS",
        payload: data,
      });
      toast.success(message);
    } else {
      dispatch({
        type: "ADD_CATEGORY_FAILED",
        payload: {},
      });
      toast.error(message);
    }
  } catch (error) {
    console.log(error);
    toast.error(error.message);
    dispatch({
      type: "ADD_CATEGORY_FAILED",
      payload: {},
    });
  }
};