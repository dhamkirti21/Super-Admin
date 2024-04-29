"use client"
import React, { useState } from "react";
import { FaRegCopy } from "react-icons/fa6";
import "./login.css";
import Image from "next/image";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const insertForm = () => {
    setEmail("admin@admin.com");
    setPassword("123456");
  };
  return (
    <div className="main">
      <div className="container_left">
        <Image src={"/images/loginbg.jpg"} alt="login" width={100} height={100} style={{
          objectFit: "cover",
          width: "100%",
          height: "100%",

        }} />
      </div>
      <div className="container_right">
        <div className="container_right_item">
          <h2>Admin Signin</h2>
          <p>Welcome back login to your panel.</p>
        </div>

        <div className="container_right_item">
          <label>Your Email</label>
          <input
            type="email"
            placeholder="example@example.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div className="container_right_item">
          <label>Your Password</label>
          <input
            type="password"
            placeholder="6+ characters required"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <div className="container_right_item_two">
          <div
            style={{
              position: "relative",
              width: "100%",
              display: "flex",
              gap: "5px",
              alignItems: "center",
            }}
          >
            <input type="checkbox" placeholder="remember me" id="remember" />
            <label htmlFor="remember">remember me</label>
          </div>
          <div style={{ position: "relative", width: "fit" }}>
            <p>forgot password??</p>
          </div>
        </div>

        <div className="container_right_item">
          <button>Login</button>
        </div>

        <div className="container_right_item_two">
          <div
            style={{
              position: "relative",
              width: "100%",
              display: "flex",
              gap: "2px",
              flexDirection: "column",
            }}
          >
            <label
              style={{ position: "relative", width: "100%", display: "flex" }}
            >
              <b>Email:</b> <p>admin@admin.com</p>
            </label>
            <label>
              <b>Password:</b> 123456
            </label>
          </div>
          <div style={{ position: "relative", width: "fit" }}>
            <button onClick={insertForm}>
              <FaRegCopy />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
