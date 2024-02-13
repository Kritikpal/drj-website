import React from "react";
import "./aboutUsBanner.css";
import { Box, Typography } from "@mui/material";

function AboutUsBanner({ title = "", description = "" }) {
  return (
    <Box
      sx={{
        backgroundImage: "url('images/slider1X.jpg')",
        textAlign: "center",
        color: "#fff",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "scroll",
        backgroundPosition: "center center",
        WebkitBackgroundSize: "cover",
        MozBackgroundSize: "cover",
        OBackgroundSize: "cover",
        backgroundSize: "cover",
      }}
    >
      <Box
        sx={{
          padding: {
            xs: "3rem",
            sm: "5rem",
            md: "8rem",
            lg: "10rem",
            xl: "10rem",
          },
        }}
      >
        <Typography
          sx={{
            fontFamily: '"Lobster", cursive',
            fontSize: { xs: "50px", sm: "30px", md: "75px", lg: "75px" },
            fontWeight: 700,
            lineHeight: { xs: "50px", sm: "50px", md: "75px", lg: "75px" },
            marginBottom: { xs: "30px", sm: "30px", md: "30px", lg: "30px" },
            color: "#fff",
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontFamily: '"Libre Baskerville", serif',
            fontSize: {
              xs: "1.5rem",
              sm: "1.5rem",
              md: "2rem",
              lg: "2.5rem",
            },
            fontWeight: 300,
            lineHeight: "30px",
            marginBottom: "50px",
            color: "#fff",
          }}
        >
          {description}
        </Typography>
        <button
          hidden
          type="button"
          className="btn btn-warning text-dark btn-banner"
        >
          Get started
        </button>
      </Box>
    </Box>
  );
}

export default AboutUsBanner;
