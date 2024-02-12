import { Box, Typography } from "@mui/material";
import React from "react";

function AppCard({ children = <></>, sx = {} }) {
  let app_card_sx = {
    ...sx,
    backdropFilter: "blur(12px) saturate(159%)",
    WebkitBackdropFilter: "blur(12px) saturate(159%)",
    backgroundColor: "rgba(17, 25, 40, 0.45)",
    border: "1px solid rgba(255, 255, 255, 0.125)",
    overflow: "hidden",
  };
  return (
    <Box>
      <Box sx={app_card_sx}>
        <Box>{children}</Box>
      </Box>
    </Box>
  );
}

export default AppCard;
