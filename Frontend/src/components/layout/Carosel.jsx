import Carousel from "react-bootstrap/Carousel";
import { Button, Typography } from "@mui/material";
import { Col, Row } from "react-bootstrap";
import "../../styles/carousel.css";
function IndividualIntervalsExample({ images }) {
  const CarouselImage = ({ image }) => {
    return (
      <>
        <div
          className="d-flex flex-column justify-content-center align-items-start w-100 carousel-image"
          style={{
            background: `url(${image})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="carousel-content">
            <Typography variant="h3" className="text-white ">
              DRJ PHOTOGRAPHY
            </Typography>
            <Typography variant="h6" className="text-white">
              Hello We are became interested in landscape photography about five
              years ago when I moved to United States
            </Typography>
            <Button
              className="m-1 rounded-4"
              variant="contained"
              color="success"
            >
              Get started
            </Button>
            <Button
              size="large"
              className="m-1 rounded-4"
              variant="outlined"
              color="success"
            >
              Contact Me
            </Button>
          </div>
        </div>
      </>
    );
  };
  return (
    <Carousel fade controls={false}>
      {images.map((image) => (
        <Carousel.Item key={image} interval={5000}>
          <CarouselImage image={image} />
          <Carousel.Caption className="mt-2"></Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default IndividualIntervalsExample;
