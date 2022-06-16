import React from "react";
import SidePage from "../../components/SidePage/SidePage";
import { useNavigate } from "react-router-dom";

import "../Home/Home.css";

export default function Home() {
  const navigate = useNavigate();

  const goToRegister = () => {
    navigate("/register");
  };

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <div className='signup-wrapper'>
      <SidePage />
      <div className='home-wrapper'>
        <h3 className='home-header'>
          Your Money-Making Machine in
          <br /> your Pocket
        </h3>
        <p className='home-paragraph'>
          By creating an account, you agree to your
          <span className='home-para-red'>
            Terms of <br /> Service
          </span>{" "}
          and
          <span className='home-para-red'>Privacy Policy</span>
        </p>
        <button className='googlebtn'>
          <img
            style={{ width: "20px", height: "20px" }}
            src={require("../../assets/googlelogo.png")}
            alt='google-img'
          />
          <span className='continue-text'>Continue with Google</span>
        </button>

        <div className='separator'>OR</div>
        <button className='create-acc' onClick={() => goToRegister()}>
          Create my account
        </button>
        <button className='login_btn' onClick={() => goToLogin()}>
          Login to my account
        </button>
        <button className='create-acc browse'>Browse courses</button>
      </div>
    </div>
  );
}
