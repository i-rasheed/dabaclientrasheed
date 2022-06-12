import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../../actions/userActions";

import "../DashBoard/DashBoard.css";
export default function DashBoard() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };

  return (
    <div className='dashbd-wrapper'>
      <div>DashBoard</div>
      <h3 style={{ color: "black" }}>{userInfo.user.firstName}</h3>
      <button className='logout-btn' onClick={signoutHandler}>
        logout
      </button>
    </div>
  );
}
