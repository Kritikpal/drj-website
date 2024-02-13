import { Box, ImageList, ImageListItem, Typography } from "@mui/material";
import React from "react";
import { portfolioImages } from "../../api/portfolioImages";

function PortfolioSection() {
  return (
    <Box
      sx={{
        padding: {
          xs: "1rem",
          sm: "1rem",
          md: "2rem",
          lg: "3rem",
        },
        margin: "0 auto",
      }}
      className="bg-secondary text-black"
    >
      <Typography variant="h3" className="text-center">
        My Portfolio
      </Typography>
      <ImageList gap={10} variant="masonry" cols={3}>
        {portfolioImages.map((image) => (
          <ImageListItem
            rows={image.rows}
            cols={image.cols}
            className="portfolio-image-section"
            key={image.src}
          >
            <img alt={image.src} src={image.src} loading="lazy" />
            <div className="image-overlay d-flex justify-content-center align-items-center">
              <i className="fas fa-images fa-lg text-white"></i>
            </div>
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

export default PortfolioSection;
