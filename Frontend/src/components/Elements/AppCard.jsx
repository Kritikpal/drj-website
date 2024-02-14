import { Box } from "@mui/material";
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

export function AppCardGreen({
  children = <></>,
  sx = {},
  className = "",
  variant = "yellow",
}) {
  let app_card_sx = {
    ...sx,
    border: "1px solid rgba(255, 255, 255, 0.125)",
  };
  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      {variant === "yellow" && (
        <>
          <div className="left-yellow"></div>
          <div className="right-yellow"></div>
        </>
      )}
      {variant === "blue" && (
        <>
          <div className="left-blue"></div>
          <div className="right-blue"></div>
        </>
      )}
      {variant === "red" && (
        <>
          <div className="left-red"></div>
          <div className="right-red"></div>
        </>
      )}
      <Box
        sx={{
          ...app_card_sx,
        }}
        className={"app-card" + " " + className}
      >
        {children}
      </Box>
    </Box>
  );
}

export default AppCard;
