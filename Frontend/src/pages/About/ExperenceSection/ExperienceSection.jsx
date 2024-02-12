import React from "react";
import { Col, Row } from "react-bootstrap";
import { Box, Divider, List, Paper, Stack, Typography } from "@mui/material";
import { experence } from "../../../api/experence";

function ExperienceSection() {
  return (
    <Box className="bg-dark text-light">
      <Row>
        <Col lg={6} md={6} sm={12}>
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
            <Typography
              sx={{
                fontSize: {
                  xs: "1.5rem",
                  sm: "1.5rem",
                  md: "2rem",
                  lg: "2rem",
                },
              }}
            >
              WHAT’S MY GEAR?
            </Typography>
            <Typography
              className="app-text-color"
              sx={{
                fontSize: {
                  xs: "2.5rem",
                  sm: "3rem",
                  md: "3rem",
                  lg: "3.5rem",
                },
                lineHeight: 1,
              }}
            >
              I have the experience to make of your photo
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  xs: "1rem",
                  sm: "1.5rem",
                  md: "2rem",
                  lg: "2rem",
                },
                lineHeight: 1.2,
                marginTop: "2rem",
              }}
            >
              Hello! I became interested in landscape photography about five
              years ago when I moved to Cuttack. I had a full-time job during
              the week and spent my weekends getting as far away from the city
              as possible.
            </Typography>
            <Box sx={{ marginTop: "2rem" }}>
              {experence.map((exp) => {
                return (
                  <Box key={exp.id} sx={{ marginTop: "2rem" }}>
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "1rem",
                          sm: "1rem",
                          md: "1.5rem",
                          lg: "1.5rem",
                        },
                      }}
                    >
                      {exp.company}
                    </Typography>
                    <Stack
                      direction={"row"}
                      alignItems={"center"}
                      justifyContent={"space-between"}
                    >
                      <Typography
                        sx={{
                          fontSize: {
                            xs: "2rem",
                            sm: "2rem",
                            md: "2.5rem",
                            lg: "2.5rem",
                          },
                        }}
                      >
                        {exp.title}
                      </Typography>
                      <Typography
                        className="app-text-color"
                        sx={{
                          fontSize: {
                            xs: "1rem",
                            sm: "1rem",
                            md: "1.5rem",
                            lg: "1.5rem",
                          },
                        }}
                      >
                        {exp.duration}
                      </Typography>
                    </Stack>
                    <Divider
                      sx={{ backgroundColor: "white", marginTop: "1rem" }}
                      orientation="horizontal"
                    />
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Col>
        <Col lg={6} md={6} sm={12}>
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
            <Paper
              sx={{
                width: {
                  xs: "100%",
                  sm: "100%",
                  md: "100%",
                  lg: "100%",
                },
                borderRadius: "3rem",
                overflow: "hidden",
              }}
              elevation={3}
            >
              <img
                src="images/experience-imgae.jpg"
                alt=""
                style={{
                  width: "100%",
                  aspectRatio: "1 / 1",
                }}
              />
            </Paper>
          </Box>
        </Col>
      </Row>
    </Box>
  );
}

export default ExperienceSection;
