import React from "react";
import "./aboutUsBanner.css";
import { Box } from "@mui/material";

function AboutUsBanner({ title = "", description = "" }) {
  return (
    <Box
      sx={{ backgroundImage: "url('images/slider1X.jpg')" }}
      className="banner"
    >
      <div className="container">
        <div className="banner-text">
          <div className="banner-heading">{title}</div>
          <div className="banner-sub-heading">{description}</div>
          <button
            hidden
            type="button"
            className="btn btn-warning text-dark btn-banner"
          >
            Get started
          </button>
        </div>
      </div>
    </Box>
  );
}

export default AboutUsBanner;
