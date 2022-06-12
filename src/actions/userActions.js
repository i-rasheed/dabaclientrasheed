import { Axios } from "axios";

import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_SIGNOUT,
} from "../constants/userConstants";

export const register =
  (firstName, lastName, email, password) => async (dispatch) => {
    dispatch({
      type: USER_REGISTER_REQUEST,
      payload: { firstName, lastName, email, password },
    });
    try {
      const { data } = await Axios.post(
        "https://dabaserverrasheed.herokuapp.com/users/register",
        {
          firstName,
          lastName,
          email,
          password,
        }
      );
      dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
      dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
      sessionStorage.setItem("userInfo", JSON.stringify(data));
      document.location.href = "/dashboard";
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : "Something went wrong",
      });
    }
  };

export const signin = (email, password) => async (dispatch) => {
  dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } });
  try {
    const { data } = await Axios.post(
      "https://dabaserverrasheed.herokuapp.com/users/login",
      { email, password }
    );
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
    sessionStorage.setItem("userInfo", JSON.stringify(data));
    document.location.href = "/dashboard";
  } catch (error) {
    dispatch({
      type: USER_SIGNIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : "Something went wrong",
    });
  }
};

export const signout = () => (dispatch) => {
  sessionStorage.removeItem("userInfo");
  sessionStorage.removeItem("cartItems");
  sessionStorage.removeItem("shippingAddress");
  dispatch({ type: USER_SIGNOUT });
  document.location.href = "/signin";
};
