import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Button } from "@mui/material";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleLogout = async () => {
      try {
        // Simulating a logout request with a delay
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log("Logout successful");

        // Redirect to home page after logout
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    };

    handleLogout();
  }, []);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography variant="h1">Logging out</Typography>
      <Typography variant="body1">Logout successful</Typography>
      <Button
        variant="contained"
        onClick={() => navigate("/")}
        style={{ marginTop: "1rem" }}
      >
        Go Back Home
      </Button>
    </div>
  );
};

export default Logout;
