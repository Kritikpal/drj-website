import React from "react";
import "./apploader.css";
import { Box } from "@mui/material";

function AppLoader() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        top: "0",
        backgroundColor: "black",
        position: "absolute",
        display: "flex",
        zIndex: "10000000",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box className="custom-loader"></Box>
    </Box>
  );
}

export default AppLoader;
