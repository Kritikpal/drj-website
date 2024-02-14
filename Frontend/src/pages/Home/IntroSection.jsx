import { Box, Button, Card } from "@mui/material";
import React from "react";
import { Row, Col } from "react-bootstrap";
import AppGlassMorphButton from "../../components/Elements/AppGlassMorphButton";
import AppCard from "../../components/Elements/AppCard";

function IntroSection({ className }) {
  return (
    <AppCard
      sx={{
        margin: { xs: "1rem", sm: "1rem", md: "2rem", lg: "2rem" },
      }}
      className={className}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
        }}
      >
        <Box sx={{ width: { xs: "100%", lg: "60%" } }}>
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
              <AppGlassMorphButton sx={{ mb: "1rem" }}>
                Read More
              </AppGlassMorphButton>
            </div>
          </div>
        </Box>
        <Box sx={{ width: { xs: "100%", lg: "40%" }, height: "100%" }}>
          <img
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
            src="images/introSmall.jpg"
            alt="Photographer"
          />
        </Box>
      </Box>
    </AppCard>
  );
}

export default IntroSection;
