import React from "react";
import { Col, Row } from "react-bootstrap";
import "../../styles/shapes.css";
import { Box, Typography } from "@mui/material";
function DeviceDetails() {
  return (
    <Box
      sx={{ padding: { xs: "1rem", sm: "1rem", md: "2rem", lg: "3rem" } }}
      bgcolor={"gray"}
    >
      <Row className="align-items-center">
        <Col lg={6} md={6} sm={12}>
          <div className="d-flex flex-row justify-content-center align-items-center">
            <div className="cilender">
              <img
                style={{ objectFit: "cover", objectPosition: "center" }}
                alt=""
                height={"100%"}
                width={"100%"}
                src="images/aboutCamera1.jpg"
              />
            </div>
            <div className="mx-2">
              <div className="cilender-bottom-right">
                <img
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  alt=""
                  height={"100%"}
                  width={"100%"}
                  src="images/aboutCamera2.jpg"
                />
              </div>
              <div className="cilender-top-right mt-2">
                <img
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  alt=""
                  height={"100%"}
                  width={"100%"}
                  src="images/aboutCamera3.jpg"
                />
              </div>
            </div>
          </div>
        </Col>
        <Col lg={6} md={6} sm={12}>
          <Typography
            // variant="h6"
            sx={{
              fontWeight: "bold",
              fontSize: {
                xs: "1.5rem",
                sm: "1.5rem",
                md: "2rem",
                lg: "2.5rem",
              },
            }}
            className="mt-5"
          >
            WHAT’S MY GEAR?
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              fontSize: {
                xs: "2rem",
                sm: "2.5rem",
                md: "3rem",
                lg: "3.5rem",
              },
            }}
            className="mt-3"
          >
            I have the experience to make of your photo.
          </Typography>
          <Row>
            <Col>
              <ul className="accessories-list">
                <li>
                  <i className="fa-solid fa-camera-retro"></i>Sony ILME-FX30
                </li>
                <li>
                  <i className="fa-solid fa-camera-retro"></i>Alpha 7 IV
                  Full-Frame
                </li>
                <li>
                  <i className="fa-solid fa-camera-retro"></i>Lenavo E Lenses
                  LME-FR7
                </li>
              </ul>
            </Col>
            <Col>
              <ul className="accessories-list">
                <li>
                  <i className="fa-solid fa-camera-retro"></i>Samsung ILME-FR7
                </li>
                <li>
                  <i className="fa-solid fa-camera-retro"></i>Sony Alpha 330
                  DSLR-A330
                </li>
                <li>
                  <i className="fa-solid fa-camera-retro"></i>Sony Wide Angle
                  Lenses
                </li>
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>
    </Box>
  );
}

export default DeviceDetails;
