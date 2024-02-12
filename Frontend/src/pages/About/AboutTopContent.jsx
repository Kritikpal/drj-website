import React from "react";
import { Row, Col } from "react-bootstrap";
import { Box, Paper, Typography } from "@mui/material";
import AppCard from "../../components/Elements/AppCard";
import GradiantBox from "../../components/Elements/GradiantBox.jsx";
import AppGlassMorphButton from "../../components/Elements/AppGlassMorphButton.jsx";

function AboutTopContent() {
  return (
    <GradiantBox className="add-bg-dark-gradient">
      <Row>
        <Col lg={6} sm={12}>
          <Box
            sx={{ padding: { xs: "1rem", sm: "1rem", md: "2rem", lg: "3rem" } }}
            className="w-100 h-100 d-flex flex-column justify-content-center"
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
                  lg: "3rem",
                },
              }}
            >
              Hello! I'm Dibya Ranjan Jena, a professional photographer based in
              Cuttack. I had a full-time job during the week and spent my
              weekends getting as far away from the city as possible. I became
              interested in landscape photography about five years ago when I
              moved to Cuttack.
              <ul>
                {[1, 2, 3, 4].map((item, index) => (
                  <li>I have been a photographer for 12 years.</li>
                ))}
              </ul>
            </Typography>
            <Box
              sx={{
                marginTop: {
                  xs: "1rem",
                  sm: "1rem",
                  md: "2rem",
                  lg: "3rem",
                },
              }}
            >
              <AppGlassMorphButton>About Me</AppGlassMorphButton>
            </Box>
          </Box>
        </Col>
        <Col lg={6} sm={12}>
          <Box
            sx={{
              padding: {
                xs: "1rem",
                sm: "1rem",
                md: "2rem",
                lg: "3rem",
              },
            }}
          >
            <div className="d-flex justify-content-center w-100">
              <Paper elevation={3}>
                <img
                  src="images/aboutImage.jpg"
                  alt=""
                  style={{
                    width: "100%",
                    aspectRatio: "1 / 1",
                  }}
                />
              </Paper>
            </div>
          </Box>
        </Col>
      </Row>
    </GradiantBox>
  );
}

export default AboutTopContent;
