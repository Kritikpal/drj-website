import { Box, Button, Card } from "@mui/material";
import React from "react";
import { Row, Col } from "react-bootstrap";
import AppGlassMorphButton from "../../components/Elements/AppGlassMorphButton";

function IntroSection({ className }) {
  return (
    <Box sx={{ padding: { md: 2, lg: 3 } }} className={className}>
      <Row>
        <Col xs={12} md={6}>
          <div className="mt-5 mx-auto" style={{ maxWidth: "80%" }}>
            <h1 className="text-center text-md-start mb-4">
              Hello, I'm Dibya Ranjan Jena, a professional photographer based in
              Cuttack
            </h1>
            <p>
              Hello! I became interested in landscape photography about five
              years ago when I moved to Cuttack. I had a full-time job during
              the week and spent my weekends getting as far away from the city
              as possible.
            </p>
            <ul style={{ listStyle: "none" }}>
              <li>
                <i className="fa-solid fa-briefcase me-3"></i>12 Years of
                Experience
              </li>
              <li>
                <i className="fa-solid fa-phone me-3"></i>Phone: +105 773 321
                7771
              </li>
              <li>
                <i className="fa-solid fa-at me-3"></i>Email: demo@example.com
              </li>
            </ul>
            <div className="m-1">
              <AppGlassMorphButton>Read More</AppGlassMorphButton>
            </div>
          </div>
        </Col>
        <Col xs={12} md={6} className="mt-4 mt-md-0">
          <div className="d-flex justify-content-center">
            <Card style={{ width: "80%", maxWidth: "400px" }} className="mb-3">
              <img
                style={{ width: "100%", height: "auto" }}
                src="images/introSmall.jpg"
                alt="Photographer"
              />
            </Card>
          </div>
        </Col>
      </Row>
    </Box>
  );
}

export default IntroSection;
