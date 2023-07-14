import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Typography, Button } from "@mui/material";
import axios from "axios";

const User = () => {
  const [user, setUser] = useState(null);

  const getUser = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/user", {
        withCredentials: true,
      });
      setUser(response.data);
      console.log("Response: ", response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Typography variant="h1">User Goes Here</Typography>
      <Link to="/">Go Home</Link>
      <Button
        variant="contained"
        onClick={getUser}
        style={{ marginTop: "1rem" }}
      >
        Get User Data
      </Button>
      {user ? (
        <div>
          <Typography variant="h1">Welcome {user.username}!!!</Typography>
          <Typography variant="h2">Email: {user.email}</Typography>
        </div>
      ) : (
        <Typography variant="body1">Nothing to see here</Typography>
      )}
    </div>
  );
};

export default User;
