import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { loginUserThunk } from "../redux/user/user.action";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch(); // Get the dispatch function
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      await dispatch(loginUserThunk({ username, password })); // Dispatch the login thunk action
      setPassword("");
      setUsername("");
      navigate("/user");
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
        onClick={handleLogin} // Call the handleLogin function
        style={{ marginBottom: "1rem" }}
      >
        Submit
      </Button>
    </div>
  );
};

export default Login;
