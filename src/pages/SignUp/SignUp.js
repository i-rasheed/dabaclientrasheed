import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../actions/userActions";
import SidePage from "../../components/SidePage/SidePage";
import MessageBox from "../../components/MessageBox/MessageBox";
import { useNavigate } from "react-router-dom";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Oval } from "react-loader-spinner";

import "../SignUp/SignUp.css";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

export default function SignUp() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [values, setValues] = useState(initialValues);
  const [msg, setMsg] = useState();
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

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error } = userRegister;
  console.log(loading);
  const submitHandler = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password } = values;
    if (!firstName || !lastName || !email || !password) {
      return setMsg("Kindly fill all required fields before proceeding");
    }
    dispatch(register(firstName, lastName, email, password));
  };

  const goToLogin = () => {
    navigate("/login");
  };

  const goToHome = () => {
    navigate("/");
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

        <h3>Sign Up</h3>

        <span>{msg && <MessageBox error={msg} />}</span>
        <span>{error && <MessageBox error={error} />}</span>
        <div className='form-group'>
          <label htmlFor='firstName'>First Name</label>
          <br />
          <input
            type='text'
            className='form-control'
            name='firstName'
            onChange={handleInputChange}
            value={values.firstName}
            id='firstName'
            placeholder='Enter your first name'
          />
        </div>
        <div class='form-group'>
          <label htmlFor='lastName'>Last Name</label>
          <br />
          <input
            type='text'
            className='form-control'
            name='lastName'
            onChange={handleInputChange}
            value={values.lastName}
            id='lastName'
            placeholder='Enter last Name'
          />
        </div>
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
        <button type='submit' className='create-btn'>
          Create account
        </button>
        <p className='have-acc-text'>
          Already own an account?
          <span onClick={() => goToLogin()} className='login-link'>
            Log in
          </span>
        </p>
      </form>
    </div>
  );
}
