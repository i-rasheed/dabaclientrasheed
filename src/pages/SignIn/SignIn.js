import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../../actions/userActions";
import SidePage from "../../components/SidePage/SidePage";
import MessageBox from "../../components/MessageBox/MessageBox";
import { useNavigate } from "react-router-dom";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Oval } from "react-loader-spinner";

import "../SignIn/SignIn.css";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

export default function SignIn() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [values, setValues] = useState(initialValues);
  // const [errorMessage, setErrorMessage] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const goToRegister = () => {
    navigate("/register");
  };

  const goToHome = () => {
    navigate("/");
  };

  const userSignin = useSelector((state) => state.userSignin);
  const { loading, error } = userSignin;
  console.log(error);

  const submitHandler = (e) => {
    e.preventDefault();
    const { email, password } = values;
    dispatch(signin(email, password));
  };

  let word;
  if (passwordVisible) {
    word = "Hide";
  } else {
    word = "Show";
  }

  return (
    <div className='signup-wrapper'>
      {loading && <div id='overlay'></div>}
      <SidePage />
      {loading && (
        <div className='spinner'>
          <Oval height='40' width='40' color='red' />
        </div>
      )}
      <form onSubmit={submitHandler}>
        <span className='cancel-btn' onClick={() => goToHome()}>
          X
        </span>

        <h3>Login</h3>
        {error && <MessageBox error={error} />}
        <div class='form-group'>
          <label htmlFor='email'>Email</label>
          <br />
          <input
            type='email'
            className='form-control'
            name='email'
            onChange={handleInputChange}
            value={values.email}
            id='email'
            placeholder='user@example.com'
          />
        </div>
        <div class='form-group'>
          <label htmlFor='type'>Password</label>
          <br />

          <input
            type={passwordVisible ? "text" : "password"}
            className='form-control'
            name='password'
            onChange={handleInputChange}
            value={values.password}
            id='password'
            placeholder='********'
          />
          <span onClick={() => togglePasswordVisibility()} className='show-btn'>
            {word}
          </span>
        </div>
        <span className='forgot-pword'>Forgot password?</span>
        <button type='submit' className='create-btn'>
          Login to your account
        </button>
        <p className='have-acc-text'>
          Don’t own an account?
          <span onClick={() => goToRegister()} className='login-link'>
            Sign Up
          </span>
        </p>
      </form>
    </div>
  );
}
