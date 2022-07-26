import { CircularProgress } from "@mui/material";
import React, { useContext, useRef } from "react";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import "./Login.css";

const Login = () => {
  const email = useRef();
  const password = useRef();

  const { user, isFetching, error, dispatch } = useContext(AuthContext);
  const handleLoginForm = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  console.log(user);
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">My Book</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on My Book.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleLoginForm}>
            <input
              required
              ref={email}
              placeholder="Email"
              type="email"
              className="loginInput"
            />
            <input
              required
              minLength="6"
              ref={password}
              placeholder="Password"
              type="password"
              className="loginInput"
            />
            <button className="loginButton" type="submit" disabled={isFetching}>
              {isFetching ? <CircularProgress /> : "Log In"}
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              {isFetching ? <CircularProgress /> : "Create a New Account"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
