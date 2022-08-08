import { Input, Button } from "antd";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  addUserData,
  addUserEmail,
  changeTheStatus,
  verifyUser,
} from "../redux/features/UserSlice";
import "../styles/Login.css";
function Login() {
  const dispatch = useDispatch();
  const { userDetails, loginStatus, errorMessage } = useSelector((state) => ({
    ...state.user,
  }));
  const navigate = useNavigate();

  const handleChange = (e) => {
    dispatch(addUserData({ [e.target.name]: e.target.value }));
  };
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(
      verifyUser({
        userName: userDetails?.userName,
        password: userDetails?.password,
      })
    );
    if (loginStatus) {
      navigate("/home");
    } else {
      alert(errorMessage);
    }
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Login Form</h1>
      <form className="login-form">
        <Input
          name="userName"
          value={userDetails?.userName}
          onChange={handleChange}
        />
        <Input
          name="password"
          value={userDetails?.password}
          onChange={handleChange}
        />
        <Button type="primary" onClick={handleLogin}>
          Login
        </Button>
      </form>
    </div>
  );
}

export default Login;
