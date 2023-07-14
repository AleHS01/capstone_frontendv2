import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/login",
        {
          username: username,
          password: password,
        },
        {
          withCredentials: true,
        }
      );
      console.log("Response: ", response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Login</h1>
      <Link to="/signup">Sign up</Link>
      <Link to="/">Home</Link>
      <TextField
        label="Username"
        variant="outlined"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ marginBottom: "1rem" }}
      />
      <TextField
        label="Password"
        variant="outlined"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ marginBottom: "1rem" }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={login}
        style={{ marginBottom: "1rem" }}
      >
        Submit
      </Button>
    </div>
  );
};

export default Login;
