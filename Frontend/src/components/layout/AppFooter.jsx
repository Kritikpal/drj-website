import React from "react";
import "../../styles/appFooter.css";
import { Link } from "react-router-dom";
import {
  Avatar,
  Box,
  ImageList,
  ImageListItem,
  Typography,
  useTheme,
} from "@mui/material";
import { Col, Row } from "react-bootstrap";
import GradiantBox from "../Elements/GradiantBox";
import AppCard from "../Elements/AppCard";
import { mainMenu } from "../../menus/mainMenu";
const menuHeadderStyle = {
  marginBottom: "1rem",
  fontSize: {
    xs: "1.2rem",
    sm: "1.2rem",
    md: "1.5rem",
    lg: "1.6rem",
  },
  lineHeight: "1",
  fontWeight: "bold",
};
function AppFooter({
  phoneNumber = "1213456543",
  address = "Badambadi Busstand,Cuttack,Odisha,753422",
  email = "dibyaranjan@gmail.com",
}) {
  return (
    <div>
      <GradiantBox>
        <Box>
          <Box sx={{ px: { xs: "1rem", sm: "1rem", md: "2rem" } }}>
            <Row className="g-3">
              <Col sm={12} lg={4}>
                <FooterProfileCard />
              </Col>
              <Col sm={12} lg={4}>
                <ProfileCard />
              </Col>
              <Col sm={12} lg={4}>
                <Tweets />
                <FooterImageGridSection />
              </Col>
            </Row>
          </Box>
          <Coppyright />
        </Box>
      </GradiantBox>
      <BackToTop />
    </div>
  );
}

function FooterProfileCard({}) {
  return (
    <AppCard
      sx={{
        width: {
          xs: "80%",
          sm: "80%",
          md: "70%",
          lg: "70%",
        },
        margin: "auto",
      }}
    >
      <Box>
        <Link to="/" className="">
          <img
            src="images/introSmall.jpg"
            alt="footer_logo"
            className="img-fluid"
          />
        </Link>
      </Box>
      <Box
        sx={{
          p: { xs: "1rem", sm: "1rem", md: "2rem", lg: "2rem" },
        }}
      >
        <Typography>
          Reference site about Lorem Ipsum, giving information on its origins,
          as well as a random Lipsum generator.
        </Typography>
        <SocialLinks />
      </Box>
    </AppCard>
  );
}

function SocialLinks({}) {
  return (
    <div>
      <Typography>Follow us</Typography>

      <ul
        style={{
          display: "flex",
          listStyle: "none",
          marginTop: "1rem",
          padding: "0",
          justifyContent: "space-between",
        }}
      >
        <li style={{ listStyle: "none" }}>
          <Link className="nav-link">
            <Avatar sx={{ bgcolor: "blue" }}>
              <i className="fa-brands fa-facebook" />
            </Avatar>
          </Link>
        </li>
        <li>
          <Link className="nav-link">
            <Avatar sx={{ bgcolor: "black" }}>
              <i className="fa-brands fa-x" />
            </Avatar>
          </Link>
        </li>
        <li>
          <Link className="nav-link">
            <Avatar sx={{ bgcolor: "pink" }}>
              <i className="fa-brands fa-instagram" />
            </Avatar>
          </Link>
        </li>
      </ul>
    </div>
  );
}

function BackToTop({}) {
  return (
    <div
      onClick={() => {
        window.scrollTo(0, 0);
      }}
      className="back-to-top"
    >
      <button
        className="btn btn-dark"
        title="Back to Top"
        style={{ display: "block" }}
      >
        <i className="fa fa-angle-up" />
      </button>
    </div>
  );
}

function ProfileCard({}) {
  const appCardSx = {
    padding: { xs: "1rem", sm: "1rem", md: "1.5rem", lg: "1.5rem" },
    margin: { xs: "0.5rem", sm: "0.5rem", md: "1rem", lg: "1rem" },
    borderRadius: "10px",
  };
  return (
    <div sx={{ marginTop: { xs: "2rem" } }}>
      <AppCard sx={appCardSx}>
        <Avatar
          sx={{
            color: "black",
            backgroundColor: useTheme().palette.primary.main,
          }}
        >
          <i className="fa-solid fa-map"></i>{" "}
        </Avatar>
        <div>
          <h3>Cuttack Odisha</h3>
          <p>5353 Road Avenue</p>
        </div>
      </AppCard>
      <AppCard sx={appCardSx}>
        <Avatar sx={{ backgroundColor: useTheme().palette.primary.main }}>
          <i className="fa fa-volume-control-phone" aria-hidden="true" />
        </Avatar>
        <div className="">
          <h3>95 711 9 5353</h3>
          <p>Give us a call</p>
        </div>
      </AppCard>
      <AppCard sx={appCardSx}>
        <Avatar
          sx={{
            color: "black",
            backgroundColor: useTheme().palette.primary.main,
          }}
        >
          <i class="fa-brands fa-google" aria-hidden="true"></i>
        </Avatar>
        <div className="">
          <h3>95 711 9 5353</h3>
          <p>Give us a call</p>
        </div>
      </AppCard>
    </div>
  );
}

function Tweets({}) {
  const tweets = [
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere unde omnis veniam porro excepturi.",
      image: "images/tweet1.png",
    },
    {
      id: 2,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere unde omnis veniam porro excepturi.",
      image: "images/tweet2.png",
    },
    {
      id: 3,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere unde omnis veniam porro excepturi.",
      image: "images/tweet3.png",
    },
  ];
  return (
    <Box>
      <Typography sx={menuHeadderStyle}>Tweets</Typography>
      <ul className="list-unstyled ">
        {tweets.map((tweet) => (
          <li key={tweet.id}>
            <Box sx={{ marginTop: "1rem" }}>
              <Typography variant="body" sx={{ fontStyle: "italic" }}>
                {tweet.text}
              </Typography>
            </Box>
          </li>
        ))}
      </ul>
    </Box>
  );
}
function FooterLinks({}) {
  return (
    <Box>
      <ul className="list-unstyled d-flex">
        {mainMenu.map((link) => (
          <li key={link.title}>
            <Link
              style={{ marginRight: "1rem" }}
              to={link.link}
              className="nav-link"
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </Box>
  );
}

function FooterImageGridSection() {
  const imageData = [
    "images/aboutCamera1.jpg",
    "images/aboutCamera2.jpg",
    "images/aboutCamera3.jpg",
    "images/aboutCamera1.jpg",
  ];
  return (
    <Box>
      <Typography sx={menuHeadderStyle}>Instagram</Typography>
      <ImageList cols={2} gap={10}>
        {imageData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item}`}
              style={{ aspectRatio: "1/1", margin: "auto" }}
              alt={item}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

function Coppyright({}) {
  return (
    <AppCard
      sx={{
        padding: "1rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
          justifyContent: "space-between",
        }}
      >
        <Typography>Copyright © 2019, All Right Reserved Seobin</Typography>
        <FooterLinks />
      </Box>
    </AppCard>
  );
}

export default AppFooter;
