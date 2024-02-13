import { Box, Typography } from "@mui/material";
import React from "react";
import "./card.css";

function AppCard({ children = <></>, sx = {}, className = "", style = {} }) {
  let app_card_sx = {
    ...sx,
    border: "1px solid rgba(255, 255, 255, 0.125)",
    overflow: "hidden",
  };
  return (
    <Box
      className={"app-card" + " " + className}
      style={style}
      sx={app_card_sx}
    >
      <Box>{children}</Box>
    </Box>
  );
}

export default AppCard;
