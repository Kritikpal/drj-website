import React from "react";
import { Row, Col } from "react-bootstrap";
import { Box, Paper, Typography } from "@mui/material";
import AppCard from "../../components/Elements/AppCard";
import GradiantBox from "../../components/Elements/GradiantBox.jsx";
import AppGlassMorphButton from "../../components/Elements/AppGlassMorphButton.jsx";

function AboutTopContent() {
  return (
    <Box
      sx={{ padding: { xs: "1rem", sm: "1rem", md: "1.5rem", lg: "1.5rem" } }}
    >
      <AppCard>
        <Content />
      </AppCard>
    </Box>
  );
}

function Content() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column-reverse", md: "row" },
      }}
    >
      <Box sx={{ width: { xs: "100%", md: "70%" } }}>
        <Box
          sx={{
            padding: { xs: "1rem", sm: "1rem", md: "2rem", lg: "3rem" },
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: "1.5rem",
                sm: "1.5rem",
                md: "2rem",
                lg: "2.5rem",
              },
            }}
          >
            About Me
          </Typography>
          <Typography
            sx={{
              fontSize: {
                xs: "2rem",
                sm: "2.5rem",
                md: "3rem",
                lg: "3.5rem",
              },
              lineHeight: "1",
            }}
            className="app-text-color"
          >
            We're the leading photo studio on the country
          </Typography>
          <Typography
            sx={{
              fontSize: {
                xs: "0.8rem",
                sm: "0.8rem",
                md: "1rem",
                lg: "1rem",
              },
              marginTop: {
                xs: "1rem",
                sm: "1rem",
                md: "2rem",
                lg: "2rem",
              },
            }}
          >
            Hello! I'm Dibya Ranjan Jena, a professional photographer based in
            Cuttack. I had a full-time job during the week and spent my weekends
            getting as far away from the city as possible. I became interested
            in landscape photography about five years ago when I moved to
            Cuttack.
          </Typography>
          <ul>
            {[1, 2].map((item, index) => (
              <li>I have been a photographer for 12 years.</li>
            ))}
          </ul>
          <Box>
            <AppGlassMorphButton>About Me</AppGlassMorphButton>
          </Box>
        </Box>
      </Box>
      <Box sx={{ width: { xs: "100%", md: "30%" } }}>
        <Paper>
          <img
            src="images/aboutImage.jpg"
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              objectPosition: "center",
            }}
          />
        </Paper>
      </Box>
    </Box>
  );
}

export default AboutTopContent;
