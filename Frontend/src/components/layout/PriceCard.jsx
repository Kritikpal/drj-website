import { Box, Paper } from "@mui/material";
import React from "react";
import AppCard, { AppCardGreen } from "../Elements/AppCard";
import "../../styles/plans.css";

function PriceCard({
  className = "basic",
  title = "",
  description = "",
  price = "",
  features = [],
}) {
  return (
    <AppCardGreen
      variant={
        className === "basic" ? "blue" : className === "pro" ? "yellow" : "red"
      }
      className={className}
      sx={{
        borderRadius: "10px",
        p: { xs: "1rem", sm: "1rem", md: "2rem" },
        m: { xs: "1rem", sm: "1rem", md: "2rem" },
      }}
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
    </AppCardGreen>
  );
}

export default PriceCard;
