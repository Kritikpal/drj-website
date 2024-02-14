import { Box } from "@mui/material";
import React from "react";
import "./card.css";

function MainBox({ children = <></>, sx = {}, className = "", style = {} }) {
  let app_gradient_sx = {
    ...sx,
    backgroundColor: "#021736",
    backgroundImage:
      "radial-gradient(at 47% 33%,hsl(220.73, 85%, 49%)0, transparent 59%), radial-gradient(at 82% 65%,hsl(220.53, 91%, 28.000000000000004%) 0,transparent 55%)",
  };
  return (
    <Box>
      <Box className={className} style={style} sx={app_gradient_sx}>
        {children}
      </Box>
    </Box>
  );
}

export default MainBox;
