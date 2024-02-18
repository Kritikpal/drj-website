import { Box, Button } from "@mui/material";
import React from "react";

function AppGlassMorphButton({ children = <></>, sx = {} }) {
  const app_glass_morph_button_style = {
    ...sx,
    padding: "16px 32px",
    color: "white",
    backgroundColor: "transparent",
    border: "1px solid rgba(99, 116, 152, 0.4)",
    fontFamily: '"Raleway", sans-serif',
    textTransform: "uppercase",
    letterSpacing: "2px",
    fontWeight: 600,
    marginTop: "32px",
    cursor: "pointer",
    boxShadow: "inset 0px 0px 0px rgba(99, 116, 152, 0.2)",
    transition: "all 0.4s ease",
    "&:hover": {
      border: "1px solid rgba(99, 116, 152, 0.1)",
      boxShadow: "inset 0px -80px 0px rgba(99, 116, 152, 0.1)",
      backgroundColor: "var(--app-highlight-color)",
      color: "black",
      transform: "translateY(-5px)",
    },
  };
  return (
    <Button variant="outlined" sx={app_glass_morph_button_style}>
      {children}
    </Button>
  );
}

export default AppGlassMorphButton;
