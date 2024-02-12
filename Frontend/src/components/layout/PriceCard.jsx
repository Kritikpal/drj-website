import { Box, Paper } from "@mui/material";
import React from "react";

function PriceCard({
  className = "basic",
  title = "",
  description = "",
  price = "",
  features = [],
}) {
  return (
    <Paper
      variant="elevation"
      elevation={3}
      className={"price-card " + className}
      sx={{ borderRadius: "10px" }}
    >
      <Box className="price-card-body">
        <Box className="price-card-header">
          <div className="price-card-header-title">
            <h2>{title}</h2>
          </div>
          <div className="card-desc">{description}</div>
        </Box>
        <Box className="price">
          ${price}
          <span>/ month</span>
        </Box>
        <ul className="featureList">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </Box>

      <button className="select-price-button">Get Started</button>
    </Paper>
  );
}

export default PriceCard;
